---
title: "A Reusable Game Board in Unity"
subtitle: "Board Foundation"
author: "Board Foundation  ·  Unity (C#)"
coverTop: "A Reusable"
coverRed: "Game Board"
coverSub: "Number it, draw it, click it — a board foundation you can drop into any grid game."
coverPill: "Board Toolkit"
---

# Part 0 — A Board You Can Reuse

## What this is

A small, **game-agnostic board foundation** for Unity. It gives you four things
every grid board game needs, and nothing game-specific:

- a **numbered grid** — every square is a single number,
- a **converter** between those numbers and world positions,
- a **Board** component that draws itself and reads clicks, and
- a tiny **model** that remembers what sits on each square.

There are no rules here — no moves, no captures, no turns. That's the point:
drop this under checkers, chess, draughts, tic-tac-toe, or your own invention,
and build the rules on top. (The companion *Checkers* workbook is one complete
example built on exactly this foundation.)

## The three small layers

Everything below fits into three tiny layers, each with one job:

```
   VIEW    Board       draws the grid, reads the mouse, places pieces
     |
   MATH    Tiles       tile number  <->  world position
     |
   MODEL   BoardGrid   which tile holds what — the single source of truth
```

The **model** is plain C# (no Unity) and holds the truth; **Tiles** is pure
maths; the **Board** is the only part that touches Unity. Keep them separate and
the foundation stays reusable.

## What you need

- A **2D** Unity project with an **orthographic** camera framed on the origin.
- Optionally a **board sprite** centred at `(0, 0)` — the grid gizmo works even
  without art.
- The **Input System** package (this kit reads the mouse through `Mouse.current`).

All the code goes in one folder, in the `AppTrainers.GameBoard` namespace.

# Part 1 — The Board as Numbers

## Chapter 1 — Every Square Is a Number

**Goal:** understand how we describe a board in code. No code yet — ten minutes
with a pen buys you the whole rest of the kit.

### Idea

An `n × n` board has `n²` squares. Instead of carrying `(row, column)` pairs
around, we give every square a single **number from 1 to n²**, counting
left-to-right, bottom-to-top. On an 8×8 board:

```
row 7 |  57 58 59 60 61 62 63 64
row 6 |  49 50 51 52 53 54 55 56
row 5 |  41 42 43 44 45 46 47 48
row 4 |  33 34 35 36 37 38 39 40
row 3 |  25 26 27 28 29 30 31 32
row 2 |  17 18 19 20 21 22 23 24
row 1 |   9 10 11 12 13 14 15 16
row 0 |   1  2  3  4  5  6  7  8
         ---------------------------
 col     0  1  2  3  4  5  6  7
```

From a tile number you can always recover its **row** and **column** (here
`n = 8`):

```
row    = (tileNumber - 1) / n      // integer division, 0..n-1
column = (tileNumber - 1) % n      // remainder, 0..n-1
```

And neighbours are just arithmetic — which is why numbers beat `(x, y)`:

- one row up / down = **+n / −n**
- one column right / left = **+1 / −1**
- a diagonal = a mix, e.g. up-right = **+n + 1**

Your game decides which neighbours matter (chess rooks use `±1 / ±n`, checkers
uses the diagonals) — but they're all built from these two steps.

### Do it (on paper)

On an 8×8 board (`n = 8`):

1. What **row** and **column** is tile **42**?
2. Which **tile number** is at row 5, column 3?
3. From tile **20**, what's the tile one step **up-and-right**?

### Test it (answers)

1. `(42-1)/8 = 5`, `(42-1)%8 = 1` → **row 5, column 1**.
2. `row*8 + column + 1 = 5*8 + 3 + 1 =` **44**.
3. `20 + 8 + 1 =` **29**.

### Challenge

Tile **8** is on the right edge (column 7). Its "up-and-right" neighbour would
be `8 + 8 + 1 = 17` — but 17 is on the *left* edge (column 0). The number wrapped
around the board. Note it now; any game that uses edge-crossing moves has to
guard against exactly this (a quick `column == n-1` check).

## Chapter 2 — The `Tiles` Class: Numbers and Positions

**Goal:** a pure-maths class that converts a **tile number** into a **world
position** and back, for a board of any size and any tile size.

### Idea

Two languages describe the board: the rules think in **tile numbers**, Unity
thinks in **world positions**. `Tiles` is the translator. It's told two things
by the Board:

- **how many squares per side** (`Board.MatrixGrid`, set in the next chapter), and
- **how big one square is** in world units (`tileSize`).

