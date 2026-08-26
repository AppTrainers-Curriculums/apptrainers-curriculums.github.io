---
title: "Build a Balloon Pop Game in Unity"
subtitle: "Your First 2D Game in Unity"
author: "Project: balloon  ·  Engine: Unity (C#)  ·  Student Workbook"
coverEyebrow: "Learn to Code · Make Games"
coverTop: "Balloon"
coverRed: "Pop!"
coverSub: "Build it in Unity, step by step — from an empty sky to a full arcade game with score, sound and endless balloons."
coverPill: "Student Workbook"
coverCaption: "Balloon art: gamedeveloperstudio.com"
---

# Part 0 — Before You Start

## What you're going to build

A **balloon popping** game. Colourful balloons float up from the bottom of the
screen, one after another, forever. You **click a balloon and it bursts** — with a
pop animation and a pop sound — and your **score** goes up. Miss it, and it drifts
off the top of the screen and is gone.

That's the whole game. It is small, it is fun, and by the end of this workbook
**you will have written every line of it yourself**.

You'll build it **in small steps**. After almost every chapter you press **Play**
and something new works — first one balloon floating up, then a balloon you can
pop, then a pop animation, then seven colours, then endless balloons, then score
and sound.

## Do I need to know how to code?

**No.** This workbook assumes you have never written a line of code before.

Every piece of code in this book is short, and every line is explained in plain
language before you type it. You will learn the handful of ideas that actually
matter — variables, functions, `if`, and components — by *using* them, not by
reading about them.

Type the code out by hand rather than copying it. Typing is slow, and slow is how
things stick.

## How this workbook works

Every chapter follows the same beats:

- **Goal** — what actually works when you finish the chapter.
- **Idea** — the concept, in plain language.
- **Do it** — the exact C# code to type, plus the Unity Editor steps to wire it up.
- **Test it** — press Play and see the checkpoint.
- **Challenge** — an optional twist to try on your own.

> **Tip:** keep the **Console** window open (Window → General → Console). When
> something doesn't work, the Console usually tells you exactly why, and on which
> line.

## The controls

The **mouse**, and nothing else.

- **Left click on a balloon** — pop it, and score a point.
- **Left click on empty sky** — nothing happens. You missed.

## The pieces we'll build

The whole game is just **six small scripts**, each with one job:

```
BalloonController ── one balloon: floats up, pops, and cleans itself up
BalloonRaycaster ─── turns your mouse click into a ray, finds the balloon
BalloonSpanwer ───── keeps making new balloons, forever
GameManager ──────── the boss: starts the game, reacts to a pop
UIController ─────── the score, and the game over panel
SoundControoller ─── plays the pop sound
```

Don't worry about all of them now — each one appears in the chapter where we
actually need it.

> **Note:** two of those names are spelled a little oddly — `BalloonSpanwer`
> (instead of *Spawner*) and `SoundControoller` (with three `o`s). Those typos are
> in the real project, so we keep them. In C#, **a name is just a name** — but it
> has to match *everywhere*, exactly, including capital letters. Getting used to
> that is part of the job.

## One-time project setup

This Unity project is already prepared for you. Here is what's in it, so you know
where things live:

- **The art.** Seven balloons — red, blue, green, yellow, purple, orange and pink
  — live in `Assets/Design/`. Each balloon has **6 images**: image `1.png` is the
  whole balloon, and `2.png`–`6.png` are the frames of it bursting.
- **The sounds.** `Assets/Sounds/` has `Background Music.wav` and
  `Destroy Balloon.wav`.
- **The animations.** `Assets/Animations/` already has a folder per colour, each
  holding an *idle* clip, a *destroy* clip and an **Animator Controller**. We'll
  look inside one of them in Chapter 4.
- **Where your code goes.** Every script you write lives in `Assets/Scripts/`.
- **Input.** We read the mouse with Unity's modern **Input System**
  (`Mouse.current`). It's already installed and switched on.

> **Tip:** if the balloon sprites ever look blurry or dark, select them in the
> Project window and check **Filter Mode** and **Compression** in the Inspector.

# Part 1 — A Balloon in the Sky

## Chapter 1 — Set Up the Sky

**Goal:** an empty scene you can see — a camera pointed at a patch of sky, sized so
that a balloon crossing it takes a couple of seconds.

### Idea

A Unity **Scene** is a container for **GameObjects**. A GameObject on its own is
nothing — an empty box with a position. It only becomes something when you attach
**Components** to it: a *Sprite Renderer* makes it visible, a *Collider 2D* makes
it clickable and solid, a *script* gives it behaviour.

The one GameObject every scene needs is the **Main Camera**. In 2D the camera is
**orthographic**: it shows a flat rectangle of the world with no perspective. Its
**Size** is the number of world units from the middle of the screen to the top. So
Size `5` means the camera shows **10 units** from top to bottom. Remember that
number — everything else in this game is measured against it.

### Do it

1. Open the scene: in the **Project** window go to `Assets/Scenes/` and
   double-click your scene. (If you're starting from an empty one, that's fine
   too.)
2. Select **Main Camera** in the **Hierarchy**. In the **Inspector**:
   - **Projection** = `Orthographic`
   - **Size** = `5`
   - **Position** = `(0, 0, -10)` — the camera sits back a little, looking at the
     `z = 0` plane where all our 2D objects live.
3. Set the **Background** colour to a sky colour you like — click the colour swatch
   next to **Background** and pick a light blue.

```
                    +5  ── top of the screen
                     │
    -8.9 ────────────0──────────── +8.9    ← camera Size 5, 16:9 screen
                     │
                    -5  ── bottom of the screen
```

### Test it

Press **Play**. You get a blank sky. That's correct — there is nothing in the world
yet. Press **Play** again to stop.

> **Tip:** get in the habit of pressing Play, looking, and pressing Play again to
> **stop**. Changes you make to objects *while the game is running* are thrown away
> when you stop. This catches everybody at least once.

## Chapter 2 — A Balloon That Floats Up

**Goal:** one balloon on screen, rising steadily from the bottom and removing itself
once it sails off the top.

### Idea

Time to write your first script.

A script is a **component** you write yourself. You attach it to a GameObject, and
Unity calls certain functions inside it automatically:

- `Awake()` — runs **once**, the moment the object is created. Good for setting
  things up.
- `Update()` — runs **every single frame**, maybe 60 times a second. Good for
  movement.

To move something a little bit each frame we use `transform.Translate(...)`.
`transform` is the component that holds an object's position, rotation and scale —
every GameObject has one.

