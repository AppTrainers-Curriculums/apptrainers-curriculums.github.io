---
title: "Build a Rocket Lander Game in Unity"
subtitle: "Your First 3D Game in Unity"
author: "Project: Rocket Bootcamp  ·  Engine: Unity (C#)  ·  Student Workbook"
coverEyebrow: "Learn to Code · Make Games"
coverTop: "Rocket"
coverRed: "Bootcamp"
coverSub: "Build it in Unity, step by step — from an empty scene to a three-level lander with real physics, particle effects and a shipped Windows build."
coverPill: "Student Workbook"
---

# Part 0 — Before You Start

## What you're going to build

A **rocket lander**. You start sitting on a blue launch pad. Hold **Space** and the
engine fires, pushing the rocket the way its nose is pointing. Tap **A** and **D**
to tip left and right. Gravity is pulling you down the entire time.

Your job is to fly up through a course of obstacles and put the rocket down on the
**green landing pad**. Touch anything else — a wall, a ledge, the floor — and you
explode, and the level starts over.

Then you do it again on a harder course. Then again, on one where the obstacles
are moving.

That's the whole game. It is small, it is genuinely hard to fly, and by the end of
this workbook **you will have written every line of it yourself**.

You'll build it **in small steps**. After almost every chapter you press **Play**
and something new works — first a rocket that falls, then one that thrusts, then
one that steers, then one that explodes, then one that wins, then engine flames,
then three whole levels.

## Do I need to know how to code?

**No.** This workbook assumes you have never written a line of code before.

Every piece of code in this book is short, and every line is explained in plain
language before you type it. You will learn the handful of ideas that actually
matter — variables, functions, `if`, components, and how a physics engine thinks —
by *using* them, not by reading about them.

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

The keyboard, and only six keys — and three of those are for you, not the player.

| Key | What it does |
| --- | --- |
| **Space** | Fire the main engine |
| **A** | Rotate left |
| **D** | Rotate right |
| **L** | Skip to the next level (yours, for testing) |
| **C** | Turn crashing off and on (yours, for testing) |
| **Escape** | Stop Play Mode, or quit the built game |

## The pieces we'll build

The whole game is **seven small scripts**, each with exactly one job:

```
RocketMovement ─── reads Space and A/D, pushes and turns the Rigidbody
RocketEffects ──── owns eight particle systems: flames, smoke, explosion, fireworks
RocketCollision ── what did we just hit? friendly, finish, or fatal
LevelFlow ──────── reload this level, or load the next one, after a pause
CameraFollow ───── keeps the rocket on screen without snapping around
MovingObstacle ─── slides one hazard back and forth, forever
GameCommands ───── the L, C and Escape shortcuts
```

Don't worry about all of them now — each one appears in the chapter where we
actually need it.

> **Note:** notice that **no script is called `Game` or `Manager`**. Every name
> above says what the thing *does*. When you come back to this project in six
> months and something is wrong with the explosion, you already know which file to
> open. That is not a style rule; it is the whole reason the code stays workable.

## One-time project setup

This Unity project is already prepared for you. Here is what's in it, so you know
where things live:

- **The rocket model.** A stylized rocket mesh lives in
  `Assets/Aseed/Stylized Rocket/`. The prefab you'll actually drop into the scene
  is `URP/Prefab/Stylized Rocket.prefab`.
- **Particle art.** `Assets/SimpleFX/` holds simple flame, smoke and explosion
  pieces, and `Assets/_Project/Materials/Particles/` has one clearly named material
  per effect — `EngineFlame`, `CrashExplosion`, `SuccessGreen`, and so on.
- **Where your code goes.** Every script you write lives under
  `Assets/_Project/Scripts/`, in one of three folders: `Player/`, `Systems/` or
  `Gameplay/`.
- **Where your scenes go.** `Assets/_Project/Scenes/`.
- **Rendering.** The project uses the **Universal Render Pipeline (URP)**. You do
  not have to do anything about that; it just means materials look the way they do.
- **Input.** We read the keyboard with Unity's modern **Input System**. It's
  already installed and switched on.

**You need:** Unity **6000.3.20f1** (or close to it) and a Windows or Mac keyboard.
Open the repository folder from Unity Hub.

> **Tip:** if Unity opens to a grey, empty window, look at the **Project** window,
> go to `Assets/_Project/Scenes/` and double-click a scene. Unity does not always
> reopen the scene you had last.

## A word about the shape of this game

Everything happens on a flat plane. The rocket, the pads and the obstacles all sit
at `z = 0`, and the camera looks straight at them from `z = -18`. The models are
fully 3D and they're lit like 3D, but the *game* is 2D: you only ever move left,
right, up and down.

That trick has a name — **2.5D** — and it is worth knowing, because it gives you
good-looking 3D visuals with the far simpler rules of a 2D game.

```
        y
        │        the whole game lives on this flat plane
        │   ┌──────────────────────────┐
        │   │        ▲ rocket          │
        │   │        │                 │
        └───┼────────┴─────────────────┼──── x
            └──────────────────────────┘
                       z = 0
                          ↑
                          │  camera sits back here, at z = -18
```

# Part 1 — Get Off the Ground

## Chapter 1 — The Launch Pad

**Goal:** a scene you can look at — a launch pad, a landing pad high above it, and
a rocket that sits there and then, when you press Play, falls over.

### Idea

A Unity **Scene** is a container for **GameObjects**. A GameObject on its own is
nothing — an empty box with a position. It only becomes something when you attach
**Components** to it: a *Mesh Renderer* makes it visible, a *Collider* gives it a
solid shape, a *Rigidbody* hands it over to the physics engine, a *script* gives it
behaviour.

The component that matters most in this game is the **Rigidbody**. Attach one, and
you stop moving that object yourself. From then on you *ask* — "push here, this
hard" — and Unity works out where the object actually ends up, including gravity,
momentum, and what happens when it hits a wall.

That trade is the whole reason the game feels good. You never have to write
"falling". You get it for free, and you get it *correct*, because the same maths
that makes the rocket fall also makes it tumble when you clip a ledge with one fin.

### Do it — the scene

1. **File → New Scene → Basic (Built-in)**. Save it into
   `Assets/_Project/Scenes/` as `Level01_Basics`.
2. Select **Main Camera**. Set its **Position** to `(0, 3, -18)` and leave the
   rotation at `(0, 0, 0)`. It's now looking straight down the z-axis at where our
   game will happen.
3. Select **Directional Light** and give it a rotation of about `(50, -30, 0)`, so
   the rocket is lit from above and slightly to the side.

### Do it — the pads and the floor

Every solid thing in this game is a **cube**, stretched. That is not a shortcut we
are taking because we're beginners — it's how blockouts are built in real studios.
Shapes first, art later.

Make each one with **GameObject → 3D Object → Cube**, then set its **Transform** in
the Inspector:

| Name | Position | Scale |
| --- | --- | --- |
| `Launch Pad` | `(0, -0.5, 0)` | `(8, 1, 6)` |
| `Finish Pad` | `(0, 38, 0)` | `(8, 1, 6)` |
| `Crash Floor` | `(0, -3, 0)` | `(30, 1, 6)` |
| `Left Boundary` | `(-14, 19, 0)` | `(1.5, 46, 6)` |
| `Right Boundary` | `(14, 19, 0)` | `(1.5, 46, 6)` |
| `Training Ledge` | `(0, 17, 0)` | `(7, 1.5, 5)` |
| `Upper Left Ledge` | `(-6.5, 28, 0)` | `(8, 1.5, 5)` |

Now colour them, so you can tell at a glance what will kill you. In
`Assets/_Project/Materials/` there are four materials waiting: `LaunchPad` (blue),
`LandingPad` (green), `Hazard` (red) and `MovingHazard` (orange). Drag the right
one onto each cube in the Scene view.

Blue is safe. Green is the goal. Red is death. **Teach that with colour and you
never have to explain it in words.**

```
      y = 38  ┌────────┐            ← Finish Pad   (green)
              └────────┘
    │                        │
    │  y = 28 ┌──────┐       │      ← Upper Left Ledge (red)
    │         └──────┘       │
    │                        │
    │  y = 17    ┌─────┐     │      ← Training Ledge   (red)
    │            └─────┘     │
    │                        │      ← the two Boundaries (red)
    │        ┌────────┐      │
    │        └────────┘      │      ← Launch Pad  (blue)   y = -0.5
    └────────────────────────┘      ← Crash Floor (red)    y = -3
  x = -14                     x = 14
```

### Do it — the rocket

1. In the **Project** window, find
   `Assets/Aseed/Stylized Rocket/URP/Prefab/Stylized Rocket.prefab` and drag it
   into the **Hierarchy**.