The board is centred on its origin, so tile centres run from `−(n−1)/2` to
`+(n−1)/2` tiles out from the middle. `Tiles` works in that centred "board
space"; the Board adds its own position afterwards, so the board can sit
anywhere.

### Do it

Create `Tiles.cs`:

```csharp:Tiles.cs
using UnityEngine;

namespace AppTrainers.GameBoard {
    // Converts between a tile number (1..n*n) and a board-space position, for a
    // board of Board.MatrixGrid squares with tiles tileSize world units wide.
    // Pure maths, no state — that's why it's static.
    public static class Tiles {
        public static Vector2 GetTilePosition(int tileNumber, float tileSize) {
            int n = Board.MatrixGrid;
            int row = (tileNumber - 1) / n;
            int column = (tileNumber - 1) % n;

            float half = (n - 1) / 2f;   // 3.5 for an 8x8 board
            return new Vector2((column - half) * tileSize, (row - half) * tileSize);
        }

        public static int GetTileNumber(Vector2 boardSpacePos, float tileSize) {
            int n = Board.MatrixGrid;
            int column = Mathf.FloorToInt(boardSpacePos.x / tileSize) + n / 2;
            int row    = Mathf.FloorToInt(boardSpacePos.y / tileSize) + n / 2;
            return row * n + column + 1;
        }
    }
}
```

**Reading it:** `GetTilePosition` does the Chapter 1 maths, then shifts by `half`
so the board is centred, and scales by `tileSize`. `GetTileNumber` is the
reverse — `FloorToInt` rounds a position *down* to the square it's inside, and
`+ n/2` shifts it back into the `0..n-1` range. `Board.MatrixGrid` is the board's
size; we publish it from the Board next.

### Test it

You can't see it yet, but sanity-check it: on an 8×8 board with `tileSize = 1`,
`GetTilePosition(1, 1)` is row 0, column 0 → `(−3.5, −3.5)`, the bottom-left
square, and `GetTilePosition(64, 1)` is `(3.5, 3.5)`, the top-right. The two far
corners.

### Challenge

Work out `GetTileNumber(new Vector2(-3.4f, -3.4f), 1f)` by hand (with `n = 8`)
and confirm it's **1**.

## Chapter 3 — Draw the Board and Read Clicks

**Goal:** a `Board` component that draws its grid in the Scene view and prints
the tile number of whatever square you click. Your first press-Play.

### Idea

The `Board` is the only Unity-facing piece. It:

- publishes its size as a static `MatrixGrid` (so `Tiles` and the model can read
  it) and knows its **origin**, **tile size**, and half-width;
- converts tile ↔ world with `ToWorld` / `ToTile` (wrapping `Tiles` and adding
  the origin);
- draws the grid with a **gizmo** so you can line real art up with it; and
- reads the mouse via the **Input System** (`Mouse.current`) as a first test.

### Do it

Create `Board.cs`:

```csharp:Board.cs
using UnityEngine;
using UnityEngine.InputSystem;

namespace AppTrainers.GameBoard {
  public class Board : MonoBehaviour {
    [SerializeField] private float tileSize = 1f;   // world units per square
    [SerializeField] private int boardSize = 8;     // squares per side
    [SerializeField] private bool drawGrid = true;  // show the grid gizmo

    // Squares per side, published so Tiles and the model can read it.
    public static int MatrixGrid = 8;
    private void Awake() => MatrixGrid = boardSize;

    // The board's centre in world space — move this object and the whole board
    // follows. Everything positions relative to it.
    public Vector2 Origin => transform.position;
    public float TileSize => tileSize;
    public float HalfSize => MatrixGrid / 2f * tileSize;

    public Vector3 ToWorld(int tileNumber) => (Vector3)(Origin + Tiles.GetTilePosition(tileNumber, tileSize));
    public int ToTile(Vector2 worldPos) => Tiles.GetTileNumber(worldPos - Origin, tileSize);

    public bool IsOnBoard(Vector2 worldPos) {
      Vector2 local = worldPos - Origin;
      return Mathf.Abs(local.x) <= HalfSize && Mathf.Abs(local.y) <= HalfSize;
    }

    // TEMPORARY click test — we replace this with real input in Chapter 5.
    private void Update() {
      if (Mouse.current == null || !Mouse.current.leftButton.wasPressedThisFrame) return;
      Vector3 screen = Mouse.current.position.ReadValue();
      Vector2 world = Camera.main.ScreenToWorldPoint(screen);
      if (!IsOnBoard(world)) return;
      Debug.Log("Clicked tile: " + ToTile(world));
    }

    // Draw the logical grid so you can line real board art up with it.
    private void OnDrawGizmos() {
      if (!drawGrid || tileSize <= 0f) return;
      Vector2 origin = Origin;
      float half = boardSize / 2f * tileSize;
      Gizmos.color = new Color(1f, 0.9f, 0.2f, 0.7f);
      for (int i = 0; i <= boardSize; i++) {
        float offset = -half + i * tileSize;
        Gizmos.DrawLine(origin + new Vector2(offset, -half), origin + new Vector2(offset, half)); // columns
        Gizmos.DrawLine(origin + new Vector2(-half, offset), origin + new Vector2(half, offset)); // rows
      }
    }
  }
}
```