There is one trap. `Update` does **not** run at a steady speed: on a fast computer
it runs more often than on a slow one. If we moved the balloon by a fixed amount
each frame, the game would run faster on better hardware. The fix is
`Time.deltaTime` — the number of seconds since the last frame. Multiply by it and
your movement becomes *per second* instead of *per frame*:

```
speed = 3   →   3 units per second, on every computer

  fast computer:  many small steps  · · · · · · · · · · · ·
  slow computer:  few big steps     ·    ·    ·    ·    ·
                                    └──── same distance ────┘
```

Memorise this shape — you will write it in every game you ever make.

The balloon also has to **go away** once it sails off the top, or your game slowly
fills up with invisible balloons climbing forever. So how do we know it's gone?

The tempting answer is a timer: *"delete it five seconds after it appears."* It is
one line, and it is wrong. Look at what our own numbers do to it:

```
   spawn at y = -5.4          top of the screen is y = +5
   balloon is 2.6 tall        so it clears the top at about y = +6.3
                              → it must travel about 11.7 units to escape

   a fast balloon (speed 5) covers 25 units in 5 seconds   ✓ long gone
   a slow balloon (speed 1) covers  5 units in 5 seconds   ✗ still on screen!
```

A fixed time only works if everything moves at a fixed speed — and ours don't. The
slow ones would blink out of existence in front of the player, halfway up the
screen, for no visible reason. **About a third of every balloon you spawn.**

So we ask the question that actually matters — *"has it left the screen yet?"* —
by checking the balloon's **height** instead of the clock. Speed stops mattering
entirely: fast or slow, every balloon disappears at the same place, off-screen,
where nobody can see it happen.

> **Note:** this is a habit worth building early. When you catch yourself timing
> something, ask whether you could just *check* for it instead. Checking survives
> every change you make later; a magic number like `5f` quietly stops being true.

### Do it — build the balloon object

1. In the **Hierarchy**, right-click → **2D Object → Sprite**. Name it `Red`.
2. With `Red` selected, find the **Sprite** field in its **Sprite Renderer**.
   Click the little circle and choose the red balloon image
   (`Assets/Design/…/red-balloon/1.png`), or just drag the file onto the field.
3. The balloon is huge — the image is 512 pixels tall. Set the **Scale** to
   `(0.5, 0.5, 0.5)` so it takes up a comfortable slice of the screen.
4. Add a collider so we can click it later: **Add Component → Circle Collider 2D**.
   Unity guesses a radius that wraps the sprite — that's fine.
5. Drag `Red` down so it sits **just below** the bottom of the camera view — around
   `(0, -5.4, 0)`. It should be off-screen, waiting to float up.

### Do it — the script

In the **Project** window, right-click `Assets/Scripts` → **Create → Scripting →
MonoBehaviour Script**, and name it exactly `BalloonController`. Double-click it to
open it, delete what's inside, and type this:

```csharp:BalloonController.cs
using UnityEngine;

// One balloon. It floats up, and it is gone once it leaves the screen.
public class BalloonController : MonoBehaviour {

  public float speed;   // how fast this balloon rises, in units per second

  // Just above the top of the screen. Past this line the balloon has escaped.
  [SerializeField] float escapeHeight = 7f;

  void Awake() {
    // Every balloon gets its own random speed, so they don't all move as a block.
    speed = Random.Range(1f, 5f);
  }

  void Update() {
    // Move a little bit upward, every frame, scaled to real seconds.
    transform.Translate(Vector2.up * speed * Time.deltaTime);

    // Off the top of the screen? Nobody can pop it now, so remove it.
    if (transform.position.y > escapeHeight) {
      Destroy(gameObject);
    }
  }
}
```

Line by line:

- `public float speed;` — a **variable**: a labelled box holding a number.
  `float` means "a number that can have a decimal point". `public` means Unity
  shows it in the Inspector, so you can watch and tweak it.
- `Random.Range(1f, 5f)` — a random decimal between 1 and 5. The `f` tells C# the
  number is a `float`.
- `[SerializeField] float escapeHeight = 7f;` — the cut-off line. It's a **setting**,
  so it belongs at the top of the script with a name, not buried in the middle of a
  function as a bare `7`. Anyone reading `y > escapeHeight` understands it instantly;
  nobody understands `y > 7`.
- `transform.position.y` — the balloon's current height, right now. `transform`
  holds the position, and `.y` is the up-down part of it.
- `Destroy(gameObject)` — "destroy the GameObject I'm attached to". Note the
  lowercase `gameObject`: that means *this* object. If you write `Destroy(this)`
  you delete only the **script**, and the balloon keeps floating with nothing
  driving it. A classic first bug.
- `Vector2.up` — a direction, a shorthand for `(0, 1)`: straight up the screen.

Now attach it: select `Red` in the Hierarchy, and drag `BalloonController.cs` from
the Project window onto the Inspector. (Or **Add Component → Balloon Controller**.)

### Test it

Press **Play**. The balloon rises smoothly from below the screen, crosses it, and
disappears from the Hierarchy shortly after it leaves the top — never while you can
still see it. Press Play again and it will rise at a slightly different speed —
that's `Random.Range` doing its job.

Watch the **Hierarchy** while it happens. The `Red` object is there, then it's
gone. That is `Destroy` doing exactly what it says.

> **Note:** if nothing moves, check the Console. The most common causes are: the
> script isn't attached, or the file name and the `class` name don't match exactly
> (`BalloonController.cs` must contain `class BalloonController`).

### Challenge

Make the balloon drift sideways as it rises. Hint: `Vector2.up` is `(0, 1)`. What
would `new Vector2(0.3f, 1f)` do?

# Part 2 — Popping Balloons

## Chapter 3 — Pop It With a Raycast 2D

**Goal:** click a balloon and it disappears. Click empty sky and nothing happens.

This is the heart of the game. Take your time with this chapter.

### Idea

Your mouse lives on the **screen**, and it is measured in **pixels** — the pointer
might be at `(840, 470)`, meaning 840 pixels from the left edge and 470 up from the
bottom.

Your balloon lives in the **world**, and it is measured in **units** — it might be
at `(2.4, 1.1)`.

Those are two completely different coordinate systems, and the click has to travel
from one to the other. It takes three steps:

```
   1. READ THE MOUSE            2. SCREEN → WORLD            3. RAYCAST
   ┌────────────────────┐
   │                    │        ScreenToWorldPoint            │
   │        ✛           │      ────────────────────►           ▼
   │   (840, 470) px    │           (2.4, 1.1) units      ┌──────────┐
   │                    │                                 │ collider │ ← hit!
   └────────────────────┘                                 └──────────┘
        the screen                   the world              a balloon
```