2. Rename the object at the top `Rocket`, and set its **Position** to
   `(0, 0.05, 0)` — resting on the launch pad.
3. With `Rocket` selected: **Add Component → Rigidbody**.
4. **Add Component → Capsule Collider**. Adjust its **Height** and **Radius** in
   the Inspector until the green wireframe wraps the rocket body reasonably
   closely. It does not need to be perfect.

> **Note:** the model already has its own child objects. Leave them alone. The
> Rigidbody and the collider go on the **parent** — the one thing physics moves —
> and everything underneath comes along for the ride. This is a rule you will use
> in every Unity project you ever build.

### Test it

Press **Play**. The rocket sits for a moment and then topples off the pad and falls
past the floor, or lies down on it.

That is a **success**. Gravity is real, your collider works, and you have not
written a single line of code yet. Press **Play** again to stop.

> **Tip:** if the rocket falls straight *through* the launch pad, the pad has no
> **Box Collider** — check the Inspector. Every 3D primitive gets one by default,
> so the usual cause is that it got removed, or you made an empty GameObject
> instead of a Cube.

### Challenge

Move the camera to `(0, 12, -30)` and press Play. You can now see the whole level
at once, but the rocket is tiny. Put it back to `(0, 3, -18)` afterwards — in
Chapter 8 we'll get the best of both by making the camera follow.

## Chapter 2 — Thrust

**Goal:** hold **Space** and the rocket lifts off the pad. Let go and it falls back
down.

### Idea

Three new ideas arrive at once here, and they all matter.

**First: reading a key.** We use Unity's Input System, and the piece of it we need
is an `InputAction` — an object that knows which key it's watching and can answer
"is it down right now?". We make it a `[SerializeField]`, which means it shows up
in the Inspector and *you* pick the key there rather than hard-coding it.

**Second: force, not position.** The rocket has a Rigidbody, so we don't move it —
we push it. `AddRelativeForce` is the push, and the word **Relative** is the
important half: it pushes along the rocket's *own* up direction, not the world's.
Tilt the rocket 30° and the thrust tilts with it. That one word is the entire
difference between a lander and a lift.

```
     rocket upright              rocket tilted right
          ▲ thrust                      ↗ thrust
          │                          ／
        ┌─┴─┐                     ┌──┐
        │   │                     │  │
        └───┘                     └──┘
      AddRelativeForce always pushes along the nose
```

**Third: `FixedUpdate`, not `Update`.** `Update` runs once per drawn frame — as
often as your computer can manage, which is not a steady rate. `FixedUpdate` runs
on the physics clock, exactly 50 times a second, on every machine. Anything you
say to a Rigidbody belongs in `FixedUpdate`. Put it in `Update` and your rocket
literally flies better on a better graphics card.

> **Note:** you may have seen `Time.deltaTime` used to smooth out `Update`. That
> works for movement you do yourself. Here we are handing the job to the physics
> engine, and the physics engine already has a steady clock — that clock is
> `FixedUpdate`. Use the right one and you don't need the correction.

### Do it — the script

In the **Project** window, right-click `Assets/_Project/Scripts/Player` →
**Create → Scripting → MonoBehaviour Script**, and name it exactly
`RocketMovement`. Double-click it, delete what's inside, and type this:

```csharp:RocketMovement.cs
using UnityEngine;
using UnityEngine.InputSystem;

namespace RocketBootcamp
{
    [RequireComponent(typeof(Rigidbody))]
    public class RocketMovement : MonoBehaviour
    {
        [SerializeField] private InputAction thrust;
        [SerializeField] private float thrustForce = 20f;

        private Rigidbody rocketRigidbody;

        private void Awake()
        {
            rocketRigidbody = GetComponent<Rigidbody>();
        }

        private void OnEnable()
        {
            thrust.Enable();
        }

        private void OnDisable()
        {
            thrust.Disable();
        }

        private void FixedUpdate()
        {
            ApplyThrust();
        }

        private void ApplyThrust()
        {
            if (thrust.IsPressed())
            {
                rocketRigidbody.AddRelativeForce(Vector3.up * thrustForce, ForceMode.Force);
            }
        }
    }
}
```

Walking down it:

- `namespace RocketBootcamp` — a surname for our classes. It keeps our
  `RocketMovement` from ever colliding with somebody else's, and every script in
  this project will use it.
- `[RequireComponent(typeof(Rigidbody))]` — a promise Unity enforces. Attach this
  script to something with no Rigidbody and Unity adds one for you, and then won't
  let you delete it. Bugs that can't happen don't need fixing.
- `[SerializeField] private` — the field is private to other code, but still shows
  in the Inspector. This is the pairing you want almost every time: tuneable by a
  designer, not touchable by another script.
- `GetComponent<Rigidbody>()` in `Awake` — "the Rigidbody on my own GameObject,
  please." We ask **once**, when the object is created, and keep the answer. Asking
  every frame would be work for no reason.
- `OnEnable` / `OnDisable` — an `InputAction` is asleep until you `Enable()` it, and
  it should be switched off again when the script stops. These two functions are
  Unity telling you exactly when.
- `Vector3.up * thrustForce` — `Vector3.up` is a direction, `(0, 1, 0)`.
  Multiplying by `20` makes it a push of twenty units of force. Direction times
  strength; that's what a `Vector3` is for.

### Do it — wire it up in the Editor

1. Select `Rocket` in the Hierarchy → **Add Component → Rocket Movement**.
2. In the Inspector, find the **Thrust** field and click the little **+** to add a
   binding. Click the **Path** dropdown, then **Listen**, then press **Space** on
   your keyboard. Unity fills the binding in for you.
3. On the Rigidbody, tick **Use Gravity** (it should already be on) and set
   **Interpolate** to `Interpolate` — this smooths the visible motion between
   physics steps, so the rocket doesn't look jittery.

### Test it

Press **Play** and hold **Space**. The rocket lifts off the pad, wobbling and
tipping as it goes. Let go and it falls.

It is almost impossible to control. That is exactly right — you have thrust and no
steering. Chapter 3 fixes half of that, and Chapter 3 is also where you find out
that the wobble is a *choice*.

> **Tip:** nothing happens when you press Space? Check the **Thrust** binding
> actually shows something like `<Keyboard>/space`. An empty action never fires and
> Unity never warns you.

### Challenge

Set `thrustForce` to `8` and press Play. Now try `60`. Somewhere between those the
rocket stops being a brick and starts being a jet you can't control. Find the
number you like — this is game design, and it is done exactly like this, by hand.

## Chapter 3 — Steering

**Goal:** **A** and **D** tip the rocket left and right, and it stays in the flat
plane instead of tumbling into the background.

### Idea

Rotating a Rigidbody has the same rule as moving one: **ask, don't set.**
`transform.Rotate` would teleport the rocket to a new angle and the physics engine
would have no idea it happened — you'd pass straight through walls at the moment
you turn. `rocketRigidbody.MoveRotation` tells physics about the turn, so collisions
still work while you're turning.

Rotation in 3D is stored as a **Quaternion**, which is four numbers and is not
worth explaining today. What you need is the one function that turns human angles
into one: `Quaternion.Euler(0, 0, angle)`. Angle around z is the one that spins
things in our flat plane.

Multiplying two quaternions means "do the first turn, then the second". So:

```
  rocketRigidbody.rotation  *  Quaternion.Euler(0, 0, amount)
  └── where we're facing ───┘   └── a little more turn ─────┘
```

Now, the wobble. The rocket tips and tumbles into the distance because **nothing is
stopping it**. Physics is free to rotate it around all three axes and move it along
all three. We only want two positions (x and y) and one rotation (z). So we tell
the Rigidbody to freeze the rest — and the moment we do, the rocket becomes a
2.5D object that just happens to be drawn in 3D.

And one last thing, the one everybody gets wrong the first time: the rotation input
comes back as `-1` for A and `+1` for D, but rotating by a *positive* z angle turns
you **counter-clockwise** — to the left. Press D, go left. We fix it with a minus
sign, and we write a comment next to it, because in three weeks it will look like a
typo.

### Do it — the script

Open `RocketMovement.cs` and add the rotation half:

