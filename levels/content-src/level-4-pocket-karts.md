---
title: "Pocket Karts"
subtitle: "Level 4: Junior"
author: "Unity Programmer Curriculum  ·  Level 4"
coverEyebrow: "Level 4 · Junior · Learn to Code · Make Games"
coverTop: "Pocket"
coverRed: "Karts"
coverSub: "A 3D kart racer: three tracks, three rivals, drifting and boosts, a ghost of your best lap, and the kart handling written by your lead."
coverPill: "Level 4 Workbook · Pocket Karts"
coverCaption: "6 scenes · 3 karts · 3 tracks · 1 lead's module"
coverArt: image
coverImage: cover.png
footer: "Pocket Karts  ·  Level 4 Workbook"
---

# Part 0 — Before You Start

## What you're going to build

A **kart racer** in 3D. Pocket Karts are toy racing karts, "the fastest toys in the
garden". You race three laps round a track against three computer karts, seen from just
behind your own. Drift through the corners to fill your **boost meter**, then boost down
the straights. Finish in the top three, and the next track opens.

**Two modes:**

- **Race:** you and three rivals, three laps. Finish in the top three to open the next
  track.
- **Time Trial:** you alone, three laps, against a **ghost**: a see-through replay of
  your best lap, and a clock that says how far ahead or behind it you are.

**Three karts,** one model in three colours and sizes, each with its own numbers:

| Kart | Colour | Top speed | Acceleration | Grip | Weight | Feels |
| --- | --- | --- | --- | --- | --- | --- |
| **Balanced** | blue | 22 m/s | 14 | 8 | 150 kg | easy |
| **Speedy** | red | 25 m/s | 12 | 6 | 130 kg | fast, slides |
| **Heavy** | green | 20 m/s | 11 | 9 | 220 kg | slow to start, pushes others aside |

**Three tracks,** each opened by a top-three finish on the one before:

| Track | Lap | What's on it |
| --- | --- | --- |
| **Meadow Loop** | 468 m | wide corners, a chicane, two boost pads, oaks and flowers. You build it, piece by piece |
| **Windmill Hill** | 578 m | over a hill, across a bridge and back under it, a mud patch, the windmill, bouncy hay bales |
| **Lighthouse Cliffs** | 651 m | red-and-white kerbs, S-bends, chicanes, a hump, a jump ramp, the lighthouse, the sea all round |

**Three rivals:** **Zip** in a yellow Speedy (fast on the straights), **Moss** in a purple
Heavy (slow out of corners, and pushes you off the line) and **Pebble** in an orange
Balanced (steady). They drive harder on the later tracks.

**The rules.** A lap counts only if you passed every checkpoint in order; drive the wrong
way and the screen says so. Hold **Drift** while steering fast and the kart slides, and
the meter fills; with a full meter, **Boost** gives you 8 m/s more for a second and a half.
Boost pads on the track do the same for anyone who drives over them; mud slows you. A
kart that flips, gets stuck or leaves the track goes back to its last checkpoint. When
you finish, the others have 15 seconds to finish too.

**Six scenes:** the **Menu**; the **Garage**, where you choose a kart and a track; the
three **tracks**; and the **Results**. Your best lap and best race on each track, the
tracks you've opened, and your ghosts are **saved**.

**How to play:**

| Action | Keyboard | Gamepad | Touch |
| --- | --- | --- | --- |
| Steer | A / D, ← / → | left stick | the stick, bottom left |
| Accelerate | W, ↑ | right trigger | the pedal, bottom right |
| Brake, then reverse | S, ↓ | left trigger | the brake |
| Drift (hold) | Left Shift | right shoulder | the drift button |
| Boost | Space | South button | the boost button |
| Back to the track | R | North button | (it happens by itself) |
| Pause | Esc, P | Start | the pause button |

In the settings you can choose your own keys.

## Your new job

In this book you're a new **junior programmer** at a small games studio, **Lantern Hill
Games**. The studio is making *Pocket Karts*, and you're building it. Your **lead**, Sam,
designed how the game fits together and wrote the studio's style guide. If you've done
Arcane Duel, you know Sam already. Four times in the book, someone hands you something:

| When | What you're handed | What you learn |
| --- | --- | --- |
| Chapter 1 | Sam's **style guide**, `STYLE_GUIDE.md` | following a team's coding standards |
| Chapter 11 | Sam's **kart handling**, as a package | reading, judging and plugging in code you didn't write |
| Chapter 12 | the **level designer's** two tracks, as a package | building on someone else's work in the Editor |
| Chapter 12 | a **Garage screen** written by last summer's intern: it works, but… | refactoring code to fit the standards (Chapter 19) |

That's not just a story. The **Unity Certified Associate: Programmer** exam, which Level 4
ends at, asks exactly these questions: *which code integrates into a system designed by a
lead?*, *which version follows the standards set by a senior programmer?*, *how would you
refactor this code to fit them?* You'll have done each of them for real.

## How this book works

It works like Levels 0 to 3: two kinds of chapters, read in the order they appear.

| Chapter | Colour | What it does |
| --- | --- | --- |
| **Chapter 1, 2, 3…** | Red | **Build** the game in Unity, step by step. |
| **C# Concept 1, 2, 3…** | Slate | **Learn** one coding or Unity idea, with examples to try. |

Each chapter follows the same beats: **Goal**, **Idea**, **Do it**, **Test it** and an
optional **Challenge**. Every build chapter ends with one more: **Commit**, because from
Chapter 1 your project lives in **Git**.

You'll try the C# examples in a `Practice` script, as before: an empty GameObject called
`Practice` with a script called `Practice`. Make it in a scene of its own,
`Assets/Scenes/Practice.unity`, so it never gets in the game's way.

Level 4 has three books: **Arcane Duel** (a 2D card duel), **Pocket Karts** (this one)
and **Juice Tycoon** (an idle tycoon game). Each teaches **every** Level 4 topic, and they
share the same C# Concept chapters, so the examples in those chapters come from all three
kinds of game: cards, karts and juice stands. The ideas are the same everywhere; this
book's build chapters show each one on your racer.

> **Tip:** you passed the Level 4 entry test, so everything in Levels 0 to 3 is yours:
> properties, coroutines, lists and dictionaries, `static` and `const`, raycasts, UI
> events, the Input System, state machines with `enum` and `switch`, the Animator, and
> naming conventions. Keep the Level 3 cheat sheet next to you.

## The route through this book

| Step | Chapter | You learn | You build |
| --- | --- | --- | --- |
| 1 | C# 1 | Version control with Git | — |
| 2 | Chapter 1 | A repository, `.meta` files, the style guide, model import settings | A project under Git |
| 3 | Chapter 2 | Grid and rotation snapping, a track from pieces, light and sky | Meadow Loop |
| 4 | C# 2 | Nested prefabs, variants, overrides | — |
| 5 | Chapter 3 | A model's pivot, a nested prefab, three variants | The kart |
| 6 | C# 3 | Data assets | — |
| 7 | Chapter 4 | A ScriptableObject for each kart | Kart stats |
| 8 | C# 4, C# 5 | `event`, `Action`, lambdas; actions, maps, bindings | — |
| 9 | Chapter 5 | A Rigidbody kart, an Input Actions asset, a chase camera | Drive it |
| 10 | C# 6 | Base classes, `abstract`, `override` | — |
| 11 | Chapter 6 | Trigger boxes that share a base class, lap events | Checkpoints and laps |
| 12 | C# 7 | `Dictionary`, `Queue`, `Stack`, choosing types | — |
| 13 | Chapter 7 | A circular queue, gizmos | The racing line |
| 14 | C# 8 | Contracts | — |
| 15 | Chapter 8 | `IKartInput`: the kart takes any driver | Computer drivers |
| 16 | C# 9 | Canvas scaling, anchors, pivots, layout groups | — |
| 17 | Chapter 9 | A countdown, standings sorted with a lambda, a HUD | The race |
| 18 | Chapter 10 | A meter, boost pads, mud, a Git branch | Drift and boost |
| 19 | C# 10 | Reading, judging and plugging in someone else's code | — |
| 20 | Chapter 11 | A package, its conflicts, a contract, tuning | Sam's handling |
| 21 | C# 11, C# 12 | Static and its risks; loading scenes | — |
| 22 | Chapter 12 | A fader, data between scenes, a prefab for every track | Menus and tracks |
| 23 | C# 13, C# 14 | `try` / `catch`; PlayerPrefs and JSON | — |
| 24 | Chapter 13 | A save file that can't break the game | Records and unlocks |
| 25 | Chapter 14 | A recording, replayed; a second `IRacer` | The ghost |
| 26 | Chapter 15 | Rebinding, touch controls, a pause that swaps maps | Controls |
| 27 | C# 15 | Reusing objects | — |
| 28 | Chapter 16 | A pool of skid marks, particles, wheels that turn | Juice |
| 29 | Chapter 17 | Groups, snapshots and exposed volumes | Sound and the Audio Mixer |
| 30 | C# 16, C# 17 | The Package Manager; the Profiler, Frame Debugger and Memory Profiler | — |
| 31 | Chapter 18 | Three problems, three tools | Profile it |
| 32 | C# 18, C# 19 | Style guides and refactoring; logs and compile errors | — |
| 33 | Chapter 19 | Small, tested refactoring steps | The intern's code, cleaned up |
| 34 | Chapter 20 | Level 4's mistakes, and Git to undo them | Break it, then fix it |
| 35 | Chapter 21 | WebGL and PC builds, a release tag | A game you can share |
| 36 | Part 6 | The Associate exam | — |
| 37 | Part 7 | Exam-style practice | — |

## For trainers: running a session

Sessions follow the route above, with the same rhythm as Levels 0 to 3:

| Share | Activity | From |
| --- | --- | --- |
| About 20% | **Concept:** teach the idea. Students predict each example's Console output before you run it. | C# Concept chapters |
| About 60% | **Build:** students follow the chapter in Unity, press Play at every checkpoint, and commit. | Build chapters |
| About 20% | **Practice:** the **Do it** exercises, in class or as homework. | C# Concept chapters |

Students join Level 4 by passing the **Level 4 entry test**. Chapters 5, 8 and 11 are the
heart of this book: driving, interfaces, and plugging in code someone else wrote. Give
them the most time. Chapter 2 builds a whole track by hand, piece by piece; slower
students can finish it at home from the book.

**What you share with your students** is ready in the course project's
`Student Files/Level 4 - Pocket Karts` folder, one folder for each row: zip it, and share
it.

| When | What |
| --- | --- |
| Before Chapter 1 | the `Art` and `Audio` folders, `CREDITS.md` and `STYLE_GUIDE.md` |
| Chapter 11 | `Pocket Karts Handling 1.0.unitypackage`, Sam's module, and its README |
| Chapter 12 | `Pocket Karts Tracks 1.0.unitypackage`, the level designer's tracks, and its README; `GarageScreen.cs`, the intern's script |

One thing they get themselves, if they do Chapter 18's optional step: **Cartoon FX
Remaster Free**, from the Asset Store, with their own free Unity account. Tell them
before Chapter 18. Its licence lets each of them use it, not get its files from you.

Your trainer project has the finished game, and a menu item that builds it from scratch:
**Tools → Pocket Karts (Level 4) → Build Scenes**. Use it to show the goal on the first
day, or to rescue a project that's beyond repair.

## The pieces we'll build

Fifty-six scripts, in six folders. Most are short; a few grow through the book.

```
Karts ── KartStats ────── one kart's numbers, in an asset
         KartController ─ how a kart drives: yours first, then Sam's module
         IKartInput ───── whoever drives a kart: steer, throttle, drift, boost
         PlayerDriver ─── you, through the keys, a gamepad or the screen
         AIDriver ─────── the computer, along the racing line
         BoostMeter ───── fills while you drift; a full one is a boost
         KartPaint ────── gives a kart its colour
         WheelSpin ────── turns the front wheels, rolls all four
         SkidMarks ────── leaves marks on the road while drifting
         SkidMark ─────── one mark, which fades
         SkidMarkPool ─── skid marks, reused
         KartEffects ──── dust, flames and sparks

Track ── TrackTrigger ─── abstract: anything on the track a kart drives through
         Checkpoint ───── a box across the road; laps need them all, in order
         FinishLine ───── checkpoint 0, where laps end: it extends Checkpoint
         BoostPad ─────── a boost for anyone who drives over it
         MudPatch ─────── slows anyone in it
         RacingLine ───── the way round, for the computer drivers (a Queue)
         StartGrid ────── four places to start from

Race ─── IRacer ───────── anything that races: a kart, or a ghost
         Racer ────────── a kart in the race: laps, checkpoints, times
         RaceManager ──── the countdown, the standings, the finish
         ChaseCamera ──── follows your kart
         TrackInfo ────── a track: its name, scene, laps, and what opens it
         RivalProfile ─── a computer rival: name, kart, colour, skill
         RaceResult ───── what happened in a race
         ResultRow ────── one racer's line of it
         GhostData ────── a recorded lap
         GhostRecorder ── records your best lap
         GhostRunner ──── replays it: an IRacer too

UI ───── RaceHud ──────── place, lap, time, speed, wrong way
         CountdownLights ─ 3, 2, 1, GO
         BoostGauge ───── the boost meter on the screen
         TimeText ─────── 1:12.40, +0.42, 2nd
         KartCard ─────── a kart in the Garage
         TrackCard ────── a track in the Garage, or a lock
         StatBar ──────── one of a kart's numbers, as a bar
         ResultLine ───── one line of the results
         PauseMenu ────── pauses, and swaps action maps
         TouchControls ── the on-screen stick and buttons

Flow ─── RaceSetup ────── what one scene hands the next (static)
         SceneFader ───── fades between scenes
         MainMenu ─────── the menu
         GarageScreen ─── the Garage (the intern's, then yours)
         ResultsScreen ── the results, records and unlocks
         Turntable ────── turns a thing slowly: the menu's kart, the windmill
         SaveData ─────── what the save file holds
         TrackRecord ──── your records on one track
         SaveSystem ───── reads and writes the save and the ghosts, safely
         GameSettings ─── PlayerPrefs, with named keys
         SettingsPanel ── the settings
         RebindRow ────── choose a new key

Audio ── VolumeSettings ─ the mixer's volumes
         MusicPlayer ──── plays the scene's music
         EngineSound ──── an engine's pitch rises with its speed
         KartSounds ───── skids, bumps and boosts
```

## One-time setup

- **Unity 6** (6000.6), with a new project made from the **Universal 3D** template, as
  for Gate Guard. Call it `Pocket Karts`. The **Input System** package comes with it, and
  so does the UI (uGUI) with TextMeshPro.
- **Git and GitHub Desktop.** Install **GitHub Desktop** from desktop.github.com (it
  brings Git with it), and make a free account on github.com. Chapter 1 sets up the
  rest.
- **WebGL and PC builds** (Chapter 21): in the **Unity Hub**, **Installs**, the cog next
  to your Unity 6 → **Add modules**, tick **Web Build Support**, and the build support for
  your computer (**Mac Build Support** or **Windows Build Support**) if it isn't there.
- **Art and sound:** your trainer shares two folders, `Art` and `Audio`, holding every
  file this book uses, each pack's licence beside them. `CREDITS.md` names them all:
  - **Modular Racekart Track (Hilly Terrain)** by Keith at Fertile Soil Productions: the
    track pieces, the bridges, the windmill, the lighthouse, the hay and the banners.
  - **Racing Kart** and **Nature Props**, by the same artist: the kart, the trees,
    bushes, flowers and rocks.
  - **game-icons.net** icons by Delapouite, Lorc and Skoll: the HUD's and menus' icons.
  - **Russo One**, a font by Jovanny Lemonad, under the SIL Open Font License.
  - Sounds by domasx2 (the engine), Scribe (the countdown, the skid and the bump),
    EZduzziteh (the boost) and qubodup (the crash), and **Ninja Adventure** by Pixel-Boy
    and AAA: the music, the click and the jingles.

  The models and sounds are CC0: free to use for anything. The icons are CC BY 3.0, so
  the game must credit their authors (the Menu's **Credits** does). The font's licence
  lets you use and share it, as long as its licence, `Art/Fonts/RussoOne-OFL.txt`, goes
  with it.

# Part 1 — A Project and a Track

## C# 1 — Git with Unity

**Goal:** you can put a Unity project under Git with GitHub Desktop, keep the right files
in it, commit your work in small steps, try an idea on a branch and merge it, and undo a
change that went wrong; and you can say what version control is for (Associate: Assets —
primary purposes of version control).

### Idea — why version control

**Version control** keeps every step of a project that you choose to save. It does four
jobs, which the exam calls its primary purposes:

| Job | What it gives you | Without it |
| --- | --- | --- |
| **History** | every saved step, with who made it, when, and a message saying why | folders called `Game final 2 (really final)` |
| **Rollback** | undo a bad change, to one file or a whole step, even weeks later | fixing it from memory, or starting again |
| **Working together** | each person works on their own copy, and the tool merges their work | emailing files, and overwriting each other's |
| **Backup** | the project and all its history, kept off your computer | a lost laptop takes the game with it |

**Git** is the system most teams use, and **GitHub** keeps Git projects online. This
course uses both through **GitHub Desktop**, a free app that does Git's work with buttons.

### Idea — the words

| Word | Means |
| --- | --- |
| **repository** (repo) | a project folder that Git looks after, with its whole history inside, in a hidden `.git` folder |
| **commit** | one saved step: the changes you picked, with a message (and the verb: to save one) |
| **history** | the list of commits, newest first |
| **diff** | what changed between two versions of a file: lines taken out (red) and lines put in (green) |
| **branch** | a line of commits of its own, for trying something without touching the rest; the first is `main` |
| **merge** | bring one branch's commits into another |
| **remote** | a copy of the repository somewhere else, usually on GitHub; Git calls it `origin` |
| **push** | send your new commits to the remote |
| **pull** | fetch the remote's new commits and merge them into yours |
| **clone** | download a whole repository, history and all, onto another computer |
| **conflict** | two changes to the same lines that Git can't merge by itself, so a person must choose |

### Idea — what stays out of Git

Much of a Unity project's folder is made by Unity from your work, and can be made again
at any time. It's big, changes constantly and differs between computers, so it stays out:

| Folder | Holds | Why it stays out |
| --- | --- | --- |
| `Library/` | imported assets, compiled scripts, caches | Unity rebuilds it from `Assets/` and `Packages/`; it's often gigabytes |
| `Temp/` | files Unity needs while it's open | gone when Unity closes |
| `Logs/` | the Editor's logs | of no use to anyone else |
| `obj/` | your code editor's build files | the code editor makes them again |
| `UserSettings/` | your own window layout and Editor choices | personal: a teammate wants their own |
| `Build/`, `Builds/` | finished games | made from the project, and big: share builds on itch.io instead |

What goes in: `Assets/` (with every `.meta` file), `Packages/` and `ProjectSettings/`.

A **`.gitignore`** file, in the repository's top folder, lists what Git should leave out.
Don't write your own: GitHub keeps one for Unity, and GitHub Desktop adds it when you
choose **Unity** as the **Git ignore**. Among its lines:

```
/[Ll]ibrary/
/[Tt]emp/
/[Oo]bj/
/[Bb]uild/
/[Bb]uilds/
/[Ll]ogs/
/[Uu]ser[Ss]ettings/
```

`[Ll]` means "`L` or `l`", and the `/` at the start means "in the top folder only".

> **Watch out:** make the repository on the project's own folder, the one with `Assets/`
> in it. On a folder above it, the `/` lines match nothing, and Git tries to take in
> `Library/` and all its gigabytes.

### Idea — .meta files

Every file and folder in `Assets/` has a twin with `.meta` on the end: `Coin.prefab` and
`Coin.prefab.meta`, `Coin.png` and `Coin.png.meta`. Unity makes them, and they're text:

```
fileFormatVersion: 2
guid: 7c2e9f04a1b84d55b3e6f0c8d2a17e93
TextureImporter:
  …
  maxTextureSize: 2048
  spritePixelsToUnits: 100
```

It holds the asset's **import settings** (for a picture, everything in its Inspector) and
its **GUID**, a 32-character ID that never changes. Unity references assets by GUID, not
by name: a scene doesn't remember "the coin in `Prefabs/Coin.prefab`" but `7c2e9f04…`.
That's why you can rename and move assets in Unity freely.

So a `.meta` file must always travel with its asset: commit, move and delete them
together. Lose one, and Unity makes a new `.meta` with a new GUID: everything that pointed
to the old one points at nothing, so fields show the asset as missing, a scene shows a
missing prefab, and the import settings are back to their defaults.

> **Watch out:** move and rename assets **in Unity's Project window**, which moves the
> `.meta` file too. Move `Coin.png` in Finder or File Explorer without its `.meta`, and
> Unity sees a new picture with a new GUID: every reference to the old one is missing.

### Idea — two settings that make Git work

Two settings let Git read your project. Unity 6 sets both: check them on the first day.

| Where | Setting | Must be |
| --- | --- | --- |
| **Edit → Project Settings → Editor**, under **Asset Serialization** | **Mode** | **Force Text** |
| **Edit → Project Settings → Version Control** | **Mode** | **Visible Meta Files** |

- **Force Text** saves scenes, prefabs, materials and your other assets as text, in a
  format called **YAML**, instead of in binary. Git can show a text file's diff line by
  line, and merge two people's changes to different parts of it.
- **Visible Meta Files** keeps the `.meta` files as ordinary files next to their assets,
  where Git can see them.

So a scene or a prefab is text you can read. Change a bar's colour from white to red,
save, and its diff in GitHub Desktop shows exactly that:

```
   m_Material: {fileID: 0}
-  m_Color: {r: 1, g: 1, b: 1, a: 1}
+  m_Color: {r: 0.85, g: 0.2, b: 0.2, a: 1}
   m_RaycastTarget: 1
```

Read the diff before you commit: dozens of changed lines when you only moved one object
mean something else changed too.

### Idea — GitHub Desktop, every day

1. **Make the repository.** **File → Add local repository**, and choose your project's
   folder. GitHub Desktop says it isn't a Git repository yet, and offers to create one
   there: do that, choose **Unity** as the **Git ignore**, and create it.
2. **See what changed.** The **Changes** tab lists every file that's different since the
   last commit. Click one to see its diff. Only ticked files go into the commit.
3. **Commit.** Type a **Summary** line at the bottom left (a description under it is
   optional), and click **Commit to main**.
4. **Look back.** The **History** tab lists the commits. Click one to see what it changed.
5. **Put it online.** **Publish repository**, on the toolbar, sends it all to GitHub
   (leave **Keep this code private** ticked). After that, the same button says **Push
   origin** when GitHub lacks your commits, and **Pull origin** when it has new ones.

### Idea — branches and merges

A branch lets you try something (a drift button, a new kind of card, a second juice
recipe) without risking the game that works: `main` stays as it was.

1. **Current Branch → New Branch**, name it `drift-boost`, and create it. Your next
   commits go on `drift-boost`, and `main` doesn't change.
2. To switch, save and commit first, then pick a branch from **Current Branch**. Git swaps
   the files in the folder, and Unity reloads what changed.
3. When the idea works, switch to `main`, then **Branch → Merge into current branch**,
   choose `drift-boost`, and merge. `main` now has its commits too.
4. If the idea didn't work, switch back to `main` and leave the branch, or delete it.

### Idea — going back

| To undo… | In GitHub Desktop | What happens |
| --- | --- | --- |
| a change you haven't committed | **Changes**: right-click the file → **Discard changes** | the file goes back to how it was at the last commit |
| a whole commit | **History**: right-click the commit → **Revert changes in commit** | a **new** commit that does the opposite; the bad one stays in the history |

A revert never rewrites the history, so it's safe even after you've pushed: your
teammates just pull one more commit.

### Idea — the same on the command line

The exam, other teams and most tutorials use Git's own commands. Each button has one:

| GitHub Desktop | Command line |
| --- | --- |
| make a repository | `git init` |
| the **Changes** tab | `git status` |
| tick a file for the commit | `git add Assets/Scripts/Coin.cs` (or `git add .` for everything) |
| **Commit to main** | `git commit -m "Add the coin pickup"` |
| the **History** tab | `git log` |
| a file's diff | `git diff` |
| **Current Branch → New Branch** | `git switch -c drift-boost` |
| switch to a branch | `git switch main` |
| **Branch → Merge into current branch** | `git merge drift-boost` |
| **Discard changes** | `git restore Assets/Scenes/Race.unity` |
| **Revert changes in commit** | `git revert a1b2c3d` (the commit's ID, from `git log`) |
| **Push origin**, **Pull origin** | `git push`, `git pull` |
| copy a repository from GitHub | `git clone https://github.com/you/your-game.git` |

### Idea — good commit messages

A commit message is for whoever reads the history later, which is usually you.

- **Imperative**, like an instruction: *Add the coin pickup*, not *Added coins* or
  *Adding coins*. It finishes the sentence "If you apply this commit, it will…".
- **One change per commit**, summed up in about 50 characters: then a revert takes out
  exactly one change.
- **Say what changed**, never just "fix", "stuff" or "update".

| Weak | Better |
| --- | --- |
| `fixed stuff` | `Stop the kart sliding after a respawn` |
| `update` | `Raise the lemonade stand's price to 3 coins` |
| `cards, menu, sounds and the bug` | four commits, one for each |

### Idea — conflicts, and why scenes are hard

When two branches change **different** lines, Git merges them by itself. When they change
the **same** lines in different ways, Git stops with a **conflict** and marks the file:

```
<<<<<<< HEAD
    [SerializeField] float topSpeed = 22f;
=======
    [SerializeField] float topSpeed = 18f;
>>>>>>> drift-boost
```

In a script that's easy: keep the right line, delete the marker lines, and commit. In a
**scene or a prefab** it isn't: its YAML is thousands of lines of IDs that point at each
other, and one wrong choice breaks it in ways you only see when you open it. So teams
avoid scene conflicts rather than fix them:

- **One person per scene** at a time: say in the team chat who's working in which scene.
- **Build in prefabs**, so two people can work on two prefabs that sit in the same scene.
- **Commit small, push often, pull before you start**: nobody works on an old copy long.

If a scene conflicts anyway, keep one whole version of the file, and make the other
person's change again by hand.

### Idea — big files, and Unity Version Control

Git keeps every version of every file in every copy. A 200 MB video changed five times is
a gigabyte in every clone, and GitHub refuses any single file over 100 MB.

**Git LFS** (Large File Storage) keeps big files (videos, recordings, 3D models, layered
`.psd` art) on a separate server, and only a small pointer to each in Git. It's worth it
when big binary files change often, as an art team's do. Small sprites and sounds don't
need it.

**Unity Version Control** (once called Plastic SCM) is Unity's own system, built into the
Editor. It does the same jobs as Git, handles big binary files well, and can **lock** a
file so that two people can't change one scene at once. The ideas here apply to both.

### Do it

1. Make a repository on your project's folder with the **Unity** `.gitignore`. Check that
   nothing from `Library/` is in **Changes**, commit (*Create the project*), and publish.
2. Check **Force Text** and **Visible Meta Files**. Then open a prefab, change one
   colour, save, and find the change in its diff. Discard it.
3. With everything committed, move a sprite a prefab uses in Finder or File Explorer,
   without its `.meta`. What happens to the prefab? Discard every change, and look again.
4. Make a branch, `experiment`, commit two small changes on it, and switch back to
   `main`: watch them disappear in Unity. Then merge `experiment` into `main`.
5. Revert one of those two commits from the **History** tab, and read the new commit's
   diff. What does it do?

### Challenge

Make a conflict on purpose: change one line of a script on a new branch, and the same
line another way on `main`, committing each; then merge. Fix it in your code editor and
commit. Then explain in two sentences why a scene conflict is worse, and how to avoid one.

## Chapter 1 — A Project Under Git

**Goal:** a new Unity project that lives in a Git repository, published to your GitHub
account, with the studio's style guide beside it, and the models, sounds and font
imported at the right size, ready to build a track.

### Idea — a project the whole team can trust

Sam's first rule at Lantern Hill Games: *nothing exists until it's committed.* From today
your project is a **Git repository**. Every time a piece of the game works, you
**commit**: a saved step in the project's history, with a line saying what changed. If
tomorrow's change breaks something, you can look at exactly what you changed, and undo it.
C# 1 explained the words; this chapter does it.

A Unity project folder holds more than your work. `Library`, `Temp` and `Logs` are
Unity's own caches: Unity rebuilds them from your files whenever they're missing, and
they're huge. They must stay **out** of Git. A file called `.gitignore` lists what Git
should ignore, and GitHub keeps one made for Unity projects.

| Folder or file | In Git? | Why |
| --- | --- | --- |
| `Assets/` (with every `.meta` file) | **yes** | your work: scripts, scenes, prefabs, models |
| `Packages/manifest.json`, `packages-lock.json` | **yes** | which packages the project uses |
| `ProjectSettings/` | **yes** | the project's settings |
| `Library/`, `Temp/`, `Logs/`, `obj/`, `UserSettings/` | no | Unity rebuilds them |
| `Builds/` | no | anyone can make a build from the project |

The second half of the chapter is about **models**. A 3D model file says how its shape is
built, but not how big it should be in your game, or whether anything can bump into it.
Unity asks you, in the model's **import settings**, and remembers your answers in its
`.meta` file.

### Do it — the repository

1. In the **Unity Hub**, **New project**, choose Unity 6 and the **Universal 3D**
   template, call it `Pocket Karts`, and **Create project**. When Unity opens, close it
   again for now.
2. Open **GitHub Desktop** and sign in with your GitHub account. **File → Add Local
   Repository…**, **Choose…** the `Pocket Karts` folder, and click **Add Repository**.
   GitHub Desktop says the folder isn't a Git repository yet and offers to **create a
   repository** there: click it.
3. In the **Create a New Repository** window, leave the **Name** and **Local Path** as
   they are, set **Git Ignore** to **Unity**, and click **Create Repository**. GitHub
   Desktop makes the repository, with Unity's `.gitignore`, and a first commit.
4. Look at the **Changes** tab. If it lists files, write *Add the empty project* in the
   **Summary** box and click **Commit to main**. Then look at the **History** tab: your
   project's first commit. There's no `Library` folder in it: the `.gitignore` works.
5. Click **Publish repository**, keep **Keep this code private** ticked, and publish. Your
   project now has a copy on GitHub, safe if your computer isn't.
6. Open the project in Unity again. **Edit → Project Settings → Editor**: under **Asset
   Serialization**, **Mode** is **Force Text**. **Project Settings → Version Control**:
   **Mode** is **Visible Meta Files**. Both are Unity's defaults, and Git needs both: scenes
   and prefabs saved as text, so a change can be read; and a `.meta` file beside every
   asset, so Git keeps it.

### Do it — the style guide

7. Your trainer shares `STYLE_GUIDE.md`, Sam's style guide. If you've done Arcane Duel,
   it's the same file: one studio, one guide, and its examples come from that game. Put
   it in the project folder, next to `Assets` (not inside it: it's for people, not for
   Unity). Open it and read it: it's two pages. Most of it is Level 3's naming
   conventions, written down as a team's rules, and a few new ones you'll meet as the
   book goes on:

| Sam's rule | In Pocket Karts |
| --- | --- |
| Interfaces start with `I` and name a capability | `IKartInput` |
| C# events say what happened, in the past tense, without `On` | `LapCompleted` |
| Methods that an event or Unity calls start with `On` | `OnLapCompleted` |
| Fields set in the Inspector are `[SerializeField]` and private: never `public` | `[SerializeField] float topSpeed = 22f;` |
| A number that means something gets a name | `const int MinWheelsOnGround = 2;` |
| One class per file, named after it | `Racer.cs` |
| Subscribe in `OnEnable`, unsubscribe in `OnDisable` | |
| Not allowed: `var`, `GameObject.Find`, `FindObjectOfType`, `public` fields | |

8. In GitHub Desktop, the Changes tab shows `STYLE_GUIDE.md`. Commit it: *Add the studio's
   style guide*.

### Do it — models, sounds and the font

9. Your trainer shares two folders, `Art` and `Audio`. Drag both into Unity's **Project**
   window, into `Assets`. Unity imports every model, picture and sound: give it a minute.
10. **The track pieces.** Open `Art/Track`. It holds the whole track pack: straights,
    curves, ramps, bridges, banners, fences, a windmill. Each model came with an `.mtl`
    file of the same name, which holds its colours. To pick out only the models, type
    `t:Model` in the Project window's search box. Above the results, Unity shows where it
    searched: choose **'Track'**, the folder, rather than all of Assets. Click in the list
    and select them all (**Ctrl+A**, or **Cmd+A** on a Mac). The Inspector now edits all
    of them at once. On its **Model** tab:
    - **Scale Factor** `5`. The pack is drawn on a grid of 1-unit squares; at 5, each
      square is 5 m, a straight piece is 5 m long and 15 m wide, and its road, sunk
      between grass banks, is 7.5 m wide: room for four karts.
    - **Generate Colliders** ticked. Unity gives each piece a **Mesh Collider** made from
      its own shape, so a kart has something to drive on, and banks to bump into.

    Click **Apply** at the bottom of the Inspector, and wait while Unity re-imports them.
11. Three kinds of piece shouldn't have colliders: the boost pad is only a picture on the
    road, the water is only to look at, and the bridges come with simpler collider
    models of their own. Search `t:Model Ground_Boost`, select what it finds, untick
    **Generate Colliders**, **Apply**. Do the same for `t:Model Terrain_Water` and
    `t:Model Track_Bridge`.
12. **The kart.** Select `Art/Kart/kart`. **Scale Factor** `0.45`, **Apply**: the model is
    4 units long, so the kart becomes 1.8 m long, a toy next to the road. Leave **Generate
    Colliders** off: in Chapter 3 the kart gets a simple box of its own.
13. **The scenery.** Open `Art/Nature`, search `t:Model`, select them all, **Scale
    Factor** `2`, **Apply**: an oak becomes 9 m tall. Then search `t:Model Tree`, select
    the trees, tick **Generate Colliders**, **Apply**; do the same for `Rock`, `Log` and
    `Stump`. A kart that leaves the road hits those; it drives through flowers and grass.
14. **The colours.** Select any track piece and look at the Inspector's **Materials**
    tab: **Material Creation Mode** is **Import via MaterialDescription**, and the
    materials are **embedded**. Unity read the colours from the piece's `.mtl` file and
    made URP materials from them: nothing to do. The nature models brought small pictures
    for their colours (`Art/Nature/textures`), which work the same way.
15. **The font.** Select `Art/Fonts/RussoOne-Regular`, then **Assets → Create →
    TextMeshPro → Font Asset → SDF**. Unity asks to import the **TMP Essentials** the
    first time: **Import**, then make the font asset again. `RussoOne-Regular SDF` is the
    game's one font: titles, buttons, the HUD's numbers.
16. Make the folders the game will need, in `Assets`: `Scripts` (with six folders in
    it: `Karts`, `Track`, `Race`, `UI`, `Flow` and `Audio`), `Prefabs`, `Data` and
    `Input`. `Scenes` is already there.

### Test it

- Drag `Art/Track/Track_Standard_Straight_Single` into the scene. In the **Scene** view,
  the grid's squares are 1 m: the piece is five squares long and fifteen wide. Select it
  and open it in the Hierarchy: a child holds a **Mesh Collider**. Delete it again.
- In GitHub Desktop, the Changes tab lists every new model **and a `.meta` file beside
  it**. Click `Track_Standard_Straight_Single.obj.meta`: it's text, and among its lines
  are `globalScale: 5` and `addColliders: 1`, your two answers. One line says `guid:`
  followed by 32 letters and numbers. That **GUID** is how Unity knows the model: a
  scene or a prefab that uses the model stores its GUID, not its name.
- Find the same `.meta` file in Finder or Explorer: it's next to the model, hidden from
  Unity's Project window.

> **Watch out:** move or rename assets **in Unity's Project window**, never in Finder or
> Explorer. Unity moves the `.meta` file with the asset. Move one outside Unity, and Unity
> sees a new file, gives it a new `.meta` with a new GUID, and everything that used the old
> one loses it: a missing model here, a missing script there.

### Commit

*Add the models, sounds and font.* Then **Push origin**, so GitHub has it too.

> **Note:** big binary files (models, pictures, sounds) make a Git repository grow, since
> Git keeps every version of every file. Big teams use **Git LFS** (Large File Storage),
> which keeps them outside the history. This game's art is about 25 MB, which Git handles
> well, so this book doesn't need it.

### Challenge

In the **History** tab, click your three commits one by one, and find which one changed
the most files. Then open `Art/Kart/kart.obj.meta` in a text editor, and find the line
your Scale Factor changed.

## Chapter 2 — A Track from Pieces

**Goal:** **Meadow Loop**, the first track: 64 pieces of road laid end to end into a
468-metre loop, with a chicane, a finish line under its banner, grass all round, trees
and flowers, a sun and a hazy sky.

### Idea — a modular kit

A track pack is a **modular kit**: a few dozen pieces drawn to fit together on a grid,
like toy track. A straight is one square long; a wide curve is a 5 × 5 block of squares;
every road edge meets the next piece's at the same place. You don't model a track, you
**lay** one, piece by piece.

Two things make that quick and exact:

- **Typed values.** A piece's place is its **Position** and **Rotation** in the
  Inspector. Type the numbers, and it's exactly there. A straight piece's **pivot** (the
  point its Position means) is its middle, so the next straight along is 5 m further on.
  A curve's pivot isn't its middle, so this chapter gives you each curve's numbers.
- **Increment snapping.** Hold **Ctrl** (**Cmd** on a Mac) while you drag a piece with
  the Move tool, and it moves in steps, not smoothly. Set the step to 5 and a straight
  slides exactly one piece along.

| Piece | Model in `Art/Track` | Size |
| --- | --- | --- |
| Straight | `Track_Standard_Straight_Single` | 5 m long, 15 m wide |
| Finish line | `Track_Standard_Finish_Line_Single_Checkered` | a straight with the line painted on |
| Banner | `Prop_Track_Banner_Finish_Line_Single_Checkered` | the arch over the finish line |
| Wide curve | `Track_Standard_Curve_Single_5x5` | a quarter turn in a 25 m square |
| Tight curve | `Track_Standard_Curve_Single_4x4` | a quarter turn in a 20 m square |

Meadow Loop goes **clockwise** seen from above: along the top, down the right, back along
the bottom through a chicane (four tight curves: out, round and back), and up the left.

```
       start ──► F (the finish line)
   ┏━━━━━━━━━━━━━┿━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓    the top: z 0
   ┃                                               ┃
   ┃ the left side:                 the right side:┃
   ┃ x −17.5                               x 117.5 ┃
   ┃                                               ┃
   ┗━━━━━━━━━━━━━━━┓               ┏━━━━━━━━━━━━━━━┛    the bottom: z −100
                   ┗━━━━━━━━━━━━━━━┛                    the chicane dips to z −125
```

### Do it — the scene

1. **File → New Scene**, choose **Basic (URP)** (a camera and a light), **Create**, and
   save it as `Assets/Scenes/Meadow Loop`.
2. **GameObject → Create Empty**, call it `Track`, and check its Position is `(0, 0, 0)`.
   Every piece goes inside it.
3. Set up snapping. The Scene view's toolbar (along its top) holds the **Grid and Snap**
   tools: open the increment snapping settings beside the snap button, and set **Move**
   to `5` and **Rotate** to `90`. From now on, Ctrl-drag (Cmd-drag) moves a piece 5 m at
   a time, and Ctrl-rotating turns it a quarter at a time.

### Do it — the top straight

4. Drag `Track_Standard_Straight_Single` from `Art/Track` onto `Track` in the Hierarchy,
   so it's a child. Set its **Position** to `(2.5, 0, 0)` and **Rotation** to `(0, 0, 0)`.
   The road runs along the X axis, the red arrow.
5. **Ctrl+D** (**Cmd+D**) duplicates it. Set the copy's Position X to `7.5` (or Ctrl-drag
   it one step along X). That's two pieces.
6. Add `Track_Standard_Finish_Line_Single_Checkered` at `(12.5, 0, 0)`, and the banner,
   `Prop_Track_Banner_Finish_Line_Single_Checkered`, at the same Position.
7. Then 17 straights, from X `17.5` to `97.5`, 5 m apart. Don't make them one by one:
   make four, select all four in the Hierarchy, duplicate them together, and move the
   four copies 20 m along. Then eight become sixteen, and one more makes 17.

### Do it — the rest of the loop

8. Lay the rest from this table, in order. **First at** is the first piece's Position (X,
   Z; Y is always 0), **Rotation** is its Y rotation, and each next piece of a run is one
   **step** further along.

| Run | Piece | How many | First at | Rotation | Step |
| --- | --- | --- | --- | --- | --- |
| Corner 1 | Wide curve | 1 | (102.5, 0) | 0 | |
| Right side | Straight | 13 | (117.5, −20) | 90 | Z −5 |
| Corner 2 | Wide curve | 1 | (117.5, −85) | 90 | |
| Bottom, before the chicane | Straight | 5 | (97.5, −100) | 180 | X −5 |
| Chicane, out | Tight curve | 1 | (62.5, −110) | 270 | |
| Chicane, round | Tight curve | 1 | (62.5, −115) | 90 | |
| Chicane, round | Tight curve | 1 | (47.5, −125) | 180 | |
| Chicane, back | Tight curve | 1 | (27.5, −100) | 0 | |
| Bottom, after the chicane | Straight | 5 | (22.5, −100) | 180 | X −5 |
| Corner 3 | Wide curve | 1 | (−2.5, −100) | 180 | |
| Left side | Straight | 13 | (−17.5, −80) | 270 | Z +5 |
| Corner 4 | Wide curve | 1 | (−17.5, −15) | 270 | |

9. Look at the loop from above (double-click `Track`, then turn the view to look down):
   the last curve should meet the first straight at X 0, with no gap and no step. If a
   piece looks wrong, compare its Position and Rotation with the table: a curve turned
   the wrong way is the usual one.

### Do it — ground, sun and sky

10. **GameObject → 3D Object → Plane**, call it `Ground`, and make it a child of `Track`.
    Position `(50, −0.02, −62.5)`, Scale `(120, 1, 120)`: a Plane is 10 m across, so
    this one is 1.2 km, and it sits a hair below the road so the two don't flicker where
    they meet. It keeps its **Mesh Collider**, so a kart that leaves the road lands on
    grass.
11. Make a folder `Assets/Materials`, and in it **Create → Material**, `Grass`. Its shader
    is **Universal Render Pipeline/Lit**: set **Base Map**'s colour to `7BC95A` (click
    the colour swatch, then type it in **Hexadecimal**). Drag it onto `Ground`.
12. Select **Directional Light**, rename it `Sun`. Rotation `(48, 325, 0)`, **Intensity**
    `1.25`, **Colour** `FFF4E0` (a warm white). Under **Shadows**, **Shadow Type** is
    **Soft Shadows**.
13. **Window → Rendering → Lighting**, the **Environment** tab. Under **Other Settings**
    tick **Fog**: **Colour** `CFE3F2`, **Mode** **Linear**, **Start** `160`, **End**
    `560`. The far side of the world fades into a pale blue haze, which hides the edge of
    the ground and makes the meadow feel big.
14. **GameObject → Create Empty**, `Scenery`. Drag in trees, rocks, bushes and flowers
    from `Art/Nature` as its children, outside the road: oaks and pines along the
    straights, rocks at the corners, flowers in clumps. A few dozen look good; the course's
    finished track has hundreds. Turn and resize a few, so they don't look stamped.

### Test it

- Set `Main Camera` to Position `(50, 90, −150)` and Rotation `(50, 0, 0)`, and press
  **Play**: the Game view shows the whole loop from above, in the haze.
- In the Scene view, fly round the track at road level (hold the right mouse button and
  use **W A S D**, as in Level 2): every piece meets the next with no gap.

### Commit

*Build Meadow Loop.* Push.

### Challenge

A corner sign warns a driver. Put `Prop_Track_Sign_Upcoming_Curve_90` (in `Art/Track`)
beside the road before each of the four corners, outside the banks, facing the traffic.
Its arrow points left: a **negative X scale** mirrors it, for a right turn. Which of
Meadow Loop's corners turn right?

## C# 2 — Prefabs in Depth

**Goal:** you can build prefabs out of other prefabs, make variants of them, change an
instance and then apply or revert the change, predict which objects a change reaches, and
make instances from code (Associate: Assets — change nested prefabs and prefab variants,
and predict the outcome; use prefabs in a scene).

### Idea — a prefab, again

A **prefab** is an asset that holds a GameObject, with its children and components, ready
to use many times. Every copy of it in a scene is an **instance**, linked to the asset:
change the prefab, and every instance changes. In the Hierarchy, instances have blue names
and a blue cube icon.

Three ideas take prefabs much further, and the exam asks about all three: prefabs inside
prefabs (**nested**), prefabs based on prefabs (**variants**), and the changes an instance
makes to its prefab (**overrides**).

### Idea — Prefab Mode

You edit a prefab itself in **Prefab Mode**. Open it by double-clicking it in the Project
window, by clicking the arrow (**>**) to the right of an instance in the Hierarchy, or with
**Open** in an instance's Inspector.

- The **Hierarchy** shows only the prefab, under a header with a back arrow (**<**).
- The **breadcrumbs** at the top of the Scene view show where you are: the scene, then
  **Duelist Panel**, then **Health Bar**, say. Click one to go back up.
- **Auto Save**, at the top right of the Scene view, saves every change at once. Turn it
  off, and a **Save** button appears instead; Unity asks you to save when you leave.

Opened from an instance, the scene stays visible around the prefab, greyed out, so you
can see it in its place. Leave with the back arrow or a breadcrumb.

### Idea — nested prefabs

A prefab can hold instances of other prefabs, and each keeps its own link:

| Outer prefab | Holds (nested prefabs) |
| --- | --- |
| a Kart | four Wheel instances |
| a Juice Stand | a Price Tag and a Counter |
| a Duelist Panel | a Health Bar and a Mana Bar |

To nest one, open the outer prefab in Prefab Mode and drag the inner prefab into its
Hierarchy. Change the Wheel prefab, and the wheels on every kart change, in every scene:
you made the change once, in one place.

### Idea — variants

A **variant** is a prefab based on another one, its **base**. It holds everything the base
holds, plus its own changes. A Health Bar is a Bar with a red fill and a heart icon; a Fast
Kart is a Kart with a bigger engine and a stripe.

To make one: right-click the base in the Project window → **Create → Prefab Variant**,
then open the variant and change what differs. Its icon is a prefab cube with an arrow.

A variant stores **only its differences**. Its file names its base by GUID (the ID in the
base's `.meta` file, C# 1) and lists the changes:

```
PrefabInstance:
  m_Modification:
    m_Modifications:
    - target: {fileID: 5389347945180400670, guid: 3b8e…, type: 3}
      propertyPath: m_Color.r
      value: 0.76
    …
  m_SourcePrefab: {fileID: 100100000, guid: 3b8e…, type: 3}
```

So a change to the base reaches the variant, except where the variant has its own value.
A **duplicate** (**Ctrl + D**, **Cmd + D** on a Mac) is different: a separate prefab, with
no link to the original at all.

### Idea — overrides

Change an instance, and the change is an **override**: the instance's own value, kept
instead of the prefab's.

| Override | How Unity shows it |
| --- | --- |
| a changed property | its label turns **bold**, with a blue line in the Inspector's margin |
| an added component | a **+** on the component's icon |
| an added child GameObject | a **+** on its icon in the Hierarchy |
| a removed component or child | listed in the **Overrides** drop-down |

The root's name, position and rotation belong to each instance: they're left out of the
**Overrides** drop-down, and out of **Apply All**.

The **Overrides** drop-down, at the top of the instance root's Inspector, lists every
override. Click one to compare it with the prefab, side by side. Then:

- **Apply** sends the change into the prefab: every instance gets it. **Apply All**
  applies them all.
- **Revert** throws it away: the instance takes the prefab's value again. **Revert All**
  reverts them all.

For one property, right-click it: the menu offers **Revert**, and an **Apply** for each
prefab the change could go to.

### Idea — how a change travels

This is the exam's favourite prefab question. Here is the setup:

1. **Bar**, a prefab: a frame, a **Fill** image (white), an icon and a value text (**Font
   Size** 28).
2. **Health Bar** and **Shield Bar**, two variants of Bar: Health Bar overrides the fill
   to red, Shield Bar to blue.
3. **Duelist Panel**, a prefab with a portrait and a Health Bar instance nested in it.
4. A scene with two Duelist Panel instances: **Left Panel** and **Right Panel**.

Now make four changes, one at a time, and predict which bars change:

- **A.** In Bar's Prefab Mode, set the text's **Font Size** to 32.
- **B.** In Health Bar's Prefab Mode, set the fill to dark red.
- **C.** In Duelist Panel's Prefab Mode, select its Health Bar's icon and switch it off:
  an override, kept in the Duelist Panel prefab.
- **D.** In the scene, select Right Panel's Health Bar and set its fill to purple: an
  override, kept in the scene.

| Change made in | Bar | Shield Bar | Health Bar | Duelist Panel's bar | Left Panel's bar | Right Panel's bar |
| --- | --- | --- | --- | --- | --- | --- |
| **A**, Bar | changes | changes | changes | changes | changes | changes |
| **B**, Health Bar | — | — | changes | changes | changes | changes |
| **C**, Duelist Panel | — | — | — | changes | changes | changes |
| **D**, the scene | — | — | — | — | — | changes |

The rule: a change reaches **everything built on top of the place you made it**, and
nothing underneath. Bar is at the bottom of the pile; the scene is at the top.

And one more rule: **an override wins**. Make change D first, then B: Right Panel's bar
stays purple, because its fill colour is its own now. It still takes A and C, which change
other properties. In the same way, if Health Bar had overridden the font size, change A
would reach Shield Bar but no Health Bar anywhere.

Where should D go, if every panel's bar should be purple? Right-click the fill's
**Color** in the scene. The menu offers an **Apply** entry for each prefab the bar comes
from, each named: the Duelist Panel (every Duelist Panel would get it), the Health Bar
variant (every Health Bar, in the panels and anywhere else), and so on down to Bar.
Apply it to the prefab whose every use should change.

> **Tip:** before changing a prefab, ask "what's built on this?": every variant of it,
> every prefab it's nested in, and all their instances will change too.

### Idea — unpacking

Right-click an instance in the Hierarchy → **Prefab**:

| Choice | Does |
| --- | --- |
| **Unpack** | the instance becomes plain GameObjects, but prefabs nested inside it stay instances |
| **Unpack Completely** | everything becomes plain GameObjects, nested prefabs too |

An unpacked object has no link: fixes to the prefab never reach it again. That's
occasionally what you want, for a one-off made from a prefab's parts. Almost always, a
variant or an override does the job and keeps the link, so reach for those first.

### Idea — instances from code

Type the prefab field as the **component** you'll use, not as a `GameObject`. Then
`Instantiate` returns that component on the new copy, with no `GetComponent` needed, and
the Inspector only accepts a prefab that has one:

```csharp
using UnityEngine;

public class Coin : MonoBehaviour
{
    [SerializeField] int value = 1;

    public int Value { get { return value; } }

    public void SetValue(int newValue)
    {
        value = newValue;
    }
}
```

```csharp
using UnityEngine;

// Makes a row of coins from the Coin prefab, each worth more than the last.
public class CoinRow : MonoBehaviour
{
    const int CoinCount = 3;
    const float Gap = 1.5f;

    [SerializeField] Coin coinPrefab;
    [SerializeField] Transform coinParent;

    void Start()
    {
        for (int i = 0; i < CoinCount; i++)
        {
            Coin coin = Instantiate(coinPrefab, coinParent);
            coin.transform.localPosition = new Vector3(i * Gap, 0f, 0f);
            coin.SetValue(i + 1);
            Debug.Log($"{coin.name} is worth {coin.Value}");
        }
    }
}
```

With a prefab called `Coin` in **Coin Prefab**:

```
Coin(Clone) is worth 1
Coin(Clone) is worth 2
Coin(Clone) is worth 3
```

`Instantiate(prefab, parent)` puts the copy under `parent`: in a UI list with a layout
group, that's all a new row needs. `Instantiate(prefab, position, rotation, parent)` also
places it.

> **Watch out:** change the copy that `Instantiate` returns, never the prefab field
> itself. `coinPrefab.SetValue(5)` changes the prefab **asset**: in the Editor, the change
> stays after Play stops, and every coin made from it afterwards starts at 5.

### Do it

1. Make a Bar prefab and two variants, with different fill colours. Change the base's
   frame colour, and check that both variants follow.
2. Nest a Health Bar in a Panel prefab, and put two Panels in a scene. Make changes A to
   D from this chapter, predicting each result before you look.
3. Revert D, then make it again, and change Health Bar's fill colour once more. Which bars
   change? Then revert D with the **Overrides** drop-down, and check again.
4. Add a component to one instance, and find it in the **Overrides** drop-down. Apply
   it, and check the prefab.
5. Make `Coin` and `CoinRow`, and play. Then change `CoinRow` to place each coin with
   `Instantiate(prefab, position, rotation, parent)`, in a column instead of a row.

### Challenge

Build a Kart prefab with four nested Wheel prefabs, then a Fast Kart variant with bigger
rear wheels. Before each step, write down which karts will change: change the Wheel
prefab's colour; change the Kart's body colour; override one wheel's size on one Fast
Kart in the scene, then apply it as an override in the Fast Kart variant.

## Chapter 3 — The Kart

**Goal:** a **Kart** prefab that faces the right way, with four **Wheel** prefabs that
can steer and roll, a body that can fall and land, and three **variants**: Balanced,
Speedy and Heavy, each its own colour and size.

### Idea — which way is forward, and where's the pivot?

A model comes with two habits you have to check before you build on it.

**Which way it faces.** Unity's rule is simple: an object's **forward** is its blue Z
arrow. Every script in this game that drives a kart pushes it along `transform.forward`,
and the chase camera sits behind it, against `transform.forward`. But a model faces
whichever way its artist drew it. This kart was drawn facing along X, and Unity's OBJ
importer mirrors X, so it comes in facing **+X**: the red arrow. Build on it as it is,
and your kart drives sideways. The fix is a parent: an empty `Kart` that faces +Z, with
the model inside it turned a quarter, so its nose points along the parent's blue arrow.

**Where its pivot is.** The model is made of 41 parts: the seat, the steering wheel, the
bumpers, four wheels. Every part's pivot is the **model's** origin, the middle of the
kart, not its own middle. Turn a wheel, and it swings round the kart like a door. A wheel
that steers and rolls needs its pivot at its **hub**. So each wheel becomes a small
prefab of its own, built so its pivot is the hub:

```
Wheel ──────── the pivot is the hub; turns left and right to steer
 └─ Tyre ───── spins round its X axis to roll
     └─ Mesh ─ the wheel's shape, moved so its hub sits on the pivot
```

Two of the kart's wheels are on the left, two on the right, and a wheel's hub cap should
face out. So `Wheel` has its cap facing right (+X), and **Wheel Left**, a variant, has
its mesh turned round.

### Do it — look at the model

1. Open `Meadow Loop`. Drag `Art/Kart/kart` into an empty spot of the scene and set its
   Position to `(0, 0, 0)`. Set the Scene view's handle to **Local** (the toolbar button
   beside **Pivot**/**Center**), select the kart, and look: the red X arrow points out of
   its nose, past the steering wheel. The blue Z arrow, "forward", points out of its
   side.
2. Open the kart in the Hierarchy and click its children one by one: they're named
   `object1`, `object2`… as the artist exported them. The four wheels are `object13`
   (front left), `object19` (front right), `object41` (rear left) and `object14` (rear
   right). Select `object19` with the **Rotate** tool, with the handle on **Pivot**: the
   handle is at the kart's middle. Turn it, and the wheel swings round the kart. Undo
   (**Ctrl+Z**).

### Do it — the Wheel prefab

3. Drag a second copy of `Art/Kart/kart` into the scene at `(0, 0, 0)`, rotation `(0, 0,
   0)`. Right-click it in the Hierarchy → **Prefab → Unpack Completely**: its parts are
   plain GameObjects now, free to take apart. (C# 2 said unpacking is for a
   one-off made from a prefab's parts: this is one.)
4. **GameObject → Create Empty**, call it `Wheel`, Position `(0, 0, 0)`. Inside it, an
   empty child called `Tyre`, also at `(0, 0, 0)`.
5. Drag the unpacked copy's `object19` onto `Tyre` and rename it `Mesh`. Set its
   **Position** to `(-0.45, 0, -0.45)` and its **Rotation** to `(0, -90, 0)`: turned the
   way the kart will be, and moved so the hub is exactly on `Tyre`'s pivot. Select `Tyre`
   and turn it round its X axis: the wheel spins in place. Set it back to `(0, 0, 0)`.
6. Delete what's left of the unpacked copy.
7. Drag `Wheel` from the Hierarchy into `Assets/Prefabs`: it's a prefab. Delete it from
   the scene.
8. Right-click `Prefabs/Wheel` → **Create → Prefab Variant**, and call it `Wheel Left`.
   Open it, select `Mesh`, and set Position `(0.45, 0, 0.45)` and Rotation `(0, 90, 0)`:
   turned half round, with its hub still on the pivot, so its cap faces left (−X).

### Do it — the Kart prefab

9. **GameObject → Create Empty**, `Kart`, at `(0, 0, 0)`. Drag the first copy of the kart
   model (the one you didn't unpack) onto it, rename it `Body`, and set its Position to
   `(0, 0, 0)` and Rotation to `(0, -90, 0)`. Select `Kart`: its blue arrow now comes
   out of the nose.
10. Inside `Body`, switch off `object13`, `object14`, `object19` and `object41` (untick
    the box beside each name in the Inspector): the model's own wheels, with their pivots
    in the wrong place. `Body` is still a prefab instance of the model; those four are
    overrides.
11. Drag the wheel prefabs onto `Kart`, four times, and set them up:

| Name | Prefab | Position |
| --- | --- | --- |
| `Wheel FL` | `Wheel Left` | (−0.45, 0, 0.45) |
| `Wheel FR` | `Wheel` | (0.45, 0, 0.45) |
| `Wheel RL` | `Wheel Left` | (−0.45, 0, −0.45) |
| `Wheel RR` | `Wheel` | (0.45, 0, −0.45) |

12. Give `Kart` a body for physics. **Add Component → Box Collider**: **Center** `(0,
    0.15, 0.05)`, **Size** `(1.1, 0.75, 1.75)`, a box round the whole kart, from the
    bottom of the wheels to the top of the seat. **Add Component → Rigidbody**: **Mass**
    `150`, **Interpolate** **Interpolate** (the kart moves smoothly between physics steps,
    so the camera won't judder), **Collision Detection** **Continuous Dynamic** (a fast
    kart never passes through a wall between two steps).
13. Drag `Kart` into `Assets/Prefabs`, and delete it from the scene.

### Do it — three karts

14. In `Assets/Materials`, make three materials: `Balanced Paint` (`2F7DE1`), `Speedy
    Paint` (`E8413B`) and `Heavy Paint` (`3DAA5C`).
15. Right-click `Prefabs/Kart` → **Create → Prefab Variant**, three times: `Balanced
    Kart`, `Speedy Kart` and `Heavy Kart`.
16. Open `Balanced Kart`. In `Body`, the two blue parts are `object22` and `object33`:
    select each, and drag `Balanced Paint` onto its Mesh Renderer's **Materials**,
    **Element 0**. Do the same in `Speedy Kart` with `Speedy Paint`, and set its root's
    **Scale** to `(0.95, 0.95, 0.95)`; and in `Heavy Kart` with `Heavy Paint`, Scale
    `(1.1, 1.1, 1.1)`.

### Test it

- Drag a `Balanced Kart` into the scene at Position `(5, 1, 0)`, Rotation `(0, 90, 0)`:
  on the top straight, behind the finish line, facing along the road. Press **Play**: it
  drops onto the road and settles on its wheels. Its blue arrow points along the road.
- Put a `Speedy Kart` and a `Heavy Kart` beside it, at `(5, 1, 2)` and `(5, 1, -2)`.
  Then, **before** each change, write down which of the three karts will change, and in
  which way. Then look. (C# 2: a change reaches everything built on top of
  the place you made it.)
  - **A.** In `Wheel`'s Prefab Mode, set `Tyre`'s Scale to `(1.3, 1.3, 1.3)`.
  - **B.** In `Heavy Kart`'s Prefab Mode, set the root's Scale to `(1.3, 1.3, 1.3)`.
  - **C.** In the scene, select the `Speedy Kart` and give its `object22` the `Heavy
    Paint`.

  A changes every wheel on every kart: all three variants are built on `Kart`, which is
  built on `Wheel` and `Wheel Left`. B changes only the Heavy Kart. C changes only that
  one Speedy Kart, in this scene: the `Speedy Kart` prefab doesn't know. Now undo all
  three: Scale `(1, 1, 1)` on `Tyre`, `(1.1, 1.1, 1.1)` on `Heavy Kart`, and for C,
  right-click the material → **Revert**. Leave the three karts in the scene.

### Commit

*Add the kart prefabs.* Push.

### Challenge

The kart's box is a guess. Select a kart in the scene and look at its Box Collider's green
outline from the side and from above: does it hold the whole kart, wheels and bumpers?
Then make a fourth variant, a yellow `Mini Kart` at `0.8`, put it on the road, and check
it still lands on its wheels. Delete it when you're done.

# Part 2 — Driving

## C# 3 — ScriptableObjects

**Goal:** you can write your own ScriptableObject classes, make and fill in their assets,
share one asset between many objects, keep play-time changes out of them, and choose
between a ScriptableObject, a prefab, a plain class and a file for a piece of data
(Associate: Programming — choose GameObject properties, scripts and components for a
task).

### Idea — data as an asset

Level 3's *Kinds of Classes* taught you to recognise a ScriptableObject: a class built on
`ScriptableObject`, whose objects are **assets** in the Project, like a material or a
sound. Now you write your own.

A ScriptableObject holds **data that many things share**: the stats of one kind of kart,
the rules of a card, the price of an upgrade. In an asset, instead of in fields on every
object, it has **one place to change it** (ten karts read one asset: change its top speed
once, and all ten change), **one copy in memory**, and **one Inspector** where a designer
can tune it without opening a scene or a script.

### Idea — writing one

```csharp
using UnityEngine;

// What one kind of kart can do. Every kart of this kind reads the same asset.
[CreateAssetMenu(fileName = "New Kart Stats", menuName = "Karts/Kart Stats")]
public class KartStats : ScriptableObject
{
    [SerializeField] string displayName = "Kart";
    [SerializeField] float topSpeed = 20f;
    [SerializeField] float acceleration = 8f;
    [SerializeField, Range(0f, 1f)] float grip = 0.8f;

    public string DisplayName { get { return displayName; } }
    public float TopSpeed { get { return topSpeed; } }
    public float Acceleration { get { return acceleration; } }
    public float Grip { get { return grip; } }
}
```

- `: ScriptableObject` instead of `: MonoBehaviour`, and the file is named after the
  class, `KartStats.cs`, as a MonoBehaviour's is.
- `[CreateAssetMenu]` adds it to the **Create** menu: `menuName` is where it appears, and
  `fileName` is the name a new asset starts with.
- The fields are `[SerializeField]`, so the Inspector edits them; the properties only have
  a `get`, so any script can read the stats, and none can change them by accident.

### Idea — making assets, and using them

**Assets → Create → Karts → Kart Stats** (or **Create** in the Project window's
right-click menu) makes a `New Kart Stats` asset. Rename it `Speedy Stats`, fill it in in
the Inspector, and make a `Heavy Stats` beside it.

A MonoBehaviour uses one through a `[SerializeField]` field: drag an asset into it.

```csharp
using UnityEngine;

public class Kart : MonoBehaviour
{
    [SerializeField] KartStats stats;

    float speed;    // this kart's own speed, right now: it belongs here, not in the asset

    void Update()
    {
        speed = Mathf.MoveTowards(speed, stats.TopSpeed, stats.Acceleration * Time.deltaTime);
        transform.Translate(Vector3.forward * speed * Time.deltaTime);
    }
}
```

Give five karts `Speedy Stats` and three `Heavy Stats`: there are still only two sets of
numbers. Raise **Top Speed** on `Speedy Stats` while playing, and all five speed up. When
you stop, the asset keeps the new value: quick for tuning, and also the trap below.

### Idea — methods and inheritance

A ScriptableObject can have methods and take part in inheritance (C# 6). A
tycoon's upgrades all differ, but each has a name and a cost, and does something to a stand:

```csharp
using UnityEngine;

public class JuiceStand : MonoBehaviour
{
    [SerializeField] float pricePerCup = 2f;

    public void MultiplyPrice(float factor)
    {
        pricePerCup *= factor;
    }
}
```

```csharp
using UnityEngine;

// What every upgrade has. It's abstract: each kind says what it does.
public abstract class Upgrade : ScriptableObject
{
    [SerializeField] string id;         // never changes: a save file stores it
    [SerializeField] string displayName;
    [SerializeField] int cost = 50;

    public string Id { get { return id; } }
    public string DisplayName { get { return displayName; } }
    public int Cost { get { return cost; } }

    public abstract void ApplyTo(JuiceStand stand);
}
```

```csharp
using UnityEngine;

[CreateAssetMenu(fileName = "New Price Upgrade", menuName = "Juice/Price Upgrade")]
public class PriceUpgrade : Upgrade
{
    [SerializeField] float factor = 1.5f;

    public override void ApplyTo(JuiceStand stand)
    {
        stand.MultiplyPrice(factor);
    }
}
```

Only kinds you can make get `[CreateAssetMenu]`: there's no abstract `Upgrade` asset. A
field `Upgrade[] upgrades` accepts every kind, and `upgrade.ApplyTo(stand)` runs each one's
own version. And what changes is the **stand**, a scene object: the asset never does.

### Idea — the Play-mode trap

Change a scene object while playing, and it goes back when you stop. Change an asset, and
the change **stays after Play stops**. Here's the mistake, on purpose: sales in an asset.

```csharp
using UnityEngine;

// Wrong on purpose: cupsSold changes while playing, so it doesn't belong in an asset.
[CreateAssetMenu(fileName = "New Stand Data", menuName = "Juice/Stand Data")]
public class StandData : ScriptableObject
{
    [SerializeField] int cupsSold;

    public int CupsSold { get { return cupsSold; } }

    public void SellCup()
    {
        cupsSold++;
    }
}
```

```csharp
[SerializeField] StandData data;

void Start()
{
    data.SellCup();
    data.SellCup();
    Debug.Log($"Cups sold: {data.CupsSold}");
}
```

```
Cups sold: 2
```

That's the first Play. Stop, and press Play again:

```
Cups sold: 4
```

Select the asset while stopped: **Cups Sold** says 4. Edit and save anything on it, and
the 4 goes into its file, a change in Git you never meant to make. A build is worse: it
starts from whatever the asset held when you built it, and forgets every sale when it
quits. The game behaves one way in the Editor and another in the build.

The rule: **an asset holds data that doesn't change while playing.** Whatever changes
belongs on the object it describes: the cups sold on the `JuiceStand`, a kart's speed on
the `Kart`. When a value needs a starting point from the asset, copy it in `Awake`
(`stock = data.StartingStock;`) and change the copy.

### Idea — which one, for which data?

| Use a… | When the data… | For example |
| --- | --- | --- |
| **ScriptableObject** | is shared by many things, set by a designer, and doesn't change while playing | kart stats, card rules, an upgrade's price |
| **prefab** | is a thing in the scene: GameObjects, components, looks | the kart itself, a juice stand, a card's view |
| **plain C# class** | belongs to one object, or is made in code while playing | a lap time, a race result, one row of a high-score table |
| **JSON file** (or PlayerPrefs) | changes while playing and must still be there after quitting | the money, the unlocked upgrades, the best times (C# 14) |

Three questions decide it. Does it change while playing? Then not a ScriptableObject.
Must it outlive quitting? Then a file. Does it need a place in the scene? Then a prefab.

### Idea — a library of everything

A game often needs **all** of its items in one place: for a shop, or to turn the ids in a
save file back into assets. Keep them in one more asset, a library:

```csharp
using System.Collections.Generic;
using UnityEngine;

// Every upgrade in the game. A save file keeps upgrade ids; the library turns
// an id back into its upgrade.
[CreateAssetMenu(fileName = "Upgrade Library", menuName = "Juice/Upgrade Library")]
public class UpgradeLibrary : ScriptableObject
{
    [SerializeField] Upgrade[] upgrades;

    Dictionary<string, Upgrade> upgradesById;   // built the first time it's needed

    public IReadOnlyList<Upgrade> Upgrades { get { return upgrades; } }

    public bool TryGetUpgrade(string id, out Upgrade upgrade)
    {
        if (upgradesById == null)
        {
            upgradesById = new Dictionary<string, Upgrade>();
            foreach (Upgrade each in upgrades)
            {
                upgradesById.Add(each.Id, each);
            }
        }
        return upgradesById.TryGetValue(id, out upgrade);
    }

    // A change in the Inspector rebuilds the lookup the next time it's used.
    void OnValidate()
    {
        upgradesById = null;
    }
}
```

A `Dictionary` finds a value by its key at once, where a loop would check every upgrade in
turn; `TryGetValue` returns `false` for an id it doesn't know, instead of failing; and
`IReadOnlyList` lets a shop read the list but not change it: C# 7 has more.

### Do it

1. Make `KartStats`, `Kart`, two assets, and five karts (cubes will do) sharing them.
   Change **Top Speed** while playing, then stop: did it stay? Try a kart's **Transform**.
2. Make `JuiceStand`, `Upgrade` and `PriceUpgrade`, and two price upgrades with different
   factors. Look for **Upgrade** in the **Create** menu: why isn't it there?
3. Make `StandData` and the test above, and press Play three times. Then fix it: move
   `cupsSold` and `SellCup` to `JuiceStand`, and play three times again.
4. For five pieces of data in your own game, choose a ScriptableObject, a prefab, a plain
   class or a file, and give the reason in one line each.

### Challenge

Add a `SpeedUpgrade` (a stand makes cups faster) without changing `Upgrade`. Then write a
`Shop` that logs every upgrade in an `UpgradeLibrary` with its cost, and applies one chosen
by id, with a `Debug.LogWarning` for an id the library doesn't know.

## Chapter 4 — Kart Stats

**Goal:** a `KartStats` ScriptableObject and three assets, **Balanced**, **Speedy** and
**Heavy**, each kart variant pointing at its own; and the first lines of the kart's
`KartController`, which takes the kart's weight from its asset.

### Idea — numbers that belong to a kind of kart

The three karts differ only in numbers: how fast, how quickly they get there, how hard
they turn, how heavy. Those numbers belong to a **kind** of kart, not to one kart in one
scene: every Heavy Kart in every scene, yours or a rival's, has the same top speed. So
they live in a **ScriptableObject** asset, as C# 3 showed: one
`Heavy` asset, and every Heavy Kart points at it.

| Number | In the asset | Why |
| --- | --- | --- |
| top speed, acceleration, turn rate, grip, mass | **yes** | the same for every kart of the kind, and never change while racing |
| this kart's speed now, its lap, its boost | no | they change every frame, and each kart has its own: they live on the kart's components |

Each **variant** of the Kart prefab gets its own asset. The base `Kart` leaves the field
empty: it's never used on its own, only through its three variants.

### Do it — the stats

1. In `Scripts/Karts`, make `KartStats.cs`:

```csharp
using UnityEngine;

// One kart's numbers, kept in an asset: Balanced, Speedy and Heavy each have
// one, and each kart variant points at its own. A KartStats asset is read-only
// data. The kart's speed, boost and laps live on its components, never in here.
[CreateAssetMenu(fileName = "Kart Stats", menuName = "Pocket Karts/Kart Stats")]
public class KartStats : ScriptableObject
{
    [SerializeField] string displayName = "Balanced";

    [Header("Driving")]
    [SerializeField] float topSpeed = 22f;          // metres a second
    [SerializeField] float acceleration = 14f;      // metres a second, every second
    [SerializeField] float turnRate = 110f;         // degrees a second, at full steer
    [SerializeField] float grip = 8f;               // how fast sliding sideways is stopped
    [SerializeField] float mass = 150f;             // kilograms

    public string DisplayName { get { return displayName; } }
    public float TopSpeed { get { return topSpeed; } }
    public float Acceleration { get { return acceleration; } }
    public float TurnRate { get { return turnRate; } }
    public float Grip { get { return grip; } }
    public float Mass { get { return mass; } }
}
```

`[Header("Driving")]` puts a bold heading over the fields that follow in the Inspector:
more groups join it later. Each number's comment gives its **unit**: 22 metres a second
is 79 km/h, a toy's top speed at a toy's scale.

2. Make a folder `Data`, and in it `Karts`. Right-click in `Karts` → **Create → Pocket
   Karts → Kart Stats**, three times, and fill them in:

| Asset | Display Name | Top Speed | Acceleration | Turn Rate | Grip | Mass |
| --- | --- | --- | --- | --- | --- | --- |
| `Balanced` | Balanced | 22 | 14 | 110 | 8 | 150 |
| `Speedy` | Speedy | 25 | 12 | 100 | 6 | 130 |
| `Heavy` | Heavy | 20 | 11 | 95 | 9 | 220 |

### Do it — the kart reads them

3. In `Scripts/Karts`, make `KartController.cs`. It will drive the kart; for now it only
   takes the kart's weight from its stats:

```csharp
using UnityEngine;

// How a kart drives. For now it takes the kart's weight from its KartStats;
// the driving comes next.
[RequireComponent(typeof(Rigidbody))]
public class KartController : MonoBehaviour
{
    [SerializeField] KartStats stats;

    Rigidbody body;

    public KartStats Stats { get { return stats; } }

    void Awake()
    {
        body = GetComponent<Rigidbody>();
        body.mass = stats.Mass;
    }
}
```

4. Open `Prefabs/Kart` and add **KartController** to its root. Leave **Stats** empty.
5. Open `Balanced Kart` and drag `Data/Karts/Balanced` into its KartController's
   **Stats**: the label turns bold, an override of the base. Do the same for `Speedy
   Kart` (`Speedy`) and `Heavy Kart` (`Heavy`).

### Test it

- Press **Play**, and select each of the three karts in the Hierarchy: their Rigidbodies'
  **Mass** reads 150, 130 and 220. All three prefabs say 150; each kart's
  `KartController` set its own in `Awake`, from its asset.
- C# 3's trap, for real. Still playing, select `Data/Karts/Heavy`
  and set **Mass** to `300`. Stop. The asset still says 300: an asset isn't part of the
  scene, so stopping doesn't put it back. Set it back to `220`.

### Commit

*Add the kart stats.* Push.

### Challenge

The properties have only a `get`. In `Awake`, try `stats.TopSpeed = 30f;` and read the
Console. What does it say, and why is that what Sam wants? Then delete the line.

## C# 4 — Events and Delegates

**Goal:** you can let a script announce what happened without knowing who listens,
subscribe and unsubscribe safely, write a short lambda, and choose between a C# event and
a UnityEvent (Associate: UI — respond to user input with the UnityEvent system;
Associate: Programming — determine code for a specified interaction or logic).

### Idea — the problem: a script that knows everyone

When the player is hurt, the health bar shrinks, a sound plays, and at 0 the game over
screen shows. The first way most people write it:

```csharp
public void TakeDamage(int amount)
{
    health -= amount;
    healthBar.Show(health);                 // it must know the health bar,
    hurtSound.Play();                       // the sound,
    if (health <= 0)
    {
        gameOverScreen.SetActive(true);     // and the game over screen
    }
    // … and one more line for every new thing that cares
}
```

Now it can't work without the other three: in a test scene with no health bar, it stops
at a `NullReferenceException`, and a camera shake on a hit means editing it again. Turn
it round: the health script **announces** "my health changed", and whatever cares
**listens**. It never needs to know who.

### Idea — a delegate: a variable that holds a method

To announce, C# keeps a list of methods to call. A **delegate** is a variable whose value
is a method. (You've passed one before: `AddListener(OnVolumeChanged)`, no brackets.)

```csharp
[SerializeField] int score = 42;

void Start()
{
    Action<int> show = ShowScore;   // the method itself: no brackets, so not called yet
    show(score);                    // called now, through the variable
}

void ShowScore(int value)
{
    Debug.Log($"Score: {value}");
}
```

```
Score: 42
```

| Type (from `using System;`) | Holds a method like |
| --- | --- |
| `Action` | `void Explode()`: no parameters |
| `Action<int>` | `void ShowScore(int value)`: one `int` |

### Idea — an event: "this happened", for whoever cares

An **event** is a delegate that other scripts can only add themselves to:

```csharp
using System;
using UnityEngine;

public class PlayerHealth : MonoBehaviour
{
    [SerializeField] int health = 5;

    public event Action<int> HealthChanged;     // with the new health
    public event Action Died;

    public void TakeDamage(int amount)
    {
        health = Mathf.Max(health - amount, 0);
        HealthChanged?.Invoke(health);
        if (health == 0)
        {
            Died?.Invoke();
        }
    }
}
```

- `event`, the kind of method it calls (`Action<int>`), and a name for what happened.
- `HealthChanged?.Invoke(health)` **raises** it: every method on its list is called,
  with `health`, in the order they were added.
- With no listeners the event is `null`: `?.` skips the call, where a plain `.Invoke`
  would stop at a `NullReferenceException`.

### Idea — subscribing in OnEnable, unsubscribing in OnDisable

A listener **subscribes** with `+=`, adding one of its methods to the list, and
**unsubscribes** with `-=`, taking it off:

```csharp
using TMPro;
using UnityEngine;

public class HealthText : MonoBehaviour
{
    [SerializeField] PlayerHealth player;
    [SerializeField] TMP_Text label;

    void OnEnable()
    {
        player.HealthChanged += OnHealthChanged;
    }

    void OnDisable()
    {
        player.HealthChanged -= OnHealthChanged;
    }

    void OnHealthChanged(int health)
    {
        label.text = $"Health: {health}";
    }
}
```

A sound script listens to `Died` in the same way, and so does the game over panel.
`PlayerHealth` knows none of them, and works alone in an empty test scene.

Always subscribe in `OnEnable` and unsubscribe in `OnDisable`, as a pair. A listener
that's switched off stops listening, and starts again when switched back on; and Unity
calls `OnDisable` before destroying an object, so a destroyed listener is taken off.
Forget the `-=`, destroy the health text while the player lives, and the event still
holds the dead script's method. The next hit calls it: a dead script runs, on a label
that's gone. Setting the label's `text` happens to fail **quietly**: nothing on the
screen, nothing in the Console. Touch anything that reaches the label's GameObject, such
as `label.gameObject.SetActive(true)`, and the Console says:

```
MissingReferenceException: The object of type 'TMPro.TextMeshProUGUI' has been destroyed but you are still trying to access it.
Your script should either check if it is null or you should not destroy the object.
```

A mistake that sometimes says nothing at all is the worst kind to find. Unsubscribe in
`OnDisable`, every time.

### Idea — lambdas: a method without a name

Sometimes the method you'd pass is one line long. A **lambda** writes it in place:
`(parameters) => what it does`.

| Lambda | Does the same as a method like |
| --- | --- |
| `() => Buy(fruit)` | `void BuyIt() { Buy(fruit); }` |
| `health => Debug.Log(health)` | `void Log(int health) { Debug.Log(health); }` |

A button's `onClick` passes no value; a lambda gives each button its own. A fruit shop:

```csharp
[SerializeField] Button buttonPrefab;
[SerializeField] Transform buttonList;
[SerializeField] string[] fruits = { "Lemon", "Orange", "Melon" };

void Start()
{
    foreach (string fruit in fruits)
    {
        Button button = Instantiate(buttonPrefab, buttonList);
        button.GetComponentInChildren<TMP_Text>().text = fruit;
        button.onClick.AddListener(() => Buy(fruit));
    }
}

void Buy(string fruit)
{
    Debug.Log($"Bought: {fruit}");
}
```

Click the Orange button, and the Console says `Bought: Orange`. Each lambda keeps the
`fruit` of its own time round the loop: `foreach` makes a new `fruit` each time.

> **Watch out:** a `for` loop has **one** `i` for every time round. Written as
> `AddListener(() => Buy(fruits[i]))`, every button reads `i` when it's clicked, long
> after the loop ended at 3, which is past the end of the array. Copy it first:
> `string fruit = fruits[i];`, then use `fruit` in the lambda.

`-=` takes off the **same** method, and every lambda you write is a new one. So
`player.Died -= () => Debug.Log("Died");` removes nothing, however alike it looks. Keep
the lambda in a field (`Action logDeath;`) to `+=` and `-=` it, or use a named method.

### Idea — names, and what only the owner can do

| What | Rule | Examples |
| --- | --- | --- |
| C# event | what happened, past tense, no `On` | `HealthChanged`, `Died`, `LapCompleted`, `CardPlayed` |
| method that listens | `On` + the event | `OnHealthChanged`, `OnDied` |
| `UnityEvent` field | `on` + what happened | `onWon`, `onLapCompleted` |

The word `event` means only `PlayerHealth` can raise it. Others may only `+=` and `-=`:

```csharp
player.HealthChanged(0);
// error CS0070: The event 'PlayerHealth.HealthChanged' can only appear on the left hand side of += or -= (except when used from within the type 'PlayerHealth')
```

That's the point. Without `event`, any script could raise "health changed" when it hadn't,
and `player.HealthChanged = OnHealthChanged;` (`=`, not `+=`) would wipe every listener.

### Idea — UnityEvent: events wired in the Inspector

A **UnityEvent** field (`using UnityEngine.Events;`) shows in the Inspector as a list,
like a Button's **On Click ()**, which is one. A finish line with two of them:

```csharp
[SerializeField] int lapsToWin = 3;
[SerializeField] UnityEvent<int> onLapCompleted;
[SerializeField] UnityEvent onWon;

int lap;

void OnTriggerEnter(Collider other)
{
    if (other.CompareTag("Player"))
    {
        lap++;
        onLapCompleted.Invoke(lap);
        if (lap == lapsToWin)
        {
            onWon.Invoke();
        }
    }
}
```

In the Inspector, give **On Won ()** a **+**, drag in an object and pick a public method:
show a panel with `SetActive`, play a cheer with `Play`. For **On Lap Completed (Int32)**,
pick a method under **Dynamic int** to receive the lap. Unity makes the object for a
serialised `UnityEvent`, so it isn't `null`, and `Invoke` needs no `?.`.

| | C# event | UnityEvent |
| --- | --- | --- |
| Declared | `public event Action<int> HealthChanged;` | `[SerializeField] UnityEvent<int> onLapCompleted;` |
| Listeners added | in code, with `+=` and `-=` | in the Inspector, or with `AddListener` and `RemoveListener` |
| Raised with | `HealthChanged?.Invoke(health);` | `onLapCompleted.Invoke(lap);` |
| The wiring lives | in the scripts | in the scene: a designer can change it without code |
| Use it for | one script telling other scripts | a script telling things in the scene: sounds, panels, animations |

So: **C# events between scripts; UnityEvents from a script to whatever a designer wires
up in the scene.** A race or a duel manager often has both.

### Do it

1. Make `PlayerHealth`, `HealthText`, and a `Practice` script that calls `TakeDamage(1)`
   when you press **H**. Add a second listener that logs `Game over` on `Died`.
2. Take the `-=` out of `HealthText`. Play, delete the text object in the Hierarchy,
   and press **H**: the Console says nothing. Add `label.gameObject.SetActive(true);`
   to `OnHealthChanged`, do it again, and read the Console. Put the `-=` back, and try
   once more.
3. Make the fruit shop. Change it to a `for` loop using `fruits[i]` in the lambda, click
   a button, and explain what you see. Fix it with a copy.
4. Give a finish line `onWon`, and wire it in the Inspector to show a panel.
5. In another script, write `player.HealthChanged = null;`. Read the error.

### Challenge

A juice stand raises `CupSold(int price)`. A `Wallet` listens, adds the money, and
raises `MoneyChanged(int money)`. A money text and an upgrade button listen to the
wallet: the button is only clickable when you can afford the upgrade. No script may
have a field for the one that listens to it. Draw the arrows first, then build it.

## C# 5 — The Input Actions Asset

**Goal:** you can make an Input Actions asset, use its actions from code, switch action
maps for a pause menu, and let players change a key and keep it (the Level Reference's
Level 4 topic: New Input System; Associate: Programming — determine code for a specified
interaction or logic).

### Idea — from devices to actions

Until now, your code has read devices: `Keyboard.current` and `Pointer.current`, each
checked for `null`. That writes every device into the code; a player can't swap Space for
another key; and a pause menu has to stop every script that reads Space.

An **Input Actions asset** splits it in two. An **action** names what the player wants to
do (*Boost*, *End Turn*, *Steer*), and its **bindings** say which controls do it: Space,
a gamepad button, a touch. Your code listens to the action; the asset holds the controls.
The old `Input` class is in the table only because exams use it: here it throws errors.

| To… | the old `Input` class | the Input System's devices | an Input Actions asset |
| --- | --- | --- | --- |
| react to a press | `Input.GetKeyDown(KeyCode.Space)` | `Keyboard.current.spaceKey.wasPressedThisFrame` | `boostAction.action.performed += OnBoost;` |
| check a held key | `Input.GetKey(KeyCode.Space)` | `Keyboard.current.spaceKey.isPressed` | `boostAction.action.IsPressed()` |
| steer | `Input.GetAxis("Horizontal")` | four keys, checked one by one | `steerAction.action.ReadValue<Vector2>()` |
| find the pointer | `Input.mousePosition` | `Pointer.current.position.ReadValue()` | a Value action bound to the pointer's position |
| let the player change a key | not while playing | change the code | `PerformInteractiveRebinding` |

### Idea — making the asset

**Assets → Create → Input Actions** makes one; double-click it to open its window:

| Part of the window | Holds |
| --- | --- |
| **Action Maps** (left) | groups of actions that work together: *Driving*, *Menu* |
| **Actions** (middle) | the map's actions, each with its bindings under it |
| **Action Properties** or **Binding Properties** (right) | the settings of whatever you selected |
| **Save Asset** (top) | saves your changes; or tick **Auto-Save** |

| Each action's **Action Type** | For | Example |
| --- | --- | --- |
| **Button** | a press | Boost, End Turn, Pause |
| **Value** | something that changes, with a **Control Type** such as **Vector 2** | Steer, from WASD or a stick |
| **Pass Through** | every change from every device, unfiltered | rarely needed: a pointer's position |

Select a binding, open its **Path**, and pick a control from the list, or press **Listen**
and then the key. For WASD, use the action's **+** menu:
**Add Up\Down\Left\Right Composite** makes one binding from four keys. One action can have
many bindings: give Boost both Space and the gamepad's south button.

### Idea — an action in code

A script gets an action through an `InputActionReference` field: drag the action into it,
or pick it from the field's list. `performed` is a C# event (C# 4), so subscribe
in `OnEnable` and unsubscribe in `OnDisable`. The handler takes a `CallbackContext`:

```csharp
using UnityEngine;
using UnityEngine.InputSystem;

public class KartBoost : MonoBehaviour
{
    [SerializeField] InputActionReference boostAction;

    void OnEnable()
    {
        boostAction.action.performed += OnBoost;
        boostAction.action.actionMap.Enable();      // nothing fires until it's enabled
    }

    void OnDisable()
    {
        boostAction.action.performed -= OnBoost;
    }

    void OnBoost(InputAction.CallbackContext context)
    {
        Debug.Log("Boost!");
    }
}
```

Space and the gamepad button both print `Boost!`, and the script names neither. Besides
`performed`, an action has two more events:

| Event | For a Button | For a Value |
| --- | --- | --- |
| `started` | the press begins | the control moves from rest |
| `performed` | the press counts: use this one | every change of value |
| `canceled` | the button is let go | back at rest |

> **Watch out:** the actions in your own asset start **disabled**, and a disabled action
> never fires, with no error. Enable its map with `Enable()`.

> **Note:** Unity 6 also has **project-wide actions**: one asset, chosen in **Edit →
> Project Settings → Input System Package**, enabled for you and read through
> `InputSystem.actions`. New projects come with one, **InputSystem_Actions**. This course
> makes its own asset, to learn every part of one.

### Idea — reading a Value action

A Value action changes all the time, so read it every frame with `ReadValue`:

```csharp
using UnityEngine;
using UnityEngine.InputSystem;

public class KartSteering : MonoBehaviour
{
    [SerializeField] InputActionReference steerAction;
    [SerializeField] float turnSpeed = 120f;    // degrees a second
    [SerializeField] float driveSpeed = 8f;     // units a second

    void Update()
    {
        Vector2 steer = steerAction.action.ReadValue<Vector2>();
        transform.Rotate(0f, steer.x * turnSpeed * Time.deltaTime, 0f);
        transform.Translate(Vector3.forward * steer.y * driveSpeed * Time.deltaTime);
    }
}
```

**D** gives `(1, 0)`, **W** gives `(0, 1)`, and a stick gives anything in between.

### Idea — action maps: one at a time

With a pause menu open, Space mustn't boost the kart behind it. Put the game's actions in
a Driving map and the menu's in a Menu map, and keep only one enabled. Pause and Resume
are both Escape, but only the enabled map hears it. Their `performed` handlers call:

```csharp
[SerializeField] InputActionReference pauseAction;      // in the Driving map
[SerializeField] InputActionReference resumeAction;     // in the Menu map

void Pause()
{
    pauseAction.action.actionMap.Disable();     // Steer and Boost stop too
    resumeAction.action.actionMap.Enable();
}

void Resume()
{
    resumeAction.action.actionMap.Disable();
    pauseAction.action.actionMap.Enable();
}
```

### Idea — rebinding: the player picks a key

`PerformInteractiveRebinding` waits for the next control the player presses, and makes it
the binding's new path. It's a chain of calls, then `Start()`:

```csharp
using TMPro;
using UnityEngine;
using UnityEngine.InputSystem;

// One row of a controls menu: the action's key, and a Change button that calls
// StartRebinding through its On Click () list.
public class KeyRebinder : MonoBehaviour
{
    const string BindingsKey = "Bindings";

    [SerializeField] InputActionReference action;
    [SerializeField] int bindingIndex;          // which binding: 0 is the action's first
    [SerializeField] TMP_Text keyText;

    InputActionRebindingExtensions.RebindingOperation rebinding;

    void Start()
    {
        ShowKey();
    }

    public void StartRebinding()
    {
        bool wasEnabled = action.action.enabled;
        action.action.Disable();                // an action can't be rebound while it's on
        keyText.text = "Press a key...";
        rebinding = action.action.PerformInteractiveRebinding(bindingIndex)
            .WithControlsExcluding("<Pointer>")             // clicking Change isn't a key
            .WithCancelingThrough("<Keyboard>/escape")      // Escape keeps the old key
            .OnComplete(operation => Finish(wasEnabled))    // a key was chosen
            .OnCancel(operation => Finish(wasEnabled))      // or it wasn't
            .Start();
    }

    void Finish(bool enableAgain)
    {
        rebinding.Dispose();                    // frees the operation: always do it
        rebinding = null;
        if (enableAgain)
        {
            action.action.Enable();
        }
        PlayerPrefs.SetString(BindingsKey, action.asset.SaveBindingOverridesAsJson());
        PlayerPrefs.Save();
        ShowKey();
    }

    // "<Keyboard>/k" becomes "K"; OmitDevice leaves out the word Keyboard.
    void ShowKey()
    {
        string path = action.action.bindings[bindingIndex].effectivePath;
        keyText.text = InputControlPath.ToHumanReadableString(path, InputControlPath.HumanReadableStringOptions.OmitDevice);
    }
}
```

> **Watch out:** `action.GetBindingDisplayString()` also names a key, but by the
> computer's keyboard layout: on an Arabic layout, K shows as **ن**, which your game's
> font may not have. `ToHumanReadableString` always gives **K**.

### Idea — keeping the new keys

A rebind lasts until the game closes. `SaveBindingOverridesAsJson()` gives every changed
binding as one string for PlayerPrefs (C# 14); a card game's End Turn, set to K:

```json
{"bindings":[{"action":"Battle/End Turn","id":"830b9d5d-1263-4f52-9be6-9373795c84a8","path":"<Keyboard>/k","interactions":"null","processors":"null"}]}
```

Load it back in `Awake`, before anything shows a key; `ResetControls` undoes every change:

```csharp
const string BindingsKey = "Bindings";

[SerializeField] InputActionReference boostAction;

void Awake()
{
    string json = PlayerPrefs.GetString(BindingsKey, "");
    if (json != "")
    {
        boostAction.asset.LoadBindingOverridesFromJson(json);
    }
    boostAction.action.actionMap.Enable();
}

// Called by a Reset Controls button.
public void ResetControls()
{
    boostAction.asset.RemoveAllBindingOverrides();
    PlayerPrefs.DeleteKey(BindingsKey);
}
```

### Do it

1. Make an Input Actions asset with a Driving map: **Steer** (Value, Vector 2, with a
   WASD composite) and **Boost** (Button: Space and the gamepad's south button). Save it.
2. Put `KartBoost` and `KartSteering` on a cube, fill in the references, and drive.
3. Remove the line that enables the map, and play. What happens? What does the Console say?
4. Add a Menu map with Resume, and a script whose `performed` handlers call `Pause` and
   `Resume`. Check that Space does nothing while it's paused.
5. Add a `KeyRebinder` row for Boost, and the loading code. Change Boost to **B**, stop,
   and play again: is it still B?

### Challenge

Add a row for Boost's gamepad binding (its `bindingIndex` is 1) and a **Reset Controls**
button. What if the player gives Boost and Pause the same key? Find a way to warn them.

## Chapter 5 — Drive It

**Goal:** drive the Balanced Kart round Meadow Loop, with the keys or a gamepad, a camera
gliding along behind it. Your own `KartController`, version 0.1. Then an honest list of
what's wrong with it.

### Idea — forces, every physics step

The kart is a **Rigidbody**: Unity's physics moves it, and it bumps, slides and falls as
a real box would. You don't set its position; you **push** it, and physics does the
rest. Pushing happens in `FixedUpdate`, which Unity runs once for every **physics step**
(50 a second), not once a frame.

| Push | Code | Here, for |
| --- | --- | --- |
| a change of speed, at once | `body.AddForce(direction * metresPerSecond, ForceMode.VelocityChange)` | the throttle: a little faster or slower each step; and grip: take away some of the sliding |
| a change of spin, at once | `body.AddTorque(axis * radiansPerSecond, ForceMode.VelocityChange)` | steering: set the spin |

`VelocityChange` ignores the mass: the same change for a light kart and a heavy one,
which is what a kart's own numbers want. The mass still matters when karts **bump**.

Three questions the kart asks itself every step, all answered with `Vector3.Dot`, which
says how much of one direction is in another:

- **How fast am I going forwards?** `Vector3.Dot(body.linearVelocity, transform.forward)`:
  positive forwards, negative in reverse.
- **How fast am I sliding sideways?** The same with `transform.right`.
- **How fast am I spinning?** The same with `body.angularVelocity` and `transform.up`.

**Who drives?** Not the kart. The kart only reads two numbers, **steer** (−1 left to 1
right) and **throttle** (1 full, −1 brake and reverse), from a **driver**. Today the
driver is you, through the Input System; in Chapter 8 the computer drives too, through
the same two numbers. So the input lives in its own script, `PlayerDriver`, on its own
GameObject, and the kart is pointed at it.

### Do it — the controls

1. In `Assets/Input`, **Create → Input Actions**, and call it `Pocket Karts Controls`.
   Double-click it to open the Input Actions editor.
2. Add an **Action Map** called `Drive`. In it, two actions, both **Action Type**
   **Value** and **Control Type** **Axis**:

| Action | Bindings |
| --- | --- |
| `Steer` | a **Positive/Negative Binding** (1D Axis): Negative **A**, Positive **D**; another: Negative **Left Arrow**, Positive **Right Arrow**; and **Left Stick / X** on the Gamepad |
| `Throttle` | Positive/Negative Bindings: Positive **W**, Negative **S**; Positive **Up Arrow**, Negative **Down Arrow**; Positive **Right Trigger**, Negative **Left Trigger** (Gamepad) |

   (Add a Positive/Negative Binding with the **+** beside the action.) Save the asset.
   More actions join the map later: Drift, Boost, Back To Track, Pause.

### Do it — the driver

3. In `Scripts/Karts`, make `PlayerDriver.cs`:

```csharp
using UnityEngine;
using UnityEngine.InputSystem;

// The player's hands on the wheel: the Drive map's actions, read as numbers
// the kart understands. Keys and a gamepad both reach it through the same
// actions.
public class PlayerDriver : MonoBehaviour
{
    [SerializeField] InputActionReference steerAction;
    [SerializeField] InputActionReference throttleAction;

    public float Steer { get { return steerAction.action.ReadValue<float>(); } }
    public float Throttle { get { return throttleAction.action.ReadValue<float>(); } }

    void OnEnable()
    {
        steerAction.action.actionMap.Enable();      // nothing reads until the map is on
    }

    void OnDisable()
    {
        steerAction.action.actionMap.Disable();
    }
}
```

The two properties read the actions **when asked**: the kart asks every physics step, and
gets what the keys, trigger or stick say right then. One `Enable` switches on the whole
`Drive` map, Throttle too.

4. **GameObject → Create Empty**, `Player Driver`, and add `PlayerDriver`. Open `Pocket
   Karts Controls` in the Project window (the arrow beside it): it lists its actions.
   Drag `Drive/Steer` into **Steer Action** and `Drive/Throttle` into **Throttle Action**.

### Do it — the kart, version 0.1

5. In `Assets/Materials`, **Create → Physics Material**, `Kart Slide`: **Dynamic
   Friction** `0`, **Static Friction** `0`, **Friction Combine** **Minimum**. Open
   `Prefabs/Kart` and drag it into the Box Collider's **Material**. A box with friction
   scrapes along the road like a brick; with none, it slides, and the script decides how
   much sliding to keep.
6. Replace `KartController.cs`:

```csharp
using UnityEngine;

// How a kart drives, version 0.1: a Rigidbody box pushed along by forces. The
// throttle pushes it along its nose, up to its top speed; steering turns it;
// grip stops most of its sliding sideways, as tyres would.
[RequireComponent(typeof(Rigidbody))]
public class KartController : MonoBehaviour
{
    [SerializeField] KartStats stats;
    [SerializeField] PlayerDriver driver;

    Rigidbody body;

    public KartStats Stats { get { return stats; } }
    public float Speed { get; private set; }        // forwards, in metres a second: negative in reverse

    void Awake()
    {
        body = GetComponent<Rigidbody>();
        body.mass = stats.Mass;
    }

    void FixedUpdate()
    {
        Speed = Vector3.Dot(body.linearVelocity, transform.forward);
        if (driver == null)
        {
            return;     // nobody's driving: no throttle, no steering
        }
        Drive(driver.Throttle);
        Turn(driver.Steer);
        Grip();
    }

    // Speeds up, or slows down, towards the speed the throttle asks for: full
    // throttle asks for the top speed, none for a stop, and full brake for the
    // top speed backwards. Never more than the acceleration allows in a step.
    void Drive(float throttle)
    {
        float wanted = throttle * stats.TopSpeed;
        float most = stats.Acceleration * Time.fixedDeltaTime;
        float change = Mathf.Clamp(wanted - Speed, -most, most);
        body.AddForce(transform.forward * change, ForceMode.VelocityChange);
    }

    // Spins the kart at the turn rate the steering asks for: the push is the
    // difference between that spin and the spin it has.
    void Turn(float steer)
    {
        float wantedSpin = steer * stats.TurnRate * Mathf.Deg2Rad;     // radians a second
        float spin = Vector3.Dot(body.angularVelocity, transform.up);
        body.AddTorque(transform.up * (wantedSpin - spin), ForceMode.VelocityChange);
    }

    // Grip: takes away part of the sideways speed every step, as tyres do.
    void Grip()
    {
        float sliding = Vector3.Dot(body.linearVelocity, transform.right);
        float share = Mathf.Min(1f, stats.Grip * Time.fixedDeltaTime);
        body.AddForce(-transform.right * sliding * share, ForceMode.VelocityChange);
    }
}
```

`Drive` treats the throttle as **the speed the driver asks for**: full throttle asks for
the top speed, letting go asks for a stop, and full brake asks for the top speed
backwards. Each step it moves the kart's speed towards that, by no more than the
acceleration allows: 14 m/s every second is 0.28 m/s a step. Grip takes `grip × 0.02`
of the sliding away each step: with a Grip of 8, 16% of it, 50 times a second, so a
slide dies out in about half a second.

7. In the scene, select the `Balanced Kart` and drag `Player Driver` into its
   KartController's **Driver**: an override on this one kart. The Speedy and Heavy Karts
   have no driver: they stand still.
8. Press **Play** (the camera comes next, so for now watch from the Scene view, or the
   Game view's view from above) and drive: **W** or **Up Arrow** accelerates, **S**
   brakes and then reverses, **A** / **D** steer. Drive a lap. Sooner or later, on a
   straight, the kart **trips**: its nose catches, and it flips over or leaps into the
   air. A box slides on the road's surface, and where two pieces meet, its front edge
   catches the join. The course's lab drove this kart round Meadow Loop eight times with
   a computer driver: it flipped in all eight, most of them within seconds.
9. The quick fix. Open `Prefabs/Kart`, and on its Rigidbody, under **Constraints**, tick
   **Freeze Rotation** **X** and **Z**. Physics may now only turn the kart round its up
   axis, Y, which is steering. It can't tip, so it can't flip. Press Play and drive
   again: no more flips. (Remember this fix: it has a price, at the end of the
   chapter.)

### Do it — the camera, two ways

10. First, the obvious way. Drag `Main Camera` onto the `Balanced Kart` in the Hierarchy,
   making it a child, and set its Position to `(0, 2.1, -5)` and Rotation to `(12, 0,
   0)`: behind the kart and above it. Press **Play** and drive. The camera is glued on:
   every bump shakes the whole screen, and when the kart tips, the world tips. Stop, and
   drag `Main Camera` back out to the top of the Hierarchy.
11. Now a camera that **follows**. In `Scripts/Race`, make `ChaseCamera.cs`:

```csharp
using UnityEngine;

// Follows the player's kart from behind and above. It glides after the kart
// with Vector3.SmoothDamp rather than sitting fixed to it, and stays level, so
// a kart tipping on a bank doesn't tip the view.
public class ChaseCamera : MonoBehaviour
{
    [SerializeField] KartController target;
    [SerializeField] float distance = 5f;           // metres behind the kart
    [SerializeField] float height = 2.1f;           // metres above it
    [SerializeField] float lookAhead = 3f;          // metres in front of the kart, where it looks
    [SerializeField] float lookHeight = 0.8f;
    [SerializeField] float followTime = 0.12f;      // seconds: how long it takes to catch up

    Vector3 velocity;

    void Start()
    {
        transform.position = WantedPosition();      // start in place, not flying in from somewhere
        transform.LookAt(LookPoint());
    }

    void LateUpdate()
    {
        transform.position = Vector3.SmoothDamp(transform.position, WantedPosition(), ref velocity, followTime);
        transform.LookAt(LookPoint());
    }

    Vector3 WantedPosition()
    {
        return target.transform.position - LevelForward() * distance + Vector3.up * height;
    }

    Vector3 LookPoint()
    {
        return target.transform.position + LevelForward() * lookAhead + Vector3.up * lookHeight;
    }

    // The kart's forward, flattened: up and down hills, the camera stays level.
    Vector3 LevelForward()
    {
        Vector3 forward = target.transform.forward;
        forward.y = 0f;
        return forward.sqrMagnitude > 0.001f ? forward.normalized : Vector3.forward;
    }
}
```

12. Add it to `Main Camera`, and drag the `Balanced Kart` into **Target**.

`LateUpdate` runs after every `Update` and after the physics has moved the kart, so the
camera always chases where the kart **is**, not where it was. `Vector3.SmoothDamp` moves
the camera part of the way each frame, quickly when it's far behind and gently when it's
close: it glides. `ref velocity` is the camera's own speed, which SmoothDamp keeps between
frames: it must be a field, not a local variable. And `LevelForward` flattens the kart's
forward, so a kart on a slope or tipping on a bank never tips the view.

### Test it

- Press **Play** and drive a lap, behind the kart now; with a gamepad, the triggers and
  the left stick work too. A lap takes about half a minute.
- Push the Speedy and Heavy Karts out of the way at the start: they're Rigidbodies too,
  and the Heavy one is hard to shift.
- Drive fast into a corner and steer late: the kart slides wide, then grips. Set
  `Balanced`'s **Grip** to `1` while playing, and try again: soap. Put it back to `8`.

### What's wrong with it

Version 0.1 drives, and that's a real achievement. Now be honest about it, the way Sam
would. Drive a few laps, and look for each of these:

| What you'll see | Why |
| --- | --- |
| Without the frozen rotation, the kart **trips** on the joins and flips | a box slides on the road's surface, and its edge catches where two pieces meet |
| With it, the kart **can't tilt**: fine on Meadow Loop, which is flat, but a hill or a ramp stops it dead | to drive up a slope, a kart has to tip back with it |
| It **reverses as fast as it drives** | full brake asks for the top speed, backwards |
| It **turns on the spot**, standing still | `Turn` sets the spin whatever the speed |
| It **steers in mid-air**, over a bump | nothing asks whether it's on the ground |

The second one matters most. The studio's other two tracks have a hill, a bridge, a hump
and a jump ramp. The course's lab drove this kart round them with a computer driver: on
the hill, and at the hump, it stopped dead, every time. A real kart doesn't slide on its
belly with its rotation frozen: it rolls on four wheels, on springs, and tilts with the
road. Hold that thought until Chapter 11.

### Commit

*Drive the kart.* Push.

### Challenge

Fix one fault yourself: make the kart turn **less** at low speeds, so it can't spin on
the spot. Multiply the wanted spin by `Mathf.Clamp01(Mathf.Abs(Speed) / 6f)`, which is 0
standing still and 1 at 6 m/s and above. What happens in reverse? (Real cars turn the
other way when reversing: can you make it?)

## C# 6 — Inheritance

**Goal:** you can build a family of classes that share their code, with `protected`,
`virtual`, `override`, `abstract` and `base.`; ask an object which kind it is with `is`
and `as`; and say when inheritance is the right tool and when it isn't (Associate:
Programming — inheritance vs. interfaces).

### Idea — a base class and a derived class

A slime, a bat and a skeleton all have health and take damage. Copy that code into three
classes, and a bug fixed in one stays in the other two. **Inheritance** writes it once, in
a **base class**, and builds each kind on it as a **derived class** (or subclass):

```csharp
// What every enemy has: health, taking damage, and an attack.
public class Enemy
{
    protected int health = 3;

    public int Health { get { return health; } }

    public void TakeDamage(int amount)
    {
        health -= amount;
    }

    public virtual string Attack()
    {
        return "bumps you for 1";
    }
}
```

```csharp
// A Slime is an Enemy, with one thing of its own.
public class Slime : Enemy
{
    public void Regrow()
    {
        health += 1;
    }
}
```

`: Enemy` says "built on `Enemy`": a slime has everything an enemy has, written once,
and `Regrow` too. The access word decides what the slime's own code can use:

| In `Enemy` | `Slime`'s own code | Other scripts, on a slime |
| --- | --- | --- |
| `public`: `Health`, `TakeDamage` | yes | yes |
| `protected`: `health` | yes | no |
| private (no word) | no: *'Enemy.health' is inaccessible due to its protection level* (CS0122) | no |

### Idea — virtual, override, and a variable of the base type

`Attack` is `virtual`: "a subclass may write its own version". A bat swoops instead, so
it **overrides** it. Both words are needed: `virtual` allows it, `override` does it.

```csharp
public class Bat : Enemy
{
    public override string Attack()
    {
        return "swoops at you for 2";
    }
}
```

A `List<Enemy>` can hold slimes and bats, because a slime **is an** enemy. Which
`Attack` runs?

```csharp
List<Enemy> enemies = new List<Enemy>();
enemies.Add(new Slime());
enemies.Add(new Bat());
foreach (Enemy enemy in enemies)
{
    Debug.Log($"{enemy.GetType().Name} {enemy.Attack()}");
    if (enemy is Slime slime)
    {
        slime.Regrow();
        Debug.Log($"The slime regrows to {slime.Health}");
    }
}
```

```
Slime bumps you for 1
The slime regrows to 4
Bat swoops at you for 2
```

The **object** decides which method runs, not the variable: the second object is a bat,
so the bat's version runs, even through an `Enemy` variable (`GetType().Name` is the
object's class name). One loop serves every kind, even kinds you'll write next month.
The **variable** decides what you may call: `enemy.Regrow()` doesn't compile, because
not every enemy can regrow. To reach a slime's own members, ask which kind it is:

| Code | Gives | When it isn't a slime |
| --- | --- | --- |
| `enemy is Slime` | `true` for a slime, or a kind of slime | `false` |
| `enemy as Slime` | the same object, as a `Slime` | `null` |
| `enemy is Slime slime` | `true`, and a variable `slime` to use | `false`, and no `slime` |

The last, the **`is` pattern**, is the one to use: it asks and converts in one step, and
`slime` only exists inside the `if`, where it's sure to be a slime. With pickups, you'd
write `if (item is Potion potion)`, then use `potion`. But if a chain of `is` checks
picks what each kind does, the method belongs in the classes: make it `virtual`.

### Idea — abstract, base. and a three-level chain

There's no such thing as just "a vehicle": only karts, trucks and boats. Mark such a
class `abstract`, and what every kind must write for itself `abstract`, with no body:

```csharp
public abstract class Vehicle
{
    public abstract float TopSpeed { get; }

    public abstract void Drive();
}
```

```csharp
public class Kart : Vehicle
{
    public override float TopSpeed { get { return 20f; } }

    public override void Drive()
    {
        Debug.Log($"The kart zooms off, up to {TopSpeed}.");
    }
}
```

| A member in the base class that is… | Has a body there? | A subclass… |
| --- | --- | --- |
| plain | yes | uses it as it is |
| `virtual` | yes | **may** override it |
| `abstract` | no | **must** override it, unless the subclass is abstract too |

You can't `new` an abstract class, but it's a fine type for a variable: `Vehicle
vehicle = new Kart();` works. An override replaces the version one level up; to run
that version **as well**, call it with `base.`. A turbo kart is a third level:

```csharp
public class TurboKart : Kart
{
    const float TurboBoost = 8f;

    public override float TopSpeed { get { return base.TopSpeed + TurboBoost; } }

    public override void Drive()
    {
        base.Drive();       // first, everything a kart does
        Debug.Log("Turbo! Flames shoot out of the back.");
    }
}
```

```csharp
Vehicle vehicle = new TurboKart();
vehicle.Drive();
```

```
The kart zooms off, up to 28.
Turbo! Flames shoot out of the back.
```

`base.Drive()` ran `Kart`'s `Drive`, which read `TopSpeed`. The object is a turbo kart,
so that was the turbo's `TopSpeed`: the kart's 20, plus 8.

### Idea — MonoBehaviour: the base class you've used all along

`public class Coin : MonoBehaviour` is inheritance: `transform`, `gameObject`,
`GetComponent` and `Destroy` are members you inherited. You can put a class of your own
in between, for what several components share:

```csharp
// Every pickup is collected the same way. What it gives is up to each kind.
public abstract class Pickup : MonoBehaviour
{
    protected abstract void Apply(GameObject player);

    void OnTriggerEnter2D(Collider2D other)
    {
        if (other.CompareTag("Player"))
        {
            Apply(other.gameObject);
            Destroy(gameObject);
        }
    }
}
```

```csharp
public class Gem : Pickup
{
    protected override void Apply(GameObject player)
    {
        Debug.Log($"{player.name} picked up a gem.");
    }
}
```

A `Gem` gets its trigger from `Pickup`; a potion is ten more lines. (In 3D, the base uses
`OnTriggerEnter`.) Unity finds `Start`, `Update`, `OnTriggerEnter2D` and the other event
functions **by name**, on the object's own class. They aren't `virtual` in `MonoBehaviour`,
so you never write `override` on them: `protected override void Start()` is error CS0115.

> **Watch out:** give `Gem` its own `OnTriggerEnter2D`, and Unity calls only that one:
> the gem can't be collected, and nothing warns you. To add to a base class's event
> function, make it `protected virtual`, and override it with a `base.` call first.

### Idea — mistakes the compiler catches

| You wrote | The compiler says |
| --- | --- |
| `class Truck : Vehicle`, with `TopSpeed` but no `Drive` | error CS0534: 'Truck' does not implement inherited abstract member 'Vehicle.Drive()' |
| `Vehicle vehicle = new Vehicle();` | error CS0144: Cannot create an instance of the abstract type or interface 'Vehicle' |
| `public override void Drve()` in `class RaceKart : Kart` | error CS0115: 'RaceKart.Drve()': no suitable method found to override |
| `public override void TakeDamage(int amount)` in `class Skeleton : Enemy` | error CS0506: 'Skeleton.TakeDamage(int)': cannot override inherited member 'Enemy.TakeDamage(int)' because it is not marked virtual, abstract, or override |
| `public string Attack()` in `Bat`, without `override` | warning CS0114: 'Bat.Attack()' hides inherited member 'Enemy.Attack()'. To make the current member override that implementation, add the override keyword. Otherwise add the new keyword. |

The base class decides what may change: for CS0506, add `virtual` to `Enemy`'s method
if it's yours, and ask if it's a teammate's. CS0114 lets the game run, with a bug: through
an `Enemy` variable, the bat bumps. Add `override`; you won't need `new`.

### Idea — when inheritance fits, and when it doesn't

It fits when one thing **is a** kind of the other, **and** they share code:

| Classes | "is a"? | Shared code | Use |
| --- | --- | --- | --- |
| `TurboKart` and `Kart` | a turbo kart is a kart | driving, top speed | inheritance |
| `Bat` and `Enemy` | a bat is an enemy | health, damage | inheritance |
| `Gem` and `Pickup` | a gem is a pickup | being collected | inheritance |
| a player, a crate and a familiar that can all be hurt | none is a kind of another | almost none | an interface (C# 8) |

A class has only **one** base class, and a component's is already `MonoBehaviour`. Every
subclass is tied to its base: change `Enemy`, and every enemy changes, which is the point
when you want it and a trap when you don't. And keep chains to two or three levels.

### Do it

1. Make `Enemy`, `Slime` and `Bat`, and run the list example in a `Practice` script.
   Take `override` off `Bat.Attack`, and run it again. What does the bat do now, and why?
2. Add a `Skeleton` that takes half damage. What must change in `Enemy` first?
3. Make `Vehicle`, `Kart` and `TurboKart`. Add a `Truck`, read CS0534, then finish it.
4. Make `Pickup`, `Gem` and a `Potion`. Give `Gem` its own `OnTriggerEnter2D`, see the
   gem stay, then fix it with `virtual`, `override` and `base.`.

### Challenge

Write an abstract `Generator : MonoBehaviour` whose `Update` calls `protected abstract
void Produce()` every `interval` seconds, and two juice stands built on it. Give one a
sign that spins in its own `Update`, without stopping the juice. Should an `Upgrade`
that makes a stand faster be a subclass of `Generator`? Explain your answer.

## Chapter 6 — Checkpoints and Laps

**Goal:** twelve checkpoints round Meadow Loop and a finish line that counts a lap only if
you passed them all, in order; lap times in the Console; and a kart that goes back to the
track by itself when it's stuck, and at once when you press **R**.

### Idea — one base class, many kinds of trigger

Things on the track react when a kart drives through them: a checkpoint, the finish line,
and later a boost pad and a patch of mud. Each is a **trigger** collider, a box that
reports what passes through it without stopping it. They all start the same way: a
collider enters; is it a kart? if so, react. Only the reaction differs.

That's C# 6's pattern. An **abstract** base class, `TrackTrigger`, does
the shared part once, in `OnTriggerEnter`, and declares the part that differs as an
**abstract method**, `OnRacerEntered`, with no body. Each kind **overrides** it.

```
TrackTrigger (abstract) ── finds the kart; OnRacerEntered is abstract
 ├─ Checkpoint ─────────── tells the kart "you passed checkpoint n"
 │   └─ FinishLine ─────── a checkpoint too (number 0), and it counts the lap
 ├─ BoostPad ──────────── (Chapter 10)
 └─ MudPatch ──────────── (Chapter 10)
```

The finish line **is** a checkpoint: it's number 0, the last one of every lap. So it
extends `Checkpoint`, and its override calls `base.OnRacerEntered`, which lets the
checkpoint code run, and then adds its own: if the kart was waiting for checkpoint 0,
every other checkpoint has been passed, and the lap counts. Cutting across the grass
doesn't.

The kart's side of it lives in a new component, `Racer`: which lap it's on, which
checkpoint it needs next, and when it last started a lap. When a lap ends, it raises a C#
**event**, `LapCompleted`, and doesn't care who listens. Today a small script logs it;
in Chapter 9 the HUD shows it.

### Do it — the scripts

1. The kart needs two new things: a way to be put back on the track, and its driver where
   other scripts can read it. Replace `KartController.cs`:

```csharp
using UnityEngine;

// How a kart drives, version 0.1: a Rigidbody box pushed along by forces. The
// throttle pushes it along its nose, up to its top speed; steering turns it;
// grip stops most of its sliding sideways, as tyres would.
[RequireComponent(typeof(Rigidbody))]
public class KartController : MonoBehaviour
{
    [SerializeField] KartStats stats;
    [SerializeField] PlayerDriver driver;

    Rigidbody body;

    public KartStats Stats { get { return stats; } }
    public PlayerDriver Driver { get { return driver; } }
    public float Speed { get; private set; }        // forwards, in metres a second: negative in reverse

    void Awake()
    {
        body = GetComponent<Rigidbody>();
        body.mass = stats.Mass;
    }

    void FixedUpdate()
    {
        Speed = Vector3.Dot(body.linearVelocity, transform.forward);
        if (driver == null)
        {
            return;     // nobody's driving: no throttle, no steering
        }
        Drive(driver.Throttle);
        Turn(driver.Steer);
        Grip();
    }

    // Puts the kart down here, still: back on the track.
    public void PlaceAt(Vector3 position, Quaternion rotation)
    {
        transform.SetPositionAndRotation(position, rotation);
        body.position = position;
        body.rotation = rotation;
        body.linearVelocity = Vector3.zero;
        body.angularVelocity = Vector3.zero;
    }

    // Speeds up, or slows down, towards the speed the throttle asks for: full
    // throttle asks for the top speed, none for a stop, and full brake for the
    // top speed backwards. Never more than the acceleration allows in a step.
    void Drive(float throttle)
    {
        float wanted = throttle * stats.TopSpeed;
        float most = stats.Acceleration * Time.fixedDeltaTime;
        float change = Mathf.Clamp(wanted - Speed, -most, most);
        body.AddForce(transform.forward * change, ForceMode.VelocityChange);
    }

    // Spins the kart at the turn rate the steering asks for: the push is the
    // difference between that spin and the spin it has.
    void Turn(float steer)
    {
        float wantedSpin = steer * stats.TurnRate * Mathf.Deg2Rad;     // radians a second
        float spin = Vector3.Dot(body.angularVelocity, transform.up);
        body.AddTorque(transform.up * (wantedSpin - spin), ForceMode.VelocityChange);
    }

    // Grip: takes away part of the sideways speed every step, as tyres do.
    void Grip()
    {
        float sliding = Vector3.Dot(body.linearVelocity, transform.right);
        float share = Mathf.Min(1f, stats.Grip * Time.fixedDeltaTime);
        body.AddForce(-transform.right * sliding * share, ForceMode.VelocityChange);
    }
}
```

`Driver` lets other scripts read the driver, but not change it. `PlaceAt` moves the
kart and stops it dead: a Rigidbody has a position of its own, which the physics uses, so
it sets both.

2. The next four scripts need each other: a `Checkpoint` tells a `Racer`, and a `Racer`
   keeps a list of `Checkpoint`s. Unity shows errors in the Console until all four are
   saved; then they go.

<!-- check: together -->

3. In `Scripts/Track`, make `TrackTrigger.cs`:

```csharp
using UnityEngine;

// Something on the track that reacts when a kart drives through it: a
// checkpoint, the finish line, and later a boost pad and a patch of mud.
// Finding the kart is the same for all of them, so it's done once, here, and
// each kind says what it does in OnRacerEntered.
[RequireComponent(typeof(Collider))]
public abstract class TrackTrigger : MonoBehaviour
{
    void OnTriggerEnter(Collider other)
    {
        // The collider may be on a child of the kart, so look up the hierarchy.
        Racer racer = other.GetComponentInParent<Racer>();
        if (racer != null)
        {
            OnRacerEntered(racer);
        }
    }

    protected abstract void OnRacerEntered(Racer racer);

    // Unity calls Reset when the component is added: a track trigger's
    // collider is always a trigger.
    void Reset()
    {
        GetComponent<Collider>().isTrigger = true;
    }
}
```

`protected` means: this class and the classes that extend it, nobody else. `Reset` is a
Unity event function that runs in the Editor when the component is added, or when you
choose **Reset** from its menu: a handy place for a sensible starting value.

4. In `Scripts/Track`, make `Checkpoint.cs`:

```csharp
using UnityEngine;

// A checkpoint: a trigger box across the road. A racer must pass every
// checkpoint, in order, for a lap to count; the finish line is checkpoint 0.
// Each has a respawn point just after it, facing the way to go: Back to the
// track puts a kart there.
public class Checkpoint : TrackTrigger
{
    [SerializeField] int index;
    [SerializeField] Transform respawnPoint;

    public int Index { get { return index; } }
    public Transform RespawnPoint { get { return respawnPoint; } }

    protected override void OnRacerEntered(Racer racer)
    {
        racer.PassCheckpoint(this);
    }
}
```

5. And `FinishLine.cs`:

```csharp
// The finish line. It is a checkpoint (number 0, the last one of every lap),
// so it extends Checkpoint and lets base pass it like any other. It also
// counts the lap, but only when every other checkpoint was passed first:
// cutting across the grass doesn't count.
public class FinishLine : Checkpoint
{
    protected override void OnRacerEntered(Racer racer)
    {
        bool isLapDone = racer.NextCheckpoint == Index;     // the finish line is the one it was waiting for
        base.OnRacerEntered(racer);
        if (isLapDone)
        {
            racer.CompleteLap();
        }
    }
}
```

`isLapDone` is worked out **before** `base.OnRacerEntered`, because passing the
checkpoint moves the kart's next checkpoint on to 1.

6. In `Scripts/Race`, make `Racer.cs`:

```csharp
using System;
using UnityEngine;

// A kart in the race: its lap and the next checkpoint it must pass. It puts
// the kart back on the track when it's stuck, upside down or has fallen off.
// It raises an event when a lap is done; whoever cares listens.
[RequireComponent(typeof(KartController))]
public class Racer : MonoBehaviour
{
    const float StuckSpeed = 1.5f;      // metres a second: slower than this is stuck...
    const float StuckThrottle = 0.5f;   // ...if the driver is pushing at least this hard
    const float StuckTime = 2.5f;       // seconds stuck, or upside down, before going back
    const float UpsideDown = 0.3f;      // the kart's up points this little upwards, or less
    const float FallDepth = 15f;        // metres below the last checkpoint: fallen off
    const float RespawnHeight = 0.6f;   // metres above the respawn point, dropped onto the road

    [SerializeField] Checkpoint[] checkpoints;      // the finish line first, then in order round the track

    KartController kart;
    Checkpoint lastCheckpoint;
    float lapStartTime;
    float stuckTime;

    public int Lap { get; private set; }
    public int NextCheckpoint { get; private set; }
    public KartController Kart { get { return kart; } }
    public float CurrentLapTime { get { return Time.time - lapStartTime; } }

    public event Action<int, float> LapCompleted;       // the lap just finished, and its time

    void Awake()
    {
        kart = GetComponent<KartController>();
    }

    // The kart starts just past the finish line, so the first checkpoint to
    // find is 1.
    void Start()
    {
        lastCheckpoint = checkpoints[0];
        Lap = 1;
        NextCheckpoint = 1;
        lapStartTime = Time.time;
    }

    void Update()
    {
        CheckStuck();
    }

    public void PassCheckpoint(Checkpoint checkpoint)
    {
        if (checkpoint.Index != NextCheckpoint)
        {
            return;     // passed already, or out of order
        }
        lastCheckpoint = checkpoint;
        NextCheckpoint = (NextCheckpoint + 1) % checkpoints.Length;
    }

    public void CompleteLap()
    {
        LapCompleted?.Invoke(Lap, CurrentLapTime);
        Lap++;
        lapStartTime = Time.time;
    }

    // Back to the last checkpoint passed, facing the way to go.
    public void BackToTrack()
    {
        Transform point = lastCheckpoint.RespawnPoint;
        kart.PlaceAt(point.position + Vector3.up * RespawnHeight, point.rotation);
        stuckTime = 0f;
    }

    void CheckStuck()
    {
        if (transform.position.y < lastCheckpoint.RespawnPoint.position.y - FallDepth)
        {
            BackToTrack();      // fallen off the world: no need to wait
            return;
        }

        bool isUpsideDown = transform.up.y < UpsideDown;
        bool isPushing = kart.Driver != null && kart.Driver.Throttle > StuckThrottle;
        bool isStuck = isPushing && Mathf.Abs(kart.Speed) < StuckSpeed;
        if (isUpsideDown || isStuck)
        {
            stuckTime += Time.deltaTime;
            if (stuckTime > StuckTime)
            {
                BackToTrack();
            }
        }
        else
        {
            stuckTime = 0f;
        }
    }
}
```

`(NextCheckpoint + 1) % checkpoints.Length` counts round in a circle: with 12
checkpoints, after 11 comes 0, the finish line. A kart is **stuck** only if its driver is
pushing and it isn't moving: a kart waiting at the start isn't stuck. Your kart can't be
upside down yet (its rotation is frozen), but Chapter 11's can.

<!-- check: end -->

7. A listener, until the HUD exists. In `Scripts/Race`, make `LapLog.cs`:

```csharp
using UnityEngine;

// A stand-in for the HUD, until Chapter 9: writes each lap's time in the
// Console when the kart's Racer says a lap is done.
public class LapLog : MonoBehaviour
{
    [SerializeField] Racer racer;

    void OnEnable()
    {
        racer.LapCompleted += OnLapCompleted;
    }

    void OnDisable()
    {
        racer.LapCompleted -= OnLapCompleted;
    }

    void OnLapCompleted(int lap, float time)
    {
        Debug.Log($"Lap {lap}: {time:F2} s");
    }
}
```

Sam's rule from the style guide, in action: subscribe in `OnEnable`, unsubscribe in
`OnDisable`, always both.

8. **Back to the track** with a key. Open `Pocket Karts Controls` and add an action to
   `Drive`: `Back To Track`, **Action Type** **Button**, bound to **R** (Keyboard) and
   **Button North** (Gamepad). Save. Then update `PlayerDriver.cs`:

```csharp
using UnityEngine;
using UnityEngine.InputSystem;

// The player's hands on the wheel: the Drive map's actions, read as numbers
// the kart understands. Keys and a gamepad both reach it through the same
// actions.
public class PlayerDriver : MonoBehaviour
{
    [SerializeField] InputActionReference steerAction;
    [SerializeField] InputActionReference throttleAction;
    [SerializeField] InputActionReference backToTrackAction;
    [SerializeField] Racer racer;       // the kart this driver drives, for Back to the track

    public float Steer { get { return steerAction.action.ReadValue<float>(); } }
    public float Throttle { get { return throttleAction.action.ReadValue<float>(); } }

    void OnEnable()
    {
        steerAction.action.actionMap.Enable();      // nothing reads until the map is on
        backToTrackAction.action.performed += OnBackToTrack;
    }

    void OnDisable()
    {
        steerAction.action.actionMap.Disable();
        backToTrackAction.action.performed -= OnBackToTrack;
    }

    void OnBackToTrack(InputAction.CallbackContext context)
    {
        if (racer != null)
        {
            racer.BackToTrack();
        }
    }
}
```

A Button action's `performed` is an event: it fires once, the moment the key goes down.
Steering is read every step; Back to the track happens once.

### Do it — the checkpoint prefabs

9. **GameObject → Create Empty**, `Checkpoint`. Add a **Box Collider** first: **Center**
   `(0, 6, 0)`, **Size** `(16, 12, 1.5)`, a wall of air across the road, wider than the
   road and as tall as a house, so a kart flying over a bump still passes through it.
   Then add **Checkpoint**: its `Reset` ticks the collider's **Is Trigger** for you.
10. Inside it, an empty child `Respawn Point` at Position `(0, 0, 4)`: 4 m past the
   checkpoint, facing the same way. Drag it into the Checkpoint's **Respawn Point**.
11. Make a folder `Prefabs/Track`, and drag `Checkpoint` into it. Delete it from the
    scene.
12. The finish line: select `Prefabs/Track/Checkpoint` and duplicate it (**Ctrl+D**), call
    the copy `Finish Line`. Open it, remove its **Checkpoint** component (the ⋮ menu →
    **Remove Component**), add **FinishLine**, and drag `Respawn Point` into its
    **Respawn Point**. It's a separate prefab, not a variant: a variant couldn't swap the
    script.

### Do it — round the track

13. **GameObject → Create Empty**, `Race`, at `(0, 0, 0)`, and inside it an empty
    `Checkpoints`. Put a `Finish Line` and eleven `Checkpoint`s inside `Checkpoints`, in
    this order, with these Positions (X, Z; Y is 0), Y Rotations and **Index** values.
    Each one's blue arrow points the way the karts go.

| Name | Prefab | Position | Rotation | Index |
| --- | --- | --- | --- | --- |
| `Finish Line` | Finish Line | (12.5, 0) | 90 | 0 |
| `Checkpoint 1` | Checkpoint | (45, 0) | 90 | 1 |
| `Checkpoint 2` | Checkpoint | (75, 0) | 90 | 2 |
| `Checkpoint 3` | Checkpoint | (117.5, −17.5) | 135 | 3 |
| `Checkpoint 4` | Checkpoint | (117.5, −52.5) | 180 | 4 |
| `Checkpoint 5` | Checkpoint | (100, −100) | 225 | 5 |
| `Checkpoint 6` | Checkpoint | (62.5, −112.5) | 225 | 6 |
| `Checkpoint 7` | Checkpoint | (37.5, −112.5) | 315 | 7 |
| `Checkpoint 8` | Checkpoint | (10, −100) | 270 | 8 |
| `Checkpoint 9` | Checkpoint | (−17.5, −82.5) | 315 | 9 |
| `Checkpoint 10` | Checkpoint | (−17.5, −52.5) | 0 | 10 |
| `Checkpoint 11` | Checkpoint | (−17.5, −22.5) | 0 | 11 |

14. Delete the Speedy and Heavy Karts from the scene: they come back with drivers of
    their own in Chapter 8. Move the `Balanced Kart` to just past the finish line:
    Position `(17, 1, 1.7)`, Rotation `(0, 90, 0)`.
15. Open `Prefabs/Kart` and add **Racer** to its root. Back in the scene, on the
    `Balanced Kart`'s Racer, set **Checkpoints** to size 12 and drag them in, in order,
    `Finish Line` first. (Lock the Inspector with its padlock, select all twelve in the
    Hierarchy in order, and drag them onto the word **Checkpoints**: they go in at once.)
16. On `Player Driver`, drag `Drive/Back To Track` into **Back To Track Action** and the
    `Balanced Kart` into **Racer**.
17. **GameObject → Create Empty**, `Lap Log`, add **LapLog**, and drag the `Balanced Kart`
    into **Racer**.

### Test it

- Press **Play** and drive a lap: the Console says `Lap 1: 31.40 s`, or thereabouts.
  Then another: `Lap 2: …`.
- Cut a corner across the grass, skipping a checkpoint, and cross the line: no lap. The
  kart is still waiting for the checkpoint it missed. Go back for it, and the lap counts
  next time over the line.
- Press **R**: the kart appears at the last checkpoint's respawn point, still, facing the
  way to go.
- Drive straight into a bank and hold **W**: after two and a half seconds of pushing and
  not moving, the kart goes back by itself.

### Commit

*Add checkpoints and laps.* Push.

### Challenge

The table puts a checkpoint about every 30 m. Why not one every 100 m? (Think about Back
to the track.) And why must there be one on each side of the chicane? Try deleting
`Checkpoint 6` and `Checkpoint 7` (and setting the indexes after them down by two): can you
now cut the chicane?

## C# 7 — Choosing Collections and Types

**Goal:** you can choose an array, a `List`, a `Dictionary`, a `Queue` or a `Stack` for a
job, use each one's main methods, and choose the right type for every value you store
(Associate: Programming — choose data structures: lists, arrays, dictionaries; choose
data types: floats, bools, strings).

### Idea — arrays and lists, again

You've used both since Levels 1 and 2. An **array** has a fixed size (`lanes.Length`); a
**`List<T>`** grows and shrinks (`hand.Count`, `Add`, `Remove`, `Clear`). Choose an array
when the number never changes while playing, such as four grid slots set in the
Inspector, and a List when things come and go, such as the cards in a hand. Both find
things **by position**, `hand[0]`: to find one by a name or an id, you'd have to look
through every item. That's the next collection's job.

### Idea — Dictionary: a value for each key

A `Dictionary<TKey, TValue>` stores **pairs**: a key, and the value that goes with it,
like a menu that pairs each juice with its price. Give it a key, and it finds the value
at once, however many pairs it holds. Each key appears only once.

| Member | When the key is new | When the key is already there |
| --- | --- | --- |
| `prices.Add("Mango", 5)` | adds the pair | throws an exception |
| `prices["Mango"] = 5` | adds the pair | replaces the value, quietly |
| `prices["Mango"]` (reading) | throws an exception | gives the value |
| `prices.TryGetValue("Mango", out int price)` | `false`, and `price` is 0 | `true`, and the value |
| `prices.ContainsKey("Mango")` | `false` | `true` |
| `prices.Remove("Mango")` | `false` | removes the pair, `true` |

`Count` says how many pairs there are; `Keys` and `Values` hold every key and every
value. The exception from `Add` is
`ArgumentException: An item with the same key has already been added. Key: Mango`.
That's useful: use `Add` when a second pair with the same key would be a **bug** you
want to hear about, such as two cards with the same id. Use the indexer when replacing is
what you mean, such as a kart's latest lap time.

### Idea — reading safely with TryGetValue

Reading a missing key with `prices["Cherry"]` throws
`KeyNotFoundException: The given key 'Cherry' was not present in the dictionary.`,
and the rest of the method doesn't run. `TryGetValue` never throws. It returns a `bool`,
and puts the value in an **`out`** variable: `out` means *the method fills this variable
in for you*. `out int price` declares the variable right there, in the call. When the key
is missing, it holds its type's default: 0 for an `int`, `null` for a class. (Use
`ContainsKey` when you only need yes or no; `ContainsKey` and then `prices[key]` would
look the key up twice.)

```csharp
Dictionary<string, int> prices = new Dictionary<string, int>();
prices["Lemonade"] = 3;
prices["Mango"] = 5;

if (prices.TryGetValue("Mango", out int price))
{
    Debug.Log($"Mango costs {price}");
}
if (!prices.TryGetValue("Cherry", out int cherryPrice))
{
    Debug.Log($"No cherry juice here ({cherryPrice})");
}
Debug.Log(prices.ContainsKey("Lemonade"));
```

```
Mango costs 5
No cherry juice here (0)
True
```

### Idea — counting, and going through a dictionary

"How many of each?" is a dictionary's favourite question: the thing is the key, and its
count is the value. A `foreach` over a dictionary gives you each pair as a
`KeyValuePair<TKey, TValue>`, with a `.Key` and a `.Value`:

```csharp
string[] deck = { "Spark", "Shield", "Spark", "Heal", "Spark", "Shield" };
Dictionary<string, int> counts = new Dictionary<string, int>();
foreach (string card in deck)
{
    counts.TryGetValue(card, out int n);    // n is 0 the first time
    counts[card] = n + 1;
}

int most = 0;
foreach (KeyValuePair<string, int> pair in counts)
{
    most = Mathf.Max(most, pair.Value);
}

List<string> names = new List<string>(counts.Keys);
names.Sort();
foreach (string name in names)
{
    Debug.Log($"{name} x{counts[name]}");
}
Debug.Log($"{counts.Count} kinds, at most {most} of one");
```

```
Heal x1
Shield x2
Spark x3
3 kinds, at most 3 of one
```

The same two lines count laps per kart or sales per juice. And a dictionary has **no
order**: to show its keys in order, copy them into a `List` and `Sort` it.

> **Watch out:** adding to a dictionary inside a `foreach` over it throws an exception.
> Loop over a copy of the keys instead: `foreach (string card in new List<string>(counts.Keys))`.

### Idea — Queue and Stack

| | `Queue<T>`: first in, first out, like a line | `Stack<T>`: last in, first out, like a pile of plates |
| --- | --- | --- |
| Put one in | `Enqueue(item)`, at the back | `Push(item)`, on top |
| Take one out | `Dequeue()`, from the front | `Pop()`, from the top |
| Look without taking | `Peek()`, the front | `Peek()`, the top |
| Use it for | a draw pile; customers waiting; the waypoints a kart visits in turn | a discard pile; an undo list; a pool of sleeping objects (C# 15) |

```csharp
Queue<string> customers = new Queue<string>();
customers.Enqueue("Ana");
customers.Enqueue("Ben");
customers.Enqueue("Cleo");
Debug.Log($"Next up: {customers.Peek()}");
string served = customers.Dequeue();
Debug.Log($"Served {served}, {customers.Count} waiting");

Stack<string> undo = new Stack<string>();
undo.Push("Built a stand");
undo.Push("Bought a blender");
undo.Push("Raised the price");
Debug.Log($"Undo: {undo.Pop()}");
Debug.Log($"Still to undo: {undo.Peek()}");
```

```
Next up: Ana
Served Ana, 2 waiting
Undo: Raised the price
Still to undo: Bought a blender
```

> **Watch out:** `Dequeue`, `Pop` and `Peek` on an empty queue or stack throw an exception,
> `InvalidOperationException: Queue empty.` (or `Stack empty.`). Check `Count > 0` first.

### Idea — IReadOnlyList: look, don't touch

A results screen needs to read the finishing order, but shouldn't change it. A public
`List` would let any script `Add`, `Remove` or `Clear` it. Hand out an
**`IReadOnlyList<T>`**: it has `Count`, `[i]` and `foreach`, and nothing that changes the
list. An array can be handed out the same way.

```csharp
using System.Collections.Generic;
using UnityEngine;

public class Race : MonoBehaviour
{
    readonly List<string> finishers = new List<string>();

    // Others can read the finishing order; only Race can change it.
    public IReadOnlyList<string> Finishers
    {
        get { return finishers; }
    }

    public void Finish(string driver)
    {
        if (!finishers.Contains(driver))
        {
            finishers.Add(driver);
        }
    }
}
```

Another script's `race.Finishers.Add("Zed");` doesn't compile: error CS1061, because an
`IReadOnlyList` has no `Add` (C# 19 reads that error in full).

### Idea — choosing data types deliberately

| The value | Type | Why |
| --- | --- | --- |
| how many: coins, cards, laps, health points | `int` | whole numbers, exact, safe to compare with `==` |
| time, speed, positions, a share such as 0.75 | `float` | needs the part after the point; `Time.deltaTime` and `Vector3` use `float`s |
| yes or no: paused, unlocked | `bool` | two values only; name it as a question, `isPaused` |
| names, ids, text on the screen | `string` | letters as well as digits |
| one of a fixed set: a card's kind, a fruit | an `enum` | the compiler checks the spelling |

A `float` is close, not exact: `0.1f` is really 0.100000001…, and the tiny errors add
up. So money kept in a `float` drifts, and health compared with `==` misses:

```csharp
float money = 0f;
int pennies = 0;
float health = 1f;
for (int i = 0; i < 10; i++)
{
    money += 0.1f;          // ten sales at 0.10
    pennies += 10;          // the same, in whole pennies
    health -= 0.1f;         // ten hits of 0.1
}
Debug.Log(money == 1f);
Debug.Log(pennies == 100);
Debug.Log(health == 0f);
Debug.Log(health <= 0f);
```

```
False
True
False
True
```

| Wrong choice | What goes wrong | Choose instead |
| --- | --- | --- |
| money as a `float` | the total drifts, and `==` fails | an `int` of the smallest coin |
| health as a `float`, checked with `== 0f` | the kart never explodes | an `int`, or `<= 0f` |
| an id as an `int` | a later card id such as `"frost-bolt"` won't fit, and changing the type breaks old saves | a `string`, from the start |
| a `string` for a fixed set: `"Heavy"` | `"heavy"` compiles, and never matches | an `enum`: `KartClass.Heavy` |
| two `bool`s, `isEasy` and `isHard` | both can be true at once | an `enum Difficulty { Easy, Normal, Hard }` |

### Idea — which collection?

| Situation | Choose | Because |
| --- | --- | --- |
| the cards in a player's hand | `List<Card>` | it grows and shrinks |
| the draw pile, in shuffled order | `Queue<Card>` | first in, first out |
| the discard pile, last card on top | `Stack<Card>` | last in, first out |
| every card, found by its id when a save loads | `Dictionary<string, Card>` | one lookup by key |
| the four starting grid slots, set in the Inspector | `Transform[]` | the number never changes |
| the waypoints an AI kart visits once, in order | `Queue<Transform>` | take the next when it arrives |
| each driver's best lap time | `Dictionary<string, float>` | a value for each name |
| customers waiting at a juice stand | `Queue<Customer>` | the first to arrive is served first |
| the upgrades bought, so Undo takes back the latest | `Stack<Upgrade>` | the latest comes off first |
| the finishing order, for the results screen | `IReadOnlyList<string>` | others read it, never change it |

### Do it

1. In a `Practice` script, make a price list for three juices. Log two prices, and one
   juice that isn't on the menu, with `TryGetValue`. Then read the missing one with
   `prices["…"]`, and read the exception in the Console.
2. Call `Add` twice with the same key, and read the exception. Change the second call
   to the indexer, and log the value: which one won?
3. Put three empty GameObjects in a scene as waypoints, and `Enqueue` them in `Start`.
   In `Update`, move a cube towards `Peek()` with `Vector3.MoveTowards`, and `Dequeue`
   when it arrives. Stop when the queue is empty.

### Challenge

A juice stand has a `Queue<string>` of customers, each wanting one fruit, and a
`Dictionary<string, int>` of stock. Serve them in order. A customer whose fruit has run
out leaves, and is counted in a second dictionary of missed sales. At the end, log the
stock left and the missed sales in alphabetical order. Then say why you chose each type.

## Chapter 7 — The Racing Line

**Goal:** a **racing line** round Meadow Loop, fifty points the computer drivers will
follow, drawn in the Scene view as a loop of dots; a **queue** of those points, ready for
Chapter 8's drivers; and every lap time kept in a **list**, with the best lap picked out.

### Idea — the right collection for the job

C# 7 said: pick the collection whose rules are the job's rules. This
chapter has two jobs, and they need different collections.

**The racing line** is a loop of points. A computer driver always aims at the **next**
one; when it gets there, that point is done until the next lap, and the one after it is
next. That's a **queue**: `Peek()` looks at the front, and `Dequeue()` takes it off. And
because the track is a loop, the point it just reached goes straight to the **back**:

```csharp
line.Enqueue(line.Dequeue());       // reached: send it to the back, for the next lap
```

That one line turns a queue into a **circular** queue, which never runs out. No index to
count, and no "if it's the last one, go back to 0".

**The lap times** grow by one each lap, are read in order (lap 1, lap 2, lap 3), and need
a best: a `List<float>`. A list remembers the order things were added in, and `foreach`
reads them all.

Where do the points live? As **children** of one GameObject, `Racing Line`: you place
them in the Scene view, and their order in the Hierarchy is their order round the track.
A script can't show them in a game (they're just Transforms), so `RacingLine` draws them
with **gizmos**, shapes Unity draws only in the Scene view, from `OnDrawGizmos`.

### Do it — the script

1. In `Scripts/Track`, make `RacingLine.cs`:

```csharp:RacingLine.cs
using System.Collections.Generic;
using UnityEngine;

// The racing line: the way round the track a good driver takes. Its children
// are the points, in order. It draws itself in the Scene view (OnDrawGizmos),
// a loop of dots and lines, so you can see it as you place the points; the
// game never draws it. Each computer driver gets its own Queue of the points,
// starting just past the point nearest its kart.
public class RacingLine : MonoBehaviour
{
    [SerializeField] Color colour = new Color(0.2f, 0.9f, 1f);
    [SerializeField] float pointSize = 0.5f;    // metres

    public Queue<Transform> QueueFrom(Vector3 position)
    {
        int count = transform.childCount;
        int nearest = 0;
        float nearestDistance = float.MaxValue;
        for (int i = 0; i < count; i++)
        {
            float distance = Vector3.Distance(position, transform.GetChild(i).position);
            if (distance < nearestDistance)
            {
                nearestDistance = distance;
                nearest = i;
            }
        }

        // Start one past the nearest, so a kart never turns back for a point it has just passed.
        Queue<Transform> queue = new Queue<Transform>();
        for (int i = 1; i <= count; i++)
        {
            queue.Enqueue(transform.GetChild((nearest + i) % count));
        }
        return queue;
    }

    void OnDrawGizmos()
    {
        Gizmos.color = colour;
        int count = transform.childCount;
        for (int i = 0; i < count; i++)
        {
            Vector3 point = transform.GetChild(i).position;
            Vector3 next = transform.GetChild((i + 1) % count).position;
            Gizmos.DrawSphere(point, pointSize);
            Gizmos.DrawLine(point, next);
        }
    }
}
```

`QueueFrom` is how each computer driver will get its own queue: a new `Queue<Transform>`
holding every point, starting just past the one nearest the kart, so karts on different
grid places start at the right point. Every driver's queue is its own; they all share the
same points. `(nearest + i) % count` wraps round past the last child, as the checkpoints
did. And `OnDrawGizmos` joins each point to the next, the last back to the first: the
loop closes.

### Do it — fifty points

2. Inside `Race`, **Create Empty**, `Racing Line`, at `(0, 0, 0)`, and add **RacingLine**.
3. Inside `Racing Line`, an empty child at `(0, 0.5, 0)`: the first point, half a metre
   above the road at the start of the top straight. Turn on **Gizmos** in the Scene view
   (the toolbar's sphere button) and you see a cyan dot.
4. Add the points **in order**, round the track the way the karts go. **Ctrl+D** puts a
   copy straight below the original in the Hierarchy, so duplicating the last point and
   moving the copy keeps them in order. On the straights, a point every **10 m** along
   the middle of the road; round each curve, two points (or five round the bottom of
   the chicane):

| Part | Points (X, Z; Y is always 0.5) |
| --- | --- |
| Top straight | X 0, 10, 20 … 100, Z 0 (11 points) |
| Corner 1 | (108.75, −2.34), (115.16, −8.75) |
| Right side | X 117.5, Z −17.5, −27.5 … −77.5 (7 points) |
| Corner 2 | (115.16, −91.25), (108.75, −97.66) |
| Bottom, to the chicane | X 100, 90, 80, Z −100 (3 points) |
| Chicane, out | (68.75, −101.67), (64.17, −106.25), (62.5, −112.5) |
| Chicane, round the bottom | (60.83, −118.75), (56.25, −123.33), (50, −125), (43.75, −123.33), (39.17, −118.75) |
| Chicane, back | (37.5, −112.5), (35.83, −106.25), (31.25, −101.67) |
| Bottom, after the chicane | X 20, 10, 0, Z −100 (3 points) |
| Corner 3 | (−8.75, −97.66), (−15.16, −91.25) |
| Left side | X −17.5, Z −77.5, −67.5 … −17.5 (7 points) |
| Corner 4 | (−15.16, −8.75), (−8.75, −2.34) |

   The corners are quarter circles, 17.5 m round a centre; the chicane's are 12.5 m.
   The straights are quick with the snapping from Chapter 2 (set the **Move** step to
   `10`): duplicate, Ctrl-drag one step. Type the curve points in.

5. Look at the line from above: one smooth loop of 50 dots down the middle of the road,
   closing on itself at the start. A dot out of order shows as a line cutting across the
   loop: find it, and drag it to its place in the Hierarchy.

### Do it — lap times in a list

6. Replace `Racer.cs`. What's new: a `List<float>` of lap times, a read-only view of it
   for other scripts, and the best lap:

```csharp
using System;
using System.Collections.Generic;
using UnityEngine;

// A kart in the race: its lap, the next checkpoint it must pass, its lap
// times and its best lap. It puts the kart back on the track when it's stuck,
// upside down or has fallen off. It raises an event when a lap is done;
// whoever cares listens.
[RequireComponent(typeof(KartController))]
public class Racer : MonoBehaviour
{
    const float StuckSpeed = 1.5f;      // metres a second: slower than this is stuck...
    const float StuckThrottle = 0.5f;   // ...if the driver is pushing at least this hard
    const float StuckTime = 2.5f;       // seconds stuck, or upside down, before going back
    const float UpsideDown = 0.3f;      // the kart's up points this little upwards, or less
    const float FallDepth = 15f;        // metres below the last checkpoint: fallen off
    const float RespawnHeight = 0.6f;   // metres above the respawn point, dropped onto the road

    [SerializeField] Checkpoint[] checkpoints;      // the finish line first, then in order round the track

    readonly List<float> lapTimes = new List<float>();
    KartController kart;
    Checkpoint lastCheckpoint;
    float lapStartTime;
    float stuckTime;

    public int Lap { get; private set; }
    public int NextCheckpoint { get; private set; }
    public KartController Kart { get { return kart; } }
    public IReadOnlyList<float> LapTimes { get { return lapTimes; } }
    public float CurrentLapTime { get { return Time.time - lapStartTime; } }

    // The fastest lap so far, or 0 before the first one.
    public float BestLap
    {
        get
        {
            float best = 0f;
            foreach (float time in lapTimes)
            {
                if (best == 0f || time < best)
                {
                    best = time;
                }
            }
            return best;
        }
    }

    public event Action<int, float> LapCompleted;       // the lap just finished, and its time

    void Awake()
    {
        kart = GetComponent<KartController>();
    }

    // The kart starts just past the finish line, so the first checkpoint to
    // find is 1.
    void Start()
    {
        lastCheckpoint = checkpoints[0];
        Lap = 1;
        NextCheckpoint = 1;
        lapStartTime = Time.time;
    }

    void Update()
    {
        CheckStuck();
    }

    public void PassCheckpoint(Checkpoint checkpoint)
    {
        if (checkpoint.Index != NextCheckpoint)
        {
            return;     // passed already, or out of order
        }
        lastCheckpoint = checkpoint;
        NextCheckpoint = (NextCheckpoint + 1) % checkpoints.Length;
    }

    public void CompleteLap()
    {
        float time = CurrentLapTime;
        lapTimes.Add(time);
        LapCompleted?.Invoke(Lap, time);
        Lap++;
        lapStartTime = Time.time;
    }

    // Back to the last checkpoint passed, facing the way to go.
    public void BackToTrack()
    {
        Transform point = lastCheckpoint.RespawnPoint;
        kart.PlaceAt(point.position + Vector3.up * RespawnHeight, point.rotation);
        stuckTime = 0f;
    }

    void CheckStuck()
    {
        if (transform.position.y < lastCheckpoint.RespawnPoint.position.y - FallDepth)
        {
            BackToTrack();      // fallen off the world: no need to wait
            return;
        }

        bool isUpsideDown = transform.up.y < UpsideDown;
        bool isPushing = kart.Driver != null && kart.Driver.Throttle > StuckThrottle;
        bool isStuck = isPushing && Mathf.Abs(kart.Speed) < StuckSpeed;
        if (isUpsideDown || isStuck)
        {
            stuckTime += Time.deltaTime;
            if (stuckTime > StuckTime)
            {
                BackToTrack();
            }
        }
        else
        {
            stuckTime = 0f;
        }
    }
}
```

`readonly` means the field always holds this one list: the list's contents change, but
nobody can swap in another list. `IReadOnlyList<float>` lets other scripts read the
times, count them and loop over them, but not add or remove any: only the `Racer` decides
what a lap time is. `BestLap` starts at 0, which means "no lap yet", and keeps the
smallest time it finds.

7. Show the best lap too. In `LapLog.cs`, change the log line:

```csharp
using UnityEngine;

// A stand-in for the HUD, until Chapter 9: writes each lap's time in the
// Console when the kart's Racer says a lap is done.
public class LapLog : MonoBehaviour
{
    [SerializeField] Racer racer;

    void OnEnable()
    {
        racer.LapCompleted += OnLapCompleted;
    }

    void OnDisable()
    {
        racer.LapCompleted -= OnLapCompleted;
    }

    void OnLapCompleted(int lap, float time)
    {
        Debug.Log($"Lap {lap}: {time:F2} s (best {racer.BestLap:F2} s of {racer.LapTimes.Count})");
    }
}
```

### Test it

- In the Scene view, the line is a cyan loop. Select `Racing Line` and change its
  **Colour** and **Point Size** in the Inspector: the gizmos change at once, even while
  not playing.
- Press **Play** and drive three laps: `Lap 3: 31.05 s (best 30.62 s of 3)`.
- In `LapLog`'s `OnLapCompleted`, try adding `racer.LapTimes.Add(1f);`. The Console
  says `IReadOnlyList<float>` has no `Add`: the list is safe from other scripts. Delete
  the line.

### Commit

*Add the racing line and lap times.* Push.

### Challenge

The racing line runs down the middle of the road. A real racing line doesn't: it comes
into a corner wide, cuts the inside, and goes out wide. Move Corner 1's two points 2 m
towards the inside of the curve (towards its centre at `(100, −17.5)`). Chapter 8's
drivers will take it faster. (And if they start hitting the inside bank, move them back.)

## C# 8 — Interfaces

**Goal:** you can declare an interface, implement several in a class, talk to unrelated
objects through one (with `GetComponent` too), use Unity's UI interfaces for clicks and
drags, and choose between an interface and a base class (Associate: Programming —
inheritance vs. interfaces).

### Idea — a contract: what, not how

A player, a crate and a familiar can all be hurt, and share nothing else. A base class
would be wrong: a crate isn't a kind of player, and a component's one base class is
already `MonoBehaviour`. They share a **capability**, and an **interface** describes one:
a list of members a class promises to have. It says **what** it can do, never **how**.

```csharp
// Anything that can be hurt. Each class decides what being hurt means.
public interface IDamageable
{
    int Health { get; }

    void TakeDamage(int amount);
}
```

- Its name starts with `I` and names a capability: `IDamageable`, `IUpgradable`.
- Members have no body, only a `;`, and no access word: they're all `public`.
- No fields, and no `new` (CS0144), as with an abstract class (C# 6).

### Idea — implementing one interface, or several

List the interface after the colon, after the base class, and write every member it
asks for, `public`, with the same name and types:

```csharp
public class Crate : MonoBehaviour, IDamageable
{
    [SerializeField] int health = 2;

    public int Health { get { return health; } }

    public void TakeDamage(int amount)
    {
        health -= amount;
        if (health <= 0)
        {
            Debug.Log("The crate breaks.");
            Destroy(gameObject);
        }
    }
}
```

There's no `override`: an interface has nothing to replace. Leave `TakeDamage` out, and
the class doesn't compile:

```csharp
public class Crate : MonoBehaviour, IDamageable
{
    // … Health, but no TakeDamage …
}
// error CS0535: 'Crate' does not implement interface member 'IDamageable.TakeDamage(int)'
```

A class has one base class, but as many interfaces as it needs, separated by commas.
The player can be hurt **and** healed; a crate can't be healed:

```csharp
// Anything that can be healed.
public interface IHealable
{
    void Heal(int amount);
}
```

```csharp
public class PlayerHealth : MonoBehaviour, IDamageable, IHealable
{
    [SerializeField] int health = 5;

    public int Health { get { return health; } }

    public void TakeDamage(int amount)
    {
        health -= amount;
        Debug.Log($"Player: {health} left");
    }

    public void Heal(int amount)
    {
        health += amount;
    }
}
```

### Idea — one type for unrelated classes

A variable, a parameter or a list can have an interface type: it holds any object whose
class implements it. `Blast` hurts whatever it's given, without asking what it got. With
a player and a crate dragged into the fields:

```csharp
[SerializeField] int blastDamage = 2;
[SerializeField] PlayerHealth player;
[SerializeField] Crate crate;

void Start()
{
    Blast(player);
    Blast(crate);
}

void Blast(IDamageable target)
{
    target.TakeDamage(blastDamage);
}
```

```
Player: 3 left
The crate breaks.
```

Two unrelated classes, one method. A familiar or a door can be blasted too, once it
implements `IDamageable`, and `Blast` doesn't change; a `List<IDamageable>` holds them all.

### Idea — GetComponent with an interface

`GetComponent` takes an interface type, and returns whichever component implements it,
or `null` if none does. Spikes can hurt anything that can be hurt:

```csharp
public class Spikes : MonoBehaviour
{
    [SerializeField] int damage = 1;

    void OnTriggerEnter2D(Collider2D other)
    {
        IDamageable target = other.GetComponent<IDamageable>();
        if (target != null)
        {
            target.TakeDamage(damage);
        }
    }
}
```

| Call | Looks on | Use it when |
| --- | --- | --- |
| `GetComponent<IDamageable>()` | this GameObject only | the script is on the object that was hit |
| `GetComponentInParent<IDamageable>()` | this GameObject, then its parent, and on up | the collider is on a child, such as a kart's body, or a card is dropped on a portrait inside a panel |

### Idea — the Inspector can't show an interface field

`[SerializeField] IDamageable target;` compiles, but no field appears in the Inspector:
Unity can't save a reference of an interface type. Either keep a `GameObject` field
and ask it with `GetComponent<IDamageable>()`, or keep a `MonoBehaviour` field, drag
the script into it, and check it with `is`:

```csharp
[SerializeField] MonoBehaviour targetScript;    // drag in any script that's an IDamageable

IDamageable target;

void Awake()
{
    if (targetScript is IDamageable damageable)
    {
        target = damageable;
    }
    else
    {
        Debug.LogError("Target Script must be something that can be hurt.", this);
    }
}
```

### Idea — Unity's own interfaces: clicks and drags

Unity uses interfaces too. The **EventSystem** watches the mouse and touches, and calls
these methods on the UI object under the pointer, if its script implements them:

| Interface | Method you write | Called when the pointer… |
| --- | --- | --- |
| `IPointerClickHandler` | `OnPointerClick(PointerEventData eventData)` | presses and lets go on it |
| `IPointerEnterHandler` | `OnPointerEnter(PointerEventData eventData)` | moves onto it |
| `IPointerExitHandler` | `OnPointerExit(PointerEventData eventData)` | moves off it |
| `IBeginDragHandler` | `OnBeginDrag(PointerEventData eventData)` | starts dragging it |
| `IDragHandler` | `OnDrag(PointerEventData eventData)` | moves, while dragging (every frame) |
| `IEndDragHandler` | `OnEndDrag(PointerEventData eventData)` | lets go after a drag |

```csharp
using UnityEngine;
using UnityEngine.EventSystems;

// Put it on a UI Image to drag it around a Screen Space - Overlay canvas.
public class DragMe : MonoBehaviour, IBeginDragHandler, IDragHandler, IEndDragHandler
{
    public void OnBeginDrag(PointerEventData eventData)
    {
        Debug.Log("Picked up");
    }

    public void OnDrag(PointerEventData eventData)
    {
        transform.position = eventData.position;    // on an Overlay canvas, the pointer's pixels
    }

    public void OnEndDrag(PointerEventData eventData)
    {
        Debug.Log("Dropped");
    }
}
```

Nobody subscribes: the EventSystem only knows "an `IDragHandler`", and your class is one.
The scene needs an **EventSystem** (Unity adds one with the first Canvas), and the object
a **Graphic** (an Image or a text) with **Raycast Target** ticked. Outside a Canvas, a
sprite or 3D object needs a collider, and a **Physics 2D Raycaster** or **Physics
Raycaster** on the camera.

> **Watch out:** an object with `IBeginDragHandler` but no `IDragHandler` never gets
> `OnBeginDrag`: Unity only starts a drag on something that can be dragged.

### Idea — interface or base class?

| | Base class | Interface |
| --- | --- | --- |
| Says | "is a": a turbo kart **is a** kart | "can do": a crate **can be** hurt |
| Shares code | yes: fields, and methods with bodies | no: only the promise of members |
| How many a class can have | one | as many as it needs |
| With `MonoBehaviour` | only if the base class is built on it | always: list it after `MonoBehaviour` |

| Situation | Choose | Why |
| --- | --- | --- |
| attack, heal and shield cards, each with a name, a cost and art | base class `Card` | kinds of one thing, sharing fields |
| karts and trucks that drive and have a top speed | base class `Vehicle` | kinds of one thing, sharing code |
| a player, a crate and a familiar that can be hurt | interface `IDamageable` | unrelated; they share only the capability |
| a juice stand and a delivery van that can both be upgraded | interface `IUpgradable` | unrelated, and each upgrades differently |
| a person and the computer, both taking turns | interface `ITurnTaker` | no shared code: one reads input, one thinks |
| a UI image that reacts to a click | Unity's `IPointerClickHandler` | the EventSystem looks for the interface |
| slimes and bats, which can also be hurt by spikes | both: `Enemy : MonoBehaviour, IDamageable` | they mix: every kind of `Enemy` is then an `IDamageable` too |

### Do it

1. Make `IDamageable`, `Crate`, `PlayerHealth` and `Spikes` that hurt both. Then take
   `TakeDamage` out of `Crate`, and read CS0535.
2. Write a `Familiar`, a plain class that's an `IDamageable`, and `Blast` one.
3. Add `[SerializeField] IDamageable target;` to a script and look in the Inspector.
   Then change it to the `MonoBehaviour` field checked with `is`.
4. Put `DragMe` on a UI Image and drag it. Untick **Raycast Target**: what changes? Tick
   it, and take `IDragHandler` off the class: what changes now?
5. Make the image grow while the pointer is over it, with two more interfaces.

### Challenge

Make an `IInteractable` with `void Interact()`, for a door that opens, a chest that gives
a coin and a juice stand that sells a cup. When the player presses **E**, raycast ahead,
find an `IInteractable` with `GetComponentInParent`, and call it. Then add a locked chest:
should it share a base class with the chest, an interface, or both? Why?

## Chapter 8 — Drivers

**Goal:** three computer karts racing round Meadow Loop with you, each following the
racing line in its own lane and slowing down for the corners. One `KartController` for
every kart; what changes is who's driving it.

### Idea — a kart takes any driver

Look at what the kart needs from its driver: two numbers, steer and throttle. It doesn't
care where they come from. Today `KartController` has a `PlayerDriver` field, so only a
`PlayerDriver` can drive it. A computer driver would need a second field, and a check of
which one is there, in every method that reads them.

C# 8 has the answer: say **what** a driver must do, not **who** it is. An
interface, `IKartInput`, promises `Steer` and `Throttle`. `PlayerDriver` keeps that
promise by reading the keys; `AIDriver` keeps it by following the racing line. The kart
holds an `IKartInput`, and never asks which one it has.

```
            IKartInput  ── Steer, Throttle
           ┌────┴─────┐
   PlayerDriver    AIDriver
   (the keys)      (the racing line)
           └────┬─────┘
        KartController.Driver   ── reads them every physics step
```

One catch: Unity's Inspector can't show an interface field, so you can't drag a driver
into the kart any more. The driver is **plugged in from code**: `kart.Driver = this`.
Until Chapter 9's Race Manager does it for every kart, each driver plugs itself in, in
`Start`.

**The computer's driving.** `AIDriver` aims at the next point of its queue, from
Chapter 7's `RacingLine`. It steers by how far off course it is: 30° off is full steer.
Within 5 m of the point, it sends it to the back of the queue and aims at the next. It
looks three points ahead for a corner: the sharper the corner, the slower it wants to
go, and if it's too fast it **eases off**, asking the kart for very little throttle. And
each computer driver drives in its own **lane**, a metre or so to one side of the line,
so they don't drive in single file.

### Do it — the interface

1. In `Scripts/Karts`, make `IKartInput.cs`:

```csharp
// What a kart needs from whoever drives it, a person or the computer: which
// way to steer and how much throttle. The kart reads these every physics step
// and never asks who is behind them.
public interface IKartInput
{
    float Steer { get; }        // -1 full left, 1 full right
    float Throttle { get; }     // 1 full throttle, -1 brake, then reverse
}
```

2. The kart holds any `IKartInput`. Replace `KartController.cs`:

```csharp
using UnityEngine;

// How a kart drives, version 0.1: a Rigidbody box pushed along by forces. The
// throttle pushes it along its nose, up to its top speed; steering turns it;
// grip stops most of its sliding sideways, as tyres would. Whoever drives it,
// a person or the computer, plugs in through Driver. With no driver, the kart
// stands still.
[RequireComponent(typeof(Rigidbody))]
public class KartController : MonoBehaviour
{
    [SerializeField] KartStats stats;

    Rigidbody body;

    // Who drives: the player's PlayerDriver or a rival's AIDriver. Unity can't
    // show an interface in the Inspector, so the driver is plugged in from code.
    public IKartInput Driver { get; set; }
    public KartStats Stats { get { return stats; } }
    public float Speed { get; private set; }        // forwards, in metres a second: negative in reverse

    void Awake()
    {
        body = GetComponent<Rigidbody>();
        body.mass = stats.Mass;
    }

    void FixedUpdate()
    {
        Speed = Vector3.Dot(body.linearVelocity, transform.forward);
        if (Driver == null)
        {
            return;     // nobody's driving: no throttle, no steering
        }
        Drive(Driver.Throttle);
        Turn(Driver.Steer);
        Grip();
    }

    // Puts the kart down here, still: back on the track.
    public void PlaceAt(Vector3 position, Quaternion rotation)
    {
        transform.SetPositionAndRotation(position, rotation);
        body.position = position;
        body.rotation = rotation;
        body.linearVelocity = Vector3.zero;
        body.angularVelocity = Vector3.zero;
    }

    // Speeds up, or slows down, towards the speed the throttle asks for: full
    // throttle asks for the top speed, none for a stop, and full brake for the
    // top speed backwards. Never more than the acceleration allows in a step.
    void Drive(float throttle)
    {
        float wanted = throttle * stats.TopSpeed;
        float most = stats.Acceleration * Time.fixedDeltaTime;
        float change = Mathf.Clamp(wanted - Speed, -most, most);
        body.AddForce(transform.forward * change, ForceMode.VelocityChange);
    }

    // Spins the kart at the turn rate the steering asks for: the push is the
    // difference between that spin and the spin it has.
    void Turn(float steer)
    {
        float wantedSpin = steer * stats.TurnRate * Mathf.Deg2Rad;     // radians a second
        float spin = Vector3.Dot(body.angularVelocity, transform.up);
        body.AddTorque(transform.up * (wantedSpin - spin), ForceMode.VelocityChange);
    }

    // Grip: takes away part of the sideways speed every step, as tyres do.
    void Grip()
    {
        float sliding = Vector3.Dot(body.linearVelocity, transform.right);
        float share = Mathf.Min(1f, stats.Grip * Time.fixedDeltaTime);
        body.AddForce(-transform.right * sliding * share, ForceMode.VelocityChange);
    }
}
```

`Driver` is now a property with a public `set`: anyone may plug a driver in. `Racer`'s
stuck check, `kart.Driver.Throttle`, still compiles: it never cared which kind of driver
it was either.

3. `PlayerDriver` keeps the promise, and plugs itself into its kart. Replace
   `PlayerDriver.cs`:

```csharp
using UnityEngine;
using UnityEngine.InputSystem;

// The player's hands on the wheel: the Drive map's actions, read as an
// IKartInput. Keys and a gamepad both reach it through the same actions.
// Until the race exists (Chapter 9), it plugs itself into its kart in Start.
public class PlayerDriver : MonoBehaviour, IKartInput
{
    [SerializeField] InputActionReference steerAction;
    [SerializeField] InputActionReference throttleAction;
    [SerializeField] InputActionReference backToTrackAction;
    [SerializeField] Racer racer;       // the kart this driver drives, for Back to the track

    public float Steer { get { return steerAction.action.ReadValue<float>(); } }
    public float Throttle { get { return throttleAction.action.ReadValue<float>(); } }

    void OnEnable()
    {
        steerAction.action.actionMap.Enable();      // nothing reads until the map is on
        backToTrackAction.action.performed += OnBackToTrack;
    }

    void OnDisable()
    {
        steerAction.action.actionMap.Disable();
        backToTrackAction.action.performed -= OnBackToTrack;
    }

    void Start()
    {
        Drive(racer);
    }

    public void Drive(Racer kart)
    {
        racer = kart;
        racer.Kart.Driver = this;
    }

    void OnBackToTrack(InputAction.CallbackContext context)
    {
        if (racer != null)
        {
            racer.BackToTrack();
        }
    }
}
```

`: MonoBehaviour, IKartInput` reads "is a MonoBehaviour, and keeps the IKartInput
promise". Its `Steer` and `Throttle` were already there: the interface only made the
promise official. `Drive` is how a driver takes a kart: Chapter 9's Race Manager will
call it.

### Do it — the computer driver

4. In `Scripts/Karts`, make `AIDriver.cs`:

```csharp
using System.Collections.Generic;
using UnityEngine;

// The computer's hands on the wheel. It drives at the racing line's next point,
// kept in a Queue: it steers at Peek(), and when it gets there, Enqueue(Dequeue())
// sends that point to the back of the queue, ready for the next lap. It slows
// down before corners. Its skill says how hard it pushes. Until the race
// exists (Chapter 9), it plugs itself into its kart in Start.
[RequireComponent(typeof(KartController))]
public class AIDriver : MonoBehaviour, IKartInput
{
    const float ReachDistance = 5f;         // metres: close enough to a point to aim at the next one
    const float FullSteerAngle = 30f;       // degrees off course that need full steer
    const int CornerLookAhead = 3;          // how many points ahead it looks for a corner
    const float SharpCorner = 30f;          // degrees
    const float GentleCorner = 15f;
    const float SharpCornerSpeed = 12f;     // metres a second
    const float GentleCornerSpeed = 16f;
    const float EaseOffThrottle = 0.1f;     // over the speed it wants, it lifts off to this

    [SerializeField] RacingLine racingLine;
    [SerializeField] float skill = 1f;
    [SerializeField] float laneOffset;      // metres to the right of the line, so rivals don't all drive in one file

    KartController kart;
    Queue<Transform> line;

    public float Steer { get; private set; }
    public float Throttle { get; private set; }

    void Awake()
    {
        kart = GetComponent<KartController>();
    }

    void Start()
    {
        line = racingLine.QueueFrom(transform.position);
        kart.Driver = this;
    }

    void FixedUpdate()
    {
        if (line == null)
        {
            return;
        }

        Vector3 toAim = Flat(AimPoint() - transform.position);
        if (toAim.magnitude < ReachDistance)
        {
            line.Enqueue(line.Dequeue());       // this point is reached: it goes to the back, for the next lap
            toAim = Flat(AimPoint() - transform.position);
        }

        float offCourse = Vector3.SignedAngle(Flat(transform.forward), toAim, Vector3.up);
        Steer = Mathf.Clamp(offCourse / FullSteerAngle, -1f, 1f);

        float corner = CornerAhead();
        float wantedSpeed = float.MaxValue;
        if (corner > SharpCorner)
        {
            wantedSpeed = SharpCornerSpeed * skill;
        }
        else if (corner > GentleCorner)
        {
            wantedSpeed = GentleCornerSpeed * skill;
        }
        Throttle = kart.Speed > wantedSpeed ? EaseOffThrottle : skill;
    }

    // The next point, moved sideways into this driver's lane. Sideways is
    // worked out from the line itself, so the points needn't be rotated.
    Vector3 AimPoint()
    {
        Vector3 point = line.Peek().position;
        Vector3 along = Flat(PointAhead(1).position - point).normalized;
        Vector3 right = Vector3.Cross(Vector3.up, along);
        return point + right * laneOffset;
    }

    // How sharp the corner ahead is: the angle between where the kart is going
    // and a point a few points down the line.
    float CornerAhead()
    {
        Transform ahead = PointAhead(CornerLookAhead);
        return Mathf.Abs(Vector3.SignedAngle(Flat(transform.forward), Flat(ahead.position - transform.position), Vector3.up));
    }

    // A queue has no index, so walk along it with foreach to the point wanted.
    Transform PointAhead(int count)
    {
        int i = 0;
        foreach (Transform point in line)
        {
            if (i == count)
            {
                return point;
            }
            i++;
        }
        return line.Peek();
    }

    static Vector3 Flat(Vector3 direction)
    {
        direction.y = 0f;
        return direction;
    }
}
```

Three things to read slowly:

- `Vector3.SignedAngle(from, to, Vector3.up)` is how far, in degrees, you'd turn round
  the up axis to face from one direction to the other: negative to the left, positive to
  the right. Divided by 30 and clamped, it's the steering.
- `Flat` takes the height out of a direction, so a point on a hill or a kart on a bump
  doesn't change the steering.
- `PointAhead` can't write `line[3]`: a queue has no index. It walks along with `foreach`,
  which reads a queue front to back without changing it.

### Do it — the rivals

5. Drag three karts onto the start grid, behind and beside yours, all facing along the
   road, Rotation `(0, 90, 0)`:

| Kart | Prefab | Position | Skill | Lane Offset |
| --- | --- | --- | --- | --- |
| `Zip` | Speedy Kart | (17, 1, −1.7) | 0.97 | −1 |
| `Moss` | Heavy Kart | (21.5, 1, 1.7) | 0.93 | 1 |
| `Pebble` | Balanced Kart | (21.5, 1, −1.7) | 0.9 | 0 |

6. Add **AIDriver** to each of the three (to the karts in the scene, not the prefabs: your
   kart has no AIDriver), drag `Racing Line` into its **Racing Line**, and set its
   **Skill** and **Lane Offset** from the table. Skill 0.9 means it asks for 90% of its
   kart's top speed, and a little slower round the corners.
7. Each kart's **Racer** needs the checkpoints too. On your `Balanced Kart`, right-click
   the **Racer** component's title → **Copy Component**. Then on each rival, right-click
   its Racer → **Paste Component Values**: the same twelve checkpoints, in the same
   order.

### Test it

- Press **Play**. The three rivals pull away from the grid and follow the line round the
  track, each in its own lane; they slow down for the corners and the chicane. Race them.
- **The kart takes any driver.** Stop. Switch off the `Player Driver` GameObject, and add
  an **AIDriver** to your own `Balanced Kart`, with the Racing Line, Skill 1, Lane Offset
  0. Press Play: your kart drives itself. `KartController` didn't change at all. Then
  remove that AIDriver and switch `Player Driver` back on.

### Commit

*Add the computer drivers.* Push.

### Challenge

Give `Moss`, the Heavy Kart, a Lane Offset of `3`. What happens on the corners? Then make
`Zip` a show-off: Skill `1.1`. Is it faster, or does it miss corners? Why? (Look at
`wantedSpeed` and `Throttle`.) Put both back.

## C# 9 — UI in Depth

**Goal:** you can build a screen that fits every shape, from a wide phone to a tablet, with
the Canvas Scaler, anchors, pivots, layout groups and a scrolling list, and keep it up to
date without wasted work (Associate: UI — lay out UI with anchors, pivots and groups;
display data in UI elements).

### Idea — the Canvas's three render modes

| **Render Mode** | Drawn | Use it for |
| --- | --- | --- |
| **Screen Space - Overlay** | on top of everything, after the cameras have drawn | most menus and HUDs |
| **Screen Space - Camera** | by a camera, on a flat sheet **Plane Distance** in front of it | UI that effects must draw in front of |
| **World Space** | as an object in the world, with its own position, rotation and scale | a health bar over a kart, a price sign on a stand |

Nothing can be in front of an Overlay Canvas: sparks from a played card, or coins
bursting out of a juice stand, vanish behind the UI. In **Screen Space - Camera**, with
**Render Camera** set to the Main Camera, the Canvas sorts with everything that camera
draws, by **Sorting Layer** and **Order in Layer** like a sprite: give the effect a higher
**Order in Layer** (in its **Renderer** module) and it draws in front. With no camera, the
Inspector says "A Screen Space Canvas with no specified camera acts like an Overlay Canvas."

### Idea — the Canvas Scaler

On the Canvas, the **Canvas Scaler** decides how big the UI is on each screen:

| Setting | Set it to | Means |
| --- | --- | --- |
| **UI Scale Mode** | **Scale With Screen Size** | the UI grows and shrinks with the screen |
| **Reference Resolution** | 1920 × 1080 | the space you design in |
| **Screen Match Mode** | **Match Width Or Height** | what to keep when the screen isn't 16:9… |
| **Match** | 0.5 | …0 keeps the width, 1 the height, 0.5 meets halfway |

A screen of another shape can't keep both 1920 and 1080. Here is the space, in UI units,
that your Canvas really has on three shapes:

| Screen | Match 0 | Match 0.5 | Match 1 |
| --- | --- | --- | --- |
| 16:9 monitor | 1920 × 1080 | 1920 × 1080 | 1920 × 1080 |
| 20:9 phone | 1920 × 864 | 2147 × 966 | 2400 × 1080 |
| 4:3 tablet | 1920 × 1440 | 1663 × 1247 | 1440 × 1080 |

At 0.5 the phone is **wider and a little shorter** than your design: what's anchored to
the sides moves outwards, and a column that filled 1080 loses 114 units. The tablet is
**narrower and taller**: side panels move inwards, and a row of buttons 1800 wide no
longer fits. Keep what must always show inside about 1660 × 960 in the middle, and anchor the
rest to the edges.

> **Note:** phones also have notches and rounded corners. uGUI 2.6's **Safe Area**
> component (**Add Component → UI (Canvas) → Safe Area**) shrinks a panel to the part of
> the screen that's safe to use.

### Idea — anchors: a point or a stretch

A Rect Transform's **anchors** are two points, **Min** and **Max**, given as fractions of
the parent: (0, 0) is its bottom-left corner, (1, 1) its top-right.

| Anchors | The element | The Rect Transform shows |
| --- | --- | --- |
| together: a **point** (Min = Max) | keeps its distance from that point, and its size | **Pos X**, **Pos Y**, **Width**, **Height** |
| apart across: a **stretch** | stretches with the parent's width | **Left** and **Right**, instead of Pos X and Width |
| apart up and down | stretches with the parent's height | **Top** and **Bottom**, instead of Pos Y and Height |

Left, Right, Top and Bottom are **offsets**, from each edge to its anchor: a top bar
stretched across, with Left and Right at 20, is 20 units from both sides on any screen.
In code they're `offsetMin` and `offsetMax`; a point's `anchoredPosition` and `sizeDelta`.

The **anchor presets** (the square at the top left of the Rect Transform) set common
anchors in one click. Hold **Shift** to set the pivot too, and **Alt** (**Option** on a
Mac) to move the element there as well.

### Idea — pivots: where it grows from

The **pivot** is the point an element rotates and scales around, from (0, 0), its
bottom-left corner, to (1, 1). A row of buttons along the bottom of a menu, each growing
when the pointer is over it, shows why it matters: with the pivot in the middle,
(0.5, 0.5), a button grows downwards too, off the bottom of the screen. With the pivot on
its bottom edge, (0.5, 0), the bottom stays put and the button grows upwards.

```csharp
using UnityEngine;

// Pointer Enter and Pointer Exit in an Event Trigger call these. The button grows
// from its pivot: put the pivot at (0.5, 0) and it grows upwards, away from the
// screen's edge.
public class HoverGrow : MonoBehaviour
{
    const float HoverScale = 1.2f;

    public void Grow()
    {
        transform.localScale = Vector3.one * HoverScale;
    }

    public void Shrink()
    {
        transform.localScale = Vector3.one;
    }
}
```

A layout group ignores its children's scale (unless **Use Child Scale** is ticked), so a
growing button doesn't push its neighbours. C# 8 shows a way to do it with no
Event Trigger.

### Idea — layout groups

Put a layout group on a parent, and it places the children for you, in their order in the
Hierarchy: a **Horizontal Layout Group** in a row, a **Vertical Layout Group** in a
column, a **Grid Layout Group** in rows and columns of equal cells.

| Setting | Does |
| --- | --- |
| **Padding** | space inside the parent's edges: Left, Right, Top, Bottom |
| **Spacing** | the gap between children; negative, and they overlap |
| **Child Alignment** | where the children sit when they don't fill the parent, such as **Lower Center** |
| **Control Child Size** | the group sets the children's width or height, from their Layout Elements |
| **Child Force Expand** | spare space is shared out between the children |
| **Cell Size**, **Constraint** (Grid only) | every cell's size; **Fixed Column Count** keeps, say, 5 per row |

A row of buttons is a Horizontal Layout Group, a shop's list of upgrades a Vertical one,
a deck builder's collection of cards a Grid. The group owns its children's positions: their Rect Transform
fields go grey and say they're driven by it, so don't set them from code either.

Two more components fine-tune a layout:

- A **Layout Element**, on a child, tells the group about it: **Ignore Layout** leaves it
  out altogether (a glow behind the chosen button), and **Min**, **Preferred** and
  **Flexible** **Width** and **Height** say what size it wants when the group controls it.
- A **Content Size Fitter**, on the parent, resizes the parent to fit what's inside:
  **Vertical Fit: Preferred Size** makes a list exactly as tall as its rows.

### Idea — a list that scrolls

**GameObject → UI (Canvas) → Scroll View** makes a ready-made list:

| Object | Has | Does |
| --- | --- | --- |
| `Scroll View` | **Scroll Rect** | moves the content when you drag or scroll |
| `Viewport` | **Mask** and an Image | the window: content outside it is hidden |
| `Content` | (you add the layout) | the long list that moves |

For a vertical list, untick the Scroll Rect's **Horizontal**, and give `Content` a
**Vertical Layout Group** and a **Content Size Fitter** (**Vertical Fit: Preferred
Size**). Each row you add makes `Content` taller, and the scroll range follows. On the
`Viewport`, you can swap the Mask and its Image for a **Rect Mask 2D**: it clips to a
rectangle without an Image, and costs less.

### Idea — nested Canvases

Unity rebuilds a Canvas's drawing whenever anything in it changes, so a timer that changes
every frame rebuilds the whole screen around it every frame. Give the part that changes
often its own **Canvas** component (a **nested Canvas**): its changes rebuild only it. If
it has buttons, give it a **Graphic Raycaster** too. Split by how often things change: a
Canvas for every element costs more, not less.

### Idea — showing data only when it changes

Setting `text` in `Update` makes a new string and rebuilds the Canvas sixty times a second,
even when the number is the same. Set it when the value changes instead:

```csharp
using TMPro;
using UnityEngine;
using UnityEngine.UI;

// A juice stand's stock, as a number and a bar. The stand calls Show when its
// stock changes; nothing here runs every frame.
public class StockDisplay : MonoBehaviour
{
    [SerializeField] TMP_Text stockText;
    [SerializeField] Image stockBar;        // Image Type: Filled

    public void Show(int stock, int capacity)
    {
        stockText.text = $"{stock} / {capacity}";
        stockBar.fillAmount = (float)stock / capacity;
    }
}
```

When you must check every frame, compare with what's on screen first. A race clock
changes its text once a second, not sixty times:

```csharp
[SerializeField] TMP_Text clockText;

float raceTime;
int shownSeconds = -1;

void Update()
{
    raceTime += Time.deltaTime;
    int seconds = Mathf.FloorToInt(raceTime);
    if (seconds != shownSeconds)
    {
        shownSeconds = seconds;
        clockText.text = $"{seconds / 60}:{seconds % 60:00}";
    }
}
```

Layout settings can change from code too. A row of item icons that overlaps them once it
holds more than five, so it never grows wider:

```csharp
const int MaxIconsSideBySide = 5;
const float NormalSpacing = 10f;
const float OverlapSpacing = -30f;

[SerializeField] HorizontalLayoutGroup itemRow;

void ArrangeItems(int itemCount)
{
    itemRow.spacing = itemCount > MaxIconsSideBySide ? OverlapSpacing : NormalSpacing;
}
```

### Idea — Image types

| **Image Type** | Does | Use it for |
| --- | --- | --- |
| **Simple** | stretches the whole picture (tick **Preserve Aspect** to stop squashing) | icons, portraits |
| **Sliced** | a **9-slice**: corners keep their size, edges stretch one way, the middle both | panels, buttons and frames of any size, from one small sprite |
| **Tiled** | repeats the picture | patterns |
| **Filled** | shows part of it: **Fill Method**, **Fill Origin**, **Fill Amount** | bars, and round cooldowns with **Radial 360** |

A 9-slice needs the sprite's **border**: click **Open Sprite Editor** in the sprite's
Inspector, and drag the green lines in from each edge (or type **L**, **T**, **R**, **B**).
Without one, the Image's Inspector warns: "This Image doesn't have a border."

### Idea — test every shape

- **The Game view's aspect menu** (it starts as **Free Aspect**): try **16:9 Aspect** and
  **4:3 Aspect**, and add your own with **+**, such as an aspect ratio of 20 × 9.
- **The Device Simulator**: switch the Game view's **Game** menu to **Simulator** (or
  **Window → General → Device Simulator**), pick a phone and a tablet, and rotate them.
  It shows the notch and the safe area too.

On each: is anything cut off, overlapping, or too small to read or press?

### Do it

1. Set a Canvas's Canvas Scaler as above. Anchor a button to each corner, a bar
   stretched across the top, and a panel in the middle. Check 16:9, 4:3 and 20:9.
2. Make a row of five Images under a Horizontal Layout Group. Try **Spacing** −40,
   **Child Alignment** **Lower Center**, and **Child Force Expand** on and off.
3. Add `HoverGrow` to one Image, with an **Event Trigger** calling `Grow` and `Shrink`.
   Try its pivot at (0.5, 0.5), then at (0.5, 0).
4. Make a Scroll View with twenty rows in a Vertical Layout Group and a Content Size
   Fitter. Swap the Viewport's Mask for a Rect Mask 2D.
5. Make a panel from a small sprite with **Image Type: Sliced**, and give the sprite a
   border. Stretch the panel: the corners should stay sharp.

### Challenge

Build a shop screen: a title bar stretched across the top, a money counter anchored top
right, and a scrolling grid of items (a Grid Layout Group with **Fixed Column Count**)
that has three columns on a tablet and four on a phone. Set the count from code when the
screen starts, from the Canvas's width in UI units: its Rect Transform's `rect.width`.

## Chapter 9 — The Race

**Goal:** a real race. Three lights count down, then four karts leave the grid: yours at
the back, and three rivals, each in its own colour. Your place, lap, time, best lap and
speed are on the screen, and *Wrong way!* if you turn round. Finish three laps, and the
screen says where you came.

### Idea — the race is a state machine

A race goes through four **states**, one after another, and does different things in
each. That's a state machine with an `enum` and a `switch`, as in Level 3:

| State | What happens | Ends when |
| --- | --- | --- |
| `Countdown` | the karts sit on the grid; no drivers yet | the lights go green |
| `Racing` | the clock runs; the drivers drive; the standings are sorted | you cross the line on your last lap |
| `Finishing` | you're home; the others have 15 seconds | they've all finished, or the time's up |
| `Over` | the final standings | (the Results screen, in Chapter 12) |

A new script, `RaceManager`, runs it. It also **spawns** the karts: no more karts placed
by hand. It makes them from the kart prefabs on a **start grid**, sets each one up with
the checkpoints, and when the lights go green plugs a driver into each: the Player Driver
into yours, a new `AIDriver` into each rival.

**Who's ahead?** The standings are a `List`, sorted four times a second. Sorting needs a
rule for "which of these two comes first", and `List.Sort` takes that rule as a
**lambda**, a small function written in place (C# 4 showed lambdas as
listeners; here's another use):

```csharp
standings.Sort((a, b) => RaceOrder(b).CompareTo(RaceOrder(a)));
```

Read it as: *to compare racers a and b, compare b's order with a's*, so the bigger order
comes first. `RaceOrder` turns a racer into one number: laps, plus checkpoints passed
this lap, plus how far it is to the next one. Two karts on the same lap and the same
checkpoint are told apart by that last part.

**What's in the standings?** Not karts: **racers**. In Chapter 14 a ghost of your best
lap races too, and it isn't a kart: no engine, no driver. So the standings, the HUD and
the checkpoints only ask for what racing needs, through a new interface, `IRacer`: a
name, a lap, a next checkpoint, progress, finished or not. `Racer` keeps that promise
today; Chapter 14's ghost will too.

**The HUD** listens. When the race starts, it subscribes to your `Racer`'s events (a lap
done, finished) and shows the numbers that change all the time (time, speed, place) every
frame.

### Do it — racers, not karts

1. In `Scripts/Race`, make `IRacer.cs`:

```csharp:IRacer.cs
// Anything that races: a kart, or the ghost of your best lap. The standings,
// the HUD and the track's checkpoints only need these, so they take an IRacer
// and never ask which kind it is. A kart and a ghost share nothing else: one
// has an engine and a driver, the other replays a list.
public interface IRacer
{
    string RacerName { get; }
    int Lap { get; }                // the lap it's on, from 1
    int NextCheckpoint { get; }     // the checkpoint it must pass next: 0 is the finish line
    float Progress { get; }         // how far round the race it is: more is further ahead
    bool HasFinished { get; }
    float FinishTime { get; }       // the race's time when it crossed the line

    void PassCheckpoint(Checkpoint checkpoint);
    void CompleteLap();
}
```

2. The track's triggers only need an `IRacer`. `TrackTrigger`, `Checkpoint` and
   `FinishLine` change together: an override must match its base method exactly, so the
   Console shows errors until all three are saved. In `TrackTrigger.cs`, change the two
   `Racer`s to `IRacer`, and the comment:

<!-- check: together -->

```csharp
using UnityEngine;

// Something on the track that reacts when a racer drives through it: a
// checkpoint, the finish line, a boost pad, a patch of mud. Finding the racer
// is the same for all of them, so it's done once, here, and each kind says
// what it does in OnRacerEntered.
[RequireComponent(typeof(Collider))]
public abstract class TrackTrigger : MonoBehaviour
{
    void OnTriggerEnter(Collider other)
    {
        // The collider may be on a child of the racer, so look up the hierarchy.
        IRacer racer = other.GetComponentInParent<IRacer>();
        if (racer != null)
        {
            OnRacerEntered(racer);
        }
    }

    protected abstract void OnRacerEntered(IRacer racer);

    // Unity calls Reset when the component is added: a track trigger's
    // collider is always a trigger.
    void Reset()
    {
        GetComponent<Collider>().isTrigger = true;
    }
}
```

3. `Checkpoint` takes an `IRacer` too, and gets a **static** method: how far round the
   race a racer is, as one number. A kart and (later) a ghost work it out the same way,
   and it's about checkpoints, so it lives here. Replace `Checkpoint.cs`:

```csharp:Checkpoint.cs
using System.Collections.Generic;
using UnityEngine;

// A checkpoint: a trigger box across the road. A racer must pass every
// checkpoint, in order, for a lap to count; the finish line is checkpoint 0.
// Each has a respawn point just after it, facing the way to go: Back to the
// track puts a kart there.
public class Checkpoint : TrackTrigger
{
    [SerializeField] int index;
    [SerializeField] Transform respawnPoint;

    public int Index { get { return index; } }
    public Transform RespawnPoint { get { return respawnPoint; } }

    protected override void OnRacerEntered(IRacer racer)
    {
        racer.PassCheckpoint(this);
    }

    // How far round the race a racer is, as one number: a whole lap counts as
    // many checkpoints, each checkpoint passed this lap as one, and the way to
    // the next checkpoint as a share of one. More is further ahead. A kart and
    // a ghost both work it out the same way, so it lives here.
    public static float Progress(int lap, int nextCheckpoint, Vector3 position, IReadOnlyList<Checkpoint> checkpoints)
    {
        int count = checkpoints.Count;
        int passed = (nextCheckpoint + count - 1) % count;
        Vector3 from = checkpoints[passed].transform.position;
        Vector3 to = checkpoints[nextCheckpoint].transform.position;
        float gap = Vector3.Distance(from, to);
        float share = gap > 0f ? 1f - Vector3.Distance(position, to) / gap : 0f;
        return (lap - 1) * count + passed + Mathf.Clamp01(share);
    }
}
```

`Progress` counts each lap as all the checkpoints, adds the checkpoints passed this lap,
and then a share of the way to the next one: 0 right at the last checkpoint passed, 1
arriving at the next. `Mathf.Clamp01` keeps that share between 0 and 1.

4. And `FinishLine.cs`, the same change:

```csharp:FinishLine.cs
// The finish line. It is a checkpoint (number 0, the last one of every lap),
// so it extends Checkpoint and lets base pass it like any other. It also
// counts the lap, but only when every other checkpoint was passed first:
// cutting across the grass doesn't count.
public class FinishLine : Checkpoint
{
    protected override void OnRacerEntered(IRacer racer)
    {
        bool isLapDone = racer.NextCheckpoint == Index;     // the finish line is the one it was waiting for
        base.OnRacerEntered(racer);
        if (isLapDone)
        {
            racer.CompleteLap();
        }
    }
}
```

<!-- check: end -->

### Do it — the race's data

5. In `Scripts/Race`, make `TrackInfo.cs`, a ScriptableObject for a track. It grows in
   Chapter 12, when the menus need a track's scene and picture:

```csharp
using UnityEngine;

// One track: its name, how many laps, and how much harder its rivals push.
[CreateAssetMenu(fileName = "Track Info", menuName = "Pocket Karts/Track Info")]
public class TrackInfo : ScriptableObject
{
    [SerializeField] string displayName = "Meadow Loop";
    [SerializeField] int laps = 3;
    [SerializeField] float rivalSkillBonus;             // the later tracks' rivals push harder

    public string DisplayName { get { return displayName; } }
    public int Laps { get { return laps; } }
    public float RivalSkillBonus { get { return rivalSkillBonus; } }
}
```

6. In `Scripts/Race`, make `RivalProfile.cs`:

```csharp:RivalProfile.cs
using UnityEngine;

// A computer rival: its name, its kart, its colour and its skill. Skill, from
// 0 to 1, sets how hard it pushes the throttle and how fast it takes corners.
[CreateAssetMenu(fileName = "Rival", menuName = "Pocket Karts/Rival Profile")]
public class RivalProfile : ScriptableObject
{
    [SerializeField] string displayName = "Zip";
    [SerializeField] Racer kartPrefab;          // one of the three kart variants
    [SerializeField] Color colour = Color.yellow;
    [SerializeField, Range(0f, 1f)] float skill = 0.95f;

    public string DisplayName { get { return displayName; } }
    public Racer KartPrefab { get { return kartPrefab; } }
    public Color Colour { get { return colour; } }
    public float Skill { get { return skill; } }
}
```

`[SerializeField, Range(0f, 1f)]` puts two attributes on one field: the Inspector shows a
slider from 0 to 1.

7. In `Data`, make two folders, `Tracks` and `Rivals`. In `Tracks`, **Create → Pocket
   Karts → Track Info**: `Meadow Loop`, Display Name `Meadow Loop`, Laps `3`, Rival
   Skill Bonus `0`. In `Rivals`, three **Rival Profile**s:

| Asset | Display Name | Kart Prefab | Colour | Skill |
| --- | --- | --- | --- | --- |
| `Zip` | Zip | Speedy Kart | `FFD23F` (yellow) | 0.97 |
| `Moss` | Moss | Heavy Kart | `8E5BD9` (purple) | 0.93 |
| `Pebble` | Pebble | Balanced Kart | `FF8C42` (orange) | 0.9 |

### Do it — a rival's colours

8. In `Scripts/Karts`, make `KartPaint.cs`:

```csharp:KartPaint.cs
using UnityEngine;

// The kart's paint: the body parts that use the paint material. Each kart
// variant has its own paint (blue, red, green); a rival repaints its kart in
// its own colour when the race begins. Material copies are made only for the
// painted parts, and only once.
public class KartPaint : MonoBehaviour
{
    [SerializeField] Renderer[] bodyParts;
    [SerializeField] Material paint;            // the material the painted parts use

    public void Paint(Color colour)
    {
        Material fresh = new Material(paint);
        fresh.color = colour;
        foreach (Renderer part in bodyParts)
        {
            Material[] materials = part.sharedMaterials;
            for (int i = 0; i < materials.Length; i++)
            {
                if (materials[i] == paint)
                {
                    materials[i] = fresh;
                }
            }
            part.sharedMaterials = materials;
        }
    }
}
```

`new Material(paint)` makes a **copy** of the paint material. Changing the copy's colour
changes only this kart: change the shared `Speedy Paint` itself, and every Speedy Kart in
every scene would turn yellow, and stay yellow after Play, since a material is an asset.

9. Open `Prefabs/Kart`, add **KartPaint**, and set **Body Parts** to the two painted
   parts, `Body/object22` and `Body/object33`. Then in each variant, set **Paint** to
   its own paint material: `Balanced Paint`, `Speedy Paint`, `Heavy Paint`.

### Do it — the race

10. In `Scripts/UI`, make `TimeText.cs`, a **static** class: it holds no data, only ways
    to write times and places, for anyone to use.

```csharp
// Times as the game shows them: 1:12.40 (minutes, seconds, hundredths), or a
// dash for no time yet. The HUD uses it, and later the cards and the results.
public static class TimeText
{
    const int SecondsInMinute = 60;

    public static string Format(float seconds)
    {
        if (seconds <= 0f)
        {
            return "-:--.--";
        }
        int minutes = (int)(seconds / SecondsInMinute);
        float rest = seconds - minutes * SecondsInMinute;
        return $"{minutes}:{rest:00.00}";
    }

    // 1st, 2nd, 3rd, 4th.
    public static string Place(int place)
    {
        switch (place)
        {
            case 1: return "1st";
            case 2: return "2nd";
            case 3: return "3rd";
            default: return $"{place}th";
        }
    }
}
```

`{rest:00.00}` writes a number with at least two digits before the point and exactly two
after: `5.2` becomes `05.20`, so `1:05.20` lines up with `1:15.20`.

11. In `Scripts/Track`, make `StartGrid.cs`:

```csharp:StartGrid.cs
using UnityEngine;

// The start grid: four slots, two by two, just past the finish line, facing
// the way to go. The Race Manager puts a kart in each, the player at the back.
public class StartGrid : MonoBehaviour
{
    static readonly Vector3 KartSize = new Vector3(1.2f, 0.8f, 1.8f);   // metres, for the gizmo

    [SerializeField] Transform[] slots;

    public int SlotCount { get { return slots.Length; } }

    public Transform Slot(int index)
    {
        return slots[index];
    }

    void OnDrawGizmos()
    {
        Gizmos.color = Color.yellow;
        foreach (Transform slot in slots)
        {
            if (slot != null)
            {
                Gizmos.matrix = slot.localToWorldMatrix;
                Gizmos.DrawWireCube(Vector3.up * KartSize.y / 2f, KartSize);
            }
        }
        Gizmos.matrix = Matrix4x4.identity;
    }
}
```

`OnDrawGizmos` draws a yellow box the size of a kart at each slot, so you can see the
grid in the Scene view. `Gizmos.matrix` turns the drawing with the slot, so each box
faces the way the slot faces.

12. The next four scripts need each other: `RaceManager` sets up each `Racer`, its
    drivers and the camera, and a `Racer` reports to the `RaceManager`. The Console
    shows errors until all four are saved. First `Racer.cs`. What's new: it keeps the
    `IRacer` promise; it's set up by the Race Manager (no more checkpoint list in the
    Inspector) and times laps with the race's clock; it finishes after the last lap; it
    notices when it's going the wrong way; it raises `Finished` and `Respawned`; and
    if another kart sits on the respawn point, it puts the kart a step to one side.

<!-- check: together -->

```csharp
using System;
using System.Collections.Generic;
using UnityEngine;

// A kart in the race: its lap, the checkpoints it has passed, its lap times
// and its best lap. It puts the kart back on the track when it's stuck, upside
// down or has fallen off, and notices when it's going the wrong way. It raises
// events when something happens; the HUD, the Race Manager, the ghost recorder
// and the sounds listen.
[RequireComponent(typeof(KartController))]
public class Racer : MonoBehaviour, IRacer
{
    const float StuckSpeed = 1.5f;      // metres a second: slower than this is stuck...
    const float StuckThrottle = 0.5f;   // ...if the driver is pushing at least this hard
    const float StuckTime = 2.5f;       // seconds stuck, or upside down, before going back
    const float UpsideDown = 0.3f;      // the kart's up points this little upwards, or less
    const float FallDepth = 15f;        // metres below the last checkpoint: fallen off
    const float WrongWaySpeed = 3f;     // metres a second, away from the next checkpoint
    const float WrongWayTime = 1f;      // seconds of it before the HUD says so
    const float RespawnHeight = 0.6f;   // metres above the respawn point, dropped onto the road
    const float RespawnSideStep = 2.5f; // metres to the side, if another kart is on the respawn point
    static readonly Vector3 KartHalfSize = new Vector3(0.7f, 0.5f, 1.1f);

    readonly List<float> lapTimes = new List<float>();
    KartController kart;
    Rigidbody body;
    RaceManager race;
    IReadOnlyList<Checkpoint> checkpoints;
    Checkpoint lastCheckpoint;
    float lapStartTime;
    float stuckTime;
    float wrongWayTime;

    public string RacerName { get; private set; }
    public bool IsPlayer { get; private set; }
    public int Lap { get; private set; }
    public int NextCheckpoint { get; private set; }
    public bool HasFinished { get; private set; }
    public float FinishTime { get; private set; }
    public bool IsWrongWay { get; private set; }
    public KartController Kart { get { return kart; } }
    public IReadOnlyList<float> LapTimes { get { return lapTimes; } }
    public float CurrentLapTime { get { return race.RaceTime - lapStartTime; } }

    public float Progress
    {
        get { return Checkpoint.Progress(Lap, NextCheckpoint, transform.position, checkpoints); }
    }

    // The fastest lap so far, or 0 before the first one.
    public float BestLap
    {
        get
        {
            float best = 0f;
            foreach (float time in lapTimes)
            {
                if (best == 0f || time < best)
                {
                    best = time;
                }
            }
            return best;
        }
    }

    public event Action<int, float> LapCompleted;       // the lap just finished, and its time
    public event Action Finished;
    public event Action Respawned;

    void Awake()
    {
        kart = GetComponent<KartController>();
        body = GetComponent<Rigidbody>();
    }

    // The Race Manager calls this when it puts the kart on the grid. The grid
    // is just past the finish line, so the first checkpoint to find is 1.
    public void Setup(string racerName, bool isPlayer, RaceManager raceManager, IReadOnlyList<Checkpoint> trackCheckpoints)
    {
        RacerName = racerName;
        IsPlayer = isPlayer;
        race = raceManager;
        checkpoints = trackCheckpoints;
        lastCheckpoint = checkpoints[0];
        Lap = 1;
        NextCheckpoint = 1;
    }

    void Update()
    {
        if (race == null || !race.IsRacing)
        {
            return;
        }
        CheckStuck();
        CheckWrongWay();
    }

    public void PassCheckpoint(Checkpoint checkpoint)
    {
        if (HasFinished || checkpoint.Index != NextCheckpoint)
        {
            return;     // passed already, or out of order
        }
        lastCheckpoint = checkpoint;
        NextCheckpoint = (NextCheckpoint + 1) % checkpoints.Count;
    }

    public void CompleteLap()
    {
        float time = CurrentLapTime;
        lapTimes.Add(time);
        LapCompleted?.Invoke(Lap, time);
        if (Lap >= race.Laps)
        {
            HasFinished = true;
            FinishTime = race.RaceTime;
            Finished?.Invoke();
            race.ReportFinish(this);
            return;
        }
        Lap++;
        lapStartTime = race.RaceTime;
    }

    // Back to the last checkpoint passed, facing the way to go.
    public void BackToTrack()
    {
        Transform point = lastCheckpoint.RespawnPoint;
        kart.PlaceAt(FreeSpotNear(point), point.rotation);
        stuckTime = 0f;
        Respawned?.Invoke();
    }

    // The respawn point, or a step to one side of it if another kart is there:
    // two karts put in one place would push each other off the road.
    Vector3 FreeSpotNear(Transform point)
    {
        float[] steps = { 0f, RespawnSideStep, -RespawnSideStep };
        foreach (float step in steps)
        {
            Vector3 spot = point.position + point.right * step + Vector3.up * RespawnHeight;
            if (!Physics.CheckBox(spot, KartHalfSize, point.rotation, 1 << gameObject.layer, QueryTriggerInteraction.Ignore))
            {
                return spot;
            }
        }
        return point.position + Vector3.up * RespawnHeight;
    }

    void CheckStuck()
    {
        if (transform.position.y < lastCheckpoint.RespawnPoint.position.y - FallDepth)
        {
            BackToTrack();      // fallen off the world: no need to wait
            return;
        }

        bool isUpsideDown = transform.up.y < UpsideDown;
        bool isPushing = kart.Driver != null && kart.Driver.Throttle > StuckThrottle;
        bool isStuck = isPushing && Mathf.Abs(kart.Speed) < StuckSpeed;
        if (isUpsideDown || isStuck)
        {
            stuckTime += Time.deltaTime;
            if (stuckTime > StuckTime)
            {
                BackToTrack();
            }
        }
        else
        {
            stuckTime = 0f;
        }
    }

    // Wrong way: moving away from the next checkpoint for a second.
    void CheckWrongWay()
    {
        Vector3 toNext = checkpoints[NextCheckpoint].transform.position - transform.position;
        float speedTowards = Vector3.Dot(body.linearVelocity, toNext.normalized);
        if (speedTowards < -WrongWaySpeed)
        {
            wrongWayTime += Time.deltaTime;
        }
        else
        {
            wrongWayTime = 0f;
        }
        IsWrongWay = wrongWayTime > WrongWayTime;
    }
}
```

Wrong way: `Vector3.Dot(body.linearVelocity, toNext.normalized)` is how fast the kart is
moving **towards** the next checkpoint. Faster than 3 m/s **away** from it, for a second,
and it's going the wrong way. `Physics.CheckBox` asks whether anything on the karts'
layer is inside a kart-sized box at the respawn point: if so, it tries a step to the
right, then to the left.

13. `AIDriver.cs`: the Race Manager now sets it up through `Setup`, after adding it. It
    also steers round a kart in front, with two rays, and starts again from the nearest
    point after going back to the track:

```csharp
using System.Collections.Generic;
using UnityEngine;

// The computer's hands on the wheel. It drives at the racing line's next point,
// kept in a Queue: it steers at Peek(), and when it gets there, Enqueue(Dequeue())
// sends that point to the back of the queue, ready for the next lap. It slows
// down before corners and steers round a kart in front of it. Its skill, from
// the rival's profile, says how hard it pushes.
// The Race Manager adds one to each rival's kart.
[RequireComponent(typeof(KartController))]
public class AIDriver : MonoBehaviour, IKartInput
{
    const float ReachDistance = 5f;         // metres: close enough to a point to aim at the next one
    const float FullSteerAngle = 30f;       // degrees off course that need full steer
    const int CornerLookAhead = 3;          // how many points ahead it looks for a corner
    const float SharpCorner = 30f;          // degrees
    const float GentleCorner = 15f;
    const float SharpCornerSpeed = 12f;     // metres a second
    const float GentleCornerSpeed = 16f;
    const float EaseOffThrottle = 0.1f;     // over the speed it wants, it lifts off to this
    const float PassDistance = 8f;          // metres: how far ahead it looks for another kart
    const float PassRayAngle = 12f;         // degrees either side of straight ahead
    const float PassSteer = 0.4f;
    const float RayHeight = 0.4f;           // metres above the kart's middle: over the road, under a bridge

    KartController kart;
    Racer racer;
    RacingLine racingLine;
    Queue<Transform> line;
    float skill = 1f;
    float laneOffset;       // metres to the right of the line, so rivals don't all drive in one file
    LayerMask kartLayers;

    public float Steer { get; private set; }
    public float Throttle { get; private set; }

    void Awake()
    {
        kart = GetComponent<KartController>();
        racer = GetComponent<Racer>();
    }

    void OnEnable()
    {
        racer.Respawned += OnRespawned;
    }

    void OnDisable()
    {
        racer.Respawned -= OnRespawned;
    }

    public void Setup(RacingLine track, float driverSkill, float lane, LayerMask karts)
    {
        racingLine = track;
        skill = driverSkill;
        laneOffset = lane;
        kartLayers = karts;
        line = racingLine.QueueFrom(transform.position);
    }

    void FixedUpdate()
    {
        if (line == null)
        {
            return;
        }

        Vector3 toAim = Flat(AimPoint() - transform.position);
        if (toAim.magnitude < ReachDistance)
        {
            line.Enqueue(line.Dequeue());       // this point is reached: it goes to the back, for the next lap
            toAim = Flat(AimPoint() - transform.position);
        }

        float offCourse = Vector3.SignedAngle(Flat(transform.forward), toAim, Vector3.up);
        Steer = Mathf.Clamp(offCourse / FullSteerAngle + PassingSteer(), -1f, 1f);

        float corner = CornerAhead();
        float wantedSpeed = float.MaxValue;
        if (corner > SharpCorner)
        {
            wantedSpeed = SharpCornerSpeed * skill;
        }
        else if (corner > GentleCorner)
        {
            wantedSpeed = GentleCornerSpeed * skill;
        }
        Throttle = kart.Speed > wantedSpeed ? EaseOffThrottle : skill;
    }

    // The next point, moved sideways into this driver's lane. Sideways is
    // worked out from the line itself, so the points needn't be rotated.
    Vector3 AimPoint()
    {
        Vector3 point = line.Peek().position;
        Vector3 along = Flat(PointAhead(1).position - point).normalized;
        Vector3 right = Vector3.Cross(Vector3.up, along);
        return point + right * laneOffset;
    }

    // How sharp the corner ahead is: the angle between where the kart is going
    // and a point a few points down the line.
    float CornerAhead()
    {
        Transform ahead = PointAhead(CornerLookAhead);
        return Mathf.Abs(Vector3.SignedAngle(Flat(transform.forward), Flat(ahead.position - transform.position), Vector3.up));
    }

    // A queue has no index, so walk along it with foreach to the point wanted.
    Transform PointAhead(int count)
    {
        int i = 0;
        foreach (Transform point in line)
        {
            if (i == count)
            {
                return point;
            }
            i++;
        }
        return line.Peek();
    }

    // Two rays, a little to the left and right of straight ahead: a kart on
    // one side means steering towards the other.
    float PassingSteer()
    {
        Vector3 start = transform.position + Vector3.up * RayHeight;
        Vector3 left = Quaternion.AngleAxis(-PassRayAngle, Vector3.up) * transform.forward;
        Vector3 right = Quaternion.AngleAxis(PassRayAngle, Vector3.up) * transform.forward;
        float steer = 0f;
        if (Physics.Raycast(start, left, PassDistance, kartLayers, QueryTriggerInteraction.Ignore))
        {
            steer += PassSteer;
        }
        if (Physics.Raycast(start, right, PassDistance, kartLayers, QueryTriggerInteraction.Ignore))
        {
            steer -= PassSteer;
        }
        return steer;
    }

    // Back on the track at a checkpoint: start again from the nearest point.
    void OnRespawned()
    {
        if (racingLine != null)
        {
            line = racingLine.QueueFrom(transform.position);
        }
    }

    static Vector3 Flat(Vector3 direction)
    {
        direction.y = 0f;
        return direction;
    }
}
```

The rays only look for karts: `kartLayers` is a **LayerMask**, the layers a raycast may
hit. A kart on the left means steer right, and the other way round.

14. `ChaseCamera.cs`: the karts don't exist until the race spawns them, so the camera
    can't have one dragged into it. The Race Manager calls `Follow`:

```csharp
using UnityEngine;

// Follows the player's kart from behind and above. It glides after the kart
// with Vector3.SmoothDamp rather than sitting fixed to it, and stays level, so
// a kart tipping on a bank doesn't tip the view. The Race Manager tells it
// which kart to follow.
public class ChaseCamera : MonoBehaviour
{
    [SerializeField] float distance = 5f;           // metres behind the kart
    [SerializeField] float height = 2.1f;           // metres above it
    [SerializeField] float lookAhead = 3f;          // metres in front of the kart, where it looks
    [SerializeField] float lookHeight = 0.8f;
    [SerializeField] float followTime = 0.12f;      // seconds: how long it takes to catch up

    KartController target;
    Vector3 velocity;

    public void Follow(KartController kart)
    {
        target = kart;
        transform.position = WantedPosition();      // start in place, not flying in from somewhere
        transform.LookAt(LookPoint());
    }

    void LateUpdate()
    {
        if (target == null)
        {
            return;
        }
        transform.position = Vector3.SmoothDamp(transform.position, WantedPosition(), ref velocity, followTime);
        transform.LookAt(LookPoint());
    }

    Vector3 WantedPosition()
    {
        return target.transform.position - LevelForward() * distance + Vector3.up * height;
    }

    Vector3 LookPoint()
    {
        return target.transform.position + LevelForward() * lookAhead + Vector3.up * lookHeight;
    }

    // The kart's forward, flattened: up and down hills, the camera stays level.
    Vector3 LevelForward()
    {
        Vector3 forward = target.transform.forward;
        forward.y = 0f;
        return forward.sqrMagnitude > 0.001f ? forward.normalized : Vector3.forward;
    }
}
```

15. And `RaceManager.cs`, in `Scripts/Race`:

```csharp
using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public enum RaceState { Countdown, Racing, Finishing, Over }

// The race, as a state machine: Countdown, Racing, Finishing (you're home, and
// the others have 15 seconds to finish too), Over. It puts the karts on the
// grid (your kart and three rivals), plugs a driver into each when the lights
// go green, and keeps the standings: a List of IRacer, sorted four times a
// second.
public class RaceManager : MonoBehaviour
{
    const float SortInterval = 0.25f;       // seconds between sorting the standings
    const float FinishingTime = 15f;        // seconds the others get once you've finished
    const float FinishedAhead = 100000f;    // see RaceOrder
    const int CountdownFrom = 3;

    [Header("The race")]
    [SerializeField] TrackInfo track;
    [SerializeField] KartStats playerKart;          // which kart you race in
    [SerializeField] Racer[] kartPrefabs;           // the three kart variants: each one's stats say which it is
    [SerializeField] RivalProfile[] rivals;
    [SerializeField] float[] rivalLanes = { -1f, 1f, 0f };  // metres either side of the racing line
    [SerializeField] LayerMask kartLayers;

    [Header("The track")]
    [SerializeField] StartGrid startGrid;
    [SerializeField] Checkpoint[] checkpoints;      // the finish line first, then in order round the track
    [SerializeField] RacingLine racingLine;

    [Header("The Race Kit")]
    [SerializeField] PlayerDriver playerDriver;
    [SerializeField] ChaseCamera chaseCamera;

    readonly List<IRacer> standings = new List<IRacer>();
    readonly List<Racer> karts = new List<Racer>();
    readonly Dictionary<Racer, RivalProfile> rivalOf = new Dictionary<Racer, RivalProfile>();
    float timeToSort;
    float finishingTimeLeft;

    public RaceState State { get; private set; }
    public TrackInfo Track { get { return track; } }
    public float RaceTime { get; private set; }
    public int Laps { get { return Track.Laps; } }
    public bool IsRacing { get { return State == RaceState.Racing || State == RaceState.Finishing; } }
    public Racer Player { get; private set; }
    public IReadOnlyList<IRacer> Standings { get { return standings; } }

    public event Action<int> CountdownTicked;       // 3, 2, 1, then 0 for GO
    public event Action RaceStarted;
    public event Action RaceOver;

    void Start()
    {
        PlaceKarts();
        StartCoroutine(Countdown());
    }

    void Update()
    {
        if (!IsRacing)
        {
            return;
        }
        RaceTime += Time.deltaTime;

        timeToSort -= Time.deltaTime;
        if (timeToSort <= 0f)
        {
            timeToSort = SortInterval;
            SortStandings();
        }

        if (State == RaceState.Finishing)
        {
            finishingTimeLeft -= Time.deltaTime;
            if (finishingTimeLeft <= 0f || EveryKartHasFinished())
            {
                EnterState(RaceState.Over);
            }
        }
    }

    void EnterState(RaceState state)
    {
        State = state;
        switch (state)
        {
            case RaceState.Racing:
                PlugInDrivers();
                RaceStarted?.Invoke();
                break;
            case RaceState.Finishing:
                finishingTimeLeft = FinishingTime;
                break;
            case RaceState.Over:
                SortStandings();
                RaceOver?.Invoke();
                break;
        }
    }

    // A racer has crossed the line for the last time. Racer calls this.
    public void ReportFinish(Racer racer)
    {
        if (racer != Player)
        {
            return;
        }
        // You're home. The computer drives your kart from here.
        DriveByComputer(racer, null, 0f);
        if (EveryKartHasFinished())
        {
            EnterState(RaceState.Over);
        }
        else
        {
            EnterState(RaceState.Finishing);
        }
    }

    // ------------------------------------------------------------------ the start

    void PlaceKarts()
    {
        int playerSlot = rivals.Length;     // at the back
        Player = SpawnKart(PrefabFor(playerKart), startGrid.Slot(playerSlot), "You", true);
        for (int i = 0; i < rivals.Length; i++)
        {
            Racer rival = SpawnKart(rivals[i].KartPrefab, startGrid.Slot(i), rivals[i].DisplayName, false);
            rival.GetComponent<KartPaint>().Paint(rivals[i].Colour);
            rivalOf[rival] = rivals[i];
        }
        chaseCamera.Follow(Player.Kart);
    }

    Racer SpawnKart(Racer prefab, Transform slot, string racerName, bool isPlayer)
    {
        Racer racer = Instantiate(prefab, slot.position, slot.rotation);
        racer.name = racerName;
        racer.Setup(racerName, isPlayer, this, checkpoints);
        karts.Add(racer);
        standings.Add(racer);
        return racer;
    }

    // The kart variant that uses these stats.
    Racer PrefabFor(KartStats stats)
    {
        foreach (Racer prefab in kartPrefabs)
        {
            if (prefab.GetComponent<KartController>().Stats == stats)
            {
                return prefab;
            }
        }
        return kartPrefabs[0];
    }

    IEnumerator Countdown()
    {
        State = RaceState.Countdown;
        yield return new WaitForSeconds(1f);
        for (int count = CountdownFrom; count > 0; count--)
        {
            CountdownTicked?.Invoke(count);
            yield return new WaitForSeconds(1f);
        }
        CountdownTicked?.Invoke(0);
        EnterState(RaceState.Racing);
    }

    // The player's kart gets the Player Driver, and each rival's the computer.
    void PlugInDrivers()
    {
        playerDriver.Drive(Player);
        foreach (KeyValuePair<Racer, RivalProfile> pair in rivalOf)
        {
            int lane = karts.IndexOf(pair.Key) % rivalLanes.Length;
            DriveByComputer(pair.Key, pair.Value, rivalLanes[lane]);
        }
    }

    void DriveByComputer(Racer racer, RivalProfile profile, float lane)
    {
        float skill = profile != null ? profile.Skill + Track.RivalSkillBonus : 1f;
        AIDriver driver = racer.gameObject.AddComponent<AIDriver>();
        driver.Setup(racingLine, Mathf.Clamp01(skill), lane, kartLayers);
        racer.Kart.Driver = driver;
    }

    // ------------------------------------------------------------------ the standings

    // Sort takes a way to compare two racers. The lambda says: whichever has
    // the bigger RaceOrder comes first.
    void SortStandings()
    {
        standings.Sort((a, b) => RaceOrder(b).CompareTo(RaceOrder(a)));
    }

    // One number for each racer, bigger for further ahead. A racer who has
    // finished is ahead of everyone still racing, and an earlier finish is
    // ahead of a later one.
    static float RaceOrder(IRacer racer)
    {
        if (racer.HasFinished)
        {
            return FinishedAhead - racer.FinishTime;
        }
        return racer.Progress;
    }

    bool EveryKartHasFinished()
    {
        foreach (Racer kart in karts)
        {
            if (!kart.HasFinished)
            {
                return false;
            }
        }
        return true;
    }
}
```

<!-- check: end -->

Read `PlaceKarts` and `PlugInDrivers` together. The karts are spawned in `Start`, but
nobody drives until the green light: until then every kart's `Driver` is null, and
`KartController` leaves a kart with no driver standing still. `rivalOf` is a
`Dictionary<Racer, RivalProfile>`: given a rival's kart, it finds that rival's profile,
for its skill, when the lights go green. And when **you** finish, `ReportFinish` puts the
computer at your wheel, so your kart doesn't stop dead across the line.

16. `PlayerDriver` no longer needs to plug itself in: the Race Manager calls `Drive`.
    Replace `PlayerDriver.cs`:

```csharp
using UnityEngine;
using UnityEngine.InputSystem;

// The player's hands on the wheel: the Drive map's actions, read as an
// IKartInput. It isn't on a kart: the Race Manager plugs it into the player's
// kart when the race starts. Keys and a gamepad both reach it through the
// same actions.
public class PlayerDriver : MonoBehaviour, IKartInput
{
    [SerializeField] InputActionReference steerAction;
    [SerializeField] InputActionReference throttleAction;
    [SerializeField] InputActionReference backToTrackAction;

    Racer racer;        // the kart this driver drives, for Back to the track

    public float Steer { get { return steerAction.action.ReadValue<float>(); } }
    public float Throttle { get { return throttleAction.action.ReadValue<float>(); } }

    void OnEnable()
    {
        steerAction.action.actionMap.Enable();      // nothing reads until the map is on
        backToTrackAction.action.performed += OnBackToTrack;
    }

    void OnDisable()
    {
        steerAction.action.actionMap.Disable();
        backToTrackAction.action.performed -= OnBackToTrack;
    }

    public void Drive(Racer kart)
    {
        racer = kart;
        racer.Kart.Driver = this;
    }

    void OnBackToTrack(InputAction.CallbackContext context)
    {
        if (racer != null)
        {
            racer.BackToTrack();
        }
    }
}
```

### Do it — the screen's scripts

17. In `Scripts/UI`, make `RaceHud.cs`:

```csharp
using TMPro;
using UnityEngine;

// The race's heads-up display: your place, the lap, the race time, your best
// lap, the speed, and Wrong way!. It listens to the Race Manager and your
// Racer for what happens, and reads the numbers that change all the time
// every frame.
public class RaceHud : MonoBehaviour
{
    const float KilometresPerHour = 3.6f;   // for each metre a second

    [SerializeField] RaceManager race;
    [SerializeField] TMP_Text placeText;
    [SerializeField] TMP_Text lapText;
    [SerializeField] TMP_Text timeText;
    [SerializeField] TMP_Text bestLapText;
    [SerializeField] TMP_Text speedText;
    [SerializeField] GameObject wrongWay;
    [SerializeField] TMP_Text finishText;

    Racer player;

    void OnEnable()
    {
        race.RaceStarted += OnRaceStarted;
        race.RaceOver += OnRaceOver;
    }

    void OnDisable()
    {
        race.RaceStarted -= OnRaceStarted;
        race.RaceOver -= OnRaceOver;
        if (player != null)
        {
            player.LapCompleted -= OnLapCompleted;
            player.Finished -= OnFinished;
        }
    }

    void Start()
    {
        wrongWay.SetActive(false);
        finishText.gameObject.SetActive(false);
        lapText.text = $"LAP 1/{race.Laps}";
        timeText.text = "0:00.00";
        bestLapText.text = $"BEST {TimeText.Format(0f)}";
        speedText.text = "0 km/h";
    }

    // The karts are on the grid by now: listen to yours.
    void OnRaceStarted()
    {
        player = race.Player;
        player.LapCompleted += OnLapCompleted;
        player.Finished += OnFinished;
    }

    void Update()
    {
        if (player == null)
        {
            return;
        }
        timeText.text = TimeText.Format(race.RaceTime);
        float speed = Mathf.Abs(player.Kart.Speed);
        speedText.text = $"{Mathf.RoundToInt(speed * KilometresPerHour)} km/h";
        placeText.text = $"{TimeText.Place(PlaceOf(player))} / {race.Standings.Count}";
        wrongWay.SetActive(player.IsWrongWay && !player.HasFinished);
    }

    void OnLapCompleted(int lap, float time)
    {
        bestLapText.text = $"BEST {TimeText.Format(player.BestLap)}";
        if (lap < race.Laps)
        {
            lapText.text = $"LAP {lap + 1}/{race.Laps}";
        }
    }

    void OnFinished()
    {
        finishText.text = $"{TimeText.Place(PlaceOf(player))}!";
        finishText.gameObject.SetActive(true);
    }

    void OnRaceOver()
    {
        wrongWay.SetActive(false);
        finishText.gameObject.SetActive(true);
    }

    int PlaceOf(IRacer racer)
    {
        int place = 1;
        foreach (IRacer other in race.Standings)
        {
            if (other == racer)
            {
                return place;
            }
            place++;
        }
        return place;
    }
}
```

`PlaceOf` walks the sorted standings until it meets your racer: its place is how many
it counted. `other == racer` compares two `IRacer`s: it's true when they are the same
object, which is what "is this you?" means.

18. And `CountdownLights.cs`:

```csharp
using System.Collections;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

// The start lights: red for 3 and 2, amber for 1, then green and GO!. It
// listens to the Race Manager's countdown, and hides itself a second after
// the green light.
public class CountdownLights : MonoBehaviour
{
    [SerializeField] RaceManager race;
    [SerializeField] GameObject lights;
    [SerializeField] Image lamp;
    [SerializeField] TMP_Text countText;
    [SerializeField] Sprite redLight;
    [SerializeField] Sprite amberLight;
    [SerializeField] Sprite greenLight;
    [SerializeField] Color redColour = new Color(1f, 0.32f, 0.25f);
    [SerializeField] Color amberColour = new Color(1f, 0.76f, 0.2f);
    [SerializeField] Color greenColour = new Color(0.36f, 0.92f, 0.42f);
    [SerializeField] float showGoFor = 1f;      // seconds

    void OnEnable()
    {
        race.CountdownTicked += OnCountdownTicked;
    }

    void OnDisable()
    {
        race.CountdownTicked -= OnCountdownTicked;
    }

    void Start()
    {
        lights.SetActive(false);
    }

    void OnCountdownTicked(int count)
    {
        lights.SetActive(true);
        if (count > 0)
        {
            lamp.sprite = count > 1 ? redLight : amberLight;
            lamp.color = count > 1 ? redColour : amberColour;
            countText.text = count.ToString();
        }
        else
        {
            lamp.sprite = greenLight;
            lamp.color = greenColour;
            countText.text = "GO!";
            StartCoroutine(HideSoon());
        }
    }

    IEnumerator HideSoon()
    {
        yield return new WaitForSeconds(showGoFor);
        lights.SetActive(false);
    }
}
```

19. Delete `LapLog.cs` (and the `Lap Log` GameObject): the HUD shows the laps now.

### Do it — the scene

20. **A layer for karts.** The rivals' rays should hit karts, not the track. **Edit →
    Project Settings → Tags and Layers**, and name the first empty **User Layer**
    `Karts`. Open `Prefabs/Kart`, set the root's **Layer** to `Karts`, and
    when Unity asks, **Yes, change children**. Every kart is on it now: the variants are
    built on `Kart`.
21. Delete the karts from the scene: your `Balanced Kart`, `Zip`, `Moss` and `Pebble`.
    The race makes them.
22. In `Race`, **Create Empty**, `Start Grid`: Position `(12.5, 0, 0)`, Rotation `(0, 90,
    0)`, on the finish line, facing along the road. Add **StartGrid**. Inside it, four
    empty children, front row first, with these **local** Positions:

| Name | Position | Row |
| --- | --- | --- |
| `Slot 1` | (−1.7, 0.35, 9) | front, left |
| `Slot 2` | (1.7, 0.35, 9) | front, right |
| `Slot 3` | (−1.7, 0.35, 4.5) | back, left |
| `Slot 4` | (1.7, 0.35, 4.5) | back, right |

Drag them into **Slots**, in order. Four yellow boxes appear past the line. The Race
Manager puts the rivals in the first three, and you in the last: the back of the grid.

23. **GameObject → Create Empty**, `Race Manager`, and add **RaceManager**:

| Field | Set it to |
| --- | --- |
| Track | `Data/Tracks/Meadow Loop` |
| Player Kart | `Data/Karts/Balanced` |
| Kart Prefabs | `Balanced Kart`, `Speedy Kart`, `Heavy Kart` |
| Rivals | `Zip`, `Moss`, `Pebble` |
| Rival Lanes | −1, 1, 0 (already there) |
| Kart Layers | `Karts` |
| Start Grid | `Start Grid` |
| Checkpoints | the twelve, `Finish Line` first (the padlock trick from Chapter 6) |
| Racing Line | `Racing Line` |
| Player Driver | `Player Driver` |
| Chase Camera | `Main Camera` |

`Player Kart` is a plain field for now: in Chapter 12, the Garage chooses.

### Do it — the HUD

24. The icons in `Art/Icons` came in as textures. Select them all, set **Texture Type** to
    **Sprite (2D and UI)**, and **Apply**.
25. **GameObject → UI → Canvas**. Its **Canvas Scaler**: **UI Scale Mode** **Scale With
    Screen Size**, **Reference Resolution** `1920 × 1080`, **Match** `0.5`
    (C# 9). Unity adds an **EventSystem** too.
26. Every panel on the HUD looks the same: a rounded, dark, see-through box. Make one, and
    copy it. An **Image** with **Source Image** `UISprite` (Unity's own, from the picker),
    **Image Type** **Sliced**, **Pixels Per Unit Multiplier** `0.4` (rounder corners), and
    **Colour** `1C2633` with **Alpha** `224`. Every text is **TextMeshPro - Text (UI)**
    with **Font Asset** `RussoOne-Regular SDF`. The colours: gold `FFC93C`, cream
    `FFF8E7`, grey `A9B6C6`.
27. Inside the Canvas, an empty `HUD`, stretched to fill it (the **Anchor Presets**,
    bottom-right one: stretch both ways, with **Alt** held to set the position too).
    Build these inside it. **Anchor** is the Anchor Presets square to pick; **Pos** and
    **Size** are in pixels at 1920 × 1080:

| Object | Inside | Kind | Anchor | Pos | Size | Look |
| --- | --- | --- | --- | --- | --- | --- |
| `Top Bar` | HUD | panel | top centre | (0, −16) | 1500 × 92 | |
| `Place` | Top Bar | text | middle left | (36, 0) | 300 × 70 | `4th / 4`, 46, left, gold |
| `Lap` | Top Bar | text | middle centre | (−120, 0) | 300 × 70 | `LAP 1/3`, 46, centred, cream |
| `Stopwatch` | Top Bar | image | middle centre | (90, 0) | 46 × 46 | `Art/Icons/Stopwatch`, cream |
| `Time` | Top Bar | text | middle centre, **Pivot** (0, 0.5) | (130, 0) | 260 × 70 | `0:00.00`, 46, left, cream |
| `Best Lap` | Top Bar | text | middle right | (−130, 0) | 330 × 60 | `BEST -:--.--`, 30, right, grey |
| `Speed Box` | HUD | panel | bottom right | (−36, 36) | 380 × 150 | |
| `Speedometer` | Speed Box | image | top left | (20, −14) | 52 × 52 | `Art/Icons/Speedometer`, cream |
| `Speed` | Speed Box | text | top right | (−24, −12) | 280 × 60 | `0 km/h`, 44, right, cream |
| `Wrong Way` | HUD | panel | middle centre | (0, 180) | 560 × 110 | colour `C0392B`, alpha 230 |
| `Text` | Wrong Way | text | middle centre | (0, 0) | 540 × 100 | `WRONG WAY!`, 64, centred, cream |
| `Finish` | HUD | text | middle centre | (0, 80) | 1200 × 200 | `FINISH!`, 140, centred, gold, **Outline** 0.15 in `1C2633` |

(The Speed Box has room at the bottom for Chapter 10's boost gauge.) For an anchor in
a corner, also set the **Pivot** to that corner (hold **Shift** while picking the
preset), so the Pos is measured from it.

28. Add **RaceHud** to `HUD`, and drag in the Race Manager and the five texts, `Wrong
Way` and `Finish`.

29. The countdown. Inside the Canvas, an empty `Countdown` (middle centre, 400 × 400) and
add **CountdownLights**. Inside it a panel, `Lights` (middle centre, Pos (0, 60), 300
× 360); inside that, an **Image** `Lamp` (top centre, Pos (0, −20), 220 × 220,
**Pivot** (0.5, 1), sprite `Art/Icons/LightsRed`) and a text `Count` (bottom centre,
Pos (0, 14), 280 × 100, `3`, 80, centred, cream). On CountdownLights, drag in the Race
Manager, `Lights` (the panel: shown and hidden), `Lamp`, `Count`, and the three
sprites: **Red Light** `LightsRed`, **Amber Light** `LightsReady`, **Green Light**
`LightsGreen`.

### Test it

- Press **Play**. A second's pause, then the lights: red 3, red 2, amber 1, green GO!,
  and the karts leave the grid together. You start at the back, in `4th / 4`.
- The place changes as you pass the rivals. Each rival is painted in its own colour:
  Zip a yellow Speedy Kart, Moss a purple Heavy, Pebble an orange Balanced.
- Turn round and drive back: after a second, *WRONG WAY!*
- Finish three laps: the screen says `2nd!`, or wherever you came; the rivals keep
  going until they finish, or for 15 seconds. Your kart drives itself after the line.
- Stop, and look at `Prefabs/Speedy Kart`: still red. `KartPaint` painted a copy.

### Commit

*Add the race: countdown, rivals, standings and the HUD.* Push.

### Challenge

`TimeText.Place` is right for every place up to 20. Pocket Karts never has more than four
racers, but suppose a race had 30: what would `Place(21)` return? Fix it, without breaking
11, 12 and 13, which are `11th`, `12th` and `13th`. (Hint: `place % 10` and `place %
100`.)

## Chapter 10 — Drift, on a Branch

**Goal:** hold **Drift** through a corner and the kart slides, tighter, while the **boost
meter** fills; with a full meter, **Boost** gives a burst of speed. Two boost pads on
Meadow Loop, a mud patch to try, a gauge on the HUD. And all of it made on a Git
**branch**, `drift-boost`, merged into `main` when it works.

### Idea — a feature on a branch

Until now every commit went straight onto `main`. That's fine while every commit works.
But drifting touches the kart, both drivers, the input, the HUD: for a while, the game
will be half-changed. Sam's rule: *`main` always works.* So a big change goes on a
**branch**, its own line of commits, made from `main`. On the branch you can commit
half-done work, try things, even break things. `main` doesn't change. When the feature
works, you **merge** the branch into `main`, and `main` gets all of it at once.

C# 1 named the branch for you: `drift-boost`.

**The feature.** Drifting is a rule in the kart: while the driver holds Drift, steers,
and is going faster than 8 m/s, the kart **drifts**: it keeps only a fifth of its grip,
so it slides, and it turns a third harder. A new component, `BoostMeter`, watches the
kart: while it drifts, the meter fills, 40% a second; when it's full and the driver
presses Boost, it empties, and the kart **boosts**: its top speed goes up by a third for
a second and a half. Both drivers get two more answers, `Drift` and `Boost`: the player
from two new keys, the computer from the corners ahead.

Two new kinds of `TrackTrigger`: a **boost pad** boosts whoever drives over it; a **mud
patch** slows whoever is in it, until they drive out. Mud is the first trigger that
cares when a kart **leaves**: so `TrackTrigger` gets an `OnRacerExited` that does
nothing, `virtual` rather than `abstract`, and only `MudPatch` overrides it
(C# 6: abstract when every kind must say what to do, virtual when most
needn't).

### Do it — the branch

1. In GitHub Desktop, **Current Branch → New Branch**, name it `drift-boost`, and
   **Create Branch**, from `main`. The bar at the top now says **Current Branch:
   drift-boost**. Everything you commit in this chapter goes on it.

### Do it — drift and boost

2. In `Pocket Karts Controls`, add two **Button** actions to `Drive`: `Drift` (**Left
   Shift**, and **Right Shoulder** on the Gamepad) and `Boost` (**Space**, and **Button
   South**). Save.
3. A boost lasts a set time for each kart. Replace `KartStats.cs`:

```csharp
using UnityEngine;

// One kart's numbers, kept in an asset: Balanced, Speedy and Heavy each have
// one, and each kart variant points at its own. A KartStats asset is read-only
// data. The kart's speed, boost and laps live on its components, never in here.
[CreateAssetMenu(fileName = "Kart Stats", menuName = "Pocket Karts/Kart Stats")]
public class KartStats : ScriptableObject
{
    [SerializeField] string displayName = "Balanced";

    [Header("Driving")]
    [SerializeField] float topSpeed = 22f;          // metres a second
    [SerializeField] float acceleration = 14f;      // metres a second, every second
    [SerializeField] float turnRate = 110f;         // degrees a second, at full steer
    [SerializeField] float grip = 8f;               // how fast sliding sideways is stopped
    [SerializeField] float mass = 150f;             // kilograms

    [Header("Boost")]
    [SerializeField] float boostTime = 1.5f;        // seconds, from a full meter

    public string DisplayName { get { return displayName; } }
    public float TopSpeed { get { return topSpeed; } }
    public float Acceleration { get { return acceleration; } }
    public float TurnRate { get { return turnRate; } }
    public float Grip { get { return grip; } }
    public float Mass { get { return mass; } }
    public float BoostTime { get { return boostTime; } }
}
```

4. The next five scripts need each other: the interface gets two more members, so both
   drivers must answer them; the kart drifts and boosts; the meter needs both. The
   Console shows errors until all five are saved. `IKartInput.cs`:

<!-- check: together -->

```csharp:IKartInput.cs
// What a kart needs from whoever drives it, a person or the computer: which
// way to steer, how much throttle, and whether to drift or boost. The kart
// reads these every physics step and never asks who is behind them.
public interface IKartInput
{
    float Steer { get; }        // -1 full left, 1 full right
    float Throttle { get; }     // 1 full throttle, -1 brake, then reverse
    bool Drift { get; }         // held
    bool Boost { get; }         // pressed or held: spends a full boost meter
}
```

5. `PlayerDriver.cs`, with two more actions:

```csharp
using UnityEngine;
using UnityEngine.InputSystem;

// The player's hands on the wheel: the Drive map's actions, read as an
// IKartInput. It isn't on a kart: the Race Manager plugs it into the player's
// kart when the race starts. Keys and a gamepad both reach it through the
// same actions.
public class PlayerDriver : MonoBehaviour, IKartInput
{
    [SerializeField] InputActionReference steerAction;
    [SerializeField] InputActionReference throttleAction;
    [SerializeField] InputActionReference driftAction;
    [SerializeField] InputActionReference boostAction;
    [SerializeField] InputActionReference backToTrackAction;

    Racer racer;        // the kart this driver drives, for Back to the track

    public float Steer { get { return steerAction.action.ReadValue<float>(); } }
    public float Throttle { get { return throttleAction.action.ReadValue<float>(); } }
    public bool Drift { get { return driftAction.action.IsPressed(); } }
    public bool Boost { get { return boostAction.action.IsPressed(); } }

    void OnEnable()
    {
        steerAction.action.actionMap.Enable();      // nothing reads until the map is on
        backToTrackAction.action.performed += OnBackToTrack;
    }

    void OnDisable()
    {
        steerAction.action.actionMap.Disable();
        backToTrackAction.action.performed -= OnBackToTrack;
    }

    public void Drive(Racer kart)
    {
        racer = kart;
        racer.Kart.Driver = this;
    }

    void OnBackToTrack(InputAction.CallbackContext context)
    {
        if (racer != null)
        {
            racer.BackToTrack();
        }
    }
}
```

`IsPressed()` is true while the button is held: right for Drift. For Boost too: the
meter only boosts when it's full, so holding Boost through a corner boosts the moment
it fills.

6. `AIDriver.cs`, which now drifts through gentle corners and boosts on the straights:

```csharp:AIDriver.cs
using System.Collections.Generic;
using UnityEngine;

// The computer's hands on the wheel. It drives at the racing line's next point,
// kept in a Queue: it steers at Peek(), and when it gets there, Enqueue(Dequeue())
// sends that point to the back of the queue, ready for the next lap. It slows
// down before corners, steers round a kart in front of it, drifts through
// gentle corners to fill its boost meter, and boosts on the straights. Its
// skill, from the rival's profile, says how hard it pushes.
// The Race Manager adds one to each rival's kart.
[RequireComponent(typeof(KartController))]
public class AIDriver : MonoBehaviour, IKartInput
{
    const float ReachDistance = 5f;         // metres: close enough to a point to aim at the next one
    const float FullSteerAngle = 30f;       // degrees off course that need full steer
    const int CornerLookAhead = 3;          // how many points ahead it looks for a corner
    const float SharpCorner = 30f;          // degrees
    const float GentleCorner = 15f;
    const float Straight = 8f;
    const float SharpCornerSpeed = 12f;     // metres a second
    const float GentleCornerSpeed = 16f;
    const float EaseOffThrottle = 0.1f;     // over the speed it wants, it lifts off to this
    const float PassDistance = 8f;          // metres: how far ahead it looks for another kart
    const float PassRayAngle = 12f;         // degrees either side of straight ahead
    const float PassSteer = 0.4f;
    const float RayHeight = 0.4f;           // metres above the kart's middle: over the road, under a bridge

    KartController kart;
    BoostMeter boostMeter;
    Racer racer;
    RacingLine racingLine;
    Queue<Transform> line;
    float skill = 1f;
    float laneOffset;       // metres to the right of the line, so rivals don't all drive in one file
    LayerMask kartLayers;

    public float Steer { get; private set; }
    public float Throttle { get; private set; }
    public bool Drift { get; private set; }
    public bool Boost { get; private set; }

    void Awake()
    {
        kart = GetComponent<KartController>();
        boostMeter = GetComponent<BoostMeter>();
        racer = GetComponent<Racer>();
    }

    void OnEnable()
    {
        racer.Respawned += OnRespawned;
    }

    void OnDisable()
    {
        racer.Respawned -= OnRespawned;
    }

    public void Setup(RacingLine track, float driverSkill, float lane, LayerMask karts)
    {
        racingLine = track;
        skill = driverSkill;
        laneOffset = lane;
        kartLayers = karts;
        line = racingLine.QueueFrom(transform.position);
    }

    void FixedUpdate()
    {
        if (line == null)
        {
            return;
        }

        Vector3 toAim = Flat(AimPoint() - transform.position);
        if (toAim.magnitude < ReachDistance)
        {
            line.Enqueue(line.Dequeue());       // this point is reached: it goes to the back, for the next lap
            toAim = Flat(AimPoint() - transform.position);
        }

        float offCourse = Vector3.SignedAngle(Flat(transform.forward), toAim, Vector3.up);
        Steer = Mathf.Clamp(offCourse / FullSteerAngle + PassingSteer(), -1f, 1f);

        float corner = CornerAhead();
        float wantedSpeed = float.MaxValue;
        if (corner > SharpCorner)
        {
            wantedSpeed = SharpCornerSpeed * skill;
        }
        else if (corner > GentleCorner)
        {
            wantedSpeed = GentleCornerSpeed * skill;
        }
        Throttle = kart.Speed > wantedSpeed ? EaseOffThrottle : skill;
        Drift = corner > GentleCorner && corner <= SharpCorner;
        Boost = boostMeter.IsFull && corner < Straight;
    }

    // The next point, moved sideways into this driver's lane. Sideways is
    // worked out from the line itself, so the points needn't be rotated.
    Vector3 AimPoint()
    {
        Vector3 point = line.Peek().position;
        Vector3 along = Flat(PointAhead(1).position - point).normalized;
        Vector3 right = Vector3.Cross(Vector3.up, along);
        return point + right * laneOffset;
    }

    // How sharp the corner ahead is: the angle between where the kart is going
    // and a point a few points down the line.
    float CornerAhead()
    {
        Transform ahead = PointAhead(CornerLookAhead);
        return Mathf.Abs(Vector3.SignedAngle(Flat(transform.forward), Flat(ahead.position - transform.position), Vector3.up));
    }

    // A queue has no index, so walk along it with foreach to the point wanted.
    Transform PointAhead(int count)
    {
        int i = 0;
        foreach (Transform point in line)
        {
            if (i == count)
            {
                return point;
            }
            i++;
        }
        return line.Peek();
    }

    // Two rays, a little to the left and right of straight ahead: a kart on
    // one side means steering towards the other.
    float PassingSteer()
    {
        Vector3 start = transform.position + Vector3.up * RayHeight;
        Vector3 left = Quaternion.AngleAxis(-PassRayAngle, Vector3.up) * transform.forward;
        Vector3 right = Quaternion.AngleAxis(PassRayAngle, Vector3.up) * transform.forward;
        float steer = 0f;
        if (Physics.Raycast(start, left, PassDistance, kartLayers, QueryTriggerInteraction.Ignore))
        {
            steer += PassSteer;
        }
        if (Physics.Raycast(start, right, PassDistance, kartLayers, QueryTriggerInteraction.Ignore))
        {
            steer -= PassSteer;
        }
        return steer;
    }

    // Back on the track at a checkpoint: start again from the nearest point.
    void OnRespawned()
    {
        if (racingLine != null)
        {
            line = racingLine.QueueFrom(transform.position);
        }
    }

    static Vector3 Flat(Vector3 direction)
    {
        direction.y = 0f;
        return direction;
    }
}
```

The computer's rule: drift in a corner that's gentle (more than 15° ahead, no more than
30°), never in a sharp one; boost when the meter is full and the road ahead is straight
(less than 8°).

7. `KartController.cs`, your version 0.1's last change:

```csharp
using System;
using UnityEngine;

// How a kart drives, version 0.1: a Rigidbody box pushed along by forces. The
// throttle pushes it along its nose, up to its top speed; steering turns it;
// grip stops most of its sliding sideways, as tyres would. Drifting lowers the
// grip and tightens the turn; a boost raises the top speed for a while.
// Whoever drives it, a person or the computer, plugs in through Driver. With
// no driver, the kart stands still.
[RequireComponent(typeof(Rigidbody))]
public class KartController : MonoBehaviour
{
    const float MinDriftSpeed = 8f;         // metres a second
    const float MinDriftSteer = 0.1f;
    const float DriftTurnBonus = 1.35f;     // drifting tightens the turn by a third
    const float DriftGripShare = 0.2f;      // drifting keeps a fifth of the grip
    const float BoostShare = 1.35f;         // boosting raises the top speed by a third

    [SerializeField] KartStats stats;

    Rigidbody body;
    float boostTimeLeft;
    float topSpeedFactor = 1f;

    // Who drives: the player's PlayerDriver or a rival's AIDriver. Unity can't
    // show an interface in the Inspector, so the driver is plugged in from code.
    public IKartInput Driver { get; set; }
    public KartStats Stats { get { return stats; } }
    public float Speed { get; private set; }        // forwards, in metres a second: negative in reverse
    public bool IsDrifting { get; private set; }
    public bool IsBoosting { get { return boostTimeLeft > 0f; } }

    // Multiplies the top speed: 1 normally; mud sets it lower while the kart is in it.
    public float TopSpeedFactor
    {
        get { return topSpeedFactor; }
        set { topSpeedFactor = value; }
    }

    public event Action Boosted;

    void Awake()
    {
        body = GetComponent<Rigidbody>();
        body.mass = stats.Mass;
    }

    void FixedUpdate()
    {
        boostTimeLeft = Mathf.Max(0f, boostTimeLeft - Time.fixedDeltaTime);
        Speed = Vector3.Dot(body.linearVelocity, transform.forward);
        IsDrifting = false;
        if (Driver == null)
        {
            return;     // nobody's driving: no throttle, no steering
        }
        float steer = Driver.Steer;
        IsDrifting = Driver.Drift && Mathf.Abs(steer) > MinDriftSteer && Speed > MinDriftSpeed;
        Drive(Driver.Throttle);
        Turn(steer);
        Grip();
    }

    // Boosts for a while: from a full boost meter, or a boost pad.
    public void Boost(float seconds)
    {
        boostTimeLeft = Mathf.Max(boostTimeLeft, seconds);
        Boosted?.Invoke();
    }

    // Puts the kart down here, still: the start grid, or back on the track.
    public void PlaceAt(Vector3 position, Quaternion rotation)
    {
        transform.SetPositionAndRotation(position, rotation);
        body.position = position;
        body.rotation = rotation;
        body.linearVelocity = Vector3.zero;
        body.angularVelocity = Vector3.zero;
        boostTimeLeft = 0f;
    }

    // Speeds up, or slows down, towards the speed the throttle asks for: full
    // throttle asks for the top speed, none for a stop, and full brake for the
    // top speed backwards. Never more than the acceleration allows in a step.
    void Drive(float throttle)
    {
        float topSpeed = stats.TopSpeed * (IsBoosting ? BoostShare : 1f) * topSpeedFactor;
        float wanted = throttle * topSpeed;
        float most = stats.Acceleration * Time.fixedDeltaTime;
        float change = Mathf.Clamp(wanted - Speed, -most, most);
        body.AddForce(transform.forward * change, ForceMode.VelocityChange);
    }

    // Spins the kart at the turn rate the steering asks for: the push is the
    // difference between that spin and the spin it has. Drifting turns harder.
    void Turn(float steer)
    {
        float wantedSpin = steer * stats.TurnRate * Mathf.Deg2Rad;     // radians a second
        if (IsDrifting)
        {
            wantedSpin *= DriftTurnBonus;
        }
        float spin = Vector3.Dot(body.angularVelocity, transform.up);
        body.AddTorque(transform.up * (wantedSpin - spin), ForceMode.VelocityChange);
    }

    // Grip: takes away part of the sideways speed every step, as tyres do.
    // Drifting takes away less, so the kart slides.
    void Grip()
    {
        float sliding = Vector3.Dot(body.linearVelocity, transform.right);
        float grip = IsDrifting ? stats.Grip * DriftGripShare : stats.Grip;
        float share = Mathf.Min(1f, grip * Time.fixedDeltaTime);
        body.AddForce(-transform.right * sliding * share, ForceMode.VelocityChange);
    }
}
```

`Boosted` is an `Action` event with no values: "a boost started". `Boost` takes the
longer of the boost already running and the new one, so a pad in the middle of a boost
never cuts it short. `TopSpeedFactor` is a property with a `get` and a `set` written out
in full, around a field: the mud sets it, and `Drive` uses the field.

8. In `Scripts/Karts`, `BoostMeter.cs`:

```csharp:BoostMeter.cs
using System;
using UnityEngine;

// The boost meter. Drifting fills it, 40 % for each second of drifting; when
// it's full, the driver's Boost empties it and boosts the kart. It raises
// Changed with how full it is, 0 to 1, for the gauge on the HUD.
[RequireComponent(typeof(KartController))]
public class BoostMeter : MonoBehaviour
{
    [SerializeField] float fillPerSecond = 0.4f;

    KartController kart;

    public float Fill { get; private set; }
    public bool IsFull { get { return Fill >= 1f; } }

    public event Action<float> Changed;

    void Awake()
    {
        kart = GetComponent<KartController>();
    }

    void Update()
    {
        if (kart.IsDrifting && !IsFull)
        {
            SetFill(Fill + fillPerSecond * Time.deltaTime);
        }
        if (IsFull && kart.Driver != null && kart.Driver.Boost)
        {
            SetFill(0f);
            kart.Boost(kart.Stats.BoostTime);
        }
    }

    void SetFill(float value)
    {
        Fill = Mathf.Clamp01(value);
        Changed?.Invoke(Fill);
    }
}
```

<!-- check: end -->

9. Open `Prefabs/Kart` and add **BoostMeter**. Every kart has one: the rivals fill theirs
   too. Then **commit on the branch**: *Add drifting and the boost meter*. (Look at the
   History tab: the commit is on `drift-boost`.)

### Do it — pads and mud

10. `TrackTrigger.cs` learns about leaving:

```csharp:TrackTrigger.cs
using UnityEngine;

// Something on the track that reacts when a racer drives through it: a
// checkpoint, the finish line, a boost pad, a patch of mud. Finding the racer
// is the same for all of them, so it's done once, here, and each kind says
// what it does in OnRacerEntered. Most of them don't care when a racer leaves,
// so OnRacerExited is virtual and does nothing, rather than abstract: only
// the kinds that care override it.
[RequireComponent(typeof(Collider))]
public abstract class TrackTrigger : MonoBehaviour
{
    void OnTriggerEnter(Collider other)
    {
        // The collider may be on a child of the racer, so look up the hierarchy.
        IRacer racer = other.GetComponentInParent<IRacer>();
        if (racer != null)
        {
            OnRacerEntered(racer);
        }
    }

    void OnTriggerExit(Collider other)
    {
        IRacer racer = other.GetComponentInParent<IRacer>();
        if (racer != null)
        {
            OnRacerExited(racer);
        }
    }

    protected abstract void OnRacerEntered(IRacer racer);

    protected virtual void OnRacerExited(IRacer racer)
    {
    }

    // Unity calls Reset when the component is added: a track trigger's
    // collider is always a trigger.
    void Reset()
    {
        GetComponent<Collider>().isTrigger = true;
    }
}
```

11. In `Scripts/Track`, `BoostPad.cs`:

```csharp:BoostPad.cs
using UnityEngine;

// A boost pad: whoever drives over it gets a short boost. A ghost drives over
// pads too, but it has no engine to boost. "racer is Racer kart" asks whether
// this racer is a real kart and, if it is, names it kart, ready to use.
public class BoostPad : TrackTrigger
{
    [SerializeField] float boostTime = 1f;      // seconds

    protected override void OnRacerEntered(IRacer racer)
    {
        if (racer is Racer kart)
        {
            kart.Kart.Boost(boostTime);
        }
    }
}
```

`racer is Racer kart` is a **type test**: it's true if this `IRacer` really is a `Racer`,
and then `kart` is that `Racer`, ready to use. A pad only gets an `IRacer`, and only a
`Racer` has an engine.

12. And `MudPatch.cs`:

```csharp:MudPatch.cs
using UnityEngine;

// A patch of mud: a kart in it is slower, until it drives out. The only track
// trigger that cares when a racer leaves, so the only one that overrides
// OnRacerExited.
public class MudPatch : TrackTrigger
{
    [SerializeField] float speedShare = 0.6f;   // of the top speed, while in the mud

    protected override void OnRacerEntered(IRacer racer)
    {
        if (racer is Racer kart)
        {
            kart.Kart.TopSpeedFactor = speedShare;
        }
    }

    protected override void OnRacerExited(IRacer racer)
    {
        if (racer is Racer kart)
        {
            kart.Kart.TopSpeedFactor = 1f;
        }
    }
}
```

13. The **Boost Pad** prefab: an empty `Boost Pad`, with a **Box Collider** (**Center**
    `(0, 1, 0)`, **Size** `(4.5, 2, 4.5)`), then **BoostPad** (which ticks **Is
    Trigger**). Inside it, `Art/Track/Ground_Boost_Speed_Straight`, named `Look`, at
    Position `(0, 0.03, 0)` and Rotation `(0, -90, 0)`: its arrows point along +Z, the way
    the pad's blue arrow goes. Drag it into `Prefabs/Track`.
14. The **Mud Patch** prefab: an empty `Mud Patch` with a **Box Collider** (Center `(0, 1,
    0)`, Size `(6.5, 2, 9)`) and **MudPatch**. Inside it a **3D Object → Cylinder**,
    `Mud`: remove its collider, Position `(0, 0.04, 0)`, Scale `(6.5, 0.02, 9)`, a flat
    oval, with a new material `Mud` (`6B4A2F`). Drag it into `Prefabs/Track`.
15. In `Race`, an empty `Boost Pads`, with two Boost Pads: one on the top straight at
    `(32.5, 0, 0)`, Rotation `(0, 90, 0)`, and one on the left side at `(-17.5, 0, -50)`,
    Rotation `(0, 0, 0)`. Both point the way the karts go.

### Do it — the gauge

16. In `Scripts/UI`, `BoostGauge.cs`:

```csharp:BoostGauge.cs
using UnityEngine;
using UnityEngine.UI;

// The boost gauge on the HUD: a bar that fills as you drift, and glows when
// it's full. It listens to your kart's boost meter.
public class BoostGauge : MonoBehaviour
{
    [SerializeField] Image fill;        // Image Type: Filled, Horizontal
    [SerializeField] GameObject glow;   // shown when full: press Boost!

    BoostMeter meter;

    void Start()
    {
        Show(0f);
    }

    void OnDisable()
    {
        if (meter != null)
        {
            meter.Changed -= Show;
        }
    }

    public void Watch(BoostMeter boostMeter)
    {
        meter = boostMeter;
        meter.Changed += Show;
        Show(meter.Fill);
    }

    void Show(float share)
    {
        fill.fillAmount = share;
        glow.SetActive(share >= 1f);
    }
}
```

17. `RaceHud.cs` hands your kart's meter to the gauge when the race starts:

```csharp
using TMPro;
using UnityEngine;

// The race's heads-up display: your place, the lap, the race time, your best
// lap, the speed, the boost gauge, and Wrong way!. It listens to the Race Manager and your
// Racer for what happens, and reads the numbers that change all the time
// every frame.
public class RaceHud : MonoBehaviour
{
    const float KilometresPerHour = 3.6f;   // for each metre a second

    [SerializeField] RaceManager race;
    [SerializeField] TMP_Text placeText;
    [SerializeField] TMP_Text lapText;
    [SerializeField] TMP_Text timeText;
    [SerializeField] TMP_Text bestLapText;
    [SerializeField] TMP_Text speedText;
    [SerializeField] GameObject wrongWay;
    [SerializeField] TMP_Text finishText;
    [SerializeField] BoostGauge boostGauge;

    Racer player;

    void OnEnable()
    {
        race.RaceStarted += OnRaceStarted;
        race.RaceOver += OnRaceOver;
    }

    void OnDisable()
    {
        race.RaceStarted -= OnRaceStarted;
        race.RaceOver -= OnRaceOver;
        if (player != null)
        {
            player.LapCompleted -= OnLapCompleted;
            player.Finished -= OnFinished;
        }
    }

    void Start()
    {
        wrongWay.SetActive(false);
        finishText.gameObject.SetActive(false);
        lapText.text = $"LAP 1/{race.Laps}";
        timeText.text = "0:00.00";
        bestLapText.text = $"BEST {TimeText.Format(0f)}";
        speedText.text = "0 km/h";
    }

    // The karts are on the grid by now: listen to yours.
    void OnRaceStarted()
    {
        player = race.Player;
        player.LapCompleted += OnLapCompleted;
        player.Finished += OnFinished;
        boostGauge.Watch(player.GetComponent<BoostMeter>());
    }

    void Update()
    {
        if (player == null)
        {
            return;
        }
        timeText.text = TimeText.Format(race.RaceTime);
        float speed = Mathf.Abs(player.Kart.Speed);
        speedText.text = $"{Mathf.RoundToInt(speed * KilometresPerHour)} km/h";
        placeText.text = $"{TimeText.Place(PlaceOf(player))} / {race.Standings.Count}";
        wrongWay.SetActive(player.IsWrongWay && !player.HasFinished);
    }

    void OnLapCompleted(int lap, float time)
    {
        bestLapText.text = $"BEST {TimeText.Format(player.BestLap)}";
        if (lap < race.Laps)
        {
            lapText.text = $"LAP {lap + 1}/{race.Laps}";
        }
    }

    void OnFinished()
    {
        finishText.text = $"{TimeText.Place(PlaceOf(player))}!";
        finishText.gameObject.SetActive(true);
    }

    void OnRaceOver()
    {
        wrongWay.SetActive(false);
        finishText.gameObject.SetActive(true);
    }

    int PlaceOf(IRacer racer)
    {
        int place = 1;
        foreach (IRacer other in race.Standings)
        {
            if (other == racer)
            {
                return place;
            }
            place++;
        }
        return place;
    }
}
```

18. In the HUD's `Speed Box`: an image `Boost Icon` (bottom left, **Pivot** bottom left,
    Pos `(20, 18)`, 48 × 48, `Art/Icons/Boost`, gold); and a bar, `Boost Gauge` (bottom
    right, **Pivot** bottom right, Pos `(-24, 26)`, 270 × 30), a panel coloured `0E141C`
    at alpha 204. Inside the bar: `Glow`, a panel (middle centre, 290 × 46, `FFF2A0` at
    alpha 115), and **after** it, `Fill`, an **Image** (middle centre, 262 × 22,
    `UISprite`, gold) with **Image Type** **Filled**, **Fill Method** **Horizontal**.
    `Glow` sits behind `Fill`: a soft light round the bar when it's full. Add
    **BoostGauge** to `Boost Gauge`, with its `Fill` and `Glow`; then drag `Boost Gauge`
    into the HUD's **Boost Gauge**.

### Test it

- Press **Play**. Hold **Left Shift** through a corner, steering: the kart swings out and
  slides round, tighter, and the gauge fills. Fill it, then press **Space** on a
  straight: the speed jumps up for a second and a half, and the gauge empties.
- Drive over a boost pad: a boost, with an empty meter.
- Watch the rivals: they drift through the gentler corners, and boost down the
  straights.
- Put a Mud Patch on the top straight, at `(60, 0, 0)`, Rotation `(0, 90, 0)`, and drive
  through it: you slow to 60%, then speed up as you leave. Delete it again: Meadow
  Loop has no mud. (Windmill Hill does, in Chapter 12.)

### Commit and merge

19. Commit on the branch: *Add boost pads, mud and the boost gauge*.
20. Now merge. **Current Branch → main**: back on `main`, and the project goes back to
    how it was before this chapter. In Unity, everything from the branch is gone: no
    Drift, no gauge. Then **Branch → Merge into Current Branch**, choose `drift-boost`,
    and **Merge**. Unity reloads, and it's all back, now on `main`. **Push origin**.

> **Tip:** switch branches with Unity's project saved (and, to be safe, closed): Git
> changes the files under Unity's feet, and Unity reloads them.

### Challenge

Give the Heavy Kart its own drift. Its `KartStats` could say how much grip it keeps while
drifting, instead of the kart's `DriftGripShare` for everyone: what would you add, and
where? Don't do it yet: in Chapter 11, someone else's code asks for exactly that.

# Part 3 — The Lead's Handling

## C# 10 — Working in Someone Else's Code

**Goal:** you can read a module someone else wrote, find its contract, evaluate it
against the team's architecture and style guide, and plug it into your game without
changing it (Associate: Programming — evaluate code for integration into a system
architected by a lead).

### Idea — why other people's code

A studio game is written by a team. A **lead** programmer designs the **architecture**:
which parts the game has, and how they talk (through interfaces, events and a few agreed
classes). Each programmer builds a part, and some arrive finished, from someone else.
The Associate exam asks exactly this: *does this code fit, and how do you plug it in?*

### Idea — read it top-down

Don't start at line 1. Read the **README and header comment** first (what it's for, who
owns it, which version), then its **public members**, and the **details** last, where
you need them. The public members are its **contract**: what the module **needs** from
the rest of the game, and what it **gives**. A lead's computer-rival module says:

| Rival module 1.0 | |
| --- | --- |
| **Needs** | a component that implements `IRivalChoices`, beside the `RivalBrain`; the game's `Match`, with a `bool IsOver` |
| **Gives** | `RivalBrain`, which makes the best choice every **Think Time** seconds; `ChoiceMade`, an event raised after each one |

Before you import anything, tick off the "needs" against your own code. The package
brings `IRivalChoices`, the half of the contract that your code fills in:

```csharp
// Part of the Rival module. Implement it beside the RivalBrain, to tell it the choices.
public interface IRivalChoices
{
    // How many things the rival could do now: cards to play, upgrades to buy.
    int ChoiceCount { get; }
    // How good choice number i is now. 0 or less means "not worth doing".
    float Score(int choice);
    void Make(int choice);
}
```

### Idea — namespaces

A **namespace** is a family name for classes: `using UnityEngine;` lets you write `Debug`
for `UnityEngine.Debug`. Why would a team want its own? Say a package brings a class
`Countdown`, and your game has one too. Two classes can't share a full name, so:

```
error CS0101: The namespace '<global namespace>' already contains a definition for 'Countdown'
```

So code made to be shared should go in a namespace of its own:

```csharp
namespace LanternHill.Opponent
{
    public class Countdown
    {
        // … the module's own countdown …
    }
}
```

Now its full name is `LanternHill.Opponent.Countdown`, and both classes live side by
side. To use it, write `using LanternHill.Opponent;` at the top of your file. Until a
package has one, rename *your* class, and ask the package's owner for a namespace.

### Idea — importing, and the first errors

A lead often hands a module over as a `.unitypackage` file. Choose **Assets → Import
Asset Package…** and pick the file. The **Import Unity Package** window lists every file
in it, each with a tick box: untick what you don't want, such as an example scene, and
click **Import** (C# 16 has more). Then read the Console: the first errors say
what's missing.

Suppose your `Match` keeps a `bool isRunning`, but has no `IsOver`. The module's line
`if (match.IsOver || …)` gives:

```
error CS1061: 'Match' does not contain a definition for 'IsOver' and no accessible extension method 'IsOver' accepting a first argument of type 'Match' could be found (are you missing a using directive or an assembly reference?)
```

The contract asked for it, so you add it, **to your class**:

```csharp
using UnityEngine;

// The match from the lead's architecture: a duel, a race or a trading day.
public class Match : MonoBehaviour
{
    bool isRunning = true;

    // The Rival module's README asks for this.
    public bool IsOver
    {
        get { return !isRunning; }
    }
}
```

> **Watch out:** never edit the module without asking its owner, even to silence an error:
> the next version will be imported over your change, and nobody else gets your fix.

### Idea — evaluating it

With the errors gone, read the module the way a reviewer would. Here's its brain:

```csharp
using System;
using UnityEngine;

// RIVAL MODULE 1.0 - Lantern Hill Games. Owner: Sam.
// A computer rival for any of our games. Every Think Time seconds it asks the
// game what it could do (IRivalChoices), and does the best thing.
public class RivalBrain : MonoBehaviour
{
    [SerializeField] Match match;
    [SerializeField] float thinkTime = 1.5f;

    IRivalChoices choices;
    float timer;

    // Raised after each choice, with the choice's number.
    public event Action<int> ChoiceMade;

    void Awake()
    {
        choices = GetComponent<IRivalChoices>();
        if (choices == null)
        {
            Debug.LogError("RivalBrain needs a component that implements IRivalChoices beside it.", this);
            enabled = false;
        }
    }

    void Update()
    {
        timer += Time.deltaTime;
        if (match.IsOver || timer < thinkTime)
        {
            return;
        }
        timer = 0f;
        int best = -1;
        float bestScore = 0f;
        for (int i = 0; i < choices.ChoiceCount; i++)
        {
            float score = choices.Score(i);
            if (score > bestScore)
            {
                best = i;
                bestScore = score;
            }
        }
        if (best < 0)
        {
            return;     // nothing worth doing: look again later
        }
        choices.Make(best);
        ChoiceMade?.Invoke(best);
    }
}
```

| Ask | Why it matters | The Rival module |
| --- | --- | --- |
| Does it use only its contract? | anything else it touches can break it | only `IRivalChoices` and `Match.IsOver`; no `Find…` |
| Does it follow the team's standards? | someone will maintain it | private `[SerializeField]` fields, an event in the past tense, braces everywhere |
| What happens with input it doesn't expect? | real games send it | no choices, or none above 0: it waits. **Match** left empty: a `NullReferenceException` every frame |
| Does it allocate every frame? | garbage makes a game stutter (C# 17) | no: no `new`, no strings built |
| Does it log? | so you can see why it did something | an error, with a context, if it's set up wrong; nothing about its choices |

Two findings to report to Sam: an empty **Match** isn't checked, as `choices` is, and a
**Log Decisions** switch would show why the rival chose what it did (C# 19).

### Idea — plugging it in

Now write your half of the contract. A rival juice stand, choosing upgrades:

```csharp
using UnityEngine;

// A rival juice stand: it tells the Rival module which upgrades it could buy.
public class RivalStand : MonoBehaviour, IRivalChoices
{
    [SerializeField] int coins = 50;
    [SerializeField] int[] upgradePrices = { 10, 25, 60 };

    public int ChoiceCount
    {
        get { return upgradePrices.Length; }
    }

    // Keeping coins scores best: it buys the cheapest upgrade it can afford.
    public float Score(int choice)
    {
        return coins - upgradePrices[choice];
    }

    public void Make(int choice)
    {
        coins -= upgradePrices[choice];
        Debug.Log($"{name} buys upgrade {choice}: {coins} coins left", this);
    }
}
```

Put a `RivalBrain` and a `RivalStand` on one GameObject, fill in **Match**, and play: the
module didn't change at all. A card rival would score its hand, and a kart its items.

### Idea — how the exam asks

*The module calls `GetComponent<IRivalChoices>()`. Which class integrates correctly?*

- A. `class Kart : MonoBehaviour`, with public `ChoiceCount`, `Score` and `Make`
- B. `class Kart : MonoBehaviour, IRivalChoices`, with the three members public
- C. `class Kart : IRivalChoices`, with the three members public
- D. `class Kart : MonoBehaviour, IRivalChoices`, with `Make` not public

**B.** A has the members, but doesn't say it implements the interface, so `GetComponent`
finds nothing. C isn't a component, so it can't be on a GameObject. D doesn't compile:
`error CS0737: 'Kart' does not implement interface member 'IRivalChoices.Make(int)'.
'Kart.Make(int)' cannot implement an interface member because it is not public.`

*A HUD must show a message after each rival choice. Which fits the architecture?*

- A. Edit `RivalBrain.Update` to call the HUD
- B. `brain.ChoiceMade += OnRivalChose;` in `OnEnable`, and `-=` in `OnDisable`
- C. `brain.ChoiceMade = OnRivalChose;` in `Start`
- D. Find the rival with `GameObject.Find` in `Update`, and check it every frame

**B**, through what the module gives. A edits the owner's code. C doesn't compile: outside
its class, an event only takes `+=` and `-=`. D breaks the style guide.

*The module gives CS1061: `'Match' does not contain a definition for 'IsOver'`. Which
fix is right?*

- A. Change the module to read `match.isRunning`
- B. Add a public `IsOver` property to `Match`
- C. Delete the module's `IsOver` check
- D. Make `Match`'s fields public

**B.** The contract asks your `Match` for `IsOver`, so your code supplies it. A and C
edit the module; D adds nothing the module asked for, and breaks the style guide.

### Do it

1. Make `Match`, `IRivalChoices`, `RivalBrain` and `RivalStand` in a test scene, and
   play. Then remove `IsOver` from `Match`, and read the error. Put it back.
2. Make a `Countdown` script in two folders, and read the CS0101. Then put one inside
   `namespace LanternHill.Opponent`, and watch the error go.
3. Leave the brain's **Match** field empty, play, and write the two-line note you'd send
   Sam: what you saw, and where.

### Challenge

Write a second `IRivalChoices`: a kart choosing between a boost, a shield and an oil
slick, scoring each from its speed and its place in the race. Swap it in for
`RivalStand` without changing `RivalBrain`. Then list what you'd ask Sam to change in
version 1.1, and why.

## Chapter 11 — Sam's Handling

**Goal:** Sam's kart handling, imported as a package, its conflicts fixed, its contract
met, read and judged, plugged into every kart, and tuned: karts that ride on springs,
tilt with the road, and can climb a hill.

### Idea — someone else's module

Sam has seen your version 0.1, and the list at the end of Chapter 5. Sam's answer is a
**module**: the studio's own kart handling, written and tested for this game, handed to
you as a `.unitypackage` with a README. Not a replacement for your thinking: you still
have to read it, judge it, and make it fit. C# 10 gave the steps; here they
are, for real:

1. **Read the contract** before importing: what does it need from your game?
2. **Import it**, then read every message in the Console.
3. **Make it fit**: fix the conflicts, add what's missing, without changing the module.
4. **Evaluate it**: read the code until you can say what each part does.
5. **Plug it in**, and **tune** it.

What does Sam's handling do that yours doesn't? It doesn't slide on its belly. It holds
the kart up on four **spring rays**, one above each wheel: each ray looks down for the
road, and the closer the road, the harder that corner of the kart is pushed up, like a
spring (Hooke's law), less however fast it's already moving up (damping, so it doesn't
bounce). The kart floats a few centimetres over the road on four springs, so the joins
between pieces are only small bumps, and it tilts with every slope, so it can climb.
Everything else follows from that: it only drives and steers with at least two wheels on
the ground, it drives along the slope, not into it, it turns only while it moves, and
the other way in reverse.

### Do it — read the contract

1. Your trainer shares `Pocket Karts Handling 1.0.unitypackage` and its `README.md`. Read
   the README first. The contract, in short:

| What | Sam's module uses |
| --- | --- |
| `IKartInput` | `Steer`, `Throttle`, `Drift` |
| `KartStats` | `TopSpeed`, `BoostSpeed`, `Acceleration`, `TurnRate`, `Grip`, `DriftGrip`, `Mass` |
| a **Track** layer | on everything a kart drives on |
| four spring points | `Spring FL`, `Spring FR`, `Spring RL`, `Spring RR`, 0.1 m above the wheels' middles |
| a Rigidbody and a Box Collider | damping 0.2 and 3; rotation free; the box clear of the road |

2. Tick off what your game has. `IKartInput`: all three, and `Boost` besides. `KartStats`:
   all but two, `BoostSpeed` and `DriftGrip`: your kart boosts and drifts with fixed
   numbers, `BoostShare` and `DriftGripShare`, where Sam's reads them from each kart's
   stats. No Track layer yet, no spring points, and your Rigidbody's rotation is frozen.
   And what the module **gives** your scripts (`Driver`, `Stats`, `Speed`, `IsDrifting`,
   `IsBoosting`, `TopSpeedFactor`, `Boosted`, `Boost`, `PlaceAt`): all the names your
   `Racer`, drivers, meter, pads and HUD already use. Sam's architecture, from the
   start.

### Do it — import it, and read the Console

3. Commit first, so you can always come back: *Before importing Sam's handling*.
4. **Assets → Import Asset Package…**, choose the file. The **Import Unity Package**
   window lists `Assets/Handling` and its three files, all ticked. **Import**.
5. The Console turns red:

```
Assets/Scripts/Karts/IKartInput.cs(4,18): error CS0101: The namespace '<global namespace>' already contains a definition for 'IKartInput'
Assets/Scripts/Karts/KartController.cs(11,14): error CS0101: The namespace '<global namespace>' already contains a definition for 'KartController'
Assets/Scripts/Karts/KartController.cs(42,10): error CS0111: Type 'KartController' already defines a member called 'Awake' with the same parameter types
Assets/Scripts/Karts/KartController.cs(48,10): error CS0111: Type 'KartController' already defines a member called 'FixedUpdate' with the same parameter types
Assets/Scripts/Karts/KartController.cs(65,17): error CS0111: Type 'KartController' already defines a member called 'Boost' with the same parameter types
Assets/Scripts/Karts/KartController.cs(72,17): error CS0111: Type 'KartController' already defines a member called 'PlaceAt' with the same parameter types
```

(Your line numbers may differ a little.) Read them as C# 19 taught: file,
line, code, message.

- **CS0101**: two types with one name in the *global namespace* (no namespace at all):
  two `IKartInput`s, and two `KartController`s. C# can't have that. It's the commonest
  import conflict there is, and why a package should keep its code in a `namespace` of
  its own. Sam's README admits it, again: *"Note for 1.1: put the module in a
  namespace."*
- **CS0111**: the methods both `KartController`s have, with the same parameters: C# sees
  one class defined twice, so each of those methods twice. Not four more problems: the
  same one.
- Notice **which files** the errors name: yours, not Sam's. The compiler read
  `Assets/Handling` first (H comes before S), so yours are "the second definition". The
  file an error names isn't always the file that's wrong.

6. **The interface.** Open both `IKartInput`s: word for word the same. Delete the
   **package's** copy, `Assets/Handling/IKartInput.cs` (in the Project window, so its
   `.meta` goes too). The first error goes.
7. **The controller.** This time it's the other way round: Sam's is the one to keep. Delete
   **yours**, `Assets/Scripts/Karts/KartController.cs`. The CS0111s go. Two new errors
   appear, in Sam's file:

```
Assets/Handling/KartController.cs(151,64): error CS1061: 'KartStats' does not contain a definition for 'BoostSpeed' and no accessible extension method 'BoostSpeed' accepting a first argument of type 'KartStats' could be found (are you missing a using directive or an assembly reference?)
Assets/Handling/KartController.cs(188,41): error CS1061: 'KartStats' does not contain a definition for 'DriftGrip' and no accessible extension method 'DriftGrip' accepting a first argument of type 'KartStats' could be found (are you missing a using directive or an assembly reference?)
```

   **CS1061**: a member that isn't there. Exactly the two the contract warned you about.

### Do it — meet the contract

8. Here's the module, as Sam wrote it. It's in your project now; read it once before you
   go on (the questions below make you read it again). Your project compiles again once
   `KartStats` has the two members, in the next step.

<!-- check: together -->

```csharp:KartController.cs
using System;
using UnityEngine;

// POCKET KARTS HANDLING 1.0, by Sam, Lantern Hill Games.
//
// A kart's handling. The kart is a Rigidbody box held up by four spring rays,
// one at each wheel: each ray measures how far the ground is and pushes back
// like a spring. With two or more wheels on the ground, the kart drives along
// the ground's slope, turns, and stops itself sliding sideways (grip); drifting
// lowers the grip and tightens the turn. Off the ground it does nothing: it flies.
//
// Whoever drives it, a person or the computer, plugs in through Driver. With no
// driver, the kart stands still. README.md lists what the module needs from
// your project.
[RequireComponent(typeof(Rigidbody))]
public class KartController : MonoBehaviour
{
    const int MinWheelsOnGround = 2;
    const float MinDriftSpeed = 8f;         // metres a second
    const float MinDriftSteer = 0.1f;
    const float FullTurnSpeed = 6f;         // slower than this, the kart turns less: a kart standing still can't turn
    const float DriftTurnBonus = 1.35f;     // drifting tightens the turn by a third
    const float ReverseShare = 0.4f;        // reverse is slower than forwards
    const float BrakeStrength = 2f;         // braking slows twice as fast as the engine speeds up
    const float RollingSlowdown = 3f;       // metres a second, every second, with no throttle
    const float NoThrottle = 0.05f;         // a stick resting a little off centre is still no throttle

    [SerializeField] KartStats stats;
    [SerializeField] Transform[] springPoints = new Transform[4];   // front left, front right, rear left, rear right
    [SerializeField] LayerMask groundLayers;                        // the Track layer: a kart mustn't stand on another kart
    [SerializeField] Vector3 centreOfMass = new Vector3(0f, -0.2f, 0f);
    [SerializeField] float springLength = 0.55f;                    // metres: how far each ray looks for the ground
    [SerializeField] float springStrength = 6f;                     // the push when fully squashed, for each kilogram of kart
    [SerializeField] float springDamping = 0.6f;                    // stops the springs bouncing

    Rigidbody body;
    float boostTimeLeft;
    float topSpeedFactor = 1f;

    // Who drives: the player's PlayerDriver or a rival's AIDriver. Unity can't
    // show an interface in the Inspector, so the driver is plugged in from code.
    public IKartInput Driver { get; set; }
    public KartStats Stats { get { return stats; } }
    public float Speed { get; private set; }        // forwards, in metres a second: negative in reverse
    public bool IsGrounded { get; private set; }
    public bool IsDrifting { get; private set; }
    public bool IsBoosting { get { return boostTimeLeft > 0f; } }

    // Multiplies the top speed: 1 normally; mud sets it lower while the kart is in it.
    public float TopSpeedFactor
    {
        get { return topSpeedFactor; }
        set { topSpeedFactor = value; }
    }

    public event Action Boosted;

    void Awake()
    {
        body = GetComponent<Rigidbody>();
        body.mass = stats.Mass;
        body.centerOfMass = centreOfMass;
    }

    void FixedUpdate()
    {
        boostTimeLeft = Mathf.Max(0f, boostTimeLeft - Time.fixedDeltaTime);
        Speed = Vector3.Dot(body.linearVelocity, transform.forward);

        Vector3 groundNormal;
        int wheelsDown = HoldUp(out groundNormal);
        IsGrounded = wheelsDown >= MinWheelsOnGround;
        IsDrifting = false;
        if (!IsGrounded)
        {
            return;     // in the air: no grip, no engine
        }

        // No driver yet (the countdown): no throttle, no steering.
        float steer = 0f;
        float throttle = 0f;
        bool wantsDrift = false;
        if (Driver != null)
        {
            steer = Mathf.Clamp(Driver.Steer, -1f, 1f);
            throttle = Mathf.Clamp(Driver.Throttle, -1f, 1f);
            wantsDrift = Driver.Drift;
        }
        IsDrifting = wantsDrift && Mathf.Abs(steer) > MinDriftSteer && Speed > MinDriftSpeed;

        Drive(throttle, groundNormal);
        Turn(steer, groundNormal);
        Grip(groundNormal);
    }

    // Boosts for a while: from a full boost meter, or a boost pad.
    public void Boost(float seconds)
    {
        boostTimeLeft = Mathf.Max(boostTimeLeft, seconds);
        Boosted?.Invoke();
    }

    // Puts the kart down here, still: the start grid, or back on the track.
    public void PlaceAt(Vector3 position, Quaternion rotation)
    {
        transform.SetPositionAndRotation(position, rotation);
        body.position = position;
        body.rotation = rotation;
        body.linearVelocity = Vector3.zero;
        body.angularVelocity = Vector3.zero;
        boostTimeLeft = 0f;
    }

    // The four springs. A ray from each spring point looks down for the ground;
    // the closer it is, the harder the spring pushes up (Hooke's law), less
    // however fast that corner is already moving up (damping). Returns how many
    // wheels touch, and the ground's average slope.
    int HoldUp(out Vector3 groundNormal)
    {
        int wheelsDown = 0;
        groundNormal = Vector3.zero;
        foreach (Transform point in springPoints)
        {
            RaycastHit hit;
            if (Physics.Raycast(point.position, -transform.up, out hit, springLength, groundLayers, QueryTriggerInteraction.Ignore))
            {
                float squash = 1f - hit.distance / springLength;      // 0 just touching, 1 fully squashed
                float squashSpeed = Vector3.Dot(body.GetPointVelocity(point.position), transform.up);
                float push = (squash * springStrength - squashSpeed * springDamping) * body.mass;
                body.AddForceAtPosition(transform.up * push, point.position);
                groundNormal += hit.normal;
                wheelsDown++;
            }
        }
        if (wheelsDown > 0)
        {
            groundNormal.Normalize();
        }
        else
        {
            groundNormal = Vector3.up;
        }
        return wheelsDown;
    }

    // Speeds up towards the speed the throttle asks for, along the ground's
    // slope, so the kart drives up a hill rather than into it.
    void Drive(float throttle, Vector3 groundNormal)
    {
        Vector3 forward = Vector3.ProjectOnPlane(transform.forward, groundNormal).normalized;
        float topSpeed = (stats.TopSpeed + (IsBoosting ? stats.BoostSpeed : 0f)) * topSpeedFactor;
        float speed = Vector3.Dot(body.linearVelocity, forward);

        float change;
        if (Mathf.Abs(throttle) < NoThrottle)
        {
            float slowdown = RollingSlowdown * Time.fixedDeltaTime;
            change = Mathf.Clamp(-speed, -slowdown, slowdown);
        }
        else
        {
            float target = throttle > 0f ? throttle * topSpeed : throttle * topSpeed * ReverseShare;
            float most = stats.Acceleration * Time.fixedDeltaTime;
            change = Mathf.Clamp(target - speed, -most * BrakeStrength, most);
        }
        body.AddForce(forward * change, ForceMode.VelocityChange);
    }

    // Turns by rotating the body about the ground's normal. A kart only turns
    // while it moves, and turns the other way in reverse, as a car does.
    void Turn(float steer, Vector3 groundNormal)
    {
        float moving = Mathf.Clamp(Speed / FullTurnSpeed, -1f, 1f);
        float degrees = steer * stats.TurnRate * moving * Time.fixedDeltaTime;
        if (IsDrifting)
        {
            degrees *= DriftTurnBonus;
        }
        body.MoveRotation(Quaternion.AngleAxis(degrees, groundNormal) * body.rotation);
    }

    // Grip: takes away part of the sideways speed every step, as tyres do.
    // Drifting takes away less, so the kart slides.
    void Grip(Vector3 groundNormal)
    {
        Vector3 side = Vector3.ProjectOnPlane(transform.right, groundNormal).normalized;
        float sliding = Vector3.Dot(body.linearVelocity, side);
        float grip = IsDrifting ? stats.DriftGrip : stats.Grip;
        float share = Mathf.Min(1f, grip * Time.fixedDeltaTime);
        body.AddForce(-side * sliding * share, ForceMode.VelocityChange);
    }
}
```

9. Add the two members to `KartStats.cs`: `driftGrip` with the driving numbers, and
   `boostSpeed` with the boost:

```csharp
using UnityEngine;

// One kart's numbers, kept in an asset: Balanced, Speedy and Heavy each have
// one, and each kart variant points at its own. A KartStats asset is read-only
// data. The kart's speed, boost and laps live on its components, never in here.
[CreateAssetMenu(fileName = "Kart Stats", menuName = "Pocket Karts/Kart Stats")]
public class KartStats : ScriptableObject
{
    [SerializeField] string displayName = "Balanced";

    [Header("Driving")]
    [SerializeField] float topSpeed = 22f;          // metres a second
    [SerializeField] float acceleration = 14f;      // metres a second, every second
    [SerializeField] float turnRate = 110f;         // degrees a second, at full steer
    [SerializeField] float grip = 8f;               // how fast sliding sideways is stopped
    [SerializeField] float driftGrip = 1.5f;        // the same, while drifting
    [SerializeField] float mass = 150f;             // kilograms

    [Header("Boost")]
    [SerializeField] float boostSpeed = 8f;         // added to the top speed
    [SerializeField] float boostTime = 1.5f;        // seconds, from a full meter

    public string DisplayName { get { return displayName; } }
    public float TopSpeed { get { return topSpeed; } }
    public float Acceleration { get { return acceleration; } }
    public float TurnRate { get { return turnRate; } }
    public float Grip { get { return grip; } }
    public float DriftGrip { get { return driftGrip; } }
    public float Mass { get { return mass; } }
    public float BoostSpeed { get { return boostSpeed; } }
    public float BoostTime { get { return boostTime; } }
}
```

<!-- check: end -->

   The Console is clear. Set **Drift Grip** `1.5` and **Boost Speed** `8` in each of the
   three stats assets. (Sam's numbers: a drift keeps 1.5 of the Balanced kart's 8 grip,
   about the fifth your `DriftGripShare` kept, and a boost adds 8 m/s, about the third
   your `BoostShare` added. But now each kart can have its own.)

### Do it — repair the kart

10. Open `Prefabs/Kart`. Its KartController has become a **missing script**: the
    Inspector shows the component with no script, and says *The associated script can
    not be loaded*. Press Play, and the Console warns, for every kart:

```
The referenced script on this Behaviour (Game Object '…') is missing!
```

Why? A prefab doesn't store a script's name: it stores the script's **GUID**, from
the `.meta` file you deleted with your `KartController.cs`. Sam's `KartController.cs`
has its own `.meta` and its own GUID. Same class name, different file: to Unity, a
different script. (C# 1's `.meta` lesson, in a real repair.)

11. The repair is one change in the right place: the **base** prefab. In `Prefabs/Kart`,
**Add Component → KartController** (now Sam's), then remove the missing one (its ⋮
menu → **Remove Component**). All three variants get the new one, because they're
built on `Kart`.

12. In each variant, set the KartController's **Stats** again: `Balanced`, `Speedy`,
`Heavy`. The old overrides belonged to the old script.
13. **The spring points.** In `Prefabs/Kart`, four empty children, 0.1 m above each wheel's
middle, and drag them into **Spring Points** in this order:

| Name | Position |
| --- | --- |
| `Spring FL` | (−0.45, 0.1, 0.45) |
| `Spring FR` | (0.45, 0.1, 0.45) |
| `Spring RL` | (−0.45, 0.1, −0.45) |
| `Spring RR` | (0.45, 0.1, −0.45) |

14. **The body.** The springs hold the kart up now, so its box mustn't touch the road:
    Box Collider **Center** `(0, 0.3, 0.05)`, **Size** `(1.1, 0.45, 1.75)`, and clear its
    **Material** (no more `Kart Slide`). On the Rigidbody: untick **Freeze Rotation X**
    and **Z**, and set **Linear Damping** `0.2` and **Angular Damping** `3`.
15. **The Track layer.** **Edit → Project Settings → Tags and Layers**: name the next
    empty User Layer `Track`. In `Meadow Loop`, select `Track` and set its **Layer** to
    `Track`, **Yes, change children**: the pieces and the ground. Back in `Prefabs/Kart`,
    set the KartController's **Ground Layers** to `Track` only. (A kart must never stand
    on another kart's roof: the spring rays only look for the Track layer.)

### Do it — evaluate it

16. Read Sam's `KartController` until you can answer these. Write the answers down: the
    exam asks questions just like them.
    - Which method keeps the kart off the road? Which two lines are Hooke's law?
    - With only one wheel on the road (over a crest, say), what does the kart do? Which
      line decides?
    - Why does the kart turn the other way when it reverses? Find the number that does it.
    - `springStrength` is 6. Six what? (Look at what it's multiplied by.)
    - What does the module do with a `Throttle` of 2? With a driver of `null`?
    - Your `Racer` calls `kart.PlaceAt`, and `BoostPad` calls `kart.Boost`: did either
      have to change? Why not?

### Test it

- Press **Play** and race. Watch your kart from close: it rides on its springs, nodding
  as it brakes and leaning in the corners. The joins between pieces are just small bumps.
  Lift off the throttle: it rolls to a stop. It can't turn standing still.
- Drift through a corner: the same meter, the same boost: your `BoostMeter` never knew
  the handling changed.
- The rivals drive with Sam's handling too: they're the same Kart prefab.

### Do it — tune it

17. Sam's README says: leave the box's friction alone. Try it anyway, the way a
    programmer checks a rule: put `Kart Slide` back on the Box Collider and race. On the
    corners, the karts slide up the grass banks and tip over. With friction, a kart that
    touches a bank is slowed and turned back; with none, it rides up and rolls. Take it
    off again. That's why the rule exists, and why Sam wants to be asked first.
18. Now tune the karts by their stats, not the module: Balanced should feel easy, Speedy
    fast but slippery, Heavy slow to start and hard to push. Try Speedy's **Grip** at
    `6` and at `4`; Heavy's **Mass** at `220` and at `300`, bumping into it with the
    others. Keep the book's numbers, or your own if you can say why they're better.

### Commit

*Plug in Sam's kart handling.* Push.

### Challenge

The module's spring numbers are fields: Spring Length 0.55, Strength 6, Damping 0.6. Set
**Spring Damping** to `0.1` on the base Kart and drive over a bump. Then `2`. Describe the
difference in a sentence each, and put it back to `0.6`. Which of the two would a toy
kart really have?

# Part 4 — A Whole Game

## C# 11 — Static: Uses and Risks

**Goal:** you can use `static` where it fits (constants, helpers, a choice carried to
the next scene), and spot and fix its risks: hidden dependencies, values that outlive a
scene or survive from one Play to the next, and static events with dead listeners
(Associate: Programming — save data between scenes and sessions (static, PlayerPrefs)).

### Idea — one copy, owned by the class

A normal field has one copy in every object: two karts, two `speed`s. A **static**
member belongs to the **class**: there's one copy, and you reach it through the class
name, with no object at all.

| | Normal member | `static` member |
| --- | --- | --- |
| How many copies | one per object | one, for the whole game |
| Reached through | an object: `kart.Speed` | the class: `RaceSetup.Laps` |
| Can use the object's fields | yes | no: there's no object (CS0120) |
| Shown in the Inspector | if it has `[SerializeField]` | never |

A **static class** holds only static members, and can't be made with `new`. You use
Unity's `Mathf`, `Debug`, `PlayerPrefs` and `SceneManager` the same way, through their
static members. A static class of your own:

```csharp
// Small helpers the whole game uses. No objects: call them through the class name.
public static class TimeText
{
    const int SecondsPerMinute = 60;

    public static string FromSeconds(int seconds)
    {
        return $"{seconds / SecondsPerMinute}:{seconds % SecondsPerMinute:00}";
    }
}
```

```csharp
Debug.Log(TimeText.FromSeconds(125));
Debug.Log(TimeText.FromSeconds(59));
```

```
2:05
0:59
```

### Idea — good uses

| Use | Example | Why static fits |
| --- | --- | --- |
| constants | `const int MaxStands = 8;` | they can't change, so sharing them is safe |
| helpers that need only their parameters | `Mathf.Clamp`, `TimeText.FromSeconds` | there's nothing to keep, so no object is needed |
| names used all over the game | `SettingsKeys.MusicVolume` | written once: a typo becomes a compile error |
| a choice carried to the next scene | `RaceSetup.Track` | loading a scene destroys its objects, but not a static (C# 12) |

```csharp
// Every PlayerPrefs key in the game, in one place.
public static class SettingsKeys
{
    public const string MusicVolume = "MusicVolume";
    public const string Difficulty = "Difficulty";
}
```

`PlayerPrefs.GetFloat(SettingsKeys.MusicVolume, 1f)` can't be misspelt the way
`"MusicVolum"` can: a wrong name doesn't compile (C# 14 covers PlayerPrefs).

```csharp
// What the menu chose, for the race scene to read.
public static class RaceSetup
{
    public static string Track { get; set; }
    public static int Laps { get; set; }
}
```

The menu sets `RaceSetup.Track = "Desert";` and loads the Race scene; the race reads
`RaceSetup.Track`. No object needs to survive the load.

### Idea — the risks: hidden, and longer-lived than you think

**Hidden dependencies.** Any script can read or change a public static, and nothing in
the Inspector shows who does. If `RaceSetup.Laps` is 0 when a race starts, any script in
the project might have done it. Keep statics few and small, and give them `private set`
wherever only their own class should change them.

**Values that outlive a scene.** Loading a scene destroys its objects, never its statics.
That's what makes `RaceSetup` work, and what makes a `static List<Kart>` of the karts in
a race a trap: in the next race it still holds the last one's karts, all destroyed.

**Values that outlive Play.** When you press Play, Unity can do two things: reload the
**domain** (throw away everything your scripts hold in memory, statics included, and
load them afresh) and reload the **scene**. Reloading the domain takes time, seconds in
a big project, so Unity 6's Universal 2D template switches it off: in **Edit → Project
Settings → Editor**, under **Enter Play Mode Settings**, **When entering Play Mode** says
**Reload Scene only**. Play starts much faster, and statics keep last run's values.

| On pressing Play | Domain and scene reloaded | **Reload Scene only** |
| --- | --- | --- |
| the scene's objects and their fields | fresh from the scene | fresh from the scene |
| static fields and properties | back to their starting values | **as the last run left them** |
| static events | empty | **still holding last run's listeners** |

```csharp
// Coins collected in this run: one number for the whole game.
public static class RunStats
{
    public static int Coins { get; private set; }

    public static void AddCoin()
    {
        Coins++;
    }
}
```

```csharp
RunStats.AddCoin();
RunStats.AddCoin();
Debug.Log($"Coins this run: {RunStats.Coins}");
```

```
Coins this run: 2
```

Stop, and press Play again:

```
Coins this run: 4
```

A built game starts fresh each time, so this only happens in the Editor, where you test.
And Unity always reloads the domain after your scripts compile, so the first Play after
an edit is right, and the second is wrong: a bug that seems to come and go.

### Idea — resetting statics when Play starts

Give the class a static method marked with this attribute. Unity calls it each time Play
starts, before the first scene loads, whatever the Enter Play Mode setting:

```csharp
public static class RunStats
{
    public static int Coins { get; private set; }

    public static void AddCoin()
    {
        Coins++;
    }

    [RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.SubsystemRegistration)]
    static void ResetForPlay()
    {
        Coins = 0;      // every run starts with no coins
    }
}
```

Now every Play says `Coins this run: 2`. It's better than resetting in some object's
`Awake`, because a static belongs to no object: it works in any scene, even one started
on its own. In a build it runs once, at launch, and does no harm.

**Static events** need it most. A static event is handy: every coin raises one
`Coin.Collected`, and a counter subscribes once, without a reference to any coin:

```csharp
using System;
using UnityEngine;

public class Coin : MonoBehaviour
{
    public static event Action Collected;

    void OnTriggerEnter2D(Collider2D other)
    {
        Collected?.Invoke();
        Destroy(gameObject);
    }

    [RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.SubsystemRegistration)]
    static void ResetForPlay()
    {
        Collected = null;   // forget every listener from the last run
    }
}
```

But the event outlives every scene and, with domain reload off, every Play. A counter
that subscribes and never unsubscribes stays on the list after its scene has gone. The
next coin calls it: a dead script runs again, quietly, or with the
`MissingReferenceException` from C# 4 as soon as it reaches its destroyed
text's GameObject. Unsubscribe in `OnDisable`, always; the reset stops anything that
slips through from reaching the next Play.

### Idea — static, const or readonly?

| | `const` | `static readonly` | `static` |
| --- | --- | --- | --- |
| Can change | never | no: set once, when the class is first used | any time, from any script |
| Types | numbers, `bool`, `string` | any | any |
| Example | `const int MaxLaps = 9;` | `static readonly Color Gold = new Color(1f, 0.8f, 0.2f);` | `static int Coins;` |
| With domain reload off | safe | safe, unless it's a list whose contents change | keeps last run's value |

### Idea — between scenes, and between sessions

| To keep… | Use | Lasts until |
| --- | --- | --- |
| a choice for the next scene | a static, such as `RaceSetup.Track` | the game quits |
| a small setting: the volume, a key binding | PlayerPrefs (C# 14) | it's deleted: it survives quitting |
| game data: unlocks, a deck, the cash of a juice empire | a JSON file (C# 14) | it's deleted |

A static is for **this run only**. Quit, and it's gone.

### Do it

1. Make `RunStats` and the three lines above in a `Practice` script. Press Play twice,
   and see `4`. Add `ResetForPlay`, and press Play twice again.
2. Find the Enter Play Mode setting above. Switch it to reload the domain and the scene,
   and press Play: how long does it take now? Then switch it back.
3. Make `SettingsKeys`, and use it to save and load a volume with PlayerPrefs.
4. Make `Coin` without its reset, and a counter that subscribes in `OnEnable`, with no
   `OnDisable`. On each coin, it shows the count in a text and calls
   `label.gameObject.SetActive(true)`. Play twice, collect a coin in the second run, and
   read the Console. Add the reset: fixed? Now reload the scene with a
   key and collect a coin. Which fix does this one need?

### Challenge

Make a Menu scene that sets `RaceSetup.Track` and `RaceSetup.Laps` from two buttons,
and a Race scene that shows them. Then start the Race scene on its own: what does it
show? Make it fall back to a test track, with `Debug.LogWarning` saying why, and make
sure a stale track from the last Play can never sneak in.

## C# 12 — Scenes

**Goal:** you can split a game into several scenes, load one from code or from a button,
fade between them without freezing, and carry a choice from one scene to the next in the
right way for how long it must last (Associate: Programming — implement transitions
between scenes; save data between scenes and sessions).

### Idea — several scenes instead of one

A bigger game is easier to build as several scenes: a **Menu**, a **Race** (or a level, or
a duel) and a **Results** screen. Each loads only what it needs, and two teammates can work
in two scenes without a conflict (C# 1).

### Idea — the Scene List

Code can only load a scene in the **Scene List**: **File → Build Profiles**, top left.

- **Add Open Scenes** adds the scene you have open, or drag scenes in from the Project
  window. Drag them to change the order; untick one to leave it out of the build.
- The number on the right of each is its **build index**, from 0. Index 0 is the scene a
  build opens with: make it the menu. (In the Editor, **Play** starts the open scene.)

Load a scene that isn't in the list, and the Console says so when the line runs:

```
Scene 'Results' couldn't be loaded because it has not been added to the active build profile or shared scene list or the AssetBundle has not been loaded.
To add a scene to the active build profile or shared scene list use the menu File->Build Profiles
```

### Idea — LoadScene

```csharp
SceneManager.LoadScene("Results");      // by name
SceneManager.LoadScene(2);              // or by build index
```

Both need `using UnityEngine.SceneManagement;`. A name is clearer and survives reordering
the list; an index survives renaming the scene. Most code uses names.

Unity then destroys **every object in the old scene** (each gets `OnDisable` and
`OnDestroy`), and loads the new one, whose objects get `Awake`, `OnEnable` and `Start` as
usual. The switch comes at the start of the next frame, so code after `LoadScene` still
runs. And the game **freezes** while it loads: for a small scene that's a blink, for a big
one it looks like a crash.

### Idea — loading in the background

`LoadSceneAsync` loads the new scene while the old one keeps running, so a bar can fill and
a curtain can fade. It returns an `AsyncOperation` at once, to check in a coroutine:

| Member | Is |
| --- | --- |
| `isDone` | `true` once the new scene has taken over |
| `progress` | how far it's got: it climbs to 0.9 while loading, then 1 as it takes over |
| `allowSceneActivation` | set it to `false` to hold the new scene back at 0.9, say until a key is pressed |

### Idea — a fade between scenes

A fade hides the switch: the screen goes black, the next scene loads behind the curtain,
and the curtain lifts. The curtain is a full-screen black Image with a **Canvas Group**,
whose **Alpha** fades it, on a Canvas with a high **Sort Order**. Every scene has one:

```csharp
using System.Collections;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

// A black curtain over every scene: it lifts when the scene starts, and falls
// before the next one loads. Buttons call FadeTo from their On Click () list.
public class SceneTransition : MonoBehaviour
{
    const float LoadedProgress = 0.9f;      // where progress waits until the switch

    [SerializeField] CanvasGroup curtain;   // on the full-screen black Image
    [SerializeField] Image loadingBar;      // Image Type: Filled, on the curtain
    [SerializeField] float fadeSeconds = 0.4f;

    bool isLoading;

    void Start()
    {
        curtain.alpha = 1f;
        StartCoroutine(FadeTowards(0f));
    }

    public void FadeTo(string sceneName)
    {
        if (isLoading)
        {
            return;                         // a second click mustn't start a second load
        }
        isLoading = true;
        StartCoroutine(FadeAndLoad(sceneName));
    }

    IEnumerator FadeAndLoad(string sceneName)
    {
        yield return StartCoroutine(FadeTowards(1f));
        Time.timeScale = 1f;                // left paused? The next scene mustn't start frozen.
        AsyncOperation loading = SceneManager.LoadSceneAsync(sceneName);
        while (!loading.isDone)
        {
            loadingBar.fillAmount = loading.progress / LoadedProgress;
            yield return null;
        }
    }

    // Unscaled time, so the curtain moves even while the game is paused.
    IEnumerator FadeTowards(float target)
    {
        curtain.blocksRaycasts = true;      // no clicks get through while it moves
        while (!Mathf.Approximately(curtain.alpha, target))
        {
            curtain.alpha = Mathf.MoveTowards(curtain.alpha, target, Time.unscaledDeltaTime / fadeSeconds);
            yield return null;
        }
        curtain.blocksRaycasts = target > 0f;
    }
}
```

> **Watch out:** a Menu button on a pause screen loads the next scene with
> `Time.timeScale` still 0, and the new scene starts frozen. So the fade runs on unscaled
> time (it would never finish at 0), and the time scale goes back to 1 before loading.

### Idea — buttons that load scenes, with no code

`FadeTo` is `public` and takes one `string`, so a Button's **On Click ()** list can call
it with the scene's name typed in. On a Back button: **+**, drag in the object with
`SceneTransition`, choose **SceneTransition → FadeTo (string)**, and type `Menu` in the box
that appears. A designer can rewire every button in the Inspector, and no script knows
where it leads. C# 4 compares this kind of event, a UnityEvent, with C# events.

### Idea — passing data between scenes

Everything in a scene is destroyed when it unloads, so the track chosen in the Menu must
wait somewhere outside any scene. There are four places:

| Way | Lasts | Use it for | Watch out for |
| --- | --- | --- | --- |
| a **static class** | until the game quits | a choice in one scene for the next | old values, and a scene played on its own |
| a **ScriptableObject** asset | until the game quits | the same, through an asset | set every value, every time |
| **PlayerPrefs** or a file | after quitting, too | settings, best times, the save | C# 14 |
| **`DontDestroyOnLoad`** | until it's destroyed | an object that must keep running | a new copy each time you come back |

**1. A static class.** It belongs to no scene and no object, so it survives every load
(C# 11 covers the risks):

```csharp
using UnityEngine;

// What the Menu hands to the Race.
public static class RaceSetup
{
    public static string TrackName { get; set; }
    public static int Laps { get; set; }

    // With domain reload off, static values last from one Play to the next: reset them.
    [RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.SubsystemRegistration)]
    static void ResetForPlay()
    {
        TrackName = null;
        Laps = 0;
    }
}
```

The Menu sets `RaceSetup.TrackName = "Harbour";` and fades to `Race`, which reads it.

**2. A ScriptableObject as a container.** The Menu and the Race both get a
`[SerializeField] RaceChoice choice;` field, with the same asset in it:

```csharp
using UnityEngine;

// The same job as RaceSetup, through one asset that both scenes reference. The
// properties aren't serialized, so a choice never ends up in the asset's file.
[CreateAssetMenu(fileName = "Race Choice", menuName = "Karts/Race Choice")]
public class RaceChoice : ScriptableObject
{
    public string TrackName { get; set; }
    public int Laps { get; set; }
}
```

It's the one time an asset holds play-time data on purpose: a container, not a description.

**3. PlayerPrefs or a file**, for what must last after quitting, too: a best lap saved
with `PlayerPrefs.SetFloat` is still there for `PlayerPrefs.GetFloat` next week.

**4. `DontDestroyOnLoad`.** It takes a root object out of its scene, into a scene of its
own called **DontDestroyOnLoad** in the Hierarchy, so no scene load destroys it:

```csharp
using UnityEngine;

// Keeps the music playing from the Menu into every scene after it.
public class MenuMusic : MonoBehaviour
{
    void Awake()
    {
        DontDestroyOnLoad(gameObject);
    }
}
```

The trap: go Menu → Race → Menu, and the Menu makes its `MenuMusic` again while the first
still plays. Two tunes, then three. Avoiding that takes a check Level 5 teaches. This
course's games don't need `DontDestroyOnLoad`: the first three ways carry everything.

### Idea — a scene played on its own

In the Editor you'll often press **Play** in the Race scene itself: the Menu never ran, so
`RaceSetup.TrackName` is `null`. Check what the scene got, fall back on a test value, and
say so. `SceneManager.GetActiveScene().name` is the open scene's name:

```csharp
[SerializeField] string testTrack = "Harbour";
[SerializeField] int testLaps = 2;

void Start()
{
    string trackName = RaceSetup.TrackName;
    int laps = RaceSetup.Laps;
    if (trackName == null)
    {
        trackName = testTrack;
        laps = testLaps;
        Debug.LogWarning($"No track was chosen: the {SceneManager.GetActiveScene().name} scene was played on its own, so it uses the test track.", this);
    }
    Debug.Log($"{laps} laps of {trackName}");
}
```

Played on its own, in a scene called `Race`:

```
No track was chosen: the Race scene was played on its own, so it uses the test track.
2 laps of Harbour
```

Without the check, the first line that uses `trackName` fails with a null reference. And a
Restart button needs one line: `SceneManager.LoadScene(SceneManager.GetActiveScene().name);`

### Do it

1. Make three scenes, `Menu`, `Race` and `Results`, and add them to the Scene List in that
   order. Give each a curtain, a `SceneTransition`, and buttons wired in the Inspector
   that go round: Menu → Race → Results → Menu.
2. Pause `Race` with a key (`Time.timeScale = 0`) and click its Menu button. Remove the
   `Time.timeScale = 1f;` line from `FadeAndLoad` and try again: what happens? Put it back.
3. Choose a track in the Menu with `RaceSetup`, and show it in the Race. Then play the
   Race scene on its own, and read the warning.
4. Do the same with a `RaceChoice` asset instead. Which do you find easier to follow?
5. Add `MenuMusic` to the Menu, go round twice, and count the copies in the
   **DontDestroyOnLoad** scene in the Hierarchy.

### Challenge

Pass the race's time from the Race to the Results scene with `RaceSetup`, and keep the best
time ever in PlayerPrefs, so it's still there after you quit. Show both on the Results
screen, with "New best!" when the time beats the old best.

## Chapter 12 — Menus and Tracks

**Goal:** a whole game in six scenes. A **Menu**, with a kart turning on a stand; a
**Garage**, where you choose a kart and a track (the intern's, for now); the three
**tracks**, two of them from the studio's level designer; and the **Results**. Each scene
fades into the next, and the race knows what you chose.

### Idea — six scenes, one route

```
 ┌────────┐ Race or  ┌──────────────────┐  RaceSetup.Track, .Kart, .Mode   ┌─────────────────┐
 │  Menu  │ ───────► │      Garage      │ ───────────────────────────────► │  a track scene  │
 │        │  Time    │ a kart, a track  │          (static)                │ Meadow Loop …   │
 └────────┘  Trial   └──────────────────┘                                  └────────┬────────┘
     ▲                                                                              │ RaceSetup.Result
     └──────────────────────────────── Menu ──────────────── ┌──────────────┐ ◄─────┘
                                       Retry ──────────────► │   Results    │
                                                             └──────────────┘
```

**Data between scenes.** Loading a scene destroys everything in the one before. So how
does the track know which kart you chose in the Garage? C# 11 gave the answer
and its risks: a `static` class, `RaceSetup`, whose values belong to no scene. The
Garage sets `RaceSetup.Kart` and `RaceSetup.Track`; the track's Race Manager reads them;
the race leaves `RaceSetup.Result` for the Results screen. And C# 12' warning:
with domain reload off, static values survive from one press of Play to the next, so
`RaceSetup` resets itself before each Play.

**A scene started on its own.** You'll still press Play in `Meadow Loop` to test it, with
no Garage before it, so `RaceSetup` is empty. The Race Manager then races its **test**
fields, and says so in the Console.

**One Race Kit for three tracks.** Everything a track needs besides the track itself (the
Race Manager, the Player Driver, the camera, the HUD, the countdown, the fader) becomes
one prefab, the **Race Kit**. Fix the HUD once, and all three tracks have the fix. Only
the track's own parts (its grid, checkpoints and racing line) are set in each scene.

**Two tracks from the level designer.** The studio's level designer has finished
Windmill Hill and Lighthouse Cliffs: art and all, in a package. The designer doesn't
have your scripts, so the race's parts come as **markers**: the start grid's slots, the
checkpoints' trigger boxes, the racing line's points, the boost pads and the mud, with no
scripts. You add yours.

**The intern's Garage.** Last summer's intern wrote the Garage screen. It works. Read it,
use it, and don't fix it yet: Chapter 19 does that properly.

### Do it — what one scene hands the next

1. In `Scripts/Race`, `ResultRow.cs`, one racer's line of the results:

```csharp:ResultRow.cs
// One line of the results: who, in what place, their race time and best lap.
public class ResultRow
{
    public ResultRow(int place, string racerName, bool hasFinished, float raceTime, float bestLap, bool isPlayer)
    {
        Place = place;
        RacerName = racerName;
        HasFinished = hasFinished;
        RaceTime = raceTime;
        BestLap = bestLap;
        IsPlayer = isPlayer;
    }

    public int Place { get; private set; }
    public string RacerName { get; private set; }
    public bool HasFinished { get; private set; }     // false: still racing when the race ended
    public float RaceTime { get; private set; }
    public float BestLap { get; private set; }
    public bool IsPlayer { get; private set; }
}
```

`ResultRow` isn't a MonoBehaviour: it's a plain class, made with `new`. A **constructor**
(the method named after the class) fills it in; its properties have a private `set`, so
once made, a row never changes.

2. `RaceResult` and `RaceSetup` need each other: the result holds the race's mode, and
   `RaceSetup` holds a result. Save both, then the Console clears. In `Scripts/Race`,
   `RaceResult.cs`:

<!-- check: together -->

```csharp
using System.Collections.Generic;

// What the race leaves for the Results scene: the mode, the track, every
// racer's line in finishing order, and the player's own numbers. A plain
// class: nothing in it needs Unity.
public class RaceResult
{
    readonly List<ResultRow> rows = new List<ResultRow>();
    readonly List<float> playerLaps = new List<float>();

    public RaceResult(RaceMode mode, TrackInfo track)
    {
        Mode = mode;
        Track = track;
    }

    public RaceMode Mode { get; private set; }
    public TrackInfo Track { get; private set; }
    public IReadOnlyList<ResultRow> Rows { get { return rows; } }
    public IReadOnlyList<float> PlayerLaps { get { return playerLaps; } }
    public int PlayerPlace { get; private set; }
    public float PlayerRaceTime { get; private set; }
    public float PlayerBestLap { get; private set; }

    public void AddRow(ResultRow row)
    {
        rows.Add(row);
        if (row.IsPlayer)
        {
            PlayerPlace = row.Place;
            PlayerRaceTime = row.RaceTime;
            PlayerBestLap = row.BestLap;
        }
    }

    public void AddPlayerLap(float time)
    {
        playerLaps.Add(time);
    }
}
```

3. In `Scripts/Flow`, `RaceSetup.cs`:

```csharp:RaceSetup.cs
using UnityEngine;

public enum RaceMode { Race, TimeTrial }

// What one scene hands to the next: the track, the kart and the mode chosen
// in the Menu and the Garage, and the result the race leaves for the Results
// screen. Static properties belong to no scene and no GameObject, so they
// survive a scene load. That's why they work here, and why they need care.
public static class RaceSetup
{
    public static TrackInfo Track { get; set; }
    public static KartStats Kart { get; set; }
    public static RaceMode Mode { get; set; }
    public static RaceResult Result { get; set; }

    // With domain reload off, static values last from one press of Play to the
    // next. Unity calls this before every Play, so each run starts empty.
    [RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.SubsystemRegistration)]
    static void ResetForPlay()
    {
        Track = null;
        Kart = null;
        Mode = RaceMode.Race;
        Result = null;
    }
}
```

<!-- check: end -->

`[RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.SubsystemRegistration)]` asks
Unity to call `ResetForPlay` at the very start of every Play, before any scene loads:
C# 11's fix for statics that outlive Play mode.

### Do it — tracks and karts as data

4. A track needs more now: an **id** for the save file (Chapter 13), its **scene**, a
   **picture** for the Garage, and which track **opens** it. Replace `TrackInfo.cs`:

```csharp:TrackInfo.cs
using UnityEngine;

// One track, as the Garage and the Results screen know it: its name, its
// scene, its picture and how many laps. A track opens when you finish in the
// top three on the track named in Opened By; the first track has none and is
// open from the start.
[CreateAssetMenu(fileName = "Track Info", menuName = "Pocket Karts/Track Info")]
public class TrackInfo : ScriptableObject
{
    [SerializeField] string id = "meadow-loop";         // for the save file: never shown, never changed
    [SerializeField] string displayName = "Meadow Loop";
    [SerializeField] string sceneName = "Meadow Loop";
    [SerializeField] Sprite picture;
    [SerializeField] int laps = 3;
    [SerializeField] TrackInfo openedBy;
    [SerializeField] float rivalSkillBonus;             // the later tracks' rivals push harder

    public string Id { get { return id; } }
    public string DisplayName { get { return displayName; } }
    public string SceneName { get { return sceneName; } }
    public Sprite Picture { get { return picture; } }
    public int Laps { get { return laps; } }
    public TrackInfo OpenedBy { get { return openedBy; } }
    public float RivalSkillBonus { get { return rivalSkillBonus; } }
}
```

5. And a kart needs a picture. Replace `KartStats.cs`:

```csharp
using UnityEngine;

// One kart's numbers, kept in an asset: Balanced, Speedy and Heavy each have
// one, and each kart variant points at its own. A KartStats asset is read-only
// data. The kart's speed, boost and laps live on its components, never in here.
[CreateAssetMenu(fileName = "Kart Stats", menuName = "Pocket Karts/Kart Stats")]
public class KartStats : ScriptableObject
{
    [SerializeField] string displayName = "Balanced";
    [SerializeField] Sprite picture;

    [Header("Driving")]
    [SerializeField] float topSpeed = 22f;          // metres a second
    [SerializeField] float acceleration = 14f;      // metres a second, every second
    [SerializeField] float turnRate = 110f;         // degrees a second, at full steer
    [SerializeField] float grip = 8f;               // how fast sliding sideways is stopped
    [SerializeField] float driftGrip = 1.5f;        // the same, while drifting
    [SerializeField] float mass = 150f;             // kilograms

    [Header("Boost")]
    [SerializeField] float boostSpeed = 8f;         // added to the top speed
    [SerializeField] float boostTime = 1.5f;        // seconds, from a full meter

    public string DisplayName { get { return displayName; } }
    public Sprite Picture { get { return picture; } }
    public float TopSpeed { get { return topSpeed; } }
    public float Acceleration { get { return acceleration; } }
    public float TurnRate { get { return turnRate; } }
    public float Grip { get { return grip; } }
    public float DriftGrip { get { return driftGrip; } }
    public float Mass { get { return mass; } }
    public float BoostSpeed { get { return boostSpeed; } }
    public float BoostTime { get { return boostTime; } }
}
```

6. `Art/Pictures` holds a picture of each kart and each track. Select them all, **Texture
   Type** **Sprite (2D and UI)**, **Apply**. Drag `Balanced`, `Speedy` and `Heavy` into
   their stats assets' **Picture**.
7. Fill in `Data/Tracks/Meadow Loop` (**Id** `meadow-loop`, **Scene Name** `Meadow Loop`,
   its **Picture**, **Laps** `3`, **Opened By** empty), and make two more Track Infos:

| Asset | Id | Display and Scene Name | Opened By | Rival Skill Bonus |
| --- | --- | --- | --- | --- |
| `Windmill Hill` | `windmill-hill` | Windmill Hill | Meadow Loop | 0.03 |
| `Lighthouse Cliffs` | `lighthouse-cliffs` | Lighthouse Cliffs | Windmill Hill | 0.03 |

   Each with its picture, and 3 laps. The **Id** is never shown and never changes, even if
   the name does: the save file will know a track by it.

### Do it — the race reads RaceSetup

8. Replace `RaceManager.cs`. What's new: the **test** fields, used only when the scene
   starts on its own; the **mode**, Race or Time Trial (you alone, for now: Chapter 14
   adds a ghost); the **result**, left in `RaceSetup`; and `onRaceOver`, a **UnityEvent**,
   raised three seconds after the end, which the fader will be wired to:

```csharp
using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;

public enum RaceState { Countdown, Racing, Finishing, Over }

// The race, as a state machine: Countdown, Racing, Finishing (you're home, and
// the others have 15 seconds to finish too), Over. It puts the karts on the
// grid from RaceSetup (your kart, and three rivals in a Race; you alone in
// Time Trial), plugs a driver into each when the lights go green, and keeps
// the standings: a List of IRacer, sorted four times a second. When the race
// is over it leaves a RaceResult in RaceSetup for the Results scene, and
// raises onRaceOver, which the Scene Fader is wired to.
public class RaceManager : MonoBehaviour
{
    const float SortInterval = 0.25f;       // seconds between sorting the standings
    const float FinishingTime = 15f;        // seconds the others get once you've finished
    const float ResultsDelay = 3f;          // seconds of the finished race before the results
    const float FinishedAhead = 100000f;    // see RaceOrder
    const int CountdownFrom = 3;

    [Header("When this scene is started on its own")]
    [SerializeField] TrackInfo testTrack;
    [SerializeField] KartStats testKart;
    [SerializeField] RaceMode testMode = RaceMode.Race;

    [Header("The race")]
    [SerializeField] Racer[] kartPrefabs;           // the three kart variants: each one's stats say which it is
    [SerializeField] RivalProfile[] rivals;
    [SerializeField] float[] rivalLanes = { -1f, 1f, 0f };  // metres either side of the racing line
    [SerializeField] LayerMask kartLayers;

    [Header("The track")]
    [SerializeField] StartGrid startGrid;
    [SerializeField] Checkpoint[] checkpoints;      // the finish line first, then in order round the track
    [SerializeField] RacingLine racingLine;

    [Header("The Race Kit")]
    [SerializeField] PlayerDriver playerDriver;
    [SerializeField] ChaseCamera chaseCamera;
    [SerializeField] UnityEvent onRaceOver;

    readonly List<IRacer> standings = new List<IRacer>();
    readonly List<Racer> karts = new List<Racer>();
    readonly Dictionary<Racer, RivalProfile> rivalOf = new Dictionary<Racer, RivalProfile>();
    float timeToSort;
    float finishingTimeLeft;

    public RaceState State { get; private set; }
    public RaceMode Mode { get; private set; }
    public TrackInfo Track { get; private set; }
    public float RaceTime { get; private set; }
    public int Laps { get { return Track.Laps; } }
    public bool IsRacing { get { return State == RaceState.Racing || State == RaceState.Finishing; } }
    public Racer Player { get; private set; }
    public IReadOnlyList<IRacer> Standings { get { return standings; } }

    public event Action<int> CountdownTicked;       // 3, 2, 1, then 0 for GO
    public event Action RaceStarted;
    public event Action RaceOver;

    void Awake()
    {
        // From the Garage, RaceSetup says what to race. Started on its own,
        // this scene has no Garage before it, so it uses the test fields.
        if (RaceSetup.Track == null)
        {
            Debug.LogWarning($"No race was set up (was this scene started on its own?): racing the Test Track, {testTrack.DisplayName}.", this);
            RaceSetup.Track = testTrack;
            RaceSetup.Kart = testKart;
            RaceSetup.Mode = testMode;
        }
        Track = RaceSetup.Track;
        Mode = RaceSetup.Mode;
    }

    void Start()
    {
        PlaceKarts();
        StartCoroutine(Countdown());
    }

    void Update()
    {
        if (!IsRacing)
        {
            return;
        }
        RaceTime += Time.deltaTime;

        timeToSort -= Time.deltaTime;
        if (timeToSort <= 0f)
        {
            timeToSort = SortInterval;
            SortStandings();
        }

        if (State == RaceState.Finishing)
        {
            finishingTimeLeft -= Time.deltaTime;
            if (finishingTimeLeft <= 0f || EveryKartHasFinished())
            {
                EnterState(RaceState.Over);
            }
        }
    }

    void EnterState(RaceState state)
    {
        State = state;
        switch (state)
        {
            case RaceState.Racing:
                PlugInDrivers();
                RaceStarted?.Invoke();
                break;
            case RaceState.Finishing:
                finishingTimeLeft = FinishingTime;
                break;
            case RaceState.Over:
                SortStandings();
                RaceSetup.Result = MakeResult();
                RaceOver?.Invoke();
                StartCoroutine(ShowResults());
                break;
        }
    }

    // A racer has crossed the line for the last time. Racer calls this.
    public void ReportFinish(Racer racer)
    {
        if (racer != Player)
        {
            return;
        }
        // You're home. The computer drives your kart from here; in Time Trial, that's the end.
        DriveByComputer(racer, null, 0f);
        if (Mode == RaceMode.TimeTrial || EveryKartHasFinished())
        {
            EnterState(RaceState.Over);
        }
        else
        {
            EnterState(RaceState.Finishing);
        }
    }

    // ------------------------------------------------------------------ the start

    void PlaceKarts()
    {
        int playerSlot = Mode == RaceMode.Race ? rivals.Length : 0;     // at the back of a race
        Player = SpawnKart(PrefabFor(RaceSetup.Kart), startGrid.Slot(playerSlot), "You", true);

        if (Mode == RaceMode.Race)
        {
            for (int i = 0; i < rivals.Length; i++)
            {
                Racer rival = SpawnKart(rivals[i].KartPrefab, startGrid.Slot(i), rivals[i].DisplayName, false);
                rival.GetComponent<KartPaint>().Paint(rivals[i].Colour);
                rivalOf[rival] = rivals[i];
            }
        }
        chaseCamera.Follow(Player.Kart);
    }

    Racer SpawnKart(Racer prefab, Transform slot, string racerName, bool isPlayer)
    {
        Racer racer = Instantiate(prefab, slot.position, slot.rotation);
        racer.name = racerName;
        racer.Setup(racerName, isPlayer, this, checkpoints);
        karts.Add(racer);
        standings.Add(racer);
        return racer;
    }

    // The kart variant whose stats are the kart chosen in the Garage.
    Racer PrefabFor(KartStats stats)
    {
        foreach (Racer prefab in kartPrefabs)
        {
            if (prefab.GetComponent<KartController>().Stats == stats)
            {
                return prefab;
            }
        }
        Debug.LogWarning($"No kart prefab uses {stats.name}: racing the first one.", this);
        return kartPrefabs[0];
    }

    IEnumerator Countdown()
    {
        State = RaceState.Countdown;
        yield return new WaitForSeconds(1f);
        for (int count = CountdownFrom; count > 0; count--)
        {
            CountdownTicked?.Invoke(count);
            yield return new WaitForSeconds(1f);
        }
        CountdownTicked?.Invoke(0);
        EnterState(RaceState.Racing);
    }

    // The player's kart gets the Player Driver, and each rival's the computer.
    void PlugInDrivers()
    {
        playerDriver.Drive(Player);
        foreach (KeyValuePair<Racer, RivalProfile> pair in rivalOf)
        {
            int lane = karts.IndexOf(pair.Key) % rivalLanes.Length;
            DriveByComputer(pair.Key, pair.Value, rivalLanes[lane]);
        }
    }

    void DriveByComputer(Racer racer, RivalProfile profile, float lane)
    {
        float skill = profile != null ? profile.Skill + Track.RivalSkillBonus : 1f;
        AIDriver driver = racer.gameObject.AddComponent<AIDriver>();
        driver.Setup(racingLine, Mathf.Clamp01(skill), lane, kartLayers);
        racer.Kart.Driver = driver;
    }

    // ------------------------------------------------------------------ the standings

    // Sort takes a way to compare two racers. The lambda says: whichever has
    // the bigger RaceOrder comes first.
    void SortStandings()
    {
        standings.Sort((a, b) => RaceOrder(b).CompareTo(RaceOrder(a)));
    }

    // One number for each racer, bigger for further ahead. A racer who has
    // finished is ahead of everyone still racing, and an earlier finish is
    // ahead of a later one.
    static float RaceOrder(IRacer racer)
    {
        if (racer.HasFinished)
        {
            return FinishedAhead - racer.FinishTime;
        }
        return racer.Progress;
    }

    bool EveryKartHasFinished()
    {
        foreach (Racer kart in karts)
        {
            if (!kart.HasFinished)
            {
                return false;
            }
        }
        return true;
    }

    // ------------------------------------------------------------------ the end

    RaceResult MakeResult()
    {
        RaceResult result = new RaceResult(Mode, Track);
        int place = 1;
        foreach (IRacer racer in standings)
        {
            if (racer is Racer kart)
            {
                result.AddRow(new ResultRow(place, kart.RacerName, kart.HasFinished, kart.FinishTime, kart.BestLap, kart.IsPlayer));
                place++;
            }
        }
        foreach (float lap in Player.LapTimes)
        {
            result.AddPlayerLap(lap);
        }
        return result;
    }

    IEnumerator ShowResults()
    {
        yield return new WaitForSeconds(ResultsDelay);
        onRaceOver.Invoke();
    }
}
```

`if (racer is Racer kart)` in `MakeResult` is the type test from Chapter 10's boost pad:
the standings hold `IRacer`s, and only karts get a line in the results. A UnityEvent is
an event for designers: its listeners are added in the Inspector, not in code, which is
right for "when the race is over, fade to the Results".

9. The HUD shows no place in Time Trial (you're alone), and says *FINISH!*. Replace
   `RaceHud.cs`:

```csharp
using TMPro;
using UnityEngine;

// The race's heads-up display: your place, the lap, the race time, your best
// lap, the speed, the boost gauge, and Wrong way!. It listens to the Race Manager and your
// Racer for what happens, and reads the numbers that change all the time
// every frame.
public class RaceHud : MonoBehaviour
{
    const float KilometresPerHour = 3.6f;   // for each metre a second

    [SerializeField] RaceManager race;
    [SerializeField] TMP_Text placeText;
    [SerializeField] TMP_Text lapText;
    [SerializeField] TMP_Text timeText;
    [SerializeField] TMP_Text bestLapText;
    [SerializeField] TMP_Text speedText;
    [SerializeField] GameObject wrongWay;
    [SerializeField] TMP_Text finishText;
    [SerializeField] BoostGauge boostGauge;

    Racer player;

    void OnEnable()
    {
        race.RaceStarted += OnRaceStarted;
        race.RaceOver += OnRaceOver;
    }

    void OnDisable()
    {
        race.RaceStarted -= OnRaceStarted;
        race.RaceOver -= OnRaceOver;
        if (player != null)
        {
            player.LapCompleted -= OnLapCompleted;
            player.Finished -= OnFinished;
        }
    }

    void Start()
    {
        wrongWay.SetActive(false);
        finishText.gameObject.SetActive(false);
        placeText.gameObject.SetActive(race.Mode == RaceMode.Race);
        lapText.text = $"LAP 1/{race.Laps}";
        timeText.text = "0:00.00";
        bestLapText.text = $"BEST {TimeText.Format(0f)}";
        speedText.text = "0 km/h";
    }

    // The karts are on the grid by now: listen to yours.
    void OnRaceStarted()
    {
        player = race.Player;
        player.LapCompleted += OnLapCompleted;
        player.Finished += OnFinished;
        boostGauge.Watch(player.GetComponent<BoostMeter>());
    }

    void Update()
    {
        if (player == null)
        {
            return;
        }
        timeText.text = TimeText.Format(race.RaceTime);
        float speed = Mathf.Abs(player.Kart.Speed);
        speedText.text = $"{Mathf.RoundToInt(speed * KilometresPerHour)} km/h";
        placeText.text = $"{TimeText.Place(PlaceOf(player))} / {race.Standings.Count}";
        wrongWay.SetActive(player.IsWrongWay && !player.HasFinished);
    }

    void OnLapCompleted(int lap, float time)
    {
        bestLapText.text = $"BEST {TimeText.Format(player.BestLap)}";
        if (lap < race.Laps)
        {
            lapText.text = $"LAP {lap + 1}/{race.Laps}";
        }
    }

    void OnFinished()
    {
        finishText.text = race.Mode == RaceMode.Race ? $"{TimeText.Place(PlaceOf(player))}!" : "FINISH!";
        finishText.gameObject.SetActive(true);
    }

    void OnRaceOver()
    {
        wrongWay.SetActive(false);
        finishText.gameObject.SetActive(true);
    }

    int PlaceOf(IRacer racer)
    {
        int place = 1;
        foreach (IRacer other in race.Standings)
        {
            if (other == racer)
            {
                return place;
            }
            place++;
        }
        return place;
    }
}
```

### Do it — the fader

10. In `Scripts/Flow`, `SceneFader.cs`:

```csharp:SceneFader.cs
using System.Collections;
using UnityEngine;
using UnityEngine.SceneManagement;

// Fades the screen from black when a scene starts, and to black before the next
// one loads. Every scene has one. Buttons call FadeTo through their On Click ()
// list in the Inspector, with the scene's name typed in: a Back button needs no
// code of its own.
public class SceneFader : MonoBehaviour
{
    [SerializeField] CanvasGroup curtain;
    [SerializeField] float fadeTime = 0.35f;

    bool isLoading;

    void Start()
    {
        StartCoroutine(Fade(1f, 0f));
    }

    public void FadeTo(string sceneName)
    {
        if (isLoading)
        {
            return;     // a second click mustn't start a second load
        }
        isLoading = true;
        StartCoroutine(FadeAndLoad(sceneName));
    }

    IEnumerator FadeAndLoad(string sceneName)
    {
        yield return StartCoroutine(Fade(0f, 1f));
        Time.timeScale = 1f;    // a scene left from the pause menu mustn't start paused
        AsyncOperation loading = SceneManager.LoadSceneAsync(sceneName);
        while (!loading.isDone)
        {
            yield return null;
        }
    }

    // Unscaled time, so it fades even while the game is paused.
    IEnumerator Fade(float from, float to)
    {
        curtain.blocksRaycasts = true;
        for (float t = 0f; t < fadeTime; t += Time.unscaledDeltaTime)
        {
            curtain.alpha = Mathf.Lerp(from, to, t / fadeTime);
            yield return null;
        }
        curtain.alpha = to;
        curtain.blocksRaycasts = to > 0f;
    }
}
```

`yield return StartCoroutine(Fade(0f, 1f))` waits for the whole fade before going on.
`LoadSceneAsync` loads the next scene while this one keeps drawing (the black curtain),
so the game never freezes. `Time.unscaledDeltaTime` keeps counting when the game is
paused (Chapter 15's pause sets the time scale to 0), and `blocksRaycasts` stops clicks
reaching the buttons under the curtain while it's up.

11. The **Scene Fader** prefab: **GameObject → UI → Canvas**, named `Scene Fader`, **Sort
    Order** `100` (over every other canvas), with the usual Canvas Scaler. Inside it, an
    **Image** `Curtain`, stretched to fill the canvas, colour `0B0F14`, with a **Canvas
    Group**. Add **SceneFader** to `Scene Fader`, drag `Curtain` into **Curtain**, and
    drag `Scene Fader` into `Prefabs/UI`. (If Unity made a second EventSystem with it,
    delete that one.)

### Do it — the Race Kit

12. In `Meadow Loop`: rename `Main Camera` to `Chase Camera`. Put a `Scene Fader` in the
    scene. On `Race Manager`, under **When this scene is started on its own**: **Test
    Track** `Meadow Loop`, **Test Kart** `Balanced`, **Test Mode** `Race`. In **On Race
    Over ()**: **+**, drag in `Scene Fader`, choose **SceneFader → FadeTo (string)**, and
    type `Results`.
13. **GameObject → Create Empty**, `Race Kit`, at `(0, 0, 0)`. Drag into it: `Race
    Manager`, `Player Driver`, `Chase Camera`, `Canvas`, `EventSystem` and `Scene
    Fader`. Then drag `Race Kit` into `Assets/Prefabs`. One prefab, with every link
    between its parts kept. The Race Manager's **Start Grid**, **Checkpoints** and
    **Racing Line** are this scene's: they stay as overrides on this instance.
14. Press Play in `Meadow Loop` on its own: the Console warns *No race was set up (was
    this scene started on its own?): racing the Test Track, Meadow Loop.* and the race
    runs as before. At the end, the screen fades out and the Console complains that
    `Results` isn't in the build. It will be, in a moment.

### Do it — the Menu

15. In `Scripts/Flow`, `Turntable.cs`, for the kart on its stand:

```csharp:Turntable.cs
using UnityEngine;

// Turns the Menu's kart slowly on its stand.
public class Turntable : MonoBehaviour
{
    [SerializeField] float degreesPerSecond = 20f;

    void Update()
    {
        transform.Rotate(0f, degreesPerSecond * Time.deltaTime, 0f);
    }
}
```

16. And `MainMenu.cs`:

```csharp
using UnityEngine;

// The Menu scene: Race, Time Trial, Credits and Quit. Race and Time Trial say
// which mode in RaceSetup, then go to the Garage to choose a kart and a
// track. Credits is a panel its button shows and hides.
public class MainMenu : MonoBehaviour
{
    [SerializeField] SceneFader fader;
    [SerializeField] GameObject quitButton;
    [SerializeField] GameObject creditsPanel;

    void Start()
    {
        // A web page can't quit, so the Quit button only shows in a PC build or the Editor.
        quitButton.SetActive(Application.platform != RuntimePlatform.WebGLPlayer);
        creditsPanel.SetActive(false);
    }

    public void Race()
    {
        RaceSetup.Mode = RaceMode.Race;
        fader.FadeTo("Garage");
    }

    public void TimeTrial()
    {
        RaceSetup.Mode = RaceMode.TimeTrial;
        fader.FadeTo("Garage");
    }

    public void Quit()
    {
        Application.Quit();
    }
}
```

`Application.platform` says what the game is running on: in a web page there's nothing to
quit to, so there's no Quit button.

17. **File → New Scene**, **Basic (URP)**, saved as `Assets/Scenes/Menu`. The stage: a
    **Plane** `Lawn` (Scale `(6, 1, 6)`, the `Grass` material); a **Cylinder** `Stand`
    (Position `(0, 0.12, 0)`, Scale `(3.2, 0.12, 3.2)`, a new white material `Stand`,
    `F4F1EA`); an empty `Turntable` at `(0, 0.465, 0)` with **Turntable**; and inside it
    the model `Art/Kart/kart`, Rotation `(0, -60, 0)`: facing forward, and a little
    towards the camera. (A model, not a Kart prefab: a kart for looking at needs no
    physics.) A few trees and flowers behind. `Main Camera`: Position `(-1.6, 1.6,
    -4.6)`, Rotation `(10, 5, 0)`, **Field of View** `45`.
18. The buttons, on a panel on the left. A **Canvas** (Scale With Screen Size, 1920 ×
    1080, Match 0.5) and a `Scene Fader`. In the Canvas, a panel `Side Panel` (middle
    left, **Pivot** (0, 0.5), Pos `(80, 0)`, 640 × 880) holding: an image `Logo` (top
    centre, Pos `(0, -40)`, 120 × 120, `Art/Icons/RaceCar`, gold); a text `Title`, `POCKET
    KARTS`, 70, cream (top centre, Pos `(0, -170)`, 600 × 90); a text `Subtitle`, *The
    fastest toys in the garden*, 26, grey (Pos `(0, -260)`, 600 × 40); and four
    **Button - TextMeshPro**s, each with the panel look (`UISprite`, Sliced, multiplier
    0.4) and a 40-point label in `1C2633`:

| Button | Pos | Size | Colour |
| --- | --- | --- | --- |
| `Race` | (0, 60) | 460 × 92 | gold `FFC93C` |
| `Time Trial` | (0, −50) | 460 × 92 | gold |
| `Credits` | (0, −160) | 460 × 80 | sky `6EC6FF` |
| `Quit` | (0, −255) | 460 × 80 | tomato `FF6B4A` |

19. **The credits.** The icons are CC BY 3.0, so the game must name their authors. In the
    Canvas, `Credits Panel`: an Image stretched over the screen, black at alpha 153
    (dimming the menu), with a panel `Window` (middle centre, 1300 × 860, `1C2633`
    opaque) holding a title `CREDITS` (52, gold) and a text with the credits from
    `CREDITS.md`: the models (Fertile Soil Productions, CC0), the icons (Delapouite,
    Lorc and Skoll, game-icons.net, CC BY 3.0), the sounds and music, the font (Russo
    One, SIL Open Font License). Turn on **Rich Text** and use `<b>` for the headings. A
    `Close` button (bottom centre, Pos `(0, 40)`, 260 × 76, gold): **On Click ()** →
    `Credits Panel` → **GameObject → SetActive**, unticked.
20. An empty `Main Menu` with **MainMenu**: drag in the fader, `Quit`, and `Credits Panel`.
    The buttons' **On Click ()**: `Race` → **MainMenu → Race**; `Time Trial` →
    **MainMenu → TimeTrial**; `Credits` → `Credits Panel` → **GameObject → SetActive**,
    ticked; `Quit` → **MainMenu → Quit**.

### Do it — the intern's Garage

21. Your trainer shares `GarageScreen.cs`. Put it in `Scripts/Flow`. Here it is:

```csharp
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;
using TMPro;

// garage screen
public class GarageScreen : MonoBehaviour
{
    public KartStats[] karts;
    public TrackInfo[] tracks;
    public GameObject[] cards;
    public GameObject trackCard;
    public Transform list;
    public TMP_Text m;
    public int k;
    public int t;

    void Start()
    {
        // set the mode
        if (RaceSetup.Mode == RaceMode.Race)
            m.text = "RACE";
        else
            m.text = "TIME TRIAL";

        // make the track cards
        for (int i = 0; i < tracks.Length; i++)
        {
            GameObject c = Instantiate(trackCard, list);
            c.transform.Find("Picture").GetComponent<Image>().sprite = tracks[i].Picture;
            c.transform.Find("Name").GetComponent<TMP_Text>().text = tracks[i].DisplayName.ToUpper();
            int n = i;
            c.GetComponent<Button>().onClick.AddListener(() => t = n);
        }

        // kart buttons
        cards[0].GetComponent<Button>().onClick.AddListener(() => k = 0);
        cards[1].GetComponent<Button>().onClick.AddListener(() => k = 1);
        cards[2].GetComponent<Button>().onClick.AddListener(() => k = 2);
    }

    void Update()
    {
        // show the karts
        for (int i = 0; i < 3; i++)
        {
            cards[i].transform.Find("Picture").GetComponent<Image>().sprite = karts[i].Picture;
            cards[i].transform.Find("Name").GetComponent<TMP_Text>().text = karts[i].DisplayName.ToUpper();
            string s = "";
            s = s + "Speed: " + karts[i].TopSpeed + "\n";
            s = s + "Acceleration: " + karts[i].Acceleration + "\n";
            s = s + "Grip: " + karts[i].Grip + "\n";
            s = s + "Weight: " + karts[i].Mass;
            cards[i].transform.Find("Stats").GetComponent<TMP_Text>().text = s;
            if (i == k)
                cards[i].transform.Find("Frame").gameObject.SetActive(true);
            else
                cards[i].transform.Find("Frame").gameObject.SetActive(false);
        }

        // show the tracks
        for (int i = 0; i < list.childCount; i++)
        {
            if (i == t)
                list.GetChild(i).Find("Frame").gameObject.SetActive(true);
            else
                list.GetChild(i).Find("Frame").gameObject.SetActive(false);
        }
    }

    // go button
    public void Go()
    {
        RaceSetup.Kart = karts[k];
        RaceSetup.Track = tracks[t];
        SceneManager.LoadScene(tracks[t].SceneName);
    }
}
```

Read it once. It shows the kart cards (picture, name, numbers), makes a card for each
track, remembers which kart (`k`) and which track (`t`) you clicked, and **Go** sets
`RaceSetup` and loads the track. It works. Chapter 19 is about everything else in it.

22. It finds its parts **by name**: a kart card's children must be called `Picture`,
    `Name`, `Stats` and `Frame`, and so must a track card's (without `Stats`). Build the
    scene to match. **File → New Scene**, **Basic (URP)**, `Assets/Scenes/Garage`; set the
    camera's **Background** to a solid colour `2B3A4D`. A Canvas, an EventSystem, a
    `Scene Fader`. In the Canvas:
    - A text `Title`, `GARAGE`, 70, cream, top left; a text `Mode`, `RACE`, 52, gold, top
      right.
    - Three **kart cards**, `Kart Card 1`, `2` and `3`, in a row near the top: each a
      **Button** with the panel look (`1C2633` at alpha 224, 440 × 420), holding an
      **Image** `Picture` (360 × 220, near the top), a text `Name` (40, cream) under it,
      a text `Stats` (26, grey, four lines) under that, and an **Image** `Frame` (the
      card's size, `UISprite`, gold, **Fill Center** unticked: just an outline).
    - A **Track Card** prefab: the same, 460 × 180, with `Picture` (on the left, 230 ×
      150), `Name` (36, cream, on the right) and `Frame`; drag it into `Prefabs/UI` and
      delete it from the scene. Under the kart cards, an empty `Track List` (1800 × 200)
      with a **Horizontal Layout Group** (**Spacing** 30, child alignment middle centre,
      no **Control Child Size**): the intern's script fills it.
    - `Back` (bottom left, sky): **On Click ()** → the fader → **SceneFader → FadeTo**,
      `Menu`. `GO!` (bottom right, gold).
23. An empty `Garage` with **GarageScreen**: **Karts** `Balanced`, `Speedy`, `Heavy` (in
    the same order as the cards!), **Tracks** `Meadow Loop`, `Windmill Hill`, `Lighthouse
    Cliffs`, **Cards** the three kart cards, **Track Card** the prefab, **List** `Track
    List`, **M** the `Mode` text. `GO!`'s **On Click ()** → **GarageScreen → Go**.

### Do it — the Results

24. In `Scripts/UI`, `ResultLine.cs`:

```csharp:ResultLine.cs
using TMPro;
using UnityEngine;
using UnityEngine.UI;

// One line of the Results screen: a place, a name, a time and a best lap.
// Your own line is highlighted.
public class ResultLine : MonoBehaviour
{
    [SerializeField] TMP_Text placeText;
    [SerializeField] TMP_Text nameText;
    [SerializeField] TMP_Text timeText;
    [SerializeField] TMP_Text bestText;
    [SerializeField] Image background;
    [SerializeField] Color playerColour = new Color(1f, 0.8f, 0.2f, 0.35f);

    public void Show(string place, string racerName, string time, string best, bool isPlayer)
    {
        placeText.text = place;
        nameText.text = racerName;
        timeText.text = time;
        bestText.text = best;
        if (isPlayer)
        {
            background.color = playerColour;
        }
    }
}
```

25. The **Result Line** prefab: an **Image** `Result Line` (1100 × 70, `0E141C` at alpha
    150) with **ResultLine**, and four texts in a row, 34-point cream: `Place` (left, 120
    wide), `Name` (360), `Time` (240), `Best` (240, grey). Drag them and the Image into
    ResultLine's fields, then the whole into `Prefabs/UI`.
26. In `Scripts/Flow`, `ResultsScreen.cs`:

```csharp
using UnityEngine;
using TMPro;

// The Results screen: your place in big type and the standings; in Time
// Trial, your laps. Retry is a button; Menu calls the Scene Fader.
public class ResultsScreen : MonoBehaviour
{
    [SerializeField] SceneFader fader;
    [SerializeField] TMP_Text placeText;
    [SerializeField] TMP_Text titleText;
    [SerializeField] ResultLine linePrefab;
    [SerializeField] Transform lineList;

    RaceResult result;

    void Start()
    {
        result = RaceSetup.Result;
        if (result == null)
        {
            Debug.LogWarning("There's no race result to show (was the Results scene started on its own?).", this);
            placeText.text = "";
            titleText.text = "NO RACE YET";
            return;
        }

        titleText.text = $"{result.Track.DisplayName.ToUpper()} · {(result.Mode == RaceMode.Race ? "RACE" : "TIME TRIAL")}";
        if (result.Mode == RaceMode.Race)
        {
            placeText.text = TimeText.Place(result.PlayerPlace);
            ShowStandings();
        }
        else
        {
            placeText.text = TimeText.Format(result.PlayerBestLap);
            ShowLaps();
        }
    }

    public void Retry()
    {
        fader.FadeTo(result != null ? result.Track.SceneName : "Menu");
    }

    void ShowStandings()
    {
        foreach (ResultRow row in result.Rows)
        {
            string time = row.HasFinished ? TimeText.Format(row.RaceTime) : "racing";
            Instantiate(linePrefab, lineList).Show(TimeText.Place(row.Place), row.RacerName, time, TimeText.Format(row.BestLap), row.IsPlayer);
        }
    }

    void ShowLaps()
    {
        for (int i = 0; i < result.PlayerLaps.Count; i++)
        {
            bool isBest = result.PlayerLaps[i] == result.PlayerBestLap;
            Instantiate(linePrefab, lineList).Show($"Lap {i + 1}", isBest ? "best lap" : "", TimeText.Format(result.PlayerLaps[i]), "", isBest);
        }
    }
}
```

27. **File → New Scene**, **Basic (URP)**, `Assets/Scenes/Results`, background `2B3A4D`.
    Canvas, EventSystem, `Scene Fader`. In the Canvas: an image `Trophy` (top left, Pos
    `(80, -60)`, 150 × 150, gold); a text `Place`, `1st`, 150, gold (top left, Pos `(260,
    -40)`, 900 × 180); a text `Title` (top right, Pos `(-80, -70)`, 900 × 60, 38, cream,
    right-aligned); a panel `Standings` (middle centre, Pos `(0, -60)`, 1180 × 420) with
    an empty `Lines` inside (1100 × 380) holding a **Vertical Layout Group** (**Spacing**
    12, upper centre, no **Control Child Size**); and two buttons, bottom centre, Pos
    `(-330, 50)` `Retry` (sky) and Pos `(330, 50)` `Menu` (sky).
28. An empty `Results` with **ResultsScreen**: the fader, `Place`, `Title`, the Result Line
    prefab, `Lines`. `Retry` → **ResultsScreen → Retry**; `Menu` → the fader →
    **SceneFader → FadeTo**, `Menu`.

### Do it — the designer's tracks

29. Your trainer shares `Pocket Karts Tracks 1.0.unitypackage` and its README. Read the
    README, then **Assets → Import Asset Package…** and **Import**. It brings
    `Assets/Level Design`: the two scenes, and an `Art` folder with the pieces, props and
    materials they use. Look: those are **copies** of models you already have, in
    `Art/Track` and `Art/Nature`. Unity knows an asset by its **GUID**, and your copies'
    GUIDs were made on your computer when you imported the art; the designer's scenes
    point at the designer's. No conflict, just two copies: fine.
30. Move the two scenes into `Assets/Scenes` (in Unity's Project window). Open `Windmill
    Hill`. Everything is on the **Default** layer: a package can't bring layers, they're
    a project setting. Set `Track` to your **Track** layer, **Yes, change children**.
31. Add your scripts to the markers in `Race`:
    - `Start Grid`: **StartGrid**, with its four slots in **Slots**.
    - `Checkpoints`: select all of them, **Add Component → Checkpoint** (it lands on
      each); then remove it from `Finish Line` and give that **FinishLine** instead. On
      each, set **Index** (the number in its name; the finish line is 0) and drag its
      own `Respawn Point` into **Respawn Point**.
    - `Racing Line`: **RacingLine**.
    - Each `Boost Pad`: **BoostPad**. `Mud Patch`: **MudPatch**.
32. Drag a `Race Kit` into the scene. On its Race Manager, set the track's parts: **Start
    Grid**, the **Checkpoints** (in order, finish line first), the **Racing Line**; and
    the **Test Track**, `Windmill Hill`. On the windmill, `Scenery` → the windmill's
    `Sails Pivot`: add **Turntable**, so the sails turn.
33. The same for `Lighthouse Cliffs`: Track layer, the markers' scripts (it has two boost
    pads and no mud), a Race Kit, the Race Manager's fields, Test Track `Lighthouse
    Cliffs`.
34. **File → Build Profiles**: in the **Scene List**, add `Menu` (first), `Garage`, `Meadow
    Loop`, `Windmill Hill`, `Lighthouse Cliffs` and `Results`.

### Test it

- Open `Menu` and press **Play**. The kart turns on its stand. **Credits**, then
  **Close**. **Race**: the screen fades to the Garage, which says `RACE`. Click the
  Speedy card and Windmill Hill, and **GO!**: you race a Speedy Kart round Windmill Hill,
  up the hill, over the bridge and under it. The rivals use the designer's racing line.
- At the end the screen fades to the Results: your place, and the standings, your line
  highlighted. **Retry** races the same track again; **Menu** goes back.
- **Time Trial** from the Menu: the Garage says `TIME TRIAL`, and you race alone; the
  Results show your three laps, the best one highlighted.
- Press Play in `Results` on its own: *NO RACE YET*, and a warning saying why.

### Commit

*Add the Menu, the Garage, the Results and the designer's tracks.* Push.

### Challenge

Every track opens, today: nothing checks a lock. That's Chapter 13. But one thing you can
do now: the intern's Garage forgets your kart every time you come back to it, and always
picks Balanced. Where would you keep the last kart chosen, so the Garage can show it
picked? (Two answers: one lasts until you quit, one lasts forever. Which needs Chapter
13?)

## C# 13 — Exceptions: try and catch

**Goal:** you can read an exception in the Console, catch the ones you expect with `try`
and `catch`, tidy up with `finally`, log what went wrong with `Debug.LogError`, and
avoid the ways `catch` hides bugs (Associate: Debugging — use debug messages to find
why code fails).

### Idea — when the program can't go on

Some problems a method can't carry on from: a file that isn't there, text that isn't a
number, a variable that's `null`. C# **throws an exception**: it stops the method at
that line, then the method that called it, and so on, until something **catches** it.
If nothing does, Unity does: it shows the exception in red in the Console and skips the
rest of that `Start`, or that frame's `Update`. The game itself keeps running.

```csharp
int lives = int.Parse("three");
Debug.Log($"Lives: {lives}");     // never runs
```

```
FormatException: Input string was not in a correct format.
```

The first word is the exception's **type**; after the colon comes its **message**.
Click it: the lines below, the **stack trace**, list the methods it passed through, and
one of them names your script and the line.

| Exception | Thrown when | For example |
| --- | --- | --- |
| `NullReferenceException` | you use a variable that holds `null` | a field left empty in the Inspector |
| `FormatException` | text isn't in the form a method expects | `int.Parse("three")` |
| `FileNotFoundException` | a file isn't there | `File.ReadAllText` on a missing file |
| `IOException` | a file can't be read or written (`FileNotFoundException` is one kind) | another program has it locked; the disk is full |
| `ArgumentException` | a method gets a value it can't use | `JsonUtility.FromJson` on damaged JSON |
| `IndexOutOfRangeException` | an index is outside an array | `laps[3]` in an array of 3 |
| `KeyNotFoundException` | a key isn't in a dictionary | `prices["kiwi"]` |

### Idea — try and catch

Put the code that might fail in a `try` block, and what to do if it does in a `catch`
block, with the type of exception it handles:

```csharp
try
{
    int lives = int.Parse("three");
    Debug.Log($"Lives: {lives}");
}
catch (FormatException)
{
    Debug.LogWarning("That wasn't a number, so lives stay at 3.");
}
Debug.Log("The game goes on.");
```

```
That wasn't a number, so lives stay at 3.
The game goes on.
```

The `try` block runs until something throws. Then C# jumps to a `catch` that fits, and
carries on after it. If nothing throws, the `catch` is skipped. A `catch` takes only its
own type, and the kinds of it: a `NullReferenceException` in that `try` would still
reach the Console. Write `catch (FormatException exception)` to use the exception
itself, such as `exception.Message`.

### Idea — several catch blocks, most specific first

Exceptions are a family of classes (C# 6): a `FileNotFoundException`
**is an** `IOException`, and every exception is an `Exception`. C# takes the first
`catch` that fits, from the top, so the most specific goes first:

```csharp
string path = Path.Combine(Application.persistentDataPath, "scores.txt");
try
{
    string text = File.ReadAllText(path);
    Debug.Log($"Read {text.Length} characters");
}
catch (FileNotFoundException)
{
    Debug.Log("No scores yet.");
}
catch (IOException exception)
{
    Debug.LogError($"The scores couldn't be read: {exception.Message}");
}
```

With no file yet, the Console says `No scores yet.` The other way round, the second
`catch` could never run, and the compiler says so:

```csharp
catch (IOException)
{
    // …
}
catch (FileNotFoundException)
{
    // …
}
// error CS0160: A previous catch clause already catches all exceptions of this or of a super type ('IOException')
```

### Idea — finally: whatever happened

A `finally` block runs at the end in every case: nothing thrown, an exception caught,
or one going on up to the Console. It's for what must happen either way, such as hiding
a loading panel or switching a button back on:

```csharp
try
{
    Debug.Log("Reading the prices");
    int price = int.Parse("12x");
    Debug.Log($"Price: {price}");
}
catch (FormatException)
{
    Debug.Log("A price was damaged");
}
finally
{
    Debug.Log("Done, either way");
}
```

```
Reading the prices
A price was damaged
Done, either way
```

### Idea — what not to do

**An empty catch.** It hides the error: the game goes on with half-loaded data, and
nothing in the Console says why. That's the hardest kind of bug to find.

```csharp
try
{
    // … load the level …
}
catch (Exception)
{
    // nothing here: the error vanishes
}
```

**Catching `Exception` everywhere.** It catches every exception, including the bugs you
need to see: a field left empty in the Inspector is treated like a missing file. Catch
the types you expect and can do something about, and let the rest reach the Console.

**Exceptions for normal events.** No file on the first run, letters typed into a number
box, a fruit that isn't on the price list: none of these is exceptional. Check first (as
the scores example could have, with `File.Exists`), and keep `try` for what you can't:

| Instead of catching | Check first with | Because |
| --- | --- | --- |
| `FormatException` from `int.Parse(text)` | `if (int.TryParse(text, out int amount))` | a typing mistake is normal |
| `FileNotFoundException` from `File.ReadAllText(path)` | `if (File.Exists(path))` | no save on the first run is normal |
| `KeyNotFoundException` from `prices[fruit]` | `if (prices.TryGetValue(fruit, out int price))` | a fruit not on the list is normal |

A file can still be locked, or damaged, after `File.Exists` says yes: that part is
exceptional, so reading it stays in a `try`.

### Idea — Debug.LogError in a catch

A `catch` that handles a problem should still report it. Use `Debug.LogError` (red), say
what failed and what the game does instead, add `exception.Message`, and pass `this`, so
clicking the message highlights the object. `Debug.LogWarning` (yellow) is for the odd
but harmless.

### Idea — a worked example: reading a settings file safely

```csharp
// The settings in options.json. JsonUtility fills these fields from the file's text.
[System.Serializable]
public class GameOptions
{
    [SerializeField] float musicVolume = 1f;
    [SerializeField] bool showTimer = true;

    public float MusicVolume { get { return musicVolume; } }
    public bool ShowTimer { get { return showTimer; } }
}
```

```csharp
using System;
using System.IO;
using UnityEngine;

// Reads options.json from the game's own folder. No file is normal (the first run);
// a damaged or unreadable one isn't, but it must never stop the game.
public class OptionsLoader : MonoBehaviour
{
    const string FileName = "options.json";

    public GameOptions Load()
    {
        string path = Path.Combine(Application.persistentDataPath, FileName);
        if (!File.Exists(path))
        {
            return new GameOptions();       // the first run: the defaults
        }
        try
        {
            return JsonUtility.FromJson<GameOptions>(File.ReadAllText(path));
        }
        catch (ArgumentException exception)
        {
            Debug.LogError($"{FileName} is damaged, so the defaults are used.\n{exception.Message}", this);
        }
        catch (IOException exception)
        {
            Debug.LogError($"{FileName} couldn't be read, so the defaults are used.\n{exception.Message}", this);
        }
        return new GameOptions();
    }
}
```

Damage the file on purpose: change `"musicVolume":0.5` to `"musicVolume":loud`.
`JsonUtility` throws an `ArgumentException`, the first `catch` takes it, and the Console
says, in red:

```
options.json is damaged, so the defaults are used.
JSON parse error: Invalid value.
```

The game carries on with the defaults, and the message says what happened and why.
C# 14 builds a whole save system this way.

> **Note:** you'll meet `throw` in other people's code:
> `throw new ArgumentException("A price can't be negative.");` makes an exception and
> sends it up, just as `int.Parse` does. The method stops there, and so does every
> caller, until a `catch` fits. This course doesn't throw its own: in a game, a logged
> error and a safe default usually serve the player better.

### Do it

1. In a `Practice` script, give a `[SerializeField] string livesText` to `int.Parse`.
   Type `three` in the Inspector, play, and find your line in the stack trace. Then
   catch the `FormatException`, and log a warning instead.
2. Change it to `int.TryParse`, with no `try` at all.
3. Make `OptionsLoader`. Log `Application.persistentDataPath`, open that folder, and try
   it with no file, a good file (`{"musicVolume":0.5,"showTimer":false}`) and a damaged
   one. What happens with an empty file? Make sure the game still gets options.
4. Put the `IOException` catch first in the scores example, and read CS0160.

### Challenge

Read a high-score file with one `name,score` per line. A line with a bad score is
skipped, with a `Debug.LogWarning` naming its line number, and the rest still load. A
missing file means "no scores yet", with no warning. Which parts need `try`, and which
only need a check?

## C# 14 — Saving: PlayerPrefs and JSON

**Goal:** you can keep a player's settings in PlayerPrefs and their progress in a JSON save
file, read both back safely, and choose the right place for each piece of data
(Associate: Programming — save data between scenes and sessions (static, PlayerPrefs)).

### Idea — three places to keep things

Static data is gone when the game closes. PlayerPrefs and files are on the disk, so
they're still there next time: *between sessions*, as the exam puts it.

| Place | Lasts | Good for | Example |
| --- | --- | --- | --- |
| a `static` field (C# 11) | until the game closes | passing data between scenes in one run | the kart picked on the menu |
| **PlayerPrefs** | until it's deleted | a few small settings, one value each | the music volume, vibration on or off |
| **a file**, in JSON | until it's deleted | the game's data: progress, lists, anything with a shape | coins, unlocked karts, each stand's level |

### Idea — PlayerPrefs: small values under names

PlayerPrefs keeps each value under a name, its **key**, like a labelled box:

| Call | Does |
| --- | --- |
| `SetInt(key, value)`, `SetFloat(…)`, `SetString(…)` | stores a value under the key, replacing the old one |
| `GetInt(key, defaultValue)`, `GetFloat(…)`, `GetString(…)` | reads it back, or gives the default when nothing is stored |
| `HasKey(key)`, `DeleteKey(key)` | is anything stored under the key? remove it |
| `Save()` | writes everything to the disk now; otherwise that happens when the game quits normally, and a crash loses the changes |

```csharp
PlayerPrefs.SetInt("BestLap", 42);
Debug.Log(PlayerPrefs.HasKey("BestLap"));
PlayerPrefs.DeleteKey("BestLap");
Debug.Log(PlayerPrefs.GetInt("BestLap", 0));
```

```
True
0
```

There's no `SetBool`: store 1 or 0 with `SetInt(VibrationKey, isOn ? 1 : 0)`, and read it
with `GetInt(VibrationKey, 1) == 1`. Keep each key in a `const string` like `VibrationKey`:
a typo in a string key just never loads, but a typo in a constant's name doesn't compile.

> **Watch out:** PlayerPrefs isn't for game data. It's kept with the computer's settings
> (the **registry** on Windows, a **.plist** file in Library/Preferences on macOS, the
> **browser** in WebGL), where anyone can change it, and it's one flat list of keys.

### Idea — JsonUtility: an object to text and back

**JSON** writes data as text that people and programs can both read. `JsonUtility` turns
an object into JSON, and back. Its class must be `[System.Serializable]`, and it saves the
**public** and `[SerializeField]` fields, the ones the Inspector would show:

```csharp
using System.Collections.Generic;

// Public fields, because JsonUtility saves them: the style guide's one exception.
[System.Serializable]
public class SaveData
{
    public const int CurrentVersion = 1;

    public int version = CurrentVersion;
    public int coins;
    public float bestLapTime;
    public List<string> unlockedKarts = new List<string>();
}
```

- `JsonUtility.ToJson(data, true)` gives the JSON text, one value per line (`false`: all
  on one line). `JsonUtility.FromJson<SaveData>(json)` makes a new `SaveData` from it.
- A field the text doesn't mention keeps the class's own value; a name in the text that
  the class doesn't have is ignored.

| JsonUtility can't save | Save this instead |
| --- | --- |
| a `Dictionary` | two lists, or a list of `[System.Serializable]` pairs |
| a property, a `static` field, a private field without `[SerializeField]` | a public or `[SerializeField]` field |
| a reference to an asset: a ScriptableObject, a Sprite, a prefab | its id, as a `string` (see below) |
| a list or an array on its own | a field in a class |

> **Watch out:** none of these is an error. JsonUtility leaves them out, a list on its own
> comes out as `{}`, and an asset as an `instanceID` that means nothing next session.

### Idea — a save file, start to finish

`Application.persistentDataPath` is a folder Unity gives every game for its own files, on
every platform; a built game has no Assets folder to write to. Log it to find it: on a Mac
it's in Library/Application Support, on Windows in AppData\LocalLow. `Path.Combine` adds a
file name, and `File` has `Exists(path)`, `ReadAllText(path)` and `WriteAllText(path, text)`.

```csharp
using System;
using System.IO;
using UnityEngine;

public static class SaveSystem
{
    const string FileName = "save.json";
    const string DamagedFileName = "save.bad.json";

    static string FilePath
    {
        get { return Path.Combine(Application.persistentDataPath, FileName); }
    }

    public static SaveData Load()
    {
        if (!File.Exists(FilePath))
        {
            return new SaveData();      // the first run: nothing saved yet
        }
        try
        {
            SaveData data = JsonUtility.FromJson<SaveData>(File.ReadAllText(FilePath));
            if (data == null)
            {
                data = new SaveData();  // an empty file
            }
            return data;
        }
        catch (ArgumentException exception)
        {
            Debug.LogError($"The save file is damaged: it's kept as {DamagedFileName}, and a new save starts.\n{exception.Message}");
            KeepDamagedFile();
            return new SaveData();
        }
        catch (IOException exception)
        {
            Debug.LogError($"The save file couldn't be read: {exception.Message}");
            return new SaveData();
        }
    }

    public static void Save(SaveData data)
    {
        try
        {
            File.WriteAllText(FilePath, JsonUtility.ToJson(data, true));
        }
        catch (IOException exception)
        {
            Debug.LogError($"The save file couldn't be written: {exception.Message}");
        }
    }

    static void KeepDamagedFile()
    {
        try
        {
            File.Copy(FilePath, Path.Combine(Application.persistentDataPath, DamagedFileName), true);
        }
        catch (IOException exception)
        {
            Debug.LogWarning($"The damaged save file couldn't be kept: {exception.Message}");
        }
    }
}
```

```csharp
SaveData data = SaveSystem.Load();
data.coins += 50;
SaveSystem.Save(data);
Debug.Log($"{data.coins} coins");
```

```
50 coins
```

Play again for `100 coins`, read back from the disk. After the first Play, `save.json`
holds this: braces `{ }` hold `"name": value` pairs, and brackets `[ ]` hold a list.

```json
{
    "version": 1,
    "coins": 50,
    "bestLapTime": 0.0,
    "unlockedKarts": []
}
```

### Idea — when the file is missing, damaged or old

| Problem | `Load` sees | and does (C# 13) |
| --- | --- | --- |
| no file: the first run | `File.Exists` is false | starts a new save |
| a damaged file, edited by hand or cut off half-written | an `ArgumentException` from `FromJson` | logs an error, keeps the bad file, starts a new save |
| a disk problem: no permission, the file locked | an `IOException` from `File` | logs an error, starts a new save |

Without the `try`, loading stops at `FromJson`, with an error such as this in the Console:

```
ArgumentException: JSON parse error: Invalid value.
```

Keep the bad file: you can see what broke, and if it was your bug, the progress can be
rescued. Catch the two named types only: anything else is a bug, and should show.

An **old** file is what `version` is for. Say version 2 of your game renames the buggy's id
to `dune-buggy`: after loading, `if (data.version < 2)`, it swaps the old id in the list for
the new one and sets `data.version = 2`. Put `version` in from the first release: a field
missing from the file keeps the class's own value, so a save without one looks new.

### Idea — saving ids, and turning them back into things

A save can't hold an asset, so it holds each one's **id**, and a `Dictionary`
(C# 7) turns the ids back into assets. A deck of cards or a row of juice
stands works the same way:

```csharp
[SerializeField] GameObject[] kartPrefabs;

readonly Dictionary<string, GameObject> kartsById = new Dictionary<string, GameObject>();

void Awake()
{
    foreach (GameObject kart in kartPrefabs)
    {
        kartsById[kart.name] = kart;        // the prefab's name is its id
    }
}

List<GameObject> UnlockedKarts(SaveData data)
{
    List<GameObject> karts = new List<GameObject>();
    foreach (string id in data.unlockedKarts)
    {
        if (kartsById.TryGetValue(id, out GameObject kart))
        {
            karts.Add(kart);
        }
        else
        {
            Debug.LogWarning($"The save has a kart '{id}' that the game doesn't know: skipped.", this);
        }
    }
    return karts;
}
```

> **Note:** in other people's code you'll also meet `Resources.Load<GameObject>("Karts/" +
> id)`: Unity loads an asset by its path, from a folder called `Resources`. It needs no
> list to fill in, but it has costs. Everything in a `Resources` folder goes into the
> build, used or not; Unity indexes all of it when the game starts; and a renamed file
> just returns `null`, found only when that line runs. Unity advises against it in
> finished games, so this course keeps references set in the Inspector, as above. Level 5
> measures those costs, and loads assets with **Addressables** instead.

> **Note:** a WebGL game runs in a browser, which gives it no folder on the disk, so Unity
> keeps `persistentDataPath` in the browser's own storage, for that website (the path
> starts `/idbfs/`). The save file and PlayerPrefs survive closing the browser: in a
> Unity 6000.6 web build, both were back on reopening, even after closing half a second
> after saving. Clearing the site's data in the browser deletes them both. Check your own
> game in a real web build all the same: play, close the tab, open the page again.

### Do it

1. Run the PlayerPrefs example. Then remove the `DeleteKey` line and change `"BestLap"` to
   `"Bestlap"` in the last line only: what comes back, and why?
2. Make `SaveData` and `SaveSystem`, run the save example three times, and read `save.json`.
3. Delete a quote mark in the file and press Play. Read the error; find `save.bad.json`.
4. Add a `Dictionary<string, int>` of trophies to `SaveData`, and look for it in the file.

### Challenge

An id must never change, but a prefab's name is easy to change: give each kart a
ScriptableObject (C# 3) with an `id` field, and look karts up by it.
Add an **Unlock** button that saves the next kart's id, and a vibration toggle in
PlayerPrefs. Type an unknown id into the file: does the game warn, and carry on?

## Chapter 13 — Records and Unlocks

**Goal:** a save file. Your best lap, best race and best place on each track, the tracks
you've opened, and the last kart you chose, kept between sessions. A top-three finish
opens the next track. A damaged save file can't break the game. And a first setting,
km/h or mph, kept in PlayerPrefs.

### Idea — two kinds of saving

C# 14 put them side by side; this game uses both:

| What | Where | Why there |
| --- | --- | --- |
| records, open tracks, last kart | `pocket-karts.json`, with `JsonUtility` | structured data: lists of records |
| km/h or mph (later the keys and the volumes) | PlayerPrefs, through `GameSettings` | small settings, one value each |

**The save file** is a plain class, `SaveData`, marked `[System.Serializable]` so
`JsonUtility` can write it: a version number, a list of opened track ids, a list of
`TrackRecord`s, and the last kart's name. `JsonUtility` can't save a `Dictionary`, so the
records are a list in the file, and `SaveData` turns them into a `Dictionary` by track id
when the game needs to look one up.

**A file can be wrong.** It may not exist yet (the first time the game runs), someone may
have edited it by hand, or the computer may have stopped halfway through writing it.
C# 13: the code that reads and writes is wrapped in `try` / `catch`, and
every failure has a plan. No file: start a new save. A damaged file: say so in the
Console, keep it as `pocket-karts.bad.json` to look at, and start a new save. A file that
can't be written: say so, and carry on racing.

**When does a race count?** When you see its results: the Results screen saves the
records and opens tracks, and says what's new.

### Do it — the save

1. In `Scripts/Flow`, `TrackRecord.cs`:

```csharp:TrackRecord.cs
// One track's records in the save file: the best lap, the best race time and
// the best place in a Race. A time of 0 means none yet. The fields are public,
// which the style guide allows here only: JsonUtility saves public fields.
[System.Serializable]
public class TrackRecord
{
    public string trackId;
    public float bestLap;
    public float bestRace;
    public int bestPlace;

    public TrackRecord(string id)
    {
        trackId = id;
    }
}
```

2. `SaveData.cs`:

```csharp:SaveData.cs
using System.Collections.Generic;

// Everything the game keeps between sessions, as JsonUtility writes it. Only
// simple things go in: numbers, strings, and lists of them. JsonUtility can't
// save a Dictionary, so the records are a list here, and RecordsById turns
// them into a Dictionary, by track id, to look them up. The fields are public,
// which the style guide allows here only: JsonUtility saves public fields.
[System.Serializable]
public class SaveData
{
    public const int CurrentVersion = 1;
    public const string FirstTrackId = "meadow-loop";

    public int version = CurrentVersion;
    public List<string> openedTracks = new List<string> { FirstTrackId };
    public List<TrackRecord> records = new List<TrackRecord>();
    public string lastKart = "";

    public bool IsOpen(string trackId)
    {
        return openedTracks.Contains(trackId);
    }

    // True only the first time the track opens.
    public bool Open(string trackId)
    {
        if (IsOpen(trackId))
        {
            return false;
        }
        openedTracks.Add(trackId);
        return true;
    }

    public Dictionary<string, TrackRecord> RecordsById()
    {
        Dictionary<string, TrackRecord> byId = new Dictionary<string, TrackRecord>();
        foreach (TrackRecord record in records)
        {
            byId[record.trackId] = record;
        }
        return byId;
    }

    // This track's record, made empty if it has none yet.
    public TrackRecord RecordFor(string trackId)
    {
        Dictionary<string, TrackRecord> byId = RecordsById();
        TrackRecord record;
        if (!byId.TryGetValue(trackId, out record))
        {
            record = new TrackRecord(trackId);
            records.Add(record);
        }
        return record;
    }
}
```

A new save has Meadow Loop open already: the first track is open from the start.
`RecordFor` uses `TryGetValue`, which says whether the key was there and, if it was,
hands back its value in one go: C# 7' safe way to look something up.

3. `SaveSystem.cs`, a static class: one save file, for everyone who asks.

```csharp
using System;
using System.IO;
using UnityEngine;

// Reads and writes the save file in the folder Unity keeps for each game's
// files (Application.persistentDataPath): pocket-karts.json, the records and
// the open tracks. A file can be missing or damaged, so reading and writing
// are wrapped in try / catch: a bad file must never stop the game.
public static class SaveSystem
{
    const string FileName = "pocket-karts.json";
    const string DamagedEnding = ".bad.json";

    public static SaveData Load()
    {
        string json = ReadText(FileName);
        if (json == null)
        {
            return new SaveData();      // the first run: nothing saved yet
        }
        try
        {
            SaveData data = JsonUtility.FromJson<SaveData>(json);
            if (data == null)
            {
                Debug.LogWarning("The save file is empty: starting a new one.");
                return new SaveData();
            }
            return data;
        }
        catch (ArgumentException exception)
        {
            KeepDamagedFile(FileName, exception);
            return new SaveData();
        }
    }

    public static void Save(SaveData data)
    {
        WriteText(FileName, JsonUtility.ToJson(data, true));
    }

    static string PathOf(string fileName)
    {
        return Path.Combine(Application.persistentDataPath, fileName);
    }

    // The file's text, or null when there's no file (the first run) or it can't be read.
    static string ReadText(string fileName)
    {
        string path = PathOf(fileName);
        if (!File.Exists(path))
        {
            return null;
        }
        try
        {
            return File.ReadAllText(path);
        }
        catch (IOException exception)
        {
            Debug.LogError($"{fileName} couldn't be read: {exception.Message}");
            return null;
        }
    }

    static void WriteText(string fileName, string json)
    {
        try
        {
            File.WriteAllText(PathOf(fileName), json);
        }
        catch (IOException exception)
        {
            Debug.LogError($"{fileName} couldn't be written: {exception.Message}");
        }
    }

    // JsonUtility couldn't read the file: keep it to look at, and start again without it.
    static void KeepDamagedFile(string fileName, ArgumentException exception)
    {
        string damagedName = Path.GetFileNameWithoutExtension(fileName) + DamagedEnding;
        Debug.LogError($"{fileName} is damaged, so the game starts again without it. The old file is kept as {damagedName}.\n{exception.Message}");
        try
        {
            File.Copy(PathOf(fileName), PathOf(damagedName), true);
        }
        catch (IOException copyException)
        {
            Debug.LogWarning($"The damaged file couldn't be kept: {copyException.Message}");
        }
    }
}
```

Count the `catch`es: `IOException` when the disk itself fails (reading, writing,
copying), `ArgumentException` when `JsonUtility` can't read the text. Each one is caught
where something can be done about it, logged with what happened, and the game goes on.
`JsonUtility.ToJson(data, true)` writes the JSON with line breaks and indents, so you can
read the file.

### Do it — the Garage remembers

4. The intern's Garage shows the records and the locks, and remembers your kart. The file
   finds everything by name with `transform.Find`, so for now, add to it the same way:
   one style per file. (Chapter 19 rewrites the whole file, properly.) Replace
   `GarageScreen.cs`:

```csharp
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;
using TMPro;

// garage screen
public class GarageScreen : MonoBehaviour
{
    public KartStats[] karts;
    public TrackInfo[] tracks;
    public GameObject[] cards;
    public GameObject trackCard;
    public Transform list;
    public TMP_Text m;
    public int k;
    public int t;
    SaveData save;

    void Start()
    {
        save = SaveSystem.Load();

        // set the mode
        if (RaceSetup.Mode == RaceMode.Race)
            m.text = "RACE";
        else
            m.text = "TIME TRIAL";

        // make the track cards
        for (int i = 0; i < tracks.Length; i++)
        {
            GameObject c = Instantiate(trackCard, list);
            c.transform.Find("Picture").GetComponent<Image>().sprite = tracks[i].Picture;
            c.transform.Find("Name").GetComponent<TMP_Text>().text = tracks[i].DisplayName.ToUpper();
            int n = i;
            c.GetComponent<Button>().onClick.AddListener(() => t = n);

            // locked or open, and the records
            bool isOpen = save.IsOpen(tracks[i].Id);
            c.GetComponent<Button>().interactable = isOpen;
            c.transform.Find("Lock").gameObject.SetActive(!isOpen);
            TrackRecord record = save.RecordFor(tracks[i].Id);
            if (record.bestLap > 0f)
                c.transform.Find("Record").GetComponent<TMP_Text>().text = "Best lap " + TimeText.Format(record.bestLap);
            else
                c.transform.Find("Record").GetComponent<TMP_Text>().text = "No times yet";
        }

        // the last kart
        for (int i = 0; i < karts.Length; i++)
            if (karts[i].DisplayName == save.lastKart)
                k = i;

        // kart buttons
        cards[0].GetComponent<Button>().onClick.AddListener(() => k = 0);
        cards[1].GetComponent<Button>().onClick.AddListener(() => k = 1);
        cards[2].GetComponent<Button>().onClick.AddListener(() => k = 2);
    }

    void Update()
    {
        // show the karts
        for (int i = 0; i < 3; i++)
        {
            cards[i].transform.Find("Picture").GetComponent<Image>().sprite = karts[i].Picture;
            cards[i].transform.Find("Name").GetComponent<TMP_Text>().text = karts[i].DisplayName.ToUpper();
            string s = "";
            s = s + "Speed: " + karts[i].TopSpeed + "\n";
            s = s + "Acceleration: " + karts[i].Acceleration + "\n";
            s = s + "Grip: " + karts[i].Grip + "\n";
            s = s + "Weight: " + karts[i].Mass;
            cards[i].transform.Find("Stats").GetComponent<TMP_Text>().text = s;
            if (i == k)
                cards[i].transform.Find("Frame").gameObject.SetActive(true);
            else
                cards[i].transform.Find("Frame").gameObject.SetActive(false);
        }

        // show the tracks
        for (int i = 0; i < list.childCount; i++)
        {
            if (i == t)
                list.GetChild(i).Find("Frame").gameObject.SetActive(true);
            else
                list.GetChild(i).Find("Frame").gameObject.SetActive(false);
        }
    }

    // go button
    public void Go()
    {
        RaceSetup.Kart = karts[k];
        RaceSetup.Track = tracks[t];
        save.lastKart = karts[k].DisplayName;
        SaveSystem.Save(save);
        SceneManager.LoadScene(tracks[t].SceneName);
    }
}
```

5. Open `Prefabs/UI/Track Card` and add two children: a text `Record` (26, grey, under
   the name: *No times yet*) and a `Lock`, an **Image** covering the whole card (stretch,
   `1C2633` at alpha 247) with a text inside, `LOCKED`, 40, gold. The Lock sits over the
   card, so it must be the **last** child: later children draw on top.

### Do it — the Results count the race

6. Replace `ResultsScreen.cs`:

```csharp
using UnityEngine;
using TMPro;

// The Results screen: your place in big type, the standings, and what's new:
// a best lap, a best race, a track opened. The records are saved here, so a
// race counts once you see its results. In Time Trial it shows your laps.
// Retry and Next track are buttons; Next track shows only when
// the next track is open. Menu calls the Scene Fader.
public class ResultsScreen : MonoBehaviour
{
    const int TopThree = 3;

    [SerializeField] SceneFader fader;
    [SerializeField] TrackInfo[] tracks;
    [SerializeField] TMP_Text placeText;
    [SerializeField] TMP_Text titleText;
    [SerializeField] TMP_Text newsText;
    [SerializeField] ResultLine linePrefab;
    [SerializeField] Transform lineList;
    [SerializeField] GameObject nextTrackButton;

    RaceResult result;
    TrackInfo nextTrack;

    void Start()
    {
        result = RaceSetup.Result;
        nextTrackButton.SetActive(false);
        if (result == null)
        {
            Debug.LogWarning("There's no race result to show (was the Results scene started on its own?).", this);
            placeText.text = "";
            titleText.text = "NO RACE YET";
            newsText.text = "";
            return;
        }

        titleText.text = $"{result.Track.DisplayName.ToUpper()} · {(result.Mode == RaceMode.Race ? "RACE" : "TIME TRIAL")}";
        if (result.Mode == RaceMode.Race)
        {
            placeText.text = TimeText.Place(result.PlayerPlace);
            ShowStandings();
        }
        else
        {
            placeText.text = TimeText.Format(result.PlayerBestLap);
            ShowLaps();
        }
        newsText.text = SaveRecords();
        nextTrackButton.SetActive(nextTrack != null);
    }

    public void Retry()
    {
        fader.FadeTo(result != null ? result.Track.SceneName : "Menu");
    }

    public void NextTrack()
    {
        RaceSetup.Track = nextTrack;
        fader.FadeTo(nextTrack.SceneName);
    }

    void ShowStandings()
    {
        foreach (ResultRow row in result.Rows)
        {
            string time = row.HasFinished ? TimeText.Format(row.RaceTime) : "racing";
            Instantiate(linePrefab, lineList).Show(TimeText.Place(row.Place), row.RacerName, time, TimeText.Format(row.BestLap), row.IsPlayer);
        }
    }

    void ShowLaps()
    {
        for (int i = 0; i < result.PlayerLaps.Count; i++)
        {
            bool isBest = result.PlayerLaps[i] == result.PlayerBestLap;
            Instantiate(linePrefab, lineList).Show($"Lap {i + 1}", isBest ? "best lap" : "", TimeText.Format(result.PlayerLaps[i]), "", isBest);
        }
    }

    // Saves the new records and opens the next track, and says what changed.
    string SaveRecords()
    {
        SaveData save = SaveSystem.Load();
        TrackRecord record = save.RecordFor(result.Track.Id);
        string news = "";
        if (result.PlayerBestLap > 0f && (record.bestLap == 0f || result.PlayerBestLap < record.bestLap))
        {
            record.bestLap = result.PlayerBestLap;
            news += "New best lap!\n";
        }
        bool hasFinished = result.PlayerRaceTime > 0f;
        if (hasFinished && (record.bestRace == 0f || result.PlayerRaceTime < record.bestRace))
        {
            record.bestRace = result.PlayerRaceTime;
            news += "New best race!\n";
        }

        if (result.Mode == RaceMode.Race && result.PlayerPlace > 0)
        {
            if (record.bestPlace == 0 || result.PlayerPlace < record.bestPlace)
            {
                record.bestPlace = result.PlayerPlace;
            }
            if (result.PlayerPlace <= TopThree)
            {
                news += OpenTracksAfter(save);
            }
        }
        nextTrack = OpenTrackAfter(save);
        SaveSystem.Save(save);
        return news;
    }

    // Opens every track that a top three here opens, the first time only.
    string OpenTracksAfter(SaveData save)
    {
        string news = "";
        foreach (TrackInfo track in tracks)
        {
            if (track.OpenedBy == result.Track && save.Open(track.Id))
            {
                news += $"Track opened: {track.DisplayName}\n";
            }
        }
        return news;
    }

    // The track after this one, if it's open.
    TrackInfo OpenTrackAfter(SaveData save)
    {
        foreach (TrackInfo track in tracks)
        {
            if (track.OpenedBy == result.Track && save.IsOpen(track.Id))
            {
                return track;
            }
        }
        return null;
    }
}
```

`SaveRecords` loads the save, changes it, and saves it once. `OpenTracksAfter` opens every
track whose **Opened By** is this one, and only says so the first time: `save.Open`
returns `false` for a track that was open already. A time of 0 means "none yet", so the
first race always sets a record.

7. In the `Results` scene: a text `News` (top right, Pos `(-80, -140)`, 900 × 140, 34,
   right-aligned, mint `5BD18B`, *New best lap!*), and a third button, `Next Track`
   (bottom centre, Pos `(0, 50)`, 320 × 90, gold), with **On Click ()** →
   **ResultsScreen → NextTrack**. On `Results`, fill in **Tracks** (the three Track
   Infos), **News Text** and **Next Track Button**.

### Do it — a setting

8. In `Scripts/Flow`, `GameSettings.cs`:

```csharp
using UnityEngine;

// The player's settings, kept in PlayerPrefs: small values, one key each. The
// keys are constants, so a typo is a compile error, not a setting that quietly
// never loads. They start with the game's name because every game in one Unity
// project shares the same PlayerPrefs.
public static class GameSettings
{
    const string UseMphKey = "PocketKarts.UseMph";

    // PlayerPrefs has no bool, so it's an int: 1 for on, 0 for off.
    public static bool UseMph
    {
        get { return PlayerPrefs.GetInt(UseMphKey, 0) == 1; }
        set { PlayerPrefs.SetInt(UseMphKey, value ? 1 : 0); }
    }

    // Writes the settings to disk now, rather than when the game quits.
    public static void Save()
    {
        PlayerPrefs.Save();
    }
}
```

The keys start with `PocketKarts.`: your project holds one game, but the course's holds
every game in the curriculum, and they all share one set of PlayerPrefs. A good habit
either way.

9. `SettingsPanel.cs`, the start of a panel that grows in Chapters 15 and 17:

```csharp
using UnityEngine;
using UnityEngine.UI;

// The Settings Panel, one prefab: for now, km/h or mph. Settings go into
// PlayerPrefs through GameSettings, and are written to disk when the panel
// closes.
public class SettingsPanel : MonoBehaviour
{
    [SerializeField] Toggle mphToggle;

    void OnEnable()
    {
        mphToggle.SetIsOnWithoutNotify(GameSettings.UseMph);
        mphToggle.onValueChanged.AddListener(OnMphChanged);
    }

    void OnDisable()
    {
        mphToggle.onValueChanged.RemoveListener(OnMphChanged);
        GameSettings.Save();
    }

    void OnMphChanged(bool isOn)
    {
        GameSettings.UseMph = isOn;
    }
}
```

`SetIsOnWithoutNotify` shows the saved value without firing `onValueChanged`, which would
save it straight back. The listener is added in `OnEnable` and removed in `OnDisable`, the
style guide's rule for every event.

10. The HUD reads it. Replace `RaceHud.cs`:

```csharp
using TMPro;
using UnityEngine;

// The race's heads-up display: your place, the lap, the race time, your best
// lap, the speed, the boost gauge, and Wrong way!. It listens to the Race Manager and your
// Racer for what happens, and reads the numbers that change all the time
// every frame.
public class RaceHud : MonoBehaviour
{
    const float KilometresPerHour = 3.6f;   // for each metre a second
    const float MilesPerHour = 2.237f;

    [SerializeField] RaceManager race;
    [SerializeField] TMP_Text placeText;
    [SerializeField] TMP_Text lapText;
    [SerializeField] TMP_Text timeText;
    [SerializeField] TMP_Text bestLapText;
    [SerializeField] TMP_Text speedText;
    [SerializeField] GameObject wrongWay;
    [SerializeField] TMP_Text finishText;
    [SerializeField] BoostGauge boostGauge;

    Racer player;
    bool useMph;

    void OnEnable()
    {
        race.RaceStarted += OnRaceStarted;
        race.RaceOver += OnRaceOver;
    }

    void OnDisable()
    {
        race.RaceStarted -= OnRaceStarted;
        race.RaceOver -= OnRaceOver;
        if (player != null)
        {
            player.LapCompleted -= OnLapCompleted;
            player.Finished -= OnFinished;
        }
    }

    void Start()
    {
        useMph = GameSettings.UseMph;
        wrongWay.SetActive(false);
        finishText.gameObject.SetActive(false);
        placeText.gameObject.SetActive(race.Mode == RaceMode.Race);
        lapText.text = $"LAP 1/{race.Laps}";
        timeText.text = "0:00.00";
        bestLapText.text = $"BEST {TimeText.Format(0f)}";
        speedText.text = useMph ? "0 mph" : "0 km/h";
    }

    // The karts are on the grid by now: listen to yours.
    void OnRaceStarted()
    {
        player = race.Player;
        player.LapCompleted += OnLapCompleted;
        player.Finished += OnFinished;
        boostGauge.Watch(player.GetComponent<BoostMeter>());
    }

    void Update()
    {
        if (player == null)
        {
            return;
        }
        timeText.text = TimeText.Format(race.RaceTime);
        float speed = Mathf.Abs(player.Kart.Speed);
        speedText.text = useMph ? $"{Mathf.RoundToInt(speed * MilesPerHour)} mph" : $"{Mathf.RoundToInt(speed * KilometresPerHour)} km/h";
        placeText.text = $"{TimeText.Place(PlaceOf(player))} / {race.Standings.Count}";
        wrongWay.SetActive(player.IsWrongWay && !player.HasFinished);
    }

    void OnLapCompleted(int lap, float time)
    {
        bestLapText.text = $"BEST {TimeText.Format(player.BestLap)}";
        if (lap < race.Laps)
        {
            lapText.text = $"LAP {lap + 1}/{race.Laps}";
        }
    }

    void OnFinished()
    {
        finishText.text = race.Mode == RaceMode.Race ? $"{TimeText.Place(PlaceOf(player))}!" : "FINISH!";
        finishText.gameObject.SetActive(true);
    }

    void OnRaceOver()
    {
        wrongWay.SetActive(false);
        finishText.gameObject.SetActive(true);
    }

    int PlaceOf(IRacer racer)
    {
        int place = 1;
        foreach (IRacer other in race.Standings)
        {
            if (other == racer)
            {
                return place;
            }
            place++;
        }
        return place;
    }
}
```

11. And the Menu opens it. Replace `MainMenu.cs`:

```csharp:MainMenu.cs
using UnityEngine;

// The Menu scene: Race, Time Trial, Settings, Credits and Quit. Race and Time
// Trial say which mode in RaceSetup, then go to the Garage to choose a kart
// and a track. Settings and Credits are panels the buttons show and hide.
public class MainMenu : MonoBehaviour
{
    [SerializeField] SceneFader fader;
    [SerializeField] GameObject quitButton;
    [SerializeField] GameObject settingsPanel;
    [SerializeField] GameObject creditsPanel;

    void Start()
    {
        // A web page can't quit, so the Quit button only shows in a PC build or the Editor.
        quitButton.SetActive(Application.platform != RuntimePlatform.WebGLPlayer);
        settingsPanel.SetActive(false);
        creditsPanel.SetActive(false);
    }

    public void Race()
    {
        RaceSetup.Mode = RaceMode.Race;
        fader.FadeTo("Garage");
    }

    public void TimeTrial()
    {
        RaceSetup.Mode = RaceMode.TimeTrial;
        fader.FadeTo("Garage");
    }

    public void Quit()
    {
        Application.Quit();
    }
}
```

12. The **Settings Panel** prefab. In the Menu's Canvas, `Settings Panel`: an Image
    stretched over the screen, black at alpha 153, with a panel `Window` (900 × 500,
    `1C2633` opaque), a title `SETTINGS` (52, gold), a **GameObject → UI → Toggle**,
    `Mph Toggle` (its `Label` says *Speed in mph*, 34, cream), and a `Close` button
    (gold): **On Click ()** → `Settings Panel` → **GameObject → SetActive**, unticked.
    Add **SettingsPanel** and drag in the toggle. Drag the panel into `Prefabs/UI`.
13. In the Menu's side panel, a `Settings` button (sky, Pos `(0, -160)`, 460 × 80), and
    move `Credits` to `(0, -255)` and `Quit` to `(0, -350)`. `Settings` → `Settings
    Panel` → **GameObject → SetActive**, ticked. On `Main Menu`, drag `Settings Panel`
    into **Settings Panel**.

### Test it

- Play from the Menu. The Garage shows Windmill Hill and Lighthouse Cliffs **locked**.
  Race Meadow Loop and finish in the top three: the Results say *New best lap!*, *New
  best race!* and *Track opened: Windmill Hill*, and **Next Track** appears.
- Stop, and play again from the Menu: Windmill Hill is still open, and Meadow Loop's card
  shows your best lap. The Garage picks the kart you raced last.
- Find the file. It's in `Application.persistentDataPath`: on a Mac `~/Library/Application Support/DefaultCompany/Pocket Karts`, on Windows
  `%userprofile%\AppData\LocalLow\DefaultCompany\Pocket Karts`. Open
  `pocket-karts.json` in a text editor: your records, as JSON.
- **Break it on purpose.** Delete a `}` from the file and save it. Play: the Console says

```
pocket-karts.json is damaged, so the game starts again without it. The old file is kept as pocket-karts.bad.json.
JSON parse error: Invalid value.
```

  and the game carries on, with a new save. Your old records are in `pocket-karts.bad.json`.
  (To get them back, mend the bad file and rename it.)
- Turn on **Speed in mph** in Settings, then race: the HUD shows mph. Stop and play again:
  still mph.

### Commit

*Save records and open tracks.* Push.

### Challenge

`SaveData` has a `version`, 1. Suppose version 2 adds a list of medals. A version-1 file
has no `medals` in it: what does `JsonUtility.FromJson` give the new field? (Try it: add
`public List<string> medals;` and load an old file.) What should `Load` do when it reads a
version older than `CurrentVersion`?

## Chapter 14 — The Ghost

**Goal:** Time Trial with a **ghost**: a see-through kart that replays your best lap on
the track, and a gap on the HUD at each checkpoint, *+0.42* behind it or *-0.30* ahead.
Every best lap is saved, so tomorrow's ghost is today's best.

### Idea — a recording, replayed

**Recording.** Ten times a second, while you race, a `GhostRecorder` writes down where
your kart is and which way it faces: two `List`s, one of `Vector3` positions and one of
`Quaternion` rotations, and the time into the lap at each checkpoint. A 30-second lap is
300 of each. When a lap is done, if it beats the best lap saved for this track, it **is**
the best lap: saved to its own file, `ghost-meadow-loop.json`, and handed to the ghost.

**Replaying.** Ten samples a second would look jerky. Between two samples the ghost
**glides**: `Vector3.Lerp(a, b, share)` is the point a share of the way from `a` to `b`,
and `Quaternion.Slerp` does the same for rotations. If the ghost is 0.137 seconds into the
lap, it's 37% of the way from sample 1 to sample 2.

**The ghost is a racer.** It passes checkpoints, and has a lap and a progress, so the
standings could hold it. It isn't a kart: no engine, no driver, no physics; it mustn't
bump you. That's why Chapter 9 made the standings a list of `IRacer`: the ghost is the
second thing that keeps the promise. To pass through karts but still trip the checkpoints,
it goes on its own layer, **Ghost**, which only meets the **Triggers** layer.

**The gap.** At each checkpoint the recorder knows how far into its lap the ghost was;
your `Racer` knows how far into yours you are. The difference is the gap.

### Do it — record

1. In `Scripts/Race`, `GhostData.cs`:

```csharp:GhostData.cs
using System.Collections.Generic;
using UnityEngine;

// One lap, recorded for the ghost: where the kart was and which way it faced,
// ten times a second, and how far into the lap it passed each checkpoint.
// JsonUtility saves List<Vector3> and List<Quaternion> as they are. The
// fields are public, which the style guide allows here only: JsonUtility saves
// public fields.
[System.Serializable]
public class GhostData
{
    public const int CurrentVersion = 1;

    public int version = CurrentVersion;
    public string trackId;
    public float lapTime;
    public float interval;                                      // seconds between samples
    public List<Vector3> positions = new List<Vector3>();
    public List<Quaternion> rotations = new List<Quaternion>();
    public List<float> checkpointTimes = new List<float>();     // by checkpoint index; the finish line's is the lap time

    // JsonUtility makes a GhostData with this one, then fills in the fields.
    public GhostData()
    {
    }

    public GhostData(string track, float sampleInterval, int checkpointCount)
    {
        trackId = track;
        interval = sampleInterval;
        for (int i = 0; i < checkpointCount; i++)
        {
            checkpointTimes.Add(0f);
        }
    }

    public float Duration { get { return positions.Count * interval; } }
}
```

Two constructors: `JsonUtility` needs the one with no parameters when it reads a file;
the recorder uses the other.

2. The `Racer` needs one more event, raised at each checkpoint with the time into the
   lap. Replace `Racer.cs`; it's finished now:

```csharp:Racer.cs
using System;
using System.Collections.Generic;
using UnityEngine;

// A kart in the race: its lap, the checkpoints it has passed, its lap times
// and its best lap. It puts the kart back on the track when it's stuck, upside
// down or has fallen off, and notices when it's going the wrong way. It raises
// events when something happens; the HUD, the Race Manager, the ghost recorder
// and the sounds listen.
[RequireComponent(typeof(KartController))]
public class Racer : MonoBehaviour, IRacer
{
    const float StuckSpeed = 1.5f;      // metres a second: slower than this is stuck...
    const float StuckThrottle = 0.5f;   // ...if the driver is pushing at least this hard
    const float StuckTime = 2.5f;       // seconds stuck, or upside down, before going back
    const float UpsideDown = 0.3f;      // the kart's up points this little upwards, or less
    const float FallDepth = 15f;        // metres below the last checkpoint: fallen off
    const float WrongWaySpeed = 3f;     // metres a second, away from the next checkpoint
    const float WrongWayTime = 1f;      // seconds of it before the HUD says so
    const float RespawnHeight = 0.6f;   // metres above the respawn point, dropped onto the road
    const float RespawnSideStep = 2.5f; // metres to the side, if another kart is on the respawn point
    static readonly Vector3 KartHalfSize = new Vector3(0.7f, 0.5f, 1.1f);

    readonly List<float> lapTimes = new List<float>();
    KartController kart;
    Rigidbody body;
    RaceManager race;
    IReadOnlyList<Checkpoint> checkpoints;
    Checkpoint lastCheckpoint;
    float lapStartTime;
    float stuckTime;
    float wrongWayTime;

    public string RacerName { get; private set; }
    public bool IsPlayer { get; private set; }
    public int Lap { get; private set; }
    public int NextCheckpoint { get; private set; }
    public bool HasFinished { get; private set; }
    public float FinishTime { get; private set; }
    public bool IsWrongWay { get; private set; }
    public KartController Kart { get { return kart; } }
    public IReadOnlyList<float> LapTimes { get { return lapTimes; } }
    public float CurrentLapTime { get { return race.RaceTime - lapStartTime; } }

    public float Progress
    {
        get { return Checkpoint.Progress(Lap, NextCheckpoint, transform.position, checkpoints); }
    }

    // The fastest lap so far, or 0 before the first one.
    public float BestLap
    {
        get
        {
            float best = 0f;
            foreach (float time in lapTimes)
            {
                if (best == 0f || time < best)
                {
                    best = time;
                }
            }
            return best;
        }
    }

    public event Action<int, float> LapCompleted;       // the lap just finished, and its time
    public event Action<int, float> CheckpointPassed;   // the checkpoint, and the time into the lap
    public event Action Finished;
    public event Action Respawned;

    void Awake()
    {
        kart = GetComponent<KartController>();
        body = GetComponent<Rigidbody>();
    }

    // The Race Manager calls this when it puts the kart on the grid. The grid
    // is just past the finish line, so the first checkpoint to find is 1.
    public void Setup(string racerName, bool isPlayer, RaceManager raceManager, IReadOnlyList<Checkpoint> trackCheckpoints)
    {
        RacerName = racerName;
        IsPlayer = isPlayer;
        race = raceManager;
        checkpoints = trackCheckpoints;
        lastCheckpoint = checkpoints[0];
        Lap = 1;
        NextCheckpoint = 1;
    }

    void Update()
    {
        if (race == null || !race.IsRacing)
        {
            return;
        }
        CheckStuck();
        CheckWrongWay();
    }

    public void PassCheckpoint(Checkpoint checkpoint)
    {
        if (HasFinished || checkpoint.Index != NextCheckpoint)
        {
            return;     // passed already, or out of order
        }
        lastCheckpoint = checkpoint;
        NextCheckpoint = (NextCheckpoint + 1) % checkpoints.Count;
        CheckpointPassed?.Invoke(checkpoint.Index, CurrentLapTime);
    }

    public void CompleteLap()
    {
        float time = CurrentLapTime;
        lapTimes.Add(time);
        LapCompleted?.Invoke(Lap, time);
        if (Lap >= race.Laps)
        {
            HasFinished = true;
            FinishTime = race.RaceTime;
            Finished?.Invoke();
            race.ReportFinish(this);
            return;
        }
        Lap++;
        lapStartTime = race.RaceTime;
    }

    // Back to the last checkpoint passed, facing the way to go.
    public void BackToTrack()
    {
        Transform point = lastCheckpoint.RespawnPoint;
        kart.PlaceAt(FreeSpotNear(point), point.rotation);
        stuckTime = 0f;
        Respawned?.Invoke();
    }

    // The respawn point, or a step to one side of it if another kart is there:
    // two karts put in one place would push each other off the road.
    Vector3 FreeSpotNear(Transform point)
    {
        float[] steps = { 0f, RespawnSideStep, -RespawnSideStep };
        foreach (float step in steps)
        {
            Vector3 spot = point.position + point.right * step + Vector3.up * RespawnHeight;
            if (!Physics.CheckBox(spot, KartHalfSize, point.rotation, 1 << gameObject.layer, QueryTriggerInteraction.Ignore))
            {
                return spot;
            }
        }
        return point.position + Vector3.up * RespawnHeight;
    }

    void CheckStuck()
    {
        if (transform.position.y < lastCheckpoint.RespawnPoint.position.y - FallDepth)
        {
            BackToTrack();      // fallen off the world: no need to wait
            return;
        }

        bool isUpsideDown = transform.up.y < UpsideDown;
        bool isPushing = kart.Driver != null && kart.Driver.Throttle > StuckThrottle;
        bool isStuck = isPushing && Mathf.Abs(kart.Speed) < StuckSpeed;
        if (isUpsideDown || isStuck)
        {
            stuckTime += Time.deltaTime;
            if (stuckTime > StuckTime)
            {
                BackToTrack();
            }
        }
        else
        {
            stuckTime = 0f;
        }
    }

    // Wrong way: moving away from the next checkpoint for a second.
    void CheckWrongWay()
    {
        Vector3 toNext = checkpoints[NextCheckpoint].transform.position - transform.position;
        float speedTowards = Vector3.Dot(body.linearVelocity, toNext.normalized);
        if (speedTowards < -WrongWaySpeed)
        {
            wrongWayTime += Time.deltaTime;
        }
        else
        {
            wrongWayTime = 0f;
        }
        IsWrongWay = wrongWayTime > WrongWayTime;
    }
}
```

3. Ghost files in the save. Replace `SaveSystem.cs`:

```csharp
using System;
using System.IO;
using UnityEngine;

// Reads and writes the save files in the folder Unity keeps for each game's
// files (Application.persistentDataPath): pocket-karts.json for the records
// and the open tracks, and one ghost-<track>.json for each track's best lap.
// A file can be missing or damaged, so reading and writing are wrapped in
// try / catch: a bad file must never stop the game. A damaged ghost only
// loses the ghost.
public static class SaveSystem
{
    const string FileName = "pocket-karts.json";
    const string DamagedEnding = ".bad.json";

    public static SaveData Load()
    {
        string json = ReadText(FileName);
        if (json == null)
        {
            return new SaveData();      // the first run: nothing saved yet
        }
        try
        {
            SaveData data = JsonUtility.FromJson<SaveData>(json);
            if (data == null)
            {
                Debug.LogWarning("The save file is empty: starting a new one.");
                return new SaveData();
            }
            return data;
        }
        catch (ArgumentException exception)
        {
            KeepDamagedFile(FileName, exception);
            return new SaveData();
        }
    }

    public static void Save(SaveData data)
    {
        WriteText(FileName, JsonUtility.ToJson(data, true));
    }

    // The best lap saved for this track, or null if it has none yet.
    public static GhostData LoadGhost(string trackId)
    {
        string fileName = GhostFileName(trackId);
        string json = ReadText(fileName);
        if (json == null)
        {
            return null;
        }
        try
        {
            return JsonUtility.FromJson<GhostData>(json);
        }
        catch (ArgumentException exception)
        {
            KeepDamagedFile(fileName, exception);
            return null;
        }
    }

    public static void SaveGhost(GhostData ghost)
    {
        WriteText(GhostFileName(ghost.trackId), JsonUtility.ToJson(ghost));
    }

    static string GhostFileName(string trackId)
    {
        return $"ghost-{trackId}.json";
    }

    static string PathOf(string fileName)
    {
        return Path.Combine(Application.persistentDataPath, fileName);
    }

    // The file's text, or null when there's no file (the first run) or it can't be read.
    static string ReadText(string fileName)
    {
        string path = PathOf(fileName);
        if (!File.Exists(path))
        {
            return null;
        }
        try
        {
            return File.ReadAllText(path);
        }
        catch (IOException exception)
        {
            Debug.LogError($"{fileName} couldn't be read: {exception.Message}");
            return null;
        }
    }

    static void WriteText(string fileName, string json)
    {
        try
        {
            File.WriteAllText(PathOf(fileName), json);
        }
        catch (IOException exception)
        {
            Debug.LogError($"{fileName} couldn't be written: {exception.Message}");
        }
    }

    // JsonUtility couldn't read the file: keep it to look at, and start again without it.
    static void KeepDamagedFile(string fileName, ArgumentException exception)
    {
        string damagedName = Path.GetFileNameWithoutExtension(fileName) + DamagedEnding;
        Debug.LogError($"{fileName} is damaged, so the game starts again without it. The old file is kept as {damagedName}.\n{exception.Message}");
        try
        {
            File.Copy(PathOf(fileName), PathOf(damagedName), true);
        }
        catch (IOException copyException)
        {
            Debug.LogWarning($"The damaged file couldn't be kept: {copyException.Message}");
        }
    }
}
```

A damaged ghost costs only the ghost: `LoadGhost` keeps the bad file and returns `null`,
the same as "no ghost yet". The ghost's JSON has no line breaks (`ToJson(ghost)`): 600
numbers don't need to be readable, and the file is a third smaller.

4. The recorder, the ghost and the Race Manager need each other: the recorder asks the
   Race Manager how many checkpoints there are, and the Race Manager starts the recorder
   and makes the ghost. The Console shows an error from here until the Race Manager is
   replaced, in step 8. In `Scripts/Race`, `GhostRecorder.cs`:

<!-- check: together -->

```csharp:GhostRecorder.cs
using System;
using UnityEngine;

// Records the player's laps for the ghost: the kart's position and rotation
// ten times a second, and the time into the lap at each checkpoint. A lap
// that beats the best one saved for this track becomes the new ghost: saved
// to its own file, and shown by the ghost in Time Trial.
public class GhostRecorder : MonoBehaviour
{
    [SerializeField] float interval = 0.1f;     // seconds between samples

    Racer player;
    RaceManager race;
    GhostData recording;
    float timeToNext;

    public GhostData Best { get; private set; }

    public event Action<GhostData> NewBest;

    void OnDisable()
    {
        if (player != null)
        {
            player.LapCompleted -= OnLapCompleted;
            player.CheckpointPassed -= OnCheckpointPassed;
        }
    }

    // The Race Manager starts it when the karts are on the grid, with the best lap saved so far.
    public void Record(Racer racer, RaceManager raceManager, GhostData savedBest)
    {
        player = racer;
        race = raceManager;
        Best = savedBest;
        player.LapCompleted += OnLapCompleted;
        player.CheckpointPassed += OnCheckpointPassed;
        StartRecording();
    }

    void Update()
    {
        if (recording == null || !race.IsRacing || player.HasFinished)
        {
            return;
        }
        timeToNext -= Time.deltaTime;
        if (timeToNext <= 0f)
        {
            timeToNext += interval;
            recording.positions.Add(player.transform.position);
            recording.rotations.Add(player.transform.rotation);
        }
    }

    void StartRecording()
    {
        recording = new GhostData(race.Track.Id, interval, race.CheckpointCount);
        timeToNext = 0f;
    }

    void OnCheckpointPassed(int index, float lapTime)
    {
        recording.checkpointTimes[index] = lapTime;
    }

    void OnLapCompleted(int lap, float lapTime)
    {
        recording.lapTime = lapTime;
        recording.checkpointTimes[0] = lapTime;
        if (Best == null || lapTime < Best.lapTime)
        {
            Best = recording;
            SaveSystem.SaveGhost(Best);
            NewBest?.Invoke(Best);
        }
        StartRecording();
    }
}
```

`timeToNext += interval` (not `= interval`) keeps the samples exactly a tenth of a second
apart, even when a frame is late. `NewBest` is a C# event with a value: `Action<GhostData>`
hands the new best lap to whoever listens.

### Do it — replay

5. `TimeText` writes a gap. Replace `TimeText.cs`:

```csharp:TimeText.cs
// Times as the game shows them: 1:12.40 (minutes, seconds, hundredths), or a
// dash for no time yet. The HUD, the cards and the results all use it.
public static class TimeText
{
    const int SecondsInMinute = 60;

    public static string Format(float seconds)
    {
        if (seconds <= 0f)
        {
            return "-:--.--";
        }
        int minutes = (int)(seconds / SecondsInMinute);
        float rest = seconds - minutes * SecondsInMinute;
        return $"{minutes}:{rest:00.00}";
    }

    // A gap to the ghost: +0.42 behind it, -0.30 ahead.
    public static string Gap(float seconds)
    {
        return seconds >= 0f ? $"+{seconds:0.00}" : $"{seconds:0.00}";
    }

    // 1st, 2nd, 3rd, 4th.
    public static string Place(int place)
    {
        switch (place)
        {
            case 1: return "1st";
            case 2: return "2nd";
            case 3: return "3rd";
            default: return $"{place}th";
        }
    }
}
```

6. In `Scripts/Race`, `GhostRunner.cs`:

```csharp:GhostRunner.cs
using System.Collections.Generic;
using UnityEngine;

// The ghost: a see-through kart that replays your best lap. Between two
// samples it glides, with Vector3.Lerp and Quaternion.Slerp, so ten samples a
// second look smooth. To the standings and the checkpoints it's a racer like
// any other, an IRacer with a trigger collider, but it has no engine and no
// driver, and it passes through karts (its layer, Ghost, only meets triggers).
// It sets off whenever you start a lap.
public class GhostRunner : MonoBehaviour, IRacer
{
    [SerializeField] GameObject look;   // the see-through body, hidden when there's no ghost to show

    GhostData ghost;
    IReadOnlyList<Checkpoint> checkpoints;
    float time;
    bool isRunning;

    public string RacerName { get { return "Ghost"; } }
    public int Lap { get; private set; }
    public int NextCheckpoint { get; private set; }
    public bool HasFinished { get { return false; } }
    public float FinishTime { get { return 0f; } }
    public bool HasLap { get { return ghost != null; } }
    public float LapTime { get { return ghost != null ? ghost.lapTime : 0f; } }

    public float Progress
    {
        get { return ghost != null ? Checkpoint.Progress(Lap, NextCheckpoint, transform.position, checkpoints) : 0f; }
    }

    public void Setup(IReadOnlyList<Checkpoint> trackCheckpoints)
    {
        checkpoints = trackCheckpoints;
        look.SetActive(false);
    }

    // A new best lap to show, from the save file or from the lap just driven.
    public void Show(GhostData bestLap)
    {
        ghost = bestLap;
    }

    // The player has started a lap: the ghost starts its lap too.
    public void StartLap(int lap)
    {
        Lap = lap;
        NextCheckpoint = 1;
        time = 0f;
        isRunning = ghost != null && ghost.positions.Count > 1;
        look.SetActive(isRunning);
        if (isRunning)
        {
            transform.SetPositionAndRotation(ghost.positions[0], ghost.rotations[0]);
        }
    }

    void Update()
    {
        if (!isRunning)
        {
            return;
        }
        time += Time.deltaTime;

        // Which two samples is it between, and how far from the first to the second?
        float place = time / ghost.interval;
        int from = Mathf.FloorToInt(place);
        if (from >= ghost.positions.Count - 1)
        {
            isRunning = false;      // the lap is over: wait at the line for the next one
            return;
        }
        float share = place - from;
        transform.position = Vector3.Lerp(ghost.positions[from], ghost.positions[from + 1], share);
        transform.rotation = Quaternion.Slerp(ghost.rotations[from], ghost.rotations[from + 1], share);
    }

    // How far behind (positive) or ahead (negative) of the ghost you are, at a
    // checkpoint you've just passed. False if the ghost has no time for it.
    public bool TryGetGap(int checkpointIndex, float lapTime, out float gap)
    {
        gap = 0f;
        if (ghost == null || checkpointIndex >= ghost.checkpointTimes.Count || ghost.checkpointTimes[checkpointIndex] <= 0f)
        {
            return false;
        }
        gap = lapTime - ghost.checkpointTimes[checkpointIndex];
        return true;
    }

    public void PassCheckpoint(Checkpoint checkpoint)
    {
        if (checkpoint.Index == NextCheckpoint)
        {
            NextCheckpoint = (NextCheckpoint + 1) % checkpoints.Count;
        }
    }

    public void CompleteLap()
    {
        isRunning = false;
        look.SetActive(false);
    }
}
```

`TryGetGap` follows the `TryGetValue` pattern: it returns whether it could, and hands
back the gap through an `out` parameter. `Mathf.FloorToInt(place)` is the sample before
now; `place - from` is the share of the way to the next.

7. The result keeps the ghost's lap. Replace `RaceResult.cs`:

```csharp:RaceResult.cs
using System.Collections.Generic;

// What the race leaves for the Results scene: the mode, the track, every
// racer's line in finishing order, and the player's own numbers. A plain
// class: nothing in it needs Unity.
public class RaceResult
{
    readonly List<ResultRow> rows = new List<ResultRow>();
    readonly List<float> playerLaps = new List<float>();

    public RaceResult(RaceMode mode, TrackInfo track)
    {
        Mode = mode;
        Track = track;
    }

    public RaceMode Mode { get; private set; }
    public TrackInfo Track { get; private set; }
    public IReadOnlyList<ResultRow> Rows { get { return rows; } }
    public IReadOnlyList<float> PlayerLaps { get { return playerLaps; } }
    public int PlayerPlace { get; private set; }
    public float PlayerRaceTime { get; private set; }
    public float PlayerBestLap { get; private set; }
    public float GhostLap { get; set; }               // Time Trial: the ghost's lap at the start, 0 if none

    public void AddRow(ResultRow row)
    {
        rows.Add(row);
        if (row.IsPlayer)
        {
            PlayerPlace = row.Place;
            PlayerRaceTime = row.RaceTime;
            PlayerBestLap = row.BestLap;
        }
    }

    public void AddPlayerLap(float time)
    {
        playerLaps.Add(time);
    }
}
```

8. The Race Manager starts the recorder in both modes, and in Time Trial puts the ghost
   in the race. Replace `RaceManager.cs`:

```csharp
using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;

public enum RaceState { Countdown, Racing, Finishing, Over }

// The race, as a state machine: Countdown, Racing, Finishing (you're home, and
// the others have 15 seconds to finish too), Over. It puts the karts on the
// grid from RaceSetup (your kart, and three rivals in a Race, or the ghost in
// Time Trial), plugs a driver into each when the lights go green, and keeps
// the standings: a List of IRacer, sorted four times a second. When the race
// is over it leaves a RaceResult in RaceSetup for the Results scene, and
// raises onRaceOver, which the Scene Fader is wired to.
public class RaceManager : MonoBehaviour
{
    const float SortInterval = 0.25f;       // seconds between sorting the standings
    const float FinishingTime = 15f;        // seconds the others get once you've finished
    const float ResultsDelay = 3f;          // seconds of the finished race before the results
    const float FinishedAhead = 100000f;    // see RaceOrder
    const int CountdownFrom = 3;

    [Header("When this scene is started on its own")]
    [SerializeField] TrackInfo testTrack;
    [SerializeField] KartStats testKart;
    [SerializeField] RaceMode testMode = RaceMode.Race;

    [Header("The race")]
    [SerializeField] Racer[] kartPrefabs;           // the three kart variants: each one's stats say which it is
    [SerializeField] RivalProfile[] rivals;
    [SerializeField] float[] rivalLanes = { -1f, 1f, 0f };  // metres either side of the racing line
    [SerializeField] LayerMask kartLayers;

    [Header("The track")]
    [SerializeField] StartGrid startGrid;
    [SerializeField] Checkpoint[] checkpoints;      // the finish line first, then in order round the track
    [SerializeField] RacingLine racingLine;

    [Header("The Race Kit")]
    [SerializeField] PlayerDriver playerDriver;
    [SerializeField] ChaseCamera chaseCamera;
    [SerializeField] GhostRecorder ghostRecorder;
    [SerializeField] GhostRunner ghostPrefab;
    [SerializeField] UnityEvent onRaceOver;

    readonly List<IRacer> standings = new List<IRacer>();
    readonly List<Racer> karts = new List<Racer>();
    readonly Dictionary<Racer, RivalProfile> rivalOf = new Dictionary<Racer, RivalProfile>();
    float timeToSort;
    float finishingTimeLeft;
    float ghostLapAtStart;      // Time Trial: the lap the ghost showed when the race began

    public RaceState State { get; private set; }
    public RaceMode Mode { get; private set; }
    public TrackInfo Track { get; private set; }
    public float RaceTime { get; private set; }
    public int Laps { get { return Track.Laps; } }
    public int CheckpointCount { get { return checkpoints.Length; } }
    public bool IsRacing { get { return State == RaceState.Racing || State == RaceState.Finishing; } }
    public Racer Player { get; private set; }
    public GhostRunner Ghost { get; private set; }
    public IReadOnlyList<IRacer> Standings { get { return standings; } }

    public event Action<int> CountdownTicked;       // 3, 2, 1, then 0 for GO
    public event Action RaceStarted;
    public event Action RaceOver;

    void Awake()
    {
        // From the Garage, RaceSetup says what to race. Started on its own,
        // this scene has no Garage before it, so it uses the test fields.
        if (RaceSetup.Track == null)
        {
            Debug.LogWarning($"No race was set up (was this scene started on its own?): racing the Test Track, {testTrack.DisplayName}.", this);
            RaceSetup.Track = testTrack;
            RaceSetup.Kart = testKart;
            RaceSetup.Mode = testMode;
        }
        Track = RaceSetup.Track;
        Mode = RaceSetup.Mode;
    }

    void Start()
    {
        PlaceKarts();
        StartCoroutine(Countdown());
    }

    void OnDisable()
    {
        if (Player != null)
        {
            Player.LapCompleted -= OnPlayerLapCompleted;
        }
        ghostRecorder.NewBest -= OnNewBestLap;
    }

    void Update()
    {
        if (!IsRacing)
        {
            return;
        }
        RaceTime += Time.deltaTime;

        timeToSort -= Time.deltaTime;
        if (timeToSort <= 0f)
        {
            timeToSort = SortInterval;
            SortStandings();
        }

        if (State == RaceState.Finishing)
        {
            finishingTimeLeft -= Time.deltaTime;
            if (finishingTimeLeft <= 0f || EveryKartHasFinished())
            {
                EnterState(RaceState.Over);
            }
        }
    }

    void EnterState(RaceState state)
    {
        State = state;
        switch (state)
        {
            case RaceState.Racing:
                PlugInDrivers();
                RaceStarted?.Invoke();
                if (Ghost != null)
                {
                    Ghost.StartLap(1);
                }
                break;
            case RaceState.Finishing:
                finishingTimeLeft = FinishingTime;
                break;
            case RaceState.Over:
                SortStandings();
                RaceSetup.Result = MakeResult();
                RaceOver?.Invoke();
                StartCoroutine(ShowResults());
                break;
        }
    }

    // A racer has crossed the line for the last time. Racer calls this.
    public void ReportFinish(Racer racer)
    {
        if (racer != Player)
        {
            return;
        }
        // You're home. The computer drives your kart from here; in Time Trial, that's the end.
        DriveByComputer(racer, null, 0f);
        if (Mode == RaceMode.TimeTrial || EveryKartHasFinished())
        {
            EnterState(RaceState.Over);
        }
        else
        {
            EnterState(RaceState.Finishing);
        }
    }

    // ------------------------------------------------------------------ the start

    void PlaceKarts()
    {
        GhostData savedGhost = SaveSystem.LoadGhost(Track.Id);     // null if this track has none yet
        int playerSlot = Mode == RaceMode.Race ? rivals.Length : 0;     // at the back of a race
        Player = SpawnKart(PrefabFor(RaceSetup.Kart), startGrid.Slot(playerSlot), "You", true);

        if (Mode == RaceMode.Race)
        {
            for (int i = 0; i < rivals.Length; i++)
            {
                Racer rival = SpawnKart(rivals[i].KartPrefab, startGrid.Slot(i), rivals[i].DisplayName, false);
                rival.GetComponent<KartPaint>().Paint(rivals[i].Colour);
                rivalOf[rival] = rivals[i];
            }
        }
        else
        {
            Ghost = Instantiate(ghostPrefab);
            Ghost.Setup(checkpoints);
            Ghost.Show(savedGhost);
            ghostLapAtStart = Ghost.LapTime;
            standings.Add(Ghost);
        }

        chaseCamera.Follow(Player.Kart);
        ghostRecorder.Record(Player, this, savedGhost);
        ghostRecorder.NewBest += OnNewBestLap;
        Player.LapCompleted += OnPlayerLapCompleted;    // after the recorder, so a new best is ready for the next lap
    }

    Racer SpawnKart(Racer prefab, Transform slot, string racerName, bool isPlayer)
    {
        Racer racer = Instantiate(prefab, slot.position, slot.rotation);
        racer.name = racerName;
        racer.Setup(racerName, isPlayer, this, checkpoints);
        karts.Add(racer);
        standings.Add(racer);
        return racer;
    }

    // The kart variant whose stats are the kart chosen in the Garage.
    Racer PrefabFor(KartStats stats)
    {
        foreach (Racer prefab in kartPrefabs)
        {
            if (prefab.GetComponent<KartController>().Stats == stats)
            {
                return prefab;
            }
        }
        Debug.LogWarning($"No kart prefab uses {stats.name}: racing the first one.", this);
        return kartPrefabs[0];
    }

    IEnumerator Countdown()
    {
        State = RaceState.Countdown;
        yield return new WaitForSeconds(1f);
        for (int count = CountdownFrom; count > 0; count--)
        {
            CountdownTicked?.Invoke(count);
            yield return new WaitForSeconds(1f);
        }
        CountdownTicked?.Invoke(0);
        EnterState(RaceState.Racing);
    }

    // The player's kart gets the Player Driver, and each rival's the computer.
    void PlugInDrivers()
    {
        playerDriver.Drive(Player);
        foreach (KeyValuePair<Racer, RivalProfile> pair in rivalOf)
        {
            int lane = karts.IndexOf(pair.Key) % rivalLanes.Length;
            DriveByComputer(pair.Key, pair.Value, rivalLanes[lane]);
        }
    }

    void DriveByComputer(Racer racer, RivalProfile profile, float lane)
    {
        float skill = profile != null ? profile.Skill + Track.RivalSkillBonus : 1f;
        AIDriver driver = racer.gameObject.AddComponent<AIDriver>();
        driver.Setup(racingLine, Mathf.Clamp01(skill), lane, kartLayers);
        racer.Kart.Driver = driver;
    }

    // ------------------------------------------------------------------ the ghost

    void OnPlayerLapCompleted(int lap, float time)
    {
        if (Ghost != null && !Player.HasFinished)
        {
            Ghost.StartLap(lap + 1);
        }
    }

    void OnNewBestLap(GhostData bestLap)
    {
        if (Ghost != null)
        {
            Ghost.Show(bestLap);
        }
    }

    // ------------------------------------------------------------------ the standings

    // Sort takes a way to compare two racers. The lambda says: whichever has
    // the bigger RaceOrder comes first.
    void SortStandings()
    {
        standings.Sort((a, b) => RaceOrder(b).CompareTo(RaceOrder(a)));
    }

    // One number for each racer, bigger for further ahead. A racer who has
    // finished is ahead of everyone still racing, and an earlier finish is
    // ahead of a later one.
    static float RaceOrder(IRacer racer)
    {
        if (racer.HasFinished)
        {
            return FinishedAhead - racer.FinishTime;
        }
        return racer.Progress;
    }

    bool EveryKartHasFinished()
    {
        foreach (Racer kart in karts)
        {
            if (!kart.HasFinished)
            {
                return false;
            }
        }
        return true;
    }

    // ------------------------------------------------------------------ the end

    RaceResult MakeResult()
    {
        RaceResult result = new RaceResult(Mode, Track);
        int place = 1;
        foreach (IRacer racer in standings)
        {
            if (racer is Racer kart)
            {
                result.AddRow(new ResultRow(place, kart.RacerName, kart.HasFinished, kart.FinishTime, kart.BestLap, kart.IsPlayer));
                place++;
            }
        }
        foreach (float lap in Player.LapTimes)
        {
            result.AddPlayerLap(lap);
        }
        result.GhostLap = ghostLapAtStart;
        return result;
    }

    IEnumerator ShowResults()
    {
        yield return new WaitForSeconds(ResultsDelay);
        onRaceOver.Invoke();
    }
}
```

<!-- check: end -->

Read `PlaceKarts` again: the ghost is added to `standings`, the list of `IRacer`, beside
your `Racer`, and `RaceOrder` never asks which is which. And the order of the last two
lines matters: the recorder hears your lap first, so a new best is ready before the
Race Manager starts the ghost on the next lap.

9. The HUD shows the gap. Replace `RaceHud.cs`:

```csharp
using TMPro;
using UnityEngine;

// The race's heads-up display: your place, the lap, the race time, your best
// lap, the speed, the boost gauge, Wrong way!, and in Time Trial the gap to
// the ghost at each checkpoint. It listens to the Race Manager and your
// Racer for what happens, and reads the numbers that change all the time
// every frame.
public class RaceHud : MonoBehaviour
{
    const float KilometresPerHour = 3.6f;   // for each metre a second
    const float MilesPerHour = 2.237f;
    const float GapShowTime = 3f;           // seconds

    [SerializeField] RaceManager race;
    [SerializeField] TMP_Text placeText;
    [SerializeField] TMP_Text lapText;
    [SerializeField] TMP_Text timeText;
    [SerializeField] TMP_Text bestLapText;
    [SerializeField] TMP_Text speedText;
    [SerializeField] GameObject wrongWay;
    [SerializeField] TMP_Text gapText;
    [SerializeField] Color behindColour = new Color(1f, 0.45f, 0.4f);   // slower than the ghost
    [SerializeField] Color aheadColour = new Color(0.45f, 1f, 0.5f);
    [SerializeField] TMP_Text finishText;
    [SerializeField] BoostGauge boostGauge;

    Racer player;
    float gapTimeLeft;
    bool useMph;

    void OnEnable()
    {
        race.RaceStarted += OnRaceStarted;
        race.RaceOver += OnRaceOver;
    }

    void OnDisable()
    {
        race.RaceStarted -= OnRaceStarted;
        race.RaceOver -= OnRaceOver;
        if (player != null)
        {
            player.LapCompleted -= OnLapCompleted;
            player.CheckpointPassed -= OnCheckpointPassed;
            player.Finished -= OnFinished;
        }
    }

    void Start()
    {
        useMph = GameSettings.UseMph;
        wrongWay.SetActive(false);
        gapText.gameObject.SetActive(false);
        finishText.gameObject.SetActive(false);
        placeText.gameObject.SetActive(race.Mode == RaceMode.Race);
        lapText.text = $"LAP 1/{race.Laps}";
        timeText.text = "0:00.00";
        bestLapText.text = $"BEST {TimeText.Format(0f)}";
        speedText.text = useMph ? "0 mph" : "0 km/h";
    }

    // The karts are on the grid by now: listen to yours.
    void OnRaceStarted()
    {
        player = race.Player;
        player.LapCompleted += OnLapCompleted;
        player.CheckpointPassed += OnCheckpointPassed;
        player.Finished += OnFinished;
        boostGauge.Watch(player.GetComponent<BoostMeter>());
    }

    void Update()
    {
        if (player == null)
        {
            return;
        }
        if (gapTimeLeft > 0f)
        {
            gapTimeLeft -= Time.deltaTime;
            gapText.gameObject.SetActive(gapTimeLeft > 0f);
        }
        timeText.text = TimeText.Format(race.RaceTime);
        float speed = Mathf.Abs(player.Kart.Speed);
        speedText.text = useMph ? $"{Mathf.RoundToInt(speed * MilesPerHour)} mph" : $"{Mathf.RoundToInt(speed * KilometresPerHour)} km/h";
        placeText.text = $"{TimeText.Place(PlaceOf(player))} / {race.Standings.Count}";
        wrongWay.SetActive(player.IsWrongWay && !player.HasFinished);
    }

    void OnLapCompleted(int lap, float time)
    {
        bestLapText.text = $"BEST {TimeText.Format(player.BestLap)}";
        if (lap < race.Laps)
        {
            lapText.text = $"LAP {lap + 1}/{race.Laps}";
        }
    }

    // In Time Trial, how you're doing against the ghost, for a few seconds.
    void OnCheckpointPassed(int index, float lapTime)
    {
        float gap;
        if (race.Ghost != null && race.Ghost.TryGetGap(index, lapTime, out gap))
        {
            gapText.text = TimeText.Gap(gap);
            gapText.color = gap > 0f ? behindColour : aheadColour;
            gapText.gameObject.SetActive(true);
            gapTimeLeft = GapShowTime;
        }
    }

    void OnFinished()
    {
        finishText.text = race.Mode == RaceMode.Race ? $"{TimeText.Place(PlaceOf(player))}!" : "FINISH!";
        finishText.gameObject.SetActive(true);
    }

    void OnRaceOver()
    {
        wrongWay.SetActive(false);
        finishText.gameObject.SetActive(true);
    }

    int PlaceOf(IRacer racer)
    {
        int place = 1;
        foreach (IRacer other in race.Standings)
        {
            if (other == racer)
            {
                return place;
            }
            place++;
        }
        return place;
    }
}
```

10. And the Results show the ghost's lap. Replace `ResultsScreen.cs`:

```csharp
using UnityEngine;
using TMPro;

// The Results screen: your place in big type, the standings, and what's new:
// a best lap, a best race, a track opened. The records are saved here, so a
// race counts once you see its results. In Time Trial it shows your laps and
// the ghost's. Retry and Next track are buttons; Next track shows only when
// the next track is open. Menu calls the Scene Fader.
public class ResultsScreen : MonoBehaviour
{
    const int TopThree = 3;

    [SerializeField] SceneFader fader;
    [SerializeField] TrackInfo[] tracks;
    [SerializeField] TMP_Text placeText;
    [SerializeField] TMP_Text titleText;
    [SerializeField] TMP_Text newsText;
    [SerializeField] ResultLine linePrefab;
    [SerializeField] Transform lineList;
    [SerializeField] GameObject nextTrackButton;

    RaceResult result;
    TrackInfo nextTrack;

    void Start()
    {
        result = RaceSetup.Result;
        nextTrackButton.SetActive(false);
        if (result == null)
        {
            Debug.LogWarning("There's no race result to show (was the Results scene started on its own?).", this);
            placeText.text = "";
            titleText.text = "NO RACE YET";
            newsText.text = "";
            return;
        }

        titleText.text = $"{result.Track.DisplayName.ToUpper()} · {(result.Mode == RaceMode.Race ? "RACE" : "TIME TRIAL")}";
        if (result.Mode == RaceMode.Race)
        {
            placeText.text = TimeText.Place(result.PlayerPlace);
            ShowStandings();
        }
        else
        {
            placeText.text = TimeText.Format(result.PlayerBestLap);
            ShowLaps();
        }
        newsText.text = SaveRecords();
        nextTrackButton.SetActive(nextTrack != null);
    }

    public void Retry()
    {
        fader.FadeTo(result != null ? result.Track.SceneName : "Menu");
    }

    public void NextTrack()
    {
        RaceSetup.Track = nextTrack;
        fader.FadeTo(nextTrack.SceneName);
    }

    void ShowStandings()
    {
        foreach (ResultRow row in result.Rows)
        {
            string time = row.HasFinished ? TimeText.Format(row.RaceTime) : "racing";
            Instantiate(linePrefab, lineList).Show(TimeText.Place(row.Place), row.RacerName, time, TimeText.Format(row.BestLap), row.IsPlayer);
        }
    }

    void ShowLaps()
    {
        for (int i = 0; i < result.PlayerLaps.Count; i++)
        {
            bool isBest = result.PlayerLaps[i] == result.PlayerBestLap;
            Instantiate(linePrefab, lineList).Show($"Lap {i + 1}", isBest ? "best lap" : "", TimeText.Format(result.PlayerLaps[i]), "", isBest);
        }
        if (result.GhostLap > 0f)
        {
            Instantiate(linePrefab, lineList).Show("Ghost", "the lap you raced", TimeText.Format(result.GhostLap), "", false);
        }
    }

    // Saves the new records and opens the next track, and says what changed.
    string SaveRecords()
    {
        SaveData save = SaveSystem.Load();
        TrackRecord record = save.RecordFor(result.Track.Id);
        string news = "";
        if (result.PlayerBestLap > 0f && (record.bestLap == 0f || result.PlayerBestLap < record.bestLap))
        {
            record.bestLap = result.PlayerBestLap;
            news += "New best lap!\n";
        }
        bool hasFinished = result.PlayerRaceTime > 0f;
        if (hasFinished && (record.bestRace == 0f || result.PlayerRaceTime < record.bestRace))
        {
            record.bestRace = result.PlayerRaceTime;
            news += "New best race!\n";
        }

        if (result.Mode == RaceMode.Race && result.PlayerPlace > 0)
        {
            if (record.bestPlace == 0 || result.PlayerPlace < record.bestPlace)
            {
                record.bestPlace = result.PlayerPlace;
            }
            if (result.PlayerPlace <= TopThree)
            {
                news += OpenTracksAfter(save);
            }
        }
        nextTrack = OpenTrackAfter(save);
        SaveSystem.Save(save);
        return news;
    }

    // Opens every track that a top three here opens, the first time only.
    string OpenTracksAfter(SaveData save)
    {
        string news = "";
        foreach (TrackInfo track in tracks)
        {
            if (track.OpenedBy == result.Track && save.Open(track.Id))
            {
                news += $"Track opened: {track.DisplayName}\n";
            }
        }
        return news;
    }

    // The track after this one, if it's open.
    TrackInfo OpenTrackAfter(SaveData save)
    {
        foreach (TrackInfo track in tracks)
        {
            if (track.OpenedBy == result.Track && save.IsOpen(track.Id))
            {
                return track;
            }
        }
        return null;
    }
}
```

### Do it — the ghost kart and its layers

11. **Layers.** In **Tags and Layers**, two more: `Ghost` and `Triggers`. Then **Edit →
    Project Settings → Physics**, the **Layer Collision Matrix**: untick every box in the
    `Ghost` row but `Triggers`, and untick `Triggers` × `Track`. The ghost meets only
    triggers; triggers needn't test against the road.
12. Put every track's triggers on `Triggers`: in each of the three tracks, `Race` →
    `Checkpoints`, `Boost Pads` (and `Mud Patch`), with **Yes, change children**. Do it in
    the prefabs too: `Checkpoint`, `Finish Line`, `Boost Pad`, `Mud Patch`.
13. A `Ghost` material: **Create → Material**, shader **Universal Render
    Pipeline/Unlit**, **Surface Type** **Transparent**, colour `BFE9FF` at alpha 89: pale,
    see-through, and not lit, so it looks like light.
14. The **Ghost Kart** prefab: an empty `Ghost Kart` with a **Rigidbody** (**Is
    Kinematic** ticked: moved by its script, not by physics), a **Box Collider** (**Is
    Trigger**, **Center** `(0, 0.3, 0.05)`, **Size** `(1.1, 0.45, 1.75)`) and
    **GhostRunner**. Inside it, `Art/Kart/kart` as `Look`, Rotation `(0, -90, 0)`, with
    the `Ghost` material on every part (select all its parts and set **Element 0**; the
    parts with two materials need both), and **Cast Shadows** off. Drag `Look` into
    **Look**. Set the whole prefab's layer to `Ghost`, children too. Into
    `Prefabs`.
15. Open `Prefabs/Race Kit`. On `Race Manager`, add **GhostRecorder**, and drag it into the
    Race Manager's **Ghost Recorder**, and the `Ghost Kart` prefab into **Ghost Prefab**.
    In the HUD, a text `Ghost Gap` (middle centre, Pos `(0, 300)`, 400 × 90, `+0.42`, 64,
    mint), dragged into the RaceHud's **Gap Text**.

### Test it

- From the Menu, **Time Trial**, Meadow Loop. Lap 1: no ghost yet. Lap 2: a pale kart
  sets off with you, driving your first lap exactly, through you. At each checkpoint the
  gap shows: red if you're behind it, green if you're ahead.
- Stop. Look in the save folder: `ghost-meadow-loop.json`. Play again: the ghost is there
  from lap 1, driving your best lap from yesterday, so to speak.
- The Results of a Time Trial: your three laps, the best highlighted, and *Ghost*, the lap
  you raced against.
- Race mode records too: a best lap in a Race becomes the ghost for Time Trial.

### Commit

*Add Time Trial's ghost.* Push.

### Challenge

The ghost records 10 samples a second. Set the recorder's **Interval** to `0.5` and drive
a lap, then watch the ghost on the next: where does it cut corners, and why? (Lerp draws a
straight line between two samples.) Then `0.02`: is the ghost better? Look at the file's
size. Put it back to `0.1`.

## Chapter 15 — Controls

**Goal:** controls a player can make their own. A pause menu that really stops the race,
and swaps the controls with it. Keys you can change, kept between sessions. And on a
phone or tablet, a stick and buttons on the screen, with no new driving code.

### Idea — maps, bindings and pretend gamepads

C# 5 had all three ideas; here they are in the game.

**Two action maps.** While racing, the `Drive` map is on. Pausing switches it **off**
and switches a second map, `Paused`, on: its one action, `Resume`, is bound to the same
keys as `Pause`. With `Drive` off, holding W behind the pause menu does nothing, and the
same Esc key that paused now resumes. One script owns the maps: `PauseMenu`. Until now,
`PlayerDriver` switched the Drive map on; from today it only reads it.

**Rebinding.** Each row of the Settings Panel shows one action's key and a **Change**
button. Change asks the Input System to wait for the next key pressed, and makes it the
action's key: `PerformInteractiveRebinding`. The changes are **overrides** on top of the
asset; `SaveBindingOverridesAsJson` turns every one into one line of text, which
`GameSettings` keeps in PlayerPrefs.

**Touch.** The Input System's **On-Screen Stick** and **On-Screen Button** components
pretend to be a gamepad: the stick moves `<Gamepad>/leftStick`, a button presses
`<Gamepad>/rightTrigger`. The `Drive` map already listens to a gamepad, so `PlayerDriver`
never knows the difference. The only code is a script that shows them on a touch screen
only.

### Do it — pause

1. In `Pocket Karts Controls`, add a **Button** action `Pause` to `Drive` (**Escape**,
   **P**, and the Gamepad's **Start**). Add a second map, `Paused`, with one **Button**
   action, `Resume`, with the same three bindings. Save.
2. The pause menu loads your keys when a race starts, so `GameSettings` learns to keep
   them first. Replace `GameSettings.cs`:

```csharp
using UnityEngine;
using UnityEngine.InputSystem;

// The player's settings, kept in PlayerPrefs: small values, one key each. The
// keys are constants, so a typo is a compile error, not a setting that quietly
// never loads. They start with the game's name because every game in one Unity
// project shares the same PlayerPrefs.
public static class GameSettings
{
    const string UseMphKey = "PocketKarts.UseMph";
    const string BindingsKey = "PocketKarts.Bindings";

    // PlayerPrefs has no bool, so it's an int: 1 for on, 0 for off.
    public static bool UseMph
    {
        get { return PlayerPrefs.GetInt(UseMphKey, 0) == 1; }
        set { PlayerPrefs.SetInt(UseMphKey, value ? 1 : 0); }
    }

    // Writes the settings to disk now, rather than when the game quits.
    public static void Save()
    {
        PlayerPrefs.Save();
    }

    // Every key the player has changed, as one line of JSON.
    public static void SaveBindings(InputActionAsset actions)
    {
        PlayerPrefs.SetString(BindingsKey, actions.SaveBindingOverridesAsJson());
        PlayerPrefs.Save();
    }

    public static void LoadBindings(InputActionAsset actions)
    {
        string json = PlayerPrefs.GetString(BindingsKey, "");
        if (json != "")
        {
            actions.LoadBindingOverridesFromJson(json);
        }
    }

    public static void ResetBindings(InputActionAsset actions)
    {
        actions.RemoveAllBindingOverrides();
        PlayerPrefs.DeleteKey(BindingsKey);
        PlayerPrefs.Save();
    }
}
```

3. In `Scripts/UI`, `PauseMenu.cs`:

```csharp
using UnityEngine;
using UnityEngine.InputSystem;
using UnityEngine.SceneManagement;

// Pauses the race: it stops time, shows the panel, and swaps action maps
// (from Drive to Paused, so the kart can't be driven behind the menu). The
// panel's buttons call Resume and Restart; Quit to Menu calls the Scene Fader.
public class PauseMenu : MonoBehaviour
{
    [SerializeField] GameObject panel;
    [SerializeField] GameObject settingsPanel;
    [SerializeField] SceneFader fader;
    [SerializeField] InputActionReference pauseAction;      // in the Drive map
    [SerializeField] InputActionReference resumeAction;     // in the Paused map

    InputActionMap driveMap;
    InputActionMap pausedMap;

    void Awake()
    {
        driveMap = pauseAction.action.actionMap;
        pausedMap = resumeAction.action.actionMap;
    }

    void OnEnable()
    {
        pauseAction.action.performed += OnPausePressed;
        resumeAction.action.performed += OnResumePressed;
    }

    void OnDisable()
    {
        pauseAction.action.performed -= OnPausePressed;
        resumeAction.action.performed -= OnResumePressed;
        driveMap.Disable();
        pausedMap.Disable();
    }

    void Start()
    {
        GameSettings.LoadBindings(pauseAction.asset);
        panel.SetActive(false);
        driveMap.Enable();
    }

    // Also the touch controls' pause button.
    public void Pause()
    {
        Time.timeScale = 0f;
        panel.SetActive(true);
        driveMap.Disable();
        pausedMap.Enable();
    }

    public void Resume()
    {
        Time.timeScale = 1f;
        panel.SetActive(false);
        settingsPanel.SetActive(false);
        pausedMap.Disable();
        driveMap.Enable();
    }

    // The race again, from the grid: this scene, loaded again.
    public void Restart()
    {
        fader.FadeTo(SceneManager.GetActiveScene().name);
    }

    void OnPausePressed(InputAction.CallbackContext context)
    {
        Pause();
    }

    void OnResumePressed(InputAction.CallbackContext context)
    {
        Resume();
    }
}
```

`Time.timeScale = 0f` stops everything that counts time: physics, `Update`'s
`Time.deltaTime`, the race clock, coroutines' `WaitForSeconds`. The fader still works
(Chapter 12 made it use unscaled time). `Restart` loads the scene again from scratch: the
simplest restart there is.

4. `PlayerDriver` stops switching the map on: `PauseMenu` owns the maps now. Replace
   `PlayerDriver.cs`, finished:

```csharp:PlayerDriver.cs
using UnityEngine;
using UnityEngine.InputSystem;

// The player's hands on the wheel: the Drive map's actions, read as an
// IKartInput. It's in the Race Kit, not on a kart: the Race Manager plugs it
// into the player's kart when the race starts. Keys, a gamepad and the touch
// controls all reach it through the same actions.
public class PlayerDriver : MonoBehaviour, IKartInput
{
    [SerializeField] InputActionReference steerAction;
    [SerializeField] InputActionReference throttleAction;
    [SerializeField] InputActionReference driftAction;
    [SerializeField] InputActionReference boostAction;
    [SerializeField] InputActionReference backToTrackAction;

    Racer racer;        // the kart this driver drives, for Back to the track

    public float Steer { get { return steerAction.action.ReadValue<float>(); } }
    public float Throttle { get { return throttleAction.action.ReadValue<float>(); } }
    public bool Drift { get { return driftAction.action.IsPressed(); } }
    public bool Boost { get { return boostAction.action.IsPressed(); } }

    void OnEnable()
    {
        backToTrackAction.action.performed += OnBackToTrack;
    }

    void OnDisable()
    {
        backToTrackAction.action.performed -= OnBackToTrack;
    }

    public void Drive(Racer kart)
    {
        racer = kart;
        racer.Kart.Driver = this;
    }

    void OnBackToTrack(InputAction.CallbackContext context)
    {
        if (racer != null)
        {
            racer.BackToTrack();
        }
    }
}
```

### Do it — keys of your own

5. In `Scripts/Flow`, `RebindRow.cs`:

```csharp:RebindRow.cs
using TMPro;
using UnityEngine;
using UnityEngine.InputSystem;
using UnityEngine.UI;

// One row of the Settings Panel: an action's name, its key, and Change.
// Change waits for the next key pressed and makes it the action's new key,
// then saves every changed key in PlayerPrefs. Steer has two rows, one for
// each part of its composite (left and right): Binding Index says which.
public class RebindRow : MonoBehaviour
{
    [SerializeField] InputActionReference action;
    [SerializeField] int bindingIndex;          // which of the action's bindings
    [SerializeField] TMP_Text keyText;
    [SerializeField] Button changeButton;

    InputActionRebindingExtensions.RebindingOperation rebinding;

    void OnEnable()
    {
        changeButton.onClick.AddListener(StartRebinding);
    }

    void OnDisable()
    {
        changeButton.onClick.RemoveListener(StartRebinding);
        if (rebinding != null)
        {
            rebinding.Cancel();
        }
    }

    // The key's own name, such as "A" or "Left Shift". GetBindingDisplayString
    // would name it by the computer's keyboard layout, which can be a letter
    // our font doesn't have.
    public void Refresh()
    {
        string path = action.action.bindings[bindingIndex].effectivePath;
        keyText.text = InputControlPath.ToHumanReadableString(path, InputControlPath.HumanReadableStringOptions.OmitDevice);
    }

    void StartRebinding()
    {
        // An action can't be rebound while it's listening, so switch it off for now.
        bool wasEnabled = action.action.enabled;
        action.action.Disable();
        keyText.text = "Press a key...";

        rebinding = action.action.PerformInteractiveRebinding(bindingIndex)
            .WithControlsHavingToMatchPath("<Keyboard>")
            .WithCancelingThrough("<Keyboard>/escape")
            .OnComplete(operation => Finish(wasEnabled))
            .OnCancel(operation => Finish(wasEnabled))
            .Start();
    }

    void Finish(bool enableAgain)
    {
        rebinding.Dispose();
        rebinding = null;
        if (enableAgain)
        {
            action.action.Enable();
        }
        GameSettings.SaveBindings(action.asset);
        Refresh();
    }
}
```

`PerformInteractiveRebinding` returns a **rebinding operation**, set up with a chain of
calls: only keyboard keys (`WithControlsHavingToMatchPath`), Escape cancels
(`WithCancelingThrough`), and two lambdas for when it's done or cancelled. `Start()`
begins waiting. The operation holds on to memory until it's `Dispose`d, which `Finish`
does.

6. `SaveSystem` can delete everything, for Settings' **Delete Save**. Replace
   `SaveSystem.cs`, finished:

```csharp:SaveSystem.cs
using System;
using System.IO;
using UnityEngine;

// Reads and writes the save files in the folder Unity keeps for each game's
// files (Application.persistentDataPath): pocket-karts.json for the records
// and the open tracks, and one ghost-<track>.json for each track's best lap.
// A file can be missing or damaged, so reading and writing are wrapped in
// try / catch: a bad file must never stop the game. A damaged ghost only
// loses the ghost.
public static class SaveSystem
{
    const string FileName = "pocket-karts.json";
    const string GhostFiles = "ghost-*.json";
    const string DamagedEnding = ".bad.json";

    public static SaveData Load()
    {
        string json = ReadText(FileName);
        if (json == null)
        {
            return new SaveData();      // the first run: nothing saved yet
        }
        try
        {
            SaveData data = JsonUtility.FromJson<SaveData>(json);
            if (data == null)
            {
                Debug.LogWarning("The save file is empty: starting a new one.");
                return new SaveData();
            }
            return data;
        }
        catch (ArgumentException exception)
        {
            KeepDamagedFile(FileName, exception);
            return new SaveData();
        }
    }

    public static void Save(SaveData data)
    {
        WriteText(FileName, JsonUtility.ToJson(data, true));
    }

    // The best lap saved for this track, or null if it has none yet.
    public static GhostData LoadGhost(string trackId)
    {
        string fileName = GhostFileName(trackId);
        string json = ReadText(fileName);
        if (json == null)
        {
            return null;
        }
        try
        {
            return JsonUtility.FromJson<GhostData>(json);
        }
        catch (ArgumentException exception)
        {
            KeepDamagedFile(fileName, exception);
            return null;
        }
    }

    public static void SaveGhost(GhostData ghost)
    {
        WriteText(GhostFileName(ghost.trackId), JsonUtility.ToJson(ghost));
    }

    // Delete Save, in Settings: the records, the open tracks and every ghost.
    // Only this game's files: in the Editor, other games share the folder.
    public static void DeleteAll()
    {
        try
        {
            File.Delete(PathOf(FileName));
            foreach (string path in Directory.GetFiles(Application.persistentDataPath, GhostFiles))
            {
                File.Delete(path);
            }
        }
        catch (IOException exception)
        {
            Debug.LogError($"The save files couldn't be deleted: {exception.Message}");
        }
    }

    static string GhostFileName(string trackId)
    {
        return $"ghost-{trackId}.json";
    }

    static string PathOf(string fileName)
    {
        return Path.Combine(Application.persistentDataPath, fileName);
    }

    // The file's text, or null when there's no file (the first run) or it can't be read.
    static string ReadText(string fileName)
    {
        string path = PathOf(fileName);
        if (!File.Exists(path))
        {
            return null;
        }
        try
        {
            return File.ReadAllText(path);
        }
        catch (IOException exception)
        {
            Debug.LogError($"{fileName} couldn't be read: {exception.Message}");
            return null;
        }
    }

    static void WriteText(string fileName, string json)
    {
        try
        {
            File.WriteAllText(PathOf(fileName), json);
        }
        catch (IOException exception)
        {
            Debug.LogError($"{fileName} couldn't be written: {exception.Message}");
        }
    }

    // JsonUtility couldn't read the file: keep it to look at, and start again without it.
    static void KeepDamagedFile(string fileName, ArgumentException exception)
    {
        string damagedName = Path.GetFileNameWithoutExtension(fileName) + DamagedEnding;
        Debug.LogError($"{fileName} is damaged, so the game starts again without it. The old file is kept as {damagedName}.\n{exception.Message}");
        try
        {
            File.Copy(PathOf(fileName), PathOf(damagedName), true);
        }
        catch (IOException copyException)
        {
            Debug.LogWarning($"The damaged file couldn't be kept: {copyException.Message}");
        }
    }
}
```

7. And the Settings Panel grows. Replace `SettingsPanel.cs`:

```csharp
using UnityEngine;
using UnityEngine.InputSystem;
using UnityEngine.UI;

// The Settings Panel, one prefab used in the Menu and in the pause menu: km/h
// or mph, the keys, and Delete Save. Settings go into PlayerPrefs through
// GameSettings, and are written to disk when the panel closes.
public class SettingsPanel : MonoBehaviour
{
    [SerializeField] Toggle mphToggle;
    [SerializeField] InputActionAsset actions;
    [SerializeField] RebindRow[] rebindRows;
    [SerializeField] GameObject confirmDelete;

    void OnEnable()
    {
        GameSettings.LoadBindings(actions);
        mphToggle.SetIsOnWithoutNotify(GameSettings.UseMph);
        mphToggle.onValueChanged.AddListener(OnMphChanged);
        confirmDelete.SetActive(false);
        RefreshKeys();
    }

    void OnDisable()
    {
        mphToggle.onValueChanged.RemoveListener(OnMphChanged);
        GameSettings.Save();
    }

    // The Reset Controls button.
    public void ResetControls()
    {
        GameSettings.ResetBindings(actions);
        RefreshKeys();
    }

    // Delete Save asks first; the confirm panel's Delete button calls DeleteSave.
    public void AskToDeleteSave()
    {
        confirmDelete.SetActive(true);
    }

    public void DeleteSave()
    {
        SaveSystem.DeleteAll();
        confirmDelete.SetActive(false);
    }

    void OnMphChanged(bool isOn)
    {
        GameSettings.UseMph = isOn;
    }

    void RefreshKeys()
    {
        foreach (RebindRow row in rebindRows)
        {
            row.Refresh();
        }
    }
}
```

### Do it — the panels

8. Open `Prefabs/UI/Settings Panel` and make its `Window` taller (1300 × 860). Beside the
   mph toggle, seven **rows**, one under the other: an empty `Steer left Row` (520 × 60)
   holding a text `Action` (*Steer left*, 26, cream, 220 wide), a text `Key` (`A`, 26,
   gold, 140 wide) and a small button `Change` (130 × 50, sky). Add **RebindRow** to the
   row, and set its fields:

| Row | Action | Binding Index |
| --- | --- | --- |
| Steer left | `Drive/Steer` | 1 |
| Steer right | `Drive/Steer` | 2 |
| Accelerate | `Drive/Throttle` | 2 |
| Brake | `Drive/Throttle` | 1 |
| Drift | `Drive/Drift` | 0 |
| Boost | `Drive/Boost` | 0 |
| Back to track | `Drive/Back To Track` | 0 |

   **Binding Index** is a binding's place in the action's list in the Input Actions
   editor, counting from 0. A Positive/Negative composite is one place, and its parts
   follow it, **Negative** first: so Steer's `A` (Negative) is 1 and `D` (Positive) is 2,
   and Throttle's `S` is 1 and `W` is 2. Open your asset and check: if yours lists them
   the other way round, swap the numbers.
9. Under the rows, `Reset Controls` (*Reset keys*, sky) → **SettingsPanel →
   ResetControls**, and `Delete Save` (*Delete save*, tomato) → **SettingsPanel →
   AskToDeleteSave**. And `Confirm Delete`: an Image over the whole window (black, alpha
   200), with a box saying *Delete every record, open track and ghost?*, a `Delete`
   button (tomato) → **SettingsPanel → DeleteSave**, and a `Keep` button (sky) →
   `Confirm Delete` → **GameObject → SetActive**, unticked. On SettingsPanel: **Actions**
   `Pocket Karts Controls`, the seven rows in **Rebind Rows**, and **Confirm Delete**.
10. **The pause panel.** Open `Prefabs/Race Kit`. In its Canvas, `Pause Panel`: an Image
    stretched over the screen, black at alpha 140, with a `Window` (620 × 620, `1C2633`)
    holding `PAUSED` (64, gold) and four buttons down the middle (420 × 84): `Resume`
    (gold), `Restart` (sky), `Settings` (sky), `Quit to Menu` (tomato). Put a `Settings
    Panel` in the Canvas too, after the pause panel (so it draws on top).
11. Add **PauseMenu** to the `Race Kit`'s root: **Panel** `Pause Panel`, **Settings
    Panel**, **Fader**, **Pause Action** `Drive/Pause`, **Resume Action**
    `Paused/Resume`. The buttons: `Resume` → **PauseMenu → Resume**; `Restart` →
    **PauseMenu → Restart**; `Settings` → `Settings Panel` → **GameObject → SetActive**,
    ticked; `Quit to Menu` → the fader → **SceneFader → FadeTo**, `Menu`.

### Do it — touch

12. In `Scripts/UI`, `TouchControls.cs`:

```csharp:TouchControls.cs
using UnityEngine;
using UnityEngine.InputSystem;

// Shows the on-screen stick and buttons on a touch screen only. The stick and
// buttons need no code of their own: the Input System's On-Screen Stick and
// On-Screen Button pretend to be a gamepad, and the Drive map already listens
// to a gamepad.
public class TouchControls : MonoBehaviour
{
    [SerializeField] GameObject controls;

    void Start()
    {
        controls.SetActive(Touchscreen.current != null);
    }
}
```

13. In the Race Kit's Canvas, before the pause panel (so a pause covers it), `Touch
    Controls` (stretched) with **TouchControls**, and inside it, stretched too,
    `Controls`: drag it into **Controls**. In `Controls`:
    - `Stick Area`, an **Image** (bottom left, Pos `(80, 80)`, 300 × 300, the built-in
      `Knob` sprite, white at alpha 30), and inside it `Stick` (140 × 140, `Knob`, white
      at alpha 128) with an **On-Screen Stick**: **Control Path** `<Gamepad>/leftStick`,
      **Movement Range** `90`.
    - Four round buttons, bottom right, each an **Image** (`Knob`) with an **On-Screen
      Button** and an icon from `Art/Icons` inside:

| Button | Icon | Control Path | Pos (from bottom right) | Size |
| --- | --- | --- | --- | --- |
| `Pedal` | `F1Car` | `<Gamepad>/rightTrigger` | (−70, 90) | 190 |
| `Brake` | `TireTracks` | `<Gamepad>/leftTrigger` | (−290, 70) | 140 |
| `Drift` | `Wheel` | `<Gamepad>/rightShoulder` | (−300, 250) | 140 |
| `Boost` | `Boost` | `<Gamepad>/buttonSouth` | (−110, 320) | 150 |

- A `Pause Button` (top right, Pos `(-30, -130)`, 100 × 90, cream, label `II`) →
  **PauseMenu → Pause**.

### Test it

- Race, and press **Esc**: the race freezes under the panel. Hold W: nothing. Esc again:
  it goes on. **Restart** starts the race again from the lights.
- **Settings** in the pause menu: **Change** next to *Boost*, press **B**: the row says
  `B`, and B boosts. Stop and play again: still B. **Reset keys** puts Space back.
- **Delete save** → **Delete**: from the Menu, the Garage shows every track locked again.
- **Window → General → Device Simulator**, and choose a phone. Play: the stick and the
  buttons appear. Drag the stick with the mouse to steer; hold the pedal to drive. In the
  Game view, with no simulator, they're hidden.

### Commit

*Add pausing, rebinding and touch controls.* Push.

### Challenge

The pause menu has no key for a gamepad's **B** button to close it (players expect it).
Add one binding, and nothing else. Where, and why does no code change? Then: could a
player rebind **Pause** itself? What would go wrong if they bound it to **W**?

## C# 15 — Object Pooling

**Goal:** you can say why making and destroying objects many times a second makes a game
stutter, and replace it with a pool that switches objects off and reuses them (the Level
Reference's Level 4 topic: Object pooling; it connects to Associate: Debugging — select
profiling tools for performance problems).

### Idea — the cost of Instantiate and Destroy

A kart's exhaust puffs, the coins that fly from a juice stand, the damage numbers over a
card: many small objects, each living a second. The plain way makes each one and destroys
it a moment later:

```csharp
[SerializeField] GameObject coinPrefab;

const float CoinLifetime = 1f;

public void DropCoin(Vector3 position)
{
    GameObject coin = Instantiate(coinPrefab, position, Quaternion.identity);
    Destroy(coin, CoinLifetime);        // destroyed a second later
}
```

It works, and for one coin it's fine. For thirty a second, each one costs:

- **`Instantiate`** builds a copy of the prefab: every component is made, and its `Awake`
  and `OnEnable` run. That's work for the CPU, every time.
- **`Destroy`** takes it apart again, and leaves its C# side behind as **garbage**: memory
  that nothing uses any more.
- Every so often the **garbage collector** runs, to find that memory and free it. With a
  little garbage, you never notice. With a lot, it can take long enough to miss a frame:
  a **GC spike**, a stutter the player feels. The Profiler shows both the work and the
  garbage (C# 17).

### Idea — make a few, switch them off, reuse them

A pool works like a café's cups: washed and used again, not bought new and thrown away.
Instead of destroying an object, switch it off and keep it; next time one is needed, switch
a sleeping one back on.

| Without a pool | With a pool |
| --- | --- |
| `Instantiate` a new one | `Get()`: take a sleeping one, or make one if none is left |
| `Destroy` it when it's done | `Release()`: switch it off with `SetActive(false)`, and keep it |
| work and garbage for every object | work and garbage only while the pool grows |

### Idea — a pool on a Stack

A `Stack` (C# 7) suits a pool: `Push` puts an object back, `Pop` takes the
last one put back, and which sleeping object you get doesn't matter. First the pooled
object: a number that rises and fades. When it's done, it doesn't destroy itself. It
raises an event (C# 4), and its pool takes it back:

```csharp
using System;
using System.Collections;
using TMPro;
using UnityEngine;

public class FloatingNumber : MonoBehaviour
{
    const float RiseDistance = 1f;
    const float Lifetime = 0.8f;

    [SerializeField] TMP_Text text;

    public event Action<FloatingNumber> Finished;

    // Everything the last use changed is set again here, before it plays.
    public void Play(string message, Color colour, Vector3 position)
    {
        transform.position = position;
        text.text = message;
        text.color = colour;
        StartCoroutine(Rise());
    }

    IEnumerator Rise()
    {
        Vector3 start = transform.position;
        for (float t = 0f; t < Lifetime; t += Time.deltaTime)
        {
            transform.position = start + Vector3.up * RiseDistance * (t / Lifetime);
            text.alpha = 1f - t / Lifetime;
            yield return null;
        }
        Finished?.Invoke(this);
    }
}
```

Then the pool. It makes a few numbers as the scene starts, so the first ones shown don't
cost anything, and makes more only if they run out:

```csharp
using System.Collections.Generic;
using UnityEngine;

// Floating numbers, pooled. Get pops a sleeping one off the stack, or makes a new
// one when it's empty; Release switches one off and pushes it back.
public class NumberPool : MonoBehaviour
{
    [SerializeField] FloatingNumber numberPrefab;
    [SerializeField] int warmUpCount = 10;

    readonly Stack<FloatingNumber> sleeping = new Stack<FloatingNumber>();

    void Start()
    {
        for (int i = 0; i < warmUpCount; i++)
        {
            Release(Make());
        }
    }

    public void Show(string message, Color colour, Vector3 position)
    {
        Get().Play(message, colour, position);
    }

    FloatingNumber Get()
    {
        FloatingNumber number;
        if (sleeping.Count > 0)
        {
            number = sleeping.Pop();
        }
        else
        {
            number = Make();
        }
        number.gameObject.SetActive(true);
        return number;
    }

    void Release(FloatingNumber number)
    {
        number.gameObject.SetActive(false);
        sleeping.Push(number);
    }

    FloatingNumber Make()
    {
        FloatingNumber number = Instantiate(numberPrefab, transform);
        number.Finished += Release;         // it comes back by itself when it's done
        return number;
    }
}
```

Any script with a reference to the pool shows a number with one call, such as
`numbers.Show($"+{price}", Color.yellow, transform.position)` when a stand sells a juice.
Watch the pool's children in the Hierarchy while it plays: they switch on and off, and a
new one appears only when all of them are busy.

### Idea — resetting what comes back

A reused object keeps everything from its last use. And `Awake` and `Start` run only once,
the first time, so reset it where it starts each use: in a method like `Play`, or in
`OnEnable`, which runs every time it's switched on.

| Left over from last time | Reset it by |
| --- | --- |
| position and rotation | setting them before it plays |
| colour, transparency, scale | setting them: `Play` sets the colour, which brings the alpha back to 1 |
| a Rigidbody's movement | `body.linearVelocity = Vector3.zero;` and `body.angularVelocity = Vector3.zero;` (for a Rigidbody 2D, `Vector2.zero` and `0f`) |
| health, timers, counters | setting them back to their start values |
| coroutines | nothing: `SetActive(false)` stops the object's own coroutines; start new ones in `Play` |
| a trail or particles | calling their `Clear()` |

> **Watch out:** releasing the same object twice puts it on the stack twice, and two
> later `Get` calls hand out the same object. Release each one from one place only, as
> `FloatingNumber` does with its event.

### Idea — growing, or a fixed size

`NumberPool` **grows**: it starts with ten, and makes another whenever all are busy. The
**warm-up** in `Start` moves the cost of making them to the loading, where nobody notices.
A **fixed-size** pool never makes more. When it's empty, it skips (a kart fires no bullet
this frame) or takes back the oldest one in use. Choose the size by watching how many are
ever in use at once.

| Pool it | Don't pool it |
| --- | --- |
| bullets, coins, damage numbers, particle bursts | the player, the level, a menu |
| enemies that come in waves, cars in traffic | a boss that appears once |
| anything made and destroyed many times while playing | anything made once, or rarely |

> **Tip:** a particle burst can return itself, too. Set its Particle System's **Stop
> Action** to **Callback**, and Unity calls `OnParticleSystemStopped()` on its scripts
> when it finishes.

### Idea — Unity's own ObjectPool

Unity has a pool ready-made: `ObjectPool<T>`, in `UnityEngine.Pool`. It's a **generic**
class, like `List<T>`: you say what it holds in the angle brackets. (Writing generic
classes of your own is Level 5.) It does the same job as `NumberPool`. You give it what to
do, as lambdas:

```csharp
using UnityEngine;
using UnityEngine.Pool;

public class PooledNumbers : MonoBehaviour
{
    [SerializeField] FloatingNumber numberPrefab;

    ObjectPool<FloatingNumber> pool;

    void Awake()
    {
        pool = new ObjectPool<FloatingNumber>(
            Make,                                           // make one when none is sleeping
            number => number.gameObject.SetActive(true),    // on Get
            number => number.gameObject.SetActive(false),   // on Release
            number => Destroy(number.gameObject),           // when the pool is full
            true,                                           // complain about a double Release
            10,                                             // room for 10 at first
            50);                                            // keep at most 50 asleep
    }

    public void Show(string message, Color colour, Vector3 position)
    {
        pool.Get().Play(message, colour, position);
    }

    FloatingNumber Make()
    {
        FloatingNumber number = Instantiate(numberPrefab, transform);
        number.Finished += pool.Release;
        return number;
    }
}
```

`true` turns on a check, in the Editor, that throws an exception if you release one
twice. Room for 10 isn't a warm-up: it makes nothing until the first `Get`.

### Do it

1. Make a **Floating Number** prefab from **GameObject → 3D Object → Text - TextMeshPro**,
   with `FloatingNumber` on it. Put `NumberPool` on an empty object, with the prefab.
2. Write a `Practice` script that calls `Show` ten times a second, with a number that
   counts up. Watch the pool's children in the Hierarchy.
3. Give `Show` and `Play` a `bool isBig` parameter. In `Play`, make a big number one and
   a half times the size: `if (isBig) { transform.localScale = Vector3.one * 1.5f; }`.
   Make every tenth number big. What happens once the numbers start being reused, and
   why? Fix it in `Play`.
4. Change the pool to `PooledNumbers`, and check that it behaves the same.

### Challenge

Pool the coins a juice stand throws: each has a Rigidbody 2D, flies up, falls, and goes
back to the pool after a second. Reset its velocity. Then make the pool a fixed size of
20 that takes back the oldest coin when it's empty. Which collection keeps them in order?

## Chapter 16 — Juice

**Goal:** the game feels fast. Skid marks behind a drifting kart, dust from its wheels,
flames when it boosts, sparks when it hits a wall, wheels that roll and steer, and a
camera that pulls back when you boost. And skid marks made the expensive way first, then
**pooled**.

### Idea — make, destroy, or reuse?

A drifting kart leaves a strip under each rear wheel ten times a second. Four karts
drifting through a corner: 80 strips a second. Each strip lives four seconds, fading, and
then it's done.

The obvious code: `Instantiate` a strip, and when it has faded, `Destroy` it. It works.
But every `Instantiate` makes a whole new GameObject (and here a new copy of its
material), and every `Destroy` leaves memory for the **garbage collector** to clear up,
which it does in a sudden pause: a stutter, in a racing game. C# 15: keep the
faded strips **asleep** instead, and wake one up when you need a new one. The pool only
makes a strip when none is asleep.

Which collection holds the sleeping strips? Any one of them will do: there's no order to
keep. The cheapest is a **`Stack`**: `Push` a strip on when it falls asleep, `Pop` one off
when you need it.

### Do it — skid marks, made and destroyed

1. In `Scripts/Karts`, `SkidMark.cs`:

```csharp
using UnityEngine;

// One skid mark: a dark strip on the road that fades away over a few
// seconds, then destroys itself.
public class SkidMark : MonoBehaviour
{
    [SerializeField] float fadeTime = 4f;   // seconds

    Material look;
    Color colour;
    float age;

    void Awake()
    {
        look = GetComponent<Renderer>().material;   // its own copy, so it fades on its own
        colour = look.color;
    }

    void Update()
    {
        age += Time.deltaTime;
        Color faded = colour;
        faded.a = colour.a * (1f - age / fadeTime);
        look.color = faded;
        if (age >= fadeTime)
        {
            Destroy(gameObject);
        }
    }
}
```

2. And `SkidMarks.cs`:

```csharp
using UnityEngine;

// Leaves skid marks while the kart drifts: every tenth of a second, a short
// dark strip on the ground under each rear wheel.
[RequireComponent(typeof(KartController))]
public class SkidMarks : MonoBehaviour
{
    const float GroundOffset = 0.02f;   // metres above the road, so a strip doesn't flicker into it
    const float RayLength = 1.2f;

    [SerializeField] SkidMark markPrefab;
    [SerializeField] Transform[] rearWheels;
    [SerializeField] float interval = 0.1f;     // seconds between strips
    [SerializeField] LayerMask groundLayers;

    KartController kart;
    float timeToNext;

    void Awake()
    {
        kart = GetComponent<KartController>();
    }

    void Update()
    {
        if (!kart.IsDrifting || !kart.IsGrounded)
        {
            return;
        }
        timeToNext -= Time.deltaTime;
        if (timeToNext > 0f)
        {
            return;
        }
        timeToNext = interval;
        foreach (Transform wheel in rearWheels)
        {
            RaycastHit hit;
            if (Physics.Raycast(wheel.position, -transform.up, out hit, RayLength, groundLayers, QueryTriggerInteraction.Ignore))
            {
                // Lying flat on the road, its length along the kart.
                Vector3 along = Vector3.ProjectOnPlane(transform.forward, hit.normal);
                Instantiate(markPrefab, hit.point + hit.normal * GroundOffset, Quaternion.LookRotation(-hit.normal, along));
            }
        }
    }
}
```

`Quaternion.LookRotation(-hit.normal, along)` turns the strip, a **Quad**, to lie flat on
the road (its face looks into the road) with its length along the kart.

3. The **Skid Mark** prefab: **3D Object → Quad**, `Skid Mark`, without its collider,
   Scale `(0.22, 0.55, 1)`, a new material `Skid Mark` (shader **Universal Render
   Pipeline/Unlit**, **Transparent**, colour `2A2420` at alpha 140), **Cast Shadows** off,
   **Receive Shadows** off, and **SkidMark**. Into `Prefabs`.
4. Open `Prefabs/Kart`, add **SkidMarks**: **Mark Prefab** `Skid Mark`, **Rear Wheels**
   `Wheel RL` and `Wheel RR`, **Ground Layers** `Track`.
5. Press Play, open the Hierarchy, and drift through a few corners. Watch the list:
   `Skid Mark(Clone)` after `Skid Mark(Clone)`, hundreds of them, appearing and
   vanishing. Every one was made, and every one destroyed.

### Do it — pooled

6. The next four scripts change together: the pool hands out strips, a strip goes back to
   its pool, the kart asks the pool, and the Race Manager hands the pool to each kart. The
   Console is red until all four are saved. In `Scripts/Karts`, `SkidMarkPool.cs`:

<!-- check: together -->

```csharp:SkidMarkPool.cs
using System.Collections.Generic;
using UnityEngine;

// Skid marks, pooled. Four karts drifting leave hundreds of strips a lap:
// making and destroying each one makes garbage for the garbage collector to
// clear up. The pool makes a strip only when it has none asleep, and reuses
// it after it fades. The sleeping strips wait on a Stack: Leave pops one off
// the top, and Release pushes it back.
public class SkidMarkPool : MonoBehaviour
{
    [SerializeField] SkidMark markPrefab;

    readonly Stack<SkidMark> sleeping = new Stack<SkidMark>();

    public void Leave(Vector3 position, Quaternion rotation)
    {
        SkidMark mark;
        if (sleeping.Count > 0)
        {
            mark = sleeping.Pop();
        }
        else
        {
            mark = Instantiate(markPrefab, transform);
        }
        mark.gameObject.SetActive(true);
        mark.Place(this, position, rotation);
    }

    public void Release(SkidMark mark)
    {
        mark.gameObject.SetActive(false);
        sleeping.Push(mark);
    }
}
```

7. A strip goes back to its pool instead of being destroyed. Replace `SkidMark.cs`:

```csharp:SkidMark.cs
using UnityEngine;

// One skid mark: a dark strip on the road that fades away over a few
// seconds, then goes back to its pool to be used again.
public class SkidMark : MonoBehaviour
{
    [SerializeField] float fadeTime = 4f;   // seconds

    Material look;
    Color colour;
    float age;
    SkidMarkPool pool;

    void Awake()
    {
        look = GetComponent<Renderer>().material;   // its own copy, made once: the pool keeps it
        colour = look.color;
    }

    public void Place(SkidMarkPool owner, Vector3 position, Quaternion rotation)
    {
        pool = owner;
        transform.SetPositionAndRotation(position, rotation);
        age = 0f;
        look.color = colour;
    }

    void Update()
    {
        age += Time.deltaTime;
        Color faded = colour;
        faded.a = colour.a * (1f - age / fadeTime);
        look.color = faded;
        if (age >= fadeTime)
        {
            pool.Release(this);
        }
    }
}
```

8. And the kart asks the pool. Replace `SkidMarks.cs`:

```csharp:SkidMarks.cs
using UnityEngine;

// Leaves skid marks while the kart drifts: every tenth of a second, a short
// dark strip on the ground under each rear wheel. The strips come from the
// track's Skid Mark Pool, which the Race Manager hands over when the kart is
// placed on the grid.
[RequireComponent(typeof(KartController))]
public class SkidMarks : MonoBehaviour
{
    const float GroundOffset = 0.02f;   // metres above the road, so a strip doesn't flicker into it
    const float RayLength = 1.2f;

    [SerializeField] Transform[] rearWheels;
    [SerializeField] float interval = 0.1f;     // seconds between strips
    [SerializeField] LayerMask groundLayers;

    KartController kart;
    float timeToNext;

    public SkidMarkPool Pool { get; set; }

    void Awake()
    {
        kart = GetComponent<KartController>();
    }

    void Update()
    {
        if (Pool == null || !kart.IsDrifting || !kart.IsGrounded)
        {
            return;
        }
        timeToNext -= Time.deltaTime;
        if (timeToNext > 0f)
        {
            return;
        }
        timeToNext = interval;
        foreach (Transform wheel in rearWheels)
        {
            RaycastHit hit;
            if (Physics.Raycast(wheel.position, -transform.up, out hit, RayLength, groundLayers, QueryTriggerInteraction.Ignore))
            {
                // Lying flat on the road, its length along the kart.
                Vector3 along = Vector3.ProjectOnPlane(transform.forward, hit.normal);
                Pool.Leave(hit.point + hit.normal * GroundOffset, Quaternion.LookRotation(-hit.normal, along));
            }
        }
    }
}
```

9. The pool belongs to the track scene, and the karts are spawned, so the Race Manager
   hands it to each kart. Replace `RaceManager.cs`, finished:

```csharp:RaceManager.cs
using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;

public enum RaceState { Countdown, Racing, Finishing, Over }

// The race, as a state machine: Countdown, Racing, Finishing (you're home, and
// the others have 15 seconds to finish too), Over. It puts the karts on the
// grid from RaceSetup (your kart, and three rivals in a Race, or the ghost in
// Time Trial), plugs a driver into each when the lights go green, and keeps
// the standings: a List of IRacer, sorted four times a second. When the race
// is over it leaves a RaceResult in RaceSetup for the Results scene, and
// raises onRaceOver, which the Scene Fader is wired to.
public class RaceManager : MonoBehaviour
{
    const float SortInterval = 0.25f;       // seconds between sorting the standings
    const float FinishingTime = 15f;        // seconds the others get once you've finished
    const float ResultsDelay = 3f;          // seconds of the finished race before the results
    const float FinishedAhead = 100000f;    // see RaceOrder
    const int CountdownFrom = 3;

    [Header("When this scene is started on its own")]
    [SerializeField] TrackInfo testTrack;
    [SerializeField] KartStats testKart;
    [SerializeField] RaceMode testMode = RaceMode.Race;

    [Header("The race")]
    [SerializeField] Racer[] kartPrefabs;           // the three kart variants: each one's stats say which it is
    [SerializeField] RivalProfile[] rivals;
    [SerializeField] float[] rivalLanes = { -1f, 1f, 0f };  // metres either side of the racing line
    [SerializeField] LayerMask kartLayers;

    [Header("The track")]
    [SerializeField] StartGrid startGrid;
    [SerializeField] Checkpoint[] checkpoints;      // the finish line first, then in order round the track
    [SerializeField] RacingLine racingLine;
    [SerializeField] SkidMarkPool skidMarkPool;

    [Header("The Race Kit")]
    [SerializeField] PlayerDriver playerDriver;
    [SerializeField] ChaseCamera chaseCamera;
    [SerializeField] GhostRecorder ghostRecorder;
    [SerializeField] GhostRunner ghostPrefab;
    [SerializeField] UnityEvent onRaceOver;

    readonly List<IRacer> standings = new List<IRacer>();
    readonly List<Racer> karts = new List<Racer>();
    readonly Dictionary<Racer, RivalProfile> rivalOf = new Dictionary<Racer, RivalProfile>();
    float timeToSort;
    float finishingTimeLeft;
    float ghostLapAtStart;      // Time Trial: the lap the ghost showed when the race began

    public RaceState State { get; private set; }
    public RaceMode Mode { get; private set; }
    public TrackInfo Track { get; private set; }
    public float RaceTime { get; private set; }
    public int Laps { get { return Track.Laps; } }
    public int CheckpointCount { get { return checkpoints.Length; } }
    public bool IsRacing { get { return State == RaceState.Racing || State == RaceState.Finishing; } }
    public Racer Player { get; private set; }
    public GhostRunner Ghost { get; private set; }
    public IReadOnlyList<IRacer> Standings { get { return standings; } }

    public event Action<int> CountdownTicked;       // 3, 2, 1, then 0 for GO
    public event Action RaceStarted;
    public event Action RaceOver;

    void Awake()
    {
        // From the Garage, RaceSetup says what to race. Started on its own,
        // this scene has no Garage before it, so it uses the test fields.
        if (RaceSetup.Track == null)
        {
            Debug.LogWarning($"No race was set up (was this scene started on its own?): racing the Test Track, {testTrack.DisplayName}.", this);
            RaceSetup.Track = testTrack;
            RaceSetup.Kart = testKart;
            RaceSetup.Mode = testMode;
        }
        Track = RaceSetup.Track;
        Mode = RaceSetup.Mode;
    }

    void Start()
    {
        PlaceKarts();
        StartCoroutine(Countdown());
    }

    void OnDisable()
    {
        if (Player != null)
        {
            Player.LapCompleted -= OnPlayerLapCompleted;
        }
        ghostRecorder.NewBest -= OnNewBestLap;
    }

    void Update()
    {
        if (!IsRacing)
        {
            return;
        }
        RaceTime += Time.deltaTime;

        timeToSort -= Time.deltaTime;
        if (timeToSort <= 0f)
        {
            timeToSort = SortInterval;
            SortStandings();
        }

        if (State == RaceState.Finishing)
        {
            finishingTimeLeft -= Time.deltaTime;
            if (finishingTimeLeft <= 0f || EveryKartHasFinished())
            {
                EnterState(RaceState.Over);
            }
        }
    }

    void EnterState(RaceState state)
    {
        State = state;
        switch (state)
        {
            case RaceState.Racing:
                PlugInDrivers();
                RaceStarted?.Invoke();
                if (Ghost != null)
                {
                    Ghost.StartLap(1);
                }
                break;
            case RaceState.Finishing:
                finishingTimeLeft = FinishingTime;
                break;
            case RaceState.Over:
                SortStandings();
                RaceSetup.Result = MakeResult();
                RaceOver?.Invoke();
                StartCoroutine(ShowResults());
                break;
        }
    }

    // A racer has crossed the line for the last time. Racer calls this.
    public void ReportFinish(Racer racer)
    {
        if (racer != Player)
        {
            return;
        }
        // You're home. The computer drives your kart from here; in Time Trial, that's the end.
        DriveByComputer(racer, null, 0f);
        if (Mode == RaceMode.TimeTrial || EveryKartHasFinished())
        {
            EnterState(RaceState.Over);
        }
        else
        {
            EnterState(RaceState.Finishing);
        }
    }

    // ------------------------------------------------------------------ the start

    void PlaceKarts()
    {
        GhostData savedGhost = SaveSystem.LoadGhost(Track.Id);     // null if this track has none yet
        int playerSlot = Mode == RaceMode.Race ? rivals.Length : 0;     // at the back of a race
        Player = SpawnKart(PrefabFor(RaceSetup.Kart), startGrid.Slot(playerSlot), "You", true);

        if (Mode == RaceMode.Race)
        {
            for (int i = 0; i < rivals.Length; i++)
            {
                Racer rival = SpawnKart(rivals[i].KartPrefab, startGrid.Slot(i), rivals[i].DisplayName, false);
                rival.GetComponent<KartPaint>().Paint(rivals[i].Colour);
                rivalOf[rival] = rivals[i];
            }
        }
        else
        {
            Ghost = Instantiate(ghostPrefab);
            Ghost.Setup(checkpoints);
            Ghost.Show(savedGhost);
            ghostLapAtStart = Ghost.LapTime;
            standings.Add(Ghost);
        }

        chaseCamera.Follow(Player.Kart);
        ghostRecorder.Record(Player, this, savedGhost);
        ghostRecorder.NewBest += OnNewBestLap;
        Player.LapCompleted += OnPlayerLapCompleted;    // after the recorder, so a new best is ready for the next lap
    }

    Racer SpawnKart(Racer prefab, Transform slot, string racerName, bool isPlayer)
    {
        Racer racer = Instantiate(prefab, slot.position, slot.rotation);
        racer.name = racerName;
        racer.Setup(racerName, isPlayer, this, checkpoints);
        racer.GetComponent<SkidMarks>().Pool = skidMarkPool;
        karts.Add(racer);
        standings.Add(racer);
        return racer;
    }

    // The kart variant whose stats are the kart chosen in the Garage.
    Racer PrefabFor(KartStats stats)
    {
        foreach (Racer prefab in kartPrefabs)
        {
            if (prefab.GetComponent<KartController>().Stats == stats)
            {
                return prefab;
            }
        }
        Debug.LogWarning($"No kart prefab uses {stats.name}: racing the first one.", this);
        return kartPrefabs[0];
    }

    IEnumerator Countdown()
    {
        State = RaceState.Countdown;
        yield return new WaitForSeconds(1f);
        for (int count = CountdownFrom; count > 0; count--)
        {
            CountdownTicked?.Invoke(count);
            yield return new WaitForSeconds(1f);
        }
        CountdownTicked?.Invoke(0);
        EnterState(RaceState.Racing);
    }

    // The player's kart gets the Player Driver, and each rival's the computer.
    void PlugInDrivers()
    {
        playerDriver.Drive(Player);
        foreach (KeyValuePair<Racer, RivalProfile> pair in rivalOf)
        {
            int lane = karts.IndexOf(pair.Key) % rivalLanes.Length;
            DriveByComputer(pair.Key, pair.Value, rivalLanes[lane]);
        }
    }

    void DriveByComputer(Racer racer, RivalProfile profile, float lane)
    {
        float skill = profile != null ? profile.Skill + Track.RivalSkillBonus : 1f;
        AIDriver driver = racer.gameObject.AddComponent<AIDriver>();
        driver.Setup(racingLine, Mathf.Clamp01(skill), lane, kartLayers);
        racer.Kart.Driver = driver;
    }

    // ------------------------------------------------------------------ the ghost

    void OnPlayerLapCompleted(int lap, float time)
    {
        if (Ghost != null && !Player.HasFinished)
        {
            Ghost.StartLap(lap + 1);
        }
    }

    void OnNewBestLap(GhostData bestLap)
    {
        if (Ghost != null)
        {
            Ghost.Show(bestLap);
        }
    }

    // ------------------------------------------------------------------ the standings

    // Sort takes a way to compare two racers. The lambda says: whichever has
    // the bigger RaceOrder comes first.
    void SortStandings()
    {
        standings.Sort((a, b) => RaceOrder(b).CompareTo(RaceOrder(a)));
    }

    // One number for each racer, bigger for further ahead. A racer who has
    // finished is ahead of everyone still racing, and an earlier finish is
    // ahead of a later one.
    static float RaceOrder(IRacer racer)
    {
        if (racer.HasFinished)
        {
            return FinishedAhead - racer.FinishTime;
        }
        return racer.Progress;
    }

    bool EveryKartHasFinished()
    {
        foreach (Racer kart in karts)
        {
            if (!kart.HasFinished)
            {
                return false;
            }
        }
        return true;
    }

    // ------------------------------------------------------------------ the end

    RaceResult MakeResult()
    {
        RaceResult result = new RaceResult(Mode, Track);
        int place = 1;
        foreach (IRacer racer in standings)
        {
            if (racer is Racer kart)
            {
                result.AddRow(new ResultRow(place, kart.RacerName, kart.HasFinished, kart.FinishTime, kart.BestLap, kart.IsPlayer));
                place++;
            }
        }
        foreach (float lap in Player.LapTimes)
        {
            result.AddPlayerLap(lap);
        }
        result.GhostLap = ghostLapAtStart;
        return result;
    }

    IEnumerator ShowResults()
    {
        yield return new WaitForSeconds(ResultsDelay);
        onRaceOver.Invoke();
    }
}
```

<!-- check: end -->

10. In `Prefabs/Race Kit`, an empty `Skid Mark Pool` with **SkidMarkPool** (**Mark
    Prefab** `Skid Mark`), dragged into the Race Manager's **Skid Mark Pool**.
11. Drift again, and watch `Skid Mark Pool` in the Hierarchy: its strips grow to a few
    dozen, then stop growing. The same strips, used again and again.

### Do it — wheels and the camera

12. In `Scripts/Karts`, `WheelSpin.cs`:

```csharp:WheelSpin.cs
using UnityEngine;

// Turns the kart's wheels: all four roll with the speed, and the front two
// steer. Each wheel is a Wheel prefab whose pivot is at its hub, so it spins
// about its own middle. The model's wheels have their pivot at the kart's
// middle, which is why the Wheel prefab exists.
[RequireComponent(typeof(KartController))]
public class WheelSpin : MonoBehaviour
{
    const float MostSteerAngle = 25f;   // degrees, at full steer

    [SerializeField] Transform[] steeringWheels;    // the front Wheels: they turn left and right
    [SerializeField] Transform[] tyres;             // each Wheel's Tyre: it rolls
    [SerializeField] float wheelRadius = 0.17f;     // metres

    KartController kart;
    float rollAngle;

    void Awake()
    {
        kart = GetComponent<KartController>();
    }

    void Update()
    {
        // The distance moved this frame, as a share of the wheel's rim, in degrees.
        float rim = 2f * Mathf.PI * wheelRadius;
        rollAngle = (rollAngle + kart.Speed * Time.deltaTime / rim * 360f) % 360f;
        foreach (Transform tyre in tyres)
        {
            tyre.localRotation = Quaternion.Euler(rollAngle, 0f, 0f);
        }

        float steer = kart.Driver != null ? kart.Driver.Steer : 0f;
        foreach (Transform wheel in steeringWheels)
        {
            wheel.localRotation = Quaternion.Euler(0f, steer * MostSteerAngle, 0f);
        }
    }
}
```

13. On `Prefabs/Kart`, add **WheelSpin**: **Steering Wheels** `Wheel FL` and `Wheel FR`,
    **Tyres** the four Wheels' `Tyre` children, **Wheel Radius** `0.225`. Chapter 3's
    pivots pay off: each tyre turns about its own hub.
14. The camera pulls back while boosting. Replace `ChaseCamera.cs`, finished:

```csharp:ChaseCamera.cs
using UnityEngine;

// Follows the player's kart from behind and above. It glides after the kart
// with Vector3.SmoothDamp rather than sitting fixed to it, and stays level, so
// a kart tipping on a bank doesn't tip the view. While the kart boosts, the
// view widens, which makes the speed feel faster.
[RequireComponent(typeof(Camera))]
public class ChaseCamera : MonoBehaviour
{
    [SerializeField] float distance = 5f;           // metres behind the kart
    [SerializeField] float height = 2.1f;           // metres above it
    [SerializeField] float lookAhead = 3f;          // metres in front of the kart, where it looks
    [SerializeField] float lookHeight = 0.8f;
    [SerializeField] float followTime = 0.12f;      // seconds: how long it takes to catch up
    [SerializeField] float normalView = 60f;        // degrees, top to bottom
    [SerializeField] float boostView = 72f;
    [SerializeField] float viewChange = 40f;        // degrees a second

    Camera view;
    KartController target;
    Vector3 velocity;

    void Awake()
    {
        view = GetComponent<Camera>();
    }

    public void Follow(KartController kart)
    {
        target = kart;
        transform.position = WantedPosition();      // start in place, not flying in from somewhere
        transform.LookAt(LookPoint());
    }

    void LateUpdate()
    {
        if (target == null)
        {
            return;
        }
        transform.position = Vector3.SmoothDamp(transform.position, WantedPosition(), ref velocity, followTime);
        transform.LookAt(LookPoint());
        float wantedView = target.IsBoosting ? boostView : normalView;
        view.fieldOfView = Mathf.MoveTowards(view.fieldOfView, wantedView, viewChange * Time.deltaTime);
    }

    Vector3 WantedPosition()
    {
        return target.transform.position - LevelForward() * distance + Vector3.up * height;
    }

    Vector3 LookPoint()
    {
        return target.transform.position + LevelForward() * lookAhead + Vector3.up * lookHeight;
    }

    // The kart's forward, flattened: up and down hills, the camera stays level.
    Vector3 LevelForward()
    {
        Vector3 forward = target.transform.forward;
        forward.y = 0f;
        return forward.sqrMagnitude > 0.001f ? forward.normalized : Vector3.forward;
    }
}
```

### Do it — particles

15. In `Scripts/Karts`, `KartEffects.cs`:

```csharp:KartEffects.cs
using UnityEngine;

// The kart's particles: dust from the rear wheels while it drifts, flames
// while it boosts, and sparks where it hits something hard. The dust and the
// flames keep playing, and are turned on and off by their emission, so the
// last puffs fade out instead of vanishing.
[RequireComponent(typeof(KartController))]
public class KartEffects : MonoBehaviour
{
    [SerializeField] ParticleSystem[] dust;     // one behind each rear wheel
    [SerializeField] ParticleSystem flames;
    [SerializeField] ParticleSystem sparks;
    [SerializeField] float hardBump = 4f;       // metres a second: a bump this hard throws sparks

    KartController kart;
    Rigidbody body;

    void Awake()
    {
        kart = GetComponent<KartController>();
        body = GetComponent<Rigidbody>();
    }

    void Update()
    {
        bool isSkidding = kart.IsDrifting && kart.IsGrounded;
        foreach (ParticleSystem puff in dust)
        {
            SetEmitting(puff, isSkidding);
        }
        SetEmitting(flames, kart.IsBoosting);
    }

    // The impulse is the push the bump gave. Divided by the kart's mass, it's
    // how much the bump changed the kart's speed.
    void OnCollisionEnter(Collision collision)
    {
        float bump = collision.impulse.magnitude / body.mass;
        if (bump > hardBump && collision.contactCount > 0)
        {
            sparks.transform.position = collision.GetContact(0).point;
            sparks.Play();
        }
    }

    static void SetEmitting(ParticleSystem system, bool isOn)
    {
        ParticleSystem.EmissionModule emission = system.emission;
        emission.enabled = isOn;
    }
}
```

`collision.impulse` is the push the bump gave the kart; divided by its mass, it's how
much the bump changed its speed. Only a hard bump throws sparks.

16. Three **Particle System**s inside `Prefabs/Kart` (**Effects → Particle System**), all
    with a new material `Particle` (shader **Universal Render Pipeline/Particles/Unlit**,
    **Transparent**, white):

| System | Where | Main | Emission | Shape |
| --- | --- | --- | --- | --- |
| `Dust L`, `Dust R` | behind each rear wheel, Y −0.15, Rotation (−20, 180, 0) | Lifetime 0.7; Speed 0.5–1.5; Size 0.35–0.7; colour `C9B79A`; **World** space | 35 a second, **off** | Cone, angle 25 |
| `Flames` | behind the kart, (0, 0.3, −0.85), Rotation (0, 180, 0) | Lifetime 0.18; Speed 3–5; Size 0.2–0.35; colour `FFD24A`; Local space | 70 a second, **off** | Cone, angle 10 |
| `Sparks` | in front, (0, 0.3, 0.9) | not Looping, not **Play On Awake**; Duration 0.3; Lifetime 0.2–0.4; Speed 3–7; Size 0.05–0.12; `FFE07A`; Gravity 1; World space | 0 a second; one **Burst** of 24 | Sphere |

(A range like `0.5–1.5` is **Random Between Two Constants**, from the small arrow
beside the value.) Tick **Colour over Lifetime** on each, fading to nothing. Add
**KartEffects**: the two dusts, the flames, the sparks.

### Test it

- Drift: dark strips behind you, a puff of dust from each rear wheel. Fill the meter
  and boost: flames, and the view widens; it narrows again after.
- Drive into a bank fast: sparks.
- Watch the wheels from the side in the Scene view while playing: they roll, and the
  front ones turn with the steering.

### Commit

*Add skid marks (pooled), particles, wheels and the boost view.* Push.

### Challenge

The pool never shrinks: after a drifting festival it keeps every strip it ever made.
Should it? Add a limit, `MaxSleeping`: when a strip is released and the stack already
holds that many, destroy it instead of pushing it. What's a good number, and how would
you find out?

## Chapter 17 — Sound and the Audio Mixer

**Goal:** a game you can hear, and a mixer that runs it. Every kart's engine rising with
its speed (the rivals' loud as they pass and fading away), skids, boosts, bumps and
crashes; the countdown's beeps; music in every scene; four volume sliders in Settings,
kept between sessions. When you pause, the sound goes muffled; under the countdown, the
music ducks.

### Idea — groups, exposed volumes, snapshots

An **Audio Mixer** is an asset that every sound passes through on its way to the
speakers. Its sounds are sorted into **groups**, and each **Audio Source** says which
group it plays into (its **Output**):

```
Master ── Music ────── the menu and race music
       ├─ Effects ──── skids, boosts, bumps, the results' jingle
       │   └─ Countdown ── the beeps (a group of its own, for the ducking)
       └─ Engines ──── every kart's engine
```

**Volumes.** Each group has a volume. To set one from a script, **expose** it: it gets a
name, and `mixer.SetFloat("MusicVolume", decibels)` sets it. Mixers count in
**decibels**: 0 dB is full volume, about −6 dB is half as loud, −80 dB is silence. A
slider goes from 0 to 1, so it goes through `Mathf.Log10(value) * 20` first: 1 is 0 dB,
0.5 is −6 dB, 0.1 is −20 dB.

**Snapshots.** A snapshot is a saved setting of the whole mixer. **Racing** is normal;
**Paused** lowers the engines and closes a **Lowpass** filter on Master, so everything
sounds muffled, as through a wall. `snapshot.TransitionTo(0.2f)` glides from one to the
other in a fifth of a second.

**Ducking.** A **Duck Volume** effect on Music lowers the music while something else is
loud. That something is the Countdown group: a **Send** on it feeds the Duck Volume. The
beeps cut through, and the music comes back after GO.

> **Note:** on the Web, Unity's manual (*Audio in Web*) says: "Volume is the only property
> you can change on Web. Other properties and sound effects aren't supported." So in a
> WebGL build the groups and the sliders work, but the pause's muffle and the ducking are
> only heard in the PC build. Chapter 21 shows it.

### Do it — the mixer

1. **Window → Audio → Audio Mixer**, and **+** to make a mixer: `Pocket Karts Mixer`, in
   `Assets/Audio`. Select it in the Project window and set its **Update Mode** to
   **Unscaled Time**: while the game is paused, time stands still, and a snapshot
   transition would never finish.
2. **Groups.** In the Audio Mixer window, under **Groups**, select `Master` and **+**
   three times: `Music`, `Effects`, `Engines`. Then select `Effects` and **+**:
   `Countdown`, inside it.
3. **Expose the volumes.** Select `Master`; in the Inspector, right-click **Volume** →
   **Expose 'Volume (of Master)' to script**. The same for `Music`, `Effects` and
   `Engines`. Then, at the top right of the Audio Mixer window, **Exposed Parameters**:
   rename them `MasterVolume`, `MusicVolume`, `EffectsVolume` and `EnginesVolume`.
4. **Snapshots.** Under **Snapshots**, rename `Snapshot` to `Racing`, and **+** to make
   `Paused`. With `Paused` selected: `Engines` **Volume** `-20` dB. Select `Master`,
   **Add Effect → Lowpass Simple**; with `Racing` selected its **Cutoff freq** is `22000`
   Hz (everything through), and with `Paused` selected, `900` Hz (muffled). The snapshot
   that's selected when you change a value is the one that keeps it. Select `Racing`
   again when you're done.
5. **Ducking.** On `Music`, **Add Effect → Duck Volume**: **Threshold** `-30`, **Ratio**
   `400`. On `Countdown`, **Add Effect → Send**: **Receive** `Music\Duck Volume`, **Send
   Level** `0` dB.

### Do it — the scripts

6. `GameSettings` keeps the four volumes. Replace `GameSettings.cs`, finished:

```csharp:GameSettings.cs
using UnityEngine;
using UnityEngine.InputSystem;

// The player's settings, kept in PlayerPrefs: small values, one key each. The
// keys are constants, so a typo is a compile error, not a setting that quietly
// never loads. They start with the game's name because every game in one Unity
// project shares the same PlayerPrefs.
public static class GameSettings
{
    const string MasterVolumeKey = "PocketKarts.MasterVolume";
    const string MusicVolumeKey = "PocketKarts.MusicVolume";
    const string EffectsVolumeKey = "PocketKarts.EffectsVolume";
    const string EnginesVolumeKey = "PocketKarts.EnginesVolume";
    const string UseMphKey = "PocketKarts.UseMph";
    const string BindingsKey = "PocketKarts.Bindings";
    const float DefaultVolume = 0.8f;
    const float DefaultMusicVolume = 0.6f;

    public static float MasterVolume
    {
        get { return PlayerPrefs.GetFloat(MasterVolumeKey, DefaultVolume); }
        set { PlayerPrefs.SetFloat(MasterVolumeKey, value); }
    }

    public static float MusicVolume
    {
        get { return PlayerPrefs.GetFloat(MusicVolumeKey, DefaultMusicVolume); }
        set { PlayerPrefs.SetFloat(MusicVolumeKey, value); }
    }

    public static float EffectsVolume
    {
        get { return PlayerPrefs.GetFloat(EffectsVolumeKey, DefaultVolume); }
        set { PlayerPrefs.SetFloat(EffectsVolumeKey, value); }
    }

    public static float EnginesVolume
    {
        get { return PlayerPrefs.GetFloat(EnginesVolumeKey, DefaultVolume); }
        set { PlayerPrefs.SetFloat(EnginesVolumeKey, value); }
    }

    // PlayerPrefs has no bool, so it's an int: 1 for on, 0 for off.
    public static bool UseMph
    {
        get { return PlayerPrefs.GetInt(UseMphKey, 0) == 1; }
        set { PlayerPrefs.SetInt(UseMphKey, value ? 1 : 0); }
    }

    // Writes the settings to disk now, rather than when the game quits.
    public static void Save()
    {
        PlayerPrefs.Save();
    }

    // Every key the player has changed, as one line of JSON.
    public static void SaveBindings(InputActionAsset actions)
    {
        PlayerPrefs.SetString(BindingsKey, actions.SaveBindingOverridesAsJson());
        PlayerPrefs.Save();
    }

    public static void LoadBindings(InputActionAsset actions)
    {
        string json = PlayerPrefs.GetString(BindingsKey, "");
        if (json != "")
        {
            actions.LoadBindingOverridesFromJson(json);
        }
    }

    public static void ResetBindings(InputActionAsset actions)
    {
        actions.RemoveAllBindingOverrides();
        PlayerPrefs.DeleteKey(BindingsKey);
        PlayerPrefs.Save();
    }
}
```

7. In `Scripts/Audio`, `VolumeSettings.cs`:

```csharp:VolumeSettings.cs
using UnityEngine;
using UnityEngine.Audio;

// Sets the Audio Mixer's four volumes from the settings. Each is an exposed
// parameter of the mixer, set with SetFloat by its name. The mixer counts in
// decibels, not 0 to 1: full volume is 0 dB, half as loud is about -6 dB, and
// silence is -80 dB, so a slider's value goes through Log10 first.
// Every scene has one; the Settings Panel calls it when a slider moves.
public class VolumeSettings : MonoBehaviour
{
    public const string MasterVolume = "MasterVolume";
    public const string MusicVolume = "MusicVolume";
    public const string EffectsVolume = "EffectsVolume";
    public const string EnginesVolume = "EnginesVolume";
    const float Silence = -80f;         // decibels: the mixer's quietest
    const float Quietest = 0.0001f;     // a slider this low, or lower, is silence

    [SerializeField] AudioMixer mixer;

    // In Start, not Awake: a mixer ignores SetFloat until then.
    void Start()
    {
        Set(MasterVolume, GameSettings.MasterVolume);
        Set(MusicVolume, GameSettings.MusicVolume);
        Set(EffectsVolume, GameSettings.EffectsVolume);
        Set(EnginesVolume, GameSettings.EnginesVolume);
    }

    public void Set(string parameter, float volume)
    {
        mixer.SetFloat(parameter, ToDecibels(volume));
    }

    public static float ToDecibels(float volume)
    {
        if (volume <= Quietest)
        {
            return Silence;
        }
        return Mathf.Log10(volume) * 20f;
    }
}
```

The four names are `public const`: the Settings Panel uses them too, so a typo is a
compile error, not a slider that silently does nothing.

8. And the Settings Panel gets four sliders. Replace `SettingsPanel.cs`, finished:

```csharp:SettingsPanel.cs
using UnityEngine;
using UnityEngine.InputSystem;
using UnityEngine.UI;

// The Settings Panel, one prefab used in the Menu and in the pause menu: the
// four volumes, km/h or mph, the keys, and Delete Save. Settings go into
// PlayerPrefs through GameSettings, and are written to disk when the panel
// closes. The volumes go straight to the mixer, so you hear the change.
public class SettingsPanel : MonoBehaviour
{
    [SerializeField] Slider masterSlider;
    [SerializeField] Slider musicSlider;
    [SerializeField] Slider effectsSlider;
    [SerializeField] Slider enginesSlider;
    [SerializeField] Toggle mphToggle;
    [SerializeField] VolumeSettings volumes;        // this scene's
    [SerializeField] InputActionAsset actions;
    [SerializeField] RebindRow[] rebindRows;
    [SerializeField] GameObject confirmDelete;

    void OnEnable()
    {
        GameSettings.LoadBindings(actions);
        masterSlider.SetValueWithoutNotify(GameSettings.MasterVolume);
        musicSlider.SetValueWithoutNotify(GameSettings.MusicVolume);
        effectsSlider.SetValueWithoutNotify(GameSettings.EffectsVolume);
        enginesSlider.SetValueWithoutNotify(GameSettings.EnginesVolume);
        mphToggle.SetIsOnWithoutNotify(GameSettings.UseMph);
        masterSlider.onValueChanged.AddListener(OnMasterChanged);
        musicSlider.onValueChanged.AddListener(OnMusicChanged);
        effectsSlider.onValueChanged.AddListener(OnEffectsChanged);
        enginesSlider.onValueChanged.AddListener(OnEnginesChanged);
        mphToggle.onValueChanged.AddListener(OnMphChanged);
        confirmDelete.SetActive(false);
        RefreshKeys();
    }

    void OnDisable()
    {
        masterSlider.onValueChanged.RemoveListener(OnMasterChanged);
        musicSlider.onValueChanged.RemoveListener(OnMusicChanged);
        effectsSlider.onValueChanged.RemoveListener(OnEffectsChanged);
        enginesSlider.onValueChanged.RemoveListener(OnEnginesChanged);
        mphToggle.onValueChanged.RemoveListener(OnMphChanged);
        GameSettings.Save();
    }

    // The Reset Controls button.
    public void ResetControls()
    {
        GameSettings.ResetBindings(actions);
        RefreshKeys();
    }

    // Delete Save asks first; the confirm panel's Delete button calls DeleteSave.
    public void AskToDeleteSave()
    {
        confirmDelete.SetActive(true);
    }

    public void DeleteSave()
    {
        SaveSystem.DeleteAll();
        confirmDelete.SetActive(false);
    }

    void OnMasterChanged(float value)
    {
        GameSettings.MasterVolume = value;
        volumes.Set(VolumeSettings.MasterVolume, value);
    }

    void OnMusicChanged(float value)
    {
        GameSettings.MusicVolume = value;
        volumes.Set(VolumeSettings.MusicVolume, value);
    }

    void OnEffectsChanged(float value)
    {
        GameSettings.EffectsVolume = value;
        volumes.Set(VolumeSettings.EffectsVolume, value);
    }

    void OnEnginesChanged(float value)
    {
        GameSettings.EnginesVolume = value;
        volumes.Set(VolumeSettings.EnginesVolume, value);
    }

    void OnMphChanged(bool isOn)
    {
        GameSettings.UseMph = isOn;
    }

    void RefreshKeys()
    {
        foreach (RebindRow row in rebindRows)
        {
            row.Refresh();
        }
    }
}
```

9. In `Scripts/Audio`, `MusicPlayer.cs`:

```csharp:MusicPlayer.cs
using UnityEngine;

// Plays this scene's music, looping. In a track scene it waits for the green
// light; in the menus there's no race, and it starts at once. Its Audio
// Source's output is the mixer's Music group, so the Music slider sets it.
[RequireComponent(typeof(AudioSource))]
public class MusicPlayer : MonoBehaviour
{
    [SerializeField] RaceManager race;      // empty in the menus

    AudioSource source;

    void Awake()
    {
        source = GetComponent<AudioSource>();
        source.loop = true;
    }

    void OnEnable()
    {
        if (race != null)
        {
            race.RaceStarted += OnRaceStarted;
        }
    }

    void OnDisable()
    {
        if (race != null)
        {
            race.RaceStarted -= OnRaceStarted;
        }
    }

    void Start()
    {
        if (race == null)
        {
            source.Play();
        }
    }

    void OnRaceStarted()
    {
        source.Play();
    }
}
```

10. `EngineSound.cs`:

```csharp:EngineSound.cs
using UnityEngine;

// The kart's engine: one short sample, looping, its pitch and volume rising
// with the speed. Every kart has one, a 3D sound (Spatial Blend 1, with a
// rolloff), so a rival is loud as it passes you and fades as it pulls away.
// Its Audio Source's output is the mixer's Engines group.
[RequireComponent(typeof(AudioSource))]
public class EngineSound : MonoBehaviour
{
    [SerializeField] KartController kart;
    [SerializeField] float idlePitch = 0.7f;
    [SerializeField] float topPitch = 1.8f;
    [SerializeField] float idleVolume = 0.4f;
    [SerializeField] float topVolume = 1f;

    AudioSource engine;

    void Awake()
    {
        engine = GetComponent<AudioSource>();
    }

    void Update()
    {
        float share = Mathf.Clamp01(Mathf.Abs(kart.Speed) / kart.Stats.TopSpeed);
        engine.pitch = Mathf.Lerp(idlePitch, topPitch, share);
        engine.volume = Mathf.Lerp(idleVolume, topVolume, share);
    }
}
```

11. `KartSounds.cs`:

```csharp:KartSounds.cs
using UnityEngine;

// The kart's other sounds: tyres skidding while it drifts, a whoosh when it
// boosts, and a bump, or a crash, when it hits something.
[RequireComponent(typeof(KartController))]
public class KartSounds : MonoBehaviour
{
    [SerializeField] AudioSource skid;          // looping
    [SerializeField] AudioSource effects;       // for the one-shots
    [SerializeField] AudioClip boostClip;
    [SerializeField] AudioClip bumpClip;
    [SerializeField] AudioClip crashClip;
    [SerializeField] float softBump = 1.5f;     // metres a second of change in speed
    [SerializeField] float hardBump = 5f;

    KartController kart;
    Rigidbody body;

    void Awake()
    {
        kart = GetComponent<KartController>();
        body = GetComponent<Rigidbody>();
    }

    void OnEnable()
    {
        kart.Boosted += OnBoosted;
    }

    void OnDisable()
    {
        kart.Boosted -= OnBoosted;
    }

    void Update()
    {
        bool isSkidding = kart.IsDrifting && kart.IsGrounded;
        if (isSkidding && !skid.isPlaying)
        {
            skid.Play();
        }
        else if (!isSkidding && skid.isPlaying)
        {
            skid.Stop();
        }
    }

    void OnBoosted()
    {
        effects.PlayOneShot(boostClip);
    }

    void OnCollisionEnter(Collision collision)
    {
        float bump = collision.impulse.magnitude / body.mass;
        if (bump > hardBump)
        {
            effects.PlayOneShot(crashClip);
        }
        else if (bump > softBump)
        {
            effects.PlayOneShot(bumpClip);
        }
    }
}
```

`PlayOneShot` plays a clip on top of whatever the source is already playing: a bump
during a boost doesn't cut the boost off.

12. The countdown beeps. Replace `CountdownLights.cs`, finished:

```csharp:CountdownLights.cs
using System.Collections;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

// The start lights: red for 3 and 2, amber for 1, then green and GO!, with a
// beep for each. It listens to the Race Manager's countdown, and hides itself
// a second after the green light.
public class CountdownLights : MonoBehaviour
{
    [SerializeField] RaceManager race;
    [SerializeField] GameObject lights;
    [SerializeField] Image lamp;
    [SerializeField] TMP_Text countText;
    [SerializeField] Sprite redLight;
    [SerializeField] Sprite amberLight;
    [SerializeField] Sprite greenLight;
    [SerializeField] Color redColour = new Color(1f, 0.32f, 0.25f);
    [SerializeField] Color amberColour = new Color(1f, 0.76f, 0.2f);
    [SerializeField] Color greenColour = new Color(0.36f, 0.92f, 0.42f);
    [SerializeField] AudioSource speaker;
    [SerializeField] AudioClip beep;
    [SerializeField] AudioClip go;
    [SerializeField] float showGoFor = 1f;      // seconds

    void OnEnable()
    {
        race.CountdownTicked += OnCountdownTicked;
    }

    void OnDisable()
    {
        race.CountdownTicked -= OnCountdownTicked;
    }

    void Start()
    {
        lights.SetActive(false);
    }

    void OnCountdownTicked(int count)
    {
        lights.SetActive(true);
        if (count > 0)
        {
            lamp.sprite = count > 1 ? redLight : amberLight;
            lamp.color = count > 1 ? redColour : amberColour;
            countText.text = count.ToString();
            speaker.PlayOneShot(beep);
        }
        else
        {
            lamp.sprite = greenLight;
            lamp.color = greenColour;
            countText.text = "GO!";
            speaker.PlayOneShot(go);
            StartCoroutine(HideSoon());
        }
    }

    IEnumerator HideSoon()
    {
        yield return new WaitForSeconds(showGoFor);
        lights.SetActive(false);
    }
}
```

13. The pause muffles. Replace `PauseMenu.cs`, finished:

```csharp:PauseMenu.cs
using UnityEngine;
using UnityEngine.Audio;
using UnityEngine.InputSystem;
using UnityEngine.SceneManagement;

// Pauses the race: it stops time, shows the panel, swaps action maps (from
// Drive to Paused, so the kart can't be driven behind the menu) and moves the
// Audio Mixer to its Paused snapshot, where the music is muffled and the
// engines drop away. The panel's buttons call Resume and Restart; Quit to
// Menu calls the Scene Fader.
public class PauseMenu : MonoBehaviour
{
    [SerializeField] GameObject panel;
    [SerializeField] GameObject settingsPanel;
    [SerializeField] SceneFader fader;
    [SerializeField] InputActionReference pauseAction;      // in the Drive map
    [SerializeField] InputActionReference resumeAction;     // in the Paused map
    [SerializeField] AudioMixerSnapshot racingSnapshot;
    [SerializeField] AudioMixerSnapshot pausedSnapshot;
    [SerializeField] float snapshotTime = 0.2f;             // seconds to move between snapshots

    InputActionMap driveMap;
    InputActionMap pausedMap;

    void Awake()
    {
        driveMap = pauseAction.action.actionMap;
        pausedMap = resumeAction.action.actionMap;
    }

    void OnEnable()
    {
        pauseAction.action.performed += OnPausePressed;
        resumeAction.action.performed += OnResumePressed;
    }

    void OnDisable()
    {
        pauseAction.action.performed -= OnPausePressed;
        resumeAction.action.performed -= OnResumePressed;
        driveMap.Disable();
        pausedMap.Disable();
    }

    void Start()
    {
        GameSettings.LoadBindings(pauseAction.asset);
        panel.SetActive(false);
        racingSnapshot.TransitionTo(0f);
        driveMap.Enable();
    }

    // Also the touch controls' pause button.
    public void Pause()
    {
        Time.timeScale = 0f;
        panel.SetActive(true);
        driveMap.Disable();
        pausedMap.Enable();
        pausedSnapshot.TransitionTo(snapshotTime);
    }

    public void Resume()
    {
        Time.timeScale = 1f;
        panel.SetActive(false);
        settingsPanel.SetActive(false);
        pausedMap.Disable();
        driveMap.Enable();
        racingSnapshot.TransitionTo(snapshotTime);
    }

    // The race again, from the grid: this scene, loaded again.
    public void Restart()
    {
        fader.FadeTo(SceneManager.GetActiveScene().name);
    }

    void OnPausePressed(InputAction.CallbackContext context)
    {
        Pause();
    }

    void OnResumePressed(InputAction.CallbackContext context)
    {
        Resume();
    }
}
```

14. And a track opening plays a jingle. Replace `ResultsScreen.cs`, finished:

```csharp:ResultsScreen.cs
using UnityEngine;
using TMPro;

// The Results screen: your place in big type, the standings, and what's new:
// a best lap, a best race, a track opened. The records are saved here, so a
// race counts once you see its results. In Time Trial it shows your laps and
// the ghost's. Retry and Next track are buttons; Next track shows only when
// the next track is open. Menu calls the Scene Fader.
public class ResultsScreen : MonoBehaviour
{
    const int TopThree = 3;

    [SerializeField] SceneFader fader;
    [SerializeField] TrackInfo[] tracks;
    [SerializeField] TMP_Text placeText;
    [SerializeField] TMP_Text titleText;
    [SerializeField] TMP_Text newsText;
    [SerializeField] ResultLine linePrefab;
    [SerializeField] Transform lineList;
    [SerializeField] GameObject nextTrackButton;
    [SerializeField] AudioSource jingle;
    [SerializeField] AudioClip unlockClip;

    RaceResult result;
    TrackInfo nextTrack;

    void Start()
    {
        result = RaceSetup.Result;
        nextTrackButton.SetActive(false);
        if (result == null)
        {
            Debug.LogWarning("There's no race result to show (was the Results scene started on its own?).", this);
            placeText.text = "";
            titleText.text = "NO RACE YET";
            newsText.text = "";
            return;
        }

        titleText.text = $"{result.Track.DisplayName.ToUpper()} · {(result.Mode == RaceMode.Race ? "RACE" : "TIME TRIAL")}";
        if (result.Mode == RaceMode.Race)
        {
            placeText.text = TimeText.Place(result.PlayerPlace);
            ShowStandings();
        }
        else
        {
            placeText.text = TimeText.Format(result.PlayerBestLap);
            ShowLaps();
        }
        newsText.text = SaveRecords();
        nextTrackButton.SetActive(nextTrack != null);
    }

    public void Retry()
    {
        fader.FadeTo(result != null ? result.Track.SceneName : "Menu");
    }

    public void NextTrack()
    {
        RaceSetup.Track = nextTrack;
        fader.FadeTo(nextTrack.SceneName);
    }

    void ShowStandings()
    {
        foreach (ResultRow row in result.Rows)
        {
            string time = row.HasFinished ? TimeText.Format(row.RaceTime) : "racing";
            Instantiate(linePrefab, lineList).Show(TimeText.Place(row.Place), row.RacerName, time, TimeText.Format(row.BestLap), row.IsPlayer);
        }
    }

    void ShowLaps()
    {
        for (int i = 0; i < result.PlayerLaps.Count; i++)
        {
            bool isBest = result.PlayerLaps[i] == result.PlayerBestLap;
            Instantiate(linePrefab, lineList).Show($"Lap {i + 1}", isBest ? "best lap" : "", TimeText.Format(result.PlayerLaps[i]), "", isBest);
        }
        if (result.GhostLap > 0f)
        {
            Instantiate(linePrefab, lineList).Show("Ghost", "the lap you raced", TimeText.Format(result.GhostLap), "", false);
        }
    }

    // Saves the new records and opens the next track, and says what changed.
    string SaveRecords()
    {
        SaveData save = SaveSystem.Load();
        TrackRecord record = save.RecordFor(result.Track.Id);
        string news = "";
        if (result.PlayerBestLap > 0f && (record.bestLap == 0f || result.PlayerBestLap < record.bestLap))
        {
            record.bestLap = result.PlayerBestLap;
            news += "New best lap!\n";
        }
        bool hasFinished = result.PlayerRaceTime > 0f;
        if (hasFinished && (record.bestRace == 0f || result.PlayerRaceTime < record.bestRace))
        {
            record.bestRace = result.PlayerRaceTime;
            news += "New best race!\n";
        }

        if (result.Mode == RaceMode.Race && result.PlayerPlace > 0)
        {
            if (record.bestPlace == 0 || result.PlayerPlace < record.bestPlace)
            {
                record.bestPlace = result.PlayerPlace;
            }
            if (result.PlayerPlace <= TopThree)
            {
                news += OpenTracksAfter(save);
            }
        }
        nextTrack = OpenTrackAfter(save);
        SaveSystem.Save(save);
        return news;
    }

    // Opens every track that a top three here opens, the first time only.
    string OpenTracksAfter(SaveData save)
    {
        string news = "";
        foreach (TrackInfo track in tracks)
        {
            if (track.OpenedBy == result.Track && save.Open(track.Id))
            {
                news += $"Track opened: {track.DisplayName}\n";
                jingle.PlayOneShot(unlockClip);
            }
        }
        return news;
    }

    // The track after this one, if it's open.
    TrackInfo OpenTrackAfter(SaveData save)
    {
        foreach (TrackInfo track in tracks)
        {
            if (track.OpenedBy == result.Track && save.IsOpen(track.Id))
            {
                return track;
            }
        }
        return null;
    }
}
```

### Do it — the sources

15. **The kart.** In `Prefabs/Kart`, three empty children, each with an **Audio Source**,
    all 3D: **Spatial Blend** `1`, **Volume Rolloff** **Logarithmic**, **Min Distance**
    `6`, **Max Distance** `80`, **Doppler Level** `0.4`:
    - `Engine`: **AudioClip** `Engine`, **Output** `Engines`, **Loop** and **Play On
      Awake** ticked. Add **EngineSound**, with the kart's KartController in **Kart**.
    - `Skid`: `Skid`, Output `Effects`, Loop ticked, Play On Awake not.
    - `Sounds`: no clip, Output `Effects`, Play On Awake not.

    Add **KartSounds** to the kart: **Skid** and **Effects** are the two sources;
    **Boost Clip** `Boost`, **Bump Clip** `Bump`, **Crash Clip** `Crash`.
16. **The Race Kit.** An empty `Volumes` with **VolumeSettings** (the mixer). A `Music`
    with an Audio Source (`Race`, Output `Music`, Loop, **not** Play On Awake: the music
    waits for GO) and **MusicPlayer**, with the Race Manager in **Race**. On `Countdown`,
    an Audio Source (Output `Countdown`) dragged into CountdownLights' **Speaker**, with
    **Beep** `Beep` and **Go** `Go`. On the Race Kit's PauseMenu: **Racing Snapshot** and
    **Paused Snapshot**. On its Settings Panel: **Volumes**.
17. **The Settings Panel.** In the prefab, four rows above the mph toggle: a text
    (*Master*, *Music*, *Effects*, *Engines*) and a **Slider** (220 wide, **Min** 0, **Max**
    1). Drag the sliders into the SettingsPanel's four slider fields.
18. **The menus.** In `Menu`, `Garage` and `Results`: a `Volumes` (VolumeSettings, the
    mixer) and a `Music` (Audio Source `Menu`, Output `Music`, Loop, Play On Awake ticked,
    and MusicPlayer with **Race** empty). In `Menu`, the Settings Panel's **Volumes**. In
    `Results`, an Audio Source on `Results` (Output `Effects`, not Play On Awake): the
    ResultsScreen's **Jingle**, and **Unlock Clip** `Unlock`.

### Test it

- Race. The engines hum and rise with the speed; stand still at the grid and let the
  rivals go: you hear them pull away. The music waits for GO; under the beeps of the
  countdown, it ducks.
- Drift: the tyres squeal. Boost: a whoosh. Hit a bank: a bump; hit it hard: a crash.
- Pause: the sound goes dull and the engines drop. Resume: back.
- Settings: drag **Music** to 0, and the music goes. Stop, and play again: still silent.
  Put it back.
- With the game running, open the Audio Mixer window: the meters move, group by group,
  and the snapshot changes when you pause.

### Commit

*Add the sounds, the music and the Audio Mixer.* Push.

### Challenge

Two sounds in your `Audio` folder aren't used yet: `Finish.wav` and `Click.wav`. Play
`Finish` when you cross the line on your last lap (which event tells you?), and `Click`
when any menu button is pressed. For the click, would you add an Audio Source to every
button, or one to the scene? Why?

# Part 5 — Finish

## C# 16 — Packages and the Asset Store

**Goal:** you can add, update and remove packages with the Package Manager, bring in an
asset from the Asset Store or a `.unitypackage` file, and fix the conflicts an import can
cause (the Associate exam's prerequisites: importing assets or code from the Asset Store
or Package Manager and resolving conflicts).

### Idea — three ways in

Most of what's in a Unity project, you didn't make. It comes in one of three ways:

| What | Comes from | Lands in | Example |
| --- | --- | --- | --- |
| a **package** | Unity's registry, through the Package Manager | the project's packages, read-only | the Input System, the Memory Profiler |
| an **Asset Store asset** | the Asset Store, through **My Assets** | usually your Assets folder | a free pack of sounds, models or effects |
| a **`.unitypackage` file** | a file someone gives you | your Assets folder | a teammate's module, the art for a course |

A package is code and assets with a name, such as `com.unity.inputsystem`, and a version,
such as `1.20.0`. Unity keeps it outside your Assets: you use it, but you don't change it,
and updating it is one click. An asset or a `.unitypackage` drops its files into your
Assets, and from then on they're part of your project, like your own.

### Idea — the Package Manager window

Open **Window → Package Management → Package Manager**. The list on the left chooses what
the window shows:

| List | Shows |
| --- | --- |
| **In Project** | the packages your project has |
| **Updates** | the ones that have a newer version |
| **Unity Registry** | every package Unity offers |
| **My Assets** | what your Unity account has from the Asset Store |
| **Built-in** | the parts of Unity itself, such as physics and audio, which you can switch off |

Select a package, and the right shows its name, version and description, with tabs that
include **Version History** and **Dependencies**, and the buttons for what you can do:
**Install**, **Update to** a newer version, or **Remove**.

A version has three numbers. In `1.20.0`, the **1** changes when old code may stop
working, the **20** when features are added, and the **0** for fixes only. So an update to
the last number should be safe; one to the first means reading what changed, first.

A package can need others: its **dependencies**. URP needs Render Pipelines Core and
Shader Graph, for example, and the Package Manager installs them with it. The
**Dependencies** tab lists them.

### Idea — Packages/manifest.json

The Package Manager keeps its list in a text file, `Packages/manifest.json`. Each line is a
package's name and its version. This one is from this course's project:

```json
{
  "dependencies": {
    "com.unity.inputsystem": "1.20.0",
    "com.unity.render-pipelines.universal": "17.6.0",
    "com.unity.ugui": "2.6.0",
    …
  }
}
```

Beside it, `Packages/packages-lock.json` records the exact version of everything installed,
dependencies too. Both files go into Git (C# 1). The packages themselves don't:
Unity downloads them into `Library/PackageCache`, and the `.gitignore` leaves the Library
folder out. When a teammate opens the project, Unity reads the manifest and downloads the
same versions. A list of a few kilobytes travels, instead of hundreds of megabytes.

### Idea — installing a package by name

Some packages are easiest to add by their name. The **Memory Profiler** (C# 17)
is `com.unity.memoryprofiler`:

1. In the Package Manager, open the **+** menu and choose **Install package by technical
   name...**
2. Type `com.unity.memoryprofiler`, and **Install**.
3. When it's done, it's in **In Project**, and the manifest has a new line:
   `"com.unity.memoryprofiler": "1.1.12"`. That's its current release, which supports
   Unity 2022.3 and later.

Removing it is the same in reverse: select it, **Remove**, and its line goes.

### Idea — the Asset Store

The Asset Store (`assetstore.unity.com`) sells, and gives away, art, sound, tools and
code. Getting a free asset takes two places:

1. **On the website**, signed in with your Unity account, choose **Add to My Assets**. The
   asset is now yours, on every computer you sign in to.
2. **In Unity**, open the Package Manager's **My Assets** list, select the asset, then
   **Download**, then **Import**.
3. The import dialog lists every file, each with a tick box. Untick what you don't need,
   such as demo scenes, and **Import**.

Every asset comes with a licence. Most use the Asset Store's standard **EULA**: you may use
the asset in your games, built and shipped, but you may not share its files. So a public
repository, or a course's repository, doesn't include them: each person adds the asset
with their own account. Other assets use other licences: Kenney's packs, for example, are
CC0, free for anyone to share. Read the licence on the asset's page.

### Idea — .unitypackage files

A `.unitypackage` is a set of files from a project's Assets folder, packed into one file,
with their folders and `.meta` files, so that references between them still work.

- **Export:** select folders in the Project window, then
  **Assets → Export Asset Package…**. Untick what shouldn't go, and **Export**.
- **Import:** **Assets → Import Asset Package…**, and pick the file. The same
  import dialog opens: it shows which files are new, and which would replace a file you
  already have.

This is how a lead shares a module with the team, or a trainer shares a game's art.

### Idea — conflicts, and how to resolve them

An import can break a project that worked. Five conflicts are common:

**Two classes with the same name.** The pack has a `Health.cs`, and so does your game. Two
classes can't share a name, and the Console fills with errors like this:

```csharp
public class Health : MonoBehaviour     // the pack's Health.cs, beside yours
{
    [SerializeField] int hitPoints = 10;
}
// error CS0101: The namespace '<global namespace>' already contains a definition for 'Health'
```

If the two files are the same, delete one. If they're different classes that happen to
share a name, put one of them in a `namespace` (C# 10), or rename yours. Good
packages keep their code in a namespace, so this never happens.

**A package that needs a newer version of another.** A new package may depend on, say, a
newer Input System than yours, and the Package Manager shows an error naming both. Update
the other package, or choose an older version of the new one from its **Version History**.

**An asset made for another render pipeline.** Your project uses URP, and the asset was
made for Unity's older Built-in pipeline. Its models show bright **pink**: the materials
use shaders that URP can't draw. Select the materials and choose **Edit → Rendering →
Materials → Convert Selected Built-In Materials to Current SRP**, or use **Window →
Rendering → Render Pipeline Converter** for the whole project. A material that won't
convert can be given a URP shader by hand, in its **Shader** list: **Universal Render
Pipeline/Lit** for 3D, **Universal Render Pipeline/2D/Sprite-Lit-Default** for sprites.
Better still, check the asset's page first: it says which pipelines it supports.

**An asset saved by an older version of Unity.** Unity reads old files, but the Console
asks you to save them again, one line per file:

```
Serialized file "Assets/JMO Assets/Cartoon FX Remaster/CFXR Assets/Meshes/cfxr ring mesh.asset" contains a Mesh object at version 9, below the supported minimum (10). Open and re-save the file to upgrade.
```

Most such files still work. Some don't: in Unity 6, those meshes don't draw, and the
effects that use them lose parts. Saving them again, in your version, fixes it.
Unity has no menu item for it: a small Editor script with a `[MenuItem]` can call
`AssetDatabase.ForceReserializeAssets` on the files of a selected folder. The asset's
page lists the Unity versions it supports: check it before you import.

**An import that overwrites your file.** A pack's `Scripts/Player.cs` lands on top of
yours. The import dialog warned you: untick that file. If it's too late, Git shows the
change, and you can discard it.

### Idea — good habits

| Habit | Because |
| --- | --- |
| commit before you import | if it goes wrong, discarding the changes puts everything back |
| import into a branch (C# 1) | `main` keeps working; merge when the import does |
| import only what you need | demo scenes and unused models make the project bigger and slower to open |
| keep other people's assets in their own folders | you can see what's yours, and remove a pack in one go |
| read the README and the licence | they say what it needs, and what you may do with it |

> **Tip:** after an import, read the Console before anything else. A red error from the
> new files stops every script from compiling, yours too.

### Do it

1. Open the Package Manager. Find the Input System in **In Project**: what version is it,
   and what are its dependencies?
2. Install the Memory Profiler by name. Open `Packages/manifest.json` in a text editor and
   find its line. Then look at what Git says has changed, and commit it.
3. Select a folder of your own scripts and export it as a `.unitypackage`. Make a new,
   empty project and import it there.
4. In the new project, add a second script with the same class name as one of yours. Read
   the error, then fix it with a `namespace`.

### Challenge

On a new branch, import a free 3D asset made for the Built-in pipeline. Fix its pink
materials. Do any fail to convert? Find out why, give them a URP shader, and decide
whether to merge the branch, or delete it.

## C# 17 — The Profiling Tools

**Goal:** you can choose the right tool for a performance problem, the Profiler, the Frame
Debugger or the Memory Profiler, and use it to find the cause before you change anything
(Associate: Debugging — select profiling tools for performance problems).

### Idea — measure, don't guess

A game that stutters, a phone that gets hot, a scene that's slow to load: the cause is
rarely where you'd guess. Change the wrong thing, and the code is harder to read and no
faster. So measure first, change one thing, and measure again.

A frame has a budget. At 60 frames a second, it has 16.7 ms for everything: your scripts,
physics, animation and drawing. At 30, it has 33.3 ms. A frame that takes longer arrives
late, and the player sees a stutter.

### Idea — three tools, three questions

| Tool | Open it with | It answers | Use it when |
| --- | --- | --- | --- |
| **Profiler** | **Window → Analysis → Profiler** | where each frame's time goes, method by method, and how much garbage each makes | the game is slow, or stutters |
| **Frame Debugger** | **Window → Analysis → Frame Debugger** | what one frame draws, step by step, in what order, and what's drawn together | something draws in the wrong order, or not at all; too many draw calls; layers of UI |
| **Memory Profiler** | a package, then **Window → Analysis → Memory Profiler** | what fills the memory: textures, meshes, sounds | memory use is high; a phone closes the game; loading is slow |

The exam describes a problem and asks for the tool. *A kart game stutters every few
seconds*: the Profiler, and its GC Alloc column. *A card is drawn behind the one it should
cover*: the Frame Debugger. *The game uses 900 MB on a phone*: the Memory Profiler.

### Idea — the Profiler

Open it, make sure **Record** is on, and press Play. The top half draws a chart for each
module; the first is **CPU Usage**, the time each frame took. A tall, thin peak is a
**spike**: one slow frame. Pause the game and click the spike: the bottom half shows that
frame, in a view you choose from the list on its left. Two matter most:

| View | Shows | Good for |
| --- | --- | --- |
| **Timeline** | bars along the frame's time, one row per thread, nested | seeing what happened when, and what waited for what |
| **Hierarchy** | a table of everything that ran, which opens like folders | finding the slowest thing, by its numbers |

The Hierarchy's columns:

| Column | Means |
| --- | --- |
| **Total**, **Time ms** | the time in this line and everything it called, as a share of the frame and in milliseconds |
| **Self**, **Self ms** | the same, for this line alone |
| **Calls** | how many times it ran in this frame |
| **GC Alloc** | how much memory it took that the garbage collector must free later |

Click **Time ms** to sort, open **PlayerLoop**, and keep opening the line with the biggest
time until you reach a line with your own script's name and method, such as
`CoinLabel.Update`. That's where the time goes. Ignore **EditorLoop**: it's the Editor's
own work, which a built game doesn't do.

### Idea — garbage, and the GC Alloc column

Garbage is memory a script takes and drops (C# 15). A little now and then is
fine; some every frame adds up, until the garbage collector's work shows as a spike. These
two make garbage every frame:

```csharp
using TMPro;
using UnityEngine;

public class CoinLabel : MonoBehaviour
{
    [SerializeField] TMP_Text label;

    int coins;

    void Update()
    {
        // A new string every frame, though the coins rarely change.
        label.text = "Coins: " + coins;
    }
}
```

```csharp
[SerializeField] Transform[] karts;
[SerializeField] float nearDistance = 5f;

void Update()
{
    // A new list every frame, thrown away at the end of it.
    List<Transform> nearby = new List<Transform>();
    foreach (Transform kart in karts)
    {
        if (Vector3.Distance(transform.position, kart.position) < nearDistance)
        {
            nearby.Add(kart);
        }
    }
}
```

In the Profiler, both `Update` lines show a GC Alloc in every frame. The fixes: make a new string
only when there's something new to show, and make the list once and empty it each frame:

```csharp
using TMPro;
using UnityEngine;

public class CoinLabel : MonoBehaviour
{
    [SerializeField] TMP_Text label;

    int coins;

    public void AddCoins(int amount)
    {
        coins += amount;
        label.text = $"Coins: {coins}";     // only when the coins change
    }
}
```

```csharp
[SerializeField] Transform[] karts;
[SerializeField] float nearDistance = 5f;

// Made once. Clear() empties it, and keeps its memory for the next frame.
readonly List<Transform> nearby = new List<Transform>();

void Update()
{
    nearby.Clear();
    foreach (Transform kart in karts)
    {
        if (Vector3.Distance(transform.position, kart.position) < nearDistance)
        {
            nearby.Add(kart);
        }
    }
}
```

`Instantiate` and `Destroy`, many times a second, make garbage too: that's what pooling
fixes (C# 15).

### Idea — deep profiling, and profiling a build

Normally the Profiler times only what Unity calls: your `Update`, but not the methods it
calls. **Deep Profile**, at the top of the window, times every C# method. Everything runs
much slower while it's on, so every number grows: use it briefly, to find which method
inside a slow `Update` is the slow one, then switch it off.

The Editor costs time too: it's drawing its own windows while your game runs. For real
numbers, profile a **development build**. In **File → Build Profiles**, tick **Development
Build** and **Autoconnect Profiler**, then **Build And Run**: the game connects to the
Profiler as it starts, and its frames appear there. A phone works the same way. Profile in
the Editor to find a problem quickly; check the numbers in a build.

### Idea — the Frame Debugger

Open it, press Play, and press **Enable**. The game stops on the current frame, and the
list on the left shows every step Unity took to draw it, in order. Click a step, and the
Game view shows the frame drawn up to that step, no further. On the right are its details:
what was drawn, with which shader, and a **Batch cause**: why it couldn't be drawn
together with the step before. **Disable** lets the game go on.

It's how you see that a hovered card is drawn last, so it's on top; that a sprite you
can't find is drawn, but behind another; or that a UI screen draws three see-through
panels over each other in every frame: **overdraw**, which slows phones most.

### Idea — the Memory Profiler

The Memory Profiler is a package: install it by its name, `com.unity.memoryprofiler`
(C# 16). Open it, press Play, and **Capture New Snapshot**. A snapshot is
everything in memory at that moment. Its **Summary** shows the totals, and **Unity
Objects** lists every texture, mesh and sound, which you can sort by size. The biggest are
almost always textures.

How big a texture is in memory depends on its import settings, not on the file. One
1800 × 10800 picture, imported as a sprite with no mipmaps, measured in Unity 6000.6:

| Import settings | In the game | Memory |
| --- | --- | --- |
| the defaults | shrunk to 341 × 2048, blurry | 4.7 MB |
| **Max Size** 16384, the default compression | 1800 × 10800, DXT1 | 18.5 MB |
| **Max Size** 16384, **Compression** None | 1800 × 10800, RGB24 | 129.8 MB |
| one 300 × 300 portrait cut from it, compressed | 300 × 300 | 89 KB |

A teammate who raises Max Size and turns compression off, to make one sheet sharp, turns
4.7 MB into 129.8 MB. The fix isn't a setting: it's one picture per file, at the size it's
shown.

### Idea — a method in five steps

1. **Reproduce** it: find a way to make the problem happen every time.
2. **Record** it: the Profiler open, the game doing the slow thing.
3. **Find the spike**: the tallest frame in CPU Usage, or frames with GC Alloc.
4. **Look at the Hierarchy**: sort by time, or by GC Alloc, and open it down to your code.
5. **Change one thing, and measure again**, doing the same thing. If it didn't help, undo
   it.

### Do it

1. Put the first `CoinLabel` on a text, play, and find its line in the Profiler's
   Hierarchy. What's in its GC Alloc column? Change it to the fixed one, and look again.
2. Write a script that makes 50 cubes with `Instantiate` and destroys them, every frame.
   Find the spikes, and the garbage. Which tool told you?
3. Open the Frame Debugger on a screen with UI. Step through it: which element is drawn
   last, and why is that the one on top?
4. Install the Memory Profiler, take a snapshot, and find the biggest texture in **Unity
   Objects**.

### Challenge

Make a development build with **Autoconnect Profiler**, and compare its CPU Usage with the
same moment in the Editor. Then repeat the picture experiment: import one large picture,
and record its memory at three settings, as in the table.

## Chapter 18 — Profile It

**Goal:** a package installed with the Package Manager, and three performance problems in
your own game, each found with the right tool and fixed: garbage made every frame (the
**Profiler**), what's drawn and in what order (the **Frame Debugger**), and music filling
memory (the **Memory Profiler**).

### Idea — which tool for which problem

The exam asks this as a straight question (C# 17):

| The symptom | The tool | What it shows |
| --- | --- | --- |
| the game stutters, or a click takes a moment | **Profiler**, CPU Usage | what took the time, frame by frame; **GC Alloc**: garbage made |
| something draws wrongly, or too often | **Frame Debugger** | every draw of one frame, in order |
| memory grows, or a phone runs out of it | **Memory Profiler** | what's in memory, and how big each thing is |

The problems in this chapter are real ones, already in your game: you wrote two of them
yourself, without knowing, and the intern wrote the third.

### Do it — a package

1. **Window → Package Management → Package Manager**. On the left, **Unity Registry**;
   search for *Memory Profiler*, select it, and **Install**. Look at
   `Packages/manifest.json` in GitHub Desktop's Changes tab: one new line,
   `"com.unity.memoryprofiler"`, with its version. The package itself isn't in your
   repository, only that line: anyone who opens the project gets the package from the
   registry. Commit it: *Add the Memory Profiler package*.

### Do it — problem 1: garbage, every frame

2. **Window → Analysis → Profiler**. Play from the Menu to the **Garage**, and leave it
   there for a few seconds without touching anything, with the Profiler recording.
3. Stop recording, click any frame of the **CPU Usage** graph, and switch the lower half
   to **Hierarchy**. Sort by **GC Alloc**: `GarageScreen.Update`, on **every** frame,
   making garbage while nothing on the screen changes. Open it: string concatenation (the
   stats text, built again 60 times a second for three cards) and `GetComponent`, every
   frame. Garbage piles up until the garbage collector clears it in one go: a stutter.
4. Do the same in a race: `RaceHud.Update` makes garbage on every frame too: the time,
   the speed and the place, written as new strings 60 times a second. That one's yours.
5. Nobody can read a number that changes 60 times a second. The HUD writes its numbers 10
   times a second now. Replace `RaceHud.cs`, finished:

```csharp:RaceHud.cs
using TMPro;
using UnityEngine;

// The race's heads-up display: your place, the lap, the race time, your best
// lap, the speed, Wrong way!, and in Time Trial the gap to the ghost at each
// checkpoint. The numbers are written ten times a second, not every frame:
// building a string makes garbage, and nobody can read a number that changes
// sixty times a second anyway.
public class RaceHud : MonoBehaviour
{
    const float RefreshInterval = 0.1f;     // seconds
    const float KilometresPerHour = 3.6f;   // for each metre a second
    const float MilesPerHour = 2.237f;
    const float GapShowTime = 3f;           // seconds

    [SerializeField] RaceManager race;
    [SerializeField] TMP_Text placeText;
    [SerializeField] TMP_Text lapText;
    [SerializeField] TMP_Text timeText;
    [SerializeField] TMP_Text bestLapText;
    [SerializeField] TMP_Text speedText;
    [SerializeField] GameObject wrongWay;
    [SerializeField] TMP_Text gapText;
    [SerializeField] Color behindColour = new Color(1f, 0.45f, 0.4f);   // slower than the ghost
    [SerializeField] Color aheadColour = new Color(0.45f, 1f, 0.5f);
    [SerializeField] TMP_Text finishText;
    [SerializeField] BoostGauge boostGauge;

    Racer player;
    float timeToRefresh;
    float gapTimeLeft;
    bool useMph;

    void OnEnable()
    {
        race.RaceStarted += OnRaceStarted;
        race.RaceOver += OnRaceOver;
    }

    void OnDisable()
    {
        race.RaceStarted -= OnRaceStarted;
        race.RaceOver -= OnRaceOver;
        if (player != null)
        {
            player.LapCompleted -= OnLapCompleted;
            player.CheckpointPassed -= OnCheckpointPassed;
            player.Finished -= OnFinished;
        }
    }

    void Start()
    {
        useMph = GameSettings.UseMph;
        wrongWay.SetActive(false);
        gapText.gameObject.SetActive(false);
        finishText.gameObject.SetActive(false);
        placeText.gameObject.SetActive(race.Mode == RaceMode.Race);
        lapText.text = $"LAP 1/{race.Laps}";
        timeText.text = "0:00.00";
        bestLapText.text = $"BEST {TimeText.Format(0f)}";
        speedText.text = useMph ? "0 mph" : "0 km/h";
    }

    // The karts are on the grid by now: listen to yours.
    void OnRaceStarted()
    {
        player = race.Player;
        player.LapCompleted += OnLapCompleted;
        player.CheckpointPassed += OnCheckpointPassed;
        player.Finished += OnFinished;
        boostGauge.Watch(player.GetComponent<BoostMeter>());
    }

    void Update()
    {
        if (player == null)
        {
            return;
        }
        if (gapTimeLeft > 0f)
        {
            gapTimeLeft -= Time.deltaTime;
            gapText.gameObject.SetActive(gapTimeLeft > 0f);
        }
        timeToRefresh -= Time.deltaTime;
        if (timeToRefresh > 0f)
        {
            return;
        }
        timeToRefresh = RefreshInterval;

        timeText.text = TimeText.Format(race.RaceTime);
        float speed = Mathf.Abs(player.Kart.Speed);
        speedText.text = useMph ? $"{Mathf.RoundToInt(speed * MilesPerHour)} mph" : $"{Mathf.RoundToInt(speed * KilometresPerHour)} km/h";
        placeText.text = $"{TimeText.Place(PlaceOf(player))} / {race.Standings.Count}";
        wrongWay.SetActive(player.IsWrongWay && !player.HasFinished);
    }

    void OnLapCompleted(int lap, float time)
    {
        bestLapText.text = $"BEST {TimeText.Format(player.BestLap)}";
        if (lap < race.Laps)
        {
            lapText.text = $"LAP {lap + 1}/{race.Laps}";
        }
    }

    // In Time Trial, how you're doing against the ghost, for a few seconds.
    void OnCheckpointPassed(int index, float lapTime)
    {
        float gap;
        if (race.Ghost != null && race.Ghost.TryGetGap(index, lapTime, out gap))
        {
            gapText.text = TimeText.Gap(gap);
            gapText.color = gap > 0f ? behindColour : aheadColour;
            gapText.gameObject.SetActive(true);
            gapTimeLeft = GapShowTime;
        }
    }

    void OnFinished()
    {
        finishText.text = race.Mode == RaceMode.Race ? $"{TimeText.Place(PlaceOf(player))}!" : "FINISH!";
        finishText.gameObject.SetActive(true);
    }

    void OnRaceOver()
    {
        wrongWay.SetActive(false);
        finishText.gameObject.SetActive(true);
    }

    int PlaceOf(IRacer racer)
    {
        int place = 1;
        foreach (IRacer other in race.Standings)
        {
            if (other == racer)
            {
                return place;
            }
            place++;
        }
        return place;
    }
}
```

6. Record a race again: `RaceHud.Update` makes garbage on one frame in six, not every
   frame. The Garage's garbage is still there: write it down. Chapter 19 rewrites the
   intern's Garage, and the stats text will be written once, when the screen opens.

> **Note:** the Profiler in the Editor measures the Editor too, and the Editor is slower
> than a build. For numbers you trust, profile a **Development Build** with **Autoconnect
> Profiler** ticked (in **File → Build Profiles**). To find *where* the time goes, the
> Editor is fine.

### Do it — problem 2: the Frame Debugger

7. Play a **Time Trial** on Meadow Loop until the ghost is driving beside you, drift so
   there are skid marks behind you, and then **Window → Analysis → Frame Debugger** →
   **Enable**. The game freezes on one frame.
8. The list on the left is every step of that frame, in order. Click down it slowly, and
   watch the **Game** view build up: the shadows first (drawn into a map you don't see),
   then the solid things (the track, the scenery, the karts), then the sky, then the
   see-through things, then the UI.
9. Find these, and say why each is where it is:
   - **The ghost** is drawn **after** every solid thing, though it's a kart like yours.
     It's transparent: to show what's behind it, everything behind it must be drawn
     first.
   - **The skid marks** too: transparent, they're drawn late, over the road.
   - **The HUD** last of all: a Screen Space Overlay canvas is drawn over the finished
     picture.
10. **Disable** the Frame Debugger.

### Do it — problem 3: the Memory Profiler

11. Select `Audio/Race`. Its **Load Type** is **Decompress On Load**, Unity's default for
    every clip: when the scene loads, the whole song is unpacked into memory, ready to
    play. Race is 96 seconds of stereo music at 44,100 samples a second: 2.9 MB in its
    file, and unpacked, about **16 MB**.
12. Play a race, then **Window → Analysis → Memory Profiler** → **Capture New Snapshot**.
    Open the snapshot, find the **AudioClip**s, and look at `Race`: one of the biggest
    things in memory.
13. Set `Race` and `Menu` to **Load Type** **Streaming**, **Apply**: they're read from the
    file a little at a time as they play, and only a small buffer is in memory. Take a
    new snapshot and compare. The short sounds (the engine, the skid, the beeps) stay as
    they are: they must start at once, and they're tiny.

### Do it — from the Asset Store (optional)

14. The Associate exam expects you to have imported from the **Asset Store**. On
    assetstore.unity.com, find **Cartoon FX Remaster Free** by Jean Moreno, and **Add to
    My Assets** (free; it needs your Unity account). In the Package Manager, **My
    Assets**, select it, **Download**, then **Import**, and **Import** again in the
    Import Unity Package window. It lands in `Assets/JMO Assets`.
15. Read the Console before anything else. Unity 6 fills it with lines like this one:

```
Serialized file "Assets/JMO Assets/Cartoon FX Remaster/CFXR Assets/Meshes/cfxr ring mesh.asset" contains a Mesh object at version 9, below the supported minimum (10). Open and re-save the file to upgrade.
```

16. The pack was saved by an older Unity. Its meshes don't draw until they're saved again
    in this version, and there's no menu for that, so make one. In `Assets`, make a folder
    called `Editor`, and in it this script:

```csharp
using System.Collections.Generic;
using UnityEditor;
using UnityEngine;

// Tools → Re-save Selected Assets: saves the selected files (and everything in a
// selected folder) again, in this version of Unity's format. It's what the Console
// asks for when a file is "below the supported minimum".
// An Editor script: it lives in a folder called Editor, and never goes into a build.
public static class ResaveAssets
{
    [MenuItem("Tools/Re-save Selected Assets")]
    static void ResaveSelected()
    {
        List<string> paths = new List<string>();
        foreach (string guid in Selection.assetGUIDs)
        {
            string path = AssetDatabase.GUIDToAssetPath(guid);
            if (AssetDatabase.IsValidFolder(path))
            {
                foreach (string inside in AssetDatabase.FindAssets("", new[] { path }))
                {
                    paths.Add(AssetDatabase.GUIDToAssetPath(inside));
                }
            }
            else
            {
                paths.Add(path);
            }
        }
        AssetDatabase.ForceReserializeAssets(paths);
        Debug.Log($"Re-saved {paths.Count} assets.");
    }
}
```

17. `[MenuItem]` puts a `static` method in Unity's menus. A script in a folder called
    `Editor` is an **Editor script**: it uses `UnityEditor`, runs in the Editor, and is
    never built into your game. Select the pack's **CFXR Assets** folder and choose
    **Tools → Re-save Selected Assets**.
18. Use one of its effects as your kart's sparks: drag **CFXR Hit A (Red)** (in **CFXR
    Prefabs → Impacts**) into `Prefabs/Kart`, untick its **Play On Awake**, and drag it
    into KartEffects' **Sparks**, in place of yours. Bump a bank. Keep whichever you like
    better.
19. An Asset Store asset's licence lets you use it in your games, not share its files
    publicly. Your repository is private, so it can go in there.

### Commit

*Write the HUD ten times a second, and stream the music.* If you did the Asset Store
steps, commit them separately: *Add Cartoon FX Remaster Free*.

### Challenge

Unity can **batch** objects that never move: tick **Static** on `Scenery` (and its
children), and Unity combines them when the scene loads. Play Meadow Loop, open the Game
view's **Stats**, and note the **Batches** with and without it. The Universal 3D template
also turns on the **GPU Resident Drawer** (in `Assets/Settings/PC_RPAsset`), which draws
many copies of one mesh together by itself. So: does Static help in your project? Measure
it, don't guess.

## C# 18 — Coding Standards and Refactoring

**Goal:** you can follow a team's style guide, refactor code to fit it in small, tested
steps, and choose the version of some code that follows a given standard (Associate:
Programming — apply coding standards set by senior programmers; Associate: Debugging —
refactor code to fit coding standards).

### Idea — why teams have a style guide

A **style guide** is a short list of rules for how a team writes code. A senior
programmer writes it once, and everyone follows it, even where they'd have chosen
differently. It pays for itself three ways:

- **Everyone reads everyone's code.** When all of it looks the same, you read what it
  does, not how it's written.
- **Reviews go faster.** Nobody argues about braces; the review is about the logic.
- **Fewer bugs.** Most rules exist because breaking them once caused a bug: a public
  field changed by the wrong script, a number changed in one place but not another.

### Idea — a team's style guide

| What | Rule | Example |
| --- | --- | --- |
| Classes, methods, properties, enums | PascalCase | `JuiceStand`, `Sell`, `MaxCups` |
| Fields, locals, parameters | camelCase; a `bool` reads as a question | `cupsSold`, `isOpen` |
| Fields set in the Inspector | `[SerializeField]` and private, never `public` | `[SerializeField] float topSpeed = 12f;` |
| Values other scripts read | a property | `public int Coins { get { return coins; } }` |
| Numbers with a meaning | a named `const`, or a serialized field | `const int MaxCups = 20;`, not `20` |
| Files | one class per file, named after it | `JuiceStand.cs` holds `JuiceStand` |
| Layout | 4 spaces, braces on their own lines, braces on every `if`, `else` and loop | |
| Comments | say why, not what | `// a full stand turns customers away` |
| Other objects | a serialized reference, never a `Find…` call | `[SerializeField] TMP_Text coinText;` |
| C# events and handlers | events in the past tense, without `On`; handlers start with `On` | `LapFinished`, `OnLapFinished` |
| Not allowed | `var`, `public` fields, `Find…`, `SendMessage` | |

Your trainer, or your game's build chapters, give you the guide your team uses. Follow
that one: on a team, being consistent matters more than any single rule.

### Idea — refactoring, safely

**Refactoring** is changing how code is written *without changing what it does*. The
game plays exactly the same afterwards; the code is just easier to read and to change
next time. Fixing a bug or adding a feature isn't refactoring: do those separately.
Mixed together, when something breaks, you can't tell which change did it.

Refactor in **small steps**, and after each one:

1. **Save**, and wait for Unity to compile: the Console must be clear.
2. **Test** the part the change touches: it must behave exactly as before.
3. **Commit**, with a message that says what changed (C# 1).

Then, when a step breaks something, it's the last one, and you can throw away just
that step.

### Idea — a script to clean up

Here's a working script from an intern. It sells juice and shows the coins, and it
breaks most of the style guide:

```csharp
using TMPro;
using UnityEngine;

public class stand : MonoBehaviour
{
    public int c = 0;
    public int s = 10;
    TMP_Text t;

    void Start()
    {
        t = GameObject.Find("Coins Text").GetComponent<TMP_Text>();
    }

    void Update()
    {
        t.text = "Coins: " + c;
    }

    public void Sell()
    {
        if (s > 0)
        {
            s = s - 1;
            c = c + 3;
            if (c >= 100)
            {
                Debug.Log("Second stand unlocked!");
            }
        }
    }
}
```

And here it is after seven small refactors, one commit each:

```csharp
using TMPro;
using UnityEngine;
using UnityEngine.Serialization;

// A juice stand: sells a cup at a time, and shows the coins it has earned.
public class JuiceStand : MonoBehaviour
{
    const int UnlockAt = 100;   // the coins that unlock the second stand

    [SerializeField] int price = 3;
    [FormerlySerializedAs("s")]
    [SerializeField] int stock = 10;
    [SerializeField] TMP_Text coinText;

    int coins;

    public int Coins
    {
        get { return coins; }
    }

    void Start()
    {
        ShowCoins();
    }

    public void Sell()
    {
        if (stock > 0)
        {
            stock--;
            Earn(price);
        }
    }

    void Earn(int amount)
    {
        coins += amount;
        ShowCoins();
        if (coins >= UnlockAt)
        {
            Debug.Log("Second stand unlocked!");
        }
    }

    void ShowCoins()
    {
        coinText.text = $"Coins: {coins}";
    }
}
```

| Step | The refactor | Why | Test |
| --- | --- | --- | --- |
| 1 | **rename** the class to `JuiceStand`, and its file, in Unity's Project window | a name that says what it is | the component is still on the stand |
| 2 | **rename** `c`, `s` and `t` with your editor's **Rename Symbol** (F2 in VS Code), and keep the stock's value with `[FormerlySerializedAs("s")]` | names that say what they hold | the stock in the Inspector hasn't changed |
| 3 | turn the **public fields** into a private `coins`, a `[SerializeField] stock`, and a `Coins` property | only the stand can change its coins | it compiles: no other script wrote to them |
| 4 | replace the **magic numbers** with `price` and `UnlockAt` | `3` and `100` now have names, and one place each | a sale still earns 3 |
| 5 | replace **`GameObject.Find`** with a `[SerializeField] TMP_Text` | a renamed object no longer breaks it, and the Inspector shows what it needs | drag the text in: it still counts |
| 6 | show the coins **when they change**, not in `Update` | no new string every frame: less garbage (C# 17) | the text still updates |
| 7 | **extract** `Earn` from `Sell` | each method does one job, and a tip can call `Earn` too | sell: same as before |

> **Watch out:** Unity saves Inspector values **by field name**. Rename a serialized field,
> and the value set in every scene and prefab is lost. `[FormerlySerializedAs("s")]`,
> from `UnityEngine.Serialization`, tells Unity the old name, so the value carries over.
> Rename a MonoBehaviour's file in the Project window, never outside Unity, so that its
> `.meta` file, and every scene's link to the script, comes with it.

> **Note:** the unlock message shows on every sale after 100 coins. That's a bug, and the
> refactored script still has it, on purpose: a refactor doesn't change what code does.
> Fix it afterwards, in a commit of its own.

### Idea — review your own diff

Before each commit, read your change as a **diff**: in GitHub Desktop's **Changes**
tab, each file you changed, with removed lines in red and added lines in green. Read
every line, as a reviewer would, and ask:

- Is every change one I meant? Is it only this step, with no fix mixed in?
- Did a `Debug.Log` I added while testing, or some commented-out code, get left behind?
- Did a scene or a prefab change that I didn't mean to touch?

A minute here saves a reviewer's time, and catches the change you made by accident.

### Idea — how the exam asks

*The senior programmer's standard says: "Inspector fields are private and serialized;
other scripts read them through a property." Which version follows it?*

- A. `public float topSpeed = 12f;`
- B. `[SerializeField] float topSpeed = 12f;` and `public float TopSpeed { get { return topSpeed; } }`
- C. `[SerializeField] public float topSpeed = 12f;`
- D. `float topSpeed = 12f;` and `public float TopSpeed { get { return topSpeed; } }`

**B.** A is a public field. C is public too: `[SerializeField]` adds nothing to a public
field. D compiles, but the field isn't in the Inspector, so a designer can't tune it.

*The standard says "no magic numbers". Which change to `if (lap > 3)` is a refactor
that fits it?*

- A. `const int LapsPerRace = 3;` and `if (lap > LapsPerRace)`
- B. `if (lap >= 3)`
- C. `if (lap > 3)   // 3 laps`
- D. `public int laps = 3;` and `if (lap > laps)`

**A.** B changes what the code does, so it isn't a refactor at all. C keeps the bare
number, with a comment that says what, not why. D names the number, but breaks the
rule against public fields.

### Do it

1. Make the intern's `stand` script, with a Button that calls `Sell` and a text named
   **Coins Text**. Check it works, and commit.
2. Do the seven steps, one at a time. After each: save, play, sell, commit.
3. Rename a serialized field once without `[FormerlySerializedAs]`, and watch its
   Inspector value reset. Discard that change in GitHub Desktop.
4. Fix the repeated unlock message, in a commit of its own, after the refactor.

### Challenge

Swap a script from your last game with a partner. Each of you refactors the other's to
fit the style guide, in small commits. Then review each other's diffs: could you follow
every step? Did any of them change what the game does?

## C# 19 — Debug Messages and Compile Errors

**Goal:** you can write debug messages that show exactly why code fails, and read a
compile error to find its cause, including the errors Level 4's topics bring (Associate:
Debugging — use debug messages to find why code fails; identify the cause of a compile
error).

### Idea — three kinds of message

| Call | In the Console | Use it when |
| --- | --- | --- |
| `Debug.Log(message)` | a plain message | you want to see what's happening while you build and test |
| `Debug.LogWarning(message)` | a yellow warning | something's wrong, but the game can carry on, perhaps with a fallback: a save with an unknown card id, a scene played on its own |
| `Debug.LogError(message)` | a red error | something is broken and must be fixed: a missing reference, two cards with the same id, a damaged save file |

Warnings and errors mark things that should never happen in the finished game, so they
stay in the code. Plain logs are mostly for while you're working.

### Idea — the context object

Each call takes a second argument, a **context**: any Unity object, usually `this`.
Click the message in the Console, and Unity highlights that object in the Hierarchy, or
the asset in the Project window. With twelve karts in the scene, it shows you *which*
kart:

```csharp
using UnityEngine;

public class FuelTank : MonoBehaviour
{
    [SerializeField] float fuel = 20f;

    void Start()
    {
        if (fuel <= 0f)
        {
            Debug.LogWarning($"{name} starts with no fuel ({fuel}), so it can't move.", this);
        }
    }
}
```

### Idea — messages that pinpoint the problem

A good message answers four questions: **what** happened, to **which object**, with
**which value**, and **what you expected**.

| Vague | Pinpoints |
| --- | --- |
| `Debug.Log("here");` | `Debug.Log($"{name}: Sell() with {stock} cups left", this);` |
| `Debug.LogError("error");` | `Debug.LogError($"{name}: no Coin Text set in the Inspector", this);` |
| `Debug.Log(speed);` | `Debug.Log($"{name}: speed {speed:0.0}, but the top speed is {topSpeed}", this);` |

```csharp
string kart = "Red Kart";
int lap = 4;
int lapsPerRace = 3;
Debug.LogWarning($"{kart} started lap {lap}, but the race has only {lapsPerRace} laps.");
```

```
Red Kart started lap 4, but the race has only 3 laps.
```

When hunting a bug, log the values just before the line that goes wrong, and compare
each one with what you expected. The first one that's different is where to look.

### Idea — the Console's buttons

| Button | Does |
| --- | --- |
| **Clear** | empties the Console. Its drop-down has **Clear on Play**, which empties it every time you press Play, **Clear on Build** and **Clear on Recompile** |
| **Collapse** | shows identical messages once, with a count: a message logged every frame becomes one line |
| **Error Pause** | pauses Play mode at the first error, so you can look at the scene as it was |
| the three counters | show or hide the logs, the warnings and the errors |

### Idea — turning noisy logs off

A log in `Update`, or one for every choice an opponent makes, buries everything else.
Don't delete a useful log: put it behind a switch you can tick in the Inspector.

```csharp
[SerializeField] bool logDecisions;     // tick it to see every choice

void Choose(string choice, int score)
{
    if (logDecisions)
    {
        Debug.Log($"{name} chose {choice}, score {score}", this);
    }
}
```

Off, the Console stays readable, and the game doesn't spend time building strings that
nobody reads. On, the next bug in the decisions takes a minute to find.

### Idea — compile errors

A compile error shows in red in the Console, and underlined in red in your code editor.
Until every one is fixed, Unity can't use any of your new code, and Play won't start.

```
Assets/Scripts/Kart.cs(14,9): error CS0103: The name 'sped' does not exist in the current context
```

| Part | Means |
| --- | --- |
| `Assets/Scripts/Kart.cs` | the file |
| `(14,9)` | line 14, character 9: double-click the error, and your editor opens there |
| `CS0103` | the error's code: the same codes come back again and again |
| the rest | what the compiler found |

Fix the **first** error first: one mistake, such as a missing brace, can cause a dozen
errors after it.

### Idea — Level 4's compile errors: classes and interfaces

```csharp
public abstract class Vehicle
{
    public abstract void Drive();
}

public class Kart : Vehicle         // error CS0534: 'Kart' does not implement inherited abstract member 'Vehicle.Drive()'
{
    public override void Drve()     // error CS0115: 'Kart.Drve()': no suitable method found to override
    {
    }
}
```

One typo, two errors: `Drve` overrides nothing in `Vehicle`, so `Drive` is still
missing. Fix the name, and both go. On its own, CS0534 means you haven't written the
abstract method yet, and CS0115 means the name or the parameters don't match any method
in the base class (C# 6).

```csharp
public interface IDamageable
{
    void TakeDamage(int amount);
}

public class Crate : MonoBehaviour, IDamageable     // error CS0535: 'Crate' does not implement interface member 'IDamageable.TakeDamage(int)'
{
}
```

A class that promises an interface must have every member of it, `public`, with the
same parameters (C# 8). And neither can be made with `new`: an abstract
class or an interface is a plan, not a thing. Make one of the classes built on it.

```csharp
Vehicle vehicle = new Vehicle();    // error CS0144: Cannot create an instance of the abstract type or interface 'Vehicle'
```

### Idea — events, members and names

| Wrong | The compiler says | Fix |
| --- | --- | --- |
| `racer.LapFinished = OnLapFinished;` | `error CS0070: The event 'Racer.LapFinished' can only appear on the left hand side of += or -= (except when used from within the type 'Racer')` | subscribe with `+=`; only `Racer` can raise or reset its event (C# 4) |
| two `Countdown` classes, often after importing a package | `error CS0101: The namespace '<global namespace>' already contains a definition for 'Countdown'` | delete the copy, rename yours, or use a namespace (C# 10) |
| `kart.Boost();` when `Kart` has no `Boost` | `error CS1061: 'Kart' does not contain a definition for 'Boost' and no accessible extension method 'Boost' accepting a first argument of type 'Kart' could be found (are you missing a using directive or an assembly reference?)` | fix the typo, use the right class, or write the member |
| `string cardId = 17;` | `error CS0029: Cannot implicitly convert type 'int' to 'string'` | the right type, `"17"`, or a conversion |
| `speed *= boost;`, with `boost` declared inside an `if` above it | `error CS0103: The name 'boost' does not exist in the current context` | fix the typo, or declare it before the `if`, outside its braces |
| `Random.Range(0f, 1f)`, with `using System;` and `using UnityEngine;` | `error CS0104: 'Random' is an ambiguous reference between 'UnityEngine.Random' and 'System.Random'` | write `UnityEngine.Random`, or remove a `using` the file doesn't need |
| a `TMP_Text` field without `using TMPro;` | `error CS0246: The type or namespace name 'TMP_Text' could not be found (are you missing a using directive or an assembly reference?)` | add the `using`; the same for a module's namespace |

### Idea — how the exam asks

*What's the cause of this compile error?* Try each one before reading the answers.

**1.**

```csharp
public class Card : ScriptableObject
{
    public virtual void Play()
    {
    }
}

public class HealCard : Card
{
    public override void Play(int amount)   // error CS0115: 'HealCard.Play(int)': no suitable method found to override
    {
    }
}
```

A. `HealCard` must be `abstract`. B. `Card.Play` isn't `abstract`. C. The override's
parameters don't match `Card.Play()`. D. A ScriptableObject can't be a base class.

**2.** `int lemons = stock;`, where `stock` is a `Dictionary<string, int>`, gives
`error CS0029: Cannot implicitly convert type 'System.Collections.Generic.Dictionary<string, int>' to 'int'`.
A. Dictionaries can't hold `int`s. B. The key is missing: `stock["Lemons"]`. C. `lemons`
should be a `float`. D. `stock` hasn't been made with `new`.

**3.** In a script called `Announcer`, `kart.LapFinished(3);` gives
`error CS0070: The event 'Kart.LapFinished' can only appear on the left hand side of += or -= (except when used from within the type 'Kart')`.
A. `Action<int>` needs two values. B. Only `Kart` can raise its own event. C. `kart` is
`null`. D. Events can't be used in `Start`.

**4.**

```csharp
public interface IUpgrade
{
    int Cost { get; }
    void Apply();
}

public class Blender : MonoBehaviour, IUpgrade     // error CS0535: 'Blender' does not implement interface member 'IUpgrade.Apply()'
{
    public int Cost { get { return 40; } }

    public void apply()
    {
    }
}
```

A. `Cost` needs a `set`. B. `Blender` must also inherit from `IUpgrade`'s base class.
C. `apply` isn't `Apply`: names are case-sensitive. D. Interfaces can't have properties.

**Answers.** 1 **C**: an override must match the base method's parameters exactly. 2
**B**: a dictionary isn't a number; one of its values is. 3 **B**: outside its class, an
event only takes `+=` and `-=`; C would be a runtime error, not a compile error. 4 **C**:
`Apply` is still missing.

### Do it

1. Make `FuelTank`, set **Fuel** to 0 on two objects, and play. Click each warning, and
   watch which object lights up in the Hierarchy.
2. Log a message every frame in `Update`, then turn on **Collapse**. Turn on **Error
   Pause**, log an error with `Debug.LogError`, and play.
3. Add a `logDecisions` switch to a script in your game, around a log that fires often.
4. Make each mistake in the two tables above in a `Practice` script, one at a time.
   Read the error, find its file and line, and fix it.

### Challenge

Write a script with four compile errors from this chapter, each one realistic. Swap with
a partner. Who can name every cause, and fix it, from the Console alone, without
running the game?

## Chapter 19 — Clean Up the Intern's Code

**Goal:** the intern's Garage rewritten to Sam's style guide, in small steps, each tested
and committed, without changing what the player sees, except that the stats become bars.
The garbage Chapter 18 found is gone. And one bug the review finds, fixed.

### Idea — refactor in small, safe steps

**Refactoring** changes how code is written, never what it does (C# 18). The
safe way is a series of small steps, each of which leaves a working game:

```
change one thing  →  Play: does the Garage still work?  →  commit  →  next
```

If a step breaks something, you know which: the last one. And Git can take it back.

The Garage's biggest problem isn't any one line. It's that one script knows everything
about every card: their children's names, which text is which, how a lock looks. A
**card** should know how to show itself. So the clean-up ends with two small classes,
`KartCard` and `TrackCard`, each showing one card from its data, and a `GarageScreen` that
only decides what's chosen.

### Do it — read it against the guide

1. Open `GarageScreen` beside `STYLE_GUIDE.md`, and list what breaks the guide before
   you touch anything:

| In the intern's code | The guide says |
| --- | --- |
| `public GameObject[] cards;` and six more | `[SerializeField]` private fields, never `public`; names that say what they are |
| `public int k;`, `public int t;` | not data at all: what's chosen right now; private, not shown in the Inspector |
| `transform.Find("Picture").GetComponent<Image>()`, every frame | references set once, in the Inspector |
| `for (int i = 0; i < 3; i++)` | no magic numbers: loop over the cards there are |
| `s = s + "Speed: " + ...` in `Update` | not allowed: string building in `Update` (Chapter 18's garbage) |
| three copied `AddListener` lines | one loop |
| `if (...) x; else y;` with no braces | braces on every `if` and `else` |
| `SceneManager.LoadScene` | the Scene Fader, as every other screen uses |
| `// garage screen`, `// go button` | comments say why, not what |

### Do it — step 1: names and fields

2. Rename the fields to say what they are, make them private and `[SerializeField]`, and
   make `k` and `t` plain private fields: they're what's chosen now, not settings. One
   trap: Unity remembers an Inspector value **by the field's name**. Rename `m` to
   `modeText`, and the Garage forgets which text was its mode.
   `[FormerlySerializedAs("m")]` tells Unity the field used to be called `m`:

```csharp
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;
using UnityEngine.Serialization;
using TMPro;

// garage screen
public class GarageScreen : MonoBehaviour
{
    [SerializeField] KartStats[] karts;
    [SerializeField] TrackInfo[] tracks;
    [SerializeField] GameObject[] cards;
    [SerializeField, FormerlySerializedAs("trackCard")] GameObject trackCardPrefab;
    [SerializeField, FormerlySerializedAs("list")] Transform trackList;
    [SerializeField, FormerlySerializedAs("m")] TMP_Text modeText;

    int chosenKart;
    int chosenTrack;
    SaveData save;

    void Start()
    {
        save = SaveSystem.Load();

        // set the mode
        if (RaceSetup.Mode == RaceMode.Race)
            modeText.text = "RACE";
        else
            modeText.text = "TIME TRIAL";

        // make the track cards
        for (int i = 0; i < tracks.Length; i++)
        {
            GameObject c = Instantiate(trackCardPrefab, trackList);
            c.transform.Find("Picture").GetComponent<Image>().sprite = tracks[i].Picture;
            c.transform.Find("Name").GetComponent<TMP_Text>().text = tracks[i].DisplayName.ToUpper();
            int n = i;
            c.GetComponent<Button>().onClick.AddListener(() => chosenTrack = n);

            // locked or open, and the records
            bool isOpen = save.IsOpen(tracks[i].Id);
            c.GetComponent<Button>().interactable = isOpen;
            c.transform.Find("Lock").gameObject.SetActive(!isOpen);
            TrackRecord record = save.RecordFor(tracks[i].Id);
            if (record.bestLap > 0f)
                c.transform.Find("Record").GetComponent<TMP_Text>().text = "Best lap " + TimeText.Format(record.bestLap);
            else
                c.transform.Find("Record").GetComponent<TMP_Text>().text = "No times yet";
        }

        // the last kart
        for (int i = 0; i < karts.Length; i++)
            if (karts[i].DisplayName == save.lastKart)
                chosenKart = i;

        // kart buttons
        cards[0].GetComponent<Button>().onClick.AddListener(() => chosenKart = 0);
        cards[1].GetComponent<Button>().onClick.AddListener(() => chosenKart = 1);
        cards[2].GetComponent<Button>().onClick.AddListener(() => chosenKart = 2);
    }

    void Update()
    {
        // show the karts
        for (int i = 0; i < 3; i++)
        {
            cards[i].transform.Find("Picture").GetComponent<Image>().sprite = karts[i].Picture;
            cards[i].transform.Find("Name").GetComponent<TMP_Text>().text = karts[i].DisplayName.ToUpper();
            string s = "";
            s = s + "Speed: " + karts[i].TopSpeed + "\n";
            s = s + "Acceleration: " + karts[i].Acceleration + "\n";
            s = s + "Grip: " + karts[i].Grip + "\n";
            s = s + "Weight: " + karts[i].Mass;
            cards[i].transform.Find("Stats").GetComponent<TMP_Text>().text = s;
            if (i == chosenKart)
                cards[i].transform.Find("Frame").gameObject.SetActive(true);
            else
                cards[i].transform.Find("Frame").gameObject.SetActive(false);
        }

        // show the tracks
        for (int i = 0; i < trackList.childCount; i++)
        {
            if (i == chosenTrack)
                trackList.GetChild(i).Find("Frame").gameObject.SetActive(true);
            else
                trackList.GetChild(i).Find("Frame").gameObject.SetActive(false);
        }
    }

    // go button
    public void Go()
    {
        RaceSetup.Kart = karts[chosenKart];
        RaceSetup.Track = tracks[chosenTrack];
        save.lastKart = karts[chosenKart].DisplayName;
        SaveSystem.Save(save);
        SceneManager.LoadScene(tracks[chosenTrack].SceneName);
    }
}
```

3. Open the Garage scene: every field still filled in, under its new names. Save the scene
   (**Ctrl+S** or **Cmd+S**): it's written with the new names now. Play through the
   Garage to a race: as before. Commit: *Rename the Garage's fields*.

### Do it — step 2: cards that show themselves

4. A bar for each number. In `Scripts/UI`, `StatBar.cs`:

```csharp:StatBar.cs
using UnityEngine;
using UnityEngine.UI;

// A stat bar on a Kart Card: a fill that slides from empty to full.
public class StatBar : MonoBehaviour
{
    [SerializeField] Image fill;        // Image Type: Filled, Horizontal

    public void Show(float share)
    {
        fill.fillAmount = Mathf.Clamp01(share);
    }
}
```

5. `KartStats` says how full each bar is: a kart's number as a share of the most any kart
   has. Replace `KartStats.cs`, finished:

```csharp:KartStats.cs
using UnityEngine;

// One kart's numbers, kept in an asset: Balanced, Speedy and Heavy each have
// one, and each kart variant points at its own. A KartStats asset is read-only
// data. The kart's speed, boost and laps live on its components, never in here.
[CreateAssetMenu(fileName = "Kart Stats", menuName = "Pocket Karts/Kart Stats")]
public class KartStats : ScriptableObject
{
    // The Garage's stat bars are full at these.
    const float MostSpeed = 26f;
    const float MostAcceleration = 15f;
    const float MostGrip = 10f;
    const float MostMass = 240f;

    [SerializeField] string displayName = "Balanced";
    [SerializeField] Sprite picture;

    [Header("Driving")]
    [SerializeField] float topSpeed = 22f;          // metres a second
    [SerializeField] float acceleration = 14f;      // metres a second, every second
    [SerializeField] float turnRate = 110f;         // degrees a second, at full steer
    [SerializeField] float grip = 8f;               // how fast sliding sideways is stopped
    [SerializeField] float driftGrip = 1.5f;        // the same, while drifting
    [SerializeField] float mass = 150f;             // kilograms

    [Header("Boost")]
    [SerializeField] float boostSpeed = 8f;         // added to the top speed
    [SerializeField] float boostTime = 1.5f;        // seconds, from a full meter

    public string DisplayName { get { return displayName; } }
    public Sprite Picture { get { return picture; } }
    public float TopSpeed { get { return topSpeed; } }
    public float Acceleration { get { return acceleration; } }
    public float TurnRate { get { return turnRate; } }
    public float Grip { get { return grip; } }
    public float DriftGrip { get { return driftGrip; } }
    public float Mass { get { return mass; } }
    public float BoostSpeed { get { return boostSpeed; } }
    public float BoostTime { get { return boostTime; } }

    // For the Garage's bars: each number as a share of the most any kart has, 0 to 1.
    public float SpeedShare { get { return topSpeed / MostSpeed; } }
    public float AccelerationShare { get { return acceleration / MostAcceleration; } }
    public float GripShare { get { return grip / MostGrip; } }
    public float WeightShare { get { return mass / MostMass; } }
}
```

6. In `Scripts/UI`, `KartCard.cs`:

```csharp:KartCard.cs
using TMPro;
using UnityEngine;
using UnityEngine.UI;

// One kart in the Garage: its picture, its name and four stat bars, all read
// from its KartStats asset. The chosen card shows a frame.
public class KartCard : MonoBehaviour
{
    [SerializeField] KartStats stats;
    [SerializeField] Image picture;
    [SerializeField] TMP_Text nameText;
    [SerializeField] StatBar speedBar;
    [SerializeField] StatBar accelerationBar;
    [SerializeField] StatBar gripBar;
    [SerializeField] StatBar weightBar;
    [SerializeField] GameObject chosenFrame;
    [SerializeField] Button button;

    public KartStats Stats { get { return stats; } }
    public Button Button { get { return button; } }

    void Start()
    {
        picture.sprite = stats.Picture;
        nameText.text = stats.DisplayName.ToUpper();
        speedBar.Show(stats.SpeedShare);
        accelerationBar.Show(stats.AccelerationShare);
        gripBar.Show(stats.GripShare);
        weightBar.Show(stats.WeightShare);
    }

    public void SetChosen(bool isChosen)
    {
        chosenFrame.SetActive(isChosen);
    }
}
```

The card shows itself once, in `Start`: picture, name, four bars. Nothing in `Update`.

7. `TrackCard.cs`:

```csharp:TrackCard.cs
using TMPro;
using UnityEngine;
using UnityEngine.UI;

// One track in the Garage: its picture, its name and your records on it, or a
// lock and what opens it. The Garage makes one for each track, in code.
public class TrackCard : MonoBehaviour
{
    [SerializeField] Image picture;
    [SerializeField] TMP_Text nameText;
    [SerializeField] TMP_Text recordText;
    [SerializeField] GameObject lockCover;
    [SerializeField] TMP_Text lockText;
    [SerializeField] GameObject chosenFrame;
    [SerializeField] Button button;

    public Button Button { get { return button; } }

    // The record is null when the track has none yet.
    public void Show(TrackInfo track, TrackRecord record, bool isOpen)
    {
        picture.sprite = track.Picture;
        nameText.text = track.DisplayName.ToUpper();
        lockCover.SetActive(!isOpen);
        button.interactable = isOpen;
        if (!isOpen)
        {
            lockText.text = $"Top three on {track.OpenedBy.DisplayName}";
            recordText.text = "";
        }
        else if (record == null)
        {
            recordText.text = "No times yet";
        }
        else
        {
            recordText.text = $"Best lap {TimeText.Format(record.bestLap)}\nBest race {TimeText.Format(record.bestRace)}";
        }
    }

    public void SetChosen(bool isChosen)
    {
        chosenFrame.SetActive(isChosen);
    }
}
```

8. The **Stat Bar** prefab: an **Image** `Stat Bar` (220 × 16, `0E141C` at alpha 204) with
   **StatBar**, and inside it an Image `Fill` (212 × 10, `UISprite`, gold) with **Image
   Type** **Filled**, **Fill Method** **Horizontal**: drag it into **Fill**. Into
   `Prefabs/UI`.
9. On each kart card in the Garage: delete the `Stats` text, and in its place four rows,
   a label (*Speed*, *Acceleration*, *Grip*, *Weight*, 22, grey) and a `Stat Bar`. Add
   **KartCard**, with its **Stats** asset, and drag in the picture, the name, the four
   bars, the frame and the card's own Button.
10. On `Prefabs/UI/Track Card`: inside `Lock`, under `LOCKED`, a text `Lock Text` (26,
    cream, *Top three on Meadow Loop*). Add **TrackCard**: picture, name, record, **Lock Cover** `Lock`,
    **Lock Text**, frame and Button.

### Do it — step 3: the Garage only chooses

11. Replace `GarageScreen.cs`, finished:

```csharp:GarageScreen.cs
using System.Collections.Generic;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

// The Garage: choose a kart and a track, then Go. The three Kart Cards are in
// the scene; the Track Cards are made in code, one for each TrackInfo asset,
// with your records from the save file. Every card's button gets a listener of
// its own: a lambda that remembers which kart or track the card shows.
public class GarageScreen : MonoBehaviour
{
    [SerializeField] SceneFader fader;
    [SerializeField] KartCard[] kartCards;
    [SerializeField] TrackInfo[] tracks;            // in the order they open
    [SerializeField] TrackCard trackCardPrefab;
    [SerializeField] Transform trackList;
    [SerializeField] TMP_Text modeText;
    [SerializeField] Button goButton;

    readonly List<TrackCard> trackCards = new List<TrackCard>();
    SaveData save;
    KartStats chosenKart;
    TrackInfo chosenTrack;

    void Start()
    {
        save = SaveSystem.Load();
        modeText.text = RaceSetup.Mode == RaceMode.Race ? "RACE" : "TIME TRIAL";

        chosenKart = kartCards[0].Stats;
        foreach (KartCard card in kartCards)
        {
            card.Button.onClick.AddListener(() => ChooseKart(card.Stats));
            if (card.Stats.DisplayName == save.lastKart)
            {
                chosenKart = card.Stats;
            }
        }

        Dictionary<string, TrackRecord> records = save.RecordsById();
        foreach (TrackInfo track in tracks)
        {
            TrackCard card = Instantiate(trackCardPrefab, trackList);
            TrackRecord record;
            records.TryGetValue(track.Id, out record);
            card.Show(track, record, save.IsOpen(track.Id));
            card.Button.onClick.AddListener(() => ChooseTrack(track));
            trackCards.Add(card);
        }

        // The track raced last, if it's still open; otherwise the first.
        chosenTrack = tracks[0];
        if (RaceSetup.Track != null && save.IsOpen(RaceSetup.Track.Id))
        {
            chosenTrack = RaceSetup.Track;
        }
        ShowChoices();
    }

    public void Go()
    {
        RaceSetup.Kart = chosenKart;
        RaceSetup.Track = chosenTrack;
        save.lastKart = chosenKart.DisplayName;
        SaveSystem.Save(save);
        goButton.interactable = false;
        fader.FadeTo(chosenTrack.SceneName);
    }

    void ChooseKart(KartStats stats)
    {
        chosenKart = stats;
        ShowChoices();
    }

    void ChooseTrack(TrackInfo track)
    {
        chosenTrack = track;
        ShowChoices();
    }

    void ShowChoices()
    {
        foreach (KartCard card in kartCards)
        {
            card.SetChosen(card.Stats == chosenKart);
        }
        for (int i = 0; i < tracks.Length; i++)
        {
            trackCards[i].SetChosen(tracks[i] == chosenTrack);
        }
    }
}
```

Read it against the list from step 1: every row is gone. Look closely at the lambdas:
`card.Button.onClick.AddListener(() => ChooseKart(card.Stats))` gives each card's button
a listener of its own, which **remembers** which card it was made for: the loop
variable, captured. No index to keep in step with a second array, no `3`.

12. In the Garage scene, the `Garage`'s new fields: **Fader**, **Kart Cards** (the three
    KartCards), **Tracks**, **Track Card Prefab**, **Track List**, **Mode Text** and **Go
    Button**. `GO!` still calls **GarageScreen → Go**. Play through the Garage again.
    Commit: *Make the Garage's cards show themselves*.

### Do it — the bug

13. While you read the intern's code, did you see it? `save.RecordFor(tracks[i].Id)`, in a
    loop that only **shows** records. Read `RecordFor` in `SaveData`: when a track has no
    record, it **makes** one and adds it to the save. And the intern's `Go` saved the
    whole save. So just looking at the Garage wrote an empty record for every track
    into `pocket-karts.json`. Harmless today, but a method that changes what it was only
    asked to read is a trap for the next programmer.
14. Your new `Start` uses `save.RecordsById()`, which only reads, and `TryGetValue`, which
    leaves `record` null when there's none, and `TrackCard.Show` already says *No times
    yet* for null. The bug went with the rewrite. Prove it: **Delete Save** in Settings,
    open the Garage, press **GO!**, and look at `pocket-karts.json`: no records at all
    until a race finishes.

### Test it

- The Garage looks the same, with bars instead of numbers, and works the same: the last
  kart is picked, locked tracks are locked, the records show.
- **GO!** fades to the track now, like every other screen.
- Chapter 18's Profiler again, in the Garage: `GarageScreen` makes no garbage between
  clicks.

### Commit

Each step was committed. Look at the History: three commits, each small enough to
read.

### Challenge

`KartCard` and `TrackCard` both have a `chosenFrame` and a `SetChosen` that does the same
thing. Is that worth a base class, `Card`? Write down one reason for and one against.
(C# 6 and C# 18 both have something to say.)

## Chapter 20 — Break It, Then Fix It

**Goal:** Level 4's common mistakes, made on purpose, one at a time: read the Console's
message, find the cause, fix it, and use Git to undo what you did. Do this chapter on a
branch, `breaking`, and delete it at the end.

### Idea — read the message, then the code

C# 19 gave the method: the file and line, the code (`CS0534`), the message;
then the code at that line. For a runtime error, the **stack trace**: the line at the top
is where it happened, the lines below are how the game got there.

### Do it — compile errors

Make each mistake, read the Console, and then **Discard changes** in GitHub Desktop
(right-click the file) to undo it.

1. **Delete `OnRacerEntered` from `BoostPad`.**

```
BoostPad.cs(6,14): error CS0534: 'BoostPad' does not implement inherited abstract member 'TrackTrigger.OnRacerEntered(IRacer)'
```

An abstract member is a promise every subclass must keep. Put it back.

2. **Misspell it:** `protected override void OnRacerEnterd(IRacer racer)`.

```
BoostPad.cs(10,29): error CS0115: 'BoostPad.OnRacerEnterd(IRacer)': no suitable method found to override
BoostPad.cs(6,14): error CS0534: 'BoostPad' does not implement inherited abstract member 'TrackTrigger.OnRacerEntered(IRacer)'
```

`override` says *there's a method like this in my base class*; there isn't one called
`OnRacerEnterd`. And the real one is missing again, so CS0534 comes back too: one typo,
two errors.

3. **Delete `CompleteLap` from `GhostRunner`.**

```
GhostRunner.cs(10,43): error CS0535: 'GhostRunner' does not implement interface member 'IRacer.CompleteLap()'
```

An interface is a contract: a class that signs it must have every member.

4. **In `RacingLine`'s `QueueFrom`, write `TrackTrigger trigger = new TrackTrigger();`**
   anywhere.

```
RacingLine.cs(16,32): error CS0144: Cannot create an instance of the abstract type or interface 'TrackTrigger'
```

There's no such thing as a plain track trigger: only checkpoints, pads and mud. (And a
MonoBehaviour is never made with `new` anyway: `AddComponent`, or `Instantiate` a
prefab.)

5. **In `KartSounds`' `OnBoosted`, write `kart.Boosted();`**, as if to boost again.

```
KartSounds.cs(51,14): error CS0070: The event 'KartController.Boosted' can only appear on the left hand side of += or -= (except when used from within the type 'KartController')
```

Only the class that owns an event may raise it. Others subscribe and unsubscribe: that's
what makes it an *event*, and not a field anyone could call.

### Do it — runtime errors

6. **Forget to unsubscribe.** In `PauseMenu`, delete the line
   `pauseAction.action.performed -= OnPausePressed;` from `OnDisable`. Play from the
   **Menu**, race Meadow Loop, pause and **Quit to Menu**, race again, and press **Esc**:

```
MissingReferenceException while executing 'performed' callbacks of 'Drive/Pause[/Keyboard/escape,/Keyboard/p]'
MissingReferenceException: The object of type 'UnityEngine.GameObject' has been destroyed but you are still trying to access it.
Your script should either check if it is null or you should not destroy the object.
```

(The keys in the brackets are the ones plugged in.) Read the stack trace: `PauseMenu.Pause
()`, called from `PauseMenu.OnPausePressed`. The **first** race's `PauseMenu`, destroyed
with its scene, is still subscribed: the action is an **asset**, and assets outlive
scenes. Its handler runs, and reaches for its panel, which was destroyed with it. The fix
is the line you deleted: *subscribe in `OnEnable`, unsubscribe in `OnDisable`, always
both*. Discard the change.

7. **Leave a field empty.** In `Prefabs/Race Kit`, clear `PauseMenu`'s **Settings Panel**
   field (select it, **Delete**). Play, pause, **Resume**:

```
UnassignedReferenceException: The variable settingsPanel of PauseMenu has not been assigned.
You probably need to assign the settingsPanel variable of the PauseMenu script in the inspector.
```

Unity names the field and the script for you. Put it back with **Ctrl+Z**, or by
discarding the prefab's changes in GitHub Desktop.

8. **The stale static**, from Chapter 12: comment out the `[RuntimeInitializeOnLoadMethod]`
   line in `RaceSetup`, race **Lighthouse Cliffs** from the Garage, stop, then play the
   `Meadow Loop` scene on its own. No warning, and the HUD and the Results think you're
   at Lighthouse Cliffs: `RaceSetup.Track` kept last Play's value. Discard the change.

### Do it — undo a commit

9. Make a mistake *and commit it*: in `AIDriver`, set `SharpCornerSpeed` to `30f`, and
   commit *Make the rivals braver* on your branch. Play: the rivals take every corner
   flat out and fly into the banks.
10. In GitHub Desktop's **History**, right-click that commit → **Revert Changes in
    Commit**. A new commit undoes the old one; the history keeps both, so a team can see
    what happened. Play: the rivals brake again.
11. Switch back to `main`, and delete the `breaking` branch.

### Commit

Nothing to commit on `main`. Everything you broke stayed on the branch.

### Challenge

Make a mistake for a friend: on a branch of your own, break one thing (a compile error or
a runtime one), and commit it. Swap computers. Find each other's mistake from the Console
alone, and fix it.

## Chapter 21 — Ship It

**Goal:** Pocket Karts built for the **web**, playable on itch.io with a keyboard, a
gamepad or a finger, and for **your computer** (Windows or Mac), with a Quit button. Your
records and ghosts are saved in both. A **release tag** in Git marks the version you
shipped.

### Idea — one project, two builds

| | Web (WebGL) | PC (Windows or Mac) |
| --- | --- | --- |
| Played | in a browser, on itch.io | as an app |
| Quit button | hidden: a web page can't close itself | shown |
| The save files and PlayerPrefs | kept by the browser, for that site | in the player's own folders |
| Input | keyboard, gamepad, touch | keyboard, gamepad |
| The Audio Mixer | volumes only: no muffle when paused, no ducking | all of it |

`MainMenu` already hides **Quit** on the web, and `TouchControls` shows the stick and
buttons only on a touch screen.

### Do it — the player settings

1. **Edit → Project Settings → Player**: **Company Name** *Lantern Hill Games*,
   **Product Name** *Pocket Karts*. The product name is the app's name, and part of the
   save files' folder: change it, and the game looks for its saves somewhere new.
2. **File → Build Profiles**. The **Scene List**: `Menu`, `Garage`, `Meadow Loop`,
   `Windmill Hill`, `Lighthouse Cliffs`, `Results`, in that order, all ticked. A build
   starts with the first.

### Do it — the web build

3. In **Build Profiles**, select **Web**, and **Switch Platform** (it takes a while: every
   texture and model is imported again for the web).
4. In the Web profile's **Player Settings**, **Publishing Settings**: **Compression
   Format** **Disabled** (itch.io serves the files as they are, and a compressed build
   would need the server's help). Under **Resolution and Presentation**, **Default Canvas
   Width** 1280 and **Height** 720.
5. **Build**, into a new folder, `Builds/Web` (it's in the `.gitignore`: builds stay out of
   Git). Zip the **contents** of `Builds/Web`, so `index.html` is at the top of the zip.
6. On itch.io: **Upload new project**, **Kind of project: HTML**, upload the zip, tick
   **This file will be played in the browser**, and set the viewport to 1280 × 720. Save,
   and open the page.

### Test it — the web build

- The Menu fades in; there's no **Quit**. Race Meadow Loop and finish in the top three.
- Close the tab, open the page again: Windmill Hill is open, and your best lap is on the
  card. The browser kept your save.
- Pause: the menu comes up, and the music goes on at full brightness. That's Chapter 17's
  note: on the web, only the mixer's volumes work. The volume sliders do.
- On a phone or a tablet: the stick and the buttons appear. Drive with your thumbs.
- In your browser's settings, clear the site's data: back to the first run.

### Do it — the PC build

7. In **Build Profiles**, select **Windows** or **macOS** (whichever you're on), **Switch
   Platform**, and **Build** into `Builds/PC`.
8. Run it: **Quit** is there; a gamepad drives; pausing muffles the sound. The saves live
   in the player's own folders (on a Mac, `~/Library/Application Support/Lantern Hill
   Games/Pocket Karts`). The company name is part of that path, so the records you made in
   the Editor before step 1 are in a `DefaultCompany` folder instead.

### Do it — tag the release

9. Commit everything: *Ship version 1.0*. In GitHub Desktop's **History**, right-click
   that commit → **Create Tag…**, `v1.0`. **Push origin**, and push the tag when it asks.
   On GitHub, your repository's **Releases** and **Tags** show `v1.0`: whatever happens to
   `main` next, anyone can get back the exact game you shipped.

### Commit

*Ship version 1.0*, tagged `v1.0`.

### Challenge

Add a version number to the Menu, from **Player Settings → Version** (read it in code with
`Application.version`), and ship 1.0.1 with one small improvement of your own (a fourth
kart? a mph toggle on the HUD itself? a horn?), tagged `v1.0.1`.

# Part 6 — The Exam

## C# 20 — The Associate Exam

**Goal:** you know what the **Unity Certified Associate: Programmer** exam covers, where
in this course you learned each part, how its questions are written, and how to spend
your time on the day and in the two weeks before it (Associate: Programming, UI,
Debugging and Assets — all four domains).

### Idea — the exam

The **Unity Certified Associate: Programmer** exam is Unity's certificate for a
programmer who's ready for a first job: someone who can work in a team's project, read
and plug in code they didn't write, follow the team's standards, find bugs, and use
Unity's assets and tools. It's the next step after the User exam.

You take it the same way, on a computer, in a set time. Most questions give you some
code, a Unity window or a short description, and answers to choose from. It's based on
**Unity 6**, and you can take it in English, Chinese (Simplified and Traditional),
Japanese, Korean or Spanish (Latin America).

The number of questions, the time, the pass mark and the price are shown when you book,
and they change from time to time: check them with your trainer before you book. Unity
also publishes an **official practice test**, to take before the real one.

### Idea — what it covers, and where you learned it

The exam has four **domains**: Programming, UI, Debugging and Assets. Every objective
has a place in this course:

| Domain | Objective | Where you learned it |
| --- | --- | --- |
| Programming | Evaluate code for integration into a system architected by a lead | C# 10, C# 8 |
| Programming | Apply coding standards set by senior programmers | C# 18; Level 3's naming conventions |
| Programming | Determine code for a specified interaction or logic | Levels 1–4: every chapter; C# 6, C# 4 |
| Programming | Implement transitions between scenes | C# 12 |
| Programming | Save data between scenes and sessions (static, PlayerPrefs) | C# 11, C# 12, C# 14 |
| Programming | Use Unity API methods, given the API docs | Level 2: the Unity docs; C# 14, C# 5 |
| Programming | Choose GameObject properties, scripts and components for a task | Levels 1 and 2; C# 2, C# 9 |
| Programming | Inheritance vs. interfaces | C# 6, C# 8 |
| Programming | Choose data structures: lists, arrays, dictionaries | Level 2; C# 7 |
| Programming | Choose data types: floats, bools, strings | Level 2; C# 7 |
| Programming | Build to WebGL or PC | Level 1; the last of your game's build chapters |
| UI | Lay out UI with anchors, pivots and groups | C# 9 |
| UI | Display data in UI elements | Levels 1 and 3; C# 9 |
| UI | Respond to user input with the UnityEvent system | Level 2: UI events; C# 4, C# 9 |
| Debugging | Use debug messages to find why code fails | Levels 0 to 3; C# 19 |
| Debugging | Identify the cause of a compile error | Levels 0 and 3; C# 19 |
| Debugging | Identify null-variable errors | Level 2; Level 3's finding errors; C# 13 |
| Debugging | Refactor code to fit coding standards | C# 18 |
| Debugging | Select profiling tools for performance problems | C# 17, C# 15 |
| Assets | Use prefabs in a scene | Level 1; C# 2 |
| Assets | Change nested prefabs and prefab variants, and predict the outcome | C# 2 |
| Assets | Primary purposes of version control | C# 1 |

The **Check Yourself** part at the end of this book has two exam-style questions on
every one of them, a timed practice paper, and a cheat sheet.

### Idea — what Unity expects before you sit it

Unity lists these as the exam's prerequisites. You've done every one:

| Unity expects | Where you did it |
| --- | --- |
| 2–3 semesters of Unity classwork, or the equivalent | Levels 0 to 4 of this course |
| a diverse range of Unity projects | a different game at every level since Level 0, each one built and published |
| importing assets or code from the Asset Store or the Package Manager, and resolving conflicts | C# 16, C# 10 |
| debugging non-complex problems | Levels 2 and 3; C# 19, C# 17 |
| interpreting, integrating and modifying well-documented existing code | C# 10, C# 18 |
| basic scene management | C# 12 |
| creating and using prefabs | Level 1; C# 2 |
| deploying a basic build | a published build at the end of every level |

### Idea — how the questions are written

| The question says… | It wants… | Practise with |
| --- | --- | --- |
| "What does this code print?" | a trace on paper, line by line: which override runs, what a queue gives back first, what a dictionary holds | C# 6, C# 7 |
| "Which code implements…?" | the option that compiles **and** does the whole task: often two of them compile | every chapter's Do it |
| "What's the cause of this error?" | the error's code, the line, and the one thing on it that's wrong | C# 19 |
| "Which tool or component should you use…?" | the one made for that job: the Profiler for slow frames and garbage, the Frame Debugger for draw calls, the Memory Profiler for memory | C# 17, C# 9 |
| "What happens when you change this prefab?" | the change followed down from the base to its variants and instances, stopping at every override | C# 2 |
| "Which version follows the standard…?" | the option that keeps every rule the question gives, not your own habits | C# 18 |
| "Which of these integrates correctly?" | the option that uses the module's contract, and leaves the module unchanged | C# 10 |

### Idea — the traps, collected

| Trap | Remember |
| --- | --- |
| `Add` for a key that's already in a dictionary | it throws; `dict[key] = value` replaces |
| reading `dict[key]` for a key that isn't there | it throws; `TryGetValue` doesn't |
| `Dequeue` or `Pop` | takes the item out; `Peek` only looks |
| a dictionary's order | it hasn't got one |
| money in a `float`, compared with `==` | it drifts: count whole coins in an `int` |
| an override with different parameters | CS0115: it overrides nothing |
| `new` on an abstract class or an interface | CS0144: make a class built on it |
| `myEvent = handler` outside the event's class | CS0070: only `+=` and `-=` |
| a `static` field | survives loading a new scene, and with domain reload off, even a new Play |
| game data in `PlayerPrefs` | PlayerPrefs is for small settings; game data goes in a file |
| a `Dictionary` and `JsonUtility` | it can't save one: save a list or an array |
| a ScriptableObject changed while playing | in the Editor, the change stays in the asset |
| a change to a base prefab | reaches every variant and instance, except where one overrides that property |
| `Time.timeScale = 0` | stops physics and `deltaTime`, not `Update` |

### Idea — reading a question under time

- **Read the last line first.** It's the real question: *which line*, *what's printed*,
  *which is NOT*. Then read the code, knowing what you're looking for.
- **Watch for NOT, BEST, FIRST and MOST.** They turn the question round.
- **Eliminate.** Two answers are usually clearly wrong. Of the last two, find the word
  that makes one of them false.
- **Don't overthink.** The exam asks about what Unity programmers do every day, not
  compiler puzzles. If an answer needs a rare rule to be right, it's probably wrong.
  Change an answer only when you've found a reason, not a feeling.
- **Flag and return.** Mark a hard question, answer the easy ones, and come back at
  the end. An unanswered question can't score.
- **Know your pace.** Before the day, divide the time by the number of questions. At
  the halfway point of the time, you should be about halfway through.

### Idea — one question, worked through

```csharp
Queue<string> drawPile = new Queue<string>();
drawPile.Enqueue("Spark");
drawPile.Enqueue("Heal");
drawPile.Enqueue("Shield");
Stack<string> discard = new Stack<string>();
discard.Push(drawPile.Dequeue());
discard.Push(drawPile.Dequeue());
Debug.Log($"{drawPile.Peek()} {discard.Peek()} {discard.Count + drawPile.Count}");
```

*What does this code print?* A. `Shield Heal 3` B. `Spark Heal 3` C. `Shield Spark 3`
D. `Shield Heal 2`

The last line asks for a trace, so trace it, on paper, a line at a time:

| After | `drawPile`, front first | `discard`, top first |
| --- | --- | --- |
| the three `Enqueue`s | Spark, Heal, Shield | (empty) |
| the first `Push(Dequeue())` | Heal, Shield | Spark |
| the second | Shield | Heal, Spark |

`Peek` only looks, so nothing moves while the message is built: it prints
`Shield Heal 3`, answer **A**. D forgets that `Peek` leaves the card where it is; B
and C mix up which end of each collection is the front. Each wrong answer is one
mistake away from the right one, which is how the exam writes them.

### Idea — the last two weeks

| Day | Do |
| --- | --- |
| 1 | the official practice test, timed, with no notes; list every objective you missed |
| 2–3 | Programming: inheritance and interfaces, collections and types, events; write an example of each from memory |
| 4 | scenes and saving: a transition, static data, PlayerPrefs, a JSON file |
| 5 | UI: anchors, pivots and layout groups; UnityEvents |
| 6 | Debugging: the compile-error drill, null references, which profiling tool |
| 7 | Assets: predict three prefab changes, then check them in Unity; Git's purposes |
| 8 | the Check Yourself questions for every objective, on paper |
| 9–10 | your two weakest objectives from day 1: reread their chapters, and redo their Do it |
| 11 | the practice paper, timed, as if it were the real exam |
| 12 | every mistake from day 11: why the right answer is right, and each wrong one wrong |
| 13 | a light read of the cheat sheet and the traps; check your booking and what to bring |
| 14 | rest: no new topics |

### Do it

1. For each objective in the first table, write one line of code or one sentence that
   shows it. Where you can't, go back to the chapter it names.
2. For each kind of question, write the first thing you'd do when you see one.
3. Take the practice paper at the end of this book with a timer, then mark it, and put
   your two weakest objectives into days 9 and 10 of your plan.
4. Write your own two-week plan on a calendar, with the exam date at the end.

### Challenge

Write an exam question of your own for each domain: a stem, four answers and one right
one, with three wrong answers that are each *nearly* right. Swap with a partner, answer
each other's, and explain why each wrong answer is wrong.

## Exam-style questions

These questions are written the way the **Unity Certified Associate: Programmer** exam
writes its own: two for each of its 22 objectives, domain by domain, with a short name
for the objective in brackets after each question (C# 20 lists them all). Answer
on paper first, then check the answers. The practice paper after them is a timed
rehearsal.

**Q1.** (Programming: integrating a lead's code) The lead's Tutorial module points an
arrow at what the player should look at next. Its README says: *"Implement
`IHighlightable` (`string Hint { get; }` and `void Highlight(bool isOn);`) on the
object. The module finds it with `GetComponentInParent<IHighlightable>()`."* Which
juice stand integrates correctly?

- A. `class JuiceStand : MonoBehaviour`, with a public `Hint` and a public `Highlight`
- B. `class JuiceStand : MonoBehaviour, IHighlightable`, with a public `Hint` and a public `Highlight`
- C. `class JuiceStand : IHighlightable`, with a public `Hint` and a public `Highlight`
- D. `class JuiceStand : MonoBehaviour, IHighlightable`, with a public `Hint` and `public override void Highlight(bool isOn)`

**Q2.** (Programming: integrating a lead's code) The lead's architecture says: *"Parts
of the game talk through C# events. No part finds another by name."* Which line of this
teammate's script breaks it, and what should replace it?

```csharp
public class ComboCounter : MonoBehaviour
{
    int combo;

    public event Action<int> ComboChanged;

    public void RegisterHit()
    {
        combo++;
        ComboChanged?.Invoke(combo);
        GameObject.Find("Combo Text").GetComponent<TMP_Text>().text = $"x{combo}";
    }
}
```

**Q3.** (Programming: coding standards) The style guide says: *"C# events are named for
what happened, in the past tense, without `On`. Methods that handle them start with
`On`."* Which pair follows it?

- A. `public event Action OnLapFinished;`, handled by `void LapFinished()`
- B. `public event Action FinishLap;`, handled by `void HandleFinishLap()`
- C. `public event Action LapFinished;`, handled by `void OnLapFinished()`
- D. `public event Action lapFinished;`, handled by `void onLapFinished()`

**Q4.** (Programming: coding standards) The guide says: *"Inspector fields are private
and serialized, without the word `private`. A `bool` reads as a question."* Which
follows it?

- A. `[SerializeField] private bool isLocked;`
- B. `public bool isLocked;`
- C. `[SerializeField] bool locked;`
- D. `[SerializeField] bool isLocked;`

**Q5.** (Programming: code for a task) What does this print?

```csharp
public class Pickup
{
    public virtual string Use()
    {
        return "Picked up";
    }
}

public class Potion : Pickup
{
    public override string Use()
    {
        return base.Use() + ", healed";
    }
}

public class BigPotion : Potion
{
    public override string Use()
    {
        return base.Use() + " twice";
    }
}
```

```csharp
Pickup item = new BigPotion();
Debug.Log(item.Use());
Debug.Log(item is Potion);
```

**Q6.** (Programming: code for a task) `PlayerHealth` has `public event Action Died;`. A
death sound must play when the player dies, and stop listening when it's switched off.
Which code goes in the sound's script?

- A. `player.Died = OnDied;` in `Start`
- B. `player.Died += OnDied;` in `Update`
- C. `player.Died += OnDied;` in `OnEnable`, and `player.Died -= OnDied;` in `OnDisable`
- D. `player.Died += OnDied;` in `OnEnable`, and `player.Died -= () => OnDied();` in `OnDisable`

**Q7.** (Programming: scene transitions) A **Results** button calls
`SceneManager.LoadScene("Results");`, and the Console says this. What's the fix?

```
Scene 'Results' couldn't be loaded because it has not been added to the active build profile or shared scene list or the AssetBundle has not been loaded.
```

**Q8.** (Programming: scene transitions) A pause screen sets `Time.timeScale = 0f`, and
its **Menu** button calls `SceneManager.LoadScene("Menu")`. In the Menu, the buttons
work, but the title's animation and the falling leaves don't move. Why?

- A. The Menu isn't in the Scene List.
- B. Loading a scene doesn't reset `Time.timeScale`.
- C. The Animator and the particles were destroyed with the old scene.
- D. `LoadScene` only loads the UI.

**Q9.** (Programming: saving data) Where does each belong: in a `static` property, in
PlayerPrefs or in a JSON file? 1. the track chosen on the menu, for the race scene to
read; 2. the music volume; 3. the coins, and the list of unlocked karts.

**Q10.** (Programming: saving data) `RunStats` is a static class with
`public static int Laps { get; set; }`, and the project's **Enter Play Mode Settings**
say **Reload Scene only**. A `Practice` script's `Start` runs:

```csharp
RunStats.Laps += 3;
Debug.Log($"Laps: {RunStats.Laps}");
```

You press Play, stop, and press Play again, changing no script. What does the second
Play print?

**Q11.** (Programming: the Unity API) The docs say `JsonUtility` has `public static T
FromJson<T>(string json)`: *"Create an object from its JSON representation."* `json`
holds a save file's text. Which makes a `SaveData` from it?

- A. `JsonUtility.FromJson(json)`
- B. `new SaveData(json)`
- C. `JsonUtility.FromJson<SaveData>(json)`
- D. `JsonUtility.ToJson<SaveData>(json)`

**Q12.** (Programming: the Unity API) The Input System's docs give `InputAction` the
method `public TValue ReadValue<TValue>() where TValue : struct`, which reads the
action's current value. A script has `[SerializeField] InputActionReference
steerAction;`, for a Value action whose Control Type is **Vector 2**. Which reads it?

- A. `steerAction.ReadValue<Vector2>()`
- B. `steerAction.action.ReadValue()`
- C. `steerAction.action.performed<Vector2>()`
- D. `steerAction.action.ReadValue<Vector2>()`

**Q13.** (Programming: components for a task) A full-screen black Image is the curtain
between scenes. It must fade with one value, and stop clicks while it shows. Which
component do you add to it?

- A. a Layout Element
- B. a Canvas Group
- C. a Content Size Fitter
- D. a Rect Mask 2D

**Q14.** (Programming: components for a task) Ten karts of one kind share a top speed
and a grip that a designer tunes; each kart's current speed is its own. Where does each
value belong?

- A. all three in the ScriptableObject asset
- B. all three in `static` fields
- C. top speed and grip in a ScriptableObject asset that every kart references; the current speed in a field on each kart
- D. top speed and grip in PlayerPrefs; the current speed in the asset

**Q15.** (Programming: inheritance vs. interfaces) A player, a crate and a magic door
can all be hurt, each in its own way, and share no other code. Each is a MonoBehaviour.
What's the best design?

- A. a base class, `Damageable`, that each inherits as well as `MonoBehaviour`
- B. the same `TakeDamage` code copied into all three
- C. a `static` class with a method for each kind
- D. an interface, `IDamageable`, that all three implement

**Q16.** (Programming: inheritance vs. interfaces) Which is true?

- A. A class can have one base class, and as many interfaces as it needs.
- B. A class can have several base classes, but only one interface.
- C. An interface can hold fields, and methods with bodies.
- D. A method that implements an interface's method must be marked `override`.

**Q17.** (Programming: data structures) What does this print?

```csharp
Dictionary<string, int> stock = new Dictionary<string, int>();
stock["Lemon"] = 4;
stock["Mango"] = 2;
stock["Lemon"] = 6;
stock.Remove("Mango");
stock.TryGetValue("Mango", out int mangoes);
Debug.Log($"{stock["Lemon"]} {mangoes} {stock.Count}");
```

**Q18.** (Programming: data structures) Choose a `List`, an array, a `Dictionary`, a
`Queue` or a `Stack` for each: 1. customers at a juice stand, served in the order they
came; 2. the upgrades bought, so that **Undo** takes back the latest first; 3. every
card in the game, found by its id when a save loads; 4. the four starting slots on a
grid, set in the Inspector.

**Q19.** (Programming: data types) Which type fits each best, `int`, `float`, `bool` or
`string`? 1. the coins a player has; 2. how long a lap took; 3. whether the shop is
open; 4. a card's id, such as `frost-bolt`.

**Q20.** (Programming: data types) A kart's `float health` starts at 1, and each hit
takes off 0.1. It explodes `if (health == 0f)`, but after ten hits it doesn't. Why, and
what's the best fix?

**Q21.** (Programming: builds) The menu's **Quit** button calls `Application.Quit()`. It
closes the PC build, but in the Web build the page stays open. What should the menu do?

**Q22.** (Programming: builds) The build opens straight into the **Race** scene, not the
**Menu**. What's the fix?

- A. Have the Menu open when you build.
- B. Drag the Menu to the top of the Scene List.
- C. Load the Menu from the Race's `Awake`.
- D. Rename the Menu `0`.

**Q23.** (UI: anchors, pivots and groups) A money counter must keep its size, near the
top-right corner, on a phone, a monitor and a tablet. Where do its anchors go?

- A. both at (0.5, 0.5)
- B. Min at (0, 1), Max at (1, 1)
- C. both at (1, 1)
- D. Min at (0, 0), Max at (1, 1)

**Q24.** (UI: anchors, pivots and groups) Buttons in a row along the bottom of a menu
grow to 1.2 times their size while the pointer is over them, but they grow downwards too,
off the screen. What do you change, so they grow upwards?

- A. **Pivot** to (0.5, 1)
- B. **Pivot** to (0.5, 0)
- C. the anchors to (0.5, 0)
- D. the layout group's **Child Force Expand**

**Q25.** (UI: displaying data) `stockBar` is an Image with **Image Type: Filled**;
`stock` is 3 and `capacity` is 4, both `int`s. Which line fills three quarters of it?

- A. `stockBar.fillAmount = stock / capacity;`
- B. `stockBar.fillAmount = (float)(stock / capacity);`
- C. `stockBar.fillAmount = stock;`
- D. `stockBar.fillAmount = (float)stock / capacity;`

**Q26.** (UI: displaying data) A coin counter sets `coinText.text = $"Coins: {coins}";`
in `Update`, though the coins change only a few times a minute. What's the better way?

**Q27.** (UI: UnityEvents) A shop makes a Button for each fruit in `fruits`, a
`string[]`. Each button must buy its own fruit. Which code completes the loop?

```csharp
for (int i = 0; i < fruits.Length; i++)
{
    Button button = Instantiate(buttonPrefab, buttonList);
    // ???
}
```

- A. `string fruit = fruits[i];`, then `button.onClick.AddListener(() => Buy(fruit));`
- B. `button.onClick.AddListener(() => Buy(fruits[i]));`
- C. `button.onClick.AddListener(Buy(fruits[i]));`
- D. `button.onClick = () => Buy(fruits[i]);`

**Q28.** (UI: UnityEvents) A designer wants the finish line to play a cheer and show a
panel when the race is won, and to change that later without code. What should its
script declare?

- A. `[SerializeField] UnityEvent onWon;`
- B. `public event Action Won;`
- C. `public bool hasWon;`
- D. `[SerializeField] GameObject panel;`

**Q29.** (Debugging: debug messages) Twelve karts share one script. Which line says which
kart has no fuel, and how much, and highlights the kart when you click the message?

- A. `Debug.LogWarning($"{name} starts with no fuel ({fuel}), so it can't move.");`
- B. `Debug.LogWarning($"{name} starts with no fuel ({fuel}), so it can't move.", this);`
- C. `Debug.Log("no fuel");`
- D. `Debug.LogError(this);`

**Q30.** (Debugging: debug messages) What does this print?

```csharp
string[] prices = { "4", "x", "6" };
int total = 0;
foreach (string text in prices)
{
    try
    {
        total += int.Parse(text);
        Debug.Log($"Added {text}");
    }
    catch (FormatException)
    {
        Debug.LogWarning($"Skipped {text}");
    }
}
Debug.Log($"Total: {total}");
```

**Q31.** (Debugging: compile errors) This gives two errors. What's the one cause?

```csharp
public abstract class Generator : MonoBehaviour
{
    protected abstract int Produce(int seconds);
}

public class LemonTree : Generator      // error CS0534: 'LemonTree' does not implement inherited abstract member 'Generator.Produce(int)'
{
    protected override int Produce(float seconds)   // error CS0115: 'LemonTree.Produce(float)': no suitable method found to override
    {
        return 2;
    }
}
```

**Q32.** (Debugging: compile errors) A teammate moves the shop's scripts into
`namespace JuiceWorks.Shop`. Now your `Wallet`, with `[SerializeField] ShopWindow shop;`,
gives `error CS0246: The type or namespace name 'ShopWindow' could not be found (are you missing a using directive or an assembly reference?)`.
What's the fix?

**Q33.** (Debugging: null variables) `PauseMenu` has a field
`[SerializeField] GameObject settingsPanel;`, and its `OpenSettings` runs
`settingsPanel.SetActive(true);`. Clicking **Settings** gives
`UnassignedReferenceException: The variable settingsPanel of PauseMenu has not been assigned.`
What's the cause, and the fix?

**Q34.** (Debugging: null variables) The second line throws a `NullReferenceException`,
but only when a save file holds the id `frost-bolt`. Which variable is `null`, and why?

```csharp
cardsById.TryGetValue(id, out Card card);
nameText.text = card.DisplayName;
```

- A. `nameText`: its field is empty in the Inspector.
- B. `cardsById`: a `readonly` dictionary can't be read.
- C. `DisplayName`: that card's name is empty.
- D. `card`: no card has that id, so `TryGetValue` returned `false` and left `card` as `null`.

**Q35.** (Debugging: refactoring to a standard) Which is a refactor?

- A. renaming `c` to `coins` with **Rename Symbol**
- B. fixing an unlock message that shows on every sale
- C. playing a sound on a sale
- D. raising the price from 3 to 4

**Q36.** (Debugging: refactoring to a standard) To fit the style guide, you rename a
serialized field from `s` to `stock`. What happens to the values set in the Inspector,
and how do you keep them?

**Q37.** (Debugging: profiling tools) Which would you open first for each, the Profiler,
the Frame Debugger or the Memory Profiler? 1. The frame rate drops each time a stand
sells a cup, and you want the slow method. 2. A menu is slow on phones, and you suspect
three see-through panels drawn over each other. 3. A new background added 120 MB.

**Q38.** (Debugging: profiling tools) The Profiler shows a **GC Alloc** in every frame
on `CoinLabel.Update`, which runs `label.text = "Coins: " + coins;`. Which change
removes it?

- A. `label.text = $"Coins: {coins}";`
- B. setting `label.text` only when `coins` changes
- C. turning on **Deep Profile**
- D. moving the line into `LateUpdate`

**Q39.** (Assets: prefabs in a scene) A script has `[SerializeField] Coin coinPrefab;`.
What does `Coin coin = Instantiate(coinPrefab, coinParent);` give you?

- A. the `Coin` component on a new copy, a child of `coinParent`
- B. the prefab asset itself, moved under `coinParent`
- C. a new, empty GameObject
- D. `null`, until the copy's `Start` has run

**Q40.** (Assets: prefabs in a scene) You set one Coin instance's **Value** to 5 in the
scene, and the label turns bold. What's happened, and how do you make every coin worth 5?

Questions 41 and 42 use this setup. **Tag** is a prefab with a **Background** (a Sprite
Renderer, **Color** white) and a **Price** text (**Font Size** 24). **Sale Tag** is a
variant of Tag that overrides the Background's colour to red. **Stand** is a prefab with
a Tag nested in it. The scene holds two Stands, **Stand A** and **Stand B**, and a Sale
Tag.

**Q41.** (Assets: nested prefabs and variants) In Tag's Prefab Mode, you set the
Background's **Color** to yellow. Which backgrounds in the scene turn yellow?

- A. all three
- B. only the Sale Tag's
- C. none, until you apply
- D. Stand A's and Stand B's only

**Q42.** (Assets: nested prefabs and variants) Then, in the scene, you set Stand B's
Price **Font Size** to 32, and apply it to the **Stand** prefab. Which Price texts are
now 32?

- A. only Stand B's
- B. all of them, and the Tag prefab's too
- C. Stand A's and Stand B's
- D. Stand A's, Stand B's and the Sale Tag's

**Q43.** (Assets: version control) Which is NOT one of version control's primary
purposes?

- A. a smaller, faster build
- B. history
- C. rollback
- D. working together

**Q44.** (Assets: version control) You commit a new `Coin.png`, but not
`Coin.png.meta`. A teammate pulls, and every prefab that uses the picture shows it as
missing. Why?

## Answers

| Q | Answer | Why | Review |
| --- | --- | --- | --- |
| 1 | B | A has the members, but never says it's an `IHighlightable`, so `GetComponentInParent` finds nothing. C isn't a component, so it can't be on a GameObject. D doesn't compile: an interface has nothing to override (CS0115). | C# 10 |
| 2 | the `GameObject.Find` line | The counter already announces each change: delete the line, and let a combo text subscribe to `ComboChanged`. | C# 10 |
| 3 | C | A names the event like a handler; B isn't the past tense; D isn't PascalCase. | C# 18 |
| 4 | D | A has the word `private`; B is a public field; C's `bool` isn't a question. | C# 18 |
| 5 | `Picked up, healed twice`, then `True` | The object is a `BigPotion`, so its `Use` runs, and each `base.Use()` runs the version one level up first. A big potion is a kind of potion. | C# 6 |
| 6 | C | A doesn't compile (CS0070); B subscribes again every frame, so one death plays the sound hundreds of times; D's lambda is a new method, so its `-=` takes nothing off. | C# 4 |
| 7 | — | Add the Results scene to the Scene List, in **File → Build Profiles**: code can only load a scene that's in it. | C# 12 |
| 8 | B | The time scale belongs to the whole game, not to a scene: set it back to 1 before loading. `Update` and the UI keep running; animations and particles on scaled time don't. | C# 12 |
| 9 | — | 1 a `static` property: it's for this run only. 2 PlayerPrefs: a small setting. 3 a JSON file: game data, with a list in it. | C# 14 |
| 10 | `Laps: 6` | With domain reload off, a static keeps last run's value: 3, then 3 more. A `[RuntimeInitializeOnLoadMethod]` reset fixes it. | C# 11 |
| 11 | C | A can't tell which type to make (CS0411); `SaveData` has no constructor that takes text (B); `ToJson` goes the other way, and isn't generic (D). | C# 14 |
| 12 | D | The reference isn't the action: its `.action` is (A is CS1061). B doesn't say which type to read; C: `performed` is an event. | C# 5 |
| 13 | B | A Canvas Group's **Alpha** fades it and everything under it, and **Blocks Raycasts** stops the clicks. The others lay out or clip. | C# 12 |
| 14 | C | Shared data that a designer tunes, and that doesn't change while playing, goes in an asset; what changes belongs on the object. In A, changes made while playing stay in the asset. | C# 3 |
| 15 | D | They share a capability, not code, and none is a kind of another. A is impossible: a class has one base class, and theirs is `MonoBehaviour`. | C# 8 |
| 16 | A | An interface has no fields and no bodies (C), and is implemented without `override` (D). | C# 8 |
| 17 | `6 0 1` | `stock["Lemon"] = 6` replaces the 4; Mango is removed, so `TryGetValue` gives 0; one pair is left. | C# 7 |
| 18 | — | 1 a `Queue`; 2 a `Stack`; 3 a `Dictionary<string, Card>`; 4 an array. | C# 7 |
| 19 | — | 1 `int`; 2 `float`; 3 `bool`; 4 `string`. | C# 7 |
| 20 | — | A `float` isn't exact: `0.1f` is a little more than 0.1, and ten of them don't land exactly on 0. Count whole hit points in an `int`, or check `<= 0f`. | C# 7 |
| 21 | — | Hide the button in a Web build: a page can't close the browser's tab. `quitButton.SetActive(Application.platform != RuntimePlatform.WebGLPlayer);` | your game's last chapter |
| 22 | B | A build opens with the scene at index 0, in **File → Build Profiles**. The open scene only decides where **Play** starts in the Editor (A). | C# 12 |
| 23 | C | Anchors together at a corner keep the size and the distance from that corner. B and D stretch it. | C# 9 |
| 24 | B | An element scales around its pivot: at (0.5, 0), the bottom edge stays put. A grows it downwards only; anchors don't decide how it scales. | C# 9 |
| 25 | D | Two `int`s divide to a whole number: `3 / 4` is 0 (A), and B casts too late. C sets 3: a full bar. | C# 9 |
| 26 | — | Set the text only when the coins change: the wallet raises an event, and the counter listens. Every frame makes a new string and rebuilds the Canvas, for nothing. | C# 9 |
| 27 | A | A `for` loop has one `i`, read when the button is clicked: `fruits.Length` by then, past the end, so B throws an `IndexOutOfRangeException`. The copy gives each lambda its own. C and D don't compile. | C# 4 |
| 28 | A | A UnityEvent is wired in the Inspector, so a designer can change it. B is wired in code; C checks every frame for nothing; D ties the script to one panel. | C# 4 |
| 29 | B | The second argument, `this`, is the context: click the message, and that kart lights up. | C# 19 |
| 30 | `Added 4`, `Skipped x` (a warning), `Added 6`, `Total: 10` | `int.Parse("x")` throws before its `Debug.Log` runs; the `catch` logs, and the loop goes on. | C# 13 |
| 31 | — | `Produce` takes a `float` here, and an `int` in `Generator`. So it overrides nothing (CS0115), and `Produce(int)` is still missing (CS0534). | C# 19 |
| 32 | — | Add `using JuiceWorks.Shop;` at the top of `Wallet.cs`: the class's full name is now `JuiceWorks.Shop.ShopWindow`. | C# 10 |
| 33 | — | The **Settings Panel** field was left empty in the Inspector. Drag the panel into it. | C# 13 |
| 34 | D | For a missing key, `TryGetValue` returns `false`, and the `out` variable holds its default: `null` for a class. Check the result, and warn about the id. | C# 7 |
| 35 | A | A refactor changes how code is written, never what it does. B, C and D change what the game does. | C# 18 |
| 36 | — | They're lost: Unity saves Inspector values by field name. Add `[FormerlySerializedAs("s")]`, from `UnityEngine.Serialization`, to the field. | C# 18 |
| 37 | — | 1 the Profiler; 2 the Frame Debugger; 3 the Memory Profiler. | C# 17 |
| 38 | B | A still builds a new string every frame; C only measures; D runs just as often. | C# 17 |
| 39 | A | A prefab field typed as a component gives back that component, on the new copy. | C# 2 |
| 40 | — | It's an override, kept by that instance only. Apply it: the **Overrides** drop-down → **Apply All**, or right-click **Value** and apply it to the prefab. | C# 2 |
| 41 | D | A change to Tag reaches everything built on it, but the Sale Tag's own colour, an override, wins. | C# 2 |
| 42 | C | An override applied to Stand reaches every Stand. The Sale Tag isn't a Stand, and Tag is underneath, so it doesn't change. | C# 2 |
| 43 | A | Version control keeps the project's history; it doesn't change the build. | C# 1 |
| 44 | — | The `.meta` file holds the GUID that the prefabs use to find the picture. Without it, Unity makes a new `.meta` with a new GUID. Commit an asset and its `.meta` together. | C# 1 |

## Practice paper

Twenty questions, in the exam's styles and from all four of its domains. Give yourself
**30 minutes**, with no book and no Unity, then mark it with the answers that follow.
14 or more right is a good sign you're ready; under 14, go back to the chapters for the
objectives you missed (C# 20 names them), and try again a few days later.

**P1.** What does this print?

```csharp
Queue<int> waves = new Queue<int>();
waves.Enqueue(3);
waves.Enqueue(5);
waves.Enqueue(8);
Stack<int> undo = new Stack<int>();
undo.Push(waves.Dequeue());
undo.Push(waves.Peek());
Debug.Log($"{waves.Count} {undo.Pop()} {undo.Count}");
```

**P2.** Attack, heal and shield cards each have a name, a cost and a picture, and each
does something different when it's played. Which design fits best?

- A. an interface `ICard`, with the fields copied into each class
- B. one class, with an `if` for each kind
- C. an abstract base class `Card`, with the shared fields and `public abstract void Play();`
- D. three unrelated classes

**P3.** `Scorer` declares `public event Action<int> ScoreChanged;`, and nobody may be
listening yet. Which line raises it safely?

- A. `ScoreChanged.Invoke(score);`
- B. `ScoreChanged?.Invoke(score);`
- C. `ScoreChanged = score;`
- D. `ScoreChanged += score;`

**P4.** Code adds rows to a Scroll View's **Content**. They must stack in a column, 10
units apart, and **Content** must grow with them, so that the list scrolls. What goes on
**Content**?

- A. a Grid Layout Group and a Mask
- B. a Horizontal Layout Group
- C. a Canvas Scaler
- D. a Vertical Layout Group (**Spacing** 10) and a Content Size Fitter (**Vertical Fit: Preferred Size**)

**P5.** `Vehicle` is abstract; `Kart` is built on it, and `TurboKart` on `Kart`. Which
line doesn't compile?

- A. `Vehicle vehicle = new Kart();`
- B. `Vehicle vehicle = new Vehicle();`
- C. `Kart kart = new TurboKart();`
- D. `List<Vehicle> vehicles = new List<Vehicle>();`

**P6.** A `[System.Serializable]` class has these four fields. Which does
`JsonUtility.ToJson` leave out?

- A. `public int coins;`
- B. `[SerializeField] float bestLap;`
- C. `public List<string> unlockedKarts;`
- D. `public Dictionary<string, int> trophies;`

**P7.** You make a **Gold Coin** from the **Coin** prefab with **Ctrl + D** (**Cmd + D**
on a Mac), not as a variant, and recolour it. Later you add a sparkle to Coin. What
happens to Gold Coin?

- A. nothing
- B. it gets the sparkle and keeps its colour
- C. it gets the sparkle and loses its colour
- D. it becomes a variant

**P8.** A script subscribes `boostAction.action.performed += OnBoost;` in `OnEnable`, for
an action in your own Input Actions asset. Space never calls `OnBoost`, and the Console
is empty. What's missing?

**P9.** Which is true of `SceneManager.LoadSceneAsync("Race")`?

- A. It freezes the game until Race has loaded.
- B. It keeps every object of the old scene.
- C. It loads Race while the old scene keeps running; its `progress` climbs to 0.9, then 1 as Race takes over.
- D. It can load a scene that isn't in the Scene List.

**P10.** A race timer's text changes every frame, in a Canvas with fifty other elements,
and the Profiler shows the whole Canvas rebuilt every frame. What helps most?

- A. a Canvas for every element
- B. a nested Canvas for the timer
- C. a **World Space** Canvas
- D. no Canvas Scaler

**P11.** `UpgradeButton` subscribes to a static event, `Wallet.MoneyChanged`, in
`OnEnable`, and has no `OnDisable`. Its handler runs `button.gameObject.SetActive(money >= price);`.
After **Restart** reloads the scene, the next change of money gives
`MissingReferenceException: The object of type 'UnityEngine.UI.Button' has been destroyed but you are still trying to access it.`
What's the cause, and the fix?

**P12.** A script's `Start` calls `coinPrefab.SetValue(5);`, where `coinPrefab` is a
`[SerializeField] Coin` holding the Coin prefab, then makes coins with `Instantiate`.
What happens?

- A. The prefab asset changes: in the Editor, the coins it makes are worth 5, even after Play stops.
- B. Only the first coin made is worth 5.
- C. Nothing: a prefab can't be changed from code.
- D. A compile error: a prefab field is read-only.

**P13.** A stand's `Update` is slow, but the Profiler's Hierarchy shows only
`JuiceStand.Update`, not the methods it calls. What do you switch on, briefly?

- A. the Frame Debugger
- B. **Collapse**
- C. **Error Pause**
- D. **Deep Profile**

**P14.** A finish line has `[SerializeField] UnityEvent<int> onLapCompleted;`. In its
**On Lap Completed (Int32)** list, you choose `LapText.Show(int lap)`. Where in the list
of methods, so that it receives the lap?

- A. under **Static Parameters**
- B. anywhere
- C. under **Dynamic int**
- D. nowhere: a UnityEvent can't pass a value

**P15.** You import a lead's module from a `.unitypackage`, and the Console says `error
CS0101: The namespace '<global namespace>' already contains a definition for
'Countdown'`. The module's `Countdown` and yours are different classes. What do you do?

- A. Delete the module's `Countdown`.
- B. Rename yours, and ask the module's owner for a namespace.
- C. Edit the module to use yours.
- D. Import the package again.

**P16.** Which order of `catch` blocks lets each one run?

- A. `FileNotFoundException`, then `IOException`
- B. `IOException`, then `FileNotFoundException`
- C. `Exception`, then `IOException`
- D. any order: C# picks the best fit

**P17.** Which folder stays out of a Unity project's Git repository?

- A. `Assets/`
- B. `Packages/`
- C. `ProjectSettings/`
- D. `Library/`

**P18.** You're refactoring an intern's script to fit the style guide. Which way of
working is safest?

- A. every change at once, then one test
- B. fixing the bugs you notice as you rename, in the same commit
- C. one small change at a time: save, check the Console, test, commit
- D. renaming the script's file in Finder, to save time

**P19.** What does this print?

```csharp
int cups = 7;
int stands = 2;
float price = 1.5f;
Debug.Log(cups / stands);
Debug.Log(cups / (float)stands);
Debug.Log(cups * price);
```

**P20.** Your game saves to `Application.persistentDataPath`, and the save works in the
Web build on itch.io. A player clears the site's data in their browser. What happens?

- A. The save is gone.
- B. Nothing: the save is in the game's Assets folder.
- C. The save moves to the player's Documents.
- D. Only the PlayerPrefs are deleted.

## Practice paper answers

| P | Answer | Why | Objective |
| --- | --- | --- | --- |
| 1 | `2 5 1` | 3 goes onto the stack; `Peek` copies the 5 without taking it; `Pop` takes that 5 back off, and leaves one. | Programming: data structures |
| 2 | C | Kinds of one thing that share fields: a base class, with what differs `abstract`. | Programming: inheritance vs. interfaces |
| 3 | B | With no listeners the event is `null`, and A throws a `NullReferenceException`. C and D don't compile. | Programming: code for a task |
| 4 | D | The group stacks the rows; the fitter makes Content as tall as they are, so the Scroll Rect knows how far to scroll. | UI: anchors, pivots and groups |
| 5 | B | An abstract class can't be made with `new` (CS0144), but it's a fine type for a variable. | Debugging: compile errors |
| 6 | D | JsonUtility leaves a `Dictionary` out, with no error: save two lists instead. A `[SerializeField]` field is saved. | Programming: saving data |
| 7 | A | A duplicate has no link to Coin; only a variant keeps one to its base. | Assets: nested prefabs and variants |
| 8 | — | Enabling the action map: `boostAction.action.actionMap.Enable();`. Your own asset's actions start disabled, and a disabled action never fires, with no error. | Programming: code for a task |
| 9 | C | That's what lets a bar fill and a curtain fade while the next scene loads. | Programming: scene transitions |
| 10 | B | A nested Canvas rebuilds only itself. A Canvas for every element costs more, not less. | UI: displaying data |
| 11 | — | The static event still holds the old scene's `UpgradeButton`, whose button was destroyed with the scene. Unsubscribe with `-=` in `OnDisable`. | Debugging: null variables |
| 12 | A | Change the copy that `Instantiate` returns, never the prefab field. | Assets: prefabs in a scene |
| 13 | D | Deep Profile times every C# method, but slows everything down: switch it off afterwards. | Debugging: profiling tools |
| 14 | C | A dynamic method receives the event's value; a static parameter is typed in once. | UI: UnityEvents |
| 15 | B | Never edit or delete the module: its next version would be imported over your change. | Programming: integrating a lead's code |
| 16 | A | C# takes the first `catch` that fits, so the most specific goes first. B and C don't compile (CS0160). | Debugging: debug messages |
| 17 | D | Unity rebuilds `Library/` from `Assets/` and `Packages/`: it's big, and differs between computers. | Assets: version control |
| 18 | C | When a step breaks something, it's the last one, and you can throw away just that step. | Debugging: refactoring to a standard |
| 19 | `3`, then `3.5`, then `10.5` | Two `int`s divide to a whole number; a `float` on either side keeps the half. | Programming: data types |
| 20 | A | A Web build keeps that folder in the browser's storage, for the website. Test a save in a real Web build. | Programming: builds |

## Level 4 cheat sheet

**Classes and interfaces**

| Write | Means |
| --- | --- |
| `class Bat : Enemy` | a bat **is an** enemy: it has everything `Enemy` has |
| `protected int health;` | this class and its subclasses can use it; other scripts can't |
| `virtual`, `override` | `virtual`: a subclass **may** write its own version; `override`: this is it. The object decides which runs |
| `abstract` | no body: every subclass **must** override it. An abstract class can't be made with `new` |
| `base.Drive();` | runs the version one level up, as well |
| `enemy is Slime slime` | `true`, with a `slime` to use, if it's a slime; `enemy as Slime` gives it, or `null` |
| `public interface IDamageable` | **can do**: members with no bodies, no fields and no access words |
| `class Crate : MonoBehaviour, IDamageable, IHealable` | one base class, then any number of interfaces: every member `public`, with no `override` |
| `GetComponent<IDamageable>()` | whichever component implements it, or `null`. The Inspector can't show an interface field |

A base class for kinds of one thing that share code; an interface for unrelated things
that share a capability. Unity's event functions (`Start`, `Update`…) are never `override`.

**Collections and types**

| | Put in | Take out | Look |
| --- | --- | --- | --- |
| `List<T>` | `Add`, `Insert` | `Remove`, `RemoveAt`, `Clear` | `[i]`, `Count`, `Contains` |
| `Dictionary<K, V>` | `Add` (throws if the key is there), `[key] = value` (replaces) | `Remove(key)` | `[key]` (throws if missing), `TryGetValue(key, out V value)`, `ContainsKey`, `Count` |
| `Queue<T>`: first in, first out | `Enqueue`, at the back | `Dequeue`, from the front | `Peek`, `Count` |
| `Stack<T>`: last in, first out | `Push`, on top | `Pop`, from the top | `Peek`, `Count` |

An array's size never changes (`Length`). A dictionary has no order; a `foreach` over it
gives `KeyValuePair`s, with `.Key` and `.Value`. `Dequeue`, `Pop` and `Peek` throw when
it's empty. `IReadOnlyList<T>` lets others read a list, never change it. Choose `int` for
counts and money, `float` for time and speed (never `==`), `bool` for yes or no, `string`
for ids, and an `enum` for a fixed set.

**Events**

| Code | Does |
| --- | --- |
| `public event Action<int> HealthChanged;` | only its own class can raise it, or set it with `=` (CS0070) |
| `HealthChanged?.Invoke(health);` | raises it; `?.` skips it when nobody listens |
| `+= OnHealthChanged` in `OnEnable`, `-= OnHealthChanged` in `OnDisable` | subscribe and unsubscribe, as a pair. A lambda's `-=` takes nothing off |
| `button.onClick.AddListener(() => Buy(fruit));` | a lambda: a method with no name. In a `for` loop, copy `fruits[i]` first |
| `[SerializeField] UnityEvent<int> onLapCompleted;` | wired in the Inspector (**Dynamic int** receives the value); `onLapCompleted.Invoke(lap);` |

C# events between scripts; UnityEvents from a script to whatever a designer wires up.
Names: `HealthChanged`, `OnHealthChanged`, `onWon`.

**Static, scenes and saving**

| Code | Does |
| --- | --- |
| `const int MaxLaps = 9;`, `static readonly Color Gold` | never changes; set once |
| `public static int Coins { get; private set; }` | one copy: survives loading a scene and, with **Reload Scene only**, a new Play |
| `[RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.SubsystemRegistration)]` | on a `static void` method: resets statics as Play starts |
| `SceneManager.LoadScene("Results");` | switches at the start of the next frame, and freezes while it loads |
| `SceneManager.LoadSceneAsync("Results")` | loads behind the running scene: `progress` climbs to 0.9, then 1; `isDone` |
| `SceneManager.GetActiveScene().name` | the open scene: load it again to restart |
| `PlayerPrefs.SetInt(key, value)`, `PlayerPrefs.GetInt(key, defaultValue)` | small settings; also `Float`, `String`, `HasKey`, `DeleteKey`, `Save()`. A `bool` is 1 or 0 |
| `JsonUtility.ToJson(data, true)`, `JsonUtility.FromJson<SaveData>(json)` | the public and `[SerializeField]` fields of a `[System.Serializable]` class: no `Dictionary`, property, static or asset |
| `Path.Combine(Application.persistentDataPath, "save.json")` | the game's own folder: on the Web, the browser's storage |
| `File.Exists`, `File.ReadAllText`, `File.WriteAllText` | catch `IOException`; damaged JSON throws an `ArgumentException` |

Only scenes in the Scene List (**File → Build Profiles**) load; index 0 opens the build.
Set `Time.timeScale = 1f` before leaving a pause. A choice for the next scene goes in a
static, a setting in PlayerPrefs, and game data in a JSON file, with a `version`.

**Exceptions:** `try` what might fail; `catch (FormatException exception)` the types
you expect, most specific first (CS0160), never empty; `finally` runs whatever happened.
Check first where you can: `int.TryParse`, `File.Exists`, `TryGetValue`.
`FormatException`: `int.Parse("three")`. `KeyNotFoundException`: a missing key.
`ArgumentException`: `Add` twice, or damaged JSON. `InvalidOperationException`: an
empty queue or stack, or a collection changed in its own `foreach`.
`UnassignedReferenceException`: an empty Inspector field. `MissingReferenceException`:
a destroyed object.

**ScriptableObjects, Input Actions and pooling**

| Code | Does |
| --- | --- |
| `[CreateAssetMenu(fileName = "New Kart Stats", menuName = "Karts/Kart Stats")]`, on `class KartStats : ScriptableObject` | assets for shared data, from **Assets → Create**. Changes made while playing stay in the asset |
| `[SerializeField] InputActionReference boostAction;` | an action from an Input Actions asset; `boostAction.action` is the action itself |
| `boostAction.action.performed += OnBoost;` | `void OnBoost(InputAction.CallbackContext context)`; also `started` and `canceled` |
| `boostAction.action.actionMap.Enable();` | your own asset's actions start disabled. For a pause, disable one map and enable the other |
| `steerAction.action.ReadValue<Vector2>()` | a Value action, read every frame |
| `PerformInteractiveRebinding(bindingIndex)` … `.Start()` | the player picks a key; `Dispose()` the operation when it's done |
| `SaveBindingOverridesAsJson()`, `LoadBindingOverridesFromJson(json)` | keep the new keys in PlayerPrefs; load them in `Awake` |
| a pool's Get: `Pop()` a sleeping object, or `Instantiate` one; `SetActive(true)` | reset everything the last use changed |
| a pool's Release: `SetActive(false)`, then `Push` | once per use, never twice |

**Prefabs**

| Thing | Rule |
| --- | --- |
| a nested prefab | keeps its own link: change the inner prefab, and every outer one follows |
| a variant (**Assets → Create → Prefab Variant**) | its base, plus its own changes: base changes reach it, except where it overrides |
| a duplicate (**Ctrl + D**) | no link at all |
| an override | an instance's own value, in bold with a blue line. **Apply** sends it to a prefab; **Revert** takes the prefab's |
| a change | reaches everything built on top of where you made it, never underneath; an override wins |
| `Coin coin = Instantiate(coinPrefab, parent);` | change `coin`, the copy, never `coinPrefab` |

**Profiling** (**Window → Analysis**): slow frames, a stutter or garbage every frame,
the **Profiler** (CPU Usage, the Hierarchy, **GC Alloc**; **Deep Profile** briefly); the
wrong drawing order, draw calls or overdraw, the **Frame Debugger**; high memory or big
textures, the **Memory Profiler** (the `com.unity.memoryprofiler` package).

**Git:** version control is for history, rollback, working together and backup. Commit
`Assets/` with every `.meta` (it holds the GUID), `Packages/` and `ProjectSettings/`; the
Unity `.gitignore` leaves out `Library/`, `Temp/`, `Logs/`, `obj/`, `UserSettings/` and
`Builds/`. **Force Text** and **Visible Meta Files** on. Discard what isn't committed;
revert a commit with a new one. Branch to try an idea, then merge. One person per scene.

**Level 4's compile errors**

| Code | Means | Fix |
| --- | --- | --- |
| CS0534 | a class doesn't override an abstract member it inherits | write it, with `override` |
| CS0115 | an `override` matches nothing above it: a typo, or other parameters | match the base method's name and parameters |
| CS0535 | a class lacks a member of its interface | write it: `public`, with the same name and types |
| CS0144 | `new` on an abstract class or an interface | `new` a class built on it |
| CS0070 | an event set with `=`, or raised, outside its class | only `+=` and `-=` from outside |
| CS0101 | two classes with one name, often after an import | delete the copy, rename yours, or use a namespace |
| CS1061 | the type has no member of that name | fix the typo or the type, or write the member |
| CS0246 | a type that can't be found | add the `using` for its namespace, or fix its name |

## Before Level 5: can you…

- Build a family of classes with `abstract`, `virtual`, `override` and `base.`, and say
  which version runs through a variable of the base type?
- Write an interface for unrelated classes, find it with `GetComponent`, and say when it
  beats a base class?
- Choose the right collection for a job, and the right type for every value?
- Announce with a C# event, subscribe and unsubscribe in pairs, and wire a UnityEvent?
- Fade between scenes, carry a choice into the next one, and keep settings in
  PlayerPrefs and progress in a JSON file that survives being damaged?
- Make ScriptableObject assets for shared data, and an Input Actions asset players can
  rebind?
- Lay out a screen that fits a phone and a tablet, with anchors, pivots and groups?
- Predict what a change to a nested prefab or a variant reaches?
- Plug a lead's module in without changing it, and refactor to the style guide in small
  commits?
- Read Level 4's compile errors from the Console alone, and pick the right profiling
  tool?
- Score 14 or more on the practice paper in 30 minutes?

If yes, you're ready for the **Unity Certified Associate: Programmer** exam, and for
Level 5, where the work turns to architecture and performance: systems that stay clean
and fast as a game grows. You'll write generic classes and methods of your own, use LINQ
and learn when not to, wait with `async` and `await`, and organise code with the SOLID
principles and the design patterns games use; and you'll load assets with Addressables,
and direct cameras and cutscenes with Cinemachine and Timeline.