**Step 3 is the raycast.** A **ray** is an invisible line fired into the world; the
physics engine tells you what it touched first. In a 3D game you would fire a long
ray *into* the screen. In a **2D** game the world is flat — everything is already
at the same depth — so we don't need length at all. We fire a ray **with no
direction**, `Vector2.zero`, which the physics engine reads as: *"don't travel
anywhere, just tell me what is sitting on this exact spot."*

```csharp
RaycastHit2D hit = Physics2D.Raycast(worldPosition, Vector2.zero);
```

What comes back is a `RaycastHit2D` — a little report card about what was found. The
part we care about is `hit.collider`:

- `hit.collider` is **`null`** → the ray hit **nothing**. Empty sky.
- `hit.collider` is **not null** → it holds the **Collider 2D** it touched, and from
  that we can reach the GameObject and its scripts.

This is why we gave the balloon a **Circle Collider 2D** back in Chapter 2. A ray
can only hit a collider. No collider, no hit — an object with only a sprite is, as
far as physics is concerned, a ghost.

> **Note:** this is the single most reusable trick in this book. "Where did the
> player click, and what was there?" is the same question in a card game, a
> strategy game, a puzzle game and a level editor. It is always these three steps.

### Do it — let the balloon be popped

First, give the balloon a way to die on command. Open `BalloonController.cs` and add
a `Pop` function at the bottom of the class:

```csharp:BalloonController.cs
using UnityEngine;

public class BalloonController : MonoBehaviour {

  public float speed;

  [SerializeField] float escapeHeight = 7f;

  void Awake() {
    speed = Random.Range(1f, 5f);
  }

  void Update() {
    transform.Translate(Vector2.up * speed * Time.deltaTime);

    if (transform.position.y > escapeHeight) {
      Destroy(gameObject);
    }
  }

  // Called from outside when the player's click lands on this balloon.
  public void Pop() {
    Destroy(gameObject);
  }
}
```

`public` matters here. A `public` function can be called by **other scripts**; a
private one can't. We are about to call `Pop()` from a different script, so it has
to be public.

### Do it — the raycaster

Create `Assets/Scripts/BalloonRaycaster.cs`:

```csharp:BalloonRaycaster.cs
using UnityEngine;
using UnityEngine.InputSystem;   // the modern Input System, for reading the mouse

// Turns a mouse click into a 2D ray, and pops whatever balloon that ray hits.
//
// This script lives on the Main Camera, because only the camera knows how to
// turn a point on your screen (pixels) into a point in the game world (units).
public class BalloonRaycaster : MonoBehaviour {

  Camera cam;

  void Awake() {
    cam = Camera.main;   // "the camera tagged MainCamera" — that's ours
  }

  void Update() {
    // No mouse attached? Nothing to do.
    if (Mouse.current == null) {
      return;
    }

    // Only react on the single frame the left button goes DOWN,
    // otherwise we would fire every frame while the button is held.
    if (Mouse.current.leftButton.wasPressedThisFrame) {
      // 1. Where is the mouse on the screen? (in pixels)
      Vector2 screenPosition = Mouse.current.position.ReadValue();

      // 2. Turn those pixels into a spot inside the game world.
      Vector2 worldPosition = cam.ScreenToWorldPoint(screenPosition);

      // 3. Fire a 2D ray at that spot and see what it hits.
      //    Direction Vector2.zero means "don't travel, just test this exact spot".
      RaycastHit2D hit = Physics2D.Raycast(worldPosition, Vector2.zero);

      // 4. Hit nothing? The click missed — the player hit empty sky.
      if (hit.collider == null) {
        return;
      }

      // 5. We hit a collider. Is it a balloon?
      BalloonController balloon = hit.collider.GetComponent<BalloonController>();
      if (balloon != null) {
        balloon.Pop();
      }
    }
  }
}
```

There are three new ideas in there. They are worth knowing properly:

**`if` — asking a question.** The code inside the `{ }` only runs when the answer is
yes. Everything interesting in this script sits inside
`if (Mouse.current.leftButton.wasPressedThisFrame) { … }`, so it only happens on the
frame you actually click. The rest of the time `Update` does nothing at all.

**`return` — leaving early.** `return;` means *"stop running this function right
now"*. We use it twice as an emergency exit: no mouse, leave; the ray hit nothing,
leave. It saves us from wrapping the whole body in another layer of `if`, and it
reads the way you'd say it out loud: *no mouse? then there's nothing to do here.*

**`GetComponent<BalloonController>()`.** The collider we hit belongs to *some*
GameObject. This asks that object: *"do you have a BalloonController on you?"* If
yes, you get it back and can call `balloon.Pop()`. If no, you get `null` — which is
why we check `if (balloon != null)` first. (`!=` means "is not equal to".) Without
that check, clicking any other object with a collider would crash the game with a
`NullReferenceException` — the error you will see more than any other in your
career.

> **Tip:** always put `{ }` around the body of an `if`, even when it's a single
> line. C# lets you leave them out, and every so often somebody adds a second line
> underneath — which then runs *every* time, because it was never inside the `if`
> at all. The braces cost you two keystrokes and remove the whole problem.

Now attach it: select **Main Camera** in the Hierarchy and add the
**Balloon Raycaster** component to it.

### Test it

Press **Play** and click the balloon as it rises. It vanishes instantly. Click the
empty sky — nothing happens, and, importantly, no red errors in the Console.

You now have a game. A very short one, but a game.

> **Tip:** nothing popping? Check three things, in this order: does the balloon have
> a **Circle Collider 2D**? Is `BalloonRaycaster` on the **Main Camera**? Is the
> camera tagged **MainCamera** (top-left of the Inspector)? `Camera.main` returns
> `null` without that tag.

### Challenge

Print what you clicked. Add `Debug.Log(hit.collider.name);` just after the `null`
check and watch the Console fill up as you click. `Debug.Log` is how you look inside
a running game — you will use it constantly.

## Chapter 4 — Make the Pop Look Good

**Goal:** the balloon bursts into pieces instead of blinking out of existence, and
removes itself when the burst finishes.

### Idea

Right now `Pop()` destroys the balloon on the spot. That's honest, but it looks
cheap. A real pop is an **animation** — six images shown quickly, one after another.

Unity animation has three parts:

```
  Animation Clip   the frames themselves      "Red Destroy" — 6 images, 30 per second
        │
  Animator Controller   a little map of states and the arrows between them
        │
  Animator (component)   plays the map on one GameObject
```

