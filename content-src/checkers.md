---
title: "Build a Checkers Game in Unity"
subtitle: "Your First Board Game in Unity"
author: "Project: checker  ·  Engine: Unity (C#)  ·  Student Workbook"
---

# Part 0 — Before You Start

## What you're going to build

A complete, playable **Checkers** (Draughts) game: two players on an 8×8
board, capturing by jumping, crowning **Kings** at the far row, a simple
**AI** opponent, sounds, animations, and a menu. You'll build it **in small
steps** — after almost every chapter you press **Play** and see something new
working.

You already know Unity (GameObjects, components, prefabs, scenes), so this
workbook spends its time on the *interesting* part: turning the rules of a
board game into clean, well-organised code.

## How this workbook works

- **Copy-along.** Each step shows you the code and explains what every part
  does. You type it in and run it.
- **Always runnable.** No chapter is "just code you can't see." Each one ends
  with a **Test it** you can play.
- **Rules first, polish last.** We make the game *work* — even if pieces
  teleport with no animation — before we make it *pretty*. Animation and sound
  come near the end, on top of logic that already works.

Every chapter follows the same five beats: a **Goal** (what works when you're
done), the **Idea** (the concept), **Do it** (the code), **Test it** (the
checkpoint you can play), and an optional **Challenge**.

## The big picture: three layers

As the game grows we'll keep it organised in **three layers**, each with one
job. Don't try to build all of this now — it appears gradually.

```
   VIEW  (what you see)        Board · Piece · UI
     |    draws pieces, plays animations, reads the mouse
     v
CONTROLLER  (the decisions)    GameAdapter · TurnManager
     |    "which piece moves where?", "whose turn is it?"
     v
   MODEL  (the truth)          GameLogic
          the 8×8 grid, the rules, the scores — no Unity at all
```

Keep this mental picture: the **model** is plain C# that knows the rules; the
**view** is the Unity side that draws them; the **controller** decides what
happens on a click. We'll name the layer we're in as we go.

## The starter project

Open the provided Unity project. You've been given the art and scenes so you
can focus on code:

- A **Game** scene with a camera already framed on the board.
- A **board** sprite (the 8×8 checkerboard visual), centred at the world
  origin `(0, 0)`.
- **Piece prefabs** (a white and a dark checker, each with a hidden "king"
  crown sprite) and a small **indicator** prefab for highlights.
- **Sounds** for moves, captures, and UI.

All the code you write goes in `Assets/Scripts/AppTrainers/Games/`.

> **Tip:** keep the **Console** window open (Window → General → Console). Our
> first checkpoints print to it.

# Part 1 — The Board as Numbers

## Chapter 1 — The Board Is Just Numbers

**Goal:** understand how we describe the board in code. No code to run yet —
this is the idea everything else is built on, so it's worth ten minutes with a
pen.

### Idea

A checkers board is 8×8 = 64 squares. Instead of juggling `(row, column)`
pairs everywhere, we give every square a single **number from 1 to 64**,
counting left-to-right, bottom-to-top:

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

From a tile number you can always recover its **row** and **column**:

```
row    = (tileNumber - 1) / 8      // integer division, 0..7
column = (tileNumber - 1) % 8      // remainder, 0..7
```

Check it: tile **11** gives `(11-1)/8 = 1` (row 1) and `(11-1)%8 = 2`
(column 2). Look at the diagram — 11 sits in row 1, column 2. It matches.

**Why numbers instead of `(x, y)`?** Because moving one square diagonally
becomes simple arithmetic:

- Up one row = **+8** · down one row = **−8**
- Left / right one column = **−1 / +1**

So a diagonal step forward-right is `tile + 8 + 1`, and forward-left is
`tile + 8 − 1`. This one trick is the backbone of every move and jump in the
whole game — hold onto it.

### Do it (on paper)

1. What **row** and **column** is tile **42**?
2. Which **tile number** is at row 5, column 3?
3. Starting on tile **20**, which tile is one step **diagonally forward-right**
   (up a row, right a column)?

### Test it (answers)

1. `(42-1)/8 = 5`, `(42-1)%8 = 1` gives **row 5, column 1**.
2. `row*8 + column + 1 = 5*8 + 3 + 1 =` **44**.
3. `20 + 8 + 1 =` **29**.

If those three click, you understand the single most important idea in the
project. Everything else is detail.

### Challenge

A piece on tile **8** is on the right edge (column 7). What goes wrong if you
compute its "forward-right" neighbour as `8 + 8 + 1 = 17`? (Hint: what row and
column is 17 — does that look like a diagonal step, or did we "wrap" around to
the far side of the board?) We'll handle this edge case properly in a later
chapter; for now, just notice the problem.

## Chapter 2 — The `Tiles` Class: Numbers and Positions

**Goal:** a small class that converts between a **tile number** and a
**position in the Unity world**, both directions.

### Idea

Two different "languages" describe the board:

- The **rules** think in tile numbers (1–64) — that's Chapter 1.
- **Unity** thinks in world positions — a piece sits at some `(x, y)`.

We need a translator. Our board is centred on the origin and each square is
**1 world unit** wide, so the 8 columns spread from `x = −3.5` on the left to
`x = +3.5` on the right (and the same for rows in `y`). The centre of a square
is therefore:

```
x = column - 3.5
y = row    - 3.5
```

