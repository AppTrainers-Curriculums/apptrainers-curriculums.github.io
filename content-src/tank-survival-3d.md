---
title: "Build a 3D Tank Survival Game in Unity"
subtitle: "Your First 3D Action Game in Unity"
author: "Project: 3d-tanks  ·  Engine: Unity (C#)  ·  Student Workbook"
coverEyebrow: "Learn to Code · Make Games"
coverTop: "3D"
coverRed: "Tank Survival"
coverSub: "Build it in Unity, step by step — from an empty desert to an endless survival game."
coverPill: "Student Workbook"
coverCaption: "Art: Unity “Tanks!!!” reference project"
---

# Part 0 — Before You Start

## What you're going to build

A **3D tank survival** game. You drive one tank around a desert battlefield, seen
from a camera floating above and behind you. Enemy tanks roll in from out of sight
in a **steady, endless stream** and shell you. You blast them until they explode.
There's no finish line — you survive as long as you can while the game counts your
**kills** and your **survival time**. When your health hits zero, it's **Game Over**
with a Restart button.

You'll build it **in small steps**. After almost every chapter you press **Play**
and see something new working — first a desert, then a tank you can drive, then a
camera that follows it, then shooting, then enemies, then endless waves, then a
full HUD.

## How this workbook works

Every chapter follows the same beats:

- **Goal** — what actually works when you finish the chapter.
- **Idea** — the concept, in plain language.
- **Do it** — the exact C# code to type, plus the Unity Editor steps to wire it up.
- **Test it** — press Play and see the checkpoint.
- **Challenge** — an optional twist to try on your own.

> **Tip:** keep the **Console** window open (Window → General → Console). When
> something doesn't work, the Console usually tells you why.

## The controls (classic tank controls)

Keyboard only — no mouse.

- **Up Arrow** — drive **forward** (the way the tank is facing).
- **Down Arrow** — drive **backward**.
- **Left / Right Arrow** — **rotate** the tank left / right.
- **Spacebar** — **fire** a shell straight ahead.

You aim by turning the whole tank, then shoot. Simple and satisfying.

## Thinking in 3D

If you've only made 2D games before, three things change:

- **There are three axes, not two.** `X` is left/right, `Z` is forward/back, and
  `Y` is **up**. Our tanks drive on the flat ground, so they only ever move along
  X and Z, and only ever *turn* around Y.
- **"Forward" is `transform.forward`.** In 2D the sprite pointed up and forward was
  `transform.up`. In 3D every object has a blue **Z arrow** — that's its forward.
- **Rotations are Quaternions.** A 3D rotation is stored in something called a
  `Quaternion`, which is awkward to read. You never have to understand the maths —
  you just use the two helpers `Quaternion.Euler(...)` (build a rotation from
  degrees) and `Quaternion.LookRotation(...)` (build a rotation that faces a
  direction).

```
              Y (up)
              |
              |
              |________ X (right)
             /
            /
           Z (forward)   <-- this is transform.forward
```

## The pieces we'll build

The whole game is just **eleven small scripts**, each with one job:

```
PlayerTankController ── drives the player's tank
CameraFollow ───────── keeps the camera above and behind the player
PlayerTankGun ──────── fires the player's shells (Spacebar)
Shell ──────────────── flies forward, damages any tank it hits
Health ─────────────── hit points for EVERY tank; ends the game or scores a kill
EnemyTank ──────────── drives an enemy toward the player
EnemyGun ───────────── fires an enemy's shells (automatic)
WaveManager ────────── spawns a steady, endless stream of enemies
GameManager ────────── score, survival time, game over
UIController ───────── the HUD, the game-over screen, and Restart
Explosion ──────────── makes an explosion clean itself up after playing
```

Don't worry about all of them now — each one appears when we need it.

## One-time project setup

This project is already prepared for you, but here's what's set up so you know:

- **Input System.** We read the keyboard with Unity's modern **Input System**
  (`Keyboard.current`). It's already installed and switched on.
- **Art.** The models from Unity's **Tanks!!!** reference project live in
  `Assets/_Tanks/`. The pieces we'll use are:
  - `Art/Models/Tanks/Tank_Original_Model.fbx` — the tank
  - `Art/Models/Miscellaneous/Shell.fbx` — the shell
  - `Prefabs/Levels/LevelDesert.prefab` — a whole ready-made desert battlefield
  - `Prefabs/Explosives/TankExplosion.prefab` — the big explosion
  - `Prefabs/Explosives/CompleteShellExplosion.prefab` — the small impact burst
- **Where your code goes.** Every script you write lives in `Assets/Scripts/`.

> **Note:** two **Tags** matter in this game — `Player` and `Enemy`. You set a tag
> at the top of the Inspector when an object is selected. `Player` comes with
> Unity, and `Enemy` is already added for you.

# Part 1 — The Battlefield & Your Tank

## Chapter 1 — Build the Battlefield

**Goal:** a desert arena on screen, lit by the sun, boxed in by cliffs so nothing
can drive off the edge.

### Idea

A 3D scene is built from **GameObjects**. Each one has a **Transform** (where it
is, how it's turned, how big it is), and usually a **Mesh Renderer** (the shape you
see) and a **Collider** (the solid part you bump into).

Building a whole desert by hand would take all day — so we won't. The project
already contains a **prefab** called `LevelDesert`: a finished battlefield with
ground, dunes, palm trees, rocks, ruins and a ring of cliffs around the edge. A
prefab is a saved blueprint of a GameObject, and dropping one into your scene gives
you the whole thing at once.

### Do it