The controller for the red balloon lives at `Assets/Animations/Red Balloon/`. Open
it (double-click `Red.controller`) and you'll see two boxes: **RedBalloonIdle** —
just the whole balloon, sitting there — and **Red Destroy**, the burst. An arrow
runs from Idle to Destroy, and that arrow has a **condition**: a **Trigger**
parameter called `Destroy`.

A **Trigger** is a parameter you can only *set*, like pressing a doorbell. From
code, `anim.SetTrigger("Destroy")` presses it, the arrow fires, and the burst plays.

That leaves one problem: **who deletes the balloon when the burst ends?** If we
destroy it the instant it's clicked, the animation never gets a chance to play —
the balloon is gone before the first frame is drawn.

The animation is 6 frames at 30 frames per second, so it lasts `6 ÷ 30` = **0.2
seconds**. That is all we need to know. We already have a function that can delete
something *later*:

```csharp
Destroy(gameObject, 0.2f);   // remove me in 0.2 seconds, not right now
```

`Destroy` takes an optional second argument: a delay in seconds. Give it one and
the object stays alive for exactly that long, then goes. Click, burst, gone.

```
  click ──► Pop() ──┬──► SetTrigger("Destroy")   ──► the burst plays  (0.2s)
                    │
                    └──► Destroy(gameObject, 0.2f) ──► the balloon leaves the game
```

Rather than hard-code `0.2f` in the middle of the function, we'll put it in a
variable at the top of the script. Then if you ever slow the animation down, you
change one number in the Inspector instead of hunting through code.

### Do it — talk to the Animator from code

Open `BalloonController.cs` and change it so that popping plays the animation
instead of deleting the object:

```csharp:BalloonController.cs
using UnityEngine;

// One balloon. It floats up, and it dies in one of two ways:
//   1. the player pops it  (BalloonRaycaster calls Pop)
//   2. it escapes off the top of the screen
public class BalloonController : MonoBehaviour {

  public float speed;

  // How long the pop animation lasts. We wait this long before removing
  // the balloon, so the player actually sees it burst.
  [SerializeField] float popDuration = 0.2f;

  // Just above the top of the screen. Past this line the balloon has escaped.
  [SerializeField] float escapeHeight = 7f;

  Animator anim;    // the Animator component sitting next to us
  bool popped;      // a balloon can only be popped once

  void Awake() {
    anim = GetComponent<Animator>();
    speed = Random.Range(1f, 5f);
  }

  void Update() {
    transform.Translate(Vector2.up * speed * Time.deltaTime);

    if (transform.position.y > escapeHeight) {
      Destroy(gameObject);
    }
  }

  // Called by BalloonRaycaster when the player's click ray hits this balloon.
  public void Pop() {
    if (popped) {
      return;
    }
    popped = true;

    anim.SetTrigger("Destroy");         // play the pop animation
    Destroy(gameObject, popDuration);   // remove it once the burst has played
  }
}
```

Three things are new:

- `GetComponent<Animator>()` — the same "do you have one of these?" question as
  before, but asked about **our own** GameObject. We ask once, in `Awake`, and keep
  the answer in `anim`. Asking every frame would be wasteful.
- `bool popped;` — a **bool** is a variable that is only ever `true` or `false`. It
  starts as `false`. The first click sets it to `true`, and every click after that
  hits the `if (popped)` guard and bounces off. Without it, a fast clicker could pop
  the same balloon three times — and in a couple of chapters that would mean three
  points for one balloon.
- `[SerializeField] float popDuration = 0.2f;` — a private setting you can still
  tune in the Inspector. The `= 0.2f` is its **starting value**, matching the
  length of the burst animation.

> **Note:** there are now **two** ways out of the game for a balloon — the escape
> check in `Update`, and this delayed `Destroy` in `Pop`. They can't fight: a popped
> balloon is almost never near the top of the screen, and if one somehow is, whichever
> arrives first wins and the other quietly has nothing left to delete.

### Do it — wire it up in the Editor

1. Select `Red` in the Hierarchy → **Add Component → Animator**.
2. In the Animator component, set **Controller** to `Red` (from
   `Assets/Animations/Red Balloon/`). Drag it in, or use the circle picker.

### Test it

Press **Play** and click the balloon. It bursts into pieces, and a fifth of a second
later it disappears from the Hierarchy on its own.

> **Tip:** if the balloon vanishes instantly with no burst, the Animator's
> **Controller** field is probably empty, or the trigger name doesn't match. The
> parameter is spelled `Destroy`, with a capital D, and `SetTrigger("Destroy")` has
> to match it **exactly** — Unity will not warn you if it doesn't.

# Part 3 — A Whole Sky Full of Balloons

## Chapter 5 — Seven Colours, Saved as Prefabs

**Goal:** seven balloon **prefabs** — red, blue, green, yellow, purple, orange and
pink — ready to be created on demand.

### Idea

You have exactly one balloon, hand-built in the scene. A game needs hundreds, and
you are not building them by hand.

A **prefab** is a GameObject saved to a file: its components, its settings, its
values — the whole recipe. Once you have the recipe you can stamp out copies at
runtime with one line of code, and they all arrive fully assembled.

The other half of the deal: edit the prefab file and **every copy changes**. Fix the
balloon's collider once and all seven hundred balloons in your game are fixed.

### Do it — make the red prefab

1. Make sure `Red` in the Hierarchy is finished: Sprite Renderer, Circle Collider
   2D, Animator (controller `Red`), `BalloonController`, scale `0.5`.
2. Create a folder `Assets/Prefabs` if it isn't there (right-click in the Project
   window → **Create → Folder**).
3. **Drag `Red` from the Hierarchy into `Assets/Prefabs`.** That's it — you have a
   prefab. The name in the Hierarchy turns blue to show it's now an instance of a
   prefab.

### Do it — the other six

Repeat for each colour. Quickest route:

1. Select `Red` in the Hierarchy and press **Cmd/Ctrl + D** to duplicate it.
2. Rename the copy `Blue`.
3. In the **Sprite Renderer**, swap the sprite for the blue balloon
   (`Assets/Design/…/blue-balloon/1.png`).
4. In the **Animator**, swap the Controller for `Blue`
   (`Assets/Animations/Blue Balloon/Blue.controller`).
5. Drag it into `Assets/Prefabs`.

Do that for **Blue, Green, Yellow, Purple, Orange** and **Pink**. When you're done,
`Assets/Prefabs` holds seven prefabs and you can **delete every balloon from the
Hierarchy** — the scene should be empty sky again. The recipes are saved; that's
what matters.