```csharp:RocketMovement.cs
using UnityEngine;
using UnityEngine.InputSystem;

namespace RocketBootcamp
{
    [RequireComponent(typeof(Rigidbody))]
    public class RocketMovement : MonoBehaviour
    {
        [SerializeField] private InputAction thrust;
        [SerializeField] private InputAction rotation;
        [SerializeField] private float thrustForce = 20f;
        [SerializeField] private float rotationSpeed = 100f;

        private Rigidbody rocketRigidbody;

        private void Awake()
        {
            rocketRigidbody = GetComponent<Rigidbody>();
        }

        private void OnEnable()
        {
            thrust.Enable();
            rotation.Enable();
        }

        private void OnDisable()
        {
            thrust.Disable();
            rotation.Disable();
        }

        private void FixedUpdate()
        {
            ApplyThrust();
            ApplyRotation();
        }

        private void ApplyThrust()
        {
            if (thrust.IsPressed())
            {
                rocketRigidbody.AddRelativeForce(Vector3.up * thrustForce, ForceMode.Force);
            }
        }

        private void ApplyRotation()
        {
            float rotationInput = rotation.ReadValue<float>();

            // A gives -1 and D gives +1, but a positive z-angle turns left.
            // The minus sign is what makes D actually go right.
            if (Mathf.Abs(rotationInput) < 0.01f)
            {
                return;
            }

            float rotationAmount = -rotationInput * rotationSpeed * Time.fixedDeltaTime;
            rocketRigidbody.MoveRotation(rocketRigidbody.rotation * Quaternion.Euler(0f, 0f, rotationAmount));
        }
    }
}
```

Two things deserve a second look:

- `if (Mathf.Abs(rotationInput) < 0.01f) return;` — an **early return**. If the
  player isn't holding anything, leave immediately and don't do the rest. Reading
  a value of exactly `0` is not something you can count on with analogue inputs, so
  we ask "is it *near* zero?" instead. Getting into this habit now will save you
  from a whole family of bugs later.
- `Time.fixedDeltaTime` — the length of one physics step, `0.02` seconds. Multiply
  by it and `rotationSpeed = 100` means *100 degrees per second*, which is a number
  a human can reason about, rather than *100 degrees per physics step*, which would
  be a blur.

### Do it — wire it up in the Editor

1. Select `Rocket`. In **Rocket Movement**, find the **Rotation** action, click
   **+**, and choose **Add 1D Axis Composite** (not a plain binding).
2. Set **Negative** to the **A** key and **Positive** to the **D** key, using
   **Listen** for each.
3. On the **Rigidbody**, open **Constraints** and tick:
   - **Freeze Position** → **Z**
   - **Freeze Rotation** → **X** and **Y**
4. Still on the Rigidbody, set **Collision Detection** to `Continuous` — the rocket
   moves fast, and this stops it tunnelling through thin walls at high speed. Set
   **Linear Damping** to about `0.15`, which takes the very slightest edge off the
   drift.

> **Note:** those constraints are the entire "2.5D" trick, and they are worth
> understanding rather than just ticking. Freezing position z means the rocket can
> never drift toward or away from the camera. Freezing rotation x and y means it
> can never tip over into the background. What's left is exactly a 2D game — with
> the lighting, shadows and models of a 3D one.

### Test it

Press **Play**. Hold **Space** and tap **A** and **D**. The rocket now flies: it
tips the way you tell it, the thrust follows the nose, and it stays flat on to the
camera.

Try to land it gently on the green pad at the top. You can't — you go straight
through it, or bounce off. Nothing knows what a landing *is* yet. That's Part 2.

### Challenge

Set `rotationSpeed` to `250` and fly around. Then try `40`. Fast rotation makes the
rocket twitchy and hard to aim; slow rotation makes it feel heavy and makes tight
gaps nearly impossible. There is no right answer, only the one that matches the
levels you're going to build.

# Part 2 — Crash and Land

## Chapter 4 — Friendly, Finish, and Everything Else

**Goal:** the Console prints `Crash!` when you hit a wall and `Finish!` when you
touch the green pad — and says nothing at all when you're sitting on the launch
pad.

### Idea

When two colliders touch and one of them has a Rigidbody, Unity calls a function
on both of them: `OnCollisionEnter`. You don't register for it, you don't turn it
on — you just write a function with that exact name and Unity finds it.

It hands you a `Collision` object describing what happened. We only need one thing
out of it: `collision.gameObject`, the thing we hit.

So — how do we tell a landing pad from a wall? They are both grey cubes as far as
code is concerned. The answer is **tags**: a short label you stick on a GameObject
in the Inspector, and read back with `CompareTag`.

We need exactly two:

| Tag | Goes on | What it means |
| --- | --- | --- |
| `Friendly` | the launch pad | touching this is fine, ignore it |
| `Finish` | the landing pad | you won |
| *(untagged)* | everything else | you died |

That third row is the design decision worth noticing. We could have tagged every
wall `Hazard` and checked for it — and then the day you add a level and forget one
tag, that wall silently becomes safe and your level is broken in a way that's very
hard to see. Instead, **everything is lethal unless it was explicitly marked
safe**. Forget a tag now and the failure is loud and immediate.

> **Note:** design your defaults so that the thing you forget to do fails *safely*.
> This applies far beyond tags — it is one of the genuinely transferable ideas in
> this book.

### Do it — the tags

1. Select `Launch Pad`. At the top of the Inspector, click the **Tag** dropdown →
   **Add Tag…** → **+** → type `Friendly` → **Save**.
2. Add a second tag the same way: `Finish`.
3. Now go back and actually assign them: `Launch Pad` → **Tag: Friendly**, and
   `Finish Pad` → **Tag: Finish**.
4. Leave every other cube on **Untagged**.

> **Tip:** adding a tag to the list does **not** assign it. Everybody misses step 3
> the first time. If your crashes don't work, check the Tag dropdown at the very
> top of the Inspector, not the object's name.

### Do it — the script

Create `RocketCollision` in `Assets/_Project/Scripts/Player`:

```csharp:RocketCollision.cs
using UnityEngine;

namespace RocketBootcamp
{
    public class RocketCollision : MonoBehaviour
    {
        public const string FriendlyTag = "Friendly";
        public const string FinishTag = "Finish";

        private void OnCollisionEnter(Collision collision)
        {
            if (collision.gameObject.CompareTag(FriendlyTag))
            {
                return;
            }

            if (collision.gameObject.CompareTag(FinishTag))
            {
                Debug.Log("Finish!");
            }
            else
            {
                Debug.Log("Crash!");
            }
        }
    }
}
```

- `public const string FriendlyTag = "Friendly";` — a **constant**: a name for a
  value that never changes. Why bother, when `"Friendly"` is right there? Because
  a typo in a `const` is a **compiler error you see instantly**, and a typo in
  `"Freindly"` is a silent bug that makes your launch pad kill you. Name your magic
  strings once, in one place, and the problem stops existing.
- `Debug.Log("Crash!")` — prints to the Console. This is how you check that
  something works *before* you build the thing that reacts to it. Write the
  detection, prove the detection, then write the consequence.

### Do it — wire it up in the Editor

Select `Rocket` → **Add Component → Rocket Collision**. There is nothing to
configure yet.

### Test it

Open the **Console** (Window → General → Console) and press **Play**.

- Sitting on the launch pad: **nothing**. Correct — it's `Friendly`.
- Fly into a wall or the floor: `Crash!`
- Land on the green pad at the top: `Finish!`

Nothing else happens yet. The rocket bounces off the wall and keeps flying. That
is fine — you have proved the hard part works.

> **Tip:** getting `Crash!` the instant you press Play? Your rocket is spawning
> *inside* the launch pad, or the pad is untagged. Nudge the rocket up to
> `y = 0.05` and check the tag.

### Challenge

Change the crash message to include what you hit:
`Debug.Log("Crash into " + collision.gameObject.name);`. Now fly around and read the
Console — you'll find out very quickly which of your cubes you actually hit most.

## Chapter 5 — Reload, Advance, Repeat

**Goal:** crashing reloads the level after a two-second pause, and landing on the
green pad loads the next one. The rocket goes dead in both cases instead of flying
on after it exploded.

### Idea

Unity ships a class called `SceneManager` that loads scenes by their **build
index** — their position in the list under **File → Build Profiles → Scene List**.
Not their filename. That indirection is what lets "the next level" be one line of
arithmetic:

```
   build index:    0              1              2
              Level01_Basics  Level02_...   Level03_...
                    │              │              │
    reload  ────────┘              │              │   same index
    next    ───────────────────────┘──────────────┘   index + 1
    wrap    ◄──────────────────────────────────────   past the end → 0
```

But we don't want to load instantly. If the scene reloads the same frame you
explode, the player never sees the explosion — they just see the level blink. We
need to **wait two seconds, then load**.

`Update` can't wait. It runs for a fraction of a millisecond and returns. What we
need is a **coroutine**: a function that is allowed to pause partway through and
pick up later. You write it with `IEnumerator` as its return type, and inside it
you `yield return new WaitForSeconds(2f)`. The function stops there. Two seconds
later, Unity resumes it on the very next line.

You start one with `StartCoroutine(...)` — the call returns immediately, and the
coroutine carries on in the background. This is the standard Unity answer to "do
this, but later", and you will use it constantly.