Why 3.5? The board is 8 units wide, centred on 0, so it runs −4 … +4. The
*centre* of the first column sits half a unit in, at −3.5. (In general the
offset is `(size − 1) / 2`; for 8 that's 3.5.)

This is the **view** talking to the **model** — the one place that knows both
the pixels and the tile numbers.

> **We're keeping it simple for now:** a fixed **8×8** board with **1-unit**
> tiles, centred at the origin. In a later chapter we'll make the board size,
> the tile size, and the board's position all adjustable — the code you write
> here grows into that. Building simple-then-flexible is exactly how real
> projects evolve.

### Do it

Create a new script `Tiles.cs` in `Assets/Scripts/AppTrainers/Games/`:

```csharp:Tiles.cs
using UnityEngine;

namespace AppTrainers.Games.Checker {
    // Converts between a tile number (1..64) and a position in the world.
    // Pure maths, no state — that's why it's a static class.
    public static class Tiles {
        const int Size = 8;   // squares per side

        // Tile number -> the world position of that square's centre.
        public static Vector2 GetTilePosition(int tileNumber) {
            int row    = (tileNumber - 1) / Size;
            int column = (tileNumber - 1) % Size;

            float half = (Size - 1) / 2f;   // 3.5 for an 8x8 board
            return new Vector2(column - half, row - half);
        }

        // A world position -> the tile number it falls on.
        public static int GetTileNumber(Vector2 pos) {
            int column = Mathf.FloorToInt(pos.x) + Size / 2;   // + 4
            int row    = Mathf.FloorToInt(pos.y) + Size / 2;
            return row * Size + column + 1;
        }
    }
}
```

**Reading it line by line:**

- `static class` — `Tiles` has no data of its own; it's just two functions, so
  we never create an instance. You call `Tiles.GetTilePosition(...)` directly.
- **`GetTilePosition`** does exactly the Chapter 1 maths: split the tile number
  into `row` and `column`, then shift by `half` (3.5) so the board is centred
  on the origin.
- **`GetTileNumber`** is the reverse. `Mathf.FloorToInt(pos.x)` rounds a world
  x *down* to the square it's inside, and `+ Size/2` (+4) shifts it back into
  the 0–7 column range. Then we rebuild the tile number with
  `row * 8 + column + 1` — the same formula as the paper exercise.

`FloorToInt` (round *down*) matters: a click at `x = 2.9` is still inside
column 6 (whose centre is at 2.5), and `floor(2.9) + 4 = 6`. Correct.

### Test it

We can't *see* this yet — that's the next chapter. But sanity-check it in your
head: `GetTilePosition(1)` gives row 0, column 0, so `(0 − 3.5, 0 − 3.5) =`
**(−3.5, −3.5)**, the bottom-left square. And `GetTilePosition(64)` gives
**(3.5, 3.5)**, the top-right. Those are the two far corners of the board.

### Challenge

Work out `GetTileNumber(new Vector2(-3.4f, -3.4f))` by hand and confirm it
gives **1**. (`floor(-3.4) = -4`, and `-4 + 4 = 0` for both column and row, so
`0*8 + 0 + 1 = 1`.)

## Chapter 3 — See the Board and Read Clicks

**Goal:** draw the 8×8 grid in the Scene view, and make clicking a square print
its tile number to the Console. **Your first thing to press Play on.**

### Idea

Two Unity tools do the work here:

- **Gizmos** let a script draw lines in the Scene view (editor only) — perfect
  for showing our logical grid on top of the board art so we can check they
  line up.
- **The Input System.** This project uses Unity's **Input System package**, so
  we read the mouse through `Mouse.current` — `Mouse.current.leftButton.wasPressedThisFrame`
  is true on the frame the left button goes down, and
  `Mouse.current.position.ReadValue()` gives its pixel position.
- **`Camera.main.ScreenToWorldPoint`** turns that pixel position into a world
  position — which `Tiles.GetTileNumber` (Chapter 2) turns into a tile number.

We'll put both on a new **`Board`** script. `Board` is a **view** class — the
Unity side of the board — and it will grow a lot over the coming chapters. This
is its first, tiny version.

### Do it

**1.** Create `Board.cs` in the same folder:

```csharp:Board.cs
using UnityEngine;
using UnityEngine.InputSystem;   // this project uses the Input System package

namespace AppTrainers.Games.Checker {
    public class Board : MonoBehaviour {

        // Draw the logical 8x8 grid in the Scene view so we can line the
        // board art up with it. (Editor-only; it never shows in the game.)
        private void OnDrawGizmos() {
            Gizmos.color = Color.yellow;
            float half = 4f;                       // the board runs -4 .. +4
            for (int i = 0; i <= 8; i++) {
                float o = -half + i;               // each grid line
                Gizmos.DrawLine(new Vector2(o, -half), new Vector2(o, half)); // columns
                Gizmos.DrawLine(new Vector2(-half, o), new Vector2(half, o)); // rows
            }
        }

        // TEMPORARY click test. We'll replace this with proper input later,
        // but for now it's the quickest way to prove our maths works.
        private void Update() {
            if (Mouse.current.leftButton.wasPressedThisFrame) {
                Vector2 world = Camera.main.ScreenToWorldPoint(Mouse.current.position.ReadValue());
                int tile = Tiles.GetTileNumber(world);
                Debug.Log("Clicked tile: " + tile);
            }
        }
    }
}
```

**2.** In the **Game** scene, select the object holding the board art (or
create an empty GameObject at `(0,0,0)` named `Board`) and **Add Component →
Board**.

**3.** Make sure your **Main Camera** is **Orthographic** and framed so the
whole board is visible (the starter scene already is).

**Reading it:**

- `OnDrawGizmos` runs continuously in the editor. It draws 9 vertical and 9
  horizontal lines (`i` from 0 to 8) spanning −4 … +4 — the borders of all 64
  squares.
- `Update` fires every frame; `Mouse.current.leftButton.wasPressedThisFrame` is true only on the
  frame you press the left button. We convert the click to a world point, ask
  `Tiles` for the tile number, and log it.

### Test it

Press **Play**. In the **Scene** view you should see the yellow grid sitting
exactly on the board art. Now click squares in the **Game** view and watch the
**Console**:

- Bottom-left square → **1**
- Top-right square → **64**
- The square just right of bottom-left → **2**

Click around and confirm the numbers match the Chapter 1 diagram. If the grid
doesn't line up with the art, the art isn't centred on the origin — move it to
`(0, 0)`.

> **You just closed the loop:** a real mouse click became a tile number,
> through the exact maths you wrote in Chapter 2. Every interaction in the game
> — selecting, moving, jumping — starts with this one translation.

### Challenge

Log the **row** and **column** alongside the tile number (use the Chapter 1
formulas). Watching row and column change as you move across the board makes
the numbering feel obvious.

# Part 2 — Pieces on the Board

## Chapter 4 — The Model: an 8×8 Grid

**Goal:** a plain C# class, `GameLogic`, that remembers what sits on every
square. No Unity — just the truth of the board.

### Idea

So far the board is only lines and numbers. Now we need **memory**: which
squares hold a piece, whose it is, and (later) whether it's a king.

We store that in a 2-D array — one slot per square. Each slot is a small value
called a **`Cell`** holding two things: an **owner** (0 = empty, 1 = player 1,
2 = player 2) and a **king** flag. This grid is the game's **single source of
truth**. Every rule question — "is that square empty?", "can this piece jump?"
— gets answered from here, not from the pieces you see on screen.

Keeping the truth in one plain class (no `MonoBehaviour`, no Unity) is what
makes the game easy to reason about: the rules can't accidentally depend on a
sprite's position.

### Do it

Create `GameLogic.cs`:

```csharp:GameLogic.cs
namespace AppTrainers.Games.Checker {
  // Single source of truth for the board: an 8x8 grid of cells, each holding
  // an owner (0 = empty, 1 = player 1, 2 = player 2) and whether it is a king.
  public class GameLogic {
    public const int Empty = 0;
    public const int Player1 = 1;
    public const int Player2 = 2;
    const int Size = 8;   // squares per side (we make this adjustable in Part 5)

    private readonly Cell[,] grid = new Cell[Size, Size];

    // The rest of the game identifies players by +1 / -1; the grid uses 1 / 2.
    public static int ToOwner(int playerTurnNumber) {
      return playerTurnNumber == 1 ? Player1 : Player2;
    }

    // --- Occupancy: place, clear, and read whole cells. ---
    public void Place(int tileNumber, int playerTurnNumber) {
      if (!InBounds(tileNumber)) return;
      grid[GetRow(tileNumber), GetColumn(tileNumber)] = new Cell(ToOwner(playerTurnNumber), false);
    }

    public void Clear(int tileNumber) {
      if (!InBounds(tileNumber)) return;
      grid[GetRow(tileNumber), GetColumn(tileNumber)] = default;   // back to empty
    }

    public void Move(int fromTile, int toTile) {
      Cell moving = CellAt(fromTile);
      Clear(fromTile);
      if (InBounds(toTile)) grid[GetRow(toTile), GetColumn(toTile)] = moving;
    }

    public Cell CellAt(int tileNumber) {
      return InBounds(tileNumber) ? grid[GetRow(tileNumber), GetColumn(tileNumber)] : default;
    }

    public bool IsEmpty(int tileNumber) {
      return InBounds(tileNumber) && CellAt(tileNumber).Owner == Empty;
    }

    static bool InBounds(int tileNumber) {
      return tileNumber > 0 && tileNumber <= Size * Size;
    }

    // A tile number's position in the grid: which row (0..7) and column (0..7).
    static int GetRow(int tileNumber)    => (tileNumber - 1) / Size;
    static int GetColumn(int tileNumber) => (tileNumber - 1) % Size;
  }

  // One square of the board: who occupies it, and whether that piece is a king.
  public struct Cell {
    public int Owner;
    public bool King;
    public Cell(int owner, bool king) {
      Owner = owner;
      King = king;
    }
  }
}
```

**Reading it:**

- `Cell` is a `struct` (a small value), so an empty square is just `default` —
  `Owner == 0`, `King == false`. No nulls to worry about.
- `Place` / `Clear` / `Move` / `CellAt` all convert a tile number to
  `[row, column]` with the exact Chapter 1 formulas, so the whole class speaks
  tile numbers on the outside and array indices on the inside.
- `InBounds` guards every write, so a bad tile number can never crash the grid.

### Test it

`GameLogic` has no Unity in it, so to see it we need a tiny **temporary**
tester. Create `GridTester.cs`, drop it on any GameObject, and press Play:

```csharp:GridTester.cs
using UnityEngine;

namespace AppTrainers.Games.Checker {
  public class GridTester : MonoBehaviour {
    void Start() {
      var logic = new GameLogic();
      logic.Place(1, 1);    // player 1 on tile 1
      logic.Place(64, 2);   // player 2 on tile 64
      Debug.Log($"tile 1 owner = {logic.CellAt(1).Owner}");     // 1
      Debug.Log($"tile 64 owner = {logic.CellAt(64).Owner}");   // 2
      Debug.Log($"tile 30 empty? {logic.IsEmpty(30)}");         // True
    }
  }
}
```

You should see `1`, `2`, `True` in the Console. Delete `GridTester` when you're
convinced — it was just scaffolding.

### Challenge

Predict what `logic.Move(1, 10)` then `logic.CellAt(1).Owner` prints, and check
it. (Moving off tile 1 leaves it empty → `0`.)

## Chapter 5 — Spawn the Pieces

**Goal:** press Play and watch 12 checkers per side appear on their starting
squares — and the model records every one.

### Idea

Now we connect the **model** (the grid) to the **view** (sprites). Two new
pieces of the puzzle:

- A **`Piece`** component — a render-only view. It knows which tile it's on and
  who owns it, and that's about it. All the *rules* stay in `GameLogic`.
- A **`GameController`** — the conductor. It creates the `GameLogic` and asks
  the `Board` to spawn the pieces.

The `Board` grows too: it now knows the piece prefabs and can turn a tile
number into a world position (`ToWorld`) — the mirror of the `ToTile` you
already wrote.

### Do it

**1.** Give `Board` the piece prefabs, a *tile → world* converter, and a spawn
routine. Add these to `Board.cs` (keep `OnDrawGizmos`; you can delete the
temporary `Update` click test from Chapter 3 now):

```csharp:Board.cs
using System.Collections.Generic;
using UnityEngine;

namespace AppTrainers.Games.Checker {
  public class Board : MonoBehaviour {
    [SerializeField] private Piece whitePiece;
    [SerializeField] private Piece blackPiece;
    [SerializeField] private Transform piecesParent;

    const int Size = 8;
    private readonly List<Piece> pieces = new List<Piece>();
    public List<Piece> Pieces => pieces;

    // Each player fills (n/2 - 1) rows of n/2 pieces (12 on a standard board).
    public int PiecesPerPlayer => (Size / 2) * (Size / 2 - 1);

    // Bridge between a tile number and the world (Origin is (0,0) for now).
    public Vector3 ToWorld(int tileNumber) => Tiles.GetTilePosition(tileNumber);
    public int ToTile(Vector2 worldPos)    => Tiles.GetTileNumber(worldPos);

    public void SpawnPieces(GameLogic logic) {
      SpawnSide(1, whitePiece, logic);    // player 1, plays "up" the board
      SpawnSide(-1, blackPiece, logic);   // player 2, plays "down"
    }

    void SpawnSide(int playerTurnNumber, Piece prefab, GameLogic logic) {
      int perRow = Size / 2;                              // dark squares per row
      float start = -(Size - 1) / 2f * playerTurnNumber;  // near corner, in tiles

      for (int i = 0; i < PiecesPerPlayer; i++) {
        int row = i / perRow;
        float x, y;
        if (playerTurnNumber == 1) {
          x = start + (i % perRow * 2) + (row % 2);
          y = start + row;
        } else {
          x = start - (i % perRow * 2) - (row % 2);
          y = start - row;
        }

        Piece piece = Instantiate(prefab, piecesParent);
        piece.transform.position = new Vector2(x, y);
        piece.Initialize(playerTurnNumber, new Vector2(x, y), this, logic);
        pieces.Add(piece);
        logic.Place(piece.TileNumber, playerTurnNumber);   // tell the model
      }
    }

    private void OnDrawGizmos() {
      Gizmos.color = Color.yellow;
      float half = Size / 2f;
      for (int i = 0; i <= Size; i++) {
        float o = -half + i;
        Gizmos.DrawLine(new Vector2(o, -half), new Vector2(o, half));
        Gizmos.DrawLine(new Vector2(-half, o), new Vector2(half, o));
      }
    }
  }
}
```

**2.** Create the render-only `Piece`:

```csharp:Piece.cs
using UnityEngine;

namespace AppTrainers.Games.Checker {
  public class Piece : MonoBehaviour {
    [SerializeField] private SpriteRenderer spriteRenderer, kingSprite;
    private int playerTurnNumber;
    private int tileNumber;
    private Board board;
    private GameLogic logic;

    public int TileNumber => tileNumber;
    public int PlayerTurnNumber => playerTurnNumber;

    public void Initialize(int playerNumber, Vector2 pos, Board board, GameLogic logic) {
      this.board = board;
      this.logic = logic;
      playerTurnNumber = playerNumber;
      tileNumber = board.ToTile(pos);   // the piece learns its own square
    }
  }
}
```

**3.** Create the `GameController` (a first, simple version — we make it smarter
in later parts):

```csharp:GameController.cs
using UnityEngine;

namespace AppTrainers.Games.Checker {
  public class GameController : MonoBehaviour {
    [SerializeField] private Board board;
    public GameLogic Logic { get; private set; }

    void Start() {
      Logic = new GameLogic();
      board.SpawnPieces(Logic);
    }
  }
}
```

**4.** In the scene: add `GameController` to a GameObject, drag the `Board` into
its **Board** field, and on the `Board` set **White Piece**, **Black Piece**
(your two piece prefabs) and **Pieces Parent** (any empty GameObject to hold
them). On each piece prefab, wire its **Sprite Renderer** (and the crown as
**King Sprite**).

### Test it

Press **Play**. Twelve pieces per side snap onto the dark squares of the first
three rows on each end — the standard checkers opening. The board *looks*
right, and just as importantly the **model** agrees: every `Instantiate` was
paired with a `logic.Place`, so `GameLogic` now holds the same 24 pieces.

### Challenge

Temporarily `Debug.Log(piece.TileNumber)` inside the spawn loop and confirm
player 1 fills the dark squares of the bottom three rows.

## Chapter 6 — Where Can It Move? (Model)

**Goal:** ask the model "where can the piece on tile *N* go?" and get back the
list of empty squares it may step to. Rules, still no clicking.

### Idea

A checker moves **one square diagonally forward**. "Forward" depends on the
side: player 1 moves **up** (+row), player 2 moves **down** (−row). From
Chapter 1 we know a diagonal step is `tile ± Size ± 1`.

Two edge rules keep us honest:

- On the **left** column you can only go diagonally right; on the **right**
  column only left. Otherwise the arithmetic "wraps" to the far side (the
  Chapter 1 challenge!).
- A step only counts if the target square is **empty**.

We return the answer in a small `MoveOptions` object. It has room for captures
too (`JumpTiles`) — we fill those in Chapter 9.

### Do it

Add move generation to `GameLogic.cs`, and the `MoveOptions` type beside `Cell`
(you'll also need `using System.Collections.Generic;` at the top):

```csharp:GameLogic.cs
// Where the piece on tileNumber may move (plain moves for now).
public MoveOptions GetMoves(int tileNumber) {
  var options = new MoveOptions();
  Cell cell = CellAt(tileNumber);
  if (cell.Owner == Empty) return options;

  int direction = cell.Owner == Player1 ? 1 : -1;   // up for P1, down for P2
  foreach (int neighbour in SurroundedInDirection(tileNumber, direction)) {
    if (IsEmpty(neighbour)) options.EmptyTiles.Add(neighbour);
  }
  return options;
}

// The one or two diagonal neighbours in a direction, respecting the edges.
List<int> SurroundedInDirection(int tileNumber, int direction) {
  var surrounded = new List<int>();
  int column = GetColumn(tileNumber);
  int nextRow = tileNumber + (Size * direction);   // same column, one row over

  if (column == 0)             surrounded.Add(nextRow + 1);   // left edge: only right
  else if (column == Size - 1) surrounded.Add(nextRow - 1);   // right edge: only left
  else { surrounded.Add(nextRow + 1); surrounded.Add(nextRow - 1); }
  return surrounded;
}
```

```csharp:GameLogic.cs
// Where a piece may go this turn: plain moves, and (later) captures.
public class MoveOptions {
  public List<int> EmptyTiles { get; } = new List<int>();
  public Dictionary<int, int> JumpTiles { get; } = new Dictionary<int, int>();  // jumped -> landing
}
```

**Reading it:** `nextRow` moves straight up/down a row (`± Size`); adding `±1`
turns it into the two diagonals. The column check drops the off-board diagonal
when we're on an edge. `direction` is the whole reason player 1 and player 2
move opposite ways with the *same* code.

### Test it

Extend your throwaway tester: place one piece and print its moves.

```csharp:GridTester.cs
var logic = new GameLogic();
logic.Place(11, 1);                       // player 1 on tile 11
foreach (int t in logic.GetMoves(11).EmptyTiles)
  Debug.Log("can move to " + t);          // expect 18 and 20
```

Tile 11 is row 1, column 2; forward-diagonals are `11+8-1 = 18` and
`11+8+1 = 20`. Place another piece on 18 and re-run — now only 20 is listed,
because 18 is occupied.

### Challenge

Put a player-1 piece on tile **8** (right edge) and confirm `GetMoves` offers
only **15** (`8+8-1`), never the wrapped `17`.

## Chapter 7 — Select and Move (No Animation)

**Goal:** click one of your pieces, click an empty square it can reach, and it
moves there. Instantly, no animation, no capturing yet — but *real*, and driven
entirely by the model.

### Idea

This is where the three layers finally talk to each other on a click:

1. The **view** reads the mouse and turns it into a world position.
2. A new **controller**, `GameAdapter`, decides what the click means: *select
   this piece*, or *move the selected piece here*.
3. The **piece** updates its position and tells the **model** (`logic.Move`).

`GameAdapter` is the brain of a turn. It holds "which piece is selected" and
nothing about how things look.

### Do it

**1.** Teach `Piece` to remember its options and to move (a plain teleport for
now — animation arrives in Part 5):

```csharp:Piece.cs
using System.Collections.Generic;

// ... add to class Piece ...
private List<int> nextEmptyTiles = new List<int>();
public List<int> NextEmptyTiles => nextEmptyTiles;

// Recompute this piece's legal moves from the model.
public void PrepareNextMove() {
  nextEmptyTiles = logic.GetMoves(tileNumber).EmptyTiles;
}

public bool CanMove(int tile) => nextEmptyTiles.Contains(tile);

public void Move(int newTileNumber) {
  logic.Move(tileNumber, newTileNumber);               // model first
  tileNumber = newTileNumber;
  transform.position = board.ToWorld(newTileNumber);   // then the view
}
```

**2.** Create `GameAdapter` — the click brain:

```csharp:GameAdapter.cs
using System.Linq;
using UnityEngine;

namespace AppTrainers.Games.Checker {
  public class GameAdapter {
    private readonly Board board;
    private Piece pieceSelected;

    public GameAdapter(Board board) { this.board = board; }

    // Work out every piece's moves (called at the start of a turn).
    public void HandleMovePieces() {
      foreach (Piece piece in board.Pieces) piece.PrepareNextMove();
    }

    public void HandleClick(Vector2 worldPos) {
      int tile = board.ToTile(worldPos);

      // A piece is selected and can reach the clicked tile: move it.
      if (pieceSelected != null && pieceSelected.CanMove(tile)) {
        pieceSelected.Move(tile);
        pieceSelected = null;
        HandleMovePieces();           // refresh everyone's options
        return;
      }

      // Otherwise, select whatever piece is on the clicked tile.
      pieceSelected = board.Pieces.FirstOrDefault(p => p.TileNumber == tile);
    }
  }
}
```

**3.** Have `GameController` create the adapter, prep the moves, and feed it
clicks:

```csharp:GameController.cs
using UnityEngine;
using UnityEngine.InputSystem;

namespace AppTrainers.Games.Checker {
  public class GameController : MonoBehaviour {
    [SerializeField] private Board board;
    public GameLogic Logic { get; private set; }
    public GameAdapter Adapter { get; private set; }

    void Start() {
      Logic = new GameLogic();
      board.SpawnPieces(Logic);
      Adapter = new GameAdapter(board);
      Adapter.HandleMovePieces();
    }

    void Update() {
      if (!Mouse.current.leftButton.wasPressedThisFrame) return;
      Vector2 world = Camera.main.ScreenToWorldPoint(Mouse.current.position.ReadValue());
      Adapter.HandleClick(world);
    }
  }
}
```

### Test it

Press **Play**. Click one of your front-row pieces, then click the empty dark
square diagonally ahead of it — the piece jumps to it and the model updates.
Click a piece, then a square it *can't* reach: nothing happens (it just
re-selects). You can move either side's pieces for now — turns come next.

> **This is the milestone you asked for first:** a real game move, click to
> click, with the model as the single source of truth. Everything from here is
> *more rules* and *more polish* on top of this exact loop.

### Challenge

Because `GetMoves` only ever offers *forward* squares, a backward click is
silently ignored. Try it and watch nothing happen — the rule enforces itself.

# Part 3 — The Rules of Checkers

## Chapter 8 — Whose Turn Is It?

**Goal:** players alternate, and you can only pick up the side whose turn it is.

### Idea

We need a little state: *whose turn*. We give it its own class,
**`TurnManager`**, instead of scattering a boolean around. It also **announces**
each change through an event, so the UI (later) can react without us calling it
directly — the *observer* pattern.

The `GameAdapter` then only ever considers the **current** player's pieces, and
after a move the `GameController` switches the turn.

### Do it

**1.** The `PlayerTurn` enum and the `TurnManager`:

```csharp:PlayerTurn.cs
namespace AppTrainers.Games.Checker {
  public enum PlayerTurn { Player1, Player2 }
}
```

```csharp:TurnManager.cs
using System;

namespace AppTrainers.Games.Checker {
  public class TurnManager {
    public PlayerTurn Current { get; private set; }
    public bool IsPlayer1Turn => Current == PlayerTurn.Player1;
    public bool IsPlayer2Turn => Current == PlayerTurn.Player2;
    public event Action<PlayerTurn> TurnChanged;

    public void Begin(PlayerTurn first) { Current = first; TurnChanged?.Invoke(Current); }
    public void Switch() {
      Current = IsPlayer1Turn ? PlayerTurn.Player2 : PlayerTurn.Player1;
      TurnChanged?.Invoke(Current);
    }
  }
}
```

**2.** Let the `GameAdapter` filter to the current side. It asks the controller
who's playing, so its constructor now takes the controller, and a
`CurrentPieces()` helper replaces `board.Pieces` in `HandleMovePieces` and in
the *select* branch of `HandleClick`:

```csharp:GameAdapter.cs
private readonly GameController gameController;

public GameAdapter(GameController gameController, Board board) {
  this.gameController = gameController;
  this.board = board;
}

// The current side's pieces only.
List<Piece> CurrentPieces() {
  int number = gameController.CurrentPlayerNumber;
  return board.Pieces.Where(p => p.PlayerTurnNumber == number).ToList();
}
```

After a successful move, call `gameController.ChangePlayerTurn()` instead of
refreshing the moves here.

**3.** `GameController` gains the turn manager. Players are identified by
**+1 / −1** (player 1 up, player 2 down — the same number the spawn and move
maths already use):

```csharp:GameController.cs
private TurnManager turnManager;
public PlayerTurn CurrentTurn => turnManager.Current;
public int CurrentPlayerNumber => GetPlayerTurnNumber(turnManager.Current);
public int GetPlayerTurnNumber(PlayerTurn t) => t == PlayerTurn.Player1 ? 1 : -1;

// in Start(), after creating the adapter (now: new GameAdapter(this, board)):
turnManager = new TurnManager();
turnManager.Begin(PlayerTurn.Player1);
Adapter.HandleMovePieces();

public void ChangePlayerTurn() {
  turnManager.Switch();
  Adapter.HandleMovePieces();
}
```

### Test it

Press **Play**. Move a player-1 piece — now a player-2 piece selects and a
player-1 piece won't respond, and vice-versa. The game genuinely alternates.

### Challenge

Subscribe to `turnManager.TurnChanged` in `Start` with a one-line lambda that
`Debug.Log`s the new turn. You've just used the observer pattern — the UI will
do exactly this later.

## Chapter 9 — Captures: The Jump

**Goal:** jump over an adjacent opponent onto the empty square beyond it, remove
the captured piece, and score a point. And captures become **mandatory**.

### Idea

A capture is a *double* diagonal step: your piece, the opponent right next to
it, then an **empty** landing square one more step along the same diagonal.

Two rules make checkers *checkers*:

- **Captures are forced.** If any of your pieces can jump, you *must* jump — so
  when a jump exists we throw away the plain moves.
- **Scoring:** each capture removes an enemy piece; capture all 12 and you win
  (that check comes in Chapter 12).

### Do it

**1.** In `GameLogic.cs`, when a neighbour holds an opponent, compute the
landing. Update `GetMoves` and add the two helpers:

```csharp:GameLogic.cs
public MoveOptions GetMoves(int tileNumber) {
  var options = new MoveOptions();
  Cell cell = CellAt(tileNumber);
  if (cell.Owner == Empty) return options;
  int direction = cell.Owner == Player1 ? 1 : -1;

  foreach (int neighbour in SurroundedInDirection(tileNumber, direction)) {
    if (IsEmpty(neighbour)) {
      options.EmptyTiles.Add(neighbour);
    } else if (HasOpponent(neighbour, cell.Owner)) {
      int landing = GetJumpLanding(tileNumber, neighbour, direction);
      if (landing > 0) options.JumpTiles.Add(neighbour, landing);
    }
  }

  if (options.JumpTiles.Count > 0) options.EmptyTiles.Clear();   // captures are forced
  return options;
}

bool HasOpponent(int tileNumber, int owner) {
  if (!InBounds(tileNumber)) return false;
  int column = GetColumn(tileNumber);
  if (column == 0 || column == Size - 1) return false;   // can't jump off an edge
  int cellOwner = CellAt(tileNumber).Owner;
  return cellOwner != Empty && cellOwner != owner;
}

// The square just past the opponent, or -1 if it isn't empty.
int GetJumpLanding(int tileNumber, int opponentTile, int direction) {
  int landing = System.Math.Abs(opponentTile - tileNumber) > Size
      ? opponentTile + (direction * Size) + direction    // the "+1" diagonal
      : opponentTile + (direction * Size) - direction;   // the "-1" diagonal
  return IsEmpty(landing) ? landing : -1;
}
```

**2.** The piece now tracks its jumps, captures, and can be removed. Add to
`Piece.cs` (`using System.Linq;`):

```csharp:Piece.cs
private Dictionary<int, int> nextTilesAfterOpponent = new Dictionary<int, int>();
public Dictionary<int, int> NextTilesAfterOpponent => nextTilesAfterOpponent;

// PrepareNextMove now stores both lists:
public void PrepareNextMove() {
  MoveOptions moves = logic.GetMoves(tileNumber);
  nextEmptyTiles = moves.EmptyTiles;
  nextTilesAfterOpponent = moves.JumpTiles;
}

public bool CanMove(int tile) =>
  nextTilesAfterOpponent.Values.Contains(tile) || nextEmptyTiles.Contains(tile);

// Move, optionally removing the piece we jumped over.
public void Move(int newTileNumber, bool isJump = false) {
  if (isJump) {
    int jumpedTile = nextTilesAfterOpponent.FirstOrDefault(j => j.Value == newTileNumber).Key;
    Piece captured = board.Pieces.FirstOrDefault(p => p.TileNumber == jumpedTile);
    captured?.Remove();
  }
  logic.Move(tileNumber, newTileNumber);
  tileNumber = newTileNumber;
  transform.position = board.ToWorld(newTileNumber);
}

public void Remove() {
  logic.Clear(tileNumber);
  tileNumber = -1;
  transform.localScale = Vector3.zero;   // hide it (we animate this out in Part 5)
}
```

**3.** `GameAdapter` decides jump vs plain move, scores captures, and — because
captures are forced — only lets you pick a jumping piece when one exists:

```csharp:GameAdapter.cs
private readonly List<Piece> forceJumpPieces = new List<Piece>();

public void HandleMovePieces() {
  forceJumpPieces.Clear();
  foreach (Piece piece in CurrentPieces()) {
    piece.PrepareNextMove();
    if (piece.NextTilesAfterOpponent.Count > 0) forceJumpPieces.Add(piece);
  }
}

public void HandleClick(Vector2 worldPos) {
  int tile = board.ToTile(worldPos);

  if (pieceSelected != null && pieceSelected.CanMove(tile)) {
    bool isJump = pieceSelected.NextTilesAfterOpponent.Values.Contains(tile);
    pieceSelected.Move(tile, isJump);
    if (isJump) gameController.RegisterCapture();
    pieceSelected = null;
    gameController.ChangePlayerTurn();
    return;
  }

  Piece clicked = CurrentPieces().FirstOrDefault(p => p.TileNumber == tile);
  // If jumps exist anywhere, only a jumping piece may be selected.
  if (clicked != null && (forceJumpPieces.Count == 0 || clicked.NextTilesAfterOpponent.Count > 0))
    pieceSelected = clicked;
  else
    pieceSelected = null;
}
```

**4.** Give the model a score, and let `GameController.RegisterCapture` tally it:

```csharp:GameLogic.cs
private int player1Score, player2Score;
public int GetScore(PlayerTurn t) => t == PlayerTurn.Player1 ? player1Score : player2Score;
public void AddScore(PlayerTurn t) { if (t == PlayerTurn.Player1) player1Score++; else player2Score++; }
```

```csharp:GameController.cs
public void RegisterCapture() {
  Logic.AddScore(turnManager.Current);
}
```

### Test it

Set up a capture: move a player-1 piece next to a player-2 piece with an empty
square beyond. On player 1's turn, notice that piece is now your *only* legal
pick (jumps are forced). Click it, click the landing square — it jumps, the
enemy piece vanishes, and player 1's score (log it if you like) ticks up.

### Challenge

Temporarily `Debug.Log(forceJumpPieces.Count)` at the end of `HandleMovePieces`.
Watch it jump to 1 the moment a capture becomes available.

## Chapter 10 — Chain Jumps

**Goal:** if a capture lands you next to *another* jumpable opponent, you keep
going with the same piece — a double, triple, or bigger multi-jump — before the
turn passes.

### Idea

After a jump we simply ask the model again: *from this new square, can this same
piece still jump?* If yes, the turn is **not** over — the same piece stays
selected and must jump again. If no, the turn passes.

While a chain is running, no other piece may move — so we clear everyone else's
moves and mark this piece as the only forced jumper.

### Do it

**1.** A small check on `Piece`:

```csharp:Piece.cs
// Recalculate from the new square: can it capture again?
public bool HasDoubleJump() {
  PrepareNextMove();
  return nextTilesAfterOpponent.Count > 0;
}

public void ResetMoves() {
  nextEmptyTiles.Clear();
  nextTilesAfterOpponent.Clear();
}
```

**2.** In `GameAdapter`, after a capture, check for a follow-up before ending
the turn. Replace the end of the move branch in `HandleClick`:

```csharp:GameAdapter.cs
if (isJump) {
  gameController.RegisterCapture();
  if (HasDoubleJump(pieceSelected)) return;   // keep the same piece selected
}
pieceSelected = null;
gameController.ChangePlayerTurn();
```

```csharp:GameAdapter.cs
// After a capture, does the same piece have another jump? If so it must keep
// going, and every other piece is frozen so only it can move.
public bool HasDoubleJump(Piece currentPiece) {
  forceJumpPieces.Clear();
  if (currentPiece.HasDoubleJump()) {
    foreach (Piece piece in CurrentPieces())
      if (piece != currentPiece) piece.ResetMoves();
    forceJumpPieces.Add(currentPiece);   // it is now the sole forced jumper
    return true;
  }
  return false;
}
```

### Test it

Arrange two enemy pieces in a staircase so one jump sets up the next. Take the
first jump — the turn does **not** pass; your piece is still selected and must
take the second jump. Only after the last jump does play switch sides.

### Challenge

Set up a **triple** jump and confirm all three captures happen on one turn.
(This is the multi-jump case that's easy to get wrong — the fix is that
`HasDoubleJump` re-adds the piece to `forceJumpPieces` on *every* hop.)

## Chapter 11 — Crowning Kings

**Goal:** a piece that reaches the far row becomes a **King** and may move and
jump **backward** as well as forward.

### Idea

Two halves, cleanly split between the layers:

- The **model** decides promotion (did this piece reach the last row?) and, once
  a cell is a king, offers diagonals in **both** directions.
- The **view** just plays the crown: show the king sprite when the model says
  the piece was promoted.

### Do it

**1.** In `GameLogic.cs`, add promotion and make move generation king-aware. In
`GetMoves`, loop over `GetSurroundedTiles(tileNumber, direction, cell.King)` and
pass `cell.King` to `GetJumpLanding`:

```csharp:GameLogic.cs
// Promote the piece on tileNumber if it reached the far row. Returns true only
// on a fresh promotion, so the view knows when to play the king animation.
public bool Promote(int tileNumber) {
  Cell cell = CellAt(tileNumber);
  if (cell.Owner == Empty || cell.King) return false;
  int lastRow = cell.Owner == Player1 ? Size - 1 : 0;
  if (GetRow(tileNumber) != lastRow) return false;
  grid[GetRow(tileNumber), GetColumn(tileNumber)] = new Cell(cell.Owner, true);
  return true;
}

// Forward diagonals always; backward too for a king.
List<int> GetSurroundedTiles(int tileNumber, int direction, bool king) {
  var tiles = new List<int>();
  tiles.AddRange(SurroundedInDirection(tileNumber, direction));
  if (king) tiles.AddRange(SurroundedInDirection(tileNumber, -direction));
  return tiles;
}

int GetJumpLanding(int tileNumber, int opponentTile, int direction, bool king) {
  int jumpDirection = direction;
  if (king && direction > 0) jumpDirection = tileNumber > opponentTile ? -direction : direction;
  else if (king && direction < 0) jumpDirection = tileNumber < opponentTile ? -direction : direction;

  int landing = System.Math.Abs(opponentTile - tileNumber) > Size
      ? opponentTile + (jumpDirection * Size) + jumpDirection
      : opponentTile + (jumpDirection * Size) - jumpDirection;
  return IsEmpty(landing) ? landing : -1;
}
```

**2.** In `Piece.cs`, show the crown when the model promotes. Call `HandleKing`
at the end of a `Move` (both the plain and jump paths):

```csharp:Piece.cs
void HandleKing(int newTileNumber) {
  if (logic.Promote(newTileNumber)) {
    kingSprite.gameObject.SetActive(true);   // (we fade it in nicely in Part 5)
  }
}
```

### Test it

Walk a piece all the way to the opponent's back row. The crown sprite appears.
Now move it **backward** — something a plain checker could never do — and use it
to jump backward over an opponent.

### Challenge

A king mid-board should offer up to **four** move squares. Log
`GetMoves(kingTile).EmptyTiles.Count` and confirm you see diagonals behind it as
well as ahead.

## Chapter 12 — Winning

**Goal:** when one side has captured all 12 of the opponent's pieces, the game
ends.

### Idea

We already tally captures. A side wins the moment its score equals
`PiecesPerPlayer` (12 on a standard board). For now we'll stop input and log the
winner; in Part 5 this becomes a proper game-over popup driven by a state
machine.

### Do it

Add a "finished" flag to `GameController` and check the score on every capture:

```csharp:GameController.cs
public bool IsFinished { get; private set; }

public void RegisterCapture() {
  PlayerTurn turn = turnManager.Current;
  Logic.AddScore(turn);
  if (Logic.GetScore(turn) == board.PiecesPerPlayer) {
    IsFinished = true;
    Debug.Log(turn + " wins!");
  }
}

// stop reading clicks once finished:
void Update() {
  if (IsFinished || !Mouse.current.leftButton.wasPressedThisFrame) return;
  Vector2 world = Camera.main.ScreenToWorldPoint(Mouse.current.position.ReadValue());
  Adapter.HandleClick(world);
}
```

### Test it

The honest way is to play a full game, but that's slow. Instead, temporarily
start each side with only **one** piece (cap the spawn loop at `i < 1`), set up
a single capture, and watch `"Player1 wins!"` print the instant it lands.
Restore the full spawn afterward.

### Challenge

Add a `Debug.Break()` right after the win log so Unity pauses on victory —
handy while testing, and a hint of the game-over popup to come.

# Part 4 — A Computer Opponent

## Chapter 13 — The AI

**Goal:** a Single-Player mode where **player 2 plays itself** — picking a legal
move (jumping when forced) and taking it, including full multi-jumps.

### Idea

Our AI is deliberately simple: it makes a **random legal move**. That sounds
weak, but every hard rule is already in the model — forced jumps, chains,
kings — so a random *legal* move is still a real opponent. Reusing the model
like this is the payoff for keeping the rules in one place.

The flow mirrors a human turn, minus the clicking: pick a piece, tell it to
move, and if that was a capture that opens another jump, go again.

### Do it

**1.** A `GameSettings` holder for the chosen mode (the menu sets this in
Part 5; for now default it in the Inspector or code):

```csharp:GameSettings.cs
using UnityEngine;

namespace AppTrainers.Games.Checker {
  public class GameSettings : MonoBehaviour {
    public enum Mode { SinglePlayer, TwoPlayers }
    public static Mode mode;

    public enum PiceColor { White, Dark }
    public static PiceColor piceColor;
  }
}
```

**2.** Teach `Piece` to move itself (random pick among its legal options):

```csharp:Piece.cs
using System.Linq;

public void StartAIMoving(System.Action<bool> onDone) {
  if (nextTilesAfterOpponent.Count > 0) {                       // must jump
    int landing = nextTilesAfterOpponent.ElementAt(Random.Range(0, nextTilesAfterOpponent.Count)).Value;
    Move(landing, true);
    onDone(true);                                               // it was a capture
  } else if (nextEmptyTiles.Count > 0) {
    int target = nextEmptyTiles[Random.Range(0, nextEmptyTiles.Count)];
    Move(target, false);
    onDone(false);
  }
}
```

**3.** `GameAdapter` picks a piece and plays it — forced jumps first, then any
piece with a move. After a capture it recurses for chain jumps, exactly like the
human path:

```csharp:GameAdapter.cs
public void HandleAI() {
  Piece piece = PickAIPiece();
  if (piece == null) return;

  piece.StartAIMoving(removedMove => {
    if (removedMove) gameController.RegisterCapture();
    if (removedMove && HasDoubleJump(piece)) { HandleAI(); return; }   // keep jumping
    gameController.ChangePlayerTurn();
  });
}

Piece PickAIPiece() {
  if (forceJumpPieces.Count > 0)
    return forceJumpPieces[Random.Range(0, forceJumpPieces.Count)];

  List<Piece> movable = CurrentPieces().Where(p => p.NextEmptyTiles.Count > 0).ToList();
  return movable.Count > 0 ? movable[Random.Range(0, movable.Count)] : null;
}
```

**4.** `GameController`: only let the human click on their turn, and kick off the
AI (after a short beat) when it's player 2 in Single-Player:

```csharp:GameController.cs
using System.Collections;

public bool CanPlayerPlay() {
  return GameSettings.mode == GameSettings.Mode.TwoPlayers || turnManager.IsPlayer1Turn;
}

// in Update(), guard the click:
if (IsFinished || !Mouse.current.leftButton.wasPressedThisFrame || !CanPlayerPlay()) return;

// at the end of ChangePlayerTurn():
if (!IsFinished && GameSettings.mode == GameSettings.Mode.SinglePlayer && turnManager.IsPlayer2Turn)
  StartCoroutine(AITurn());

IEnumerator AITurn() {
  yield return new WaitForSeconds(1);
  Adapter.HandleAI();
}
```

Set `GameSettings.mode = GameSettings.Mode.SinglePlayer;` at the top of `Start`
for now (the menu will set it properly next part).

### Test it

Press **Play**. Make your move as player 1; a second later, player 2 moves on
its own. Leave a piece hanging and watch the AI take the forced jump — and chain
multi-jumps when they're there.

### Challenge

The AI is random. Make it *slightly* smarter: in `PickAIPiece`, when there are
no forced jumps, prefer a piece that can reach the far row (a promotion). One
`OrderByDescending` is enough to feel the difference.

# Part 5 — Making It Feel Good

From here we don't add rules — we make the working game **feel** finished:
animation, sound, highlights, and a proper menu. Each chapter layers polish on
top of logic that already works, and by the end your code matches the shipped
project.

## Chapter 14 — Animation with DOTween

**Goal:** pieces **glide** instead of teleporting — sliding to their square with
a little bounce, flying to a captured piece before removing it, and spawning
with a sweep onto the board.

### Idea

Teleporting was perfect for proving the rules. Now we replace each instant
`transform.position = …` with a **tween** — a timed animation from A to B —
using **DOTween** (already in the project under `Assets/Plugins`). Crucially the
**model still updates instantly**; only the *view* takes time to catch up. That
separation is why adding animation doesn't touch a single rule.

### Do it

Replace `Piece.Move` with the animated version. A plain move slides and bounces;
a capture first hops onto the captured piece, removes it, then continues to the
landing square:

```csharp:Piece.cs
using DG.Tweening;
using UnityEngine.Events;

public void Move(int newTileNumber, UnityAction callback, bool removeMove = false) {
  if (removeMove) {
    int jumpedTile = nextTilesAfterOpponent.FirstOrDefault(j => j.Value == newTileNumber).Key;
    Piece captured = board.Pieces.FirstOrDefault(p => p.TileNumber == jumpedTile);
    Vector3 capturedPos = board.ToWorld(jumpedTile);
    Vector3 landingPos  = board.ToWorld(newTileNumber);

    transform.DOMove(capturedPos, 0.33f / 2).OnComplete(() => {
      captured?.Remove();
      captured?.MoveOut(logic.GetScore(Owner));                 // stack it off-board
      transform.DOMove(landingPos, 0.33f / 2).OnComplete(() => {
        HandleKing(newTileNumber);
        callback.Invoke();
      });
    });
  } else {
    transform.DOMove(board.ToWorld(newTileNumber), 0.33f).OnComplete(() => {
      HandleKing(newTileNumber);
      callback.Invoke();
    });
    transform.DOScale(1.25f, 0.33f / 2).OnComplete(() => transform.DOScale(1, 0.33f / 2));
  }

  logic.Move(tileNumber, newTileNumber);
  tileNumber = newTileNumber;
}

private PlayerTurn Owner => playerTurnNumber == 1 ? PlayerTurn.Player1 : PlayerTurn.Player2;

// A captured piece slides off to the side and stacks with its siblings.
public void MoveOut(int otherPlayerScore) {
  float y = (3.5f * playerTurnNumber) + (otherPlayerScore * 0.25f * playerTurnNumber * -1);
  transform.position = new Vector2(4.75f, y);   // just past the board's right edge
  transform.DOScale(1, 0.33f).SetEase(Ease.OutBack);
}
```

Because `Move` now finishes *later*, it reports back through a `callback`
instead of returning. Update `GameAdapter` to pass a callback — this is the
`StartMoving` shape the shipped `Piece` uses:

```csharp:Piece.cs
public void StartMoving(int tileNumber, UnityAction<bool, bool> callback) {
  if (nextTilesAfterOpponent.Values.Contains(tileNumber))
    Move(tileNumber, () => callback.Invoke(true, true), true);
  else if (nextEmptyTiles.Contains(tileNumber))
    Move(tileNumber, () => callback.Invoke(true, false));
}
```

```csharp:GameAdapter.cs
// the move branch of HandleClick becomes:
pieceSelected.StartMoving(tile, (moved, wasCapture) => {
  if (!moved) return;
  if (wasCapture) gameController.RegisterCapture();
  if (wasCapture && HasDoubleJump(pieceSelected)) return;
  pieceSelected = null;
  gameController.ChangePlayerTurn();
});
```

Finally, make spawning a coroutine so pieces **fly in** one after another
(`Board.SpawnPieces` → the shipped `Board.Initialize`/`InitializePieces` with a
`DOMove` from off-board and a tiny `WaitForSeconds` between pieces).

### Test it

Play. Pieces sweep onto the board at the start, slide with a bounce when moved,
and on a capture your piece pounces on the victim, which then tumbles off to the
side of the board. Same rules — now with life.

### Challenge

Tweak the timings and easings (`0.33f`, `Ease.OutBack`) to taste. Animation
values are pure feel; you can't break a rule by changing them.

## Chapter 15 — Sound

**Goal:** moves, captures, crownings, turn changes and game-over each play a
sound.

### Idea

We want one place that owns audio, reachable from anywhere without wiring a
reference into every class. That's a **Singleton**: a component with a static
`Instance`. `Sound.Instance.PlayGameSound(...)` from any script.

### Do it

**1.** The reusable `Singleton<T>` base (under `Utilities/Patterns`) and a
`Sound` that extends it:

```csharp:Sound.cs
using UnityEngine;

namespace AppTrainers.Games.Checker {
  public class Sound : MonoBehaviour {
    public static Sound Instance { get; private set; }
    [SerializeField] private AudioSource audioSource;
    [SerializeField] private AudioClip[] pieceMoves;   // Move plays a random one
    [SerializeField] private AudioClip king, changeTurn, gameOver, moveOut;

    public enum GameAudio { Move, King, ChangeTurn, GameOver, MoveOut }

    void Awake() {
      if (Instance != null && Instance != this) { Destroy(gameObject); return; }
      Instance = this;
      DontDestroyOnLoad(gameObject);
    }

    // Pick the clip for this sound, then play it. One row per sound.
    public void PlayGameSound(GameAudio audio) {
      AudioClip clip = audio switch {
        GameAudio.Move       => pieceMoves[Random.Range(0, pieceMoves.Length)],
        GameAudio.King       => king,
        GameAudio.ChangeTurn => changeTurn,
        GameAudio.GameOver   => gameOver,
        GameAudio.MoveOut    => moveOut,
        _ => null
      };
      Play(clip);
    }

    void Play(AudioClip clip) {
      if (clip != null) audioSource.PlayOneShot(clip);
    }
  }
}
```

**Reading it:** the `switch` **expression** is a small mapping table — enum on
the left, which clip on the right, one row per sound. It just picks a clip;
`Play` does the work and skips a clip you forgot to assign. Adding a sound is
now three tiny edits: an enum value, a `[SerializeField] AudioClip`, and one row.

> **Note:** the shipped project uses a generic `Singleton<T>` base class so
> other singletons (if you add them) get the same behaviour for free, adds a few
> more clips (valid/invalid piece, UI button), and a matching `PlayUISound`. The
> idea is identical.

**2.** Sprinkle calls where things happen: `Sound.Instance.PlayGameSound(
Sound.GameAudio.Move)` at the start of `Piece.Move`, `King` inside `HandleKing`,
`MoveOut` in `MoveOut`, and `ChangeTurn` when the turn switches (a natural fit
for a `TurnManager.TurnChanged` subscriber).

**3.** Put a `Sound` component (with an `AudioSource` and the clips assigned) in
the scene.

### Test it

Play. Every move clacks, kings chime, captured pieces whoosh off, and turns tick.
Silence would have been fine for the rules — but this is the difference between a
prototype and a game.

### Challenge

Route the crown sound through `HandleKing` so it only plays on a *fresh*
promotion (remember, `Promote` already returns `true` only once).

## Chapter 16 — Highlights: the Indicators

**Goal:** when you select a piece, glowing dots mark every square it can reach;
a piece flashes where it moved from, and a captured piece flashes where it was
taken.

### Idea

Good feedback makes a game feel fair. We add small marker sprites the board can
show and hide:

- up to **four** yellow dots on the move targets (a king has four),
- a **white** flash on the square a piece left,
- a **red** flash where a captured piece was removed.

We wrap them in an `Indicators` class owned by the `Board` (the Board knows
where each tile is in the world). The four dots are **pooled** — created once,
reused every selection — rather than spawned and destroyed.

### Do it

**1.** A single `Indicator` marker (a sprite that can show at a position and
fade):

```csharp:Indicator.cs
using UnityEngine;
using DG.Tweening;

namespace AppTrainers.Games.Checker {
  public class Indicator : MonoBehaviour {
    public enum IndicatorColor { Yellow, Red, White }
    [SerializeField] private SpriteRenderer indicator;
    [SerializeField] private Color yellow, red;
    private IndicatorColor color;

    public void Initialize(IndicatorColor color) { this.color = color; SetColor(color); Reset(); }

    public void Show(Vector3 position) {
      transform.position = position;
      indicator.gameObject.SetActive(true);
      if (color != IndicatorColor.Yellow)                      // flashes fade out
        indicator.DOFade(0, 0.33f).OnComplete(() => indicator.gameObject.SetActive(false));
    }

    public void Reset() => indicator.gameObject.SetActive(false);
    void SetColor(IndicatorColor c) =>
      indicator.color = c == IndicatorColor.Yellow ? yellow : c == IndicatorColor.Red ? red : Color.white;
  }
}
```

**2.** The `Indicators` collection, owned by the board:

```csharp:Indicators.cs
using System.Collections.Generic;
using UnityEngine;

namespace AppTrainers.Games.Checker {
  public class Indicators {
    private readonly Board board;
    private readonly List<Indicator> moveTargets = new List<Indicator>();
    private readonly Indicator moveMarker, removeMarker;

    public Indicators(Indicator prefab, Transform parent, Board board) {
      this.board = board;
      for (int i = 0; i < 4; i++) {                            // pool of 4 target dots
        Indicator t = Object.Instantiate(prefab, parent);
        t.Initialize(Indicator.IndicatorColor.Yellow);
        moveTargets.Add(t);
      }
      moveMarker   = Object.Instantiate(prefab, parent); moveMarker.Initialize(Indicator.IndicatorColor.White);
      removeMarker = Object.Instantiate(prefab, parent); removeMarker.Initialize(Indicator.IndicatorColor.Red);
    }

    public void Show(Piece piece) {
      Reset();
      int i = 0;
      foreach (int tile in piece.NextEmptyTiles)          moveTargets[i++].Show(board.ToWorld(tile));
      foreach (var jump in piece.NextTilesAfterOpponent)  moveTargets[i++].Show(board.ToWorld(jump.Value));
    }

    public void Reset() { foreach (Indicator t in moveTargets) t.Reset(); }
    public void ShowMove(int tile)   => moveMarker.Show(board.ToWorld(tile));
    public void ShowRemove(int tile) => removeMarker.Show(board.ToWorld(tile));
  }
}
```

**3.** Wire it up: `Board` creates `Indicators` (serialize an `indicatorPrefab`
and a parent) and exposes it. In `GameAdapter.Select`, call
`board.Indicators.Show(clicked)`; reset it when a move starts. In `Piece.Move`,
call `board.Indicators.ShowMove(oldTile)` and, in `Remove`,
`board.Indicators.ShowRemove(tileNumber)`.

### Test it

Select a piece: yellow dots light up exactly on its legal squares (four for a
king). Move it: a white flash marks where it came from. Capture: a red flash
marks the kill. The rules didn't change — you can just *see* them now.

### Challenge

Confirm the four dots are reused, not recreated: they're `Instantiate`d once in
the constructor and only repositioned by `Show`. That's the object-pool pattern.

## Chapter 17 — The State Machine, the Menu & a Configurable Board

**Goal:** the finishing pass that turns your working game into the **shipped
project** — a clean state machine for the game flow, a Home menu that picks mode
and colour, and a board you can move, resize, and rescale from the Inspector.

### Idea

Three refinements, each replacing a rough edge with the real thing:

- **A state machine.** Right now `GameController` juggles "initializing / playing
  / finished" with flags. We give each phase its own class implementing a tiny
  `IGameState` (`Enter` / `Tick` / `Exit`), driven by a `GameStateMachine`. The
  click-reading moves into `RunningState`; the game-over popup into
  `FinishedState`. Same behaviour, far clearer.
- **A menu.** A Home scene where `HomeUI` sets `GameSettings.mode` and
  `piceColor`, then `SceneLoader` loads the Game scene.
- **A configurable board.** We finally cash in the promise from Chapters 2–3:
  replace the hard-coded `Size = 8` and origin-at-zero with a serialized
  `boardSize`, `tileSize`, and the board's own position (`Origin`).

### Do it

**1.** The state interface and machine:

```csharp:IGameState.cs
namespace AppTrainers.Games.Checker {
  public interface IGameState { void Enter(); void Tick(); void Exit(); }
}
```

```csharp:GameStateMachine.cs
namespace AppTrainers.Games.Checker {
  public class GameStateMachine {
    public IGameState Current { get; private set; }
    public void ChangeState(IGameState next) { Current?.Exit(); Current = next; Current?.Enter(); }
    public void Tick() => Current?.Tick();
  }
}
```

Split the controller's phases into states — `InitializeState` (spawns the
board), `RunningState` (reads clicks), `FinishedState` (shows the popup),
`AnimationState` (a placeholder for blocking input during moves):