> **Note:** each colour has **its own** Animator Controller, because each one plays
> its own coloured burst frames. Swapping the sprite but forgetting the controller
> is the classic mistake here: you get a blue balloon that pops into red shards.

### Challenge

Give one colour a personality. Open the `Purple` prefab and change its Circle
Collider 2D to be a little smaller than the sprite — a balloon that is harder to
hit than it looks.

## Chapter 6 — Endless Balloons

**Goal:** balloons rising forever, in random colours, from random spots along the
bottom of the screen — and a boss object that starts it all.

### Idea

We need two new scripts, and they have very different jobs.

**The spawner** makes balloons. Every second it picks a random prefab and a random
spawn point and calls `Instantiate` — the function that stamps out a copy of a
prefab and drops it into the running scene.

To repeat something on a timer, Unity gives us `InvokeRepeating`:

```csharp
InvokeRepeating(nameof(Spawn), 1, 1f);
//                  │          │   └── then again every 1 second, forever
//                  │          └────── wait 1 second before the first one
//                  └───────────────── the name of the function to call
```

`nameof(Spawn)` is a small piece of C# that means "the text `"Spawn"`, but checked
by the compiler". You could write `"Spawn"` directly — but then if you ever rename
the function, the string quietly keeps pointing at a function that no longer exists
and the game silently stops spawning. With `nameof`, renaming breaks the build
immediately and tells you where. **Always use `nameof` here.**

**The game manager** is the boss. Every game grows a script like this: one object
that knows the order things happen in, and that everything else can reach. Notice
the spawner does **not** start itself — it waits to be switched on by the manager.
That way there is exactly one place in your project that decides when the game
begins.

To let *any* script reach the manager, we use a **static** variable:

```csharp
public static GameManager instance;
```

`static` means the variable belongs to the *class* rather than to any one copy of
it. The manager fills it in with itself in `Awake`, and from then on any script
anywhere can say `GameManager.instance.SomeFunction()`. This pattern has a name —
the **singleton** — and you will meet it in every Unity project you ever open.

### Do it — spawn points

1. In the Hierarchy, right-click → **Create Empty**, name it `Pos Spanwer`. This is
   just a folder to keep things tidy — an empty GameObject with only a position.
2. Right-click `Pos Spanwer` → **Create Empty**, name it `Pos 1`. Set its
   **Position** to `(-1.56, -5.42, 0)` — just below the bottom edge of the camera.
3. Duplicate it twice more: `Pos 2` at `(1.46, -5.42, 0)` and `Pos 3` at
   `(-0.02, -5.42, 0)`.

Empty objects are invisible in the Game view — they exist purely to mark a spot.

### Do it — the spawner script

Create `Assets/Scripts/BalloonSpanwer.cs`:

```csharp:BalloonSpanwer.cs
using UnityEngine;

// Keeps making balloons: a random colour, at a random spawn point, once a second.
public class BalloonSpanwer : MonoBehaviour {

  [SerializeField] GameObject[] balloons;    // the seven prefabs
  [SerializeField] Transform[] balloonPos;   // the spawn point markers

  public void Initialize() {
    // Do not use InvokeRepeating("Spawn"), use nameof(Spawn).
    InvokeRepeating(nameof(Spawn), 1, 1f);
  }

  public void StopSpawning() {
    if (IsInvoking(nameof(Spawn))) {
      CancelInvoke(nameof(Spawn));
    }
  }

  void Spawn() {
    int randomBalloon = Random.Range(0, balloons.Length);
    int randomBalloonPos = Random.Range(0, balloonPos.Length);

    Instantiate(balloons[randomBalloon],
                balloonPos[randomBalloonPos].position,
                balloonPos[randomBalloonPos].rotation);
  }
}
```

New ideas here:

- **`GameObject[]`** — the square brackets make it an **array**: a numbered list of
  things instead of a single thing. `balloons.Length` is how many are in it, and
  `balloons[0]` is the first one. Computers count from **zero**, so a list of 7
  runs from `balloons[0]` to `balloons[6]`.
- **`Random.Range(0, balloons.Length)`** — with whole numbers (`int`), `Random.Range`
  **includes** the first number and **excludes** the last. With 7 balloons that's
  0 to 6 — exactly the valid slots. That mismatch with the decimal version (which
  includes both ends) is deliberate, and it is designed for exactly this line.
- **`[SerializeField]`** — normally only `public` variables show up in the
  Inspector. `[SerializeField]` shows a private one *without* making it public to
  other scripts. It's the polite way to expose a setting: visible to you in the
  Editor, invisible to the rest of the code.
- **`Instantiate(what, where, whichWayUp)`** — create a copy of a prefab at a
  position and rotation. This is the line that actually makes a balloon.

### Do it — the game manager script

Create `Assets/Scripts/GameManager.cs`:

```csharp:GameManager.cs
using UnityEngine;

// The boss. Starts the game, and reacts when a balloon is popped.
public class GameManager : MonoBehaviour {

  public static GameManager instance;          // any script can reach us through this

  [SerializeField] BalloonSpanwer balloonSpanwer;

  void Awake() {
    instance = this;                           // "the one GameManager is me"
  }

  void Start() {
    balloonSpanwer.Initialize();               // let the balloons begin
  }

  // Called by a balloon the moment it is popped.
  public void DestroyBalloon() {
    // Sound and score arrive in the next two chapters.
  }
}
```

`Awake` runs before `Start`, on **every** object in the scene, which is exactly why
the singleton is set up in `Awake` and used in `Start`: by the time anything asks
for `GameManager.instance`, it is already filled in.

### Do it — wire it up in the Editor

1. Hierarchy → **Create Empty**, name it `BalloonSpanwer`, and add the
   **Balloon Spanwer** component to it.
2. In its Inspector, open **Balloons** and set **Size** to `7`. Drag your seven
   prefabs from `Assets/Prefabs` into the seven slots.
3. Open **Balloon Pos**, set **Size** to `3`, and drag `Pos 1`, `Pos 2` and `Pos 3`
   from the Hierarchy into the slots.
4. Hierarchy → **Create Empty**, name it `GameManager`, add the **Game Manager**
   component.
5. Drag the `BalloonSpanwer` object from the Hierarchy into the manager's
   **Balloon Spanwer** field.

That last step is the one everyone forgets. If a field says **None**, the game will
stop with a `NullReferenceException` the instant it needs it.

### Test it

Press **Play**. After one second, balloons start rising — random colours, random
lanes, forever. Click them and they pop. This is a real arcade game now; it just
doesn't keep score yet.

### Challenge

Make it harder. Change the spawn interval from `1f` to `0.4f` and watch the sky
fill up. Then move your three spawn points further apart along the bottom edge so
balloons use the whole width of the screen.