Second idea, small but important: after the crash, the player's controls must stop
working. The tidiest way is `rocketMovement.enabled = false;` — every MonoBehaviour
has an `enabled` flag, and a disabled script's `Update` and `FixedUpdate` simply
stop being called. The rocket keeps tumbling under physics, which looks great, but
it no longer answers to Space.

### Do it — the level flow script

Create `LevelFlow` in `Assets/_Project/Scripts/Systems`:

```csharp:LevelFlow.cs
using System.Collections;
using UnityEngine;
using UnityEngine.SceneManagement;

namespace RocketBootcamp
{
    public class LevelFlow : MonoBehaviour
    {
        public void ReloadLevel(float delay = 0f)
        {
            int currentSceneIndex = SceneManager.GetActiveScene().buildIndex;
            StartCoroutine(LoadScene(currentSceneIndex, delay));
        }

        public void LoadNextLevel(float delay = 0f)
        {
            int nextSceneIndex = SceneManager.GetActiveScene().buildIndex + 1;

            if (nextSceneIndex == SceneManager.sceneCountInBuildSettings)
            {
                nextSceneIndex = 0;
            }

            StartCoroutine(LoadScene(nextSceneIndex, delay));
        }

        private IEnumerator LoadScene(int sceneIndex, float delay)
        {
            yield return new WaitForSeconds(delay);
            SceneManager.LoadScene(sceneIndex);
        }
    }
}
```

- `float delay = 0f` in the parameter list is a **default value**. Call
  `ReloadLevel(2f)` and you wait two seconds; call `ReloadLevel()` with nothing and
  it loads immediately. One function, two behaviours, no duplication — and in
  Chapter 10 we'll use the no-argument version for the debug skip key.
- Both public functions end the same way: work out *which* scene, then hand it to
  the same private `LoadScene`. The waiting is written **once**. If you later
  decide to add a fade-out, there is exactly one place to put it.
- `sceneCountInBuildSettings` is how many scenes are in the build list. Reaching it
  means we just finished the last level, so we wrap back to `0`.

### Do it — react to the collision

Open `RocketCollision.cs` and replace it with this:

```csharp:RocketCollision.cs
using UnityEngine;

namespace RocketBootcamp
{
    [RequireComponent(typeof(RocketMovement))]
    public class RocketCollision : MonoBehaviour
    {
        public const string FriendlyTag = "Friendly";
        public const string FinishTag = "Finish";

        [SerializeField] private RocketMovement rocketMovement;
        [SerializeField] private LevelFlow levelFlow;
        [SerializeField] private float transitionDelay = 2f;

        private bool transitionStarted;

        private void OnCollisionEnter(Collision collision)
        {
            if (transitionStarted || collision.gameObject.CompareTag(FriendlyTag))
            {
                return;
            }

            if (collision.gameObject.CompareTag(FinishTag))
            {
                CompleteLevel();
            }
            else
            {
                Crash();
            }
        }

        private void CompleteLevel()
        {
            transitionStarted = true;
            rocketMovement.enabled = false;
            levelFlow.LoadNextLevel(transitionDelay);
        }

        private void Crash()
        {
            transitionStarted = true;
            rocketMovement.enabled = false;
            levelFlow.ReloadLevel(transitionDelay);
        }
    }
}
```

The new piece is `bool transitionStarted`. A **bool** is a variable that is only
ever `true` or `false`, and this one is a **flag** — it remembers that something has
already happened.

You need it. Watch what goes wrong without it: you explode against a ledge, and
during the two seconds before the reload your dead rocket tumbles down and hits the
floor, and *that* starts a second reload. Then it hits a wall, and starts a third.
Coroutines stack up, and the level reloads three times in a row.

One flag, checked first thing in `OnCollisionEnter`, and the whole class of bug
disappears. **The first collision wins; every one after it bounces off the guard.**

### Do it — wire it up in the Editor

1. In the **Hierarchy**, make an empty GameObject: **GameObject → Create Empty**,
   and name it `Systems`. Set its position to `(0, 0, 0)`.
2. Select `Systems` → **Add Component → Level Flow**.
3. Select `Rocket`. In **Rocket Collision**, fill the three fields by dragging:
   - **Rocket Movement** ← the `Rocket` object itself (it has the component)
   - **Level Flow** ← the `Systems` object
   - **Transition Delay** — leave it at `2`
4. Open **File → Build Profiles**. In the **Scene List**, click **Add Open
   Scenes** so that `Level01_Basics` is in the list at index **0**.

> **Tip:** an empty field here is the single most common cause of
> `NullReferenceException` in Unity. The Console will name the script and the line;
> the fix is almost always a box you didn't drag anything into.

### Test it

Press **Play** and crash. The rocket goes limp, tumbles for two seconds, and the
level starts over.

Now fly all the way up and land on the green pad. Two seconds pass — and the level
reloads, because Level 1 is the only scene in the list, so "the next level" wraps
around to itself. That is correct behaviour with one scene. We'll add the other two
in Chapter 9.

### Challenge

Set `transitionDelay` to `0.2f` and crash. The level snaps back instantly and it
feels cheap and confusing. Try `4`. Now it feels like a punishment. The two seconds
in the middle is not a random number — it is the shortest pause that still reads as
"you died". Almost every game you've played tuned this exact value.

# Part 3 — Make It Feel Like a Rocket

## Chapter 6 — The Engine

**Goal:** hold **Space** and an orange flame and a smoke trail pour out of the
nozzle. Tap **A** or **D** and a small white jet fires from the opposite side.
Release, and everything stops.

### Idea

A **Particle System** is a component that emits lots of tiny images, gives each one
a lifetime, a speed and a colour, and then throws them away. That is the whole
concept. Fire, smoke, sparks, rain, explosions and confetti are all the same
component with different numbers in it.

Three of its settings decide almost everything:

| Setting | What it controls |
| --- | --- |
| **Start Lifetime** | how long each particle survives — short is fire, long is smoke |
| **Start Speed** | how hard they're thrown out |
| **Rate over Time** | how many appear per second — density |

And one more, which is the one people get wrong:

**Simulation Space.** Set to `Local`, particles are stuck to the object that made
them — move the rocket and the whole flame slides along with it, still attached to
the nozzle. Set to `World`, particles are released into the world and stay where
they were born, so the rocket flies away and leaves its trail behind.

Our engine flame wants **Local** — it should look welded to the nozzle. In the next
chapter the explosion will want **World**, because debris should stay at the crash
site rather than trailing after a corpse.

Now the code. We are going to give the rocket a *second* script whose only job is
the effects — `RocketEffects`. `RocketMovement` will tell it what's happening
("thrust is on") and `RocketEffects` decides what that looks like.

That split is worth stopping on. It would be perfectly possible to call
`engineFlame.Play()` directly from `RocketMovement`. It would also mean that the
script responsible for physics now holds eight particle references, and that the
day you want to change how the flame behaves, you edit the movement code. Instead:

```
   RocketMovement                RocketEffects
   ──────────────                ─────────────
   "thrust is on"    ───────►    play flame + smoke
   "rotating left"   ───────►    play left jet, stop right
                                 (owns all eight systems)
```

**One script decides *what is happening*. The other decides *what it looks like*.**
Neither needs to know how the other works.

### Do it — build the engine flame

1. Select `Rocket` in the Hierarchy. Right-click it → **Effects → Particle System**.
   It becomes a **child** of the rocket. Name it `EngineFlame` and set its
   **Position** to `(0, 0.05, 0)` — down at the nozzle.
2. In the Inspector, set the **main module** (the top section):
   - **Duration** `1`
   - **Looping** ✓ on
   - **Start Lifetime** `0.3`
   - **Start Speed** `5.5`
   - **Start Size** `0.38`
   - **Simulation Space** `Local`
   - **Play On Awake** ✗ **off** — this matters. The flame must be silent until the
     code says otherwise; otherwise your rocket sits on the pad with the engine
     roaring.
3. **Emission → Rate over Time** `45`.
4. **Shape → Cone**, with a small **Angle** (about `12`) and **Rotation X** `180`,
   so the cone points *down*, out of the nozzle.
5. Scroll to the **Renderer** module at the bottom and set **Material** to
   `Assets/_Project/Materials/Particles/EngineFlame`.

### Do it — the other seven

The rest are the same idea with different numbers, and typing them all in by hand
would teach you nothing new. They are already built for you as prefabs in
`Assets/_Project/Prefabs/Particles/`. Drag each one onto `Rocket` in the Hierarchy
so it becomes a child, then set its **Position**:

