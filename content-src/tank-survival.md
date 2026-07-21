---
title: "Build a Top-Down Tank Survival Game in Unity"
subtitle: "Your First Action Game in Unity"
author: "Project: top-down-tanks  ·  Engine: Unity (C#)  ·  Student Workbook"
coverEyebrow: "Learn to Code · Make Games"
coverTop: "Top-Down"
coverRed: "Tank Survival"
coverSub: "Build it in Unity, step by step — from an empty battlefield to an endless survival game."
coverPill: "Student Workbook"
coverCaption: "Art: Kenney “Top-Down Tanks” (CC0)"
---

# Part 0 — Before You Start

## What you're going to build

A **top-down tank survival** game, in the style of *Vampire Survivors* but with
tanks. You drive one tank around a walled battlefield. Enemy tanks roll in from
the edges of the screen in a **steady, endless stream** and shoot at you. You
blast them until they explode. There's no finish line — you survive as long as you
can while the game counts your **kills** and your **survival time**. When your
health hits zero, it's **Game Over** with a Restart button.

You'll build it **in small steps**. After almost every chapter you press **Play**
and see something new working — first a tank you can drive, then a tank that
shoots, then enemies, then endless spawns, then a full HUD.

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
- **Spacebar** — **fire** a bullet straight ahead.

You aim by turning the whole tank, then shoot. Simple and satisfying.

## The pieces we'll build

The whole game is just **ten small scripts**, each with one job:

```
PlayerTankController ── drives the player's tank
PlayerTankGun ──────── fires the player's bullets (Spacebar)
Bullet ─────────────── flies forward, damages any tank it hits
Health ─────────────── hit points for EVERY tank; ends the game or scores a kill
EnemyTank ──────────── drives an enemy toward the player
EnemyGun ───────────── fires an enemy's bullets (automatic)
WaveManager ────────── spawns a steady, endless stream of enemies
GameManager ────────── score, survival time, game over
UIController ───────── the HUD, the game-over screen, and Restart
Explosion ──────────── makes an explosion sprite vanish after a moment
```

Don't worry about all of them now — each one appears when we need it.

## One-time project setup

This project is already prepared for you, but here's what's set up so you know:

- **Input System.** We read the keyboard with Unity's modern **Input System**
  (`Keyboard.current`). It's already installed and switched on.