# Part 4 — Score, Sound and Game Over

## Chapter 7 — The UI: Keeping Score

**Goal:** a number in the corner of the screen that goes up by one every time you
pop a balloon.

### Idea

On-screen text lives on a **Canvas** — a special object that draws UI on top of
everything else, in screen space rather than world space. Any UI element you make
gets parented to a Canvas automatically.

The counting itself is three lines of C#, and it introduces the last big idea in
this book: **one script, one job**. We're calling ours `UIController`, and its job is
*everything the player sees on the Canvas* — starting with the score, and in Chapter
9 the game over panel too. It knows nothing about balloons, clicks or sound. The
`GameManager` is the only thing that talks to it. Keeping jobs separate like this is
what stops a game turning into spaghetti at around the 500-line mark.

> **Note:** we could have called it `ScoreController`, and it would fit perfectly
> — today. But by the end of the book it will also own the game over screen and the
> retry button, and a class called `ScoreController` that runs the retry button is a
> small lie that costs somebody an afternoon later. Name a script for the **job**
> it does, not for the first thing you happen to put in it.

Here is the full path a single click now takes:

```
  click ──► BalloonRaycaster ──► balloon.Pop() ──► GameManager.instance.DestroyBalloon()
                                                             │
                                                             └──► uiController.AddScore(1)
```

We'll draw the number with **TextMeshPro** — Unity's text system. It renders
crisply at any size, because it stores the letter shapes as outlines rather than as
a fixed grid of pixels. Blow it up to fill the screen and the edges stay sharp.

### Do it — the score display

1. Hierarchy → right-click → **UI → Text - TextMeshPro**.
2. **The first time only**, Unity opens a window called **TMP Importer** asking you
   to *Import TMP Essentials*. Click the button and wait a moment — it adds an
   `Assets/TextMesh Pro` folder holding the default font. You will never see this
   popup again.
3. Unity creates a **Canvas**, an **EventSystem**, and your text inside the Canvas.
   Rename the text object `Text Score`.
4. In the Inspector, set the **Text Input** box to `0`, bump **Font Size** to
   something readable like `40`, and pick a **Vertex Color** that stands out against
   your sky.
5. Use the **Rect Transform** anchor box (the square diagram at the top of the Rect
   Transform) to pin it to a corner, then nudge it inwards.

> **Tip:** the text may look tiny or clipped at first. Widen the **Width** and
> **Height** on the Rect Transform — TextMeshPro hides any letters that don't fit
> inside the box.

### Do it — the script

Create `Assets/Scripts/UIController.cs`:

```csharp:UIController.cs
using UnityEngine;
using TMPro;               // needed for TextMeshPro

// Everything the player sees on the Canvas. Knows nothing about balloons.
public class UIController : MonoBehaviour {

  [SerializeField] TMP_Text scoreText;  // the on-screen label

  int score;                            // starts at 0 automatically

  public void AddScore(int value) {
    score += value;                       // add value to score
    scoreText.text = score.ToString();    // numbers can't be shown directly — turn it into text
  }
}
```

- `using TMPro;` — TextMeshPro lives in its own **namespace**, a sort of surname for
  a group of scripts. Without this line C# has never heard of `TMP_Text` and the
  Console tells you the type could not be found.