| Prefab | Position | What it is |
| --- | --- | --- |
| `EngineSmoke` | `(0, 0, 0)` | grey trail under the flame |
| `LeftThruster` | `(-0.95, 1.55, 0)` | small jet on the left side |
| `RightThruster` | `(0.95, 1.55, 0)` | small jet on the right side |
| `CrashExplosion` | `(0, 2, 0)` | the fireball (Chapter 7) |
| `CrashSmoke` | `(0, 2, 0)` | the black smoke after it (Chapter 7) |
| `SuccessGreen` | `(-0.6, 2.5, 0)` | landing fireworks (Chapter 7) |
| `SuccessBlue` | `(0.6, 2.5, 0)` | landing fireworks (Chapter 7) |

Open one or two of them and read the settings — now that you have built one by
hand, the rest will make sense.

> **Note:** each of the eight has its **own** material, in
> `Assets/_Project/Materials/Particles/`. Share one material between two systems
> and you can never give them different colours — changing one changes both,
> because a material is a single shared asset, not a copy per object. This catches
> everyone once.

### Do it — the effects script

Create `RocketEffects` in `Assets/_Project/Scripts/Player`:

```csharp:RocketEffects.cs
using UnityEngine;

namespace RocketBootcamp
{
    public class RocketEffects : MonoBehaviour
    {
        [SerializeField] private ParticleSystem engineFlame;
        [SerializeField] private ParticleSystem engineSmoke;
        [SerializeField] private ParticleSystem leftThruster;
        [SerializeField] private ParticleSystem rightThruster;

        private bool mainThrustActive;

        public void SetMainThrust(bool isActive)
        {
            if (mainThrustActive == isActive)
            {
                return;
            }

            mainThrustActive = isActive;

            if (isActive)
            {
                engineFlame.Play();
                engineSmoke.Play();
            }
            else
            {
                engineFlame.Stop();
                engineSmoke.Stop();
            }
        }

        public void SetRotationThrust(float rotationInput)
        {
            if (rotationInput < -0.01f)
            {
                leftThruster.Play();
                rightThruster.Stop();
            }
            else if (rotationInput > 0.01f)
            {
                leftThruster.Stop();
                rightThruster.Play();
            }
            else
            {
                leftThruster.Stop();
                rightThruster.Stop();
            }
        }

        public void StopContinuousEffects()
        {
            SetMainThrust(false);
            leftThruster.Stop();
            rightThruster.Stop();
        }
    }
}
```

The piece to understand here is `mainThrustActive` and the guard at the top of
`SetMainThrust`.

Remember that `FixedUpdate` runs **50 times a second**. Holding Space means we call
`SetMainThrust(true)` fifty times a second. Calling `Play()` on a system that is
already playing **restarts it** — so without the guard, the flame would be reset
from nothing, fifty times a second, and you'd see a stuttering flicker instead of a
flame.

So we remember what state we last set, and if the new state is the same as the old
one, we return without touching anything. `Play()` and `Stop()` are only ever called
on the **edges** — the frame the key goes down, and the frame it comes up.

This pattern has a name — **change detection** — and once you've seen it you'll spot
it everywhere: don't do the work unless something actually changed.

> **Tip:** `SetRotationThrust` doesn't need the same guard, because `Stop()` on an
> already-stopped system is harmless and `Play()` on a *looping* system that's
> already going is a no-op in practice. If a jet ever looks stuttery, though, the
> fix is exactly the same flag.

### Do it — tell the effects script what's happening

Open `RocketMovement.cs` and hook the two together:

```csharp:RocketMovement.cs
using UnityEngine;
using UnityEngine.InputSystem;

namespace RocketBootcamp
{
    [RequireComponent(typeof(Rigidbody), typeof(RocketEffects))]
    public class RocketMovement : MonoBehaviour
    {
        [SerializeField] private InputAction thrust;
        [SerializeField] private InputAction rotation;
        [SerializeField] private float thrustForce = 20f;
        [SerializeField] private float rotationSpeed = 100f;

        private Rigidbody rocketRigidbody;
        private RocketEffects rocketEffects;

        private void Awake()
        {
            rocketRigidbody = GetComponent<Rigidbody>();
            rocketEffects = GetComponent<RocketEffects>();
        }

        private void OnEnable()
        {
            thrust.Enable();
            rotation.Enable();
        }

        private void OnDisable()
        {
            thrust.Disable();
            rotation.Disable();
            rocketEffects?.StopContinuousEffects();
        }

        private void FixedUpdate()
        {
            ApplyThrust();
            ApplyRotation();
        }

        private void ApplyThrust()
        {
            bool isThrusting = thrust.IsPressed();
            rocketEffects.SetMainThrust(isThrusting);

            if (isThrusting)
            {
                rocketRigidbody.AddRelativeForce(Vector3.up * thrustForce, ForceMode.Force);
            }
        }

        private void ApplyRotation()
        {
            float rotationInput = rotation.ReadValue<float>();
            rocketEffects.SetRotationThrust(rotationInput);

            if (Mathf.Abs(rotationInput) < 0.01f)
            {
                return;
            }

            float rotationAmount = -rotationInput * rotationSpeed * Time.fixedDeltaTime;
            rocketRigidbody.MoveRotation(rocketRigidbody.rotation * Quaternion.Euler(0f, 0f, rotationAmount));
        }
    }
}
```

Four changes, and three of them are subtle:

- `ApplyThrust` now reads the key into `bool isThrusting` **first**, and tells the
  effects either way — including when it's `false`. If we only called
  `SetMainThrust(true)` inside the `if`, nothing would ever turn the flame off.
- `ApplyRotation` calls `SetRotationThrust(rotationInput)` **before** the early
  return, for exactly the same reason. Move that line down two lines and the jets
  stick on forever after your first tap. Order matters.
- `OnDisable` stops the continuous effects. When `RocketCollision` sets
  `rocketMovement.enabled = false` after a crash, Unity calls `OnDisable` — and this
  is what makes the engine flame cut out the instant you explode, which is the
  correct look.
- `rocketEffects?.StopContinuousEffects()` — that `?` is the **null-conditional
  operator**: "if `rocketEffects` is null, skip this line entirely." `OnDisable` can
  run while the game is shutting down, after other things have been destroyed, and
  this is the cheap way to not print an error on quit.

### Do it — wire it up in the Editor

Select `Rocket` → **Add Component → Rocket Effects**. Then drag each of the four
child objects from the Hierarchy into its matching field: `EngineFlame` →
**Engine Flame**, `EngineSmoke` → **Engine Smoke**, and the two thrusters.

### Test it

Press **Play**. Hold **Space**: flame and smoke, steady, following the nozzle
wherever the rocket goes. Tap **A** and **D**: a short white puff on one side.
Release: everything stops cleanly.

Crash into a wall: the flame cuts out the moment you die, because
`rocketMovement.enabled = false` triggers `OnDisable`.

> **Tip:** flame in the wrong place? The particle child's **Position** is relative
> to the rocket, so `(0, 0.05, 0)` means "just above the rocket's own origin".
> Nudge it in the Scene view with Play running — but write the good number down,
> because changes made during Play are thrown away when you stop.

### Challenge

Make the flame react to how hard you're pushing. In `SetMainThrust`, before
`engineFlame.Play()`, grab the main module and change the start speed:

```csharp
ParticleSystem.MainModule main = engineFlame.main;
main.startSpeed = 8f;
```

Now pass the thrust force in from `RocketMovement` and scale that number by it.

## Chapter 7 — Explosions and Fireworks

**Goal:** crashing produces a fireball and a cloud of smoke that stays at the crash
site. Landing produces green and blue fireworks. Both play before the level
changes, because you already built the two-second delay in Chapter 5.

### Idea

Nothing new in the code — this is the same `Play()` you already used, on four more
systems. What is new is the *arrangement*, and it's worth naming.

Look at what the crash sequence has to do: stop the engine, play the explosion,
disable the controls, start the reload timer. Four things. They live in three
different scripts, and each script only does its own part:

```
   collision detected
          │
   RocketCollision.Crash()
          ├── transitionStarted = true          ← don't let this happen twice
          ├── rocketMovement.enabled = false    ← controls off
          ├── rocketEffects.PlayCrash()         ← explosion + smoke
          └── levelFlow.ReloadLevel(2f)         ← reload, in two seconds
```

`RocketCollision` is the only script that knows the *sequence*. It doesn't know how
an explosion is drawn, and it doesn't know how a scene is loaded. It knows the
order. That is a good shape for code, and you'll recognise it when you see it
again.

One detail on the effects themselves: the crash and success bursts are **not**
looping. They have `Looping` off and a **Burst** in the Emission module — emit
forty-eight particles all at once, then stop. And their **Simulation Space** is
`World`, so the fireball hangs in the air at the point of impact while your dead
rocket tumbles out of it. Local space would drag the explosion along with the
corpse, which looks wrong in a way people notice without being able to say why.