```csharp:RunningState.cs
using UnityEngine;
using UnityEngine.InputSystem;

namespace AppTrainers.Games.Checker {
  public class RunningState : IGameState {
    private readonly GameController controller;
    public RunningState(GameController controller) { this.controller = controller; }

    public void Enter() { }
    public void Tick() {
      if (Mouse.current == null || !Mouse.current.leftButton.wasPressedThisFrame || !controller.CanPlayerPlay()) return;
      Vector3 screen = Mouse.current.position.ReadValue();
      controller.Adapter.HandleClick(Camera.main.ScreenToWorldPoint(screen));
    }
    public void Exit() { }
  }
}
```

`GameController.Update` becomes just `stateMachine.Tick();`, and it creates the
four states in `Awake`, starting in `Initializing`. `RegisterCapture` now calls
`ChangeState(Finished)` instead of setting a bool.

**2.** The menu. `HomeUI` toggles mode/colour and plays; `SceneLoader` wraps
scene loads:

```csharp:HomeUI.cs
using UnityEngine;
using UnityEngine.UI;
using AppTrainers.Core;

namespace AppTrainers.Games.Checker {
  public class HomeUI : MonoBehaviour {
    [SerializeField] private Button playButton, modeButton, colorButton;

    void Awake() {
      modeButton.onClick.AddListener(() =>
        GameSettings.mode = GameSettings.mode == GameSettings.Mode.SinglePlayer
          ? GameSettings.Mode.TwoPlayers : GameSettings.Mode.SinglePlayer);
      colorButton.onClick.AddListener(() =>
        GameSettings.piceColor = GameSettings.piceColor == GameSettings.PiceColor.White
          ? GameSettings.PiceColor.Dark : GameSettings.PiceColor.White);
      playButton.onClick.AddListener(() => SceneLoader.LoadAsync(SceneLoader.AppScene.Game));
    }
  }
}
```