Add the `Board` component to an empty GameObject at `(0,0,0)`, and make sure your
**Main Camera** is **Orthographic** and frames the whole grid.

### Test it

Press **Play**. In the **Scene** view the yellow grid appears; in the **Game**
view, click squares and watch the **Console**:

- bottom-left → **1**, top-right → **64**, one right of bottom-left → **2**.

If you have board art, move it to `(0,0)` and it should sit exactly under the
gizmo grid.

> **You just closed the loop:** a real click became a tile number, through the
> maths from Chapter 2. Every board interaction starts with this one translation.

### Challenge

Also log the row and column (`(tile-1)/MatrixGrid` and `(tile-1)%MatrixGrid`).
Watching them change as you move across the board makes the numbering obvious.

# Part 2 — The Board in Play

## Chapter 4 — The Model: What Sits Where

**Goal:** a plain C# class, `BoardGrid`, that remembers what occupies every
square — the single source of truth, with no Unity in it.

### Idea

The Board *draws*; the model *remembers*. We store one integer per square in a
2-D array: **0 means empty**, and any other number is a piece id. What that id
means is up to your game — a player (1/2), a colour, a piece type — the board
doesn't care. That's what keeps it reusable.

### Do it

Create `BoardGrid.cs`:

```csharp:BoardGrid.cs
namespace AppTrainers.GameBoard {
  // The single source of truth: what sits on each square. 0 = empty; any other
  // int is a piece id your game defines (owner, colour, type — your choice).
  public class BoardGrid {
    private readonly int[,] cells = new int[Board.MatrixGrid, Board.MatrixGrid];

    public void Place(int tileNumber, int pieceId) {
      if (InBounds(tileNumber)) cells[Row(tileNumber), Column(tileNumber)] = pieceId;
    }

    public void Clear(int tileNumber) {
      if (InBounds(tileNumber)) cells[Row(tileNumber), Column(tileNumber)] = 0;
    }

    public void Move(int fromTile, int toTile) {
      int id = Get(fromTile);
      Clear(fromTile);
      if (InBounds(toTile)) cells[Row(toTile), Column(toTile)] = id;
    }

    public int Get(int tileNumber) =>
      InBounds(tileNumber) ? cells[Row(tileNumber), Column(tileNumber)] : 0;

    public bool IsEmpty(int tileNumber) => Get(tileNumber) == 0;

    static bool InBounds(int t) => t > 0 && t <= Board.MatrixGrid * Board.MatrixGrid;
    static int Row(int t)    => (t - 1) / Board.MatrixGrid;
    static int Column(int t) => (t - 1) % Board.MatrixGrid;
  }
}
```

**Reading it:** every method turns a tile number into `[row, column]` with the
Chapter 1 formulas and guards with `InBounds`, so a bad number can never crash
the grid. The array is sized from `Board.MatrixGrid`, so **create the `BoardGrid`
after the Board has set its size** (in `Start`, not a field initializer).

### Test it

Drop a temporary tester on any GameObject and press Play:

```csharp:GridTester.cs
using UnityEngine;

namespace AppTrainers.GameBoard {
  public class GridTester : MonoBehaviour {
    void Start() {
      Board.MatrixGrid = 8;              // normally the Board sets this in Awake
      var grid = new BoardGrid();
      grid.Place(1, 1);
      grid.Move(1, 10);
      Debug.Log($"tile 1 empty? {grid.IsEmpty(1)}");   // True  (moved away)
      Debug.Log($"tile 10 id = {grid.Get(10)}");       // 1
    }
  }
}
```

Delete `GridTester` once you're convinced.

### Challenge

Add a `Count(int pieceId)` method that loops the grid and returns how many
squares hold that id — handy later for "how many pieces does player 1 have left".

## Chapter 5 — Put a Piece on a Tile

**Goal:** click an empty square and a piece appears there — rendered on the
board and recorded in the model. The whole foundation, wired together.