### Do it — the script

Open `RocketEffects.cs` and add the four burst systems and the two functions that
fire them:

```csharp:RocketEffects.cs
using UnityEngine;

namespace RocketBootcamp
{
    public class RocketEffects : MonoBehaviour
    {
        [SerializeField] private ParticleSystem engineFlame;
        [SerializeField] private ParticleSystem engineSmoke;
        [SerializeField] private ParticleSystem leftThruster;
        [SerializeField] private ParticleSystem rightThruster;
        [SerializeField] private ParticleSystem crashExplosion;
        [SerializeField] private ParticleSystem crashSmoke;
        [SerializeField] private ParticleSystem successGreen;
        [SerializeField] private ParticleSystem successBlue;

        private bool mainThrustActive;

        public void SetMainThrust(bool isActive)
        {
            if (mainThrustActive == isActive)
            {
                return;
            }

            mainThrustActive = isActive;

            if (isActive)
            {
                engineFlame.Play();
                engineSmoke.Play();
            }
            else
            {
                engineFlame.Stop();
                engineSmoke.Stop();
            }
        }

        public void SetRotationThrust(float rotationInput)
        {
            if (rotationInput < -0.01f)
            {
                leftThruster.Play();
                rightThruster.Stop();
            }
            else if (rotationInput > 0.01f)
            {
                leftThruster.Stop();
                rightThruster.Play();
            }
            else
            {
                leftThruster.Stop();
                rightThruster.Stop();
            }
        }

        public void PlayCrash()
        {
            StopContinuousEffects();
            crashExplosion.Play();
            crashSmoke.Play();
        }

        public void PlaySuccess()
        {
            StopContinuousEffects();
            successGreen.Play();
            successBlue.Play();
        }

        public void StopContinuousEffects()
        {
            SetMainThrust(false);
            leftThruster.Stop();
            rightThruster.Stop();
        }
    }
}
```

Both new functions call `StopContinuousEffects()` on their first line. Killing the
engine before lighting the explosion is not decoration — a rocket that explodes
while still visibly firing its engine reads as broken.

And notice that `PlayCrash` didn't have to *know* how to stop the engine. That work
was already written, once, and it just calls it. Every time you find yourself about
to write the same three lines a second time, you have found a function.

### Do it — call them from the collision

Open `RocketCollision.cs`:

```csharp:RocketCollision.cs
using UnityEngine;

namespace RocketBootcamp
{
    [RequireComponent(typeof(RocketMovement), typeof(RocketEffects))]
    public class RocketCollision : MonoBehaviour
    {
        public const string FriendlyTag = "Friendly";
        public const string FinishTag = "Finish";

        [SerializeField] private RocketMovement rocketMovement;
        [SerializeField] private RocketEffects rocketEffects;
        [SerializeField] private LevelFlow levelFlow;
        [SerializeField] private float transitionDelay = 2f;

        private bool transitionStarted;

        private void OnCollisionEnter(Collision collision)
        {
            if (transitionStarted || collision.gameObject.CompareTag(FriendlyTag))
            {
                return;
            }

            if (collision.gameObject.CompareTag(FinishTag))
            {
                CompleteLevel();
            }
            else
            {
                Crash();
            }
        }

        private void CompleteLevel()
        {
            transitionStarted = true;
            rocketMovement.enabled = false;
            rocketEffects.PlaySuccess();
            levelFlow.LoadNextLevel(transitionDelay);
        }

        private void Crash()
        {
            transitionStarted = true;
            rocketMovement.enabled = false;
            rocketEffects.PlayCrash();
            levelFlow.ReloadLevel(transitionDelay);
        }
    }
}
```

`CompleteLevel` and `Crash` are now four lines each, and they are the *same* four
lines with two words changed. Read them side by side — the shape of your game's two
endings is right there, and you can check it at a glance. That is what code is for.

### Do it — wire it up in the Editor

1. Select `Rocket`. In **Rocket Effects**, drag the four remaining children into
   their fields: `CrashExplosion`, `CrashSmoke`, `SuccessGreen`, `SuccessBlue`.
2. In **Rocket Collision**, drag the `Rocket` object into the new **Rocket Effects**
   field.

### Test it

Press **Play** and fly into a wall. Fireball, black smoke, dead rocket tumbling out
of the cloud, two seconds, reload.

Now fly up and land on the green pad. Green and blue fireworks, two seconds, and
the level restarts (still only one scene in the build list).

Fly past the explosion in the Scene view while it's happening — the smoke stays
where the crash was. That's `World` simulation space doing its job.

> **Tip:** explosion appears but instantly vanishes? Its **Stop Action** may be set
> to `Destroy`. Set it to `None`, or the first crash destroys the particle system
> and the second crash has nothing left to play.

### Challenge

Give the crash a screen shake. In `PlayCrash`, before the explosion, find the main
camera and nudge it a few times over a fifth of a second. It is three lines, it
makes an enormous difference, and it is the single cheapest piece of game feel you
will ever add.

## Chapter 8 — A Camera That Keeps Up

**Goal:** the camera follows the rocket up the level, smoothly, so you can build
courses taller than one screen.

### Idea

Right now the camera is bolted to `(0, 3, -18)` and your levels can only be as tall
as one screen. We want the camera to sit at a fixed **offset** from the rocket —
the same distance behind and slightly above it, wherever it goes.

The naive version is one line: `transform.position = target.position + offset;`.
It works, and it is horrible to look at, because the camera copies every twitch of
a physics object exactly. The picture never settles.

The fix is to move only **part of the way** there each frame:

```
   camera ●──────────────────────────────○ where it should be
          └─ move 4% of the gap ─┘
   next frame:  ●───────────────────────○
                └─ 4% of the smaller gap ─┘
```

Every frame it closes a fraction of the remaining distance. Far away, it moves
fast; nearly there, it crawls. It never quite arrives, and that is exactly what
makes it look smooth. The function for it is `Vector3.Lerp(from, to, t)` — give it
a `t` between 0 and 1 and it gives you the point that fraction of the way along.

The other half is **which function to put it in**. Camera movement belongs in
`LateUpdate`, which Unity runs after every `Update` in the scene has finished. Put
it in `Update` and the camera might run *before* the thing it's following moves, so
it's always one frame behind — visible as a persistent judder that people describe
as "the camera feels loose" without knowing why.

### Do it — the script

Create `CameraFollow` in `Assets/_Project/Scripts/Systems`:

```csharp:CameraFollow.cs
using UnityEngine;

namespace RocketBootcamp
{
    public class CameraFollow : MonoBehaviour
    {
        [SerializeField] private Transform target;
        [SerializeField] private Vector3 offset = new Vector3(0f, 3f, -18f);
        [SerializeField] private float followSpeed = 4f;

        private void Start()
        {
            if (target != null)
            {
                transform.position = target.position + offset;
            }
        }

        private void LateUpdate()
        {
            if (target == null)
            {
                return;
            }

            Vector3 targetPosition = target.position + offset;
            transform.position = Vector3.Lerp(transform.position, targetPosition, followSpeed * Time.deltaTime);
        }
    }
}
```

- `Transform target` — we ask for a **Transform**, not a GameObject, because a
  Transform is exactly the position we need and nothing else. Ask for the smallest
  thing that does the job and the code documents itself.
- `Start` snaps the camera into place once, with no smoothing. Without it, every
  level begins with the camera flying in from wherever it happened to be left in
  the editor.
- The `if (target == null) return;` guard means a scene with an unassigned camera
  target is merely *boring*, not broken. Compare that to the exception it would
  throw otherwise, once per frame, forever.
- `followSpeed * Time.deltaTime` is the fraction from the diagram. With
  `followSpeed = 4` and a 60fps frame, that's about `0.067` — the camera closes
  about 7% of the gap each frame.

### Do it — wire it up in the Editor

1. Select **Main Camera** → **Add Component → Camera Follow**.
2. Drag `Rocket` from the Hierarchy into the **Target** field.
3. Leave **Offset** at `(0, 3, -18)` and **Follow Speed** at `4`.

### Test it

Press **Play** and fly up. The camera trails you smoothly all the way to the finish
pad, hanging back slightly when you accelerate and catching up when you slow.

Now your levels can be as tall as you like — which is exactly what Part 4 needs.

### Challenge

Set `followSpeed` to `1` and fly. The camera lags so far behind that you fly off
the top of the screen. Set it to `40` and it's welded to the rocket, jitter and
all. The interesting values are all between `3` and `8`; find yours.

# Part 4 — Three Levels and a Build

## Chapter 9 — Level 2, Level 3, and Hazards That Move