> **Note:** the shipped `HomeUI` also updates the on-screen labels/sprites and
> plays a click sound — see the answer key. The wiring above is the heart of it.

**3.** The configurable board. This is where your simplified early code grows
into the real thing. `Board` publishes a static `MatrixGrid` from a serialized
`boardSize`, adds an `Origin` (its own transform position) and a `tileSize`, and
`Tiles`/`GameLogic` read `Board.MatrixGrid` instead of a local `Size`:

```csharp:Board.cs
[SerializeField] private float tileSize = 1f;   // world units per square
[SerializeField] private int boardSize = 8;     // squares per side
[SerializeField] private bool drawGrid = true;

public static int MatrixGrid = 8;
private void Awake() => MatrixGrid = boardSize;

public Vector2 Origin => transform.position;                  // board can sit anywhere
public float TileSize => tileSize;
public float HalfSize => MatrixGrid / 2f * tileSize;

public Vector3 ToWorld(int tile) => (Vector3)(Origin + Tiles.GetTilePosition(tile, tileSize));
public int ToTile(Vector2 world) => Tiles.GetTileNumber(world - Origin, tileSize);
```

```csharp:Tiles.cs
public static Vector2 GetTilePosition(int tileNumber, float tileSize) {
  int n = Board.MatrixGrid;
  int row = (tileNumber - 1) / n, column = (tileNumber - 1) % n;
  float half = (n - 1) / 2f;
  return new Vector2((column - half) * tileSize, (row - half) * tileSize);
}

public static int GetTileNumber(Vector2 boardSpacePos, float tileSize) {
  int n = Board.MatrixGrid;
  int column = Mathf.FloorToInt(boardSpacePos.x / tileSize) + n / 2;
  int row    = Mathf.FloorToInt(boardSpacePos.y / tileSize) + n / 2;
  return row * n + column + 1;
}
```

Swap every `Size` in `GameLogic` for `Board.MatrixGrid`, and the
click-bounds check in `GameAdapter.HandleClick` to measure against
`board.Origin` and `board.HalfSize`. Now moving the Board GameObject moves the
whole game, `tileSize` matches any board art, and `boardSize` even lets you try
a 10×10 variant — with the gizmo drawing the live grid to line it all up.

### Test it

Play from the **Home** scene: pick Single/Two players and a piece colour, press
Play, and you're in a full match — animated, sounded, highlighted, AI-backed,
and won with a popup. Then, in the Game scene, drag the Board object, tweak
`tileSize`, and watch the gizmo grid follow. **You've built the whole thing.**

### Challenge

Compare your files with the answer-key repo under `Assets/Scripts/AppTrainers/Games/`.
They should line up class-for-class — because every chapter was a step toward
exactly this code.

*You're done. From an empty scene to a complete, polished Checkers game — built
the way real projects grow: the truth of the board first, then the rules, then
the feel.*