- `TMP_Text` is the type of the text component. (You may also see `TextMeshProUGUI`
  in tutorials — that's the specific UI version. `TMP_Text` is its more general
  form, and it accepts either, so it's the safer thing to ask for.)
- `int` is a whole number — you can't score half a balloon.
- `score += value;` is shorthand for `score = score + value;`.
- `score.ToString()` converts the number `7` into the text `"7"`. A text component
  can only display text, never a number, so this conversion is required — and
  forgetting it is one of the first errors every beginner meets.
- `AddScore(int value)` takes a **parameter**: a value handed in by whoever calls
  it. Calling `AddScore(1)` puts `1` into `value`. Building it this way means a
  golden balloon worth five points is `AddScore(5)` — no new code needed.

### Do it — connect the wires

1. Hierarchy → **Create Empty**, name it `UIController`, add the
   **UI Controller** component.
2. Drag `Text Score` from the Hierarchy into its **Score Text** field.
3. Select `GameManager` and add a field for the score controller. Open
   `GameManager.cs` and add the two marked lines:

```csharp:GameManager.cs
using UnityEngine;

public class GameManager : MonoBehaviour {

  public static GameManager instance;

  [SerializeField] UIController uiController;            // ← new
  [SerializeField] BalloonSpanwer balloonSpanwer;

  void Awake() {
    instance = this;
  }

  void Start() {
    balloonSpanwer.Initialize();
  }

  public void DestroyBalloon() {
    uiController.AddScore(1);                            // ← new
  }
}
```

4. Back in the Inspector, drag the `UIController` object into the manager's new
   **Ui Controller** field.
5. Finally, make a popped balloon tell the manager. Open `BalloonController.cs` and
   add one line to `Pop()`:

```csharp:BalloonController.cs
  public void Pop() {
    if (popped) {
      return;
    }
    popped = true;

    anim.SetTrigger("Destroy");              // play the pop animation
    GameManager.instance.DestroyBalloon();   // ← new: tell the boss

    Destroy(gameObject, popDuration);        // remove it once the burst has played
  }
```

### Test it

Press **Play** and pop a few balloons. The number climbs: 1, 2, 3. Let a balloon
escape off the top of the screen — the score does **not** change, because escaping
never calls `Pop()`.

Take a second to appreciate what just happened: a click on the camera reached a
balloon, which reached the manager, which reached the score, which reached the
screen. Five separate scripts, each doing one job, cooperating.

> **Tip:** `NullReferenceException` on the very first pop? An Inspector field is
> empty. Check `GameManager → Ui Controller` and `UIController → Score Text`.

## Chapter 8 — Sound

**Goal:** a satisfying pop on every hit, and music underneath.

### Idea

Unity plays sound through an **Audio Source** component. An **Audio Clip** is the
sound file; the Audio Source is the speaker that plays it.

There are two ways to use one:

- **Play** — for one long sound at a time. Good for background music: set the clip,
  tick **Loop** and **Play On Awake**, and forget about it.
- **PlayOneShot(clip)** — fires a sound and lets it overlap with sounds already
  playing. This is what you want for pops: click three balloons quickly and you
  should hear three pops on top of each other, not one pop cutting off the last.

### Do it — the speakers

1. Hierarchy → **Create Empty**, name it `SoundManager`.
2. **Add Component → Audio Source**. Set its **AudioClip** to
   `Assets/Sounds/Background Music.wav`, tick **Loop** and **Play On Awake**. That
   is your music — no code involved.
3. **Add Component → Audio Source** a *second* time on the same object. Leave its
   clip **empty** and **untick Play On Awake**. This one is our sound-effects
   speaker, and the script will feed it clips.

### Do it — the script

Create `Assets/Scripts/SoundControoller.cs` (three `o`s — match the project):

```csharp:SoundControoller.cs
using UnityEngine;

// Plays the game's sound effects.
public class SoundControoller : MonoBehaviour {

  [SerializeField] AudioSource sourceEffect;      // the effects speaker
  [SerializeField] AudioClip destroyBalloonClip;  // the pop sound

  public void PlayDestroyBalloonEffect() {
    sourceEffect.PlayOneShot(destroyBalloonClip);
  }
}
```

### Do it — connect the wires

1. Add the **Sound Controoller** component to the `SoundManager` object.
2. Drag the **second** Audio Source (the empty one) into its **Source Effect**
   field. The neatest way: with `SoundManager` selected, drag the Audio Source
   *component header* from the Inspector down into the field.
3. Drag `Assets/Sounds/Destroy Balloon.wav` into **Destroy Balloon Clip**.
4. Add the sound controller to the manager — two more lines in `GameManager.cs`:

```csharp:GameManager.cs
using UnityEngine;

public class GameManager : MonoBehaviour {

  public static GameManager instance;

  [SerializeField] SoundControoller soundControoller;    // ← new
  [SerializeField] UIController uiController;
  [SerializeField] BalloonSpanwer balloonSpanwer;

  void Awake() {
    instance = this;
  }

  void Start() {
    balloonSpanwer.Initialize();
  }

  public void DestroyBalloon() {
    soundControoller.PlayDestroyBalloonEffect();         // ← new
    uiController.AddScore(1);
  }
}
```

5. Drag `SoundManager` into the manager's **Sound Controoller** field.

### Test it

Press **Play**. Music starts. Pop a balloon: *pop*. Pop three fast: three overlapping
pops. Your game now has sound, score, animation and endless play — it is finished,
in the sense that it is genuinely playable.

> **Tip:** no sound at all? Check the **mute** button at the top of the Game view —
> it silences everything and it is on by default in some layouts.

## Chapter 9 — Game Over

**Goal:** letting balloons escape finally costs you something. Miss five and the
game ends — the balloons stop coming.

### Idea

Right now the game is endless in the boring sense: you can ignore it completely and
nothing happens. A game needs a way to **lose**.

We already know the exact moment a balloon escapes — it's the line in
`BalloonController.Update` where the balloon crosses `escapeHeight`. That's our
hook. Every escape tells the manager, the manager counts, and at five the game is
over.

Two ideas make this chapter work.

**A counter and a limit.** `misses` starts at 0 and climbs; `maxMisses` is the line
in the sand. Making the limit a `[SerializeField]` means you can retune the
difficulty from the Inspector without touching code — try `3` for brutal, `10` for
gentle.

**A flag.** `bool gameOver` remembers that the game has ended. Balloons already in
the sky keep floating after the last miss, and the player can keep clicking them, so
every entry point has to check the flag first and refuse politely. This is the same
trick as `popped` on the balloon: **a bool that remembers something already
happened**, guarding the door so it can't happen twice.

And this is finally where `StopSpawning()` earns its place:

```
   miss #5 ──► GameOver() ──┬──► gameOver = true      (stop scoring)
                            │
                            └──► StopSpawning()       (stop the InvokeRepeating)
```

`CancelInvoke` switches off the repeating timer we started back in Chapter 6. Without
it, balloons would keep arriving forever after a game that has already ended.

### Do it — report the escape

Open `BalloonController.cs` and tell the manager when a balloon gets away:

```csharp:BalloonController.cs
  void Update() {
    transform.Translate(Vector2.up * speed * Time.deltaTime);

    // Gone off the top? It got away.
    if (transform.position.y > escapeHeight) {
      // Only count it as a miss if the player never popped it. A balloon popped
      // near the top can still drift past this line while it is bursting.
      if (!popped) {
        GameManager.instance.BalloonEscaped();
      }

      Destroy(gameObject);
    }
  }
```

`!popped` reads as *"popped is **not** true"* — the `!` flips a true/false answer
around. Without that inner check, a balloon you popped at the top of the screen
would burst, score you a point, drift over the line during its 0.2 seconds of
bursting, and then **also** count as a miss. A bug you'd never guess from watching
the game; you'd just find the game ending too early sometimes.

### Do it — count the misses

Here is the finished `GameManager.cs` — the last change it needs:

```csharp:GameManager.cs
using UnityEngine;

// The boss. Starts the game, reacts to a pop, counts misses, and ends the game.
public class GameManager : MonoBehaviour {

  public static GameManager instance;

  [SerializeField] SoundControoller soundControoller;
  [SerializeField] UIController uiController;
  [SerializeField] BalloonSpanwer balloonSpanwer;

  [SerializeField] int maxMisses = 5;

  int misses;
  bool gameOver;

  void Awake() {
    instance = this;
  }

  void Start() {
    balloonSpanwer.Initialize();
  }

  // A balloon was popped by the player.
  public void DestroyBalloon() {
    if (gameOver) {
      return;
    }

    soundControoller.PlayDestroyBalloonEffect();
    uiController.AddScore(1);
  }

  // A balloon floated off the top without being popped.
  public void BalloonEscaped() {
    if (gameOver) {
      return;
    }

    misses++;

    if (misses >= maxMisses) {
      GameOver();
    }
  }

  void GameOver() {
    gameOver = true;
    balloonSpanwer.StopSpawning();
    uiController.ShowGameOver();
  }
}
```

- `misses++` is shorthand for `misses = misses + 1`. Adding one to a counter is so
  common that C# gave it its own symbol.
- `>=` means "greater than or equal to". We use it rather than `==` because it's
  the safer habit: if a stray double-count ever pushed `misses` from 4 to 6,
  `== 5` would sail straight past the end of the game and never fire.
- Notice what `GameOver()` does **not** contain: any mention of a panel, a button or
  a Canvas. It says *"show the game over screen"* and leaves the how to the
  `UIController`. Swap that screen for a fancy animated one later and this function
  never changes.

Now look back at `StopSpawning()` in the spawner and you'll see it was built for
this all along:

```csharp
public void StopSpawning() {
  if (IsInvoking(nameof(Spawn))) {
    CancelInvoke(nameof(Spawn));
  }
}
```

It asks *"is that timer actually running?"* before cancelling it, so calling it
twice is harmless.

### Do it — build the game over panel

Now the screen itself. A **panel** is a UI object with other UI objects parented to
it — switch the parent off and everything inside it disappears together. That
parent-child relationship is what lets one line of code hide a whole screen.

1. Right-click the **Canvas** → **UI → Panel**, and name it `GameOverPanel`. Unity
   gives it a semi-transparent white **Image** already stretched over the whole
   screen. Click its **Color** and drag the alpha down to taste — a dark, mostly
   see-through panel dims the game behind it and makes the text pop.
2. Right-click `GameOverPanel` → **UI → Text - TextMeshPro**. Set the text to
   `GAME OVER`, make the font big (`80`), and centre it with the **Alignment**
   buttons.
3. Right-click `GameOverPanel` → **UI → Button - TextMeshPro**. Place it under the
   text, and expand it in the Hierarchy to change its child label to `Retry`.
4. Leave the panel **switched on** for now so you can see what you're arranging —
   the code is about to take care of hiding it.

> **Tip:** anything you want to appear on the game over screen must be **inside**
> `GameOverPanel` in the Hierarchy — indented underneath it. If the Retry button
> sits next to the panel instead of inside it, the button will still be sitting
> there during normal play.

### Do it — show it and reload

Add three things to `UIController.cs` — the panel, the function that reveals it, and
the one the button calls:

```csharp:UIController.cs
using UnityEngine;
using UnityEngine.SceneManagement;   // for reloading the scene
using TMPro;

// Everything the player sees on the Canvas: the score, and the game over panel.
public class UIController : MonoBehaviour {

  [SerializeField] TMP_Text scoreText;
  [SerializeField] GameObject gameOverPanel;

  int score;

  void Awake() {
    // Always start hidden, however it was left in the Editor.
    gameOverPanel.SetActive(false);
  }

  public void AddScore(int value) {
    score += value;
    scoreText.text = score.ToString();
  }

  public void ShowGameOver() {
    gameOverPanel.SetActive(true);
  }

  // Wired to the Retry button's On Click () list in the Inspector.
  public void Retry() {
    SceneManager.LoadScene(SceneManager.GetActiveScene().name);
  }
}
```

- `SetActive(false)` switches a GameObject off — it vanishes, and so does everything
  parented under it. `SetActive(true)` brings it all back. That's the entire trick
  behind almost every menu, popup and screen you have ever seen in a game.
- **Hiding it in `Awake` is deliberate.** You could untick the panel in the Inspector
  instead, but then you'd have to remember to untick it every time you finish
  tweaking the layout — and the day you forget, your players start the game staring
  at GAME OVER. Let the code guarantee it and you can leave the panel visible in the
  Editor forever.
- `SceneManager.LoadScene(SceneManager.GetActiveScene().name)` reloads **this** scene
  — the one you're already in. Everything is built again from scratch: score back to
  zero, misses back to zero, no balloons. It is the simplest possible restart, and
  plenty of shipped games use exactly this.

### Do it — connect the wires

1. Select `UIController` and drag `GameOverPanel` from the Hierarchy into its
   **Game Over Panel** field.
2. Select the **Button**. At the bottom of the **Button** component find
   **On Click ()** and press **+**.
3. Drag the `UIController` object into the empty object slot.
4. Open the function dropdown (it says *No Function*) and choose
   **UIController → Retry ()**.

> **Tip:** if `Retry` isn't in that dropdown, it isn't `public`. The button can only
> see public functions. This is the same rule that made `Pop()` public back in
> Chapter 3.

### Test it

Press **Play**. The panel is hidden even though you left it switched on in the
Editor — that's `Awake` doing its job. Now sit on your hands and let five balloons
escape. Spawning stops, and **GAME OVER** appears with a Retry button. Click it: the
scene reloads, the score is back to `0`, and balloons start rising again.

That's a complete game loop — play, lose, try again.

> **Tip:** the game ended too early? You probably missed the `if (!popped)` check,
> so your own successful pops near the top of the screen were counting against you.
> `NullReferenceException` on the very first frame? The **Game Over Panel** field on
> `UIController` is empty.

### Challenge

Show the final score on the panel. Add another TextMeshPro label under
`GameOverPanel`, give `UIController` a field for it, and set its text inside
`ShowGameOver()`. You already have the number in `score`.

## You built this

Every script in the game, and what it does:

```
BalloonController ── floats up · pops once · bursts, waits, deletes itself
BalloonRaycaster ─── mouse → world → Physics2D.Raycast → Pop()
BalloonSpanwer ───── Instantiate a random prefab at a random spot, every second
GameManager ──────── singleton · starts the spawner · pops, misses, game over
UIController ─────── score += 1 · shows game over · reloads the scene
SoundControoller ─── PlayOneShot(pop)
```

Roughly 140 lines of C#. Along the way you used **variables**, **functions**,
**parameters**, `if`, **bools as flags**, **arrays**, **components**, **prefabs**,
**static**, and the raycast — which is to say, most of what you need to build
anything else in Unity.

# Part 5 — Make It Yours

Everything below is optional, and everything below is more interesting than
anything above. Pick one. Get it wrong a few times. That's the job.

### Challenge — Bombs

Add a black balloon that **ends the game instantly** if you pop it. Make a `Bomb`
prefab with its own script and put it in the spawner's array. You already have
`GameOver()` in the manager — it just needs to be reachable, so change it from
`void GameOver()` to `public void GameOver()` and call it from the bomb.

### Challenge — Combos

Track how long it's been since the last pop. Pop two balloons within half a second
and award double points. Hint: `Time.time` is the number of seconds since the game
started — remember it on each pop and compare.

### Challenge — Escalating difficulty

Start the spawn interval at `1.5f` and make it shrink every ten pops, down to a
floor of `0.2f`. You will need to `CancelInvoke` and start a new `InvokeRepeating`
with the new interval.

### Challenge — Show the misses

The player has no idea how close they are to losing. Add a second TextMeshPro label
that reads `Misses: 2 / 5` and update it from `BalloonEscaped()`. Make it turn red
on the last life.

### Challenge — High score

Save the best score between sessions with
`PlayerPrefs.SetInt("HighScore", score)` and read it back with
`PlayerPrefs.GetInt("HighScore", 0)`. Show it next to the current score.

### Challenge — Juice

Small touches, big difference: make balloons drift sideways in a gentle wave using
`Mathf.Sin(Time.time)`; scale a balloon up slightly the moment it's clicked; add a
particle burst; tint the sky darker as the score climbs.