**Goal:** three real levels that chain together — a wider course, a tight
slalom, and one where the obstacles slide back and forth while you thread them.

### Idea

You have a complete game. What you don't have is a game with anything to *do*. This
chapter is mostly level design, plus one small script.

**On prefabs.** You are about to place a lot of cubes, and you don't want to set the
tag, the material and the collider on every one. Drag a finished cube from the
Hierarchy into `Assets/_Project/Prefabs/` and it becomes a **prefab**: a saved
template you can stamp out as many times as you like. Change the prefab and every
copy in every scene changes with it. Build the three you need — `LaunchPad`,
`LandingPad`, `StaticObstacle` — and level building becomes drag, position, scale.

**On the moving hazard.** We want an obstacle that slides between two points
forever. Two functions do all of it:

- `Vector3.Lerp(a, b, t)` — the same function the camera used, but here `t` is a
  position along a fixed line: `0` is `a`, `1` is `b`, `0.5` is halfway.
- `Mathf.PingPong(t, 1f)` — takes a number that only ever counts up, and bounces it
  between `0` and `1`.

```
   Time.time  0    1    2    3    4    5    6      (counts up forever)
   PingPong   0   .33  .67   1   .67  .33   0      (bounces)
                   ────────────►    ◄────────────
                       Lerp turns that into a position
```

Feed `Time.time` into `PingPong` and the result into `Lerp`, and you have a
platform that slides out and back, forever, in three lines and with no state to
keep track of.

And note what we're **not** doing: we're not moving it with physics. This obstacle
is scenery that happens to move. `transform.position` is exactly right for it.

### Do it — make the prefabs

1. Select `Launch Pad` in the Hierarchy and drag it into
   `Assets/_Project/Prefabs/`. Rename the asset `LaunchPad`. Do the same with
   `Finish Pad` → `LandingPad` and `Training Ledge` → `StaticObstacle`.
2. Check each prefab has the right **Tag** and **Material** baked in — `LaunchPad`
   is `Friendly` and blue, `LandingPad` is `Finish` and green, `StaticObstacle` is
   untagged and red.

### Do it — the moving obstacle script

Create `MovingObstacle` in `Assets/_Project/Scripts/Gameplay`:

```csharp:MovingObstacle.cs
using UnityEngine;

namespace RocketBootcamp
{
    public class MovingObstacle : MonoBehaviour
    {
        [SerializeField] private Vector3 movementOffset = new Vector3(6f, 0f, 0f);
        [SerializeField, Min(0.1f)] private float travelTime = 3f;

        private Vector3 startPosition;
        private void Start()
        {
            startPosition = transform.position;
        }

        private void Update()
        {
            float movement = Mathf.PingPong(Time.time / travelTime, 1f);
            Vector3 endPosition = startPosition + movementOffset;
            transform.position = Vector3.Lerp(startPosition, endPosition, movement);
        }
    }
}
```

- `startPosition` is recorded **once**, in `Start`. It has to be: after the first
  frame, `transform.position` is wherever the obstacle has slid to, and reading it
  again would make the platform crawl away from where you put it. Record the
  original, then always measure from that.
- `movementOffset` is a *relative* distance, not a destination. `(6, 0, 0)` means
  "six units to the right of wherever I was placed". Move the obstacle in the Scene
  view and its patrol comes with it, which is what a level designer expects.
- `[SerializeField, Min(0.1f)]` — two attributes on one field. `Min` clamps what the
  Inspector will accept, so nobody can type `0` and divide by zero. **Make the bad
  value impossible to enter rather than checking for it later.**

Make a prefab out of it: put the script on a red cube named `MovingObstacle`,
assign the orange `MovingHazard` material so moving danger looks different from
static danger, and drag it into `Assets/_Project/Prefabs/`.

### Do it — Level 2

**File → Save As**, into `Assets/_Project/Scenes/` as `Level02_Precision`. Delete
the two ledges and lay out three long gates instead, each one leaving a gap on the
opposite side to the last:

| Object | Position | Scale |
| --- | --- | --- |
| `Launch Pad` | `(0, -0.5, 0)` | `(8, 1, 6)` |
| `Crash Floor` | `(0, -3, 0)` | `(30, 1, 6)` |
| `Left Boundary` | `(-14, 21, 0)` | `(1.5, 50, 6)` |
| `Right Boundary` | `(14, 21, 0)` | `(1.5, 50, 6)` |
| `Lower Left Gate` | `(-5.5, 10, 0)` | `(12, 1.6, 5)` |
| `Middle Right Gate` | `(5.5, 21, 0)` | `(12, 1.6, 5)` |
| `Upper Left Gate` | `(-5.5, 32, 0)` | `(12, 1.6, 5)` |
| `Finish Pad` | `(0, 42, 0)` | `(8, 1, 6)` |

```
        y = 42          ┌──────┐              ← Finish Pad
        y = 32   ══════════════╡              ← gap on the right
        y = 21          ╞══════════════       ← gap on the left
        y = 10   ══════════════╡              ← gap on the right
        y = -0.5        ┌──────┐              ← Launch Pad
```

The rocket has to zig-zag: right, left, right. That is the entire design, and it is
enough, because tipping a rocket while it's already moving sideways is genuinely
hard.

### Do it — Level 3

**File → Save As** again, as `Level03_MovingHazards`. Same skeleton, but two of the
obstacles are `MovingObstacle` prefabs:

| Object | Position | Scale | Offset | Travel Time |
| --- | --- | --- | --- | --- |
| `Launch Pad` | `(0, -0.5, 0)` | `(8, 1, 6)` | — | — |
| `Crash Floor` | `(0, -3, 0)` | `(30, 1, 6)` | — | — |
| `Left Boundary` | `(-14, 23, 0)` | `(1.5, 54, 6)` | — | — |
| `Right Boundary` | `(14, 23, 0)` | `(1.5, 54, 6)` | — | — |
| `Lower Splitter` | `(-7, 9, 0)` | `(7, 1.5, 5)` | — | — |
| `Moving Gate A` | `(-7, 16, 0)` | `(6, 1.5, 5)` | `(14, 0, 0)` | `3.5` |
| `Middle Splitter` | `(7, 25, 0)` | `(7, 1.5, 5)` | — | — |
| `Moving Gate B` | `(7, 32, 0)` | `(6, 1.5, 5)` | `(-14, 0, 0)` | `2.8` |
| `Vertical Guard` | `(0, 38, 0)` | `(4, 1.5, 5)` | `(0, 5, 0)` | `2.3` |
| `Finish Pad` | `(0, 46, 0)` | `(8, 1, 6)` | — | — |

The three travel times — `3.5`, `2.8`, `2.3` — are deliberately not the same and
deliberately don't divide into each other. If they matched, the three hazards would
line up in a repeating pattern and the player would learn one rhythm and win every
time. Mismatched, the level never quite repeats, and every attempt asks you to
actually look.

> **Tip:** `Vertical Guard` moves **up and down** — its offset is on y, not x. It
> sits right below the finish pad, so your landing approach is never the same twice.

### Do it — chain them together

Open **File → Build Profiles → Scene List** and make sure all three scenes are in
it, **in order**:

```
   0   Level01_Basics
   1   Level02_Precision
   2   Level03_MovingHazards
```

That order is the game. `LevelFlow.LoadNextLevel` just adds one to the index, so
dragging a scene up or down in that list reorders your levels — no code changes.

### Test it

Open `Level01_Basics` and press **Play**. Land on the green pad and Level 2 loads.
Land again and Level 3 loads, with hazards sliding across your path. Land a third
time and you're back at Level 1 — the wrap-around from Chapter 5, finally doing
something visible.

### Challenge

Build a fourth level and add it to the list. You should not have to touch a single
line of code — if you do, something in Chapter 5 went wrong.

## Chapter 10 — Debug Keys, and Shipping It

**Goal:** three keys that make the game possible to work on — skip a level, turn
crashing off, quit — and a real Windows build you can hand to somebody.

### Idea

You have now played Level 1 about forty times, because it's the only way to reach
Level 2. That is a waste of your life, and it is also why games have **debug keys**.

We need three:

- **L** — load the next level immediately. No dying, no landing.
- **C** — turn collision checks off, so you can fly through walls and inspect a
  level. Press it again to turn them back on.
- **Escape** — quit.

These aren't read with `InputAction` like Space and A/D, because there is nothing
to configure — nobody is going to rebind a developer key. We read the keyboard
directly with `Keyboard.current`, and specifically with `wasPressedThisFrame`,
which is `true` only on the single frame the key goes down. Use `isPressed` here by
mistake and holding L for half a second skips thirty levels.

The last piece is quitting, which is genuinely two different things:

```
   in the Editor:   there is no application to quit —
                    you want Play Mode to stop
   in a real build: Application.Quit()
```