### Idea

Now the three layers cooperate on a click: the **Board** turns the click into a
tile, the **model** checks it's empty and records the piece, and a **Piece**
view is dropped at that tile's world position. This is the exact loop every
board game reuses — your rules just decide *what* is allowed to go where.

### Do it

**1.** A render-only `Piece` — it only knows which tile it's on:

```csharp:Piece.cs
using UnityEngine;

namespace AppTrainers.GameBoard {
  public class Piece : MonoBehaviour {
    public int TileNumber { get; private set; }

    public void PlaceOn(int tileNumber, Board board) {
      TileNumber = tileNumber;
      transform.position = board.ToWorld(tileNumber);
    }
  }
}
```

**2.** A `BoardController` that owns the model and turns clicks into placements.
(Delete the temporary `Update` from `Board` now — input lives here.)

```csharp:BoardController.cs
using UnityEngine;
using UnityEngine.InputSystem;

namespace AppTrainers.GameBoard {
  public class BoardController : MonoBehaviour {
    [SerializeField] private Board board;
    [SerializeField] private Piece piecePrefab;
    private BoardGrid grid;

    void Start() {
      grid = new BoardGrid();   // after Board.Awake has published MatrixGrid
    }

    void Update() {
      if (Mouse.current == null || !Mouse.current.leftButton.wasPressedThisFrame) return;

      Vector3 screen = Mouse.current.position.ReadValue();
      Vector2 world = Camera.main.ScreenToWorldPoint(screen);
      if (!board.IsOnBoard(world)) return;

      int tile = board.ToTile(world);
      if (!grid.IsEmpty(tile)) return;          // square already taken

      Piece piece = Instantiate(piecePrefab);
      piece.PlaceOn(tile, board);               // view
      grid.Place(tile, 1);                       // model
    }
  }
}
```

**3.** In the scene: put `BoardController` on a GameObject, drag in the `Board`
and a simple **Piece prefab** (any sprite with a `Piece` component).

### Test it

Press **Play** and click empty squares — a piece snaps onto each one, centred on
the tile. Click an occupied square and nothing happens, because the **model**
already knows it's taken. View and model agree, every time.

### Challenge

Make a second click on an occupied square **remove** the piece instead: look up
the `Piece` whose `TileNumber` matches (keep a `List<Piece>`), destroy it, and
call `grid.Clear(tile)`. That's place/remove — the two verbs every board game
starts from.

## Chapter 6 — A Movable, Resizable Board

**Goal:** move the board anywhere, scale it to any art, and switch to any size —
all from the Inspector, with the gizmo following live.

### Idea

Everything already reads from three serialized values, so the board is
configurable *for free*:

- **`Origin`** is just `transform.position` — move the Board GameObject and the
  whole game moves with it. Nothing is pinned to `(0,0)`.
- **`tileSize`** scales tile spacing to match your art — if one square of your
  board sprite is 0.75 world units, set `tileSize = 0.75`.
- **`boardSize`** changes the grid itself — try **10** for a 10×10 draughts
  board, and the numbering, maths, and model all follow.

### Do it

One small addition keeps the gizmo correct in the **editor** (before Play, when
`Awake` hasn't run) — sync `MatrixGrid` whenever a value changes in the
Inspector:

```csharp:Board.cs
// add to class Board
private void OnValidate() {
  MatrixGrid = boardSize;   // keep Tiles/gizmo correct while editing
}
```

Now the workflow to fit the board to any art:

1. Drop your board sprite in and center it on the Board object.
2. Set **boardSize** to its squares-per-side, and nudge **tileSize** until the
   yellow gizmo lines up exactly with the printed squares.
3. Move the Board object wherever you want it on screen — the grid, clicks, and
   pieces all follow, because they all measure from `Origin`.

### Test it

With the game running, change **tileSize** and watch the gizmo grid grow and
shrink; drag the Board object and watch the whole grid slide with it; set
**boardSize** to 10 and click around — tile **1** is still bottom-left and the
top-right is now **100**. Same code, any board.

### Challenge

Spawn a full starting row of pieces from code: loop `tile` from 1 to
`Board.MatrixGrid`, and for each call `grid.Place` + instantiate a `Piece` at
`board.ToWorld(tile)`. That's the seed of any game's opening setup.

*That's the whole board foundation — numbering, maths, drawing, clicking, a model,
and a board that fits anywhere. From here you add **your** game's rules on top:
which moves are legal, captures, turns, winning. The companion Checkers workbook
is one complete example built on exactly these classes.*