- **Art.** The [Kenney "Top-Down Tanks"](https://kenney.nl/assets/top-down-tanks)
  sprites are in `Assets/kenney_top-down-tanks/`. Tank **bodies** and **barrels**
  are separate images — the barrel is a child object so it points where the tank
  faces. If sprites look blurry, set their **Filter Mode = Point** and
  **Compression = None**.
- **Where your code goes.** Every script you write lives in `Assets/Scripts/`.

> **Note:** three **Tags** matter in this game — `Player`, `Enemy`, and `Wall`.
> You set a tag at the top of the Inspector when an object is selected. We'll add
> each one the first time we need it.

# Part 1 — The Battlefield & Your Tank

## Chapter 1 — Build the Battlefield

**Goal:** an arena on screen — a camera framing the ground, boxed in by walls so
nothing can drive off the edge.

### Idea

A 2D scene is built from **GameObjects** with a **Sprite Renderer** (what you see)
and sometimes a **Collider2D** (something solid to bump into). The **Main Camera**
is orthographic — it shows a flat, top-down slice of the world. Our battlefield is
just a ground sprite with four walls around it.

### Do it

1. In the **Hierarchy**, select the **Main Camera**. In the Inspector, make sure
   **Projection = Orthographic**. Raise **Size** (try `6`) until you can see a
   comfortable play area.
2. Create the ground: **right-click in Hierarchy → 2D Object → Sprite**, name it
   `Ground`, and drag a tile from `Environment/` (e.g. `grass.png`) into its
   **Sprite** field. Scale it up to cover the view.
3. Create a wall: **right-click → 2D Object → Sprite**, name it `Wall_Top`. Give
   it any dark sprite (or a scaled square), add a **Box Collider 2D**
   (**Add Component → Box Collider 2D**), and stretch it along the top edge.
4. Set its **Tag** to `Wall` (top of the Inspector → **Tag → Add Tag…** if it
   isn't there yet, then select it).
5. Duplicate the wall three times (**Cmd/Ctrl + D**) and position the copies to
   box in the arena: top, bottom, left, right.

> **Tip:** group the ground and walls under one empty object called
> `Battlefield` (right-click → Create Empty) to keep the Hierarchy tidy.

### Test it

Press **Play**. You should see your arena, framed by the camera and boxed in by
four walls. Nothing moves yet — that's next.

## Chapter 2 — Drive the Tank

**Goal:** a tank you can drive — Up/Down to move forward and back, Left/Right to
turn.

### Idea

Tanks move with **physics**. We give the tank a **Rigidbody2D** (a physics body).
We **read the keys every frame** in `Update` (input feels smoothest there) and
remember them in two little variables, then **do the physics move** in
`FixedUpdate` (physics runs steadiest there). Each step we *rotate* with
Left/Right and *push forward* along the direction the tank faces. Because the
Kenney tank sprite points **up**, "forward" is `transform.up`.

### Do it — build the player tank

1. **Right-click → 2D Object → Sprite**, name it `Player`. Set its **Sprite** to a
   tank body, e.g. `Tanks/tankGreen_outline.png`.
2. Add a **Barrel** child: right-click `Player` → 2D Object → Sprite, name it
   `Barrel`, sprite `Tanks/barrelGreen_outline.png`. Position it so it points up
   out of the tank. (We'll use it for shooting in Part 2.)
3. Select `Player` and set its **Tag** to `Player`.
4. Add **Rigidbody 2D**. Set **Gravity Scale = 0** (this is top-down, no falling)
   and tick **Freeze Rotation → Z** (we rotate by code, not physics).
5. Add a **Collider 2D** (Box or Circle) sized to the tank.

### Do it — the driving script

Create `Assets/Scripts/PlayerTankController.cs`:

```csharp:PlayerTankController.cs
using UnityEngine;
using UnityEngine.InputSystem; // new Input System, direct keyboard polling

// Classic tank controls: Up/Down drive forward/back along the facing direction,
// Left/Right rotate the whole tank in place. Keyboard only, no mouse.
public class PlayerTankController : MonoBehaviour {
  [Header("Movement")]
  [SerializeField] private float moveSpeed = 4f;        // units per second
  [SerializeField] private float rotationSpeed = 180f;  // degrees per second

  private Rigidbody2D rb;

  float moveInput, turnInput;

  private void Awake() {
    rb = GetComponent<Rigidbody2D>();
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
      turnInput += 1f; // turn left (counter-clockwise)
    }

    if (kb.rightArrowKey.isPressed) {
      turnInput -= 1f; // turn right (clockwise)
    }
  }

  private void FixedUpdate() {
    // Rotate the tank body.
    float newAngle = rb.rotation + turnInput * rotationSpeed * Time.fixedDeltaTime;
    rb.MoveRotation(newAngle);

    // Move along the facing direction. The Kenney tank sprite points UP, so transform.up is "forward".
    Vector2 newPos = rb.position + (Vector2)transform.up * moveInput * moveSpeed * Time.fixedDeltaTime;
    rb.MovePosition(newPos);
  }
}
```

6. Drag the script onto the `Player` object (or **Add Component → Player Tank
   Controller**).

### Test it

Press **Play**. Use the **arrow keys**: Up/Down drive, Left/Right spin the tank in
place. Drive up to a wall — the collider stops you.

> **Tip:** the numbers **Move Speed** and **Rotation Speed** show up in the
> Inspector because we marked them `[SerializeField]`. Tweak them while the game
> runs to find a feel you like.

### Challenge

The tank turns at a fixed speed. Try making **backward** driving slower than
forward (real tanks reverse slowly). Hint: when `moveInput` is negative, multiply
the speed by something like `0.6f`.

# Part 2 — Shooting

## Chapter 3 — The Bullet

**Goal:** a bullet prefab that flies forward, damages any tank it hits, and
cleans itself up.

### Idea

A bullet is a tiny GameObject that moves forward every frame and disappears when
it hits a tank or a wall — or after a couple of seconds if it hits nothing (so
bullets never pile up and slow the game down).

We want it to hit **tanks**, so instead of checking colours or teams, the bullet
just looks for a **`Health`** component. Every tank has one (we build `Health` in
Part 3), so a bullet damages *any* tank it touches — even an enemy can wing
another enemy. Because bullets spawn at the **muzzle** (the tip of the barrel,
just ahead of the tank), a tank never shoots itself.

### Do it — the script

Create `Assets/Scripts/Bullet.cs`:

```csharp:Bullet.cs
using UnityEngine;

// Travels forward, damages the first tank it hits (ANY tank — friendly fire is on),
// then dies. Uses a trigger collider so it passes through until it finds something.
public class Bullet : MonoBehaviour {
  [Header("Bullet")]
  [SerializeField] private float speed = 12f;
  [SerializeField] private int damage = 1;
  [SerializeField] private float lifetime = 2f; // self-destruct so bullets never pile up

  private void Start() {
    // Clean up automatically after 'lifetime' seconds if we never hit anything.
    Destroy(gameObject, lifetime);
  }

  private void Update() {
    // Fly forward. The sprite points UP, so transform.up is "forward".
    transform.position += transform.up * speed * Time.deltaTime;
  }

  private void OnTriggerEnter2D(Collider2D other) {
    // Did we hit a tank (anything with a Health component)?
    Health health = other.GetComponent<Health>();
    if (health != null) {
      // The tank takes damage, and the bullet dies.
      health.TakeDamage(damage);
      Destroy(gameObject);
      return;
    }

    // Hit a wall? Just die (no damage).
    if (other.CompareTag("Wall")) {
      Destroy(gameObject);
    }
    // Anything else (other bullets, pickups): ignore and keep flying.
  }
}
```

### Do it — the prefab

1. Make a bullet object: **right-click → 2D Object → Sprite**, name it `Bullet`,
   sprite `Bullets/bulletGreen_outline.png`.
2. Add a **Collider 2D** (Circle is fine) and tick **Is Trigger** — a trigger lets
   the bullet pass *into* things so `OnTriggerEnter2D` runs.
3. Add a **Rigidbody 2D** with **Gravity Scale = 0** (triggers need a Rigidbody to
   fire).
4. Add the **Bullet** script.
5. Drag `Bullet` from the Hierarchy into an `Assets/Prefabs/` folder to turn it
   into a **prefab**, then delete the one left in the scene. (A prefab is a
   reusable blueprint we spawn copies of.)

> **Note:** the line `other.GetComponent<Health>()` won't compile until we add the
> `Health` script in Chapter 5 — that's expected. Unity will show a red error
> until then; it clears the moment `Health` exists.

## Chapter 4 — The Tank's Gun

**Goal:** press **Spacebar** and your tank fires a bullet straight ahead.

### Idea

The gun spawns a bullet at the **muzzle** facing the same way the tank faces. We
use a small **cooldown** so you can't fire faster than a set rate. That's it —
because the bullet already knows how to fly and deal damage, the gun's only job is
to make one at the right spot, at the right time.

### Do it — the fire point

1. Select the `Barrel` child of `Player`. Right-click it → **Create Empty**, name
   it `FirePoint`. Move `FirePoint` to the **tip** of the barrel. Its "up"
   direction is where bullets will launch.

### Do it — the script

Create `Assets/Scripts/PlayerTankGun.cs`:

```csharp:PlayerTankGun.cs
using UnityEngine;
using UnityEngine.InputSystem;

// Fires bullets straight ahead on Spacebar. No aiming: the barrel is fixed to the
// tank's facing direction. Put this on the player body (or the barrel child).
public class PlayerTankGun : MonoBehaviour {
  [Header("Firing")]
  [Tooltip("Empty transform at the muzzle tip. Bullets spawn here, facing its 'up'.")]
  [SerializeField] private Transform firePoint;
  [SerializeField] private GameObject bulletPrefab;
  [SerializeField] private float fireCooldown = 0.3f; // seconds between shots

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
      Instantiate(bulletPrefab, firePoint.position, firePoint.rotation);

      cooldownTimer = fireCooldown;
    }
  }
}
```

2. Add the **Player Tank Gun** script to the `Player` object.
3. In its Inspector: drag the `FirePoint` object into **Fire Point**, and drag the
   `Bullet` **prefab** into **Bullet Prefab**.

### Test it

Press **Play** and tap **Spacebar**. A bullet fires from the barrel in the
direction the tank faces. Turn the tank and fire again — the bullets follow your
aim. (They fly through empty space for now; there's nothing to hit yet.)

### Challenge

Right now one tap = one bullet (`wasPressedThisFrame`). Change it to `isPressed`
so **holding** Space auto-fires. Notice how the `fireCooldown` suddenly becomes
your fire rate.

# Part 3 — Enemies & Health

## Chapter 5 — Health for Every Tank

**Goal:** one reusable `Health` component that both the player and the enemies use.

### Idea

Health is the same idea for everyone: start with `maxHealth`, subtract when hit,
and when it reaches zero, **die** — spawn an explosion and remove the object.

What happens *on* death is the only difference between the player and an enemy, and
`Health` decides it with a simple **tag check**: if this tank is the `Player`, tell
the `GameManager` it's **Game Over**; otherwise it's an enemy, so **add a kill**.
It checks `GameManager.Instance != null` first, so it's safe even before the
`GameManager` exists.

### Do it

Create `Assets/Scripts/Health.cs`:

```csharp:Health.cs
using UnityEngine;

// Reusable health for BOTH the player and enemy tanks.
// On death: the player (tagged "Player") ends the game; any other tank counts as a kill.
[RequireComponent(typeof(Collider2D))]
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

  // Call this to hurt the tank. Enemies hurt the player on contact; bullets hurt enemies.
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

    // Pop an explosion sprite where we died (if one is assigned).
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

1. Add the **Health** script to the `Player` object. Set **Max Health** to `3`.
   (Leave **Explosion Prefab** empty for now — we build it in Chapter 8.)

> **Note:** `Health` calls `GameManager` (built in Part 5). Those lines stay
> underlined until you add `GameManager` in Chapter 10 — then everything
> compiles. In a workshop you build straight through in one session, so this
> resolves itself.

### Test it

The `Bullet` from Part 2 now compiles (it found `Health`). To *see* damage, we need
something to shoot — that's the very next chapter.

> **Tip:** because `Bullet` looks for a `Health` component, **any** object with
> `Health` on it instantly becomes something bullets can destroy. That's the power
> of small, reusable scripts.

## Chapter 6 — Enemy Tanks that Chase

**Goal:** enemy tanks that drive toward the player, and that you can blow up with
your bullets.

### Idea

An enemy needs to know where the player is, then steer toward it. We find the
player once by its **`Player` tag**, then each physics step we turn to face it and
drive forward — but only until we're a set **stop distance** away, so the enemy
holds its ground and (soon) shoots instead of piling on top of you.

Notice this script never mentions score. When an enemy dies, **`Health` reports the
kill for us** (the tag check from Chapter 5), so `EnemyTank` can stay purely about
driving.

### Do it — the script

Create `Assets/Scripts/EnemyTank.cs`:

```csharp:EnemyTank.cs
using UnityEngine;

public class EnemyTank : MonoBehaviour {
  [Header("Movement")]
  [SerializeField] private float moveSpeed = 2.5f;
  [SerializeField] private float stopDistance = 4f; // hold this far from the player, then let EnemyGun shoot

  private Rigidbody2D rb;
  private Transform player;   // who we chase

  private void Awake() {
    rb = GetComponent<Rigidbody2D>();
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

    // Direction and distance to the player.
    Vector2 toPlayer = (Vector2)player.position - rb.position;
    float distance = toPlayer.magnitude;
    Vector2 dir = toPlayer.normalized;

    // Rotate the body to face the player. Sprite points UP, so subtract 90 degrees
    // to line the sprite's "up" up with the direction to the player.
    float angle = Mathf.Atan2(dir.y, dir.x) * Mathf.Rad2Deg - 90f;
    rb.MoveRotation(angle);

    // Drive closer until we reach stopDistance, then hold position (EnemyGun does the shooting).
    if (distance > stopDistance) {
      Vector2 newPos = rb.position + dir * moveSpeed * Time.fixedDeltaTime;
      rb.MovePosition(newPos);
    }
  }
}
```

### Do it — the enemy prefab

1. Build an enemy like the player: a body sprite (`Tanks/tankRed_outline.png`) with
   a `Barrel` child and a `FirePoint` at the muzzle.
2. Set its **Tag** to `Enemy`.
3. Add **Rigidbody 2D** (Gravity Scale 0, Freeze Rotation Z), a **Collider 2D**
   (not a trigger), **Health** (Max Health `2`), and the **EnemyTank** script.
4. Drag it into `Assets/Prefabs/` to make an `EnemyTank` prefab, then delete the
   scene copy.

### Test it

Temporarily drag one `EnemyTank` prefab into the scene near your player. Press
**Play**: the enemy drives up, stops a few units away, and points at you. Fire a
couple of bullets into it — it disappears in a puff (once you add explosions) and,
after Part 5, bumps your kill counter. That's `Bullet` → `Health.TakeDamage` →
`Die` working end to end.

### Challenge

Make a **tougher** enemy: duplicate the prefab, raise its **Max Health** to `4`,
and drop its **Move Speed**. You now have a slow tank that soaks up more hits.

## Chapter 7 — Enemies that Shoot Back

**Goal:** enemies that fire bullets at you instead of just sitting there.

### Idea

This is the player's gun with one change: instead of waiting for Spacebar, it
fires **automatically** on a cooldown. The `EnemyTank` script already turns the
body to face you, so the gun only needs to shoot straight ahead. If the player is
gone, it stops firing.

### Do it

Create `Assets/Scripts/EnemyGun.cs`:

```csharp:EnemyGun.cs
using UnityEngine;

// Auto-fires bullets straight ahead on a cooldown. Put this on an enemy tank.
// EnemyTank aims the body at the player; this script just keeps shooting forward.
// (It's the enemy's version of PlayerTankGun, which fires on the player's Spacebar instead.)
public class EnemyGun : MonoBehaviour {
  [Header("Firing")]
  [SerializeField] private GameObject bulletPrefab;
  [SerializeField] private Transform firePoint;       // muzzle tip (falls back to this tank if empty)
  [SerializeField] private float fireCooldown = 1.5f; // seconds between shots

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
    Instantiate(bulletPrefab, firePoint.position, firePoint.rotation);
  }
}
```

1. Open the `EnemyTank` **prefab** and add the **Enemy Gun** script.
2. Drag the `Bullet` prefab into **Bullet Prefab** and the enemy's `FirePoint`
   into **Fire Point**. (Want enemy shots to look different? Make a second Bullet
   prefab with a red bullet sprite and use that instead — no code change.)

### Test it

Put an enemy in the scene and press **Play**. It drives up, stops, and starts
shooting at you. Drive around its bullets, then destroy it. If your player's
`Health` is 3, a few enemy hits will bring you down — the full Game Over flow lands
in Part 5.

# Part 4 — Survival

## Chapter 8 — Explosions & Death

**Goal:** a puff of smoke when any tank dies.

### Idea

`Health.Die()` already spawns an `explosionPrefab` — we just haven't made one.
An explosion is a sprite that appears, then removes itself after a moment so it
doesn't linger forever. That "remove myself after X seconds" is one tiny script.

### Do it

Create `Assets/Scripts/Explosion.cs`:

```csharp:Explosion.cs
using UnityEngine;

// Put this on the Explosion prefab so it cleans itself up after playing briefly.
public class Explosion : MonoBehaviour {
  [SerializeField] private float duration = 0.5f; // seconds before it vanishes

  private void Start() {
    Destroy(gameObject, duration);
  }
}
```

1. Make an `Explosion` object from a smoke sprite (`Smoke/smokeOrange0.png`), add
   the **Explosion** script, and save it as a prefab. Delete the scene copy.
2. Select the `Player` and the `EnemyTank` prefab and drag the `Explosion` prefab
   into each one's **Health → Explosion Prefab** slot.

### Test it

Press **Play** and destroy an enemy — a smoke puff pops where it died, then
disappears. Small touch, big difference in "juice."

### Challenge

Kenney ships several smoke frames (`smokeGrey0…5`). Pick a different sprite, or
scale the explosion up a little for bigger tanks.

## Chapter 9 — Endless Spawns

**Goal:** enemies that keep spawning from just off-screen, forever. This is the
"survivor" heart of the game.

### Idea

A **spawner** runs one timer. After a short `startDelay`, then every
`secondsBetweenSpawns`, it drops a small group (`enemiesPerSpawn`) of enemies at
random points **just outside** the camera view, so they slide in from the edges. A
cap (`maxEnemiesAlive`) keeps the arena from ever overflowing (which would make the
game lag). There's no "win" — you just try to last.

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
  [SerializeField] private float secondsBetweenSpawns = 2.0f;

  [Header("How many enemies spawn")]
  // How many enemies appear each time we spawn a group.
  [SerializeField] private int enemiesPerSpawn = 1;
  // The most enemies allowed alive at once (stops the game from lagging).
  [SerializeField] private int maxEnemiesAlive = 10;

  [Header("Where enemies spawn")]
  // How far outside the screen enemies appear, so they slide into view.
  [SerializeField] private float distanceOffScreen = 1f;

  // ---- Internal values the script uses while running ----

  private Camera mainCamera;
  private float timeUntilNextSpawn;           // counts down; spawn when it hits 0

  // Start runs once when the game begins.
  private void Start() {
    mainCamera = Camera.main;
    // Wait startDelay before the first spawn, then secondsBetweenSpawns for each group after.
    timeUntilNextSpawn = startDelay;
  }

  // Update runs once every frame.
  private void Update() {
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

  // Spawn one group of enemies just outside the screen.
  private void SpawnEnemies() {
    for (int i = 0; i < enemiesPerSpawn; i++) {
      // Stop early if the arena is already full of enemies.
      if (CountEnemiesAlive() >= maxEnemiesAlive) {
        return;
      }

      Vector2 spawnPosition = GetRandomPositionOffScreen();
      Instantiate(enemyPrefab, spawnPosition, Quaternion.identity);
    }
  }

  // Count how many enemies are currently alive.
  // Every enemy tank must have the "Enemy" tag set in Unity for this to work.
  private int CountEnemiesAlive() {
    return GameObject.FindGameObjectsWithTag("Enemy").Length;
  }

  // Pick a random spot just off one of the four screen edges.
  private Vector2 GetRandomPositionOffScreen() {
    // Half the height and width of what the camera can see, in world units.
    float halfHeight = mainCamera.orthographicSize;
    float halfWidth = halfHeight * mainCamera.aspect;
    Vector2 cameraCenter = mainCamera.transform.position;

    // Choose one of the four edges at random: 0 = top, 1 = bottom, 2 = left, 3 = right.
    int edge = Random.Range(0, 4);

    switch (edge) {
      case 0: // top: random left-to-right spot, just above the screen
        return new Vector2(cameraCenter.x + Random.Range(-halfWidth, halfWidth),
                           cameraCenter.y + halfHeight + distanceOffScreen);
      case 1: // bottom: random left-to-right spot, just below the screen
        return new Vector2(cameraCenter.x + Random.Range(-halfWidth, halfWidth),
                           cameraCenter.y - halfHeight - distanceOffScreen);
      case 2: // left: random top-to-bottom spot, just left of the screen
        return new Vector2(cameraCenter.x - halfWidth - distanceOffScreen,
                           cameraCenter.y + Random.Range(-halfHeight, halfHeight));
      default: // right: random top-to-bottom spot, just right of the screen
        return new Vector2(cameraCenter.x + halfWidth + distanceOffScreen,
                           cameraCenter.y + Random.Range(-halfHeight, halfHeight));
    }
  }
}
```

1. Create an empty object named `Managers` (right-click → Create Empty).
2. Add the **Wave Manager** script to it and drag the `EnemyTank` prefab into
   **Enemy Prefab**. Remove any test enemies you left in the scene.

### Test it

Press **Play**. After a few seconds, enemies begin rolling in from the edges — a
steady stream you have to keep clearing. Survive as long as you can.

### Challenge

Make it **escalate**. Every so often, shrink `secondsBetweenSpawns` (faster
spawns) and raise `enemiesPerSpawn` (bigger groups) so the pressure builds the
longer you live — the classic survivor difficulty curve.

# Part 5 — Score, Time & UI

## Chapter 10 — The Game Manager

**Goal:** track kills and survival time, and freeze the game on **Game Over**.

### Idea

We want one object any script can reach — a **singleton**. `GameManager.Instance`
is that single, always-available object. It counts survival time each frame, adds
kills when a `Health` reports one, and on the player's death **freezes the game**
(`Time.timeScale = 0`) and tells the UI to show the game-over screen.

You don't wire player death by hand — remember, `Health` already calls
`GameManager.GameOver()` itself when the `Player` tank dies (Chapter 5).

### Do it

Create `Assets/Scripts/GameManager.cs`:

```csharp:GameManager.cs
using UnityEngine;
using UnityEngine.SceneManagement;

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

## Chapter 11 — The HUD & Restart

**Goal:** on-screen **Health**, **Kills**, and **Time**, plus a **Game Over** panel
with a working **Restart** button.

### Idea

UI lives on a **Canvas**. Our `UIController` reads live values every frame — the
player's `Health` for the health readout, and the `GameManager` for kills and
time — and writes them into text labels. On game over it flips on a hidden panel
with your final stats. It also owns **Restart**, which un-freezes time and reloads
the scene. The controller **finds the player itself**, so there's nothing to drag
for that.

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

1. **Right-click → UI → Canvas.** Add the **UIController** script to it.
2. Add three **UI → Text - TextMeshPro** labels; name them `HealthText`,
   `KillsText`, `TimerText`; place them in a corner. (If Unity asks to import TMP
   Essentials, click **Import**.)
3. Create the game-over screen: add a **UI → Panel** named `GameOverPanel`, put a
   TMP label `FinalStatsText` and a **UI → Button - TextMeshPro** named
   `RestartButton` inside it.
4. Wire the **UIController**: drag `HealthText`, `KillsText`, `TimerText`,
   `GameOverPanel`, and `FinalStatsText` into their matching slots.
5. Wire the button: select `RestartButton`, under **On Click ()** click **+**,
   drag the `Canvas` in, and choose **UIController → RestartGame**.
6. Finally, connect the manager to the UI: select `Managers`, and on its
   **GameManager**, drag the `Canvas` into the **Ui** slot.

### Test it

Press **Play**. You now see **Health / Kills / Time** ticking live. Fight until you
die: the game freezes, the **Game Over** panel appears with your final kills and
survival time, and **Restart** drops you into a fresh run. That's the whole game.

> **You just built a complete game.** Drive, shoot, survive an endless stream of
> enemies, die, see your score, and restart — every piece is one small script,
> talking to the others through `Health` and the `GameManager`.

# Part 6 — Make It Yours

**Goal:** ideas to take the game further. Pick any that sound fun — they build on
exactly what you already have.

### Challenge — Escalating difficulty

Make `WaveManager` ramp up over time: on a second timer, lower
`secondsBetweenSpawns` and raise `enemiesPerSpawn`. The longer you survive, the
more it throws at you.

### Challenge — Pickups

When an enemy dies, spawn a coin or a health pack (from `Health.Die`, like the
explosion). Give it a trigger collider and a script that, on touching the
`Player`, adds score or heals and then destroys itself.

### Challenge — Level-up upgrades

Every 10 kills, make the player stronger: lower `PlayerTankGun`'s `fireCooldown`
or raise the player's `Health`. This one hook is the real *Vampire Survivors*
addiction loop.

### Challenge — Tread marks

Kenney includes `tracksLarge` / `tracksSmall`. Spawn a faint track sprite behind
the tank as it drives, fading it out over a second.

### Challenge — Screen shake & juice

On the player taking damage, nudge the camera a few pixels for a couple of frames.
Tiny effect, huge impact.

*End of workbook — now go build something of your own.*