C# solves this with `#if UNITY_EDITOR`, a **conditional compilation directive**.
The code inside it doesn't get compiled out of the build — it doesn't get compiled
*at all*. Which is essential here, because `UnityEditor` isn't shipped with your
game, and referencing it without the guard means your build simply fails.

### Do it — the script

Create `GameCommands` in `Assets/_Project/Scripts/Systems`:

```csharp:GameCommands.cs
using UnityEngine;
using UnityEngine.InputSystem;

namespace RocketBootcamp
{
    public class GameCommands : MonoBehaviour
    {
        [SerializeField] private LevelFlow levelFlow;
        [SerializeField] private RocketCollision rocketCollision;

        private void Update()
        {
            if (Keyboard.current == null)
            {
                return;
            }

            if (Keyboard.current.lKey.wasPressedThisFrame)
            {
                levelFlow.LoadNextLevel();
            }

            if (Keyboard.current.cKey.wasPressedThisFrame)
            {
                rocketCollision.ToggleCollisionChecks();
            }

            if (Keyboard.current.escapeKey.wasPressedThisFrame)
            {
                QuitGame();
            }
        }

        private static void QuitGame()
        {
#if UNITY_EDITOR
            UnityEditor.EditorApplication.isPlaying = false;
#else
            Application.Quit();
#endif
        }
    }
}
```

- `if (Keyboard.current == null) return;` — there might not be a keyboard. On a
  phone, or a machine where one was unplugged, `Keyboard.current` is `null` and
  every line below would throw. One guard, every frame, and the problem is gone.
- `levelFlow.LoadNextLevel()` with **no argument** — the default `delay = 0f` from
  Chapter 5 finally earns its keep. The skip key is instant; the landing is not.
- `private static void QuitGame()` — `static` means the function belongs to the
  class, not to any particular instance. It doesn't touch a single field, so it
  doesn't need an object. Marking it `static` says so out loud.

### Do it — let the collision be switched off

`GameCommands` calls `rocketCollision.ToggleCollisionChecks()`, which doesn't exist
yet. Open `RocketCollision.cs` and add it:

```csharp:RocketCollision.cs
using UnityEngine;

namespace RocketBootcamp
{
    [RequireComponent(typeof(RocketMovement), typeof(RocketEffects))]
    public class RocketCollision : MonoBehaviour
    {
        public const string FriendlyTag = "Friendly";
        public const string FinishTag = "Finish";

        [SerializeField] private RocketMovement rocketMovement;
        [SerializeField] private RocketEffects rocketEffects;
        [SerializeField] private LevelFlow levelFlow;
        [SerializeField] private float transitionDelay = 2f;

        private bool transitionStarted;
        private bool collisionChecksEnabled = true;

        private void OnCollisionEnter(Collision collision)
        {
            if (transitionStarted || !collisionChecksEnabled || collision.gameObject.CompareTag(FriendlyTag))
            {
                return;
            }

            if (collision.gameObject.CompareTag(FinishTag))
            {
                CompleteLevel();
            }
            else
            {
                Crash();
            }
        }

        public void ToggleCollisionChecks()
        {
            collisionChecksEnabled = !collisionChecksEnabled;
        }

        private void CompleteLevel()
        {
            transitionStarted = true;
            rocketMovement.enabled = false;
            rocketEffects.PlaySuccess();
            levelFlow.LoadNextLevel(transitionDelay);
        }

        private void Crash()
        {
            transitionStarted = true;
            rocketMovement.enabled = false;
            rocketEffects.PlayCrash();
            levelFlow.ReloadLevel(transitionDelay);
        }
    }
}
```

- `collisionChecksEnabled = !collisionChecksEnabled;` — the `!` means **not**. So the
  line reads "set it to the opposite of what it is", which is the whole of a toggle
  in one line. There is never a reason to write this as an `if`/`else`.
- The new `!collisionChecksEnabled` goes into the guard you already had. Three
  reasons to ignore a collision, one `if`, checked in one place.

> **Note:** the rocket still physically *bounces* off walls with checks disabled —
> `C` turns off our reaction, not Unity's physics. That's the right trade for four
> extra characters, and in practice it's exactly what you want: you can rest on a
> ledge and look around instead of falling through the world.

### Do it — wire it up in the Editor

In **each of the three scenes**: select the `Systems` object → **Add Component →
Game Commands**, then drag `Systems` into the **Level Flow** field and `Rocket`
into the **Rocket Collision** field.

### Test it

Press **Play** in Level 1. Press **L** — Level 2, instantly. Press **L** again —
Level 3. Press **C** and fly straight through a wall. Press **C** again and crash
into the next one. Press **Escape** and Play Mode stops.

You have just made every remaining chapter of your own game development about ten
times faster.

### Do it — build it for Windows

1. **File → Build Profiles**, select **Windows**, and confirm the **Scene List**
   has your three levels in order.
2. Click **Build**, and point it at `Builds/Windows/`.
3. Run `RocketBootcamp.exe`. Same game, no Editor, and **Escape** now really quits.

> **Tip:** it is worth doing this once *before* you're finished, not after. Builds
> break in ways the Editor never does — a missing scene in the list, a script that
> referenced `UnityEditor` without a guard — and finding that out on the day you
> planned to hand the game to someone is not a good day.

### Challenge

Replace **C** with something honest. Right now there is no way to tell whether
crashing is on or off except by flying into a wall. Add a small text label, or tint
the rocket, whenever `collisionChecksEnabled` is `false`. A debug feature you can't
see the state of is a debug feature that will confuse you later.

## You built this

Every script in the game, and what it does:

```
RocketMovement ─── Space → AddRelativeForce · A/D → MoveRotation · FixedUpdate
RocketEffects ──── eight particle systems · change detection · burst vs loop
RocketCollision ── tags · one-shot flag · the crash and landing sequences
LevelFlow ──────── build index · wrap to 0 · coroutine delay
CameraFollow ───── Lerp toward an offset, in LateUpdate
MovingObstacle ─── PingPong into Lerp, from a remembered start position
GameCommands ───── L · C · Escape · #if UNITY_EDITOR
```

Roughly 250 lines of C#. Along the way you used **variables**, **functions**,
**parameters**, **default arguments**, `if`, **early returns**, **bools as flags**,
**constants**, **components**, **prefabs**, **coroutines**, **tags**, and a real
physics engine — which is to say, most of what you need to build anything else in
Unity.

More importantly, you built it in a shape that holds up. Seven scripts, seven jobs.
Add a fourth level and you touch no code. Change how the explosion looks and you
open exactly one file. That is not an accident of this project; it is the thing
worth taking with you.

# Part 5 — Make It Yours

Everything below is optional, and everything below is more interesting than
anything above. Pick one. Get it wrong a few times. That's the job.

### Challenge — Fuel

Give the rocket a tank. Start at `100`, drain it while Space is held, and cut the
thrust when it hits zero. Show the number on screen. Suddenly every level is a
puzzle about efficiency rather than reflexes — and you will have to redesign your
levels, which is the interesting part.

### Challenge — A landing that can fail

Right now you can hit the green pad nose-first at full speed and still win. Real
landers don't work like that. In `CompleteLevel`, check
`rocketRigidbody.linearVelocity.magnitude` — over some threshold, call `Crash()`
instead. Now the last three seconds of every level actually matter.

### Challenge — Sound

Add an `AudioSource` to the rocket and a `SoundController` script alongside
`RocketEffects` — same split, same reasoning. Loop an engine rumble while thrusting,
`PlayOneShot` an explosion on crash and a chime on landing. Nothing you can add to
this game will make more difference for less work.

### Challenge — A timer, and a best time

Count the seconds with `Time.time` and show them. Save the best per level with
`PlayerPrefs.SetFloat("Best" + sceneIndex, time)` and read it back with
`PlayerPrefs.GetFloat`. A number to beat turns a level you've finished into a level
you keep playing.

### Challenge — Rotating hazards

`MovingObstacle` slides. Write `RotatingObstacle`, which spins: one line in
`Update`, `transform.Rotate(0f, 0f, speed * Time.deltaTime)`. Long thin bars that
rotate are much harder to time than bars that slide.

### Challenge — Checkpoints

Put a yellow pad halfway up Level 3. Touch it and the rocket respawns there instead
of at the launch pad next time you die. You'll need a third tag, somewhere to
remember the position, and — because it has to survive a scene reload — a `static`
field. That last part is the real exercise.

### Challenge — Juice

Small touches, big difference: shake the camera on impact; slow time to `0.3` for
half a second when you land; fade the screen to black during the two-second
transition instead of cutting; make the engine flame flicker; tilt the camera very
slightly toward the direction you're moving.