1. Open the scene `Assets/Scenes/SampleScene.unity`. It already has a
   **Main Camera** and a **Directional Light** (that's your sun).
2. In the **Project** window, find `Assets/_Tanks/Prefabs/Levels/LevelDesert.prefab`
   and **drag it into the Hierarchy**.
3. Select the new `LevelDesert` object and, in the Inspector, set its **Position**
   to `0, 0, 0` so the battlefield is centred on the world origin.
4. Select the **Main Camera**. Set **Position** to `0, 25, -25` and **Rotation** to
   `45, 0, 0`. Now you're looking down at the desert from a corner.
5. Select the **Directional Light** and try a **Rotation** of `50, -30, 0` for a
   nice low sun with long shadows.

> **Tip:** to fly around the Scene view, hold the **right mouse button** and use
> **W A S D**. Press **F** with an object selected to snap the view onto it.

### Test it

Press **Play**. You should see the desert: sand, dunes, palms, and cliffs boxing in
the arena. Nothing moves yet — that's next.

### Challenge

Look inside the `LevelDesert` object in the Hierarchy — it's made of groups called
`Ground`, `Boundaries`, `Trees`, `Rocks`, `Military`, `OilField`. Try dragging extra
props from `Assets/_Tanks/Prefabs/Environment/Desert/` into the scene to make the
battlefield your own.

## Chapter 2 — Drive the Tank

**Goal:** a tank you can drive — Up/Down to move forward and back, Left/Right to
turn.

### Idea

Tanks move with **physics**. We give the tank a **Rigidbody** (a physics body). We
**read the keys every frame** in `Update` (input feels smoothest there) and remember
them in two little variables, then **do the physics move** in `FixedUpdate` (physics
runs steadiest there).

Each step we *rotate* with Left/Right and *push forward* along the direction the
tank faces. The tank model's blue Z arrow points out of the front, so "forward" is
`transform.forward`.

The one new 3D idea is **turning**. In 2D you added degrees to a single number. In
3D a rotation is a `Quaternion`, and you combine two rotations by **multiplying**
them. So we build a small turn for this step with `Quaternion.Euler(0, degrees, 0)`
— the `0`s mean *don't* tip forward or roll sideways, only spin around the up axis
— and multiply it onto where we're already facing.

### Do it — build the player tank

1. In the **Project** window, open `Assets/_Tanks/Art/Models/Tanks/` and drag
   `Tank_Original_Model` into the **Hierarchy**. Rename it `Player`.
2. Set its **Position** to `0, 0, 0`.
3. With `Player` selected, set its **Tag** to `Player` (the dropdown at the very top
   of the Inspector).
4. Add a **Rigidbody** (**Add Component → Rigidbody**) and set it up so physics
   can't tip the tank over or drop it through the ground:
   - **Untick Use Gravity.**
   - Open **Constraints** and tick **Freeze Position → Y**.
   - Under **Freeze Rotation**, tick **X** and **Z** (leave **Y** unticked — that's
     the one we rotate).
5. Add a **Box Collider** (**Add Component → Box Collider**) and press **Edit
   Collider** to drag its faces until the box wraps the tank body snugly.

> **Note:** unticking gravity and freezing **Position Y** is the 3D version of the
> 2D trick "Gravity Scale = 0". It keeps the tank pinned to the height you placed
> it at, so it can never sink into the sand or bounce off a dune.

### Do it — the driving script

Create `Assets/Scripts/PlayerTankController.cs`:

```csharp:PlayerTankController.cs
using UnityEngine;
using UnityEngine.InputSystem; // new Input System, direct keyboard polling

// Classic tank controls in 3D: Up/Down drive forward/back along the facing direction,
// Left/Right rotate the whole tank in place. Keyboard only, no mouse.
// The tank drives on the flat ground, so it only ever turns around the Y (up) axis.
public class PlayerTankController : MonoBehaviour {
  [Header("Movement")]
  [SerializeField] private float moveSpeed = 8f;        // units per second
  [SerializeField] private float rotationSpeed = 90f;   // degrees per second

  private Rigidbody rb;

  float moveInput, turnInput;

  private void Awake() {
    rb = GetComponent<Rigidbody>();
  }

  void Update() {
    // Grab the keyboard. It can be null if no keyboard is present, so always check.
    var kb = Keyboard.current;
    if (kb == null) {
      return;
    }

    moveInput = 0f; // forward / back
    turnInput = 0f; // rotate

    if (kb.upArrowKey.isPressed) {
      moveInput += 1f;
    }

    if (kb.downArrowKey.isPressed) {
      moveInput -= 1f;
    }

    if (kb.leftArrowKey.isPressed) {
      turnInput -= 1f; // turn left (counter-clockwise)
    }

    if (kb.rightArrowKey.isPressed) {
      turnInput += 1f; // turn right (clockwise)
    }
  }

  private void FixedUpdate() {
    // Rotate the tank body around the up axis (Y). In 3D a rotation is a Quaternion,
    // so we build one from an angle in degrees and add it to where we're already facing.
    Quaternion turn = Quaternion.Euler(0f, turnInput * rotationSpeed * Time.fixedDeltaTime, 0f);
    rb.MoveRotation(rb.rotation * turn);

    // Move along the facing direction. The tank model points along its own Z axis,
    // so "forward" is transform.forward.
    Vector3 newPos = rb.position + transform.forward * moveInput * moveSpeed * Time.fixedDeltaTime;
    rb.MovePosition(newPos);
  }
}
```

6. Drag the script onto the `Player` object (or **Add Component → Player Tank
   Controller**).

### Test it

Press **Play**. Use the **arrow keys**: Up/Down drive, Left/Right spin the tank in
place. Drive into a cliff or a rock — the colliders stop you.

The camera doesn't follow yet, so drive slowly and stay in view. We fix that in the
very next chapter.

> **Tip:** the numbers **Move Speed** and **Rotation Speed** show up in the
> Inspector because we marked them `[SerializeField]`. Tweak them while the game
> runs to find a feel you like.

### Challenge

The tank turns at a fixed speed. Try making **backward** driving slower than
forward (real tanks reverse slowly). Hint: when `moveInput` is negative, multiply
the speed by something like `0.6f`.

## Chapter 3 — The Camera That Follows

**Goal:** a camera that floats above and behind the tank and keeps it in view
wherever you drive.

### Idea

A follow camera is simpler than it looks: every frame, work out where the camera
*should* be — the tank's position plus a fixed **offset** — and slide part of the
way there. Sliding instead of teleporting is what makes it feel smooth. That trick
is called **linear interpolation**, and Unity spells it `Vector3.Lerp`.

Two details matter:

- We use **`LateUpdate`**, not `Update`. `LateUpdate` runs *after* every `Update` in
  the frame, so the tank has already finished moving. Following in `Update` would
  leave the camera a frame behind and make the picture jitter.
- The camera **doesn't rotate with the tank** — it only slides. Because Left/Right
  spins the tank on the spot, a camera that copied that rotation would whirl around
  you and make the game unplayable. Instead the view stays steady and the tank turns
  underneath it.

```
              [camera]
                  \
                   \   offset = (0, 12, -12)
                    \  12 up, 12 back
                     v
   __________________________________
        sand         [TANK]        sand
```

### Do it

Create `Assets/Scripts/CameraFollow.cs`:

```csharp:CameraFollow.cs
using UnityEngine;

// Keeps the camera floating above and behind the player, looking down at it.
// The camera never rotates with the tank — it only slides to keep up. That way
// the view stays steady while the tank spins underneath it.
public class CameraFollow : MonoBehaviour {
  [Header("Who to follow")]
  [Tooltip("Leave empty and the camera finds the object tagged 'Player' by itself.")]
  [SerializeField] private Transform target;

  [Header("Where the camera sits")]
  // How far above and behind the tank the camera floats.
  // Y is height, Z is how far back. Bigger numbers = further away.
  [SerializeField] private Vector3 offset = new Vector3(0f, 12f, -12f);

  [Header("How smoothly it follows")]
  // Higher = the camera snaps to the tank faster. Lower = lazier, floatier.
  [SerializeField] private float smoothness = 5f;

  private void Start() {
    // If nobody dragged a target in, find the player automatically.
    if (target == null) {
      GameObject playerObj = GameObject.FindGameObjectWithTag("Player");
      if (playerObj != null) {
        target = playerObj.transform;
      }
    }

    // Jump straight to the right spot on the first frame, so the camera
    // doesn't come flying in from wherever we left it in the Editor.
    if (target != null) {
      transform.position = target.position + offset;
      transform.LookAt(target.position);
    }
  }

  // LateUpdate runs AFTER every Update, so the tank has already moved this frame.
  // Following in Update instead would make the camera lag one frame behind and jitter.
  private void LateUpdate() {
    if (target == null) {
      return; // player is gone (dead) — leave the camera where it is
    }

    // Where we'd like to be: right above and behind the tank.
    Vector3 wantedPosition = target.position + offset;

    // Slide part of the way there each frame instead of teleporting. That's what
    // makes the movement feel smooth.
    transform.position = Vector3.Lerp(transform.position, wantedPosition, smoothness * Time.deltaTime);

    // Always point the camera at the tank.
    transform.LookAt(target.position);
  }
}
```

1. Select the **Main Camera** and add the **Camera Follow** script.
2. Leave **Target** empty — the script finds the `Player` tag by itself.

### Test it

Press **Play** and drive anywhere. The camera glides along above and behind you,
always looking down at your tank, and it never spins when you turn.

> **Tip:** tweak **Offset** while the game is running. `(0, 20, -20)` gives a wide
> tactical view; `(0, 6, -10)` sits low and close and feels much more tense.

### Challenge

Make the camera **lead** the tank a little: instead of `target.position + offset`,
try `target.position + offset + target.forward * 4f`, so you see more of what's
ahead of you than behind.

# Part 2 — Shooting

## Chapter 4 — The Shell

**Goal:** a shell prefab that flies forward, damages any tank it hits, and cleans
itself up.

### Idea

A shell is a small GameObject that moves forward every frame and disappears when it
hits something — or after a couple of seconds if it hits nothing, so shells never
pile up and slow the game down.

We want it to hit **tanks**, so instead of checking colours or teams, the shell just
looks for a **`Health`** component. Every tank has one (we build `Health` in Part 3),
so a shell damages *any* tank it touches — even an enemy can wing another enemy.

Here's the one genuinely 3D wrinkle. A 3D tank isn't a single sprite — it's a model
made of dozens of child pieces: a chassis, a turret, wheels, track links. The
collider the shell actually clips might belong to any of them, but the `Health`
script lives on the tank's **root** object. So instead of `GetComponent<Health>()`
we use **`GetComponentInParent<Health>()`**, which checks the thing we hit *and*
every parent above it until it finds one.

There's one tank a shell must **never** hit: the one that fired it. Shells spawn
right on top of the shooter's own collider, so without a guard a tank would blow
itself up the instant it pulled the trigger. We fix that by having each shell
remember its **owner** (the gun tells it who fired — see Chapter 5) and skip that
tank when checking for a hit.

Anything else solid — a cliff, a rock, a building — just stops the shell. We spot
"solid" by checking `isTrigger`: shells pass through other triggers (like other
shells in flight) but die on anything real.

### Do it — the script

Create `Assets/Scripts/Shell.cs`:

```csharp:Shell.cs
using UnityEngine;

// Travels forward, damages the first tank it hits (ANY tank — friendly fire is on),
// then dies. Uses a trigger collider so it passes through until it finds something.
public class Shell : MonoBehaviour {
  [Header("Shell")]
  [SerializeField] private float speed = 25f;
  [SerializeField] private int damage = 1;
  [SerializeField] private float lifetime = 3f; // self-destruct so shells never pile up
  [Tooltip("Effect spawned where the shell hits. Leave empty for no explosion.")]
  [SerializeField] private GameObject explosionPrefab;

  private GameObject owner; // the tank that fired this shell — never damages it

  // Called right after spawning so the shell knows who not to hit.
  public void SetOwner(GameObject shooter) {
    owner = shooter;
  }

  private void Start() {
    // Clean up automatically after 'lifetime' seconds if we never hit anything.
    Destroy(gameObject, lifetime);
  }

  private void Update() {
    // Fly forward along the way we're pointing.
    transform.position += transform.forward * speed * Time.deltaTime;
  }

  private void OnTriggerEnter(Collider other) {
    // Did we hit a tank? We look for a Health component on what we touched OR on any
    // parent above it — a 3D tank is a model made of many child pieces, and the Health
    // script lives on the tank's root object, not on the piece we actually clipped.
    Health health = other.GetComponentInParent<Health>();
    if (health != null) {
      // Ignore the tank that fired us — no self-damage, keep flying.
      if (health.gameObject == owner) {
        return;
      }
      // The tank takes damage, and the shell dies.
      health.TakeDamage(damage);
      Die();
      return;
    }

    // Hit something solid — a cliff, a rock, a building? Die there, no damage.
    // Other triggers (shells in flight, pickups) are ignored so we keep flying.
    if (!other.isTrigger) {
      Die();
    }
  }

  // Spawn the explosion at the shell's spot and destroy the shell.
  private void Die() {
    if (explosionPrefab != null) {
      Instantiate(explosionPrefab, transform.position, transform.rotation);
    }
    Destroy(gameObject);
  }
}
```

### Do it — the prefab

1. Drag `Assets/_Tanks/Art/Models/Miscellaneous/Shell.fbx` into the **Hierarchy**
   and rename it `Shell`.
2. Add a **Sphere Collider** and tick **Is Trigger** — a trigger lets the shell pass
   *into* things so `OnTriggerEnter` runs. Shrink its **Radius** to about `0.2`.
3. Add a **Rigidbody**, then **untick Use Gravity** and **tick Is Kinematic**.
   ("Kinematic" means *this script moves it, not physics* — which is exactly what
   `Shell.cs` does. A trigger still needs a Rigidbody present to fire its events.)
4. Add the **Shell** script.
5. Create a folder `Assets/Prefabs/`, drag `Shell` from the Hierarchy into it to
   turn it into a **prefab**, then delete the one left in the scene.

Leave the **Explosion Prefab** slot empty for now — we wire up explosions in
Chapter 9. An empty slot just means "no explosion," so nothing breaks in the
meantime.

> **Note:** the line `other.GetComponentInParent<Health>()` won't compile until we
> add the `Health` script in Chapter 6 — that's expected. Unity will show a red
> error until then; it clears the moment `Health` exists.

## Chapter 5 — The Tank's Gun

**Goal:** press **Spacebar** and your tank fires a shell straight ahead.

### Idea

The gun spawns a shell at the **muzzle**, facing the same way the barrel faces. We
use a small **cooldown** so you can't fire faster than a set rate. Because the shell
already knows how to fly and deal damage, the gun does three quick things each shot:
make the shell, **tell it who fired it** (`SetOwner`, so it won't damage us —
Chapter 4), and spawn an optional **muzzle flash** at the barrel tip for a bit of
"juice." We pass `transform.root.gameObject` as the owner so it works whether this
script sits on the tank body or on a child.

The **fire point** is just an empty GameObject parked at the tip of the barrel. Its
job is to hold a position *and a direction*: shells inherit its rotation, so
whichever way its blue Z arrow points is where they fly.

### Do it — the fire point

1. Expand the `Player` object in the Hierarchy until you find **`TankTurret`**.
   (Inside the turret you'll also see the wheels and track pieces — ignore those.)
2. **Right-click `TankTurret` → Create Empty** and name the new child `FirePoint`.
3. Move `FirePoint` out to the very tip of the barrel. Check its blue **Z arrow**
   points *away* from the tank, along the barrel — if it doesn't, set the
   `FirePoint` **Rotation** back to `0, 0, 0`.

> **Tip:** switch the Scene view gizmo from **Global** to **Local** (the button next
> to the tool buttons at the top left) to see an object's own arrows rather than the
> world's.

### Do it — the script

Create `Assets/Scripts/PlayerTankGun.cs`:

```csharp:PlayerTankGun.cs
using UnityEngine;
using UnityEngine.InputSystem;

// Fires shells straight ahead on Spacebar. No aiming: the barrel is fixed to the
// tank's facing direction. Put this on the player body (or the turret child).
public class PlayerTankGun : MonoBehaviour {
  [Header("Firing")]
  [Tooltip("Empty object at the tip of the barrel. Shells spawn here, flying along its blue Z arrow.")]
  [SerializeField] private Transform firePoint;
  [SerializeField] private GameObject shellPrefab;
  [Tooltip("Muzzle-flash effect spawned at the fire point on each shot.")]
  [SerializeField] private GameObject muzzleFlashPrefab;
  [SerializeField] private float fireCooldown = 0.5f; // seconds between shots

  private float cooldownTimer;

  private void Update() {
    // Count the cooldown down every frame.
    cooldownTimer -= Time.deltaTime;

    var kb = Keyboard.current;
    if (kb == null) {
      return;
    }

    // Fire when Space is pressed and the cooldown has elapsed.
    if (kb.spaceKey.wasPressedThisFrame && cooldownTimer <= 0f) {
      // Spawn at the muzzle, inheriting the barrel's rotation so it flies forward.
      GameObject shell = Instantiate(shellPrefab, firePoint.position, firePoint.rotation);
      // Tell the shell which tank fired it, so it won't damage us.
      Shell shellScript = shell.GetComponent<Shell>();
      if (shellScript != null) {
        shellScript.SetOwner(transform.root.gameObject);
      }

      // Muzzle-flash burst at the same spot.
      if (muzzleFlashPrefab != null) {
        Instantiate(muzzleFlashPrefab, firePoint.position, firePoint.rotation);
      }

      cooldownTimer = fireCooldown;
    }
  }
}
```

1. Select `Player` and add the **Player Tank Gun** script.
2. Drag the `FirePoint` object from the Hierarchy into the **Fire Point** slot.
3. Drag the `Shell` **prefab** (from `Assets/Prefabs/`) into the **Shell Prefab**
   slot.
4. Leave **Muzzle Flash Prefab** empty for now.

### Test it

Press **Play** and tap **Space**. A shell leaves the barrel tip and flies straight
out across the sand, then vanishes after a few seconds. Fire at a cliff — the shell
stops dead when it hits.

Nothing takes damage yet, because nothing has `Health`. That's Part 3.

> **Tip:** if shells appear *inside* the tank or fly off sideways, your `FirePoint`
> is in the wrong spot or turned the wrong way. Select it and check the blue arrow.

### Challenge

Give the shot some weight: lower **Fire Cooldown** to `0.15` and you have a machine
gun; raise it to `1.5` and every shot has to count. Which feels better with this
tank?

# Part 3 — Enemies & Health

## Chapter 6 — Health for Every Tank

**Goal:** one health script that works for the player *and* every enemy.

### Idea

Both kinds of tank need the same thing: a pool of hit points, a way to lose them,
and something that happens at zero. So we write it **once** and put it on both.

The clever bit is what happens on death. Rather than writing two death scripts, the
one `Health` script asks a single question: *am I the player?* We answer it with the
**tag**. If the tag is `Player`, dying ends the game; anything else counts as a kill
for the score. That's the whole difference.

`[RequireComponent(typeof(Collider))]` at the top is a small safety net — Unity will
refuse to let you add `Health` to something with no collider, because a tank with no
collider could never be hit.

### Do it

Create `Assets/Scripts/Health.cs`:

```csharp:Health.cs
using UnityEngine;

// Reusable health for BOTH the player and enemy tanks.
// On death: the player (tagged "Player") ends the game; any other tank counts as a kill.
[RequireComponent(typeof(Collider))]
public class Health : MonoBehaviour {
  [Header("Health")]
  [SerializeField] private int maxHealth = 3;

  [Header("Death")]
  [Tooltip("Optional explosion prefab spawned where this tank dies.")]
  [SerializeField] private GameObject explosionPrefab;

  // Read-only access for the UI (health bar).
  int currentHealth;
  public int CurrentHealth {
    get { return currentHealth; }
    private set { currentHealth = value; }
  }
  public int MaxHealth => maxHealth;

  private bool isDead; // guard so we only die once

  private void Awake() {
    currentHealth = maxHealth;
  }

  // Call this to hurt the tank. Shells hurt whatever tank they land on.
  public void TakeDamage(int amount) {
    if (isDead) {
      return;
    }

    currentHealth -= amount;

    if (currentHealth <= 0) {
      currentHealth = 0;
      Die();
    }
  }

  private void Die() {
    isDead = true;

    // Pop an explosion where we died (if one is assigned).
    if (explosionPrefab != null) {
      Instantiate(explosionPrefab, transform.position, Quaternion.identity);
    }

    // React to the death before we disappear: the player ends the game, everyone else is a kill.
    if (GameManager.Instance != null) {
      if (CompareTag("Player")) {
        GameManager.Instance.GameOver();
      }
      else {
        GameManager.Instance.AddKill();
      }
    }

    Destroy(gameObject);
  }
}
```

1. Select `Player` and add the **Health** script. Set **Max Health** to `5` — the
   player should be tougher than the enemies.

> **Note:** the `GameManager` lines won't compile until Chapter 11. Unity will show
> a red error in the Console until then, and it clears the moment `GameManager`
> exists. This is normal — the scripts are a team, and some members arrive late.

### Test it

There's nothing to shoot yet, so nothing visible happens. Press **Play** just to
confirm the Console has no *new* errors beyond the expected `GameManager` one.

## Chapter 7 — Enemy Tanks that Chase

**Goal:** an enemy tank that drives at you and stops at a firing distance.

### Idea

The enemy needs two behaviours: **turn to face you** and **drive at you until it's
close enough**. Both come from one simple value — the direction from the enemy to
the player.

Two 3D details:

- **Flatten the Y.** The direction from the enemy to the player might point slightly
  up or down (the tanks aren't at exactly the same height). If we used it as-is the
  enemy would tilt its nose up to aim at you. Setting `toPlayer.y = 0f` keeps every
  tank flat on the ground.
- **Turn gradually.** `Quaternion.LookRotation(dir)` gives the rotation that faces
  the player *right now*. If we slammed the tank into it, enemies would snap around
  instantly like they were on a turntable. `Quaternion.RotateTowards` moves only a
  few degrees per step instead, so they steer like vehicles.

Once the enemy is within `stopDistance` it holds position, and `EnemyGun` (next
chapter) does the shooting.

### Do it — the script

Create `Assets/Scripts/EnemyTank.cs`:

```csharp:EnemyTank.cs
using UnityEngine;

// Drives an enemy tank toward the player and holds at a distance so EnemyGun can shoot.
public class EnemyTank : MonoBehaviour {
  [Header("Movement")]
  [SerializeField] private float moveSpeed = 5f;
  [SerializeField] private float turnSpeed = 180f;  // degrees per second
  [SerializeField] private float stopDistance = 12f; // hold this far from the player, then let EnemyGun shoot

  private Rigidbody rb;
  private Transform player;   // who we chase

  private void Awake() {
    rb = GetComponent<Rigidbody>();
  }

  private void Start() {
    // Find and remember the player (tagged "Player").
    GameObject playerObj = GameObject.FindGameObjectWithTag("Player");
    if (playerObj != null) {
      player = playerObj.transform;
    }
  }

  private void FixedUpdate() {
    if (player == null) {
      return; // player is gone (dead) — stop moving
    }

    // Direction to the player. We flatten Y to 0 because tanks drive on the ground —
    // without this the tank would try to tilt up or down to face the player.
    Vector3 toPlayer = player.position - rb.position;
    toPlayer.y = 0f;

    float distance = toPlayer.magnitude;
    Vector3 dir = toPlayer.normalized;

    // Turn to face the player, a little bit each step so it looks like steering
    // rather than snapping around instantly.
    Quaternion wantedRotation = Quaternion.LookRotation(dir);
    Quaternion newRotation = Quaternion.RotateTowards(rb.rotation, wantedRotation, turnSpeed * Time.fixedDeltaTime);
    rb.MoveRotation(newRotation);

    // Drive closer until we reach stopDistance, then hold position (EnemyGun does the shooting).
    if (distance > stopDistance) {
      Vector3 newPos = rb.position + dir * moveSpeed * Time.fixedDeltaTime;
      rb.MovePosition(newPos);
    }
  }
}
```

### Do it — the enemy prefab

Build the enemy exactly like the player, minus the player-only parts:

1. Drag `Tank_Original_Model` into the Hierarchy again and rename it `EnemyTank`.
2. Set its **Tag** to `Enemy`.
3. Add a **Rigidbody**: **untick Use Gravity**, **Freeze Position → Y**, and
   **Freeze Rotation → X** and **Z**.
4. Add a **Box Collider** sized to the tank.
5. Add the **Enemy Tank** script and the **Health** script (leave **Max Health** at
   `3` — enemies die faster than you).
6. Give it a `FirePoint`: expand to `TankTurret`, right-click → **Create Empty**,
   name it `FirePoint`, and move it to the barrel tip (same as Chapter 5).
7. Drag `EnemyTank` from the Hierarchy into `Assets/Prefabs/` to make it a prefab.
   **Keep one copy in the scene** for now so you have something to test against.

> **Tip:** to tell friend from foe at a glance, duplicate the material
> `Assets/_Tanks/Art/Materials/Tank/TankColor.mat` (**Cmd/Ctrl + D**), rename the
> copy `TankRed`, change its **Base Map** colour to red, and drag it onto the
> `EnemyTank` prefab's chassis and turret.

### Test it

Press **Play**. The enemy tank swings around to face you and rolls in, then parks
about 12 units away. Drive around it — it keeps turning to track you.

Now shoot it. Each shell takes **1** damage off its **3** health, so the third hit
destroys it and the tank disappears. It can't shoot back yet — that's the next
chapter. Watch the Console for the `GameManager` error; it's still expected.

### Challenge

Enemies all move at the same speed, which looks robotic in a crowd. In `Start`, add
a little randomness: `moveSpeed = moveSpeed * Random.Range(0.8f, 1.2f);` so each one
has its own personality.

## Chapter 8 — Enemies that Shoot Back

**Goal:** enemies that fire at you automatically on a timer.

### Idea

`EnemyGun` is the enemy's version of `PlayerTankGun`. The only difference is what
pulls the trigger: the player's gun waits for the Spacebar, the enemy's just counts
down a timer and fires whenever it reaches zero. Because `EnemyTank` already keeps
the body pointed at you, "fire straight ahead" is the same as "fire at the player."

It also watches for the player disappearing. Once you're destroyed there's nothing
to shoot at, so the gun quietly stops — otherwise the game-over screen would be
peppered with shells.

### Do it

Create `Assets/Scripts/EnemyGun.cs`:

```csharp:EnemyGun.cs
using UnityEngine;

// Auto-fires shells straight ahead on a cooldown. Put this on an enemy tank.
// EnemyTank aims the body at the player; this script just keeps shooting forward.
// (It's the enemy's version of PlayerTankGun, which fires on the player's Spacebar instead.)
public class EnemyGun : MonoBehaviour {
  [Header("Firing")]
  [SerializeField] private GameObject shellPrefab;
  [Tooltip("Muzzle-flash effect spawned at the fire point on each shot.")]
  [SerializeField] private GameObject muzzleFlashPrefab;
  [SerializeField] private Transform firePoint;       // tip of the barrel
  [SerializeField] private float fireCooldown = 2f;   // seconds between shots

  private float cooldownTimer;
  private Transform player;   // who we're shooting at

  private void Start() {
    cooldownTimer = fireCooldown; // small delay before the first shot

    // Remember the player so we can stop firing once it's destroyed.
    GameObject playerObj = GameObject.FindGameObjectWithTag("Player");
    if (playerObj != null) {
      player = playerObj.transform;
    }
  }

  private void Update() {
    // No player left (destroyed / game over) — stop shooting.
    if (player == null) {
      return;
    }

    // Count the cooldown down and fire when it elapses.
    cooldownTimer -= Time.deltaTime;
    if (cooldownTimer <= 0f) {
      Fire();
      cooldownTimer = fireCooldown;
    }
  }

  private void Fire() {
    // Spawn from the muzzle, facing forward.
    GameObject shell = Instantiate(shellPrefab, firePoint.position, firePoint.rotation);
    // Tell the shell which tank fired it, so it won't damage us.
    Shell shellScript = shell.GetComponent<Shell>();
    if (shellScript != null) {
      shellScript.SetOwner(transform.root.gameObject);
    }

    // Muzzle-flash burst at the same spot.
    if (muzzleFlashPrefab != null) {
      Instantiate(muzzleFlashPrefab, firePoint.position, firePoint.rotation);
    }
  }
}
```

1. Open the `EnemyTank` **prefab** (double-click it in `Assets/Prefabs/`) and add
   the **Enemy Gun** script.
2. Drag the `Shell` prefab into **Shell Prefab**.
3. Drag the enemy's own `FirePoint` child into **Fire Point**.
4. Save the prefab (**Cmd/Ctrl + S**) and go back to the scene.

### Test it

Press **Play**. The enemy rolls up, stops, and starts lobbing shells at you every
two seconds. Take five hits and your tank vanishes — you have real stakes now.

Better still: park yourself so an enemy's shell flies past you into *another* enemy.
Friendly fire is on for everybody, because `Shell` only ever asks "does this thing
have `Health`?"

> **Note:** an enemy can't shoot itself — `SetOwner` sees to that — but it can
> absolutely shoot its friends.

# Part 4 — Survival

## Chapter 9 — Explosions & Death

**Goal:** shells burst on impact and tanks blow up when they die.

### Idea

Both explosion effects already exist in the project as prefabs full of **particle
systems** — puffs of smoke, sparks, a flash of light, and a sound. All they're
missing is an off switch: a particle system that finishes playing just sits there
forever as an invisible object, and after a few hundred kills you'd have a few
hundred of them clogging the scene.

So we write the smallest script in the whole game. It waits a few seconds, then
deletes itself. That's it.

Then we drop the explosions into the empty slots we've been leaving behind since
Chapter 4 — `Shell`'s **Explosion Prefab** and `Health`'s **Explosion Prefab**.

### Do it

Create `Assets/Scripts/Explosion.cs`:

```csharp:Explosion.cs
using UnityEngine;

// Put this on an explosion prefab so it cleans itself up after playing briefly.
public class Explosion : MonoBehaviour {
  [SerializeField] private float duration = 2f; // seconds before it vanishes

  private void Start() {
    Destroy(gameObject, duration);
  }
}
```

1. In the Project window select
   `Assets/_Tanks/Prefabs/Explosives/CompleteShellExplosion.prefab` and add the
   **Explosion** script to it.
2. Do the same for
   `Assets/_Tanks/Prefabs/Explosives/TankExplosion.prefab`.
3. Open your `Shell` prefab and drag **CompleteShellExplosion** into its
   **Explosion Prefab** slot.
4. Open your `EnemyTank` prefab, find its **Health** component, and drag
   **TankExplosion** into its **Explosion Prefab** slot.
5. Select the `Player` in the Hierarchy and do the same to its **Health**.
6. *(Optional juice.)* Drag **CompleteShellExplosion** into the **Muzzle Flash
   Prefab** slot on both `PlayerTankGun` and `EnemyGun` for a burst at the barrel.

### Test it

Press **Play** and shoot an enemy. Every shell bursts where it lands, and on the
final hit the whole tank goes up in a proper explosion with a bang. Drive into an
enemy's line of fire and watch your own tank do the same.

> **Tip:** if the explosions look too big or too small next to the tanks, select the
> prefab and change its **Scale**. The particle systems scale with it.

### Challenge

`Explosion` deletes itself after a fixed `duration`. Try setting **Duration** on
each prefab to match how long its particles actually last — too short and the smoke
gets cut off mid-puff, too long and dead objects hang around.

## Chapter 10 — Endless Waves

**Goal:** enemies that keep spawning out of sight around you, forever. This is the
"survivor" heart of the game.

### Idea

A **spawner** runs one timer. After a short `startDelay`, then every
`secondsBetweenSpawns`, it drops a small group (`enemiesPerSpawn`) of enemies
**out of camera range** around the player, so they drive in from the horizon. A cap
(`maxEnemiesAlive`) keeps the battlefield from ever overflowing, which would make
the game lag.

In the 2D version we spawned along the four edges of a fixed screen. Here the camera
follows you, so "off screen" moves with you. Instead we pick a **random compass
direction** and step out `spawnDistance` units that way — a ring around the player.

`Quaternion.Euler(0f, angle, 0f) * Vector3.forward` is the trick that does it: take
"forward," spin it by a random number of degrees around the up axis, and you get a
random direction on the flat ground.

```
        spawn ring (radius = spawnDistance)
              .  .  .  .  .
          .                   .
        .        [YOU]          .     <-- enemies appear anywhere
          .                   .            on this circle
              .  .  .  .  .
```

Last piece: a player driving along the cliffs could have enemies spawn *inside* the
rocks. So we **clamp** the chosen spot to the battlefield box before using it — the
same idea as keeping the tank on screen in the 2D game.

### Do it

Create `Assets/Scripts/WaveManager.cs`:

```csharp:WaveManager.cs
using UnityEngine;

// WaveManager keeps spawning enemy tanks around the player, forever.
// Enemies spawn at a steady rate in fixed-size groups. There is no "win" —
// you just try to last as long as you can.
public class WaveManager : MonoBehaviour {

  // ---- Settings you can change in the Unity Inspector ----

  [Header("Enemy prefab")]
  // The enemy tank we make copies of. Drag your enemy prefab here in Unity.
  [SerializeField] private GameObject enemyPrefab;

  [Header("How often enemies spawn")]
  // Seconds to wait before the very first group of enemies spawns.
  [SerializeField] private float startDelay = 3.0f;
  // Seconds to wait between each group of enemies.
  [SerializeField] private float secondsBetweenSpawns = 4.0f;

  [Header("How many enemies spawn")]
  // How many enemies appear each time we spawn a group.
  [SerializeField] private int enemiesPerSpawn = 1;
  // The most enemies allowed alive at once (stops the game from lagging).
  [SerializeField] private int maxEnemiesAlive = 8;

  [Header("Where enemies spawn")]
  // How far from the player enemies appear. Keep this bigger than what the camera
  // can see, so they drive in from out of sight instead of popping up in front of you.
  [SerializeField] private float spawnDistance = 30f;
  // Half the width of the battlefield, measured from its centre. Spawns are kept
  // inside this box so nobody ever appears outside the cliffs.
  // The desert level runs to about 40 units each way, so 35 keeps us safely inside.
  [SerializeField] private float arenaHalfSize = 35f;
  // How high off the ground enemies are placed when they spawn.
  [SerializeField] private float spawnHeight = 0f;

  // ---- Internal values the script uses while running ----

  private Transform player;
  private float timeUntilNextSpawn;           // counts down; spawn when it hits 0

  // Start runs once when the game begins.
  private void Start() {
    // Find the player (tagged "Player") — we spawn enemies in a ring around it.
    GameObject playerObj = GameObject.FindGameObjectWithTag("Player");
    if (playerObj != null) {
      player = playerObj.transform;
    }

    // Wait startDelay before the first spawn, then secondsBetweenSpawns for each group after.
    timeUntilNextSpawn = startDelay;
  }

  // Update runs once every frame.
  private void Update() {
    // No player left (destroyed / game over) — stop spawning.
    if (player == null) {
      return;
    }

    CountDownToNextSpawn();
  }

  // Lower the spawn timer. When it reaches 0, spawn a group of enemies
  // and reset the timer.
  private void CountDownToNextSpawn() {
    timeUntilNextSpawn -= Time.deltaTime;
    if (timeUntilNextSpawn <= 0f) {
      SpawnEnemies();
      timeUntilNextSpawn = secondsBetweenSpawns;
    }
  }

  // Spawn one group of enemies out of sight around the player.
  private void SpawnEnemies() {
    for (int i = 0; i < enemiesPerSpawn; i++) {
      // Stop early if the battlefield is already full of enemies.
      if (CountEnemiesAlive() >= maxEnemiesAlive) {
        return;
      }

      Vector3 spawnPosition = GetRandomPositionAroundPlayer();
      Instantiate(enemyPrefab, spawnPosition, Quaternion.identity);
    }
  }

  // Count how many enemies are currently alive.
  // Every enemy tank must have the "Enemy" tag set in Unity for this to work.
  private int CountEnemiesAlive() {
    return GameObject.FindGameObjectsWithTag("Enemy").Length;
  }

  // Pick a random spot on a circle around the player, out of camera range.
  private Vector3 GetRandomPositionAroundPlayer() {
    // Pick a random compass direction: anywhere from 0 to 360 degrees around the player.
    float angle = Random.Range(0f, 360f);
    // Turn that angle into a direction we can walk along.
    Vector3 direction = Quaternion.Euler(0f, angle, 0f) * Vector3.forward;

    // Step out from the player in that direction.
    Vector3 position = player.position + direction * spawnDistance;

    // Keep the spot inside the battlefield, so nobody spawns beyond the cliffs.
    position.x = Mathf.Clamp(position.x, -arenaHalfSize, arenaHalfSize);
    position.z = Mathf.Clamp(position.z, -arenaHalfSize, arenaHalfSize);
    position.y = spawnHeight;

    return position;
  }
}
```

1. Create an empty object named `Managers` (right-click in the Hierarchy → **Create
   Empty**).
2. Add the **Wave Manager** script to it and drag the `EnemyTank` **prefab** into
   **Enemy Prefab**.
3. **Delete the test enemy you left in the scene** in Chapter 7 — from now on the
   spawner supplies them.

### Test it

Press **Play**. After a few seconds, tanks begin rolling in over the dunes from
every direction — a steady stream you have to keep clearing. Survive as long as you
can.

> **Tip:** if enemies pop into view too close, raise **Spawn Distance**. If they take
> forever to arrive, lower it or raise `EnemyTank`'s **Move Speed**.

### Challenge

Make it **escalate**. Every so often, shrink `secondsBetweenSpawns` (faster spawns)
and raise `enemiesPerSpawn` (bigger groups) so the pressure builds the longer you
live — the classic survivor difficulty curve.

# Part 5 — Score, Time & UI

## Chapter 11 — The Game Manager

**Goal:** track kills and survival time, and freeze the game on **Game Over**.

### Idea

We want one object any script can reach — a **singleton**. `GameManager.Instance`
is that single, always-available object. It counts survival time each frame, adds
kills when a `Health` reports one, and on the player's death **freezes the game**
(`Time.timeScale = 0`) and tells the UI to show the game-over screen.

You don't wire player death by hand — remember, `Health` already calls
`GameManager.GameOver()` itself when the `Player` tank dies (Chapter 6).

### Do it

Create `Assets/Scripts/GameManager.cs`:

```csharp:GameManager.cs
using UnityEngine;

// Tracks score/time and game state; handles game over.
// Simple singleton so any script can reach it via GameManager.Instance.
public class GameManager : MonoBehaviour {
  // The one-and-only instance.
  public static GameManager Instance { get; private set; }

  [Header("UI (assign the Canvas's UIController)")]
  [SerializeField] private UIController ui;

  // Stats other scripts read (UI) or update (enemies).
  int kills;
  float survivalTime;
  public int Kills {
    get {
      return kills;
    }
    private set { kills = value; }
  }
  public float SurvivalTime {
    get {
      return survivalTime;
    }
    private set { survivalTime = value; }
  }

  private bool isGameOver;

  private void Awake() {
    Instance = this;
  }

  private void Start() {
    // Make sure the game runs at normal speed (in case a previous game over paused it).
    Time.timeScale = 1f;
  }

  private void Update() {
    // Count up survival time while we're still alive.
    if (!isGameOver) {
      SurvivalTime += Time.deltaTime;
    }
  }

  // Called by an enemy when it dies.
  public void AddKill() {
    Kills += 1;
  }

  // Called by the player's Health when it hits 0.
  public void GameOver() {
    if (isGameOver) {
      return;
    }

    isGameOver = true;

    Time.timeScale = 0f; // freeze the game

    ui.ShowGameOver(Kills, SurvivalTime);
  }
}
```

1. Add the **Game Manager** script to the `Managers` object. (We'll fill its **Ui**
   slot in the next chapter, once the Canvas exists.)

> **Tip:** enemy kills and player death are both handled **automatically** by
> `Health`'s tag check. `GameManager` just holds the numbers and the game-over
> switch — you never wire those events in the Inspector.

## Chapter 12 — The HUD & Restart

**Goal:** on-screen **Health**, **Kills**, and **Time**, plus a **Game Over** panel
with a working **Restart** button.

### Idea

UI lives on a **Canvas**, which floats flat in front of the camera no matter what
the 3D world is doing. Our `UIController` reads live values every frame — the
player's `Health` for the health readout, and the `GameManager` for kills and time —
and writes them into text labels. On game over it flips on a hidden panel with your
final stats. It also owns **Restart**, which un-freezes time and reloads the scene.
The controller **finds the player itself**, so there's nothing to drag for that.

### Do it — the script

Create `Assets/Scripts/UIController.cs`:

```csharp:UIController.cs
using UnityEngine;
using TMPro; // TextMeshPro text
using UnityEngine.SceneManagement;

// The HUD (health, kills, timer) plus the game-over panel.
// Reads live values from the player's Health and the GameManager each frame.
public class UIController : MonoBehaviour {
  [Header("HUD")]
  [SerializeField] private TMP_Text healthText;
  [SerializeField] private TMP_Text killsText;
  [SerializeField] private TMP_Text timerText;

  [Header("Game Over")]
  [SerializeField] private GameObject gameOverPanel; // hidden until game over
  [SerializeField] private TMP_Text finalStatsText;

  private Health playerHealth; // found automatically at start

  private void Start() {
    // Find the player (tagged "Player") and grab its Health — no dragging needed.
    GameObject playerObj = GameObject.FindGameObjectWithTag("Player");
    playerHealth = playerObj.GetComponent<Health>();

    // Hide the game-over panel at the start.
    gameOverPanel.SetActive(false);
  }

  private void Update() {
    // Show the player's health as text. Once the player is destroyed, show 0.
    if (playerHealth != null) {
      healthText.text = "Health: " + playerHealth.CurrentHealth + " / " + playerHealth.MaxHealth;
    }
    else {
      healthText.text = "Health: 0 / 0";
    }

    killsText.text = "Kills: " + GameManager.Instance.Kills;
    timerText.text = "Time: " + FormatTime(GameManager.Instance.SurvivalTime);
  }

  // Called by GameManager.GameOver().
  public void ShowGameOver(int kills, float survivalTime) {
    if (gameOverPanel != null) {
      gameOverPanel.SetActive(true);
    }

    if (finalStatsText != null) {
      finalStatsText.text = "You destroyed " + kills + " tanks\n" +
                            "You survived " + FormatTime(survivalTime);
    }
  }

  // Turn seconds into mm:ss.
  private string FormatTime(float seconds) {
    int minutes = (int)(seconds / 60f);
    int secs = (int)(seconds % 60f);
    return minutes.ToString("00") + ":" + secs.ToString("00");
  }

  // Called by the Restart button.
  public void RestartGame() {
    Time.timeScale = 1f; // un-freeze BEFORE reloading, or the new scene stays frozen
    SceneManager.LoadScene(SceneManager.GetActiveScene().buildIndex);
  }
}
```

### Do it — build the Canvas

1. **Right-click in the Hierarchy → UI → Canvas.** Add the **UIController** script
   to it.
2. Add three **UI → Text - TextMeshPro** labels; name them `HealthText`,
   `KillsText`, `TimerText`; place them in a corner. (If Unity asks to import TMP
   Essentials, click **Import**.)
3. Create the game-over screen: add a **UI → Panel** named `GameOverPanel`, put a
   TMP label `FinalStatsText` and a **UI → Button - TextMeshPro** named
   `RestartButton` inside it.
4. Wire the **UIController**: drag `HealthText`, `KillsText`, `TimerText`,
   `GameOverPanel`, and `FinalStatsText` into their matching slots.
5. Wire the button: select `RestartButton`, under **On Click ()** click **+**, drag
   the `Canvas` in, and choose **UIController → RestartGame**.
6. Finally, connect the manager to the UI: select `Managers`, and on its
   **GameManager**, drag the `Canvas` into the **Ui** slot.

### Test it

Press **Play**. You now see **Health / Kills / Time** ticking live over the desert.
Fight until you die: the game freezes, the **Game Over** panel appears with your
final kills and survival time, and **Restart** drops you into a fresh run. That's
the whole game.

> **You just built a complete 3D game.** Drive, shoot, survive an endless stream of
> enemies, die, see your score, and restart — every piece is one small script,
> talking to the others through `Health` and the `GameManager`.

# Part 6 — Make It Yours

**Goal:** ideas to take the game further. Pick any that sound fun — they build on
exactly what you already have.

### Challenge — Escalating difficulty

Make `WaveManager` ramp up over time: on a second timer, lower
`secondsBetweenSpawns` and raise `enemiesPerSpawn`. The longer you survive, the more
it throws at you.

### Challenge — A turret that aims

The tank model has a separate **`TankTurret`** child, and right now it just sits
still. Give it its own script that rotates it to face the nearest enemy while the
body drives wherever you steer — then move the `FirePoint` logic onto the turret so
you shoot where it's looking.

### Challenge — Pickups

The project already has power-up models in `Assets/_Tanks/Art/Models/PowerUps/`
(health, shield, damage, speed). When an enemy dies, spawn one from `Health.Die`,
just like the explosion. Give it a trigger collider and a script that, on touching
the `Player`, heals or upgrades and then destroys itself.

### Challenge — Level-up upgrades

Every 10 kills, make the player stronger: lower `PlayerTankGun`'s `fireCooldown` or
raise the player's `Health`. This one hook is the real *Vampire Survivors* addiction
loop.

### Challenge — Engine sound

`Assets/_Tanks/Audio/SFX/` has `EngineIdle` and `EngineDriving`. Add an
**Audio Source** to the player and swap the clip depending on whether `moveInput` is
zero — instant atmosphere.

### Challenge — Screen shake & juice

On the player taking damage, nudge the camera a few units for a couple of frames
inside `CameraFollow`. Tiny effect, huge impact.

*End of workbook — now go build something of your own.*
