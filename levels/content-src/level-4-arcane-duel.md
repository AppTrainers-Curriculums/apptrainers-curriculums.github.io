---
title: "Arcane Duel"
subtitle: "Level 4: Junior"
author: "Unity Programmer Curriculum  ·  Level 4"
coverEyebrow: "Level 4 · Junior · Learn to Code · Make Games"
coverTop: "Arcane"
coverRed: "Duel"
coverSub: "A card duel against the computer: attacks, heals, shields and familiars, four opponents in four painted arenas, a deck you build and save, and a computer player written by someone else."
coverPill: "Level 4 Workbook · Arcane Duel"
coverCaption: "4 scenes · 21 cards · 4 opponents · 1 lead's module"
coverArt: image
coverImage: cover.png
footer: "Arcane Duel  ·  Level 4 Workbook"
---

# Part 0 — Before You Start

## What you're going to build

A **card duel** against the computer. Two duelists face each other across a painted
arena. Each turn you get more mana, draw a card, and play cards from your hand by
dragging them out of it: **attacks** onto your foe, **heals** and **shields** onto
yourself, and **familiars**, creatures that come onto your side of the board and strike
your foe at the start of every turn of yours. Bring the other duelist's health to 0 to
win.

| Kind | What it does | Example |
| --- | --- | --- |
| **Attack** | damage to the foe, or to one of the foe's familiars | *Fireball*: 4 mana, deal 6 damage |
| **Drain** | an attack that also heals you | *Bloodletter*: 3 mana, deal 3, heal 3 |
| **Heal** | gives you back health, never above 30 | *Healing Draught*: 2 mana, heal 4 |
| **Shield** | takes damage before your health does, until your next turn | *Iron Guard*: 2 mana, gain 5 shield |
| **Familiar** | a creature on your side of the board, up to three | *Snow Tiger*: 4 mana, power 3, health 4 |

**The rules.** Both duelists have **30 health**. On your *n*th turn you have *n* mana,
up to 10. At the start of each of your turns your shield drops to 0, your mana fills up,
your familiars strike, and you draw a card. You start with 4 cards and hold at most 7: a
card drawn into a full hand is **burned**, straight to the discard pile. When your draw
pile runs out, your discard pile is shuffled into a new one. You go first.

**Four opponents,** each in their own arena, each with their own deck and their own way
of playing: **Mira the Ranger** in the Autumn Woods (fast and reckless), **Brother
Aldric** in the Snowfield (patient), **Old Wren** in the Hollow (a summoner) and **Kasha
the Blade** in the Arena (the best of them). Mira is open from the start; beating an
opponent opens the next, and wins you their **rare card** for your deck.

**Four scenes:** the **Menu**, where you choose your opponent; the **Deck Builder**,
where you make your 20-card deck from every card you own; the **Battle**; and the
**Results**. Your deck, your wins and the rare cards you've won are **saved**, so they're
still there tomorrow.

**How to play:** with a pointer: the mouse, or a finger on a phone. Hover a card to look
at it; drag it to play it. **End Turn** ends your turn (or **Space**); the pause button,
**Esc** or **P** pauses. In the settings you can choose your own keys.

## Your new job

In this book you're a new **junior programmer** at a small games studio, **Lantern Hill
Games**. The studio is making *Arcane Duel*, and you're building it. Your **lead**, Sam,
designed how the game fits together and wrote the studio's style guide. Three times in
the book, Sam hands you something:

| When | What Sam hands you | What you learn |
| --- | --- | --- |
| Chapter 1 | the studio's **style guide**, `STYLE_GUIDE.md` | following a team's coding standards |
| Chapter 11 | a ready-made **computer opponent**, as a package | reading, judging and plugging in code you didn't write |
| Chapter 12 | a **Results screen** written by last summer's intern: it works, but… | refactoring code to fit the standards (Chapter 18) |

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
optional **Challenge**. Every build chapter now ends with one more: **Commit**, because
from Chapter 1 your project lives in **Git**.

You'll try the C# examples in a `Practice` script, as before: an empty GameObject called
`Practice` with a script called `Practice`. Make it in a scene of its own,
`Assets/Scenes/Practice.unity`, so it never gets in the game's way.

Level 4 has three books: **Arcane Duel** (this one), **Pocket Karts** (a 3D kart racer)
and **Juice Tycoon** (an idle tycoon game). Each teaches **every** Level 4 topic, and they
share the same C# Concept chapters, so the examples in those chapters come from all three
kinds of game: cards, karts and juice stands. The ideas are the same everywhere; this
book's build chapters show each one on your duel.

> **Tip:** you passed the Level 4 entry test, so everything in Levels 0 to 3 is yours:
> properties, coroutines, lists and dictionaries, `static` and `const`, raycasts, UI
> events, the Input System, state machines with `enum` and `switch`, the Animator, and
> naming conventions. Keep the Level 3 cheat sheet next to you.

## The route through this book

| Step | Chapter | You learn | You build |
| --- | --- | --- | --- |
| 1 | C# 1 | Version control with Git | — |
| 2 | Chapter 1 | A repository, `.meta` files, the style guide, sprites for UI, font assets | A project under Git |
| 3 | C# 2 | Canvas scaling, anchors, pivots, layout groups | — |
| 4 | Chapter 2 | A table of sprites, sorting layers, a camera-drawn canvas, a button prefab | The battle screen |
| 5 | C# 3 | Nested prefabs, variants, overrides | — |
| 6 | Chapter 3 | Prefab variants and how changes travel | Bars and panels |
| 7 | C# 4, C# 5 | Base classes, `abstract`, `override`; data assets | — |
| 8 | Chapter 4 | An abstract ScriptableObject and its kinds | Cards as data |
| 9 | Chapter 5 | A prefab of sprites that shows data, a Rare variant | The card |
| 10 | C# 6 | `Dictionary`, `Queue`, `Stack`, choosing types | — |
| 11 | Chapter 6 | A Queue and a Stack, a shuffle, a hand fanned out in code | Draw and discard |
| 12 | C# 7 | Contracts; Unity's drag interfaces | — |
| 13 | Chapter 7 | `IDamageable`, drag and drop on the table, mana and shield | Play a card |
| 14 | C# 8 | `event`, `Action`, lambdas, UnityEvents | — |
| 15 | Chapter 8 | A turn state machine, scripts that only listen | Turns |
| 16 | Chapter 9 | A second `IDamageable` | Familiars |
| 17 | Chapter 10 | `base.Play`, a Git branch | The Drain card |
| 18 | C# 9 | Reading, judging and plugging in someone else's code | — |
| 19 | Chapter 11 | A package, its conflicts, a contract | The lead's opponent |
| 20 | C# 10, C# 11 | Static and its risks; loading scenes | — |
| 21 | Chapter 12 | A fader, data between scenes | Four scenes |
| 22 | C# 12, C# 13 | `try` / `catch`; PlayerPrefs and JSON | — |
| 23 | Chapter 13 | A dictionary of cards, a scrolling grid | The Deck Builder |
| 24 | Chapter 14 | A save file that can't break the game | Save and load |
| 25 | C# 14 | Actions, maps, rebinding | — |
| 26 | Chapter 15 | An Input Actions asset, a pause that swaps maps | Controls |
| 27 | C# 15 | Reusing objects | — |
| 28 | Chapter 16 | A pool, particle effects, sound | Juice |
| 29 | C# 16, C# 17 | The Package Manager; the Profiler, Frame Debugger and Memory Profiler | — |
| 30 | Chapter 17 | Three problems, three tools | Profile it |
| 31 | C# 18, C# 19 | Style guides and refactoring; logs and compile errors | — |
| 32 | Chapter 18 | Small, tested refactoring steps | The intern's code, cleaned up |
| 33 | Chapter 19 | Level 4's mistakes, and Git to undo them | Break it, then fix it |
| 34 | Chapter 20 | WebGL and PC builds, a release tag | A game you can share |
| 35 | Part 6 | The Associate exam | — |
| 36 | Part 7 | Exam-style practice | — |

## For trainers: running a session

Sessions follow the route above, with the same rhythm as Levels 0 to 3:

| Share | Activity | From |
| --- | --- | --- |
| About 20% | **Concept:** teach the idea. Students predict each example's Console output before you run it. | C# Concept chapters |
| About 60% | **Build:** students follow the chapter in Unity, press Play at every checkpoint, and commit. | Build chapters |
| About 20% | **Practice:** the **Do it** exercises, in class or as homework. | C# Concept chapters |

Students join Level 4 by passing the **Level 4 entry test**. Chapters 7, 8 and 11 are the
heart of this book: interfaces, events, and plugging in code someone else wrote. Give
them the most time. Chapter 2 builds the battle screen by hand, value by value; slower
students can finish it at home from the book.

**What you share with your students,** from the course project's
`Level4-ArcaneDuel/Handouts~` folder and the game's `Art` and `Audio` folders:

| When | What |
| --- | --- |
| Before Chapter 1 | the `Art` and `Audio` folders, and `STYLE_GUIDE.md` |
| Chapter 11 | `Arcane Duel Opponent 1.2.unitypackage`, the lead's module |
| Chapter 12 | `intern/ResultsScreen.cs`, the intern's script |
| Chapter 17 | `extras/Lorestrome Portraits (whole sheet).jpg` |

Your trainer project has the finished game, and a menu item that builds it from scratch:
**Tools → Arcane Duel (Level 4) → Build Scenes**. Use it to show the goal on the first
day, or to rescue a project that's beyond repair.

## The pieces we'll build

Forty-two scripts, in five folders. Most are short; a few grow through the book.

```
Cards ── Card ─────────── abstract: what every card shares (and the CardKind enum)
         AttackCard ───── deals damage to what it's dropped on
         DrainCard ────── an attack that also heals: it extends AttackCard
         HealCard ─────── heals the duelist who plays it
         ShieldCard ───── shield, until the duelist's next turn
         SummonCard ───── puts a familiar on the board
         CardLibrary ──── every card, the starter deck, and a Dictionary to find them by id
         OpponentProfile ─ an opponent: portrait, arena, deck, rare card, personality

Duel ─── IDamageable ──── anything a card can hurt
         Deck ─────────── the draw pile (a Queue) and the discard pile (a Stack)
         Duelist ──────── one side: health, shield, mana, hand, familiars; raises events
         Familiar ─────── a creature on the board, an IDamageable too
         IDuelistController ─ whoever decides a duelist's moves
         PlayerController ─── you, through the screen and the keys
         OpponentBrain ── the computer: Sam's module
         DuelManager ──── whose turn it is, and when it's over

Board ── CardView ─────── a card on the table, in sprites; hover, drag and drop
         HandView ─────── a CardView for each card in a hand, fanned out
         PileView ─────── the draw pile and the discard pile, with its top card
         FamiliarRow ──── lines up the familiars on a board
         CameraFit ────── keeps the whole table in view, on any screen
         ScreenEdge ───── keeps a thing on the table near an edge of the screen

UI ───── CardTile ─────── a card in the menus, in UI; click it
         DuelistPanel ─── shows a duelist; popups, effects and sounds
         StatBar ──────── a bar: health, shield or mana
         Popup ────────── a number that rises and fades
         PopupPool ────── popups, reused
         PauseMenu ────── pauses, and swaps action maps

Flow ─── DuelSetup ────── what one scene hands the next (static)
         DuelResult ───── what happened in a duel
         SceneFader ───── fades between scenes
         MainMenu ─────── the menu and the opponent select
         OpponentButton ─ one opponent to choose
         DeckBuilder ──── the Deck Builder
         DeckRow ──────── one line of the deck list
         ResultsScreen ── the results (the intern's, then yours)
         SaveData ─────── what the save file holds
         SaveSystem ───── reads and writes it, safely
         GameSettings ─── PlayerPrefs, with named keys
         SettingsPanel ── the settings
         RebindButton ─── choose a new key
         MusicPlayer ──── plays the scene's music
```

## One-time setup

- **Unity 6** (6000.6), with a new project made from the **Universal 2D** template, as
  for Level 3's 2D games. Call it `Arcane Duel`. The **Input System** package comes with
  it, and so does the UI (uGUI) with TextMeshPro.
- **Git and GitHub Desktop.** Install **GitHub Desktop** from desktop.github.com (it
  brings Git with it), and make a free account on github.com. Chapter 1 sets up the
  rest.
- **WebGL and PC builds** (Chapter 20): in the **Unity Hub**, **Installs**, the cog next
  to your Unity 6 → **Add modules**, tick **Web Build Support**, and the build support for
  your computer (**Mac Build Support** or **Windows Build Support**) if it isn't there.
- **Art and sound:** your trainer shares two folders, `Art` and `Audio`, holding every
  file this book uses, each pack's licence beside them. `CREDITS.md` names them all:
  - **Fantasy Card – Dark Cosmic** by Cethiel: the card frames and backs.
  - **Fantasy RPG Icons** by Drummyfish: the art on every card.
  - **200 Free Lorestrome Portraits** by Hyptosis: the five duelists' faces.
  - **Backgrounds** by Nidhoggn: six painted arenas.
  - **Cinzel Decorative** and **Cinzel**, fonts by Natanael Gama, under the SIL Open
    Font License.
  - **Ninja Adventure** by Pixel-Boy and AAA: every sound, and the music.
  - The UI shapes in `Art/UI` were drawn for this course.

  Every pack but the fonts is CC0: free to use for anything. The fonts' licence lets you
  use and share them, as long as their `OFL.txt` goes with them.

# Part 1 — A Project and a Screen

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
account, with the studio's style guide beside it, and the art, sounds and fonts imported
and ready for the screen.

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
| `Assets/` (with every `.meta` file) | **yes** | your work: scripts, scenes, prefabs, art |
| `Packages/manifest.json`, `packages-lock.json` | **yes** | which packages the project uses |
| `ProjectSettings/` | **yes** | the project's settings |
| `Library/`, `Temp/`, `Logs/`, `obj/`, `UserSettings/` | no | Unity rebuilds them |
| `Builds/` | no | anyone can make a build from the project |

### Do it — the repository

1. In the **Unity Hub**, **New project**, choose Unity 6 and the **Universal 2D**
   template, call it `Arcane Duel`, and **Create project**. When Unity opens, close it
   again for now.
2. Open **GitHub Desktop** and sign in with your GitHub account. **File → Add Local
   Repository…**, **Choose…** the `Arcane Duel` folder, and click **Add Repository**.
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

7. Your trainer shares `STYLE_GUIDE.md`, Sam's style guide. Put it in the project
   folder, next to `Assets` (not inside it: it's for people, not for Unity). Open it and
   read it: it's two pages. Most of it is Level 3's naming conventions, written down as a
   team's rules, and a few new ones you'll meet as the book goes on:

| Sam's rule | Example |
| --- | --- |
| Interfaces start with `I` and name a capability | `IDamageable` |
| C# events say what happened, in the past tense, without `On` | `TurnStarted` |
| Methods that an event or Unity calls start with `On` | `OnTurnStarted` |
| Fields set in the Inspector are `[SerializeField]` and private: never `public` | `[SerializeField] int maxHealth = 30;` |
| A number that means something gets a name | `const int MaxHandSize = 7;` |
| One class per file, named after it | `Duelist.cs` |
| Subscribe in `OnEnable`, unsubscribe in `OnDisable` | |
| Not allowed: `var`, `GameObject.Find`, `FindObjectOfType`, `public` fields | |

8. In GitHub Desktop, the Changes tab shows `STYLE_GUIDE.md`. Commit it: *Add the studio's
   style guide*.

### Do it — art, sounds and fonts

9. Your trainer shares two folders, `Art` and `Audio`. Drag both into Unity's **Project**
   window, into `Assets`. In the 2D template every picture comes in as **Sprite (2D and
   UI)**, ready for the screen: nothing to change.
10. Two of the pictures in `Art/UI` stretch: `Panel` (a rounded rectangle) and `Edge` (its
    outline). A stretched picture needs a **9-slice border**, so its corners keep their
    shape while the middle stretches. Select `Panel`, click **Open Sprite Editor**, and in
    the **Sprite** box set **Border** to 20 on all four sides (**L**, **T**, **R**, **B**).
    **Apply**. Do the same for `Edge`. Then select `Panel` again, set **Mesh Type** to
    **Full Rect** in its Inspector, and **Apply**: a 9-slice sprite drawn by a **Sprite
    Renderer** (the card's ribbon, in Chapter 5) needs it. A UI Image doesn't care.
11. Make a **font asset** for each font, as in Level 3: select
    `Art/Fonts/CinzelDecorative-Bold`, then **Assets → Create → TextMeshPro → Font Asset →
    SDF**. Unity asks to import the **TMP Essentials** the first time: **Import**, then
    make the font asset again. Do the same for `CinzelDecorative-Black`,
    `Cinzel-Regular` and `Cinzel-Bold`.

| Font asset | For |
| --- | --- |
| `CinzelDecorative-Black SDF` | the big titles: *Arcane Duel*, *Victory* |
| `CinzelDecorative-Bold SDF` | names: cards, duelists, buttons |
| `Cinzel-Regular SDF` | small text: the rules on a card |
| `Cinzel-Bold SDF` | numbers: costs, health, counts |

12. Make the folders the game will need, in `Assets`: `Scripts` (with five folders in
    it: `Cards`, `Duel`, `Board`, `UI` and `Flow`), `Prefabs`, `Data` and `Input`.
    `Scenes` is already there. `Board` will hold the scripts for what's on the table, in
    sprites; `UI`, the ones for what's on the canvas.

### Test it

- In GitHub Desktop, the Changes tab lists every new picture **and a `.meta` file beside
  it**. Click one `.meta` file: it's a few lines of text, and one says `guid:` followed by
  32 letters and numbers. That **GUID** is how Unity knows the picture: a scene or a prefab
  that uses the picture stores its GUID, not its name.
- Find the same `.meta` file in Finder or Explorer: it's next to the picture, hidden from
  Unity's Project window.

> **Watch out:** move or rename assets **in Unity's Project window**, never in Finder or
> Explorer. Unity moves the `.meta` file with the asset. Move one outside Unity, and Unity
> sees a new file, gives it a new `.meta` with a new GUID, and everything that used the old
> one loses it: a missing sprite here, a missing script there.

### Commit

*Add the art, sounds and fonts.* Then **Push origin**, so GitHub has it too.

### Challenge

In the **History** tab, click your three commits one by one, and find which one changed
the most files. Then open `Art/UI/Panel.png.meta` in a text editor: find the line your
9-slice border changed (`spriteBorder`).

## C# 2 — UI in Depth

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
growing button doesn't push its neighbours. C# 7 shows a way to do it with no
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

## Chapter 2 — The Battle Screen

**Goal:** the battle scene in two layers: a **table** in the world, drawn by an
orthographic camera, where the cards will lie (the arena, the two rows for familiars, the
spot a played card flies to), and a **canvas** over it for the screen's buttons and words.
Plus a **Game Button** prefab every button in the game will use, and two small scripts
that keep the table right on a wide phone, a 16:9 monitor and a tablet.

### Idea — a table and a screen

A card game has two kinds of things on screen. The **cards** are pieces you play with:
they lie on a table, move, overlap, and fly about. The **buttons and numbers** are the
screen around the game: End Turn, Pause, the health bars. So the battle has two layers:

| Layer | Made of | Holds |
| --- | --- | --- |
| **The table** | sprites in the world, drawn by the camera | the arena, the hands, the familiars, the piles |
| **The canvas** | UI (C# 2), a **Screen Space – Camera** canvas | the duelist panels, the message, End Turn, Pause, the menus |

```
Main Camera         orthographic: it draws the table, and the canvas in front of it
Global Light 2D     lights every sprite
Arena               the opponent's arena, a sprite behind everything
Top Fade            darker at the top edge...
Bottom Fade         ...and at the bottom, where your hand will be
Table
├── Opponent Board  up to three of the foe's familiars
├── Player Board    up to three of yours
├── Play Spot       where a played card flies to (Chapter 8)
└── Your Turn Glow  a soft light behind your hand, on your turn
Canvas
├── Middle Line     a thin line across the table
├── Message         "Your turn", "Not enough mana"...
├── End Turn
└── Pause Button
```

The hands, the piles, the panels, the popups and the pause menu join them in later
chapters.

### Idea — what draws on top: Sorting Layers

Sprites don't draw in Hierarchy order. A **Sprite Renderer** has a **Sorting Layer** and
an **Order in Layer**: Unity draws the layers in their list's order, the last on top, and
inside a layer, the lower Order first. A canvas in **Screen Space – Camera** has them too,
so it sorts with the sprites. The battle uses four layers, bottom to top:

| Sorting Layer | What's on it |
| --- | --- |
| **Default** | the table: the arena (Order −100), the fades (−90), the glow (−80), and every card at rest |
| **UI** | the canvas: panels, buttons, the message |
| **Held** | a card you hover, drag or play: over everything else, the panels too |
| **Effects** | sparks and healing motes (Chapter 16) |

That's why the canvas is **Screen Space – Camera**, not Overlay: an Overlay canvas is
drawn after everything, so a card you drag onto the opponent's panel would slide
**under** it.

### Idea — the camera and the screen's shape

An **orthographic** camera shows a fixed **height** of the world: **Size** 5.4 is half of
it, so 10.8 units tall. At 100 pixels a unit, that's the 1080 pixels of a 1920 × 1080
screen, and the table is 19.2 × 10.8 units. A wider screen (a 20:9 phone) shows more on
the sides, which is fine. A narrower one (a 4:3 tablet) shows **less**: it would cut off
the table's sides. Two small scripts fix that:

- `CameraFit` makes the view taller on a narrow screen, until the table's width fits.
- `ScreenEdge` keeps something against an edge of the screen, the way an anchor keeps
  UI there: the fades now, your hand and the piles later.

### Do it — the scene, the camera and the layers

1. In `Assets/Scenes`, rename `SampleScene` to `Battle` (select it, **F2** on Windows or
   **Return** on a Mac). Open it. It has a **Main Camera** and a **Global Light 2D**:
   keep both. The light lights every sprite; without one, the 2D Renderer would draw the
   sprites dark.
2. Select the **Main Camera**: **Projection** is already **Orthographic**. **Size** 5.4.
   Under **Environment**, **Background Type** **Solid Color**, and **Background**
   `#0B070D`, nearly black.
3. **Edit → Project Settings → Tags and Layers**, open **Sorting Layers**, and click **+**
   three times: `UI`, `Held` and `Effects`, in that order, below `Default`.

### Do it — CameraFit and ScreenEdge

4. In `Scripts/Board`, `CameraFit`, and add it to the **Main Camera**:

```csharp:CameraFit.cs
using UnityEngine;

// Keeps the whole table in view on any screen. An orthographic camera shows a fixed
// height, so a narrow screen (a 4:3 tablet) would cut off the table's sides: this
// makes the view taller until the table's width fits.
[ExecuteAlways]
[RequireComponent(typeof(Camera))]
public class CameraFit : MonoBehaviour
{
    [SerializeField] float tableWidth = 19.2f;     // in units: 1920 pixels at 100 pixels per unit
    [SerializeField] float tableHeight = 10.8f;

    void Update()
    {
        Camera view = GetComponent<Camera>();
        view.orthographicSize = Mathf.Max(tableHeight / 2f, tableWidth / 2f / view.aspect);
    }
}
```

5. `[ExecuteAlways]` runs it in the Editor too, so the **Game** view shows the real
   view as you change its shape. `[RequireComponent]` makes sure it's on a camera.
6. In `Scripts/Board`, `ScreenEdge`:

```csharp:ScreenEdge.cs
using UnityEngine;

// Keeps something on the table a fixed distance from a point of the screen, the way
// an anchor keeps UI there. (0, 0) is the screen's bottom-left corner and (1, 1) its
// top-right; the offset is in units. It runs in LateUpdate, after CameraFit has set
// the camera in Update.
public class ScreenEdge : MonoBehaviour
{
    [SerializeField] Vector2 screenPoint = new Vector2(0.5f, 0f);
    [SerializeField] Vector2 offset;

    void LateUpdate()
    {
        Vector3 point = Camera.main.ViewportToWorldPoint(screenPoint);
        transform.position = new Vector3(point.x + offset.x, point.y + offset.y, 0f);
    }
}
```

### Do it — the table

7. Drag `Art/Arenas/Autumn Woods` into the **Hierarchy**: a sprite, with a **Sprite
   Renderer**. Name it `Arena`. **Position** (0, 0, 0), **Scale** (2.4, 2.4, 1): it's
   26.5 × 14.9 units, enough to fill a phone's width and a tablet's height. **Color**
   `#9E9E9E`, to darken it so the cards stand out, and **Order in Layer** −100.
8. Drag `Art/UI/Fade` in (a gradient, solid at the top), `Top Fade`: **Scale** (675,
   2.03, 1), **Color** black with alpha 179, **Order in Layer** −90. **Add Component →
   Screen Edge**: **Screen Point** (0.5, 1), **Offset** (0, −1.3).
9. `Fade` again, `Bottom Fade`: **Scale** (675, 2.34, 1), tick **Flip Y**, **Color** black
   with alpha 204, **Order in Layer** −90. **Screen Edge**: **Screen Point** (0.5, 0),
   **Offset** (0, 1.5).
10. **Create Empty**, `Table`, at (0, 0, 0). In it, three empty children: `Opponent Board`
    at (0, 2.05, 0), `Player Board` at (0, −0.75, 0) and `Play Spot` at (4.6, 0.6, 0),
    the place on the right of the table where a played card will land.
11. Drag `Art/UI/Glow` onto `Table`, `Your Turn Glow`: **Scale** (6.25, 1.72, 1),
    **Color** `#FFD17A` with alpha 115, **Order in Layer** −80. **Screen Edge**: **Screen
    Point** (0.5, 0), **Offset** (1.75, 0.6). Untick it at the top of the Inspector: it
    shows only on your turn (Chapter 8).

### Do it — the canvas

12. **GameObject → UI (Canvas) → Canvas**. Unity makes a `Canvas` and an `EventSystem`.
    Select the `EventSystem`: it has an **Input System UI Input Module**, the Input
    System's way of pointing at UI. (If it shows the older **Standalone Input Module**
    instead, click **Replace with InputSystemUIInputModule**.)
13. Select the `Canvas`. **Render Mode** **Screen Space - Camera**, drag the **Main
    Camera** into **Render Camera**, **Plane Distance** 10, and **Sorting Layer** `UI`. In
    its **Canvas Scaler**: **UI Scale Mode** **Scale With Screen Size**, **Reference
    Resolution** 1920 × 1080, **Match** 0.5.
14. An **Image**, `Middle Line`: **Pos** (0, 68), **Width** 1100, **Height** 3, **Source
    Image** `Panel`, **Color** `#F3DDB6` with alpha 89, **Raycast Target** off.
15. **UI (Canvas) → Text - TextMeshPro**, `Message`: **Pos** (0, 68), **Width** 1300,
    **Height** 80. Text *Your turn*, **Font Asset** `CinzelDecorative-Bold SDF`, size 54,
    colour `#F3DDB6`, centred both ways, **Raycast Target** off.

### Do it — the Game Button prefab

16. Right-click the `Canvas` → **UI (Canvas) → Image**, `Game Button`, **Width** 400,
    **Height** 96. **Source Image** `Panel`, **Image Type** **Sliced**, **Color**
    `#4E1F4A`. **Add Component → Button**. In its **Color Tint** colours: **Highlighted**
    `#FFE2C0`, **Pressed** `#B9A0B9`, **Disabled** `#8C808C` with alpha 153.
17. Right-click `Game Button` → **UI (Canvas) → Image**, `Edge`: stretch–stretch, **Source
    Image** `Edge`, **Sliced**, **Color** `#C9A27A` (rose-gold), **Raycast Target** off.
18. Right-click `Game Button` → **UI (Canvas) → Text - TextMeshPro**, `Label`:
    stretch–stretch, then **Left** 8, **Top** 4, **Right** 8, **Bottom** 4. Text
    *Button*, `CinzelDecorative-Bold SDF`, size 40, `#F3DDB6`, centred both ways,
    **Raycast Target** off.
19. Drag `Game Button` from the Hierarchy into `Assets/Prefabs`: it's a prefab now.
    Delete it from the scene.

### Do it — End Turn and pause

20. Drag the `Game Button` prefab onto the `Canvas`, and rename it `End Turn`. Anchor
    preset **bottom–right**, with **Shift** so the pivot goes to the corner too. **Pos**
    (−40, 380), **Width** 300, **Height** 110. Its `Label`: text *End Turn*, size 42.
21. Another `Game Button`, `Pause Button`: anchor **top–right** with Shift, **Pos**
    (−24, −24), 92 × 92. `Label`: *II*, size 40, and **Font Asset** `Cinzel-Bold SDF`:
    the decorative font's capital I has a curl that makes "II" look like "TI".

Look at the two buttons' names and settings in the Inspector: the ones you changed are
**bold**, with a blue line beside them. They're **overrides**: this button's own changes
to the prefab. C# 3 is about them.

### Test it

- **Play.** Nothing moves yet, but hover **End Turn**: it warms up (Highlighted), and
  darkens as you click it (Pressed).
- In the **Game** view, set the aspect menu to **16:9**, then **4:3**, then a free size
  much taller than it is wide. The view grows taller to keep the table's width
  (`CameraFit`), the fades stay at the edges (`ScreenEdge`), and the buttons stay in
  their corners (the canvas's anchors).
- **Window → General → Device Simulator.** Pick a phone, then a tablet: the arena always
  fills the screen.
- Select the `Arena` and set its **Sorting Layer** to `Held`: it covers the buttons. Set
  it back to `Default`.

### Commit

*Lay out the battle screen.* GitHub Desktop shows `Battle.unity`, two scripts, a new
prefab with its `.meta`, and `ProjectSettings/TagManager.asset`, where the sorting layers
live. Click `Battle.unity` to see the diff: the scene is text, and every value you typed
is in it.

### Challenge

Make the Message's colour come and go: in C# 2 you met **Canvas Group**. Add one to
`Message`, and drag its **Alpha** while the game runs. You'll make it fade from code in
Chapter 8.

## C# 3 — Prefabs in Depth

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

## Chapter 3 — Bars and Panels

**Goal:** a **Bar** prefab with three **variants** (Health, Shield and Mana), a **Duelist
Panel** prefab with the three bars nested inside it, and two variants of the panel, one
for you and one for your opponent. Then the experiment the exam loves: change a prefab,
and predict which panels change.

### Idea — one bar, three variants

The three bars on a panel are the same thing with a different colour and icon. If you
made three separate prefabs and later wanted bigger numbers, you'd change all three. With
a **base prefab** and three **variants**, you change the base once, and the variants
follow; each variant keeps only its own differences, its **overrides**:

```
Bar  (base)                 the track, the fill, the icon's ring, the number, StatBar
├── Health Bar  (variant)   overrides: Fill colour red, Icon a red potion
├── Shield Bar  (variant)   overrides: Fill colour steel, Icon a shield
└── Mana Bar    (variant)   overrides: Fill colour blue, Icon a blue potion
```

And the **Duelist Panel** holds one of each, **nested**: three prefabs inside a prefab.

### Do it — the bar's script

1. In `Scripts/UI`, make a script called `StatBar`:

```csharp:StatBar.cs
using TMPro;
using UnityEngine;
using UnityEngine.UI;

// A bar: a fill that slides, and a number. One script for the Bar prefab and its
// three variants, the Health, Shield and Mana Bars: only their looks differ.
public class StatBar : MonoBehaviour
{
    [SerializeField] Image fill;            // Image Type: Filled, Horizontal
    [SerializeField] TMP_Text valueText;

    public void Show(int value, int max, string text)
    {
        fill.fillAmount = max > 0 ? (float)value / max : 0f;
        valueText.text = text;
    }
}
```

The `(float)` matters: `value / max` with two `int`s would be whole-number division, and
18 / 30 would be 0.

### Do it — the Bar prefab

2. In the Battle scene, right-click the `Canvas` → **UI (Canvas) → Image**, `Bar`. Anchor and
   pivot **top-left** (anchor preset with Shift), **Width** 300, **Height** 30. **Source
   Image** `Panel`, **Sliced**, **Pixels Per Unit Multiplier** 2 (the corners at half
   size, to suit a thin bar), **Color** black with alpha 140, **Raycast Target** off.
3. Its child **Image** `Fill`: stretch–stretch, then **Left** 26, **Top** 4, **Right** 4,
   **Bottom** 4. **Source Image** `Panel`, **Image Type** **Filled**, **Fill Method**
   **Horizontal**, **Fill Origin** **Left**, **Fill Amount** 0.8. White for now.
4. Its child **Image** `Icon Ring`: anchor **middle-left**, **Pivot** (0.5, 0.5), **Pos**
   (14, 0), 46 × 46, **Source Image** `Circle`, colour `#C9A27A`. And inside the ring, an
   **Image** `Icon`: 40 × 40 in its middle, **Source Image** `icon_potionred`, **Preserve
   Aspect** ticked.
5. Its child **Text - TextMeshPro** `Value`: stretch–stretch, **Left** 40, **Right** 10.
   Text *30 / 30*, `Cinzel-Bold SDF`, size 20, `#F3DDB6`, aligned **right** and **middle**.
6. Untick **Raycast Target** on all four children. Add the `StatBar` script to `Bar`, and
   drag `Fill` and `Value` into its fields.
7. Drag `Bar` into `Assets/Prefabs`, and delete it from the scene.

### Do it — three variants

8. Right-click the `Bar` prefab → **Create → Prefab Variant**, and call it `Health Bar`.
   Open it (double-click): it looks exactly like `Bar`, and the Hierarchy's top line shows
   it's based on it. Set `Fill`'s colour to `#C2364F`. The icon is already the red potion,
   from `Bar`: leave it. Save, and go back.
9. Another variant of `Bar`, `Shield Bar`: `Fill` `#A3B4C6`, `Icon` `icon_shield`.
10. And `Mana Bar`: `Fill` `#6E74F0`, `Icon` `icon_potionblue`.

> **Tip:** a variant shows the things it changed in **bold**, with a blue line in the
> margin. The **Overrides** drop-down at the top of the Inspector lists them all, with
> **Apply All** (send them to the base, so every variant gets them) and **Revert All**.

### Do it — the Duelist Panel

11. Right-click the `Canvas` → **UI (Canvas) → Image**, `Duelist Panel`: anchor and pivot
    **top-left**, **Width** 500, **Height** 190. **Source Image** `Panel`, **Sliced**,
    **Pixels Per Unit Multiplier** 0.5 (bigger corners for a big panel), colour `#1C1020`
    with alpha 230. Keep **Raycast Target** on: in Chapter 7 an attack dropped on the panel
    hits the duelist.
12. Its child `Edge`: an **Image**, stretch–stretch, `Edge`, **Sliced**, **Pixels Per Unit
    Multiplier** 0.5, `#C9A27A`, **Raycast Target** off.
13. Its child **Image** `Portrait`: anchor **top-left**, **Pivot** (0.5, 0.5), **Pos**
    (95, −95), 150 × 150, **Source Image** `Art/Portraits/You`, **Raycast Target on**.
    The pivot in the middle matters later: popups and effects appear where the pivot is.
    Give it a child `Edge` like the panel's (multiplier 1).
14. Its child **Text - TextMeshPro** `Name`: anchor and pivot **top-left**, **Pos**
    (190, −14), 320 × 42. Text *You*, `CinzelDecorative-Bold SDF`, size 30, `#F3DDB6`,
    aligned left and middle. Tick **Auto Size**, from 18 to 30: a long name shrinks to fit.
15. Drag the **Health Bar** prefab onto `Duelist Panel`: an instance of it, nested. **Pos**
    (204, −64). Then a **Shield Bar** at (204, −104), and a **Mana Bar** at (204, −144).
16. Drag `Duelist Panel` into `Assets/Prefabs`, and delete it from the scene. (Each
    duelist's draw and discard piles are cards, so they go on the table, in sprites, in
    Chapter 6.)

### Do it — your panel and the opponent's

17. Make a **Prefab Variant** of `Duelist Panel` called `Player Panel`. Leave it as it is
    for now: in Chapter 8 it gets a script the opponent's doesn't.
18. Another, `Opponent Panel`. In it, set the panel's `Edge` colour to crimson, `#B5475C`.
19. Drag `Opponent Panel` onto the `Canvas`. Its anchor is top-left already: **Pos**
    (24, −24).
20. Drag `Player Panel` onto the `Canvas`. Change its anchor and pivot to **bottom-left**
    (Shift), and **Pos** to (24, 24). Those are **scene overrides**: this instance's own,
    not the prefab's.

### Test it: how a change travels

Before each step, **predict** which of the two panels in the scene will change. Then do
it, and look. Undo each one (**Ctrl+Z**) before the next.

| You change | Where | Predict | What happens |
| --- | --- | --- | --- |
| `Value`'s font size, 20 → 26 | in `Bar` (the base) | | every bar on both panels: all three variants come from `Bar`, and the panels' bars come from the variants |
| `Fill`'s colour | in `Health Bar` | | the health bar on both panels, and no other bar |
| `Name`'s colour | in `Opponent Panel` | | only the opponent's panel |
| the Health Bar's `Fill` colour | on the Player Panel in the **scene** | | only that one bar, in this scene: an override on an instance |
| `Fill`'s colour | in `Bar`, after the step before | | not the health bars: `Health Bar` overrides the colour, so the base's change stops there |

The last row is the one people get wrong: **an override wins**. A change to the base
reaches everything that hasn't overridden that same property.

- Now Play: the panels sit in their corners. Change the Game view's shape again: the
  player's panel stays bottom-left, the opponent's top-left.

To try `StatBar`, make a script in `Scripts/UI` called `BarTest`, put it on the
`Player Panel`, and drag its Shield Bar in:

```csharp
using UnityEngine;

// A test: delete it when the bar works.
public class BarTest : MonoBehaviour
{
    [SerializeField] StatBar bar;

    void Start()
    {
        bar.Show(18, 30, "18 / 30");
    }
}
```

Play: the shield bar fills 60%, and says *18 / 30*. Delete `BarTest` from the panel, and
the script.

### Commit

*Add the bars and duelist panels, with their variants.* In GitHub Desktop, click
`Health Bar.prefab`: it's short, because a variant stores only what it changes, and the
GUID of the prefab it's based on.

### Challenge

Make a fourth variant of `Bar`, `Armour Bar`, with its own colour and `icon_armor`. Put
one on the `Duelist Panel` prefab, below the others, and look: both panels in the scene
get it at once. Then delete it from the prefab, and both lose it.

# Part 2 — Cards

## C# 4 — Inheritance

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
| a player, a crate and a familiar that can all be hurt | none is a kind of another | almost none | an interface (C# 7) |

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

## C# 5 — ScriptableObjects

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

A ScriptableObject can have methods and take part in inheritance (C# 4). A
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
| **JSON file** (or PlayerPrefs) | changes while playing and must still be there after quitting | the money, the unlocked upgrades, the best times (C# 13) |

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
`IReadOnlyList` lets a shop read the list but not change it: C# 6 has more.

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

## Chapter 4 — Cards as Data

**Goal:** an abstract `Card` class, built on `ScriptableObject`, and three kinds of card
built on it: attacks, heals and shields. Then fourteen card assets made from them in the
Project window, and a test that asks every card to describe itself.

### Idea — what every card shares, and what each kind does its own way

Every card has a name, a cost, a picture, and words on it. So `Card` holds those.
But *what a card does* depends on its kind: an attack deals damage, a heal heals. So `Card`
says only that every card **can describe itself**, and leaves *how* to each kind:

```
ScriptableObject          Unity's: data that lives in an asset
└── Card  (abstract)      id, name, cost, art, rare?   Kind? Describe()? NeedsTarget
    ├── AttackCard        damage                       Attack   "Deal 6 damage."   yes
    ├── HealCard          amount                       Heal     "Heal 4."          no
    └── ShieldCard        amount                       Shield   "Gain 5 shield."   no
```

- `Card` is **abstract**: there's no such thing as a plain card, so you can't make one.
- `Kind` and `Describe` are **abstract** too: every kind of card *must* write its own.
  Leave one out, and the code doesn't compile.
- `NeedsTarget` is **virtual**: `Card` gives an answer (no), and a kind *may* change it.
  An attack does: it needs something to hit.

Cards are **ScriptableObjects** (C# 5) because a card is data: the
same *Fireball* sits in your deck twice and in an opponent's deck once, and all three are
the one asset. Nothing about a card changes during a duel, which is exactly what a
ScriptableObject is good for.

### Do it — Card and its three kinds

1. In `Scripts/Cards`, make a script called `Card`. Replace everything in it with:

```csharp
using UnityEngine;

// The five kinds of card, for the Deck Builder's tabs and the ribbon on each card.
public enum CardKind
{
    Attack,
    Drain,
    Heal,
    Shield,
    Familiar
}

// Every card in Arcane Duel is an asset made from one of Card's subclasses.
// Card holds what they all share, and says what each kind must do in its own
// way. It's abstract, so there's no such thing as a plain Card.
public abstract class Card : ScriptableObject
{
    [SerializeField] string id;             // never changes: the save file stores it
    [SerializeField] string displayName;
    [SerializeField] int cost = 1;
    [SerializeField] Sprite art;
    [SerializeField] bool isRare;

    public string Id { get { return id; } }
    public string DisplayName { get { return displayName; } }
    public int Cost { get { return cost; } }
    public Sprite Art { get { return art; } }
    public bool IsRare { get { return isRare; } }

    // Each kind says which kind it is.
    public abstract CardKind Kind { get; }

    // Must the player drop this card on a target? Most cards don't; attacks do.
    public virtual bool NeedsTarget { get { return false; } }

    // The card's rules, written from its own numbers, so they're never out of date.
    public abstract string Describe();
}
```

The enum lives in `Card.cs` because it belongs to `Card`: the style guide allows a small
enum to share its class's file. Two of the five kinds, Drain and Familiar, come later.

2. In `Scripts/Cards`, `AttackCard`:

```csharp
using UnityEngine;

// Deals damage to whatever it's dropped on.
[CreateAssetMenu(fileName = "New Attack Card", menuName = "Arcane Duel/Attack Card")]
public class AttackCard : Card
{
    [SerializeField] int damage = 2;

    public int Damage { get { return damage; } }

    public override CardKind Kind { get { return CardKind.Attack; } }

    public override bool NeedsTarget { get { return true; } }

    public override string Describe()
    {
        return $"Deal {damage} damage.";
    }
}
```

`: Card` makes it a kind of card. It writes the two abstract members (`Kind` and
`Describe`), and changes one virtual one (`NeedsTarget`), each with `override`.
`[CreateAssetMenu]` adds it to the **Create** menu.

3. `HealCard`:

```csharp
using UnityEngine;

// Heals the duelist who plays it.
[CreateAssetMenu(fileName = "New Heal Card", menuName = "Arcane Duel/Heal Card")]
public class HealCard : Card
{
    [SerializeField] int amount = 4;

    public int Amount { get { return amount; } }

    public override CardKind Kind { get { return CardKind.Heal; } }

    public override string Describe()
    {
        return $"Heal {amount}.";
    }
}
```

4. And `ShieldCard`:

```csharp
using UnityEngine;

// Gives the duelist who plays it shield.
[CreateAssetMenu(fileName = "New Shield Card", menuName = "Arcane Duel/Shield Card")]
public class ShieldCard : Card
{
    [SerializeField] int amount = 3;

    public int Amount { get { return amount; } }

    public override CardKind Kind { get { return CardKind.Shield; } }

    public override string Describe()
    {
        return $"Gain {amount} shield.";
    }
}
```

Neither overrides `NeedsTarget`: they take `Card`'s answer, *no*.

### Do it — fourteen cards

5. In `Assets/Data`, make a folder `Cards`. Right-click it → **Create → Arcane Duel →
   Attack Card**, and call the asset `Quick Strike`. In the Inspector: **Id**
   `quick-strike`, **Display Name** *Quick Strike*, **Cost** 1, **Art** `icon_sword`,
   **Damage** 2. Make the rest the same way:

| Asset | Create | Id | Cost | Number | Art | Rare |
| --- | --- | --- | --- | --- | --- | --- |
| Quick Strike | Attack Card | `quick-strike` | 1 | Damage 2 | `icon_sword` | |
| Crossbow Bolt | Attack Card | `crossbow-bolt` | 2 | Damage 3 | `icon_crossbow` | |
| Cleave | Attack Card | `cleave` | 3 | Damage 5 | `icon_axe` | |
| Fireball | Attack Card | `fireball` | 4 | Damage 6 | `icon_fireball` | |
| Crushing Blow | Attack Card | `crushing-blow` | 6 | Damage 9 | `icon_hammerheavy` | |
| Frost Bolt | Attack Card | `frost-bolt` | 2 | Damage 4 | `icon_frostball` | ✓ |
| Healing Draught | Heal Card | `healing-draught` | 2 | Amount 4 | `icon_potionred` | |
| Elixir | Heal Card | `elixir` | 4 | Amount 8 | `icon_potionblue` | |
| Blessing | Heal Card | `blessing` | 6 | Amount 12 | `icon_bookholy` | |
| Buckler | Shield Card | `buckler` | 1 | Amount 3 | `icon_shield` | |
| Iron Guard | Shield Card | `iron-guard` | 2 | Amount 5 | `icon_shield2` | |
| Battle Helm | Shield Card | `battle-helm` | 3 | Amount 7 | `icon_helmet` | |
| Plate Armour | Shield Card | `plate-armour` | 4 | Amount 9 | `icon_armor` | |
| Golden Aegis | Shield Card | `golden-aegis` | 5 | Amount 14 | `icon_armorgold` | ✓ |

The **id** is the card's name in the save file (Chapter 14). Names can change; an id
mustn't, or old save files stop finding the card. That's why it's a separate field, in
lowercase with dashes.

### Test it

6. In `Scripts/Cards`, a test script, `CardTest`:

```csharp
using UnityEngine;

// A test: every card describes itself. Delete it in Chapter 6.
public class CardTest : MonoBehaviour
{
    [SerializeField] Card[] cards;

    void Start()
    {
        foreach (Card card in cards)
        {
            Debug.Log($"{card.DisplayName}, {card.Kind}, {card.Cost} mana: {card.Describe()} Target: {card.NeedsTarget}");
        }
    }
}
```

7. Make an empty GameObject `Card Test` in the Battle scene, give it `CardTest`, and drag
   in **Quick Strike**, **Healing Draught** and **Iron Guard** (lock the Inspector with
   its padlock, select the three assets, and drag them onto **Cards** together). **Play**:

```
Quick Strike, Attack, 1 mana: Deal 2 damage. Target: True
Healing Draught, Heal, 2 mana: Heal 4. Target: False
Iron Guard, Shield, 2 mana: Gain 5 shield. Target: False
```

The array's type is `Card`, and it holds three different kinds. `card.Describe()` runs
each card's **own** version: that's what `override` buys you. `CardTest` never asks which
kind it has, and never needs to.

- Try to make a plain card: there's no **Create → Arcane Duel → Card** in the menu, and
  `ScriptableObject.CreateInstance<Card>()` in code wouldn't compile. Abstract means
  *only through a kind*.
- Delete `AttackCard`'s `Describe` method for a moment, and look at the Console:

```
error CS0534: 'AttackCard' does not implement inherited abstract member 'Card.Describe()'
```

Undo it.

### Commit

*Add the card classes and fourteen cards.*

### Challenge

Give `Card` a `virtual` method `string Title()` that returns the display name, and
override it in `ShieldCard` to add *(shield)* after the name. Log `card.Title()` in the
test. Then remove it again: it was only to see `virtual` without `abstract`.

## Chapter 5 — The Card

**Goal:** a **Card** prefab, in sprites, that shows any card asset: frame, art, cost,
kind, name and rules; and a **Rare Card** variant with a richer frame. A row of cards on
the table.

### Idea — a view of the data

A card asset is data; it can't draw itself. The **Card** prefab is its **view**: a
picture made of sprites and world text, and a script, `CardView`, that fills them in
from an asset. One prefab can show all fourteen cards, and every card the game will ever
have.

```
Card                     a Sorting Group: the card sorts as one piece
├── Background           the cosmic texture, inside the frame's border    Order 0
├── Art                  the card's picture                                Order 1
├── Frame                Cethiel's frame, with a see-through middle        Order 2
├── Kind Ribbon          a coloured strip, sliced                          Order 3
├── Kind                 "ATTACK"                                          Order 4
├── Name                 "Fireball"                                        Order 4
├── Rules                "Deal 6 damage."                                  Order 4
└── Cost Gem             a nested prefab: the gem (5) and its number (6)
```

The art sits *behind* the frame, so the frame's ornaments cross over it; the ribbon, the
words and the gem sit in front.

### Idea — a Sorting Group

Every sprite and every world text has its own **Order in Layer**. Lay two cards so they
overlap, and their pieces would sort one by one: the second card's art could show through
the first card's frame. A **Sorting Group** on the card's root fixes that: the whole card
sorts as **one piece**, by the group's own Sorting Layer and Order in Layer, and the
orders inside it only arrange the card's own parts. Every card in a hand will get its own
Order (Chapter 6), and a card you hold moves to the **Held** layer (Chapter 7).

### Idea — sizes in units

The card's design is 250 × 333 pixels, so it's 2.5 × 3.33 units on the table, at 100
pixels a unit. A picture dragged into the scene comes in at its own size (`Card Front`
is 500 × 667 pixels, so 5 × 6.67 units), so each part gets a **Scale** that brings it to
its size on the card: 0.5 for the frame. World text is sized in units too: a **TextMeshPro
(3D)** text with **Font Size** 1.8 has letters about 0.18 units tall, the 18 pixels of the
design.

### Do it — the Cost Gem

1. In the Battle scene, **Create Empty**, `Cost Gem`, at (0, 0, 0). Drag `Art/UI/Gem`
   onto it: `Gem`, **Scale** (0.453, 0.453, 1), **Order in Layer** 5.
2. Right-click `Cost Gem` → **3D Object → Text - TextMeshPro**, `Cost`: **Pos** (0, 0.01,
   0), **Width** 0.58, **Height** 0.58. Text *1*, **Font Asset** `Cinzel-Bold SDF`,
   **Font Size** 3.2, white, centred both ways. Under **Extra Settings**, **Order in
   Layer** 6.
3. Drag `Cost Gem` into `Assets/Prefabs`, and delete it from the scene.

### Do it — the Card prefab

4. **Create Empty**, `Card`, at (0, 0, 0). **Add Component → Sorting Group**.
5. Its children, in this order. A sprite comes from dragging its picture onto `Card`; a
   text from right-clicking `Card` → **3D Object → Text - TextMeshPro**, with its **Order
   in Layer** under **Extra Settings**:

| Child | What | Position, size | Settings |
| --- | --- | --- | --- |
| `Background` | sprite `Card Background` | (0, 0), **Scale** (0.444, 0.463, 1) | **Order in Layer** 0 |
| `Art` | sprite `icon_sword` | (0, 0.265), **Scale** (1.031, 1.031, 1) | **Order in Layer** 1 |
| `Frame` | sprite `Card Front` | (0, 0), **Scale** (0.5, 0.5, 1) | **Order in Layer** 2 |
| `Kind Ribbon` | sprite `Panel` | (0, −0.455), **Scale** (0.35, 0.35, 1) | **Draw Mode** **Sliced**, **Size** (3.2, 0.743), colour `#A3283C`, **Order in Layer** 3 |
| `Kind` | text | (0, −0.445), 1.12 × 0.26 | *Attack*, `Cinzel-Bold SDF` 1.5, white, centred, **Character Spacing** 4, **Order in Layer** 4 |
| `Name` | text | (0, −0.775), 2.14 × 0.34 | *Quick Strike*, `CinzelDecorative-Bold SDF`, **Auto Size** 1.4–2.2, `#F3DDB6`, centred, **Order in Layer** 4 |
| `Rules` | text | (0, −1.115), 1.96 × 0.44 | *Deal 2 damage.*, `Cinzel-Regular SDF`, **Auto Size** 1.1–1.8, `#EDE3F0`, centred, **Wrapping** No Wrap, **Order in Layer** 4 |
| `Cost Gem` | the prefab | (−0.88, 1.295) | |

The ribbon is **Sliced**: its 9-slice border (Chapter 1) keeps the rounded ends while the
middle stretches. It's drawn at **Size** (3.2, 0.743) and scaled down by 0.35, to 1.12 ×
0.26 units: drawn smaller directly, its 20-pixel corners would be too big for so thin a
strip.

6. In `Scripts/Board`, `CardView`:

```csharp
using TMPro;
using UnityEngine;

// Shows one card on the Card prefab, in sprites and world text.
public class CardView : MonoBehaviour
{
    [SerializeField] SpriteRenderer art;
    [SerializeField] TMP_Text costText;
    [SerializeField] TMP_Text nameText;
    [SerializeField] TMP_Text rulesText;
    [SerializeField] TMP_Text kindText;
    [SerializeField] SpriteRenderer kindRibbon;
    [SerializeField] Color[] kindColours;      // one for each CardKind, in the enum's order

    public Card Card { get; private set; }

    public void Show(Card card)
    {
        Card = card;
        art.sprite = card.Art;
        costText.text = card.Cost.ToString();
        nameText.text = card.DisplayName;
        rulesText.text = card.Describe();
        kindText.text = card.Kind.ToString();
        kindRibbon.color = kindColours[(int)card.Kind];
    }
}
```

`(int)card.Kind` turns the enum into its number: Attack is 0, Drain 1, Heal 2, Shield 3,
Familiar 4. So the colours array lines up with the enum, one colour each. `TMP_Text` is
the class every TextMeshPro text is built on, the 3D kind and the UI kind alike.

7. Add `CardView` to `Card`. Drag in `Art`, the `Cost Gem`'s `Cost` text, `Name`, `Rules`,
   `Kind` and `Kind Ribbon`. Give **Kind Colours** five elements: `#A3283C` (Attack),
   `#7A1F52` (Drain), `#2E7D4F` (Heal), `#4D6A8A` (Shield), `#8A6420` (Familiar).
8. Drag `Card` into `Assets/Prefabs`, and delete it from the scene.
9. Right-click the `Card` prefab → **Create → Prefab Variant**, `Rare Card`. In it, set
   `Frame`'s sprite to `Rare Card Front` (the frame with spears and a red cloth), and
   `Name`'s colour to gold, `#FFD27A`. That's all a rare card is: the same card in a
   finer frame.

### Test it

10. **Create Empty**, `Card Row`, at (0, 0, 0), and give it `CardTest`, in `Scripts/Board`:

```csharp
using UnityEngine;

// A test: a row of cards on the table. Delete it in Chapter 6.
public class CardTest : MonoBehaviour
{
    [SerializeField] Card[] cards;
    [SerializeField] CardView cardPrefab;
    [SerializeField] CardView rareCardPrefab;
    [SerializeField] float gap = 2.6f;      // a little more than a card's width

    void Start()
    {
        for (int i = 0; i < cards.Length; i++)
        {
            Card card = cards[i];
            CardView view = Instantiate(card.IsRare ? rareCardPrefab : cardPrefab, transform);
            view.transform.localPosition = new Vector3((i - (cards.Length - 1) / 2f) * gap, 0f, 0f);
            view.Show(card);
        }
    }
}
```

`cardPrefab` is a `CardView`, not a `GameObject`: `Instantiate` copies the whole prefab
and hands back the new copy's `CardView`, ready to use. `i - (cards.Length - 1) / 2f`
counts from the middle of the row, so the row is centred.

11. Drag the `Card` and `Rare Card` prefabs into its fields, and put six cards in
    **Cards**, including **Frost Bolt** and **Golden Aegis**. **Play**: six cards in a
    row on the table, each in its own colours; the two rare ones in their finer frame.
12. Stop, set **Gap** to 1.5, and press **Play** again: the cards overlap. Which
    is on top? Each card sorts as one piece, but all six have the same Order, so Unity
    picks. Select one card in the Hierarchy and give its **Sorting Group** an **Order in
    Layer** of 10: it's on top, whole. Chapter 6 gives every card in a hand its own.

### Commit

*Add the Card prefab, its Rare variant and CardView.*

### Challenge

Make the cost gem red when a card costs 6 or more: one line in `Show`. (Then take it out:
in the game, the gem stays blue.)

## C# 6 — Choosing Collections and Types

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

## Chapter 6 — Draw and Discard

**Goal:** a `Deck` with a draw pile and a discard pile; each duelist's hand on the table,
fanned out (yours face up, your opponent's face down); and each duelist's two piles on the
table, with their counts and the top card of the discard pile. Drawing past seven cards
burns them; an empty draw pile reshuffles.

### Idea — two piles, two collections

| Pile | Cards come out | Collection | Its methods |
| --- | --- | --- | --- |
| **Draw pile** | from the top, in the order they were shuffled | `Queue<Card>`: first in, first out | `Enqueue`, `Dequeue`, `Count` |
| **Discard pile** | the last one played is on top, and you see it | `Stack<Card>`: last in, first out | `Push`, `Peek`, `Count` |
| **Hand** | any card, in any order | `List<Card>` | `Add`, `Remove`, `Contains` |

C# 6 said: *pick the collection whose rules are the pile's rules*. A Queue
can't take a card from the middle of the draw pile, and a Stack can only show its top
card: exactly like the real thing.

`Deck` is a **plain C# class**: no GameObject, no Inspector. A duelist makes one with
`new Deck(cards)`.

To **shuffle**, the cards go into a `List` first, and the **Fisher–Yates** shuffle runs
from the end: swap each card with a random one at or before it. Every order comes out
equally likely, which a casual "swap random pairs fifty times" doesn't manage.

### Do it — Deck

1. In `Scripts/Duel`, make a script called `Deck`, and replace everything with:

```csharp
using System.Collections.Generic;
using UnityEngine;

// A duelist's cards that aren't in their hand. The draw pile is a Queue: cards
// come off the top in the order they were shuffled. The discard pile is a Stack:
// the last card played is on top, and it's the one you see.
public class Deck
{
    readonly Queue<Card> drawPile = new Queue<Card>();
    readonly Stack<Card> discardPile = new Stack<Card>();

    public Deck(IReadOnlyList<Card> cards)
    {
        List<Card> shuffled = new List<Card>(cards);
        Shuffle(shuffled);
        foreach (Card card in shuffled)
        {
            drawPile.Enqueue(card);
        }
    }

    public int DrawCount { get { return drawPile.Count; } }
    public int DiscardCount { get { return discardPile.Count; } }

    // The top card of the draw pile, or null when both piles are empty.
    public Card Draw()
    {
        if (drawPile.Count == 0)
        {
            Reshuffle();
        }
        if (drawPile.Count == 0)
        {
            return null;
        }
        return drawPile.Dequeue();
    }

    public void Discard(Card card)
    {
        discardPile.Push(card);
    }

    // The card on top of the discard pile, left where it is; null when it's empty.
    public Card TopOfDiscard()
    {
        if (discardPile.Count == 0)
        {
            return null;
        }
        return discardPile.Peek();
    }

    // The discard pile, shuffled, becomes the new draw pile.
    void Reshuffle()
    {
        List<Card> cards = new List<Card>(discardPile);
        discardPile.Clear();
        Shuffle(cards);
        foreach (Card card in cards)
        {
            drawPile.Enqueue(card);
        }
        Debug.Log($"{cards.Count} cards reshuffled into the draw pile.");
    }

    // The Fisher–Yates shuffle: from the end, swap each card with a random
    // card at or before it. Every order comes up equally often.
    static void Shuffle(List<Card> cards)
    {
        for (int i = cards.Count - 1; i > 0; i--)
        {
            int j = Random.Range(0, i + 1);
            Card swap = cards[i];
            cards[i] = cards[j];
            cards[j] = swap;
        }
    }
}
```

`IReadOnlyList<Card>` takes an array or a List: both can be read like a list, and
neither can be changed through it.

### Do it — the card's back

2. Open the `Card` prefab. Drag `Art/Cards/Card Back` onto its root as a last child,
   `Back`: **Scale** (0.5, 0.5, 1), **Order in Layer** 10, so it covers the whole card.
   Untick it. Save. The Rare Card variant gets it too, without your touching it.
3. In `CardView`, add a field for it, a method to show it, and a line in `Show` to hide
   it; and one more thing a hand will need: a way to set the card's **Order in Layer**,
   through its Sorting Group. The new lines are marked `// new`:

```csharp
using TMPro;
using UnityEngine;
using UnityEngine.Rendering;

// Shows one card on the Card prefab, in sprites, face up or face down.
public class CardView : MonoBehaviour
{
    [SerializeField] SpriteRenderer art;
    [SerializeField] TMP_Text costText;
    [SerializeField] TMP_Text nameText;
    [SerializeField] TMP_Text rulesText;
    [SerializeField] TMP_Text kindText;
    [SerializeField] SpriteRenderer kindRibbon;
    [SerializeField] Color[] kindColours;      // one for each CardKind, in the enum's order
    [SerializeField] GameObject back;          // new: covers the card when it's face down
    [SerializeField] SortingGroup sortingGroup; // new

    public Card Card { get; private set; }

    public void Show(Card card)
    {
        Card = card;
        art.sprite = card.Art;
        costText.text = card.Cost.ToString();
        nameText.text = card.DisplayName;
        rulesText.text = card.Describe();
        kindText.text = card.Kind.ToString();
        kindRibbon.color = kindColours[(int)card.Kind];
        back.SetActive(false);                 // new
    }

    // new
    public void ShowBack()
    {
        back.SetActive(true);
    }

    // new: its place in the hand: a later card sorts over an earlier one.
    public void SetOrder(int order)
    {
        sortingGroup.sortingOrder = order;
    }
}
```

`SortingGroup` is in `UnityEngine.Rendering`, hence the new `using`.

4. In the `Card` prefab, drag `Back` into the new **Back** field, and the root's **Sorting
   Group** into **Sorting Group**.

### Idea — a hand as a fan

A Horizontal Layout Group lines up UI; on the table, the hand lays its cards out itself,
in code. A fan is three numbers per card, all counted from the middle of the hand. For
card `i` of `n`, `fromMiddle = i - (n - 1) / 2f`: −2, −1, 0, 1, 2 for five cards.

| | Formula | With 1.7, 0.07 and 4 |
| --- | --- | --- |
| across | `fromMiddle * gap` | −3.4, −1.7, 0, 1.7, 3.4 |
| down | `-fromMiddle * fromMiddle * arc` | −0.28, −0.07, 0, −0.07, −0.28: the ends sink, an arc |
| turned | `-fromMiddle * tilt` degrees | 8°, 4°, 0°, −4°, −8°: the ends lean out |

`gap` is the **spacing** until the hand would get wider than **Max Width**; then the cards
squeeze closer, so seven still fit. And each card's **Order** is its place in the hand,
`i`, so the cards overlap from left to right, like cards held in a hand.

### Do it — the hand

5. In `Scripts/Board`, `HandView`:

```csharp
using System.Collections.Generic;
using UnityEngine;

// Keeps a CardView for every card in a hand, and lays them out as a fan. For now
// it starts again from scratch whenever it's asked.
public class HandView : MonoBehaviour
{
    [SerializeField] CardView cardPrefab;
    [SerializeField] CardView rareCardPrefab;
    [SerializeField] bool faceDown;             // the opponent's hand
    [SerializeField] float spacing = 1.7f;      // between two cards' middles, in units
    [SerializeField] float maxWidth = 8.5f;     // a bigger hand squeezes closer
    [SerializeField] float arc = 0.07f;         // how far the outer cards sink
    [SerializeField] float tilt = 4f;           // degrees each card turns, from the middle

    readonly List<CardView> views = new List<CardView>();

    public void Show(IReadOnlyList<Card> hand)
    {
        foreach (CardView view in views)
        {
            Destroy(view.gameObject);
        }
        views.Clear();

        float gap = hand.Count > 1 ? Mathf.Min(spacing, maxWidth / (hand.Count - 1)) : 0f;
        for (int i = 0; i < hand.Count; i++)
        {
            Card card = hand[i];
            CardView view = Instantiate(card.IsRare ? rareCardPrefab : cardPrefab, transform);
            view.Show(card);
            if (faceDown)
            {
                view.ShowBack();
            }
            float fromMiddle = i - (hand.Count - 1) / 2f;
            view.transform.localPosition = new Vector3(fromMiddle * gap, -fromMiddle * fromMiddle * arc, 0f);
            view.transform.localRotation = Quaternion.Euler(0f, 0f, -fromMiddle * tilt);
            view.SetOrder(i);
            views.Add(view);
        }
    }
}
```

6. In the `Table`, **Create Empty**, `Player Hand`. **Add Component → Screen Edge**:
   **Screen Point** (0.5, 0), **Offset** (1.75, 1.7): its middle sits 1.7 units above the
   bottom of the screen, whatever the screen's shape, so the cards' lower edges hang just
   off it. Add `HandView`: the `Card` and `Rare Card` prefabs, and the default numbers.
7. `Opponent Hand`, also in the `Table`: **Scale** (0.36, 0.36, 1), small cards at the
   top. **Screen Edge**: **Screen Point** (0.5, 1), **Offset** (1.6, −0.85). `HandView`
   with **Face Down** ticked, **Spacing** 1.17 (in the hand's own, scaled-down units),
   **Arc** 0, **Tilt** −3: the backs lean the other way.

### Do it — the piles

8. In the `Table`, **Create Empty**, `Piles`, at (0, 0, 0). In it:
   - **Create Empty**, `Draw Pile`, at (−1.45, 0, 0). Drag `Art/Cards/Card Back` onto it
     three times: `Back 1` at (0, 0, 0), `Back 2` at (0.035, 0.035, 0) and `Back 3` at
     (0.07, 0.07, 0), each **Scale** (0.24, 0.24, 1), **Order in Layer** 0, 1 and 2: a
     small pile, the top card a little up and to the right.
   - A **Text - TextMeshPro** (3D), `Draw Count`: **Pos** (−1.4, −1.1, 0), 1.2 × 0.4,
     *16*, `Cinzel-Bold SDF` 2.6, `#F3DDB6`, centred, **Order in Layer** 5.
   - Drag the `Card` prefab in: `Top Of Discard`, at (0, 0, 0), **Scale** (0.48, 0.48, 1).
     A card nested in the piles: the discard pile's top card, face up.
   - `Discard Count`, like `Draw Count`, at (0, −1.1, 0), text *0*.

<!-- check: together -->

9. In `Scripts/Board`, `PileView`:

```csharp
using TMPro;
using UnityEngine;

// One duelist's two piles, on the table: the draw pile face down with its count,
// and the discard pile showing its top card. For now it's told when to redraw.
public class PileView : MonoBehaviour
{
    [SerializeField] GameObject drawPile;       // the backs: hidden when the pile is empty
    [SerializeField] TMP_Text drawCountText;
    [SerializeField] CardView topOfDiscard;
    [SerializeField] TMP_Text discardCountText;

    public void Show(Duelist duelist)
    {
        drawPile.SetActive(duelist.DrawPileCount > 0);
        drawCountText.text = duelist.DrawPileCount.ToString();
        discardCountText.text = duelist.DiscardPileCount.ToString();

        Card top = duelist.TopOfDiscard;
        topOfDiscard.gameObject.SetActive(top != null);
        if (top != null && topOfDiscard.Card != top)
        {
            topOfDiscard.Show(top);
        }
    }
}
```

`TopOfDiscard` comes from the deck's `Stack.Peek()`: the card on top, left where it is.
It needs a `Duelist` to show: that's next, and the Console complains until it's there.

10. Add `PileView` to `Piles`, and drag in `Draw Pile`, `Draw Count`, `Top Of Discard`
    and `Discard Count`. Drag `Piles` into `Assets/Prefabs`, and delete it from the scene.
11. Drag the `Piles` prefab into the `Table` twice:
    - `Opponent Piles`. **Add Component → Screen Edge**: **Screen Point** (1, 1),
      **Offset** (−0.95, −2.35): top-right, under the pause button. Set the three backs'
      sprite to `Opponent Card Back`.
    - `Player Piles`: **Screen Point** (1, 0), **Offset** (−0.95, 2.15), bottom-right,
      under End Turn. Move `Draw Count` and `Discard Count` up to **Y** 1.1, above the
      piles, clear of End Turn.

    Both are **overrides** on the prefab: an added component, and changed sprites or
    positions. The prefab stays the same for both.

### Do it — the duelist

12. In `Scripts/Duel`, `Duelist`. This first version tells its hand and its piles
    directly when something changes; Chapter 8 takes that away from it.

```csharp
using System.Collections.Generic;
using UnityEngine;

// One side of the duel. For now: a deck, a hand, and drawing.
public class Duelist : MonoBehaviour
{
    public const int MaxHandSize = 7;
    const int StartingHand = 4;

    [SerializeField] Card[] testDeck;           // until Chapter 8
    [SerializeField] HandView handView;
    [SerializeField] PileView piles;

    readonly List<Card> hand = new List<Card>();
    Deck deck;

    public IReadOnlyList<Card> Hand { get { return hand; } }
    public int DrawPileCount { get { return deck == null ? 0 : deck.DrawCount; } }
    public int DiscardPileCount { get { return deck == null ? 0 : deck.DiscardCount; } }
    public Card TopOfDiscard { get { return deck == null ? null : deck.TopOfDiscard(); } }

    void Start()
    {
        deck = new Deck(testDeck);
        for (int i = 0; i < StartingHand; i++)
        {
            Draw();
        }
    }

    public void Draw()
    {
        Card card = deck.Draw();
        if (card == null)
        {
            return;
        }
        if (hand.Count >= MaxHandSize)
        {
            deck.Discard(card);
            Debug.Log($"{card.DisplayName} burned: the hand is full.");
        }
        else
        {
            hand.Add(card);
        }
        handView.Show(hand);
        piles.Show(this);
    }
}
```

<!-- check: end -->

`Hand` hands out the list as an `IReadOnlyList`: the hand view can read it, and only the
duelist can change it. And `deck == null ? 0 : …` keeps the piles safe if they ask before
`Start` has made the deck.

13. Open the `Duelist Panel` prefab, add `Duelist` to its root, and save: both panels
    have one now. In the scene, give each panel's `Duelist` its **Hand View** (the
    `Player Hand` or the `Opponent Hand`), its **Piles** (`Player Piles` or `Opponent
    Piles`), and a **Test Deck** of 20 cards from the fourteen (some twice).
14. Delete `Card Row` and the `CardTest` script.
15. A button to draw with, for testing: drag a `Game Button` onto the `Canvas`, call it
    `Draw Test`, put it at the top middle, label *Draw*. In its **On Click ()** list, **+**,
    drag the `Player Panel` in, and choose **Duelist → Draw ()**.

### Test it

- **Play.** Four cards in your hand, fanned out, face up; four small backs at the top.
  Each duelist's piles say 16 to draw, 0 discarded, and show no top card.
- Click **Draw** three times: seven cards, squeezed a little closer.
- Click again: the Console says a card **burned**; your discard count is 1, and the
  burned card shows on top of your discard pile.
- Keep clicking until the draw count is 0, and once more: the Console says the discard
  pile was **reshuffled** into the draw pile, and the counts swap over.

### Commit

*Add the deck, the hands and the piles.* Try the Game view at 4:3 before you commit: the
hand and the piles stay against the screen's edges.

### Challenge

Give `Deck` a method `Card PeekDrawPile()` that returns the next card without taking it
(the Queue has a `Peek` too), and log it before each draw. Do the cards come out in that
order? Then remove it: in a real duel, nobody sees the next card.

## C# 7 — Interfaces

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
- No fields, and no `new` (CS0144), as with an abstract class (C# 4).

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

## Chapter 7 — Play a Card

**Goal:** drag a card out of your hand to play it. An attack dropped on your foe hurts
them; a heal or a shield dropped anywhere above your hand works on you. Every card costs
mana, and damage hits shield before health. Two interfaces make it work: our own,
`IDamageable`, and Unity's drag-and-drop ones.

### Idea — what an attack needs from its target

An attack card needs to hurt something. Today that's the opposing **duelist**; in
Chapter 9 it'll also be a **familiar**. The two have nothing else in common: one holds a
deck, a hand and mana; the other is a creature with power. A base class for both would
be a lie (C# 7). So they'll share an **interface**: a promise that they
*can be hurt*.

```csharp:IDamageable.cs
// Anything a card can hurt: a duelist, or a familiar. The two classes share
// nothing else, so they share this interface instead of a base class. An attack
// card takes an IDamageable and never needs to ask which one it got.
public interface IDamageable
{
    // The duelist this fights for: a duelist for itself, a familiar for its summoner.
    Duelist Owner { get; }

    int Health { get; }

    bool IsAlive { get; }

    void TakeDamage(int amount);
}
```

`Owner` lets the game check a target is on the right side: an attack must land on
something whose owner is the **foe**.

### Idea — Unity calls you through interfaces too

Dragging works the same way, from the other side. Unity's **EventSystem** watches the
pointer, and when you start dragging something, it looks for a component on it that
implements `IBeginDragHandler`, and calls its `OnBeginDrag`. You never call these methods
yourself; you promise to have them.

The EventSystem finds UI through each canvas's **Graphic Raycaster**. To find sprites, it
needs a **Physics 2D Raycaster** on the camera, and a **Collider 2D** on whatever it
should find. It puts what both raycasters hit into one list, sorted by Sorting Layer and
Order: so it can tell the card on top of a fan from the one beneath, and a card you hold
from the panel under it.

| Interface | Unity calls | When |
| --- | --- | --- |
| `IPointerEnterHandler` | `OnPointerEnter` | the pointer moves onto it |
| `IPointerExitHandler` | `OnPointerExit` | the pointer leaves it |
| `IBeginDragHandler` | `OnBeginDrag` | a drag starts on it |
| `IDragHandler` | `OnDrag` | every frame of the drag |
| `IEndDragHandler` | `OnEndDrag` | the drag ends |

Each method gets a `PointerEventData`: where the pointer is, and what's under it
(`pointerCurrentRaycast.gameObject`). When you drop a card, the thing under the pointer
might be a panel's portrait (UI), or a familiar's frame (a sprite). `GetComponentInParent<IDamageable>()`
searches it and its parents for **any** component that implements `IDamageable`:
`GetComponent` works with interfaces, which is lucky, because Unity can't show an
interface field in the Inspector.

### Do it — cards that do something

<!-- check: together -->

1. `Card` gets two more members: whether a card can be played right now, and what it
   does when it is. Here is the finished `Card`, with the new members at the end:

```csharp:Card.cs
using UnityEngine;

// The five kinds of card, for the Deck Builder's tabs and the ribbon on each card.
public enum CardKind
{
    Attack,
    Drain,
    Heal,
    Shield,
    Familiar
}

// Every card in Arcane Duel is an asset made from one of Card's subclasses:
// AttackCard, DrainCard, HealCard, ShieldCard or SummonCard. Card holds what they
// all share, and says what each kind must do in its own way. It's abstract, so
// there's no such thing as a plain Card: only an attack, a heal, a shield...
public abstract class Card : ScriptableObject
{
    [SerializeField] string id;             // never changes: the save file stores it
    [SerializeField] string displayName;
    [SerializeField] int cost = 1;
    [SerializeField] Sprite art;
    [SerializeField] bool isRare;

    public string Id { get { return id; } }
    public string DisplayName { get { return displayName; } }
    public int Cost { get { return cost; } }
    public Sprite Art { get { return art; } }
    public bool IsRare { get { return isRare; } }

    // Each kind says which kind it is.
    public abstract CardKind Kind { get; }

    // Must the player drop this card on a target? Most cards don't; attacks do.
    public virtual bool NeedsTarget { get { return false; } }

    // Can the card be played at all right now? Most always can.
    public virtual bool CanPlay(Duelist user)
    {
        return true;
    }

    // What the card does. user played it; target is what it was dropped on,
    // or null for a card that doesn't need one.
    public abstract void Play(Duelist user, IDamageable target);

    // The card's rules, written from its own numbers, so they're never out of date.
    public abstract string Describe();
}
```

The moment you save it, the Console fills with errors: `AttackCard`, `HealCard` and
`ShieldCard` don't write `Play` yet, and there's no `Duelist`. The next steps fix them.

2. Each kind writes its `Play`. An attack hurts its target, whatever it is:

```csharp:AttackCard.cs
using UnityEngine;

// Deals damage to whatever it's dropped on: the foe, or one of the foe's familiars.
// It never asks which: both are IDamageable.
[CreateAssetMenu(fileName = "New Attack Card", menuName = "Arcane Duel/Attack Card")]
public class AttackCard : Card
{
    [SerializeField] int damage = 2;

    public int Damage { get { return damage; } }

    public override CardKind Kind { get { return CardKind.Attack; } }

    public override bool NeedsTarget { get { return true; } }

    public override void Play(Duelist user, IDamageable target)
    {
        target.TakeDamage(damage);
    }

    public override string Describe()
    {
        return $"Deal {damage} damage.";
    }
}
```

```csharp:HealCard.cs
using UnityEngine;

// Heals the duelist who plays it, never above their most health.
[CreateAssetMenu(fileName = "New Heal Card", menuName = "Arcane Duel/Heal Card")]
public class HealCard : Card
{
    [SerializeField] int amount = 4;

    public int Amount { get { return amount; } }

    public override CardKind Kind { get { return CardKind.Heal; } }

    public override void Play(Duelist user, IDamageable target)
    {
        user.Heal(amount);
    }

    public override string Describe()
    {
        return $"Heal {amount}.";
    }
}
```

```csharp:ShieldCard.cs
using UnityEngine;

// Gives the duelist who plays it shield, which takes damage before health does,
// until the start of their next turn.
[CreateAssetMenu(fileName = "New Shield Card", menuName = "Arcane Duel/Shield Card")]
public class ShieldCard : Card
{
    [SerializeField] int amount = 3;

    public int Amount { get { return amount; } }

    public override CardKind Kind { get { return CardKind.Shield; } }

    public override void Play(Duelist user, IDamageable target)
    {
        user.GainShield(amount);
    }

    public override string Describe()
    {
        return $"Gain {amount} shield.";
    }
}
```

3. Make `IDamageable` in `Scripts/Duel`, as above.

### Do it — a duelist with health, shield and mana

4. The duelist grows: it's an `IDamageable` now, with health, shield and mana, a foe, and
   the rules for playing a card. The test fields at the top stand in for Chapter 8's
   turns: for now you always have 10 mana, and it's always your turn.

```csharp
using System.Collections.Generic;
using UnityEngine;

// One side of the duel: health, shield, mana, a deck and a hand. It can be hurt,
// so it's an IDamageable. For now it tells its hand, its piles and its panel when
// something changes; Chapter 8 takes that away from it.
public class Duelist : MonoBehaviour, IDamageable
{
    public const int MaxHandSize = 7;
    const int StartingHand = 4;

    [SerializeField] int maxHealth = 30;
    [SerializeField] string displayName = "You";
    [SerializeField] Card[] testDeck;           // these four, until Chapter 8
    [SerializeField] int testMana = 10;
    [SerializeField] bool takesTheFirstTurn;
    [SerializeField] Duelist foe;
    [SerializeField] HandView handView;
    [SerializeField] PileView piles;
    [SerializeField] DuelistPanel panel;

    readonly List<Card> hand = new List<Card>();
    Deck deck;

    public string DisplayName { get { return displayName; } }
    public Duelist Foe { get { return foe; } }
    public bool IsTakingTurn { get; set; }

    public Duelist Owner { get { return this; } }
    public int Health { get; private set; }
    public int MaxHealth { get { return maxHealth; } }
    public bool IsAlive { get { return Health > 0; } }
    public int Shield { get; private set; }
    public int Mana { get; private set; }
    public int ManaThisTurn { get; private set; }

    public IReadOnlyList<Card> Hand { get { return hand; } }
    public int DrawPileCount { get { return deck == null ? 0 : deck.DrawCount; } }
    public int DiscardPileCount { get { return deck == null ? 0 : deck.DiscardCount; } }
    public Card TopOfDiscard { get { return deck == null ? null : deck.TopOfDiscard(); } }

    void Start()
    {
        Health = maxHealth;
        ManaThisTurn = testMana;
        Mana = testMana;
        IsTakingTurn = takesTheFirstTurn;
        deck = new Deck(testDeck);
        for (int i = 0; i < StartingHand; i++)
        {
            Draw();
        }
    }

    public void Draw()
    {
        Card card = deck.Draw();
        if (card == null)
        {
            return;
        }
        if (hand.Count >= MaxHandSize)
        {
            deck.Discard(card);
            Debug.Log($"{card.DisplayName} burned: the hand is full.");
        }
        else
        {
            hand.Add(card);
        }
        Refresh();
    }

    // Can this card be played right now? It's this duelist's turn, the card is
    // in the hand, there's mana for it, and the card itself agrees.
    public bool CanPlay(Card card)
    {
        return IsTakingTurn && hand.Contains(card) && card.Cost <= Mana && card.CanPlay(this);
    }

    // An attack must land on the foe or one of the foe's familiars; other cards
    // take no target at all.
    public bool IsValidTarget(Card card, IDamageable target)
    {
        if (!card.NeedsTarget)
        {
            return true;
        }
        return target != null && target.IsAlive && target.Owner == Foe;
    }

    // Plays the card if the rules allow it, and says why not if they don't.
    public bool TryPlay(Card card, IDamageable target)
    {
        if (!IsTakingTurn || !hand.Contains(card))
        {
            return false;
        }
        if (card.Cost > Mana)
        {
            Debug.Log("Not enough mana.");
            return false;
        }
        if (!card.CanPlay(this))
        {
            Debug.Log("That card can't be played now.");
            return false;
        }
        if (!IsValidTarget(card, target))
        {
            Debug.Log("Drop an attack on the foe, or on one of the foe's familiars.");
            return false;
        }

        Mana -= card.Cost;
        hand.Remove(card);
        card.Play(this, target);
        deck.Discard(card);
        Refresh();
        return true;
    }

    public void TakeDamage(int amount)
    {
        if (!IsAlive || amount <= 0)
        {
            return;
        }
        int absorbed = Mathf.Min(Shield, amount);
        Shield -= absorbed;
        Health = Mathf.Max(Health - (amount - absorbed), 0);
        Refresh();
    }

    public void Heal(int amount)
    {
        Health = Mathf.Min(Health + amount, maxHealth);
        Refresh();
    }

    public void GainShield(int amount)
    {
        Shield += amount;
        Refresh();
    }

    void Refresh()
    {
        handView.Show(hand);
        piles.Show(this);
        panel.Show(this);
    }
}
```

Read `TakeDamage` slowly. With 3 shield and an attack of 5: the shield absorbs 3 (the
smaller of 3 and 5), drops to 0, and health loses the other 2. `Mathf.Max(…, 0)` stops
health going below 0. And `IsValidTarget` uses the interface's `Owner`: the target must
fight for the foe. The Console still complains about one thing: `DuelistPanel`, which
the duelist tells, doesn't exist yet.

5. Now a panel can show the duelist. In `Scripts/UI`, `DuelistPanel`, with the name and
   the three bars:

```csharp
using TMPro;
using UnityEngine;

// A Duelist Panel shows one duelist: the name and the three bars.
public class DuelistPanel : MonoBehaviour
{
    [SerializeField] TMP_Text nameText;
    [SerializeField] StatBar healthBar;
    [SerializeField] StatBar shieldBar;
    [SerializeField] StatBar manaBar;

    public void Show(Duelist duelist)
    {
        nameText.text = duelist.DisplayName;
        healthBar.Show(duelist.Health, duelist.MaxHealth, $"{duelist.Health} / {duelist.MaxHealth}");
        shieldBar.Show(duelist.Shield, duelist.MaxHealth, duelist.Shield.ToString());
        manaBar.Show(duelist.Mana, duelist.ManaThisTurn, $"{duelist.Mana} / {duelist.ManaThisTurn}");
    }
}
```

<!-- check: end -->

Save, and the Console is clear again. The shield bar measures shield against the most
health: 15 shield fills half the bar.

### Do it — drag and drop

6. Select the **Main Camera**. **Add Component → Physics 2D Raycaster**: now the
   EventSystem can find sprites with colliders, as well as UI.
7. Open the `Card` prefab, select its `Frame`, and **Add Component → Box Collider 2D**.
   It takes the sprite's size by itself. Why the Frame, and not the card's root? The
   Physics 2D Raycaster sorts a hit by the **Sprite Renderer on the collider's own
   GameObject**, and by its Sorting Group when it has one. On the Frame, the card on top
   of a fan wins; on the root, which has no renderer, every card would sort the same, and
   you could pick up a card from under its neighbour. The pointer events still reach
   `CardView` on the root: the EventSystem looks up the parents for them.
8. `CardView` learns to be hovered, dragged and dropped:

```csharp
using TMPro;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.Rendering;

// One card on the table, in sprites. In your hand you can hover it, drag it, and
// drop it to play it. Unity's EventSystem calls the methods below because this class
// implements its interfaces: the Physics 2D Raycaster on the camera finds the card
// through the Box Collider 2D on its Frame.
public class CardView : MonoBehaviour, IPointerEnterHandler, IPointerExitHandler,
                        IBeginDragHandler, IDragHandler, IEndDragHandler
{
    const string HeldLayer = "Held";    // the sorting layer above the panels
    const float PlayLine = 0.3f;        // dropped above this share of the screen's height: played

    [SerializeField] SpriteRenderer art;
    [SerializeField] TMP_Text costText;
    [SerializeField] TMP_Text nameText;
    [SerializeField] TMP_Text rulesText;
    [SerializeField] TMP_Text kindText;
    [SerializeField] SpriteRenderer kindRibbon;
    [SerializeField] Color[] kindColours;      // one for each CardKind, in the enum's order
    [SerializeField] GameObject back;          // covers the card when it's face down
    [SerializeField] SortingGroup sortingGroup;
    [SerializeField] Collider2D frameCollider; // on the Frame, so the Sorting Group decides which card is on top

    Duelist owner;          // set in your hand; null face down and on a pile
    string restingLayer;    // the sorting layer it goes back to

    public Card Card { get; private set; }
    public bool IsHovered { get; private set; }
    public bool IsDragging { get; private set; }

    void Awake()
    {
        restingLayer = sortingGroup.sortingLayerName;
    }

    public void Show(Card card)
    {
        Card = card;
        art.sprite = card.Art;
        costText.text = card.Cost.ToString();
        nameText.text = card.DisplayName;
        rulesText.text = card.Describe();
        kindText.text = card.Kind.ToString();
        kindRibbon.color = kindColours[(int)card.Kind];
        back.SetActive(false);
    }

    public void ShowBack()
    {
        back.SetActive(true);
    }

    // A card in this duelist's hand: it can be hovered and dragged.
    public void SetOwner(Duelist duelist)
    {
        owner = duelist;
    }

    // Its place in the hand: a later card sorts over an earlier one.
    public void SetOrder(int order)
    {
        sortingGroup.sortingOrder = order;
    }

    public void OnPointerEnter(PointerEventData eventData)
    {
        if (owner == null || IsDragging)
        {
            return;
        }
        IsHovered = true;       // the hand raises it
        Hold(true);
    }

    public void OnPointerExit(PointerEventData eventData)
    {
        if (owner == null || IsDragging)
        {
            return;
        }
        IsHovered = false;
        Hold(false);
    }

    public void OnBeginDrag(PointerEventData eventData)
    {
        if (owner == null || !owner.IsTakingTurn)
        {
            eventData.pointerDrag = null;   // not now: Unity stops sending this drag
            return;
        }
        IsDragging = true;
        frameCollider.enabled = false;      // so the pointer can see what's under the card
        Hold(true);
    }

    public void OnDrag(PointerEventData eventData)
    {
        if (!IsDragging)
        {
            return;
        }
        Vector3 pointer = eventData.pressEventCamera.ScreenToWorldPoint(eventData.position);
        transform.position = new Vector3(pointer.x, pointer.y, 0f);
        transform.rotation = Quaternion.identity;
        transform.localScale = Vector3.one;
    }

    public void OnEndDrag(PointerEventData eventData)
    {
        if (!IsDragging)
        {
            return;
        }
        bool played = TryPlay(eventData);
        IsDragging = false;
        IsHovered = false;
        if (!played)
        {
            frameCollider.enabled = true;
            Hold(false);                    // the hand moves it back to its place
        }
    }

    bool TryPlay(PointerEventData eventData)
    {
        IDamageable target = null;
        GameObject under = eventData.pointerCurrentRaycast.gameObject;
        if (under != null)
        {
            target = under.GetComponentInParent<IDamageable>();
        }
        if (!Card.NeedsTarget && eventData.position.y < Screen.height * PlayLine)
        {
            return false;   // dropped back into the hand
        }
        return owner.TryPlay(Card, target);
    }

    // Hovered, held or flying, a card sorts on the Held layer: over the other cards
    // and over the UI.
    void Hold(bool held)
    {
        sortingGroup.sortingLayerName = held ? HeldLayer : restingLayer;
    }
}
```

The parts that matter:

- **Five interfaces** after the colon: a class has only one base class
  (`MonoBehaviour`), but can promise as many interfaces as it likes.
- `eventData.pointerDrag = null` in `OnBeginDrag` cancels the drag when it isn't your
  turn: Unity stops sending it.
- `frameCollider.enabled = false` while dragging: otherwise the pointer would only ever
  see the card you're holding, and never what's under it.
- `ScreenToWorldPoint` turns the pointer's place on the screen into a place on the table,
  through the camera that saw the press (`pressEventCamera`).
- `Hold` moves the card to the **Held** sorting layer, so a card you hover or drag draws
  over everything: the other cards, and the panel you drop it on.
- A heal or a shield is played if you drop it above the bottom 30% of the screen: lift it
  out of your hand, let go anywhere.

9. In the `Card` prefab, drag the `Frame`'s **Box Collider 2D** into **Frame Collider**.
   Save.
10. `HandView` changes in two ways. It tells your cards who holds them, with `SetOwner`.
    And it moves the cards **every frame**, part of the way to their places: so a hovered
    card rises and grows, and a card let go slides back.

```csharp
using System.Collections.Generic;
using UnityEngine;

// Keeps a CardView for every card in a hand, and lays them out as a fan. Every
// frame each card moves part of the way to its place, so a hovered card rises and
// a card let go slides back. For now it starts again from scratch whenever it's
// asked to show the hand.
public class HandView : MonoBehaviour
{
    const float Smoothing = 12f;    // how quickly cards move to their places

    [SerializeField] Duelist duelist;
    [SerializeField] CardView cardPrefab;
    [SerializeField] CardView rareCardPrefab;
    [SerializeField] bool faceDown;             // the opponent's hand
    [SerializeField] float spacing = 1.7f;      // between two cards' middles, in units
    [SerializeField] float maxWidth = 8.5f;     // a bigger hand squeezes closer
    [SerializeField] float arc = 0.07f;         // how far the outer cards sink
    [SerializeField] float tilt = 4f;           // degrees each card turns, from the middle
    [SerializeField] float hoverRise = 1.45f;   // a hovered card rises this far, and grows
    [SerializeField] float hoverScale = 1.3f;

    readonly List<CardView> views = new List<CardView>();

    void Update()
    {
        float gap = views.Count > 1 ? Mathf.Min(spacing, maxWidth / (views.Count - 1)) : 0f;
        float step = Smoothing * Time.deltaTime;
        for (int i = 0; i < views.Count; i++)
        {
            CardView view = views[i];
            if (view.IsDragging)
            {
                continue;       // the pointer moves this one
            }
            float fromMiddle = i - (views.Count - 1) / 2f;
            Vector3 place = new Vector3(fromMiddle * gap, -fromMiddle * fromMiddle * arc, 0f);
            Quaternion turn = Quaternion.Euler(0f, 0f, -fromMiddle * tilt);
            float scale = 1f;
            if (view.IsHovered)
            {
                place.y = hoverRise;
                turn = Quaternion.identity;
                scale = hoverScale;
            }
            Transform card = view.transform;
            card.localPosition = Vector3.Lerp(card.localPosition, place, step);
            card.localRotation = Quaternion.Slerp(card.localRotation, turn, step);
            card.localScale = Vector3.Lerp(card.localScale, Vector3.one * scale, step);
        }
    }

    public void Show(IReadOnlyList<Card> hand)
    {
        foreach (CardView view in views)
        {
            Destroy(view.gameObject);
        }
        views.Clear();

        for (int i = 0; i < hand.Count; i++)
        {
            Card card = hand[i];
            CardView view = Instantiate(card.IsRare ? rareCardPrefab : cardPrefab, transform);
            view.Show(card);
            if (faceDown)
            {
                view.ShowBack();
            }
            else
            {
                view.SetOwner(duelist);
            }
            view.SetOrder(i);
            views.Add(view);
        }
    }
}
```

`Vector3.Lerp(from, to, step)` goes part of the way from one to the other: with `step`
about 0.2 at 60 frames a second, a fifth of what's left each frame. That's quick at first
and gentle at the end. `Quaternion.Slerp` does the same for a turn.

11. Set it up in the scene:
    - `Player Hand`'s `HandView`: **Duelist**, the `Player Panel`. `Opponent Hand`'s: the
      `Opponent Panel`.
    - Open the `Duelist Panel` prefab, add `DuelistPanel` to its root, and fill its
      fields: `Name`, and the three nested bars. Save.
    - `Player Panel`'s `Duelist`: **Display Name** *You*, **Test Mana** 10, **Takes The
      First Turn** ticked, **Foe** the `Opponent Panel`, and **Panel** its own
      `DuelistPanel`.
    - `Opponent Panel`'s `Duelist`: **Display Name** *Mira the Ranger*, **Foe** the
      `Player Panel`, **Panel** its own `DuelistPanel`. Set its `Portrait`'s image to
      `Art/Portraits/Mira` (an override; in Chapter 8 the code sets it).
    - Give both test decks attacks, heals and shields.

### Test it

- **Play.** Hover a card in your hand: it rises out of the fan, grows, and draws over its
  neighbours. Move off: it slides back. Each time you draw, the whole hand flies out from
  the middle again: it's made from scratch. Chapter 8 fixes that.
- Drag an attack onto Mira's portrait or panel and let go: her health drops, and your
  mana goes down by the card's cost. The card goes to your discard pile, and shows on top
  of it.
- Drag a **Buckler** up out of your hand and let go over the table: your shield bar shows
  3. Play an attack on yourself? You can't: drop one on your own panel, and the Console
  says *Drop an attack on the foe*.
- Drag a card a little way and let go **in** your hand: it slides back where it was.
- Hold an attack over Mira's panel: the card draws **over** the panel, on the Held layer.
- Spend your 10 mana, then try another card: *Not enough mana.*

### Commit

*Play cards by dragging them: IDamageable, mana and shield.*

### Challenge

The rule "damage hits shield first" lives in one method. Write it out on paper for a
duelist with 4 shield and 10 health who takes 7 damage, line by line through
`TakeDamage`. What are their shield and health after? (0 shield and 7 health.)

## C# 8 — Events and Delegates

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

## Chapter 8 — Turns

**Goal:** a real duel, turn by turn. A `DuelManager` runs the turns as a state machine;
the duelists **raise events** when anything changes, and the screen **listens**; you end
your turn with the End Turn button, and a stand-in opponent ends theirs. Played cards fly
to the table, and the duel knows when someone falls.

### Idea — who should know about whom

Look at what Chapter 7's `Duelist` knows: its hand view, its piles and its panel. Every
change ends with `Refresh()`, which tells all three. Now think ahead: popups when it's hurt, an effect, a
sound, a message line, the results' numbers. Each one would be another field on
`Duelist`, and another line in `Refresh`. The class that holds the *rules* would end up
knowing about every piece of the *screen*.

C# 8 turns that round. The duelist only **announces** what happened, with C#
events: `Changed`, `Damaged`, `CardPlayed`, `Died`. Anything that cares **subscribes**,
and the duelist doesn't know or care who's listening.

```
before:  Duelist ──tells──► HandView, PileView, DuelistPanel   (Duelist knows them)
after:   Duelist ──raises Changed──►  whoever subscribed     (they know Duelist)
             ▲ HandView   ▲ PileView   ▲ DuelistPanel   ▲ DuelManager...  subscribe
```

Sam's style guide has the rules: subscribe in `OnEnable`, unsubscribe in `OnDisable`, and
raise with `?.Invoke`, so it's fine if nobody's listening.

<!-- check: together -->

### Idea — the duel as a state machine

The duel is in one state at a time, as Level 3's games were:

```
Starting ──► Player Turn ◄──► Opponent Turn ──► Over
                  └───────────────┴─────────► Over   (a duelist falls)
```

Each state's enter step starts that duelist's turn: their shield drops, their mana
refills, they draw, and then their **controller** is told to play. Who's the controller?
For you, a script that waits for the End Turn button. For the opponent, for now, a
stand-in that passes; in Chapter 11, the computer. `DuelManager` holds both as an
`IDuelistController` and calls `BeginTurn` on whichever's turn it is, so it never knows
which is which:

```csharp:IDuelistController.cs
// Whoever decides a duelist's moves: the player, through the screen, or the
// computer. DuelManager calls BeginTurn when that duelist's turn starts, and the
// controller calls duel.EndTurn when it's done. The duel never needs to know
// which of the two it's talking to.
public interface IDuelistController
{
    void BeginTurn(Duelist me, Duelist foe, DuelManager duel);
}
```

### Idea — C# events and UnityEvents, side by side

`DuelManager` raises both kinds, for different listeners:

| | Who listens | Wired | Example |
| --- | --- | --- | --- |
| C# event | other scripts | in code, with `+=` | `TurnStarted`, `DuelEnded` |
| `UnityEvent` | anything in the scene a designer picks | in the Inspector | `onPlayerTurn`: show the glow behind your hand |

### Do it — the deck announces its reshuffle

1. The deck stops writing to the Console itself, and raises an event instead. Two
   changes: `using System;` and the `Reshuffled` event. `System` has a `Random` class
   too, so `Random.Range` would be ambiguous now; `UnityEngine.Random.Range` says which.

   This chapter changes several scripts that are written for each other. From here until
   `DuelManager` (step 9), the Console shows errors as you save: each one waits for a
   script still to come. Keep going; they all clear at step 9.

```csharp:Deck.cs
using System;
using System.Collections.Generic;
using UnityEngine;

// A duelist's cards that aren't in their hand. The draw pile is a Queue: cards
// come off the top in the order they were shuffled. The discard pile is a Stack:
// the last card played is on top, and it's the one you see. A plain C# class:
// no GameObject needed, so `new Deck(cards)` makes one.
public class Deck
{
    readonly Queue<Card> drawPile = new Queue<Card>();
    readonly Stack<Card> discardPile = new Stack<Card>();

    public Deck(IReadOnlyList<Card> cards)
    {
        List<Card> shuffled = new List<Card>(cards);
        Shuffle(shuffled);
        foreach (Card card in shuffled)
        {
            drawPile.Enqueue(card);
        }
    }

    public int DrawCount { get { return drawPile.Count; } }
    public int DiscardCount { get { return discardPile.Count; } }

    // Raised with the number of cards when the discard pile becomes the draw pile.
    public event Action<int> Reshuffled;

    // The top card of the draw pile, or null when both piles are empty.
    public Card Draw()
    {
        if (drawPile.Count == 0)
        {
            Reshuffle();
        }
        if (drawPile.Count == 0)
        {
            return null;
        }
        return drawPile.Dequeue();
    }

    public void Discard(Card card)
    {
        discardPile.Push(card);
    }

    // The card on top of the discard pile, left where it is; null when it's empty.
    public Card TopOfDiscard()
    {
        if (discardPile.Count == 0)
        {
            return null;
        }
        return discardPile.Peek();
    }

    // The discard pile, shuffled, becomes the new draw pile.
    void Reshuffle()
    {
        List<Card> cards = new List<Card>(discardPile);
        discardPile.Clear();
        Shuffle(cards);
        foreach (Card card in cards)
        {
            drawPile.Enqueue(card);
        }
        if (cards.Count > 0)
        {
            Reshuffled?.Invoke(cards.Count);
        }
    }

    // The Fisher–Yates shuffle: from the end, swap each card with a random
    // card at or before it. Every order comes up equally often.
    static void Shuffle(List<Card> cards)
    {
        for (int i = cards.Count - 1; i > 0; i--)
        {
            int j = UnityEngine.Random.Range(0, i + 1);
            Card swap = cards[i];
            cards[i] = cards[j];
            cards[j] = swap;
        }
    }
}
```

The event is the deck's own, so any script holding a deck can listen. It only fires when
there was something to reshuffle.

2. Make `IDuelistController` in `Scripts/Duel`, as above.

### Do it — a duelist that only announces

3. Replace `Duelist` with this version. Everything that touched the screen is gone: no
   hand view, no piles, no panel, no `Refresh`, no `Debug.Log`. In their place, events. The test
   fields are gone too: `DuelManager` hands each duelist its name, portrait and deck with
   `Begin`, and starts each turn with `StartTurn`.

```csharp
using System;
using System.Collections.Generic;
using UnityEngine;

// One side of the duel: health, shield, mana, a deck and a hand. It knows the
// rules for its own side; DuelManager says whose turn it is. Whatever changes raises an event, and the screen listens: a Duelist
// never touches the UI itself.
public class Duelist : MonoBehaviour, IDamageable
{
    public const int MaxHandSize = 7;
    public const int MaxMana = 10;
    const int StartingHand = 4;

    [SerializeField] int maxHealth = 30;

    readonly List<Card> hand = new List<Card>();
    Deck deck;
    int turnsTaken;

    public string DisplayName { get; private set; }
    public Sprite Portrait { get; private set; }
    public Duelist Foe { get; set; }
    public bool IsTakingTurn { get; set; }

    public Duelist Owner { get { return this; } }
    public int Health { get; private set; }
    public int MaxHealth { get { return maxHealth; } }
    public bool IsAlive { get { return Health > 0; } }
    public int Shield { get; private set; }
    public int Mana { get; private set; }
    public int ManaThisTurn { get; private set; }

    public IReadOnlyList<Card> Hand { get { return hand; } }
    public int DrawPileCount { get { return deck == null ? 0 : deck.DrawCount; } }
    public int DiscardPileCount { get { return deck == null ? 0 : deck.DiscardCount; } }
    public Card TopOfDiscard { get { return deck == null ? null : deck.TopOfDiscard(); } }

    public event Action Changed;                    // anything on the panel or in the hand
    public event Action<int> Damaged;
    public event Action<int> Healed;
    public event Action<int> Shielded;
    public event Action<Card> CardPlayed;
    public event Action<string> Announced;          // a line for the message bar
    public event Action Died;

    // DuelManager calls this once, before the first turn.
    public void Begin(string displayName, Sprite portrait, IReadOnlyList<Card> cards)
    {
        DisplayName = displayName;
        Portrait = portrait;
        Health = maxHealth;
        deck = new Deck(cards);
        deck.Reshuffled += OnReshuffled;
        for (int i = 0; i < StartingHand; i++)
        {
            Draw();
        }
        Changed?.Invoke();
    }

    // The start of this duelist's turn: the shield drops, the mana refills, and
    // a card is drawn.
    public void StartTurn()
    {
        turnsTaken++;
        Shield = 0;
        ManaThisTurn = Mathf.Min(turnsTaken, MaxMana);
        Mana = ManaThisTurn;
        Draw();
        Changed?.Invoke();
    }

    public void Draw()
    {
        Card card = deck.Draw();
        if (card == null)
        {
            return;
        }
        if (hand.Count >= MaxHandSize)
        {
            deck.Discard(card);
            Announced?.Invoke($"{card.DisplayName} burned: the hand is full.");
        }
        else
        {
            hand.Add(card);
        }
        Changed?.Invoke();
    }

    // Can this card be played right now? It's this duelist's turn, the card is
    // in the hand, there's mana for it, and the card itself agrees.
    public bool CanPlay(Card card)
    {
        return IsTakingTurn && hand.Contains(card) && card.Cost <= Mana && card.CanPlay(this);
    }

    // An attack must land on the foe or one of the foe's familiars; other cards
    // take no target at all.
    public bool IsValidTarget(Card card, IDamageable target)
    {
        if (!card.NeedsTarget)
        {
            return true;
        }
        return target != null && target.IsAlive && target.Owner == Foe;
    }

    // Plays the card if the rules allow it, and says why not if they don't.
    public bool TryPlay(Card card, IDamageable target)
    {
        if (!IsTakingTurn || !hand.Contains(card))
        {
            return false;
        }
        if (card.Cost > Mana)
        {
            Announced?.Invoke("Not enough mana.");
            return false;
        }
        if (!card.CanPlay(this))
        {
            Announced?.Invoke("That card can't be played now.");
            return false;
        }
        if (!IsValidTarget(card, target))
        {
            Announced?.Invoke("Drop an attack on the foe, or on one of the foe's familiars.");
            return false;
        }

        Mana -= card.Cost;
        hand.Remove(card);
        CardPlayed?.Invoke(card);
        card.Play(this, target);
        deck.Discard(card);
        Changed?.Invoke();
        return true;
    }

    public void TakeDamage(int amount)
    {
        if (!IsAlive || amount <= 0)
        {
            return;
        }
        int absorbed = Mathf.Min(Shield, amount);
        Shield -= absorbed;
        Health = Mathf.Max(Health - (amount - absorbed), 0);
        Damaged?.Invoke(amount);
        Changed?.Invoke();
        if (!IsAlive)
        {
            Died?.Invoke();
        }
    }

    public void Heal(int amount)
    {
        int before = Health;
        Health = Mathf.Min(Health + amount, maxHealth);
        Healed?.Invoke(Health - before);
        Changed?.Invoke();
    }

    public void GainShield(int amount)
    {
        Shield += amount;
        Shielded?.Invoke(amount);
        Changed?.Invoke();
    }

    void OnReshuffled(int count)
    {
        Announced?.Invoke($"{DisplayName}: {count} cards reshuffled into the draw pile.");
    }
}
```

Look at what's new:

- **Nine events.** `Changed` covers anything the panel or the hand shows. The others carry
  what happened: `Damaged(6)`, `Healed(4)`, `CardPlayed(the card)`, `Announced("Not
  enough mana.")` for the message line.
- `TryPlay` raises `CardPlayed` **before** playing the card: whoever is listening sees it
  leave the hand first.
- `StartTurn` counts turns: on its third turn a duelist has 3 mana, up to 10.
- **Nothing in it knows about the screen.** You could run a duel with no screen at all.

### Do it — a screen that only listens

4. `DuelistPanel` keeps its own `Duelist`, and subscribes:

```csharp
using TMPro;
using UnityEngine;
using UnityEngine.UI;

// A Duelist Panel shows one Duelist and never changes it. It listens to the
// duelist's Changed event and redraws itself. Nothing happens in Update.
public class DuelistPanel : MonoBehaviour
{
    [SerializeField] Duelist duelist;
    [SerializeField] Image portrait;
    [SerializeField] TMP_Text nameText;
    [SerializeField] StatBar healthBar;
    [SerializeField] StatBar shieldBar;
    [SerializeField] StatBar manaBar;

    void OnEnable()
    {
        duelist.Changed += Redraw;
    }

    void OnDisable()
    {
        duelist.Changed -= Redraw;
    }

    void Redraw()
    {
        portrait.sprite = duelist.Portrait;
        nameText.text = duelist.DisplayName;
        healthBar.Show(duelist.Health, duelist.MaxHealth, $"{duelist.Health} / {duelist.MaxHealth}");
        shieldBar.Show(duelist.Shield, duelist.MaxHealth, duelist.Shield.ToString());
        manaBar.Show(duelist.Mana, duelist.ManaThisTurn, $"{duelist.Mana} / {duelist.ManaThisTurn}");
    }
}
```

Its public `Show` became a private `Redraw`: nobody calls it any more; the event does.
`PileView` changes the same way, and that's its last change:

```csharp:PileView.cs
using TMPro;
using UnityEngine;

// One duelist's two piles, on the table: the draw pile face down with its count,
// and the discard pile showing its top card, the one Stack.Peek returns. It only
// listens to the duelist's Changed event.
public class PileView : MonoBehaviour
{
    [SerializeField] Duelist duelist;
    [SerializeField] GameObject drawPile;       // the backs: hidden when the pile is empty
    [SerializeField] TMP_Text drawCountText;
    [SerializeField] CardView topOfDiscard;
    [SerializeField] TMP_Text discardCountText;

    void OnEnable()
    {
        duelist.Changed += Redraw;
    }

    void OnDisable()
    {
        duelist.Changed -= Redraw;
    }

    void Redraw()
    {
        drawPile.SetActive(duelist.DrawPileCount > 0);
        drawCountText.text = duelist.DrawPileCount.ToString();
        discardCountText.text = duelist.DiscardPileCount.ToString();

        Card top = duelist.TopOfDiscard;
        topOfDiscard.gameObject.SetActive(top != null);
        if (top != null && topOfDiscard.Card != top)
        {
            topOfDiscard.Show(top);
        }
    }
}
```

5. `CardView` learns to fly: a played card slides to the **Play Spot**, shows itself
   (face up, even the opponent's), and shrinks away. New: `FlyAway` and the `Fly`
   coroutine. This is the finished `CardView`:

```csharp:CardView.cs
using System.Collections;
using TMPro;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.Rendering;

// One card on the table, in sprites. In your hand you can hover it, drag it, and
// drop it to play it. Unity's EventSystem calls the methods below because this class
// implements its interfaces: the Physics 2D Raycaster on the camera finds the card
// through the Box Collider 2D on its Frame.
public class CardView : MonoBehaviour, IPointerEnterHandler, IPointerExitHandler,
                        IBeginDragHandler, IDragHandler, IEndDragHandler
{
    const string HeldLayer = "Held";    // the sorting layer above the panels
    const float PlayLine = 0.3f;        // dropped above this share of the screen's height: played
    const float FlyTime = 0.3f;
    const float ShowTime = 0.5f;
    const float ShrinkTime = 0.25f;
    const float ShowScale = 1.3f;

    [SerializeField] SpriteRenderer art;
    [SerializeField] TMP_Text costText;
    [SerializeField] TMP_Text nameText;
    [SerializeField] TMP_Text rulesText;
    [SerializeField] TMP_Text kindText;
    [SerializeField] SpriteRenderer kindRibbon;
    [SerializeField] Color[] kindColours;      // one for each CardKind, in the enum's order
    [SerializeField] GameObject back;          // covers the card when it's face down
    [SerializeField] SortingGroup sortingGroup;
    [SerializeField] Collider2D frameCollider; // on the Frame, so the Sorting Group decides which card is on top

    Duelist owner;          // set in your hand; null face down and on a pile
    string restingLayer;    // the sorting layer it goes back to

    public Card Card { get; private set; }
    public bool IsHovered { get; private set; }
    public bool IsDragging { get; private set; }

    void Awake()
    {
        restingLayer = sortingGroup.sortingLayerName;
    }

    public void Show(Card card)
    {
        Card = card;
        art.sprite = card.Art;
        costText.text = card.Cost.ToString();
        nameText.text = card.DisplayName;
        rulesText.text = card.Describe();
        kindText.text = card.Kind.ToString();
        kindRibbon.color = kindColours[(int)card.Kind];
        back.SetActive(false);
    }

    public void ShowBack()
    {
        back.SetActive(true);
    }

    // A card in this duelist's hand: it can be hovered and dragged.
    public void SetOwner(Duelist duelist)
    {
        owner = duelist;
    }

    // Its place in the hand: a later card sorts over an earlier one.
    public void SetOrder(int order)
    {
        sortingGroup.sortingOrder = order;
    }

    public void OnPointerEnter(PointerEventData eventData)
    {
        if (owner == null || IsDragging)
        {
            return;
        }
        IsHovered = true;       // the hand raises it
        Hold(true);
    }

    public void OnPointerExit(PointerEventData eventData)
    {
        if (owner == null || IsDragging)
        {
            return;
        }
        IsHovered = false;
        Hold(false);
    }

    public void OnBeginDrag(PointerEventData eventData)
    {
        if (owner == null || !owner.IsTakingTurn)
        {
            eventData.pointerDrag = null;   // not now: Unity stops sending this drag
            return;
        }
        IsDragging = true;
        frameCollider.enabled = false;      // so the pointer can see what's under the card
        Hold(true);
    }

    public void OnDrag(PointerEventData eventData)
    {
        if (!IsDragging)
        {
            return;
        }
        Vector3 pointer = eventData.pressEventCamera.ScreenToWorldPoint(eventData.position);
        transform.position = new Vector3(pointer.x, pointer.y, 0f);
        transform.rotation = Quaternion.identity;
        transform.localScale = Vector3.one;
    }

    public void OnEndDrag(PointerEventData eventData)
    {
        if (!IsDragging)
        {
            return;
        }
        bool played = TryPlay(eventData);
        IsDragging = false;
        IsHovered = false;
        if (!played)
        {
            frameCollider.enabled = true;
            Hold(false);                    // the hand moves it back to its place
        }
    }

    // A played card slides to the middle of the table, shows itself, and shrinks away.
    public void FlyAway(Vector3 spot)
    {
        back.SetActive(false);
        frameCollider.enabled = false;
        Hold(true);
        transform.SetParent(null, true);    // it isn't the hand's any more
        StartCoroutine(Fly(spot));
    }

    bool TryPlay(PointerEventData eventData)
    {
        IDamageable target = null;
        GameObject under = eventData.pointerCurrentRaycast.gameObject;
        if (under != null)
        {
            target = under.GetComponentInParent<IDamageable>();
        }
        if (!Card.NeedsTarget && eventData.position.y < Screen.height * PlayLine)
        {
            return false;   // dropped back into the hand
        }
        return owner.TryPlay(Card, target);
    }

    // Hovered, held or flying, a card sorts on the Held layer: over the other cards
    // and over the UI.
    void Hold(bool held)
    {
        sortingGroup.sortingLayerName = held ? HeldLayer : restingLayer;
    }

    IEnumerator Fly(Vector3 to)
    {
        Vector3 from = transform.position;
        Quaternion turn = transform.rotation;
        for (float t = 0f; t < FlyTime; t += Time.deltaTime)
        {
            transform.position = Vector3.Lerp(from, to, t / FlyTime);
            transform.rotation = Quaternion.Slerp(turn, Quaternion.identity, t / FlyTime);
            yield return null;
        }
        transform.position = to;
        transform.rotation = Quaternion.identity;
        transform.localScale = Vector3.one * ShowScale;
        yield return new WaitForSeconds(ShowTime);
        for (float t = 0f; t < ShrinkTime; t += Time.deltaTime)
        {
            transform.localScale = Vector3.one * ShowScale * (1f - t / ShrinkTime);
            yield return null;
        }
        Destroy(gameObject);
    }
}
```

`FlyAway` takes the card out of the hand (`SetParent(null, true)` keeps it where it is
in the world while it loses its parent), so the hand closes up behind it at once. A
sprite has no Canvas Group to fade, so the card shrinks to nothing instead.

6. `HandView` stops being told, and listens. It also stops starting from scratch: on
   `Changed`, it walks the hand and its views together, and only makes or destroys the
   ones that differ, then gives every card its Order again (`SortCards`). On
   `CardPlayed`, the view that was dragged (or, for the opponent, the first with that
   card) flies away.

```csharp
using System.Collections.Generic;
using UnityEngine;

// Keeps a CardView for every card in one duelist's hand, and lays them out as a
// fan: along an arc, each turned a little, later cards on top. It only listens: a
// card drawn gets a view, and a card played flies to the middle of the table.
// Every frame each card moves part of the way to its place, so the hand closes up
// smoothly when a card leaves it.
public class HandView : MonoBehaviour
{
    const float Smoothing = 12f;    // how quickly cards move to their places

    [SerializeField] Duelist duelist;
    [SerializeField] CardView cardPrefab;
    [SerializeField] CardView rareCardPrefab;
    [SerializeField] bool faceDown;             // the opponent's hand
    [SerializeField] Transform playSpot;        // where played cards fly to
    [SerializeField] float spacing = 1.7f;      // between two cards' middles, in units
    [SerializeField] float maxWidth = 8.5f;     // a bigger hand squeezes closer
    [SerializeField] float arc = 0.07f;         // how far the outer cards sink
    [SerializeField] float tilt = 4f;           // degrees each card turns, from the middle
    [SerializeField] float hoverRise = 1.45f;   // a hovered card rises this far, and grows
    [SerializeField] float hoverScale = 1.3f;

    readonly List<CardView> views = new List<CardView>();

    void OnEnable()
    {
        duelist.Changed += OnChanged;
        duelist.CardPlayed += OnCardPlayed;
    }

    void OnDisable()
    {
        duelist.Changed -= OnChanged;
        duelist.CardPlayed -= OnCardPlayed;
    }

    void Update()
    {
        float gap = views.Count > 1 ? Mathf.Min(spacing, maxWidth / (views.Count - 1)) : 0f;
        float step = Smoothing * Time.deltaTime;
        for (int i = 0; i < views.Count; i++)
        {
            CardView view = views[i];
            if (view.IsDragging)
            {
                continue;       // the pointer moves this one
            }
            float fromMiddle = i - (views.Count - 1) / 2f;
            Vector3 place = new Vector3(fromMiddle * gap, -fromMiddle * fromMiddle * arc, 0f);
            Quaternion turn = Quaternion.Euler(0f, 0f, -fromMiddle * tilt);
            float scale = 1f;
            if (view.IsHovered)
            {
                place.y = hoverRise;
                turn = Quaternion.identity;
                scale = hoverScale;
            }
            Transform card = view.transform;
            card.localPosition = Vector3.Lerp(card.localPosition, place, step);
            card.localRotation = Quaternion.Slerp(card.localRotation, turn, step);
            card.localScale = Vector3.Lerp(card.localScale, Vector3.one * scale, step);
        }
    }

    // The view that was dragged, or for the opponent the first with that card.
    void OnCardPlayed(Card card)
    {
        CardView played = null;
        foreach (CardView view in views)
        {
            if (view.Card == card && (played == null || view.IsDragging))
            {
                played = view;
            }
        }
        if (played == null)
        {
            return;
        }
        views.Remove(played);
        played.FlyAway(playSpot.position);
        SortCards();
    }

    // Walk the hand and the views together: keep each view that matches its card,
    // replace one that doesn't, add views for new cards, and drop any left over.
    void OnChanged()
    {
        IReadOnlyList<Card> hand = duelist.Hand;
        for (int i = 0; i < hand.Count; i++)
        {
            if (i < views.Count && views[i].Card == hand[i])
            {
                continue;
            }
            CardView view = MakeView(hand[i]);
            if (i < views.Count)
            {
                Destroy(views[i].gameObject);
                views[i] = view;
            }
            else
            {
                views.Add(view);
            }
        }
        while (views.Count > hand.Count)
        {
            Destroy(views[views.Count - 1].gameObject);
            views.RemoveAt(views.Count - 1);
        }
        SortCards();
    }

    // Each card's place in the hand is its Order in Layer: later cards on top.
    void SortCards()
    {
        for (int i = 0; i < views.Count; i++)
        {
            views[i].SetOrder(i);
        }
    }

    CardView MakeView(Card card)
    {
        CardView view = Instantiate(card.IsRare ? rareCardPrefab : cardPrefab, transform);
        view.Show(card);
        if (faceDown)
        {
            view.ShowBack();
        }
        else
        {
            view.SetOwner(duelist);
        }
        return view;
    }
}
```

### Do it — the controllers and the duel

7. In `Scripts/Duel`, `PlayerController`:

```csharp
using UnityEngine;
using UnityEngine.UI;

// The human player's controller. On your turn it lets the End Turn button work;
// your cards check Duelist.IsTakingTurn themselves.
public class PlayerController : MonoBehaviour, IDuelistController
{
    [SerializeField] Button endTurnButton;

    Duelist me;
    DuelManager duel;
    bool isMyTurn;

    // Awake, not Start: every Awake runs before any Start, so this can't undo
    // the BeginTurn that DuelManager's Start calls.
    void Awake()
    {
        endTurnButton.interactable = false;
    }

    void OnEnable()
    {
        endTurnButton.onClick.AddListener(EndTurn);
    }

    void OnDisable()
    {
        endTurnButton.onClick.RemoveListener(EndTurn);
    }

    public void BeginTurn(Duelist me, Duelist foe, DuelManager duel)
    {
        this.me = me;
        this.duel = duel;
        isMyTurn = true;
        endTurnButton.interactable = true;
    }

    void EndTurn()
    {
        if (!isMyTurn)
        {
            return;
        }
        isMyTurn = false;
        endTurnButton.interactable = false;
        duel.EndTurn(me);
    }
}
```

`Awake` switches the button off. Why not `Start`? `DuelManager`'s `Start` begins your
first turn, and Unity doesn't promise which of two `Start`s runs first. If this one ran
second, it would switch off the button `BeginTurn` had just switched on, and you'd be
stuck on turn one. **Every `Awake` runs before any `Start`**, so `Awake` is safe.

8. A stand-in opponent, until Chapter 11's real one. In `Scripts/Duel`,
   `PassingOpponent`:

```csharp
using System.Collections;
using UnityEngine;

// A stand-in for the computer, until Chapter 11: it waits a moment, then ends
// its turn without playing anything.
public class PassingOpponent : MonoBehaviour, IDuelistController
{
    public void BeginTurn(Duelist me, Duelist foe, DuelManager duel)
    {
        StartCoroutine(Pass(me, duel));
    }

    IEnumerator Pass(Duelist me, DuelManager duel)
    {
        yield return new WaitForSeconds(1f);
        duel.EndTurn(me);
    }
}
```

9. In `Scripts/Duel`, `DuelManager`:

```csharp
using System;
using System.Collections;
using TMPro;
using UnityEngine;
using UnityEngine.Events;

// The duel itself: whose turn it is, and when it's over. It's a state machine,
// as in Level 3. It raises C# events for other scripts, and UnityEvents for
// whatever a designer wires up in the Inspector. It talks to each side's
// controller through IDuelistController, so it can't tell a person from the
// computer.
public class DuelManager : MonoBehaviour
{
    enum State { Starting, PlayerTurn, OpponentTurn, Over }

    const float MessageTime = 2f;
    const float MessageFadeTime = 0.5f;

    [SerializeField] Duelist player;
    [SerializeField] Duelist opponent;
    [SerializeField] Sprite playerPortrait;
    [SerializeField] Card[] playerDeck;                // until Chapter 12
    [SerializeField] string opponentName = "Mira the Ranger";  // these three until Chapter 11
    [SerializeField] Sprite opponentPortrait;
    [SerializeField] Card[] opponentDeck;
    [SerializeField] TMP_Text messageText;
    [SerializeField] float endDelay = 1.5f;
    [SerializeField] UnityEvent onPlayerTurn;
    [SerializeField] UnityEvent onDuelOver;

    State state = State.Starting;
    IDuelistController playerController;
    IDuelistController opponentController;
    Coroutine hideMessage;

    public event Action<Duelist> TurnStarted;
    public event Action<bool> DuelEnded;        // true when the player won

    void Awake()
    {
        // Unity can't show an interface in the Inspector, so we ask each side's
        // GameObject for whichever component is its controller.
        playerController = player.GetComponent<IDuelistController>();
        opponentController = opponent.GetComponent<IDuelistController>();
    }

    void OnEnable()
    {
        player.Died += OnPlayerDied;
        opponent.Died += OnOpponentDied;
        player.Announced += ShowMessage;
        opponent.Announced += ShowMessage;
    }

    void OnDisable()
    {
        player.Died -= OnPlayerDied;
        opponent.Died -= OnOpponentDied;
        player.Announced -= ShowMessage;
        opponent.Announced -= ShowMessage;
    }

    void Start()
    {
        player.Foe = opponent;
        opponent.Foe = player;
        player.Begin("You", playerPortrait, playerDeck);
        opponent.Begin(opponentName, opponentPortrait, opponentDeck);
        EnterState(State.PlayerTurn);
    }

    // The controller whose turn it is calls this when it's done.
    public void EndTurn(Duelist who)
    {
        if (state == State.PlayerTurn && who == player)
        {
            EnterState(State.OpponentTurn);
        }
        else if (state == State.OpponentTurn && who == opponent)
        {
            EnterState(State.PlayerTurn);
        }
    }

    // From the pause menu.
    public void GiveUp()
    {
        Finish(false);
    }

    public void ShowMessage(string text)
    {
        messageText.text = text;
        messageText.alpha = 1f;
        if (hideMessage != null)
        {
            StopCoroutine(hideMessage);
        }
        hideMessage = StartCoroutine(HideMessage());
    }

    void EnterState(State next)
    {
        state = next;
        switch (state)
        {
            case State.PlayerTurn:
                StartTurn(player, opponent, playerController, "Your turn");
                if (state == State.PlayerTurn)
                {
                    onPlayerTurn.Invoke();
                }
                break;
            case State.OpponentTurn:
                StartTurn(opponent, player, opponentController, $"{opponent.DisplayName}'s turn");
                break;
            case State.Over:
                player.IsTakingTurn = false;
                opponent.IsTakingTurn = false;
                break;
        }
    }

    void StartTurn(Duelist who, Duelist foe, IDuelistController controller, string message)
    {
        foe.IsTakingTurn = false;
        ShowMessage(message);
        who.StartTurn();                // its shield drops, its mana fills, it draws
        if (state == State.Over)
        {
            return;
        }
        who.IsTakingTurn = true;
        TurnStarted?.Invoke(who);
        controller.BeginTurn(who, foe, this);
    }

    void OnPlayerDied()
    {
        Finish(false);
    }

    void OnOpponentDied()
    {
        Finish(true);
    }

    void Finish(bool playerWon)
    {
        if (state == State.Over)
        {
            return;
        }
        EnterState(State.Over);
        ShowMessage(playerWon ? "Victory!" : "Defeat");
        DuelEnded?.Invoke(playerWon);
        StartCoroutine(EndAfterDelay());
    }

    IEnumerator EndAfterDelay()
    {
        yield return new WaitForSecondsRealtime(endDelay);
        onDuelOver.Invoke();            // whatever the Inspector wires to the end
    }

    IEnumerator HideMessage()
    {
        yield return new WaitForSeconds(MessageTime);
        for (float t = 0f; t < MessageFadeTime; t += Time.deltaTime)
        {
            messageText.alpha = 1f - t / MessageFadeTime;
            yield return null;
        }
        messageText.alpha = 0f;
    }
}
```

<!-- check: end -->

The Console is clear again. The parts to read twice:

- `Awake` finds the two controllers with `GetComponent<IDuelistController>()`: an
  interface can't be a `[SerializeField]`, but `GetComponent` finds any component that
  implements it.
- `StartTurn` checks `state == State.Over` after `who.StartTurn()`: from Chapter 9 a
  familiar's strike at the start of a turn can end the duel there and then.
- `Finish` waits `endDelay` seconds of **real** time, then invokes `onDuelOver`. In
  Chapter 12 the Inspector wires it to the next scene.

### Do it — in the scene

10. Delete the `Draw Test` button.
11. Open the `Player Panel` prefab variant and add `PlayerController` to it: a component
    only the player's panel has, an **added component** override. Open the `Opponent
    Panel` variant and add `PassingOpponent`.
12. Open the `Duelist Panel` prefab, and fill `DuelistPanel`'s new fields: **Duelist**
    (the panel's own `Duelist`) and **Portrait**. Save.
13. In the scene, the `Duelist`s have only **Max Health** now (30); the test fields went
    with the old script. On the `Player Panel`, drag `End Turn` into `PlayerController`'s
    **End Turn Button**.
14. Each `HandView` has a new **Play Spot** field: drag `Play Spot` into both. Each
    `PileView` (on `Player Piles` and `Opponent Piles`) has a new **Duelist** field: the
    `Player Panel` or the `Opponent Panel`.
15. **Create Empty**, `Duel Manager`, with `DuelManager`. **Player** the `Player Panel`,
    **Opponent** the `Opponent Panel`, **Player Portrait** `You`, **Opponent Portrait**
    `Mira`, two 20-card decks, and **Message Text** the `Message`.
16. Two UnityEvents, wired in the Inspector, no code:
    - `DuelManager`'s **On Player Turn ()**: **+**, drag in `Your Turn Glow`, and choose
      **GameObject → SetActive (bool)**, ticked.
    - `End Turn`'s **On Click ()**: **+**, `Your Turn Glow`, **GameObject → SetActive
      (bool)**, unticked.

### Test it

- **Play.** *Your turn*: you have 1 mana and 5 cards (4, plus the one drawn at the start
  of your turn). The glow shows behind your hand. Play a 1-mana card: it flies to the
  right of the table, shows itself, and shrinks away; your discard pile shows it on top.
  Draw, and only the new card slides in: the hand isn't made from scratch any more.
- **End Turn.** The glow goes, *Mira the Ranger's turn*, a second's pause, and *Your
  turn* again, now with 2 mana. Her hand has one more card face down; her draw pile one
  fewer.
- Try to drag a card during her turn: it won't come out of your hand.
- Play nothing for three turns: your hand reaches seven, and the card drawn on your
  fourth turn burns. The message says so.
- Deal Mira 30 damage over a few turns: *Victory!*, and nothing more moves.

### Commit

*Run the duel in turns, with events.* Read the diff of `Duelist.cs` before you commit:
more red (lines gone) than you'd expect, and that's the point.

### Challenge

Make the message line say *Your turn: 3 mana*. Which class knows the mana, and which
shows the message? Do it with the `TurnStarted` event, from a small new script, without
changing `DuelManager` or `Duelist`.

## Chapter 9 — Familiars

**Goal:** a fourth kind of card that puts a **familiar** on your side of the board. Up to
three a side; each strikes the foe at the start of its owner's turn, and an attack can
target a familiar instead of the duelist. And a second class that's an `IDamageable`.

### Idea — the interface earns its keep

A familiar has power and health; it's hurt by attacks and falls when its health runs
out. A duelist has a deck, a hand, mana and shield. They have **nothing** to share except
*being hurt*: a base class for both would drag a deck into a familiar, or power into a
duelist. So `Familiar` implements `IDamageable`, exactly as `Duelist` does, and look at
what *doesn't* change:

- `AttackCard.Play`: `target.TakeDamage(damage)`. Not a line.
- `Duelist.IsValidTarget`: `target.Owner == Foe`. A familiar's `Owner` is its summoner.
- `CardView`'s drop: `GetComponentInParent<IDamageable>()` finds a familiar as happily as
  a panel.

That's what an interface buys: code written against the promise works with a class that
didn't exist when it was written.

```
             IDamageable
            ┌─────┴─────┐
         Duelist     Familiar        an attack takes an IDamageable and never asks
```

### Idea — the card is a recipe

A Summon Card says *a familiar with 3 power and 4 health*. The familiar on the board
**copies** those numbers when it's summoned, and its health goes down on the familiar,
never on the card. The card is an asset, shared by every copy of it in every deck; write
its health down, and every *Snow Tiger* in the game would be hurt at once. Worse: in the
Editor, a change made to an asset while playing **stays** after Play stops
(C# 5).

### Do it — the card and the familiar

<!-- check: together -->

1. In `Scripts/Cards`, `SummonCard`:

```csharp:SummonCard.cs
using UnityEngine;

// Puts a familiar on the board, on the side of the duelist who plays it. The
// card is only the familiar's recipe: the Familiar copies these numbers, and
// its health goes down on the Familiar, never here.
[CreateAssetMenu(fileName = "New Summon Card", menuName = "Arcane Duel/Summon Card")]
public class SummonCard : Card
{
    [SerializeField] int power = 1;
    [SerializeField] int health = 3;

    public int Power { get { return power; } }
    public int Health { get { return health; } }

    public override CardKind Kind { get { return CardKind.Familiar; } }

    // Only while there's room on the board.
    public override bool CanPlay(Duelist user)
    {
        return user.Familiars.Count < Duelist.MaxFamiliars;
    }

    public override void Play(Duelist user, IDamageable target)
    {
        user.Summon(this);
    }

    public override string Describe()
    {
        return $"Power {power}, health {health}.";
    }
}
```

It's the first kind to override `CanPlay`: no room on the board, no summon.

2. In `Scripts/Duel`, `Familiar`:

```csharp:Familiar.cs
using System;
using System.Collections;
using TMPro;
using UnityEngine;

// A creature on the table, summoned by a SummonCard. Like a Duelist, it can be
// hurt, so it's an IDamageable too, though the two classes share nothing else.
// Its numbers are copied from its card when it's summoned, and never written
// back: the card is an asset, shared by every copy of it.
public class Familiar : MonoBehaviour, IDamageable
{
    const float LungeTime = 0.25f;
    const float ShrinkTime = 0.35f;

    [SerializeField] SpriteRenderer art;
    [SerializeField] TMP_Text nameText;
    [SerializeField] TMP_Text powerText;
    [SerializeField] TMP_Text healthText;
    [SerializeField] Collider2D frameCollider; // what a dropped attack finds

    public Duelist Owner { get; private set; }
    public int Power { get; private set; }
    public int Health { get; private set; }
    public bool IsAlive { get { return Health > 0; } }

    public event Action<Familiar, int> Damaged;
    public event Action<Familiar> Died;

    public void Setup(SummonCard card, Duelist owner)
    {
        Owner = owner;
        Power = card.Power;
        Health = card.Health;
        art.sprite = card.Art;
        nameText.text = card.DisplayName;
        powerText.text = Power.ToString();
        healthText.text = Health.ToString();
    }

    public void Strike(Duelist target)
    {
        target.TakeDamage(Power);
        StartCoroutine(Lunge());
    }

    public void TakeDamage(int amount)
    {
        if (!IsAlive || amount <= 0)
        {
            return;
        }
        Health = Mathf.Max(Health - amount, 0);
        healthText.text = Health.ToString();
        Damaged?.Invoke(this, amount);
        if (!IsAlive)
        {
            Died?.Invoke(this);
            StartCoroutine(ShrinkAndRemove());
        }
    }

    // A quick swell, so you can see which familiar struck.
    IEnumerator Lunge()
    {
        for (float t = 0f; t < LungeTime; t += Time.deltaTime)
        {
            float swell = Mathf.Sin(t / LungeTime * Mathf.PI) * 0.2f;
            transform.localScale = Vector3.one * (1f + swell);
            yield return null;
        }
        transform.localScale = Vector3.one;
    }

    IEnumerator ShrinkAndRemove()
    {
        frameCollider.enabled = false;          // a dying familiar can't be targeted
        for (float t = 0f; t < ShrinkTime; t += Time.deltaTime)
        {
            transform.localScale = Vector3.one * (1f - t / ShrinkTime);
            yield return null;
        }
        Destroy(gameObject);
    }
}
```

`Died` carries the familiar itself (`Action<Familiar>`), so its duelist, listening to
three of them, knows which one fell.

3. `Duelist` gets the board: a list of familiars, `Summon`, two more events, and the
   strike at the start of a turn. New since Chapter 8: `MaxFamiliars`, `familiarPrefab`,
   `board`, `familiars`, `Familiars`, `Summoned`, `FamiliarDamaged`, the loop in
   `StartTurn`, the message in `TryPlay`, and the three methods at the end.

```csharp
using System;
using System.Collections.Generic;
using UnityEngine;

// One side of the duel: health, shield, mana, a deck, a hand, and up to three
// familiars. It knows the rules for its own side; DuelManager says whose turn
// it is. Whatever changes raises an event, and the screen listens: a Duelist
// never touches the UI itself.
public class Duelist : MonoBehaviour, IDamageable
{
    public const int MaxHandSize = 7;
    public const int MaxFamiliars = 3;
    public const int MaxMana = 10;
    const int StartingHand = 4;

    [SerializeField] int maxHealth = 30;
    [SerializeField] Familiar familiarPrefab;
    [SerializeField] Transform board;           // where this side's familiars stand

    readonly List<Card> hand = new List<Card>();
    readonly List<Familiar> familiars = new List<Familiar>();
    Deck deck;
    int turnsTaken;

    public string DisplayName { get; private set; }
    public Sprite Portrait { get; private set; }
    public Duelist Foe { get; set; }
    public bool IsTakingTurn { get; set; }

    public Duelist Owner { get { return this; } }
    public int Health { get; private set; }
    public int MaxHealth { get { return maxHealth; } }
    public bool IsAlive { get { return Health > 0; } }
    public int Shield { get; private set; }
    public int Mana { get; private set; }
    public int ManaThisTurn { get; private set; }

    public IReadOnlyList<Card> Hand { get { return hand; } }
    public IReadOnlyList<Familiar> Familiars { get { return familiars; } }
    public int DrawPileCount { get { return deck == null ? 0 : deck.DrawCount; } }
    public int DiscardPileCount { get { return deck == null ? 0 : deck.DiscardCount; } }
    public Card TopOfDiscard { get { return deck == null ? null : deck.TopOfDiscard(); } }

    public event Action Changed;                    // anything on the panel or in the hand
    public event Action<int> Damaged;
    public event Action<int> Healed;
    public event Action<int> Shielded;
    public event Action<Card> CardPlayed;
    public event Action<Familiar> Summoned;
    public event Action<Familiar, int> FamiliarDamaged;
    public event Action<string> Announced;          // a line for the message bar
    public event Action Died;

    // DuelManager calls this once, before the first turn.
    public void Begin(string displayName, Sprite portrait, IReadOnlyList<Card> cards)
    {
        DisplayName = displayName;
        Portrait = portrait;
        Health = maxHealth;
        deck = new Deck(cards);
        deck.Reshuffled += OnReshuffled;
        for (int i = 0; i < StartingHand; i++)
        {
            Draw();
        }
        Changed?.Invoke();
    }

    // The start of this duelist's turn: the shield drops, the mana refills, the
    // familiars strike, and a card is drawn.
    public void StartTurn()
    {
        turnsTaken++;
        Shield = 0;
        ManaThisTurn = Mathf.Min(turnsTaken, MaxMana);
        Mana = ManaThisTurn;

        // A copy, in case a familiar falls while the list is being walked.
        foreach (Familiar familiar in new List<Familiar>(familiars))
        {
            if (Foe.IsAlive)
            {
                familiar.Strike(Foe);
            }
        }
        if (Foe.IsAlive)
        {
            Draw();
        }
        Changed?.Invoke();
    }

    public void Draw()
    {
        Card card = deck.Draw();
        if (card == null)
        {
            return;
        }
        if (hand.Count >= MaxHandSize)
        {
            deck.Discard(card);
            Announced?.Invoke($"{card.DisplayName} burned: the hand is full.");
        }
        else
        {
            hand.Add(card);
        }
        Changed?.Invoke();
    }

    // Can this card be played right now? It's this duelist's turn, the card is
    // in the hand, there's mana for it, and the card itself agrees.
    public bool CanPlay(Card card)
    {
        return IsTakingTurn && hand.Contains(card) && card.Cost <= Mana && card.CanPlay(this);
    }

    // An attack must land on the foe or one of the foe's familiars; other cards
    // take no target at all.
    public bool IsValidTarget(Card card, IDamageable target)
    {
        if (!card.NeedsTarget)
        {
            return true;
        }
        return target != null && target.IsAlive && target.Owner == Foe;
    }

    // Plays the card if the rules allow it, and says why not if they don't.
    public bool TryPlay(Card card, IDamageable target)
    {
        if (!IsTakingTurn || !hand.Contains(card))
        {
            return false;
        }
        if (card.Cost > Mana)
        {
            Announced?.Invoke("Not enough mana.");
            return false;
        }
        if (!card.CanPlay(this))
        {
            Announced?.Invoke("There's no room on the board.");
            return false;
        }
        if (!IsValidTarget(card, target))
        {
            Announced?.Invoke("Drop an attack on the foe, or on one of the foe's familiars.");
            return false;
        }

        Mana -= card.Cost;
        hand.Remove(card);
        CardPlayed?.Invoke(card);
        card.Play(this, target);
        deck.Discard(card);
        Changed?.Invoke();
        return true;
    }

    public void TakeDamage(int amount)
    {
        if (!IsAlive || amount <= 0)
        {
            return;
        }
        int absorbed = Mathf.Min(Shield, amount);
        Shield -= absorbed;
        Health = Mathf.Max(Health - (amount - absorbed), 0);
        Damaged?.Invoke(amount);
        Changed?.Invoke();
        if (!IsAlive)
        {
            Died?.Invoke();
        }
    }

    public void Heal(int amount)
    {
        int before = Health;
        Health = Mathf.Min(Health + amount, maxHealth);
        Healed?.Invoke(Health - before);
        Changed?.Invoke();
    }

    public void GainShield(int amount)
    {
        Shield += amount;
        Shielded?.Invoke(amount);
        Changed?.Invoke();
    }

    public void Summon(SummonCard card)
    {
        Familiar familiar = Instantiate(familiarPrefab, board);
        familiar.Setup(card, this);
        familiar.Damaged += OnFamiliarDamaged;
        familiar.Died += OnFamiliarDied;
        familiars.Add(familiar);
        Summoned?.Invoke(familiar);
        Changed?.Invoke();
    }

    void OnFamiliarDamaged(Familiar familiar, int amount)
    {
        FamiliarDamaged?.Invoke(familiar, amount);
    }

    void OnFamiliarDied(Familiar familiar)
    {
        familiar.Damaged -= OnFamiliarDamaged;
        familiar.Died -= OnFamiliarDied;
        familiars.Remove(familiar);
        Changed?.Invoke();
    }

    void OnReshuffled(int count)
    {
        Announced?.Invoke($"{DisplayName}: {count} cards reshuffled into the draw pile.");
    }
}
```

<!-- check: end -->

The loop in `StartTurn` walks a **copy** of the list (`new List<Familiar>(familiars)`).
A familiar can't fall during its own strike today, but if one ever could, it would leave
the list while the loop walks it, and C# stops a loop whose list changes under it.

`Summon` subscribes to the new familiar's events, and `OnFamiliarDied` unsubscribes:
Sam's rule, for objects made and destroyed while the game runs.

### Do it — the Familiar Token

4. The **Stat Badge** prefab first, for a familiar's power and health: **Create Empty**,
   `Stat Badge`, at (0, 0, 0). Drag `Art/UI/Circle` onto it twice: `Ring`, **Scale**
   (0.344, 0.344, 1), colour `#C9A27A`, **Order in Layer** 4; and `Fill`, **Scale** (0.297,
   0.297, 1), colour `#A9442A`, **Order in Layer** 5. Then a **Text - TextMeshPro** (3D),
   `Value`: **Pos** (0, 0.01, 0), 0.44 × 0.44, *1*, `Cinzel-Bold SDF` 2.6, white, centred,
   **Order in Layer** 6. Save it as a prefab, and delete it from the scene.
5. **Create Empty**, `Familiar Token`, at (0, 0, 0). **Add Component → Sorting Group**, and
   `Familiar`. Its children:

| Child | What | Position, size | Settings |
| --- | --- | --- | --- |
| `Background` | sprite `Card Background` | (0, 0), **Scale** (0.284, 0.295, 1) | **Order in Layer** 0 |
| `Art` | sprite `icon_orc` | (0, 0.145), **Scale** (0.781, 0.781, 1) | **Order in Layer** 1 |
| `Frame` | sprite `Familiar Front` (no gem: it's a creature, not a card) | (0, 0), **Scale** (0.32, 0.32, 1) | **Order in Layer** 2, and **Add Component → Box Collider 2D**: what a dropped attack finds |
| `Name` | text | (0, −0.495), 1.36 × 0.24 | `CinzelDecorative-Bold SDF`, **Auto Size** 1–1.6, `#F3DDB6`, centred, **Order in Layer** 3 |
| `Power` | a **Stat Badge** | (−0.54, −0.805) | its `Fill` `#B8592C` |
| `Health` | a **Stat Badge** | (0.54, −0.805) | its `Fill` `#C2364F` |

   Each badge changes its `Fill`'s colour: an override on a nested prefab.
6. Drag the `Familiar`'s fields in: `Art`, `Name`, the two badges' `Value` texts, and the
   `Frame`'s **Box Collider 2D** into **Frame Collider**. Make `Familiar Token` a prefab,
   and delete it from the scene.
7. A row for the familiars to stand in. In `Scripts/Board`, `FamiliarRow`:

```csharp:FamiliarRow.cs
using UnityEngine;

// Lines up one side's familiars, centred, as a Horizontal Layout Group lines up UI:
// every frame each one moves part of the way to its place, so the row closes up
// smoothly when one dies.
public class FamiliarRow : MonoBehaviour
{
    const float Smoothing = 10f;

    [SerializeField] float spacing = 2.1f;     // between two familiars' middles, in units

    void Update()
    {
        int count = transform.childCount;
        for (int i = 0; i < count; i++)
        {
            Transform familiar = transform.GetChild(i);
            Vector3 place = new Vector3((i - (count - 1) / 2f) * spacing, 0f, 0f);
            familiar.localPosition = Vector3.Lerp(familiar.localPosition, place, Smoothing * Time.deltaTime);
        }
    }
}
```

   It does on the table what a Horizontal Layout Group does on a canvas: count
   `transform.childCount`, and give each child its place from the middle. Add it to
   `Opponent Board` and `Player Board`, in the `Table`.
8. Open the `Duelist Panel` prefab: drag `Familiar Token` into `Duelist`'s new **Familiar
   Prefab**. In the scene, drag each side's board into **Board**: the `Player Board` for
   the `Player Panel`, the `Opponent Board` for the `Opponent Panel`. A panel in the
   canvas, a board on the table: a field can point anywhere in the scene.

### Do it — five familiars

9. **Create → Arcane Duel → Summon Card**, in `Data/Cards`:

| Asset | Id | Cost | Power | Health | Art | Rare |
| --- | --- | --- | --- | --- | --- | --- |
| Storm Bird | `storm-bird` | 2 | 1 | 3 | `icon_birdblue` | |
| Grey Drake | `grey-drake` | 3 | 2 | 3 | `icon_dragon` | |
| Snow Tiger | `snow-tiger` | 4 | 3 | 4 | `icon_bigcatwhite` | |
| Swamp Troll | `swamp-troll` | 5 | 2 | 8 | `icon_orc` | |
| Blood Fiend | `blood-fiend` | 6 | 5 | 5 | `icon_aurared` | ✓ |

10. Put some familiars in both test decks (`DuelManager`'s **Player Deck** and
    **Opponent Deck**).

### Test it

- **Play**, and take turns until you can afford a familiar. Drag it out of your hand and
  let go over the table: it appears in the middle of your row. Summon a second: the row
  makes room, the two sliding apart. **End Turn**, and on your next turn each one swells
  as it strikes Mira, and her health drops by its power.
- Summon three: the fourth won't come out; the message says *There's no room on the
  board.*
- Mira passes, so she never summons a familiar for you to attack: the Challenge below
  gives her one. For now, check the rule from your side: drag an attack onto **your own**
  familiar. It's refused: *Drop an attack on the foe, or on one of the foe's familiars.*

### Commit

*Add familiars: SummonCard, Familiar and the boards.*

### Challenge

The opponent can't summon until Chapter 11. Test your attacks on a familiar anyway: give
`DuelManager` a test line at the end of `Start`, `opponent.Summon(…)`, with a
`[SerializeField] SummonCard testFamiliar` to summon. Drag a *Snow Tiger* into it, Play,
and hit the tiger with a *Cleave* (5 damage against its 4 health): it shrinks from the
table, and Mira's health doesn't move. Then delete the test.

## Chapter 10 — Drain, on a Branch

**Goal:** a fifth kind of card, the **drain**: an attack that also heals. It *is* an
attack, so it inherits from `AttackCard` and calls `base.Play`. And you'll build it on a
**Git branch**, so `main` never sees it half done.

### Idea — a branch for a new feature

At Lantern Hill, `main` always works: anyone can take it and play it. A new feature is
built on a **branch**, a line of commits beside `main`; when it's finished and tested,
it's **merged** back into `main` in one go (C# 1).

```
main      ●───●───●──────────────────●     merge: main gets the drain card
                   \                 /
drain-card          ●───────●───────●       your commits, while you build it
```

### Idea — inheriting from a kind

A drain card deals damage to a target, exactly as an attack does, *and then* heals the
player. So `DrainCard : AttackCard`. It inherits the damage, the target, `NeedsTarget`,
even `Damage`; it overrides only what's different:

| Member | `AttackCard` | `DrainCard` |
| --- | --- | --- |
| `Kind` | `Attack` | overrides: `Drain` |
| `NeedsTarget` | `true` | inherited |
| `Play` | the target takes damage | overrides: `base.Play(…)`, then heal |
| `Describe` | *Deal 3 damage.* | overrides: `base.Describe()` + *Heal 3.* |

`base.Play(user, target)` runs `AttackCard`'s version: the attack, written once. If an
attack ever changes (say, hits shield differently), the drain changes with it.

### Do it — the branch

1. In GitHub Desktop, **Current Branch → New Branch**, name it `drain-card`, and
   **Create Branch**. The top bar says **Current Branch: drain-card**.

### Do it — the card

2. In `Scripts/Cards`, `DrainCard`:

```csharp:DrainCard.cs
using UnityEngine;

// An attack that also heals the duelist who plays it. A DrainCard *is* an
// AttackCard, so it inherits the damage, the target and the attack itself,
// and only adds the healing.
[CreateAssetMenu(fileName = "New Drain Card", menuName = "Arcane Duel/Drain Card")]
public class DrainCard : AttackCard
{
    [SerializeField] int heal = 3;

    public int HealAmount { get { return heal; } }

    public override CardKind Kind { get { return CardKind.Drain; } }

    public override void Play(Duelist user, IDamageable target)
    {
        base.Play(user, target);    // the attack, exactly as AttackCard does it
        user.Heal(heal);
    }

    public override string Describe()
    {
        return base.Describe() + $" Heal {heal}.";
    }
}
```

3. Commit on the branch: *Add DrainCard*.
4. **Create → Arcane Duel → Drain Card**, in `Data/Cards`: `Bloodletter` (`bloodletter`,
   cost 3, **Damage** 3, **Heal** 3, `icon_swordblood`) and `Soul Siphon` (`soul-siphon`,
   cost 5, **Damage** 5, **Heal** 5, `icon_ringmagic`, **Is Rare**). The Inspector shows
   **Damage** above **Heal**: a subclass's Inspector shows its base class's fields first.
5. Put two Bloodletters in your test deck. Commit: *Add the Bloodletter and Soul Siphon
   cards*.

### Test it

- **Play.** Play a Bloodletter on Mira: she loses 3. Its ribbon says **Drain**, in the
  drain's plum: that's `Kind`. Your health was full, so it stays 30: `Heal` stops at the
  most.
- To see the heal, start hurt: for one test, add `player.TakeDamage(10);` at the end of
  `DuelManager`'s `Start`, and play a Bloodletter: 20 health becomes 23. Then delete the
  line.

### Do it — merge

6. Everything works, so the branch is done. In GitHub Desktop, **Current Branch** →
   switch to **main**. Look in Unity: `DrainCard.cs` is **gone**, and so are the two
   assets; Unity shows `main` as it was. Don't panic: they're safe on the branch.
7. **Branch → Merge into current branch…**, choose `drain-card`, **Create a merge
   commit**. Look again: the drain card is back, on `main` now.
8. **Push origin.** The branch can go: **Branch → Delete…**.

### Commit

The merge was the commit. Look at **History**: your two commits from the branch, and the
merge.

### Challenge

On a new branch, `heal-overflow`, change `HealCard` so healing above 30 turns into shield
instead. Test it. Then decide you don't want it: switch back to `main` and delete the
branch without merging. `main` never knew.

# Part 3 — The Lead's Opponent

## C# 9 — Working in Someone Else's Code

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

## Chapter 11 — The Opponent

**Goal:** Sam's computer opponent, imported as a package, its conflicts resolved, the
members it needs added, judged against the studio's architecture and style guide, and
plugged in. Then four opponents, each with a deck and a personality.

### Idea — a module you didn't write

Sam has been writing the computer player while you built the duel. It arrives as a
**package**, `Arcane Duel Opponent 1.2.unitypackage`, with a README. You don't need to
understand every line to use it. You need to know three things, in this order
(C# 9):

1. **Its contract:** what it needs from your game, and what it gives back.
2. **Whether it fits:** the architecture (does it go through `IDuelistController`?) and
   the standards (does it follow the style guide?).
3. **How to plug it in,** without changing it. It's Sam's: if something in it is wrong,
   you tell Sam.

### Do it — read the contract first

1. Your trainer shares `Arcane Duel Opponent 1.2.unitypackage`. Don't import it yet.
   Read its README, which your trainer also shares (it's inside the package too). The
   part that matters is the **contract**:

| Class | Members the module uses |
| --- | --- |
| `IDuelistController` | `void BeginTurn(Duelist me, Duelist foe, DuelManager duel)`: the module implements it |
| `DuelManager` | `void EndTurn(Duelist who)`; `OpponentProfile Opponent { get; }`; `float ThinkTime { get; }` |
| `OpponentProfile` | a ScriptableObject with `float Aggression`, `float Caution` and `float Patience`, each from 0 to 2 |
| `Duelist` | `Hand`, `CanPlay`, `TryPlay`, `Health`, `MaxHealth`, `Shield`, `IsAlive`, `DisplayName`, `Familiars`, `IncomingDamage` (the total power of its familiars) |
| `Familiar` | `Power`, `Health`, `IsAlive` |
| `IDamageable` | what an attack is played on |
| The cards | `AttackCard.Damage`, `DrainCard.HealAmount`, `HealCard.Amount`, `ShieldCard.Amount`, `SummonCard.Power`, `SummonCard.Health` |

2. Tick off what your game has. Most of it: you built to Sam's architecture all along.
   Missing: `DuelManager.Opponent` and `ThinkTime`, all of `OpponentProfile`, and
   `Duelist.IncomingDamage`. And one warning in the README: *"`IDuelistController.cs` — a
   copy of the duel's controller interface, for the module's own tests. Your game already
   has one: delete this copy."*

### Do it — import it, and read the Console

3. Commit first, so you can always come back: *Before importing the opponent module*.
   (C# 16 has more on why.)
4. **Assets → Import Asset Package…**, choose the file. The **Import Unity
   Package** window lists `Assets/Opponent` and its three files, all ticked. **Import**.
5. The Console turns red:

```
Assets/Opponent/IDuelistController.cs(3,18): error CS0101: The namespace '<global namespace>' already contains a definition for 'IDuelistController'
Assets/Opponent/IDuelistController.cs(5,10): error CS0111: Type 'IDuelistController' already defines a member called 'BeginTurn' with the same parameter types
Assets/Opponent/OpponentBrain.cs(74,53): error CS0246: The type or namespace name 'OpponentProfile' could not be found (are you missing a using directive or an assembly reference?)
Assets/Opponent/OpponentBrain.cs(105,48): error CS0246: The type or namespace name 'OpponentProfile' could not be found (are you missing a using directive or an assembly reference?)
```

Read them as C# 19 taught: file, line, code, message.

- **CS0101** and **CS0111** are one problem: two `IDuelistController`s, yours and the
  package's copy, both in the *global namespace* (no namespace at all). C# can't have
  two types with one name in one namespace. This is the commonest import conflict there
  is, and why a package should keep its code in a `namespace` of its own. Sam's README
  admits it: *"Note for 1.3: put the module in a namespace."*
- **CS0246**: there's no `OpponentProfile` yet. The contract said so.

6. Open both interfaces and compare them: the same method, word for word. Delete the
   **package's** copy, `Assets/Opponent/IDuelistController.cs` (in the Project window,
   so its `.meta` goes too). The first two errors go.

### Do it — meet the contract

<!-- check: together -->

7. Here's the module, as Sam wrote it. It's in your project now; read it before you plug
   it in. You'll answer questions about it in a moment.

```csharp:OpponentBrain.cs
using System.Collections;
using UnityEngine;

// OPPONENT MODULE 1.2 - Lantern Hill Games. Owner: Sam.
//
// The computer player. It plugs into the duel through IDuelistController, as
// the human player's controller does, so the duel never knows which one it's
// talking to. README.md lists what it needs from the rest of the game.
//
// How it plays: it gives every card it can play a score, and plays the best
// one. Then it looks again, and again, until no card scores above zero, and it
// ends its turn. The scores come from the opponent's personality:
//   Aggression - attacks
//   Caution    - heals and shields
//   Patience   - familiars
// It never cheats: it sees its own hand, and only what the player could see.
public class OpponentBrain : MonoBehaviour, IDuelistController
{
    const float WinningScore = 1000f;   // an attack that ends the duel beats everything
    const int GuessedAttack = 3;        // what a shield expects the player to throw at it

    [SerializeField] bool logDecisions;  // tick it to see each choice in the Console

    public void BeginTurn(Duelist me, Duelist foe, DuelManager duel)
    {
        StartCoroutine(TakeTurn(me, foe, duel));
    }

    IEnumerator TakeTurn(Duelist me, Duelist foe, DuelManager duel)
    {
        OpponentProfile profile = duel.Opponent;
        yield return new WaitForSeconds(duel.ThinkTime);

        while (me.IsAlive && foe.IsAlive)
        {
            Card bestCard = null;
            IDamageable bestTarget = null;
            float bestScore = 0f;

            foreach (Card card in me.Hand)
            {
                if (!me.CanPlay(card))
                {
                    continue;
                }
                float score = Score(card, me, foe, profile, out IDamageable target);
                if (score > bestScore)
                {
                    bestScore = score;
                    bestCard = card;
                    bestTarget = target;
                }
            }

            if (bestCard == null)
            {
                break;  // nothing worth playing
            }
            if (logDecisions)
            {
                Debug.Log($"{me.DisplayName} plays {bestCard.DisplayName} (score {bestScore:0.0}).", this);
            }
            if (!me.TryPlay(bestCard, bestTarget))
            {
                break;  // the duel refused it: never try the same card for ever
            }
            yield return new WaitForSeconds(duel.ThinkTime);
        }

        duel.EndTurn(me);
    }

    // How much this card is worth playing now, and, for an attack, at what.
    float Score(Card card, Duelist me, Duelist foe, OpponentProfile profile, out IDamageable target)
    {
        target = null;
        int missingHealth = me.MaxHealth - me.Health;

        if (card is AttackCard attack)      // a DrainCard is an AttackCard too
        {
            float score = ScoreAttack(attack.Damage, foe, profile, out target);
            if (card is DrainCard drain)
            {
                score += Mathf.Min(drain.HealAmount, missingHealth) * profile.Caution;
            }
            return score;
        }
        if (card is HealCard heal)
        {
            return Mathf.Min(heal.Amount, missingHealth) * profile.Caution;
        }
        if (card is ShieldCard shield)
        {
            int danger = foe.IncomingDamage + GuessedAttack;
            return Mathf.Min(shield.Amount, danger) * profile.Caution * 0.8f;
        }
        if (card is SummonCard summon)
        {
            return (summon.Power * 2f + summon.Health * 0.5f) * profile.Patience;
        }
        return 0f;  // a kind of card this module doesn't know: it never plays it
    }

    // Hit the duelist, unless a familiar can be killed and is worth more.
    float ScoreAttack(int damage, Duelist foe, OpponentProfile profile, out IDamageable target)
    {
        target = foe;
        if (damage >= foe.Health + foe.Shield)
        {
            return WinningScore;
        }

        float bestScore = damage * profile.Aggression;
        foreach (Familiar familiar in foe.Familiars)
        {
            if (familiar.IsAlive && damage >= familiar.Health)
            {
                // A kill stops that familiar's strike on every turn to come.
                float score = familiar.Power * 3f * profile.Aggression;
                if (score > bestScore)
                {
                    bestScore = score;
                    target = familiar;
                }
            }
        }
        return bestScore;
    }
}
```

8. The contract's `OpponentProfile`. In `Scripts/Cards`, `OpponentProfile`: it's more
   than the module needs, because the game needs the rest (the portrait, the arena, the
   deck and the rare card).

```csharp:OpponentProfile.cs
using System.Collections.Generic;
using UnityEngine;

// One opponent: who they are, where they fight, their deck, the rare card they
// give the first time they're beaten, and the three numbers the opponent
// module reads to decide how they play.
[CreateAssetMenu(fileName = "New Opponent", menuName = "Arcane Duel/Opponent")]
public class OpponentProfile : ScriptableObject
{
    [SerializeField] string id;
    [SerializeField] string displayName;
    [SerializeField] Sprite portrait;
    [SerializeField] Sprite arena;
    [SerializeField] string arenaName;
    [SerializeField, Range(1, 3)] int difficulty = 1;
    [SerializeField] Card[] deck;
    [SerializeField] Card rareCard;

    [Header("Personality, read by the opponent module")]
    [SerializeField, Range(0f, 2f)] float aggression = 1f;
    [SerializeField, Range(0f, 2f)] float caution = 1f;
    [SerializeField, Range(0f, 2f)] float patience = 1f;

    public string Id { get { return id; } }
    public string DisplayName { get { return displayName; } }
    public Sprite Portrait { get { return portrait; } }
    public Sprite Arena { get { return arena; } }
    public string ArenaName { get { return arenaName; } }
    public int Difficulty { get { return difficulty; } }
    public IReadOnlyList<Card> Deck { get { return deck; } }
    public Card RareCard { get { return rareCard; } }

    // How much they like attacks...
    public float Aggression { get { return aggression; } }
    // ...heals and shields...
    public float Caution { get { return caution; } }
    // ...and familiars.
    public float Patience { get { return patience; } }
}
```

`[Range(0f, 2f)]` turns a number into a slider in the Inspector, from 0 to 2.
`[Header]` puts a heading above the next fields. Save, and the Console changes:

```
Assets/Opponent/OpponentBrain.cs(31,40): error CS1061: 'DuelManager' does not contain a definition for 'Opponent' and no accessible extension method 'Opponent' accepting a first argument of type 'DuelManager' could be found (are you missing a using directive or an assembly reference?)
Assets/Opponent/OpponentBrain.cs(32,46): error CS1061: 'DuelManager' does not contain a definition for 'ThinkTime' and no accessible extension method 'ThinkTime' accepting a first argument of type 'DuelManager' could be found (are you missing a using directive or an assembly reference?)
Assets/Opponent/OpponentBrain.cs(67,50): error CS1061: 'DuelManager' does not contain a definition for 'ThinkTime' and no accessible extension method 'ThinkTime' accepting a first argument of type 'DuelManager' could be found (are you missing a using directive or an assembly reference?)
Assets/Opponent/OpponentBrain.cs(94,30): error CS1061: 'Duelist' does not contain a definition for 'IncomingDamage' and no accessible extension method 'IncomingDamage' accepting a first argument of type 'Duelist' could be found (are you missing a using directive or an assembly reference?)
```

**CS1061**: the module uses a member your class doesn't have. Exactly the three the
contract listed and you ticked off as missing. You add them to **your** classes; the
module stays as it is.

9. `Duelist` gets `IncomingDamage`: the total power of its familiars, which is what they'll
   strike for at the start of its next turn. The module reads it to decide whether a
   shield is worth playing. Here's the finished `Duelist`:

```csharp:Duelist.cs
using System;
using System.Collections.Generic;
using UnityEngine;

// One side of the duel: health, shield, mana, a deck, a hand, and up to three
// familiars. It knows the rules for its own side; DuelManager says whose turn
// it is. Whatever changes raises an event, and the screen listens: a Duelist
// never touches the UI itself.
public class Duelist : MonoBehaviour, IDamageable
{
    public const int MaxHandSize = 7;
    public const int MaxFamiliars = 3;
    public const int MaxMana = 10;
    const int StartingHand = 4;

    [SerializeField] int maxHealth = 30;
    [SerializeField] Familiar familiarPrefab;
    [SerializeField] Transform board;           // where this side's familiars stand

    readonly List<Card> hand = new List<Card>();
    readonly List<Familiar> familiars = new List<Familiar>();
    Deck deck;
    int turnsTaken;

    public string DisplayName { get; private set; }
    public Sprite Portrait { get; private set; }
    public Duelist Foe { get; set; }
    public bool IsTakingTurn { get; set; }

    public Duelist Owner { get { return this; } }
    public int Health { get; private set; }
    public int MaxHealth { get { return maxHealth; } }
    public bool IsAlive { get { return Health > 0; } }
    public int Shield { get; private set; }
    public int Mana { get; private set; }
    public int ManaThisTurn { get; private set; }

    public IReadOnlyList<Card> Hand { get { return hand; } }
    public IReadOnlyList<Familiar> Familiars { get { return familiars; } }
    public int DrawPileCount { get { return deck == null ? 0 : deck.DrawCount; } }
    public int DiscardPileCount { get { return deck == null ? 0 : deck.DiscardCount; } }
    public Card TopOfDiscard { get { return deck == null ? null : deck.TopOfDiscard(); } }

    // How much this duelist's familiars will strike for at the start of its next turn.
    public int IncomingDamage
    {
        get
        {
            int total = 0;
            foreach (Familiar familiar in familiars)
            {
                total += familiar.Power;
            }
            return total;
        }
    }

    public event Action Changed;                    // anything on the panel or in the hand
    public event Action<int> Damaged;
    public event Action<int> Healed;
    public event Action<int> Shielded;
    public event Action<Card> CardPlayed;
    public event Action<Familiar> Summoned;
    public event Action<Familiar, int> FamiliarDamaged;
    public event Action<string> Announced;          // a line for the message bar
    public event Action Died;

    // DuelManager calls this once, before the first turn.
    public void Begin(string displayName, Sprite portrait, IReadOnlyList<Card> cards)
    {
        DisplayName = displayName;
        Portrait = portrait;
        Health = maxHealth;
        deck = new Deck(cards);
        deck.Reshuffled += OnReshuffled;
        for (int i = 0; i < StartingHand; i++)
        {
            Draw();
        }
        Changed?.Invoke();
    }

    // The start of this duelist's turn: the shield drops, the mana refills, the
    // familiars strike, and a card is drawn.
    public void StartTurn()
    {
        turnsTaken++;
        Shield = 0;
        ManaThisTurn = Mathf.Min(turnsTaken, MaxMana);
        Mana = ManaThisTurn;

        // A copy, in case a familiar falls while the list is being walked.
        foreach (Familiar familiar in new List<Familiar>(familiars))
        {
            if (Foe.IsAlive)
            {
                familiar.Strike(Foe);
            }
        }
        if (Foe.IsAlive)
        {
            Draw();
        }
        Changed?.Invoke();
    }

    public void Draw()
    {
        Card card = deck.Draw();
        if (card == null)
        {
            return;
        }
        if (hand.Count >= MaxHandSize)
        {
            deck.Discard(card);
            Announced?.Invoke($"{card.DisplayName} burned: the hand is full.");
        }
        else
        {
            hand.Add(card);
        }
        Changed?.Invoke();
    }

    // Can this card be played right now? It's this duelist's turn, the card is
    // in the hand, there's mana for it, and the card itself agrees.
    public bool CanPlay(Card card)
    {
        return IsTakingTurn && hand.Contains(card) && card.Cost <= Mana && card.CanPlay(this);
    }

    // An attack must land on the foe or one of the foe's familiars; other cards
    // take no target at all.
    public bool IsValidTarget(Card card, IDamageable target)
    {
        if (!card.NeedsTarget)
        {
            return true;
        }
        return target != null && target.IsAlive && target.Owner == Foe;
    }

    // Plays the card if the rules allow it, and says why not if they don't.
    public bool TryPlay(Card card, IDamageable target)
    {
        if (!IsTakingTurn || !hand.Contains(card))
        {
            return false;
        }
        if (card.Cost > Mana)
        {
            Announced?.Invoke("Not enough mana.");
            return false;
        }
        if (!card.CanPlay(this))
        {
            Announced?.Invoke("There's no room on the board.");
            return false;
        }
        if (!IsValidTarget(card, target))
        {
            Announced?.Invoke("Drop an attack on the foe, or on one of the foe's familiars.");
            return false;
        }

        Mana -= card.Cost;
        hand.Remove(card);
        CardPlayed?.Invoke(card);
        card.Play(this, target);
        deck.Discard(card);
        Changed?.Invoke();
        return true;
    }

    public void TakeDamage(int amount)
    {
        if (!IsAlive || amount <= 0)
        {
            return;
        }
        int absorbed = Mathf.Min(Shield, amount);
        Shield -= absorbed;
        Health = Mathf.Max(Health - (amount - absorbed), 0);
        Damaged?.Invoke(amount);
        Changed?.Invoke();
        if (!IsAlive)
        {
            Died?.Invoke();
        }
    }

    public void Heal(int amount)
    {
        int before = Health;
        Health = Mathf.Min(Health + amount, maxHealth);
        Healed?.Invoke(Health - before);
        Changed?.Invoke();
    }

    public void GainShield(int amount)
    {
        Shield += amount;
        Shielded?.Invoke(amount);
        Changed?.Invoke();
    }

    public void Summon(SummonCard card)
    {
        Familiar familiar = Instantiate(familiarPrefab, board);
        familiar.Setup(card, this);
        familiar.Damaged += OnFamiliarDamaged;
        familiar.Died += OnFamiliarDied;
        familiars.Add(familiar);
        Summoned?.Invoke(familiar);
        Changed?.Invoke();
    }

    void OnFamiliarDamaged(Familiar familiar, int amount)
    {
        FamiliarDamaged?.Invoke(familiar, amount);
    }

    void OnFamiliarDied(Familiar familiar)
    {
        familiar.Damaged -= OnFamiliarDamaged;
        familiar.Died -= OnFamiliarDied;
        familiars.Remove(familiar);
        Changed?.Invoke();
    }

    void OnReshuffled(int count)
    {
        Announced?.Invoke($"{DisplayName}: {count} cards reshuffled into the draw pile.");
    }
}
```

10. `DuelManager` gets the opponent as a profile, and a thinking time. The opponent's
    name, portrait and deck come from the profile now, and so does the arena: the
    `Arena` sprite behind everything.

```csharp
using System;
using System.Collections;
using TMPro;
using UnityEngine;
using UnityEngine.Events;

// The duel itself: whose turn it is, and when it's over. It's a state machine,
// as in Level 3. It raises C# events for other scripts, and UnityEvents for
// whatever a designer wires up in the Inspector. It talks to each side's
// controller through IDuelistController, so it can't tell a person from the
// computer.
public class DuelManager : MonoBehaviour
{
    enum State { Starting, PlayerTurn, OpponentTurn, Over }

    const float MessageTime = 2f;
    const float MessageFadeTime = 0.5f;

    [SerializeField] Duelist player;
    [SerializeField] Duelist opponent;
    [SerializeField] Sprite playerPortrait;
    [SerializeField] Card[] playerDeck;                // until Chapter 12
    [SerializeField] OpponentProfile opponentProfile;  // until Chapter 12
    [SerializeField] SpriteRenderer arena;
    [SerializeField] TMP_Text messageText;
    [SerializeField] float thinkTime = 0.8f;
    [SerializeField] float endDelay = 1.5f;
    [SerializeField] UnityEvent onPlayerTurn;
    [SerializeField] UnityEvent onDuelOver;

    State state = State.Starting;
    IDuelistController playerController;
    IDuelistController opponentController;
    Coroutine hideMessage;

    public OpponentProfile Opponent { get; private set; }

    // How long the computer thinks before each card.
    public float ThinkTime { get { return thinkTime; } }

    public event Action<Duelist> TurnStarted;
    public event Action<bool> DuelEnded;        // true when the player won

    void Awake()
    {
        // Unity can't show an interface in the Inspector, so we ask each side's
        // GameObject for whichever component is its controller.
        playerController = player.GetComponent<IDuelistController>();
        opponentController = opponent.GetComponent<IDuelistController>();
    }

    void OnEnable()
    {
        player.Died += OnPlayerDied;
        opponent.Died += OnOpponentDied;
        player.Announced += ShowMessage;
        opponent.Announced += ShowMessage;
    }

    void OnDisable()
    {
        player.Died -= OnPlayerDied;
        opponent.Died -= OnOpponentDied;
        player.Announced -= ShowMessage;
        opponent.Announced -= ShowMessage;
    }

    void Start()
    {
        Opponent = opponentProfile;
        arena.sprite = Opponent.Arena;
        player.Foe = opponent;
        opponent.Foe = player;
        player.Begin("You", playerPortrait, playerDeck);
        opponent.Begin(Opponent.DisplayName, Opponent.Portrait, Opponent.Deck);
        EnterState(State.PlayerTurn);
    }

    // The controller whose turn it is calls this when it's done.
    public void EndTurn(Duelist who)
    {
        if (state == State.PlayerTurn && who == player)
        {
            EnterState(State.OpponentTurn);
        }
        else if (state == State.OpponentTurn && who == opponent)
        {
            EnterState(State.PlayerTurn);
        }
    }

    // From the pause menu.
    public void GiveUp()
    {
        Finish(false);
    }

    public void ShowMessage(string text)
    {
        messageText.text = text;
        messageText.alpha = 1f;
        if (hideMessage != null)
        {
            StopCoroutine(hideMessage);
        }
        hideMessage = StartCoroutine(HideMessage());
    }

    void EnterState(State next)
    {
        state = next;
        switch (state)
        {
            case State.PlayerTurn:
                StartTurn(player, opponent, playerController, "Your turn");
                if (state == State.PlayerTurn)
                {
                    onPlayerTurn.Invoke();
                }
                break;
            case State.OpponentTurn:
                StartTurn(opponent, player, opponentController, $"{opponent.DisplayName}'s turn");
                break;
            case State.Over:
                player.IsTakingTurn = false;
                opponent.IsTakingTurn = false;
                break;
        }
    }

    void StartTurn(Duelist who, Duelist foe, IDuelistController controller, string message)
    {
        foe.IsTakingTurn = false;
        ShowMessage(message);
        who.StartTurn();                // its familiars strike, and the foe may fall
        if (state == State.Over)
        {
            return;
        }
        who.IsTakingTurn = true;
        TurnStarted?.Invoke(who);
        controller.BeginTurn(who, foe, this);
    }

    void OnPlayerDied()
    {
        Finish(false);
    }

    void OnOpponentDied()
    {
        Finish(true);
    }

    void Finish(bool playerWon)
    {
        if (state == State.Over)
        {
            return;
        }
        EnterState(State.Over);
        ShowMessage(playerWon ? "Victory!" : "Defeat");
        DuelEnded?.Invoke(playerWon);
        StartCoroutine(EndAfterDelay());
    }

    IEnumerator EndAfterDelay()
    {
        yield return new WaitForSecondsRealtime(endDelay);
        onDuelOver.Invoke();            // whatever the Inspector wires to the end
    }

    IEnumerator HideMessage()
    {
        yield return new WaitForSeconds(MessageTime);
        for (float t = 0f; t < MessageFadeTime; t += Time.deltaTime)
        {
            messageText.alpha = 1f - t / MessageFadeTime;
            yield return null;
        }
        messageText.alpha = 0f;
    }
}
```

<!-- check: end -->

The Console is clear.

### Judge it: does it fit?

Before you plug it in, judge it, as the exam asks you to (C# 9). Answer
from the code, then check:

| Question | Answer |
| --- | --- |
| How does it fit the duel's architecture? | It implements `IDuelistController`, and only uses members the contract lists. `DuelManager` already talks to an `IDuelistController`, so nothing else changes. |
| Which line stops it playing a card it can't afford? | `if (!me.CanPlay(card)) { continue; }` in `TakeTurn`: `CanPlay` checks the mana. |
| What does it score a heal at full health? | 0: `Mathf.Min(heal.Amount, missingHealth)` with `missingHealth` 0. And it only plays a card that scores above 0, so it never wastes one. |
| What does it do with a kind of card it doesn't know? | Scores it 0, so it never plays it (the last line of `Score`). |
| ...and with your `DrainCard`, which it's never heard of? | Plays it: `card is AttackCard attack` is **true** for a drain card, because a `DrainCard` *is* an `AttackCard`. Inheritance at work, in code you didn't write. |
| Does it cheat? | No: it reads its own hand, and the foe's health, shield and familiars, which you can see too. Never the foe's hand. |
| Does it follow the style guide? | Mostly: `[SerializeField]` private field, named constants, comments on its parts. But the weights `2f`, `0.5f`, `3f` and `0.8f` in the scores are bare numbers, which the guide doesn't allow. Note it for Sam; don't change it yourself. |
| How do you see its choices? | Tick **Log Decisions**: a debug switch instead of logs that never stop (C# 19). |

### Do it — plug it in

11. Open the `Opponent Panel` prefab variant. Remove `PassingOpponent`, and add
    `OpponentBrain`. Save. `DuelManager`'s `Awake` finds it with
    `GetComponent<IDuelistController>()`, as it found the stand-in. Delete the
    `PassingOpponent` script: its job is done.

### Do it — four opponents

12. In `Assets/Data`, a folder `Opponents`. **Create → Arcane Duel → Opponent**, four
    times:

| Asset | Id | Portrait | Arena | Arena Name | Difficulty | Rare Card | Aggression | Caution | Patience |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Mira the Ranger | `mira` | `Mira` | `Autumn Woods` | *the Autumn Woods* | 1 | Frost Bolt | 1.5 | 0.5 | 0.8 |
| Brother Aldric | `aldric` | `Aldric` | `Snowfield` | *the Snowfield* | 2 | Golden Aegis | 0.7 | 1.6 | 1 |
| Old Wren | `wren` | `Wren` | `Hollow` | *the Hollow* | 2 | Blood Fiend | 0.8 | 1 | 1.8 |
| Kasha the Blade | `kasha` | `Kasha` | `Arena` | *the Arena* | 3 | Soul Siphon | 1.2 | 1.2 | 1.2 |

13. Their decks, 20 cards each. Each one plays to its owner's style:

| Card | Mira | Aldric | Wren | Kasha |
| --- | --- | --- | --- | --- |
| Quick Strike | 2 | 2 | 2 | 1 |
| Crossbow Bolt | 2 | 2 | 1 | 2 |
| Cleave | 2 | 1 | 1 | 2 |
| Fireball | 2 | 1 | | 2 |
| Crushing Blow | | | | 1 |
| Frost Bolt | 1 | | | 1 |
| Bloodletter | 1 | | 1 | 1 |
| Soul Siphon | | | | 1 |
| Healing Draught | 2 | 2 | 2 | 1 |
| Elixir | | 2 | 1 | 1 |
| Blessing | | 1 | | |
| Buckler | 2 | 2 | 2 | |
| Iron Guard | 1 | 2 | 1 | 1 |
| Battle Helm | | 1 | | |
| Plate Armour | | 1 | | 1 |
| Golden Aegis | | 1 | | 1 |
| Storm Bird | 2 | | 2 | |
| Grey Drake | 2 | | 2 | 1 |
| Snow Tiger | 1 | | 2 | 2 |
| Swamp Troll | | 2 | 2 | |
| Blood Fiend | | | 1 | 1 |

14. In the Battle scene, `DuelManager` has lost its opponent's name, portrait and deck,
    and gained **Opponent Profile**, **Arena** and **Think Time**. Drag `Mira the Ranger`
    into **Opponent Profile** and the `Arena` sprite into **Arena**. **Think Time** 0.8.

### Test it

- **Play.** Mira thinks for a moment, then plays: a card flies out of her hand, face up,
  to the table. She ends her turn herself. Her portrait and her arena are hers.
- Tick **Log Decisions** on the `Opponent Panel`'s `OpponentBrain` (in Play mode, on the
  scene's panel), and watch the Console: *Mira the Ranger plays Quick Strike (score 3.0).*
- Summon a familiar: within a turn or two, Mira attacks **it** with a card that can kill
  it, rather than you.
- Change **Opponent Profile** to `Old Wren`, Play: a board full of familiars, in the
  Hollow. Then `Brother Aldric`: shields and heals, in the snow.

### Commit

*Plug in the lead's opponent module, with four opponents.*

### Challenge

Make a fifth opponent, all aggression (2, 0, 0), with a deck of nothing but attacks. Who
wins more often, you or it? What does that say about Caution?

# Part 4 — A Whole Game

## C# 10 — Static: Uses and Risks

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
| a choice carried to the next scene | `RaceSetup.Track` | loading a scene destroys its objects, but not a static (C# 11) |

```csharp
// Every PlayerPrefs key in the game, in one place.
public static class SettingsKeys
{
    public const string MusicVolume = "MusicVolume";
    public const string Difficulty = "Difficulty";
}
```

`PlayerPrefs.GetFloat(SettingsKeys.MusicVolume, 1f)` can't be misspelt the way
`"MusicVolum"` can: a wrong name doesn't compile (C# 13 covers PlayerPrefs).

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
`MissingReferenceException` from C# 8 as soon as it reaches its destroyed
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
| a small setting: the volume, a key binding | PlayerPrefs (C# 13) | it's deleted: it survives quitting |
| game data: unlocks, a deck, the cash of a juice empire | a JSON file (C# 13) | it's deleted |

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

## C# 11 — Scenes

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
where it leads. C# 8 compares this kind of event, a UnityEvent, with C# events.

### Idea — passing data between scenes

Everything in a scene is destroyed when it unloads, so the track chosen in the Menu must
wait somewhere outside any scene. There are four places:

| Way | Lasts | Use it for | Watch out for |
| --- | --- | --- | --- |
| a **static class** | until the game quits | a choice in one scene for the next | old values, and a scene played on its own |
| a **ScriptableObject** asset | until the game quits | the same, through an asset | set every value, every time |
| **PlayerPrefs** or a file | after quitting, too | settings, best times, the save | C# 13 |
| **`DontDestroyOnLoad`** | until it's destroyed | an object that must keep running | a new copy each time you come back |

**1. A static class.** It belongs to no scene and no object, so it survives every load
(C# 10 covers the risks):

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

## Chapter 12 — Four Scenes

**Goal:** the game in scenes: a **Menu** where you choose your opponent, the **Battle**,
and the **Results**, with a fade between each. The choice crosses from the Menu into
the Battle, and the result from the Battle into the Results, through a static class.
And the Results screen is a script the intern wrote last summer.

### Idea — what crosses between scenes

Loading a scene destroys every object in the old one (C# 11). So what the Menu
chose (an opponent, a deck) and what the Battle decided (who won, by how much) must live
somewhere that isn't a scene object. The simplest place is a **static** class
(C# 10): it belongs to no scene, so a scene load can't touch it.

```
Menu ──DuelSetup.Opponent, DuelSetup.Deck──► Battle ──DuelSetup.Result──► Results
```

Every scene also gets a **Scene Fader**: a black curtain on its own canvas, drawn over
everything. It fades out when a scene starts, and in again before the next one loads,
with `LoadSceneAsync` in a coroutine. Its `FadeTo(string sceneName)` is `public`, so a
button can call it from its **On Click ()** list, with the scene's name typed into the
Inspector: a **Back** or **Menu** button needs no code of its own.

### Do it — passing data, and fading

1. In `Scripts/Flow`, `DuelResult`, a plain class: what happened in one duel.

```csharp:DuelResult.cs
// What happened in one duel, for the Results screen. A plain class: no
// GameObject and no Inspector, only data carried from one scene to the next.
public class DuelResult
{
    public DuelResult(OpponentProfile opponent)
    {
        Opponent = opponent;
    }

    public OpponentProfile Opponent { get; private set; }
    public bool Won { get; set; }
    public int Turns { get; set; }
    public int DamageDealt { get; set; }
    public int DamageTaken { get; set; }
    public int CardsPlayed { get; set; }
    public int BiggestHit { get; set; }
    public Card RareCardWon { get; set; }     // null unless this win gave one
}
```

2. `DuelSetup`, a static class. First, the obvious version:

```csharp
using System.Collections.Generic;

// What one scene hands to the next: the opponent and the deck chosen in the
// Menu, and the result the Battle leaves for the Results screen. Static
// properties belong to no scene and no GameObject, so they survive a scene
// load. That's why they work here, and why they need care.
public static class DuelSetup
{
    public static OpponentProfile Opponent { get; set; }
    public static List<Card> Deck { get; set; }
    public static DuelResult Result { get; set; }
}
```

3. `SceneFader`:

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

- `yield return StartCoroutine(Fade(0f, 1f))` waits for the fade to finish before the
  next line.
- The fade counts `Time.unscaledDeltaTime`: from the pause menu (Chapter 15) time is
  stopped, and a fade on `deltaTime` would never move.
- `Time.timeScale = 1f` before loading: a scene loaded from a paused game must not start
  paused. The time scale belongs to no scene, just like a static field.

4. **The Scene Fader prefab.** In the Battle scene: **GameObject → UI (Canvas) → Canvas**, called
   `Scene Fader`, **Screen Space - Overlay**, **Sort Order** 100 (over everything), with
   the same **Canvas Scaler** settings as the main canvas, and a **Canvas Group** (**Alpha**
   1, **Blocks Raycasts** on). A child **Image** `Curtain`, stretch–stretch, black. Add
   `SceneFader`, drag the Canvas Group in, and make it a prefab. Keep it in the scene. If
   Unity made a second `EventSystem`, delete it: one per scene is enough.

### Do it — the Card Library

5. The Menu needs a starter deck, and later the Deck Builder needs every card. Both live
   in one asset. In `Scripts/Cards`, `CardLibrary`:

```csharp
using System.Collections.Generic;
using UnityEngine;

// Every card in the game, and the starter deck.
[CreateAssetMenu(fileName = "Card Library", menuName = "Arcane Duel/Card Library")]
public class CardLibrary : ScriptableObject
{
    [SerializeField] Card[] cards;
    [SerializeField] Card[] starterDeck;

    public IReadOnlyList<Card> Cards { get { return cards; } }
    public IReadOnlyList<Card> StarterDeck { get { return starterDeck; } }
}
```

6. **Create → Arcane Duel → Card Library** in `Assets/Data`. **Cards**: all 21 (select
   them all in `Data/Cards` and drag them in). **Starter Deck**, 20 cards: 2 Quick
   Strike, 2 Crossbow Bolt, 2 Cleave, 1 Fireball, 1 Bloodletter, 2 Healing Draught,
   1 Elixir, 2 Buckler, 2 Iron Guard, 1 Plate Armour, 2 Storm Bird, 1 Grey Drake and 1
   Snow Tiger.

### Do it — the duel reads the setup

7. `DuelManager` takes its opponent and deck from `DuelSetup`, and leaves a
   `DuelResult` there when the duel ends. If the Battle scene is played on its own,
   there's no setup: it says so with a **warning**, and uses a **Test Opponent** and the
   starter deck, so you can still test it.

```csharp
using System;
using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;
using UnityEngine.Events;

// The duel itself: whose turn it is, and when it's over. It's a state machine,
// as in Level 3. It raises C# events for other scripts, and UnityEvents for
// whatever a designer wires up in the Inspector. It talks to each side's
// controller through IDuelistController, so it can't tell a person from the
// computer.
public class DuelManager : MonoBehaviour
{
    enum State { Starting, PlayerTurn, OpponentTurn, Over }

    const float MessageTime = 2f;
    const float MessageFadeTime = 0.5f;

    [SerializeField] Duelist player;
    [SerializeField] Duelist opponent;
    [SerializeField] Sprite playerPortrait;
    [SerializeField] CardLibrary library;
    [SerializeField] OpponentProfile testOpponent;     // when the Battle scene is played on its own
    [SerializeField] SpriteRenderer arena;
    [SerializeField] TMP_Text messageText;
    [SerializeField] float thinkTime = 0.8f;
    [SerializeField] float endDelay = 1.5f;
    [SerializeField] UnityEvent onPlayerTurn;
    [SerializeField] UnityEvent onDuelOver;

    State state = State.Starting;
    IDuelistController playerController;
    IDuelistController opponentController;
    DuelResult result;
    Coroutine hideMessage;

    public OpponentProfile Opponent { get; private set; }

    // How long the computer thinks before each card.
    public float ThinkTime { get { return thinkTime; } }

    public event Action<Duelist> TurnStarted;
    public event Action<bool> DuelEnded;        // true when the player won

    void Awake()
    {
        // Unity can't show an interface in the Inspector, so we ask each side's
        // GameObject for whichever component is its controller.
        playerController = player.GetComponent<IDuelistController>();
        opponentController = opponent.GetComponent<IDuelistController>();
    }

    void OnEnable()
    {
        player.Died += OnPlayerDied;
        opponent.Died += OnOpponentDied;
        player.Announced += ShowMessage;
        opponent.Announced += ShowMessage;
        player.CardPlayed += OnPlayerCardPlayed;
        player.Damaged += OnPlayerDamaged;
        opponent.Damaged += OnOpponentDamaged;
    }

    void OnDisable()
    {
        player.Died -= OnPlayerDied;
        opponent.Died -= OnOpponentDied;
        player.Announced -= ShowMessage;
        opponent.Announced -= ShowMessage;
        player.CardPlayed -= OnPlayerCardPlayed;
        player.Damaged -= OnPlayerDamaged;
        opponent.Damaged -= OnOpponentDamaged;
    }

    void Start()
    {
        Opponent = DuelSetup.Opponent;
        if (Opponent == null)
        {
            Opponent = testOpponent;
            Debug.LogWarning("No opponent was chosen, so the Battle scene was played on its own: using the Test Opponent.", this);
        }
        IReadOnlyList<Card> deck = DuelSetup.Deck;
        if (deck == null)
        {
            deck = library.StarterDeck;
            Debug.LogWarning("No deck was chosen: using the starter deck.", this);
        }

        arena.sprite = Opponent.Arena;
        result = new DuelResult(Opponent);
        player.Foe = opponent;
        opponent.Foe = player;
        player.Begin("You", playerPortrait, deck);
        opponent.Begin(Opponent.DisplayName, Opponent.Portrait, Opponent.Deck);
        EnterState(State.PlayerTurn);
    }

    // The controller whose turn it is calls this when it's done.
    public void EndTurn(Duelist who)
    {
        if (state == State.PlayerTurn && who == player)
        {
            EnterState(State.OpponentTurn);
        }
        else if (state == State.OpponentTurn && who == opponent)
        {
            EnterState(State.PlayerTurn);
        }
    }

    // From the pause menu.
    public void GiveUp()
    {
        Finish(false);
    }

    public void ShowMessage(string text)
    {
        messageText.text = text;
        messageText.alpha = 1f;
        if (hideMessage != null)
        {
            StopCoroutine(hideMessage);
        }
        hideMessage = StartCoroutine(HideMessage());
    }

    void EnterState(State next)
    {
        state = next;
        switch (state)
        {
            case State.PlayerTurn:
                result.Turns++;
                StartTurn(player, opponent, playerController, "Your turn");
                if (state == State.PlayerTurn)
                {
                    onPlayerTurn.Invoke();
                }
                break;
            case State.OpponentTurn:
                StartTurn(opponent, player, opponentController, $"{opponent.DisplayName}'s turn");
                break;
            case State.Over:
                player.IsTakingTurn = false;
                opponent.IsTakingTurn = false;
                break;
        }
    }

    void StartTurn(Duelist who, Duelist foe, IDuelistController controller, string message)
    {
        foe.IsTakingTurn = false;
        ShowMessage(message);
        who.StartTurn();                // its familiars strike, and the foe may fall
        if (state == State.Over)
        {
            return;
        }
        who.IsTakingTurn = true;
        TurnStarted?.Invoke(who);
        controller.BeginTurn(who, foe, this);
    }

    void OnPlayerDied()
    {
        Finish(false);
    }

    void OnOpponentDied()
    {
        Finish(true);
    }

    void Finish(bool playerWon)
    {
        if (state == State.Over)
        {
            return;
        }
        EnterState(State.Over);
        result.Won = playerWon;
        DuelSetup.Result = result;
        ShowMessage(playerWon ? "Victory!" : "Defeat");
        DuelEnded?.Invoke(playerWon);
        StartCoroutine(EndAfterDelay());
    }

    IEnumerator EndAfterDelay()
    {
        yield return new WaitForSecondsRealtime(endDelay);
        onDuelOver.Invoke();            // in the Inspector: the Scene Fader fades to Results
    }

    IEnumerator HideMessage()
    {
        yield return new WaitForSeconds(MessageTime);
        for (float t = 0f; t < MessageFadeTime; t += Time.deltaTime)
        {
            messageText.alpha = 1f - t / MessageFadeTime;
            yield return null;
        }
        messageText.alpha = 0f;
    }

    void OnPlayerCardPlayed(Card card)
    {
        result.CardsPlayed++;
    }

    void OnPlayerDamaged(int amount)
    {
        result.DamageTaken += amount;
    }

    void OnOpponentDamaged(int amount)
    {
        result.DamageDealt += amount;
        result.BiggestHit = Mathf.Max(result.BiggestHit, amount);
    }
}
```

8. In the Battle scene: `DuelManager`'s **Test Opponent** is `Mira the Ranger`, and
   **Library** the Card Library. Wire **On Duel Over ()**: **+**, the `Scene Fader`, **SceneFader → FadeTo (string)**,
   and type `Results`.

### Do it — a card for the menus

The opponent select and the Results screen show a rare card, and in Chapter 13 the Deck
Builder shows them all. Those are menus: UI, on a canvas, where a sprite card has no
place. So the menus get their own view of a card, a **Card Tile**, made of Images: the
same `Card` asset, drawn a second way. One piece of data, two views.

9. In `Scripts/UI`, `CardTile`:

```csharp
using TMPro;
using UnityEngine;
using UnityEngine.UI;

// One card in a menu, in UI: the opponent select and the Results screen. It shows
// the same Card asset as a CardView on the table, drawn with Images instead of
// sprites: two views of one piece of data.
public class CardTile : MonoBehaviour
{
    [SerializeField] Image frame;
    [SerializeField] Sprite cardFront;
    [SerializeField] Sprite rareCardFront;
    [SerializeField] Image art;
    [SerializeField] TMP_Text costText;
    [SerializeField] TMP_Text nameText;
    [SerializeField] TMP_Text rulesText;
    [SerializeField] TMP_Text kindText;
    [SerializeField] Image kindRibbon;
    [SerializeField] Color[] kindColours;      // one for each CardKind, in the enum's order
    [SerializeField] Color nameColour;
    [SerializeField] Color rareNameColour;

    public Card Card { get; private set; }

    public void Show(Card card)
    {
        Card = card;
        frame.sprite = card.IsRare ? rareCardFront : cardFront;
        art.sprite = card.Art;
        costText.text = card.Cost.ToString();
        nameText.text = card.DisplayName;
        nameText.color = card.IsRare ? rareNameColour : nameColour;
        rulesText.text = card.Describe();
        kindText.text = card.Kind.ToString();
        kindRibbon.color = kindColours[(int)card.Kind];
    }
}
```

A rare card here is the same tile with the other frame and a gold name, chosen in `Show`:
no variant needed for two small differences.

10. **The Card Tile prefab.** On the Battle scene's `Canvas` (any canvas will do),
    **Create Empty**, `Card Tile`: **Width** 250, **Height** 333, **Pivot** (0.5, 0). Its
    children, in this order, every **Raycast Target** off except the `Background`'s:

| Child | What | Rect Transform | Settings |
| --- | --- | --- | --- |
| `Background` | Image | stretch–stretch, **Left** 14, **Top** 12, **Right** 14, **Bottom** 12 | `Card Background`; **Raycast Target on** (what a click lands on) |
| `Art` | Image | anchor **top-center**, pivot (0.5, 0.5), **Pos** (0, −140), 132 × 132 | `icon_sword`, **Preserve Aspect** |
| `Frame` | Image | stretch–stretch, all 0 | `Card Front` |
| `Kind Ribbon` | Image | top-center, (0, −212), 112 × 26 | `Panel`, **Sliced**, multiplier 1.6, colour `#A3283C` |
| `Kind Ribbon/Kind` | Text - TextMeshPro | 112 × 26, **Pos Y** 1 | *Attack*, `Cinzel-Bold SDF` 15, white, centred, **Character Spacing** 4 |
| `Name` | Text - TextMeshPro | top-center, (0, −244), 214 × 34 | *Quick Strike*, `CinzelDecorative-Bold SDF`, **Auto Size** 14–22, `#F3DDB6`, centred |
| `Rules` | Text - TextMeshPro | top-center, (0, −278), 196 × 44 | *Deal 2 damage.*, `Cinzel-Regular SDF`, **Auto Size** 11–18, `#EDE3F0`, centred, **Wrapping** No Wrap |
| `Cost Gem` | Image | anchor and pivot **top-left**, (8, −8), 58 × 58 | `Gem`; a child **Text - TextMeshPro** `Cost`, 58 × 58, **Pos Y** 1, *1*, `Cinzel-Bold SDF` 32, white, centred |

Add `CardTile` to `Card Tile`, and fill it: `Frame`, the `Card Front` and `Rare Card
Front` sprites, `Art`, `Cost`, `Name`, `Rules`, `Kind`, `Kind Ribbon`, the five **Kind
Colours** (as on the `Card`), **Name Colour** `#F3DDB6` and **Rare Name Colour**
`#FFD27A`. Drag it into `Assets/Prefabs`, and delete it from the scene.

### Do it — the Menu

11. In `Scripts/Flow`, `OpponentButton`, one opponent on the opponent select:

```csharp
using TMPro;
using UnityEngine;
using UnityEngine.UI;

// One opponent on the Menu's opponent select: their portrait in their arena,
// their name, how hard they are, and their rare card.
public class OpponentButton : MonoBehaviour
{
    static readonly string[] DifficultyNames = { "Easy", "Medium", "Hard" };

    [SerializeField] Button button;
    [SerializeField] Image portrait;
    [SerializeField] Image arena;
    [SerializeField] TMP_Text nameText;
    [SerializeField] TMP_Text arenaText;
    [SerializeField] TMP_Text difficultyText;
    [SerializeField] TMP_Text stateText;
    [SerializeField] CardTile rareCard;

    public Button Button { get { return button; } }

    public void Show(OpponentProfile profile)
    {
        portrait.sprite = profile.Portrait;
        arena.sprite = profile.Arena;
        nameText.text = profile.DisplayName;
        arenaText.text = profile.ArenaName;
        difficultyText.text = DifficultyNames[profile.Difficulty - 1];
        rareCard.Show(profile.RareCard);
        stateText.text = "Wins you this card:";
    }
}
```

`DifficultyNames[profile.Difficulty - 1]`: difficulty runs from 1 to 3, the array from 0.

12. And `MainMenu`:

```csharp
using System.Collections.Generic;
using UnityEngine;

// The Menu scene. Duel opens the opponent select, made in code from the four
// opponent profiles: each opponent's button gets its own listener, a lambda that
// remembers which opponent it belongs to.
public class MainMenu : MonoBehaviour
{
    [SerializeField] SceneFader fader;
    [SerializeField] CardLibrary library;
    [SerializeField] OpponentProfile[] opponents;
    [SerializeField] OpponentButton opponentButtonPrefab;
    [SerializeField] Transform opponentList;
    [SerializeField] GameObject opponentPanel;
    [SerializeField] GameObject quitButton;

    void Start()
    {
        // A web page can't quit, so the Quit button only shows in a PC build or the Editor.
        quitButton.SetActive(Application.platform != RuntimePlatform.WebGLPlayer);
        opponentPanel.SetActive(false);
    }

    // The Duel button: the buttons are made again each time, so they're never stale.
    public void ShowOpponents()
    {
        foreach (Transform old in opponentList)
        {
            Destroy(old.gameObject);
        }

        foreach (OpponentProfile profile in opponents)
        {
            OpponentButton button = Instantiate(opponentButtonPrefab, opponentList);
            button.Show(profile);
            button.Button.onClick.AddListener(() => Choose(profile));
        }
        opponentPanel.SetActive(true);
    }

    public void Quit()
    {
        Application.Quit();
    }

    void Choose(OpponentProfile profile)
    {
        DuelSetup.Opponent = profile;
        if (DuelSetup.Deck == null)
        {
            DuelSetup.Deck = new List<Card>(library.StarterDeck);
        }
        fader.FadeTo("Battle");
    }
}
```

Look at `AddListener(() => Choose(profile))`. A Button's **On Click** wants a method with
no parameters, but `Choose` needs to know **which** opponent. The lambda,
`() => Choose(profile)`, is a tiny method with no parameters that calls `Choose` with
*this* loop's `profile` (C# 8). Four buttons, four lambdas, each remembering
its own opponent.

13. **The Opponent Button prefab.** On a canvas, an **Image**, `Opponent Button`,
    360 × 600, `Panel` **Sliced** (multiplier 0.5) in `#1C1020` at alpha 230, with a
    **Button** component and an `Edge` like the panels'. Inside it: `Arena` (an Image, top-center, (0, −10),
    340 × 190), `Portrait` (top-left, (20, −136), 120 × 120, with an `Edge`), `Name`
    (`CinzelDecorative-Bold SDF`, auto size 16–26, at (152, −196), 196 × 64, bottom-left
    aligned), `Arena Name` (`Cinzel-Regular SDF` 19, `#C3B3C6`, (20, −268), 320 × 28),
    `Difficulty` (`Cinzel-Bold SDF` 22, gold `#FFD27A`, (20, −298)), `State`
    (`Cinzel-Regular SDF` 18, (20, −332)), and a **Card Tile**, anchor
    **bottom-center**, (0, 18), **Scale** 0.68. Give the tile a **Canvas Group** with
    **Blocks Raycasts** unticked, so a click on the card reaches the button. Add `OpponentButton`,
    fill its fields, and make it a prefab.
14. **The Menu scene.** **File → New Scene**, **Basic 2D (URP)**, save it as
    `Assets/Scenes/Menu`. The menus have no table, so everything is UI: the camera as in
    Chapter 2 (**Size** 5.4, background `#0B070D`), and a **Screen Space - Overlay**
    canvas scaled as there. Its background, as Images with **Raycast Target** off:
    - `Arena`, stretch–stretch (anchor preset with **Alt**), `Art/Arenas/Meadow`;
    - `Dim`, stretched the same way, black with alpha 97;
    - `Top Fade`: anchor **top–stretch** (Alt), **Height** 260, `Art/UI/Fade` (solid at
      the top), black with alpha 179;
    - `Bottom Fade`: anchor **bottom–stretch** (Alt and Shift), then **Pivot Y** 0.5,
      **Pos Y** 150, **Height** 300 and **Scale Y** −1, the gradient upside down, black
      with alpha 204.

    Then:
    - `Title`: *Arcane Duel*, `CinzelDecorative-Black SDF` 150, `#F3DDB6`, at (0, 280),
      1500 × 190; and `Subtitle`, *A card duel in four arenas*, `Cinzel-Regular SDF` 34,
      `#C3B3C6`, at (0, 170).
    - Four `Game Button`s down the middle, 440 × 96, label size 44: `Duel` (0, 40), `Deck`
      (0, −76), `Settings` (0, −192) and `Quit` (0, −308).
    - `Opponent Select`: stretch–stretch, with a `Dim` (alpha 166, **Raycast Target on**,
      so the menu behind can't be clicked) and a `Window` (1700 × 880, `Panel` sliced
      multiplier 0.5, `#1C1020` at alpha 250, with an `Edge`). In the window: a title,
      *Choose your opponent*, `CinzelDecorative-Black SDF` 54 at the top; `Opponent List`,
      1600 × 620 in the middle, with a **Horizontal Layout Group** (spacing 30, **Middle
      Center**, all four boxes unticked); and a **Back** `Game Button` at the bottom whose
      **On Click ()** sets `Opponent Select` inactive (**GameObject → SetActive**, unticked).
    - An empty `Main Menu` with `MainMenu`: the fader, the library, the four opponents,
      the Opponent Button prefab, `Opponent List`, `Opponent Select`, and the `Quit`
      button.
    - **On Click ()** for the menu buttons: `Duel` → `MainMenu.ShowOpponents`; `Quit` →
      `MainMenu.Quit`. (`Deck` and `Settings` come in Chapters 13 and 14.)
    - The `Scene Fader` prefab.
15. **The Results scene,** `Assets/Scenes/Results`, the same way, with the `Arena`
    background: a `Title` (*Victory*, `CinzelDecorative-Black SDF` 150, at (0, 360)); an
    `Opponent` text (`Cinzel-Regular SDF` 34, (0, 250)); a `Stats Panel` (940 × 400 at
    (−250, −40), like a duelist panel) holding a `Portrait` (300 × 300) and a `Stats` text
    (`Cinzel-Regular SDF` 34, left-aligned, 520 × 320); a `Rare Card Won` group (520 × 520
    at (560, −40)) with a gold label, *A new card for your deck!*, and a **Card Tile**,
    anchor **bottom-center**, **Scale** 1.3; two `Game Button`s, `Rematch` (−200, 70) and `Menu` (200, 70),
    anchored **bottom-center**; an `AudioSource`; and the `Scene Fader`. Wire `Rematch` to
    **SceneFader → FadeTo** `Battle`, and `Menu` to `Menu`. The object names matter, as
    you're about to see.
16. **File → Build Profiles**: in the **Scene List**, add `Menu`, `Battle` and `Results`,
    with `Menu` first: a build opens the first scene in the list.

### Do it — the intern's Results screen

17. Sam forwards a script: *"Last summer's intern wrote the Results screen. It works.
    Put it in, and we'll talk about it in Chapter 18."* Your trainer shares
    `ResultsScreen.cs`; put it in `Scripts/Flow`:

```csharp
using UnityEngine;
using TMPro;
using UnityEngine.UI;

// results screen
public class ResultsScreen : MonoBehaviour
{
    public TMP_Text t;
    public Image p;
    public Image bg;
    public AudioSource a;
    public AudioClip w;
    public AudioClip l;
    public GameObject card;

    void Start()
    {
        // get the result
        DuelResult r = DuelSetup.Result;
        if (r == null) return;

        // set the title
        if (r.Won == true)
        {
            t.text = "Victory";
            t.color = new Color(1f, 0.82f, 0.48f);
            a.PlayOneShot(w);
        }
        else
        {
            t.text = "Defeat";
            t.color = new Color(0.75f, 0.68f, 0.8f);
            a.PlayOneShot(l);
        }
        GameObject.Find("Opponent").GetComponent<TMP_Text>().text = "against " + r.Opponent.DisplayName + ", in " + r.Opponent.ArenaName;
        p.sprite = r.Opponent.Portrait;
        bg.sprite = r.Opponent.Arena;

        // stats
        string s = "";
        s = s + "Turns: " + r.Turns + "\n";
        s = s + "Damage dealt: " + r.DamageDealt + "\n";
        s = s + "Damage taken: " + r.DamageTaken + "\n";
        s = s + "Cards played: " + r.CardsPlayed + "\n";
        s = s + "Biggest hit: " + r.BiggestHit;
        GameObject.Find("Stats").GetComponent<TMP_Text>().text = s;

        // the card
        if (r.RareCardWon != null)
        {
            card.SetActive(true);
            card.GetComponentInChildren<CardTile>().Show(r.RareCardWon);
        }
        else card.SetActive(false);
    }
}
```

You can already see a few things Sam's style guide doesn't allow. Leave them: it works,
and Chapter 18 is about changing it safely. Put it on an empty `Results` object in the
Results scene, and fill its seven public fields (`t` is the title, `p` the portrait, `bg`
the arena, `a` the AudioSource, `w` and `l` the `Victory` and `Defeat` sounds, `card` the
`Rare Card Won` group).

### Test it

- Open the **Menu** scene and **Play**. The screen fades in. **Duel**: four opponents.
  Click **Mira**: the screen fades out, and in again on the Battle, in her arena.
- Win or lose (lose faster: end your turn over and over). *Victory!* or *Defeat*, a
  pause, and the Results: the title, your numbers, Mira's portrait and arena.
  **Rematch** fades back into the Battle against Mira: `DuelSetup` still holds her.
  **Menu** goes back to the Menu.
- Now open the **Battle** scene and Play it on its own. The Console shows a warning:

```
No opponent was chosen, so the Battle scene was played on its own: using the Test Opponent.
```

  Click the warning: Unity highlights the `Duel Manager`, the object it came from (the
  `this` in `Debug.LogWarning(…, this)`).

### Do it — the static trap

18. Stop. Open the **Menu**, Play, choose **Kasha**, and stop as soon as the duel starts.
    Now open the **Battle** scene and Play it on its own again. Which opponent do you
    get?

**Kasha.** No warning. Look in **Edit → Project Settings → Editor**, under **Enter Play
Mode Settings**: *Reload Scene only*. Every new Universal 2D project starts like that.
Play starts faster because Unity doesn't reload your scripts, so their static values
last from one Play to the next (C# 10). `DuelSetup.Opponent` still holds Kasha from the last run.

19. The fix is to empty `DuelSetup` at the start of every Play, with an attribute Unity
    looks for:

```csharp:DuelSetup.cs
using System.Collections.Generic;
using UnityEngine;

// What one scene hands to the next: the opponent and the deck chosen in the
// Menu, and the result the Battle leaves for the Results screen. Static
// properties belong to no scene and no GameObject, so they survive a scene
// load. That's why they work here, and why they need care.
public static class DuelSetup
{
    public static OpponentProfile Opponent { get; set; }
    public static List<Card> Deck { get; set; }
    public static DuelResult Result { get; set; }

    // With domain reload off, static values last from one press of Play to the
    // next. Unity calls this before every Play, so each run starts empty.
    [RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.SubsystemRegistration)]
    static void ResetForPlay()
    {
        Opponent = null;
        Deck = null;
        Result = null;
    }
}
```

`[RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.SubsystemRegistration)]` asks
Unity to call this static method before anything else in each run. Try step 18 again:
Mira, and the warning, every time.

### Commit

*Add the Menu and Results scenes, with fades and DuelSetup.*

### Challenge

Make the Results screen work when it's played on its own: if there's no result, the
title says *No duel yet*, and the rare card group is hidden. (The intern's script just
returns, and leaves the scene half-filled. Chapter 18 fixes it properly.)

## C# 12 — Exceptions: try and catch

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

Exceptions are a family of classes (C# 4): a `FileNotFoundException`
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
C# 13 builds a whole save system this way.

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

## C# 13 — Saving: PlayerPrefs and JSON

**Goal:** you can keep a player's settings in PlayerPrefs and their progress in a JSON save
file, read both back safely, and choose the right place for each piece of data
(Associate: Programming — save data between scenes and sessions (static, PlayerPrefs)).

### Idea — three places to keep things

Static data is gone when the game closes. PlayerPrefs and files are on the disk, so
they're still there next time: *between sessions*, as the exam puts it.

| Place | Lasts | Good for | Example |
| --- | --- | --- | --- |
| a `static` field (C# 10) | until the game closes | passing data between scenes in one run | the kart picked on the menu |
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

| Problem | `Load` sees | and does (C# 12) |
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
(C# 6) turns the ids back into assets. A deck of cards or a row of juice
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
ScriptableObject (C# 5) with an `id` field, and look karts up by it.
Add an **Unlock** button that saves the next kart's id, and a vibration toggle in
PlayerPrefs. Type an unknown id into the file: does the game warn, and carry on?

## Chapter 13 — The Deck Builder

**Goal:** a **Deck Builder** scene: every card in a scrolling grid on the left, with
tabs to filter it; your deck as a list on the right. Click a card to add a copy; click a
line to take one out. A deck is exactly 20 cards, at most 2 of each. And a **Dictionary**
twice: the deck's counts, and the library's cards by id.

### Idea — a deck is a count of each card

A deck of 20 could be a `List<Card>` with Quick Strike in it twice. But every question the
Deck Builder asks is *how many of this card?*: can I add another? what does the list
say, *x2*? A **Dictionary** from each card to its count answers that in one step
(C# 6):

```
counts:   Quick Strike → 2    Fireball → 1    Iron Guard → 2    ...
```

| To | Code |
| --- | --- |
| read a count, 0 if it's not there | `counts.TryGetValue(card, out int count)` |
| add one copy | `counts[card] = count + 1` |
| take the last copy out | `counts.Remove(card)` |
| how many cards in all | add up `counts.Values` |
| show the list, in order | copy `counts.Keys` into a `List`, and `Sort` it |

The last row matters: a Dictionary has **no order**. The list on the screen is sorted by
cost, then by name, every time it's drawn.

### Idea — a grid that scrolls

The collection is a **Scroll Rect** (C# 2): a window (the **Viewport**, with a
**Rect Mask 2D** that hides what's outside it) over a **Content** that can be taller than
the window. The Content has a **Grid Layout Group**, four cards to a row, and a **Content
Size Fitter** that makes it exactly as tall as its rows: 21 cards, six rows. The deck list
is the same, with a **Vertical Layout Group**.

### Do it — the library finds cards by id

1. `CardLibrary` gets the deck rules, and a Dictionary from each card's id to the card.
   Chapter 14 needs it: the save file stores ids.

```csharp
using System.Collections.Generic;
using UnityEngine;

// Every card in the game, the starter deck, and the deck rules. A card can be
// found by its id, through a Dictionary: one lookup, however many cards there are.
[CreateAssetMenu(fileName = "Card Library", menuName = "Arcane Duel/Card Library")]
public class CardLibrary : ScriptableObject
{
    public const int DeckSize = 20;
    public const int MaxCopies = 2;

    [SerializeField] Card[] cards;
    [SerializeField] Card[] starterDeck;

    Dictionary<string, Card> cardsById;

    public IReadOnlyList<Card> Cards { get { return cards; } }
    public IReadOnlyList<Card> StarterDeck { get { return starterDeck; } }

    public bool TryGetCard(string id, out Card card)
    {
        if (cardsById == null)
        {
            BuildLookup();
        }
        return cardsById.TryGetValue(id, out card);
    }

    void BuildLookup()
    {
        cardsById = new Dictionary<string, Card>();
        foreach (Card card in cards)
        {
            if (cardsById.ContainsKey(card.Id))
            {
                Debug.LogError($"Two cards have the id '{card.Id}': {cardsById[card.Id].name} and {card.name}. Give each its own.", this);
                continue;
            }
            cardsById.Add(card.Id, card);
        }
    }

    // A change in the Inspector rebuilds the lookup on its next use.
    void OnValidate()
    {
        cardsById = null;
    }
}
```

- The Dictionary is built the first time it's needed, not before (`cardsById == null`).
- `ContainsKey` before `Add`: `Add` with a key that's already there would throw an
  exception. Two cards with one id is a mistake in the data, so it's an **error** in the
  Console, naming both assets.
- `OnValidate` runs when you change the asset in the Inspector: it throws the lookup away,
  so it's built again with your change.

### Do it — cards you can click, and lock

2. Open the `Card Tile` prefab (Chapter 12). Add a last child **Image**, `Lock`:
   stretch–stretch, **Left** 14, **Top** 12, **Right** 14, **Bottom** 12, colour `#0D0510`
   at alpha 184, **Raycast Target** on. Its child **Text - TextMeshPro**, 180 × 120 in its
   middle: *Win it from an opponent*, `Cinzel-Regular SDF` 22, `#F3DDB6`, centred. Untick
   `Lock`. Save.
3. The finished `CardTile`. New: `IPointerClickHandler` and the `Clicked` event; `SetLocked`
   and the lock; and the two drag interfaces, so a tile hands its drag to the Scroll Rect
   above it, and a finger can scroll the grid by dragging a card.

```csharp:CardTile.cs
using System;
using TMPro;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

// One card in a menu, in UI: the opponent select, the Results screen and the Deck
// Builder's grid. It shows the same Card asset as a CardView on the table, drawn
// with Images instead of sprites: two views of one piece of data. In the Deck
// Builder you click it.
public class CardTile : MonoBehaviour, IPointerClickHandler, IBeginDragHandler, IDragHandler
{
    [SerializeField] Image frame;
    [SerializeField] Sprite cardFront;
    [SerializeField] Sprite rareCardFront;
    [SerializeField] Image art;
    [SerializeField] TMP_Text costText;
    [SerializeField] TMP_Text nameText;
    [SerializeField] TMP_Text rulesText;
    [SerializeField] TMP_Text kindText;
    [SerializeField] Image kindRibbon;
    [SerializeField] Color[] kindColours;      // one for each CardKind, in the enum's order
    [SerializeField] Color nameColour;
    [SerializeField] Color rareNameColour;
    [SerializeField] GameObject lockCover;     // a rare card not won yet

    bool isLocked;

    public Card Card { get; private set; }

    // The card was clicked.
    public event Action<Card> Clicked;

    public void Show(Card card)
    {
        Card = card;
        frame.sprite = card.IsRare ? rareCardFront : cardFront;
        art.sprite = card.Art;
        costText.text = card.Cost.ToString();
        nameText.text = card.DisplayName;
        nameText.color = card.IsRare ? rareNameColour : nameColour;
        rulesText.text = card.Describe();
        kindText.text = card.Kind.ToString();
        kindRibbon.color = kindColours[(int)card.Kind];
    }

    public void SetLocked(bool locked)
    {
        isLocked = locked;
        lockCover.SetActive(locked);
    }

    public void OnPointerClick(PointerEventData eventData)
    {
        if (!isLocked)
        {
            Clicked?.Invoke(Card);
        }
    }

    // In a scrolling grid a drag scrolls: hand it to the Scroll Rect.
    public void OnBeginDrag(PointerEventData eventData)
    {
        ScrollRect scroll = GetComponentInParent<ScrollRect>();
        eventData.pointerDrag = scroll == null ? null : scroll.gameObject;
        if (scroll != null)
        {
            scroll.OnBeginDrag(eventData);
        }
    }

    // Unity starts a drag only on something that can be dragged, so the tile says
    // it can; the Scroll Rect then gets the rest of the drag.
    public void OnDrag(PointerEventData eventData)
    {
    }
}
```

`eventData.pointerDrag = scroll.gameObject` tells the EventSystem *this drag belongs to the
Scroll Rect now*: the rest of the drag goes to it. Without it, the tile would swallow the
drag, and the grid would never scroll under a finger. And the empty `OnDrag`? Unity starts
a drag only on something that can be dragged, an `IDragHandler` (C# 7): no
`OnDrag`, and `OnBeginDrag` would never be called.

4. In the `Card Tile` prefab, drag `Lock` into **Lock Cover**. Save.

### Do it — a line of the deck list

5. In `Scripts/Flow`, `DeckRow`:

```csharp:DeckRow.cs
using System;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

// One line of the deck list: a card's cost, art and name, and how many copies.
// Clicking it says so; the Deck Builder decides what that means.
public class DeckRow : MonoBehaviour
{
    [SerializeField] Button button;
    [SerializeField] Image art;
    [SerializeField] TMP_Text costText;
    [SerializeField] TMP_Text nameText;
    [SerializeField] TMP_Text countText;

    Card card;

    public event Action<Card> Clicked;

    void OnEnable()
    {
        button.onClick.AddListener(OnClicked);
    }

    void OnDisable()
    {
        button.onClick.RemoveListener(OnClicked);
    }

    public void Show(Card card, int count)
    {
        this.card = card;
        art.sprite = card.Art;
        costText.text = card.Cost.ToString();
        nameText.text = card.DisplayName;
        countText.text = $"x{count}";
    }

    void OnClicked()
    {
        Clicked?.Invoke(card);
    }
}
```

6. The `Deck Row` prefab: an **Image** 560 × 64, `Panel` sliced, `#2A1830` at alpha 242,
   with a **Button**. Inside: an **Image** `Cost Gem` at the left (anchor
   **middle-left**, **Pos** (34, 0), 50 × 50, `Gem`), with a child **Text - TextMeshPro**
   `Cost` (50 × 50, **Pos Y** 1, `Cinzel-Bold SDF` 28, white, centred); `Art`, 50 × 50 at (70, 0) anchored middle-left with its
   pivot at its left; `Name`, `CinzelDecorative-Bold SDF` 22, `#F3DDB6`, left and middle,
   at (136, 0), 320 × 44; and `Count`, `Cinzel-Bold SDF` 26, gold, right-aligned, anchored
   **middle-right** at (−18, 0), 80 × 44. Add `DeckRow`, fill it in, make it a prefab.

### Do it — the Deck Builder

7. In `Scripts/Flow`, `DeckBuilder`. For now, **Save** keeps the deck in `DuelSetup`,
   for this run only; Chapter 14 writes it to a file.

```csharp
using System.Collections.Generic;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

// The Deck Builder scene: every card on the left, your deck on the right. Click
// a card to add a copy; click a row to take one out. The deck is a Dictionary
// from each card to how many copies of it you have.
public class DeckBuilder : MonoBehaviour
{
    [SerializeField] CardLibrary library;
    [SerializeField] CardTile tilePrefab;
    [SerializeField] Transform collectionGrid;
    [SerializeField] DeckRow rowPrefab;
    [SerializeField] Transform deckList;
    [SerializeField] TMP_Text countText;
    [SerializeField] TMP_Text messageText;
    [SerializeField] Button saveButton;
    [SerializeField] Button allTab;
    [SerializeField] Button attackTab;
    [SerializeField] Button healTab;
    [SerializeField] Button shieldTab;
    [SerializeField] Button familiarTab;

    readonly Dictionary<Card, int> counts = new Dictionary<Card, int>();
    readonly List<CardTile> tiles = new List<CardTile>();   // made once, then shown or hidden
    readonly List<DeckRow> rows = new List<DeckRow>();      // reused as the deck changes

    void OnEnable()
    {
        allTab.onClick.AddListener(ShowAll);
        attackTab.onClick.AddListener(() => ShowOnly(CardKind.Attack));
        healTab.onClick.AddListener(() => ShowOnly(CardKind.Heal));
        shieldTab.onClick.AddListener(() => ShowOnly(CardKind.Shield));
        familiarTab.onClick.AddListener(() => ShowOnly(CardKind.Familiar));
    }

    void OnDisable()
    {
        // A lambda can't be named to remove it again, so take every listener off.
        allTab.onClick.RemoveAllListeners();
        attackTab.onClick.RemoveAllListeners();
        healTab.onClick.RemoveAllListeners();
        shieldTab.onClick.RemoveAllListeners();
        familiarTab.onClick.RemoveAllListeners();
    }

    void Start()
    {
        MakeCardTiles();
        if (DuelSetup.Deck != null)
        {
            UseDeck(DuelSetup.Deck);
        }
        else
        {
            UseDeck(library.StarterDeck);
        }
        messageText.text = "";
    }

    // The Save button: for now the deck is kept for this run only, in DuelSetup.
    public void SaveDeck()
    {
        List<Card> deck = new List<Card>();
        foreach (KeyValuePair<Card, int> pair in counts)
        {
            for (int i = 0; i < pair.Value; i++)
            {
                deck.Add(pair.Key);
            }
        }
        DuelSetup.Deck = deck;
        messageText.text = "Deck kept for this run.";
    }

    // The Starter Deck button.
    public void UseStarterDeck()
    {
        UseDeck(library.StarterDeck);
        messageText.text = "The starter deck. Save it to keep it.";
    }

    void MakeCardTiles()
    {
        foreach (Card card in library.Cards)
        {
            CardTile tile = Instantiate(tilePrefab, collectionGrid);
            tile.Show(card);
            tile.Clicked += AddCopy;
            tiles.Add(tile);
        }
    }

    void ShowAll()
    {
        foreach (CardTile tile in tiles)
        {
            tile.gameObject.SetActive(true);
        }
    }

    // The Attack tab shows drain cards too: they're attacks that heal.
    void ShowOnly(CardKind kind)
    {
        foreach (CardTile tile in tiles)
        {
            CardKind cardKind = tile.Card.Kind;
            bool shown = cardKind == kind || (kind == CardKind.Attack && cardKind == CardKind.Drain);
            tile.gameObject.SetActive(shown);
        }
    }

    void UseDeck(IReadOnlyList<Card> deck)
    {
        counts.Clear();
        foreach (Card card in deck)
        {
            counts.TryGetValue(card, out int count);
            counts[card] = count + 1;
        }
        RefreshDeckList();
    }

    void AddCopy(Card card)
    {
        if (CountCards() >= CardLibrary.DeckSize)
        {
            messageText.text = $"A deck holds {CardLibrary.DeckSize} cards: take one out first.";
            return;
        }
        counts.TryGetValue(card, out int count);
        if (count >= CardLibrary.MaxCopies)
        {
            messageText.text = $"At most {CardLibrary.MaxCopies} of each card.";
            return;
        }
        counts[card] = count + 1;
        messageText.text = "";
        RefreshDeckList();
    }

    void RemoveCopy(Card card)
    {
        if (!counts.TryGetValue(card, out int count))
        {
            return;
        }
        if (count == 1)
        {
            counts.Remove(card);
        }
        else
        {
            counts[card] = count - 1;
        }
        messageText.text = "";
        RefreshDeckList();
    }

    int CountCards()
    {
        int total = 0;
        foreach (int count in counts.Values)
        {
            total += count;
        }
        return total;
    }

    // A Dictionary has no order, so the cards are copied into a List and sorted:
    // by cost, then by name.
    void RefreshDeckList()
    {
        List<Card> cards = new List<Card>(counts.Keys);
        cards.Sort(CompareByCost);

        for (int i = 0; i < cards.Count; i++)
        {
            if (i == rows.Count)
            {
                DeckRow row = Instantiate(rowPrefab, deckList);
                row.Clicked += RemoveCopy;
                rows.Add(row);
            }
            rows[i].gameObject.SetActive(true);
            rows[i].Show(cards[i], counts[cards[i]]);
        }
        for (int i = cards.Count; i < rows.Count; i++)
        {
            rows[i].gameObject.SetActive(false);
        }

        int total = CountCards();
        countText.text = $"{total} / {CardLibrary.DeckSize}";
        saveButton.interactable = total == CardLibrary.DeckSize;
    }

    // Passed to List.Sort, which calls it to compare two cards: below 0 puts a first.
    static int CompareByCost(Card a, Card b)
    {
        if (a.Cost != b.Cost)
        {
            return a.Cost.CompareTo(b.Cost);
        }
        return string.Compare(a.DisplayName, b.DisplayName);
    }
}
```

Three things to see:

- **The tiles are made once**, in `MakeCardTiles`, and the tabs only show and hide them.
  Making and destroying 21 cards at every tab would work, and cost time and garbage
  (Chapter 17 measures that).
- **The rows are reused** the same way: `RefreshDeckList` makes a row only when it has
  more cards than rows, and hides rows it doesn't need.
- `cards.Sort(CompareByCost)` passes a **method** to `Sort`: `Sort` calls it each time it
  needs to know which of two cards comes first. A method passed as a value is a
  **delegate** (C# 8). Its answer: below 0, `a` comes first; above 0, `b` does.

The tab listeners are lambdas, so `OnDisable` can't remove them one by one (a lambda has
no name to remove): `RemoveAllListeners` removes them all. It only removes listeners added
in code; the ones wired in the Inspector stay.

### Do it — the scene

8. **File → New Scene**, **Basic 2D (URP)**, saved as `Assets/Scenes/Deck Builder`. A
   camera, an overlay canvas (as the Menu's), the `Dungeon` arena with its `Dim` and
   fades, the `Scene Fader` prefab, and a title, *Deck Builder*
   (`CinzelDecorative-Black SDF` 56, top-left at (44, −24)).
9. **The tabs:** five `Game Button`s, 206 × 64, label size 28, anchored **top-left**, in a
   row at **Pos Y** −108 and **Pos X** 44, 266, 488, 710 and 932: `All`, `Attack`, `Heal`,
   `Shield` and `Familiar`. Name them `All Tab`, `Attack Tab` and so on.
10. **The collection:** **GameObject → UI (Canvas) → Scroll View**, called `Collection`. Delete its
    two scrollbars (the mouse wheel and a finger scroll it). Its Rect Transform: **Anchor
    Min** (0, 0), **Anchor Max** (0, 1), **Pivot** (0, 1), so it stretches from top to
    bottom but not sideways; then **Pos X** 30, **Width** 1180, **Top** 186, **Bottom** 24. On its **Scroll Rect**: untick **Horizontal**, **Movement Type** **Clamped**,
    **Scroll Sensitivity** 40. Its `Viewport` has a **Mask**: remove it and add a **Rect
    Mask 2D** (it clips without a picture, and costs less); set the Viewport's Image to
    black at alpha 64.
11. Select `Viewport/Content`: anchors **top–stretch**, **Pivot** (0.5, 1). Add a **Grid
    Layout Group**: **Cell Size** 250 × 333, **Spacing** 30 × 28, **Padding** 28 on the
    left and right and 26 on the top and bottom, **Constraint** **Fixed Column Count** 4.
    Add a **Content Size Fitter**: **Vertical Fit** **Preferred Size**.
12. **The deck panel:** an **Image** `Deck Panel`, anchored **top-right** with its pivot
    there too, **Pos** (−30, −24), 650 × 1032, like a duelist panel (`Panel`, `#1C1020` at
    alpha 230, an `Edge`). In it: *Your deck* (`CinzelDecorative-Black SDF` 46, top-left
    (34, −20)); `Count`, *20 / 20* (`Cinzel-Bold SDF` 40, gold, right-aligned, top-right
    (−34, −20)); a second **Scroll View**, `Deck List`, 590 × 700 at top-center (0, −100),
    scrollbars deleted, **Horizontal** off, a **Rect Mask 2D** for its Viewport, and on its
    `Content` (top-center, pivot (0.5, 1), width 590) a **Vertical Layout Group**
    (**Spacing** 8, **Padding** 15 left and right, 6 top and bottom, **Upper Center**, all
    four boxes unticked) and a **Content Size Fitter** (**Vertical Fit** **Preferred
    Size**); `Message`, `Cinzel-Regular SDF` 24, centred, bottom-center (0, 116), 590 × 60;
    and three `Game Button`s along the bottom: `Save` (bottom-left, (26, 26), 170 × 76),
    `Starter Deck` (bottom-center, (0, 26), 240 × 76, label 26) and `Back`
    (bottom-right, (−26, 26), 170 × 76).
13. An empty `Deck Builder` object with `DeckBuilder`: the library, the `Card Tile` prefab
    as **Tile Prefab**, `Collection/Viewport/Content` as **Collection Grid**, the `Deck Row`
    prefab, `Deck List/Viewport/Content` as **Deck List**, `Count`, `Message`, `Save` as
    **Save Button**, and the five tabs.
14. **On Click ()**: `Save` → **DeckBuilder → SaveDeck**; `Starter Deck` →
    **DeckBuilder → UseStarterDeck**; `Back` → **SceneFader → FadeTo** `Menu`. And in the
    **Menu** scene, `Deck` → **SceneFader → FadeTo** `Deck Builder`.
15. **File → Build Profiles**: add `Deck Builder` to the Scene List, second.

### Test it

- From the Menu, **Deck**. Every card in a grid; scroll it with the wheel, or by dragging.
  The deck on the right, sorted by cost, says *20 / 20*.
- Click **Blessing**: *A deck holds 20 cards: take one out first.* Click the **Buckler**
  line: *x1*, and *19 / 20*, and **Save** greys out. Click **Quick Strike**: *At most 2
  of each card.* Click **Blessing**: it joins the list, in cost order, and **Save** works
  again.
- The tabs: **Attack** shows six attacks *and* two drains: a drain is an attack, here too.
- **Save**, **Back**, **Duel**: draw your first cards: the Blessing is in your deck. Stop
  Play, and Play again from the Menu: the starter deck is back. `DuelSetup` is static, and
  static lasts only as long as the game runs (here, with domain reload off, until you
  change a script). That's Chapter 14's job.

### Commit

*Add the Deck Builder.*

### Challenge

Add a sixth tab, `Cheap`, that shows only cards costing 2 or less. Which method do you
call from its listener? (You'll need a new one: `ShowOnly` takes a kind.)

## Chapter 14 — Save and Load

**Goal:** a **save file**, `arcane-duel.json`, that keeps your deck, your wins and losses,
the opponents you've beaten and the rare cards you've won, and survives being damaged.
Opponents open one at a time, and a win gives you their rare card. **Settings** in
PlayerPrefs: music and sound volume, and Fast opponent. And music.

### Idea — three places to keep things

C# 13 put it in a table; this game uses all three:

| What | Where | Why there |
| --- | --- | --- |
| the opponent and deck for *this* duel, the duel's result | `DuelSetup` (static) | only for this run; gone when the game closes, and that's right |
| volume, Fast opponent, your keys | PlayerPrefs, through `GameSettings` | small settings, one value each |
| your deck, wins, losses, beaten opponents, rare cards won | `arcane-duel.json`, through `SaveSystem` | game data: a structure, and lists |

### Idea — the save holds ids, not cards

`JsonUtility` writes an object's public fields as text. It can write numbers, strings and
lists of them; it **can't** write a `Card`: a card is an asset, not text. So the save keeps
each card's **id**, and the Card Library's Dictionary turns ids back into cards. That's why
every card has an id that never changes:

```json
{
    "version": 1,
    "deck": ["buckler", "buckler", "quick-strike", "quick-strike", "..."],
    "unlockedCards": ["frost-bolt"],
    "beatenOpponents": ["mira"],
    "wins": 3,
    "losses": 1
}
```

**`version`** is there for the day the save changes shape: a later game can tell an old
file from a new one.

### Idea — a file can be damaged

A save file lives on the player's computer. It can be missing (the first run), cut short
(the computer crashed while writing), or edited by hand. None of that may stop the game.
`SaveSystem` reads inside `try` / `catch` (C# 12): a missing file is a new
save; a damaged one is **logged as an error**, kept as `arcane-duel.bad.json` for you to
look at, and replaced by a new save.

### Do it — the save

1. In `Scripts/Flow`, `SaveData`:

```csharp:SaveData.cs
using System.Collections.Generic;

// Everything the game keeps between sessions, as JsonUtility writes it. Only
// simple things go in: numbers, strings, and lists of them. A Card can't go in a
// save file, so the deck is kept as card ids. The fields are public, which the
// style guide allows here only: JsonUtility saves public fields.
[System.Serializable]
public class SaveData
{
    public const int CurrentVersion = 1;

    public int version = CurrentVersion;
    public List<string> deck = new List<string>();
    public List<string> unlockedCards = new List<string>();
    public List<string> beatenOpponents = new List<string>();
    public int wins;
    public int losses;

    // A win: the opponent counts as beaten, and their rare card is yours.
    // True only the first time the card is won.
    public bool RecordWin(string opponentId, string rareCardId)
    {
        wins++;
        if (!beatenOpponents.Contains(opponentId))
        {
            beatenOpponents.Add(opponentId);
        }
        if (rareCardId == "" || unlockedCards.Contains(rareCardId))
        {
            return false;
        }
        unlockedCards.Add(rareCardId);
        return true;
    }

    public void RecordLoss()
    {
        losses++;
    }
}
```

The style guide allows public fields here, and only here: `JsonUtility` saves public
fields. `RecordWin` returns `true` only the first time a rare card is won: the Results
screen shows the card only then.

2. `SaveSystem`, a static class:

```csharp:SaveSystem.cs
using System;
using System.IO;
using UnityEngine;

// Reads and writes the save file, arcane-duel.json, in the folder Unity keeps for
// each game's files (Application.persistentDataPath). A file can be missing or
// damaged, so reading and writing are wrapped in try / catch: a bad save file
// must never stop the game.
public static class SaveSystem
{
    const string FileName = "arcane-duel.json";
    const string DamagedFileName = "arcane-duel.bad.json";

    static string FilePath { get { return Path.Combine(Application.persistentDataPath, FileName); } }

    public static SaveData Load()
    {
        if (!File.Exists(FilePath))
        {
            return new SaveData();      // the first run: nothing saved yet
        }
        try
        {
            string json = File.ReadAllText(FilePath);
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
            // JsonUtility couldn't read it: keep the damaged file to look at, and start again.
            Debug.LogError($"The save file is damaged, so the game starts a new one. The old file is kept as {DamagedFileName}.\n{exception.Message}");
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

    public static void Delete()
    {
        try
        {
            File.Delete(FilePath);
        }
        catch (IOException exception)
        {
            Debug.LogError($"The save file couldn't be deleted: {exception.Message}");
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

- `Path.Combine` joins a folder and a file name with the right separator for each
  computer (`/` or `\`).
- Two `catch` blocks, each for one kind of failure, and each logs what happened:
  `ArgumentException` is what `JsonUtility.FromJson` throws for text that isn't valid
  JSON; `IOException` for a file that can't be read or written. Anything else is a bug,
  and should stop the game where you can see it.
- `File.Exists` before reading: a missing file isn't an exception, it's a first run.

3. The library turns a list of ids into a deck. The finished `CardLibrary`:

```csharp:CardLibrary.cs
using System.Collections.Generic;
using UnityEngine;

// Every card in the game, the starter deck, and the deck rules. The save file
// keeps a deck as card ids, so the library turns ids back into cards, through
// a Dictionary: one lookup, however many cards there are.
[CreateAssetMenu(fileName = "Card Library", menuName = "Arcane Duel/Card Library")]
public class CardLibrary : ScriptableObject
{
    public const int DeckSize = 20;
    public const int MaxCopies = 2;

    [SerializeField] Card[] cards;
    [SerializeField] Card[] starterDeck;

    Dictionary<string, Card> cardsById;

    public IReadOnlyList<Card> Cards { get { return cards; } }
    public IReadOnlyList<Card> StarterDeck { get { return starterDeck; } }

    public bool TryGetCard(string id, out Card card)
    {
        if (cardsById == null)
        {
            BuildLookup();
        }
        return cardsById.TryGetValue(id, out card);
    }

    // The cards these ids name. An id the library doesn't know is skipped, with
    // a warning; a deck that isn't the right size afterwards gives way to the
    // starter deck. A first run, with no deck saved yet, gets the starter deck.
    public List<Card> DeckFromIds(List<string> ids)
    {
        List<Card> deck = new List<Card>();
        foreach (string id in ids)
        {
            if (TryGetCard(id, out Card card))
            {
                deck.Add(card);
            }
            else
            {
                Debug.LogWarning($"The saved deck has a card '{id}' that isn't in the Card Library: skipped.", this);
            }
        }

        if (deck.Count != DeckSize)
        {
            if (ids.Count > 0)
            {
                Debug.LogWarning($"The saved deck has {deck.Count} cards, not {DeckSize}: using the starter deck.", this);
            }
            return new List<Card>(starterDeck);
        }
        return deck;
    }

    void BuildLookup()
    {
        cardsById = new Dictionary<string, Card>();
        foreach (Card card in cards)
        {
            if (cardsById.ContainsKey(card.Id))
            {
                Debug.LogError($"Two cards have the id '{card.Id}': {cardsById[card.Id].name} and {card.name}. Give each its own.", this);
                continue;
            }
            cardsById.Add(card.Id, card);
        }
    }

    // A change in the Inspector rebuilds the lookup on its next use.
    void OnValidate()
    {
        cardsById = null;
    }
}
```

An id the library doesn't know is skipped with a **warning**; a deck that isn't 20 cards
afterwards gives way to the starter deck, with another. A first run has no ids at all, so
it gets the starter deck quietly.

### Do it — saving the deck, and the duels

<!-- check: together -->

4. The finished `DeckBuilder` loads and saves the deck through `SaveSystem`, and locks
   the rare cards you haven't won:

```csharp:DeckBuilder.cs
using System.Collections.Generic;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

// The Deck Builder scene: every card on the left, your deck on the right. Click
// a card to add a copy; click a row to take one out. The deck is a Dictionary
// from each card to how many copies of it you have.
public class DeckBuilder : MonoBehaviour
{
    [SerializeField] CardLibrary library;
    [SerializeField] CardTile tilePrefab;
    [SerializeField] Transform collectionGrid;
    [SerializeField] DeckRow rowPrefab;
    [SerializeField] Transform deckList;
    [SerializeField] TMP_Text countText;
    [SerializeField] TMP_Text messageText;
    [SerializeField] Button saveButton;
    [SerializeField] Button allTab;
    [SerializeField] Button attackTab;
    [SerializeField] Button healTab;
    [SerializeField] Button shieldTab;
    [SerializeField] Button familiarTab;

    readonly Dictionary<Card, int> counts = new Dictionary<Card, int>();
    readonly List<CardTile> tiles = new List<CardTile>();   // made once, then shown or hidden
    readonly List<DeckRow> rows = new List<DeckRow>();      // reused as the deck changes
    SaveData save;

    void OnEnable()
    {
        allTab.onClick.AddListener(ShowAll);
        attackTab.onClick.AddListener(() => ShowOnly(CardKind.Attack));
        healTab.onClick.AddListener(() => ShowOnly(CardKind.Heal));
        shieldTab.onClick.AddListener(() => ShowOnly(CardKind.Shield));
        familiarTab.onClick.AddListener(() => ShowOnly(CardKind.Familiar));
    }

    void OnDisable()
    {
        // A lambda can't be named to remove it again, so take every listener off.
        allTab.onClick.RemoveAllListeners();
        attackTab.onClick.RemoveAllListeners();
        healTab.onClick.RemoveAllListeners();
        shieldTab.onClick.RemoveAllListeners();
        familiarTab.onClick.RemoveAllListeners();
    }

    void Start()
    {
        save = SaveSystem.Load();
        MakeCardTiles();
        UseDeck(library.DeckFromIds(save.deck));
        messageText.text = "";
    }

    // The Save button.
    public void SaveDeck()
    {
        save.deck.Clear();
        foreach (KeyValuePair<Card, int> pair in counts)
        {
            for (int i = 0; i < pair.Value; i++)
            {
                save.deck.Add(pair.Key.Id);
            }
        }
        SaveSystem.Save(save);
        messageText.text = "Deck saved.";
    }

    // The Starter Deck button.
    public void UseStarterDeck()
    {
        UseDeck(library.StarterDeck);
        messageText.text = "The starter deck. Save it to keep it.";
    }

    void MakeCardTiles()
    {
        foreach (Card card in library.Cards)
        {
            CardTile tile = Instantiate(tilePrefab, collectionGrid);
            tile.Show(card);
            tile.SetLocked(card.IsRare && !save.unlockedCards.Contains(card.Id));
            tile.Clicked += AddCopy;
            tiles.Add(tile);
        }
    }

    void ShowAll()
    {
        foreach (CardTile tile in tiles)
        {
            tile.gameObject.SetActive(true);
        }
    }

    // The Attack tab shows drain cards too: they're attacks that heal.
    void ShowOnly(CardKind kind)
    {
        foreach (CardTile tile in tiles)
        {
            CardKind cardKind = tile.Card.Kind;
            bool shown = cardKind == kind || (kind == CardKind.Attack && cardKind == CardKind.Drain);
            tile.gameObject.SetActive(shown);
        }
    }

    void UseDeck(IReadOnlyList<Card> deck)
    {
        counts.Clear();
        foreach (Card card in deck)
        {
            counts.TryGetValue(card, out int count);
            counts[card] = count + 1;
        }
        RefreshDeckList();
    }

    void AddCopy(Card card)
    {
        if (CountCards() >= CardLibrary.DeckSize)
        {
            messageText.text = $"A deck holds {CardLibrary.DeckSize} cards: take one out first.";
            return;
        }
        counts.TryGetValue(card, out int count);
        if (count >= CardLibrary.MaxCopies)
        {
            messageText.text = $"At most {CardLibrary.MaxCopies} of each card.";
            return;
        }
        counts[card] = count + 1;
        messageText.text = "";
        RefreshDeckList();
    }

    void RemoveCopy(Card card)
    {
        if (!counts.TryGetValue(card, out int count))
        {
            return;
        }
        if (count == 1)
        {
            counts.Remove(card);
        }
        else
        {
            counts[card] = count - 1;
        }
        messageText.text = "";
        RefreshDeckList();
    }

    int CountCards()
    {
        int total = 0;
        foreach (int count in counts.Values)
        {
            total += count;
        }
        return total;
    }

    // A Dictionary has no order, so the cards are copied into a List and sorted:
    // by cost, then by name.
    void RefreshDeckList()
    {
        List<Card> cards = new List<Card>(counts.Keys);
        cards.Sort(CompareByCost);

        for (int i = 0; i < cards.Count; i++)
        {
            if (i == rows.Count)
            {
                DeckRow row = Instantiate(rowPrefab, deckList);
                row.Clicked += RemoveCopy;
                rows.Add(row);
            }
            rows[i].gameObject.SetActive(true);
            rows[i].Show(cards[i], counts[cards[i]]);
        }
        for (int i = cards.Count; i < rows.Count; i++)
        {
            rows[i].gameObject.SetActive(false);
        }

        int total = CountCards();
        countText.text = $"{total} / {CardLibrary.DeckSize}";
        saveButton.interactable = total == CardLibrary.DeckSize;
    }

    // Passed to List.Sort, which calls it to compare two cards: below 0 puts a first.
    static int CompareByCost(Card a, Card b)
    {
        if (a.Cost != b.Cost)
        {
            return a.Cost.CompareTo(b.Cost);
        }
        return string.Compare(a.DisplayName, b.DisplayName);
    }
}
```

5. `OpponentButton` shows *Beaten* or *Locked*. Add a **Canvas Group** to the `Opponent
   Button` prefab, for the locked look:

```csharp:OpponentButton.cs
using TMPro;
using UnityEngine;
using UnityEngine.UI;

// One opponent on the Menu's opponent select: their portrait in their arena,
// their name, how hard they are, their rare card, and whether they're beaten or
// still locked.
public class OpponentButton : MonoBehaviour
{
    const float LockedAlpha = 0.45f;
    static readonly string[] DifficultyNames = { "Easy", "Medium", "Hard" };

    [SerializeField] Button button;
    [SerializeField] Image portrait;
    [SerializeField] Image arena;
    [SerializeField] TMP_Text nameText;
    [SerializeField] TMP_Text arenaText;
    [SerializeField] TMP_Text difficultyText;
    [SerializeField] TMP_Text stateText;
    [SerializeField] CardTile rareCard;
    [SerializeField] CanvasGroup canvasGroup;

    public Button Button { get { return button; } }

    public void Show(OpponentProfile profile, bool isBeaten, bool isLocked)
    {
        portrait.sprite = profile.Portrait;
        arena.sprite = profile.Arena;
        nameText.text = profile.DisplayName;
        arenaText.text = profile.ArenaName;
        difficultyText.text = DifficultyNames[profile.Difficulty - 1];
        rareCard.Show(profile.RareCard);

        if (isLocked)
        {
            stateText.text = "Locked: beat the one before";
        }
        else if (isBeaten)
        {
            stateText.text = "Beaten";
        }
        else
        {
            stateText.text = "Wins you this card:";
        }
        button.interactable = !isLocked;
        canvasGroup.alpha = isLocked ? LockedAlpha : 1f;
    }
}
```

6. The finished `MainMenu`: the record, and each opponent locked until the one before
   is beaten.

```csharp:MainMenu.cs
using TMPro;
using UnityEngine;
using UnityEngine.UI;

// The Menu scene. Duel opens the opponent select, made in code from the four
// opponent profiles: each opponent's button gets its own listener, a lambda that
// remembers which opponent it belongs to.
public class MainMenu : MonoBehaviour
{
    [SerializeField] SceneFader fader;
    [SerializeField] CardLibrary library;
    [SerializeField] OpponentProfile[] opponents;
    [SerializeField] OpponentButton opponentButtonPrefab;
    [SerializeField] Transform opponentList;
    [SerializeField] GameObject opponentPanel;
    [SerializeField] GameObject quitButton;
    [SerializeField] TMP_Text recordText;

    void Start()
    {
        // A web page can't quit, so the Quit button only shows in a PC build or the Editor.
        quitButton.SetActive(Application.platform != RuntimePlatform.WebGLPlayer);
        opponentPanel.SetActive(false);
        SaveData save = SaveSystem.Load();
        recordText.text = $"Wins {save.wins}   ·   Losses {save.losses}";
    }

    // The Duel button: the save may have changed since the scene began, so the
    // buttons are made again each time.
    public void ShowOpponents()
    {
        foreach (Transform old in opponentList)
        {
            Destroy(old.gameObject);
        }

        SaveData save = SaveSystem.Load();
        bool previousBeaten = true;     // the first opponent is always open
        foreach (OpponentProfile profile in opponents)
        {
            OpponentButton button = Instantiate(opponentButtonPrefab, opponentList);
            bool isBeaten = save.beatenOpponents.Contains(profile.Id);
            button.Show(profile, isBeaten, !previousBeaten);
            button.Button.onClick.AddListener(() => Choose(profile, save));
            previousBeaten = isBeaten;
        }
        opponentPanel.SetActive(true);
    }

    public void Quit()
    {
        Application.Quit();
    }

    void Choose(OpponentProfile profile, SaveData save)
    {
        DuelSetup.Opponent = profile;
        DuelSetup.Deck = library.DeckFromIds(save.deck);
        fader.FadeTo("Battle");
    }
}
```

`previousBeaten` starts `true`, so Mira is always open; after that, each opponent is open
only if the one before was beaten. And `Choose` now takes the deck from the save.

<!-- check: end -->

7. In the Menu scene, add a **Text - TextMeshPro** `Record` at the bottom (anchor bottom-center,
   (0, 50), 800 × 40, `Cinzel-Regular SDF` 28, `#C3B3C6`): *Wins 0 · Losses 0*. Drag it
   into `MainMenu`'s **Record Text**.

### Do it — settings, and music

<!-- check: together -->

8. In `Scripts/Flow`, `GameSettings`:

```csharp
using UnityEngine;

// The player's settings, kept in PlayerPrefs: small values, one key each. The
// keys are constants, so a typo is a compile error, not a setting that quietly
// never loads.
public static class GameSettings
{
    const string MusicVolumeKey = "MusicVolume";
    const string SoundVolumeKey = "SoundVolume";
    const string FastOpponentKey = "FastOpponent";
    const float DefaultMusicVolume = 0.6f;
    const float DefaultSoundVolume = 1f;

    public static float MusicVolume
    {
        get { return PlayerPrefs.GetFloat(MusicVolumeKey, DefaultMusicVolume); }
        set { PlayerPrefs.SetFloat(MusicVolumeKey, value); }
    }

    public static float SoundVolume
    {
        get { return PlayerPrefs.GetFloat(SoundVolumeKey, DefaultSoundVolume); }
        set { PlayerPrefs.SetFloat(SoundVolumeKey, value); }
    }

    // PlayerPrefs has no bool, so it's an int: 1 for on, 0 for off.
    public static bool FastOpponent
    {
        get { return PlayerPrefs.GetInt(FastOpponentKey, 0) == 1; }
        set { PlayerPrefs.SetInt(FastOpponentKey, value ? 1 : 0); }
    }

    // Writes the settings to disk now, rather than when the game quits.
    public static void Save()
    {
        PlayerPrefs.Save();
    }
}
```

The keys are `const string`s: mistype `"MusicVolume"` once in a string and that setting
would quietly never load; mistype `MusicVolumeKey`, and it doesn't compile.

9. `DuelManager` records each duel in the save, and thinks faster with **Fast opponent**
   on:

```csharp
using System;
using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;
using UnityEngine.Events;

// The duel itself: whose turn it is, and when it's over. It's a state machine,
// as in Level 3. It raises C# events for other scripts, and UnityEvents for
// whatever a designer wires up in the Inspector. It talks to each side's
// controller through IDuelistController, so it can't tell a person from the
// computer.
public class DuelManager : MonoBehaviour
{
    enum State { Starting, PlayerTurn, OpponentTurn, Over }

    const float MessageTime = 2f;
    const float MessageFadeTime = 0.5f;

    [SerializeField] Duelist player;
    [SerializeField] Duelist opponent;
    [SerializeField] Sprite playerPortrait;
    [SerializeField] CardLibrary library;
    [SerializeField] OpponentProfile testOpponent;     // when the Battle scene is played on its own
    [SerializeField] SpriteRenderer arena;
    [SerializeField] TMP_Text messageText;
    [SerializeField] float normalThinkTime = 0.8f;
    [SerializeField] float fastThinkTime = 0.3f;
    [SerializeField] float endDelay = 1.5f;
    [SerializeField] UnityEvent onPlayerTurn;
    [SerializeField] UnityEvent onDuelOver;

    State state = State.Starting;
    IDuelistController playerController;
    IDuelistController opponentController;
    DuelResult result;
    Coroutine hideMessage;

    public OpponentProfile Opponent { get; private set; }

    // How long the computer thinks before each card.
    public float ThinkTime { get { return GameSettings.FastOpponent ? fastThinkTime : normalThinkTime; } }

    public event Action<Duelist> TurnStarted;
    public event Action<bool> DuelEnded;        // true when the player won

    void Awake()
    {
        // Unity can't show an interface in the Inspector, so we ask each side's
        // GameObject for whichever component is its controller.
        playerController = player.GetComponent<IDuelistController>();
        opponentController = opponent.GetComponent<IDuelistController>();
    }

    void OnEnable()
    {
        player.Died += OnPlayerDied;
        opponent.Died += OnOpponentDied;
        player.Announced += ShowMessage;
        opponent.Announced += ShowMessage;
        player.CardPlayed += OnPlayerCardPlayed;
        player.Damaged += OnPlayerDamaged;
        opponent.Damaged += OnOpponentDamaged;
    }

    void OnDisable()
    {
        player.Died -= OnPlayerDied;
        opponent.Died -= OnOpponentDied;
        player.Announced -= ShowMessage;
        opponent.Announced -= ShowMessage;
        player.CardPlayed -= OnPlayerCardPlayed;
        player.Damaged -= OnPlayerDamaged;
        opponent.Damaged -= OnOpponentDamaged;
    }

    void Start()
    {
        Opponent = DuelSetup.Opponent;
        if (Opponent == null)
        {
            Opponent = testOpponent;
            Debug.LogWarning("No opponent was chosen, so the Battle scene was played on its own: using the Test Opponent.", this);
        }
        IReadOnlyList<Card> deck = DuelSetup.Deck;
        if (deck == null)
        {
            deck = library.StarterDeck;
            Debug.LogWarning("No deck was chosen: using the starter deck.", this);
        }

        arena.sprite = Opponent.Arena;
        result = new DuelResult(Opponent);
        player.Foe = opponent;
        opponent.Foe = player;
        player.Begin("You", playerPortrait, deck);
        opponent.Begin(Opponent.DisplayName, Opponent.Portrait, Opponent.Deck);
        EnterState(State.PlayerTurn);
    }

    // The controller whose turn it is calls this when it's done.
    public void EndTurn(Duelist who)
    {
        if (state == State.PlayerTurn && who == player)
        {
            EnterState(State.OpponentTurn);
        }
        else if (state == State.OpponentTurn && who == opponent)
        {
            EnterState(State.PlayerTurn);
        }
    }

    // From the pause menu.
    public void GiveUp()
    {
        Finish(false);
    }

    public void ShowMessage(string text)
    {
        messageText.text = text;
        messageText.alpha = 1f;
        if (hideMessage != null)
        {
            StopCoroutine(hideMessage);
        }
        hideMessage = StartCoroutine(HideMessage());
    }

    void EnterState(State next)
    {
        state = next;
        switch (state)
        {
            case State.PlayerTurn:
                result.Turns++;
                StartTurn(player, opponent, playerController, "Your turn");
                if (state == State.PlayerTurn)
                {
                    onPlayerTurn.Invoke();
                }
                break;
            case State.OpponentTurn:
                StartTurn(opponent, player, opponentController, $"{opponent.DisplayName}'s turn");
                break;
            case State.Over:
                player.IsTakingTurn = false;
                opponent.IsTakingTurn = false;
                break;
        }
    }

    void StartTurn(Duelist who, Duelist foe, IDuelistController controller, string message)
    {
        foe.IsTakingTurn = false;
        ShowMessage(message);
        who.StartTurn();                // its familiars strike, and the foe may fall
        if (state == State.Over)
        {
            return;
        }
        who.IsTakingTurn = true;
        TurnStarted?.Invoke(who);
        controller.BeginTurn(who, foe, this);
    }

    void OnPlayerDied()
    {
        Finish(false);
    }

    void OnOpponentDied()
    {
        Finish(true);
    }

    void Finish(bool playerWon)
    {
        if (state == State.Over)
        {
            return;
        }
        EnterState(State.Over);
        result.Won = playerWon;
        RecordResult(playerWon);
        DuelSetup.Result = result;
        ShowMessage(playerWon ? "Victory!" : "Defeat");
        DuelEnded?.Invoke(playerWon);
        StartCoroutine(EndAfterDelay());
    }

    // Wins, losses, opponents beaten and rare cards won, in the save file.
    void RecordResult(bool playerWon)
    {
        SaveData save = SaveSystem.Load();
        if (playerWon)
        {
            string rareCardId = Opponent.RareCard == null ? "" : Opponent.RareCard.Id;
            if (save.RecordWin(Opponent.Id, rareCardId))
            {
                result.RareCardWon = Opponent.RareCard;
            }
        }
        else
        {
            save.RecordLoss();
        }
        SaveSystem.Save(save);
    }

    IEnumerator EndAfterDelay()
    {
        yield return new WaitForSecondsRealtime(endDelay);
        onDuelOver.Invoke();            // in the Inspector: the Scene Fader fades to Results
    }

    IEnumerator HideMessage()
    {
        yield return new WaitForSeconds(MessageTime);
        for (float t = 0f; t < MessageFadeTime; t += Time.deltaTime)
        {
            messageText.alpha = 1f - t / MessageFadeTime;
            yield return null;
        }
        messageText.alpha = 0f;
    }

    void OnPlayerCardPlayed(Card card)
    {
        result.CardsPlayed++;
    }

    void OnPlayerDamaged(int amount)
    {
        result.DamageTaken += amount;
    }

    void OnOpponentDamaged(int amount)
    {
        result.DamageDealt += amount;
        result.BiggestHit = Mathf.Max(result.BiggestHit, amount);
    }
}
```

`ThinkTime` reads the setting each time it's asked, so changing it in the pause menu
(Chapter 15) works at once.

10. `MusicPlayer`, for each scene's music:

```csharp:MusicPlayer.cs
using UnityEngine;

// Plays this scene's music, at the volume in the settings.
[RequireComponent(typeof(AudioSource))]
public class MusicPlayer : MonoBehaviour
{
    void Start()
    {
        AudioSource source = GetComponent<AudioSource>();
        source.volume = GameSettings.MusicVolume;
        source.loop = true;
        source.Play();
    }
}
```

`[RequireComponent(typeof(AudioSource))]` means Unity adds an Audio Source with it, and
won't let you remove it.

11. `SettingsPanel`:

```csharp
using UnityEngine;
using UnityEngine.UI;

// The Settings Panel, one prefab used in the Menu and in the pause menu: music
// and sound volume, Fast opponent, and Delete Save.
// Settings go into PlayerPrefs through GameSettings, and are written to disk
// when the panel closes.
public class SettingsPanel : MonoBehaviour
{
    [SerializeField] Slider musicSlider;
    [SerializeField] Slider soundSlider;
    [SerializeField] Toggle fastOpponentToggle;
    [SerializeField] AudioSource music;             // this scene's music
    [SerializeField] GameObject confirmDelete;

    void OnEnable()
    {
        musicSlider.SetValueWithoutNotify(GameSettings.MusicVolume);
        soundSlider.SetValueWithoutNotify(GameSettings.SoundVolume);
        fastOpponentToggle.SetIsOnWithoutNotify(GameSettings.FastOpponent);
        musicSlider.onValueChanged.AddListener(OnMusicChanged);
        soundSlider.onValueChanged.AddListener(OnSoundChanged);
        fastOpponentToggle.onValueChanged.AddListener(OnFastOpponentChanged);
        confirmDelete.SetActive(false);
    }

    void OnDisable()
    {
        musicSlider.onValueChanged.RemoveListener(OnMusicChanged);
        soundSlider.onValueChanged.RemoveListener(OnSoundChanged);
        fastOpponentToggle.onValueChanged.RemoveListener(OnFastOpponentChanged);
        GameSettings.Save();
    }

    // Delete Save asks first; the confirm panel's Delete button calls DeleteSave.
    public void AskToDeleteSave()
    {
        confirmDelete.SetActive(true);
    }

    public void DeleteSave()
    {
        SaveSystem.Delete();
        confirmDelete.SetActive(false);
    }

    void OnMusicChanged(float value)
    {
        GameSettings.MusicVolume = value;
        music.volume = value;
    }

    void OnSoundChanged(float value)
    {
        GameSettings.SoundVolume = value;
    }

    void OnFastOpponentChanged(bool isOn)
    {
        GameSettings.FastOpponent = isOn;
    }
}
```

<!-- check: end -->

`SetValueWithoutNotify` sets a slider without calling its listeners: the panel shows the
saved value without "changing" it. And the settings are written to disk once, when the
panel closes (`OnDisable`), not at every step of a slider.

### Do it — the Settings Panel prefab

12. On the Menu's canvas, an empty `Settings Panel`, stretch–stretch, with a `Dim` (black,
    alpha 153, **Raycast Target on**) and a `Window` (860 × 780, as the opponent select's).
    In the window:
    - *Settings*, `CinzelDecorative-Black SDF` 54, at the top.
    - Three rows, each a label on the left (`CinzelDecorative-Bold SDF` 30, left-aligned,
      pivot at its left, **Pos X** −380): *Music* at **Pos Y** 220, *Sounds* at 145 and
      *Fast opponent* at 70. Beside *Music* and *Sounds*, a **UI (Canvas) → Slider** at **Pos X**
      150, **Width** 300, **Scale** 1.5, **Min** 0, **Max** 1, its `Fill` `#6E74F0`.
      Beside *Fast opponent*, a **UI (Canvas) → Toggle** at (70, 70), **Scale** 1.8, with its
      `Label` deleted.
    - Two `Game Button`s, 320 × 70, label 26: `Reset Controls` at (−180, −185) (it waits
      for Chapter 15) and `Delete Save` at (180, −185); and `Close` at (0, −300), 260 × 76,
      label 30, whose **On Click ()** sets `Settings Panel` inactive.
    - `Confirm Delete`, stretch–stretch inside the window, with its own `Dim` (alpha 179,
      **Raycast Target on**) and a small `Window` (640 × 340): *Delete your deck and your
      progress? This can't be undone.* (`Cinzel-Regular SDF` 28), and two `Game Button`s:
      `Delete` → **SettingsPanel → DeleteSave**, and `Keep It` → `Confirm Delete`
      **SetActive** unticked. Untick `Confirm Delete`.
13. Add `SettingsPanel` to `Settings Panel`, fill in its fields, and wire `Delete Save` →
    **SettingsPanel → AskToDeleteSave**. Make it a prefab, and untick it in the scene.
    Wire the Menu's `Settings` button → `Settings Panel` **SetActive** ticked.
14. **Music:** in the Menu, an empty `Music` with `MusicPlayer` (it brings its Audio
    Source): **Audio Resource** `Menu`, **Play On Awake** off. The same in the Deck Builder
    scene, and in the Battle scene with `Duel`. Drag each scene's `Music` into its
    Settings Panel's **Music** (the Battle scene's Settings Panel comes in Chapter 15).

### Test it

- **The first run.** Play from the Menu: *Wins 0 · Losses 0*. **Duel**: Mira is open; the
  other three say *Locked: beat the one before*, faded, and don't respond.
- **Win against Mira** (with Fast opponent on, from **Settings**, it's quicker). The
  Results show *A new card for your deck!* with Frost Bolt. **Menu**: *Wins 1*, and
  Brother Aldric is open. In the Deck Builder, Frost Bolt isn't locked any more.
- **Stop, and Play again:** everything's still there. Change your deck, **Save**, stop,
  Play: your deck.
- **Where is it?** Add `Debug.Log(Application.persistentDataPath);` to `MainMenu`'s
  `Start` for a moment. On a Mac it's
  `~/Library/Application Support/DefaultCompany/Arcane Duel`; on Windows,
  `%USERPROFILE%\AppData\LocalLow\DefaultCompany\Arcane Duel`. Open `arcane-duel.json`
  in a text editor: it's the JSON above, with your numbers. Remove the line.
- **Damage it.** With the game stopped, delete the last few lines of the file, save it,
  and Play. The Console says:

```
The save file is damaged, so the game starts a new one. The old file is kept as arcane-duel.bad.json.
JSON parse error: Invalid value.
```

  The game plays on, from a new save; the bad file sits beside it. Without `try` /
  `catch`, an `ArgumentException` would have stopped the Menu's `Start` halfway, and the
  Menu would never have finished setting itself up.
- **Delete Save** in the settings, **Delete**: back to the first run.

### Commit

*Save the deck and progress as JSON, and the settings in PlayerPrefs.*

### Challenge

Make `SaveData` count wins **per opponent**. `JsonUtility` can't save a Dictionary, so
use two lists side by side (the opponents' ids, and their wins), or a list of a small
`[System.Serializable]` class with an id and a number. Show *Beaten 3 times* on the
opponent's button.

## C# 14 — The Input Actions Asset

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
or pick it from the field's list. `performed` is a C# event (C# 8), so subscribe
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
binding as one string for PlayerPrefs (C# 13); a card game's End Turn, set to K:

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

## Chapter 15 — Controls

**Goal:** an **Input Actions asset** with two action maps: **Battle** (End Turn and
Pause, on the keyboard and a gamepad) and **Paused** (Resume). A pause menu that stops
time and swaps the maps, so Space can't end your turn behind it. And keys you choose
yourself, kept in PlayerPrefs.

### Idea — actions, not keys

Until now, a script that wanted a key asked for the key: `Keyboard.current.spaceKey`. An
**action** turns that round (C# 14): the script asks for *End Turn*, and the
asset says which keys and buttons mean *End Turn*: Space, Enter, a gamepad's South button.
Add a binding, or let the player choose their own, and no script changes.

```
Arcane Duel Controls  (the asset)
├── Battle    (a map: on while you play)
│   ├── End Turn    Space · Enter · Gamepad South
│   └── Pause       Escape · P · Gamepad Start
└── Paused    (a map: on while the pause menu is open)
    └── Resume      Escape · P · Gamepad Start
```

Why two maps? Escape means *Pause* in a duel and *Resume* in the menu, and Space must do
nothing at all while you're paused. Only one map is **enabled** at a time: pausing
disables `Battle` and enables `Paused`; resuming swaps them back.

A script reaches an action through an **`InputActionReference`** field: drag the action
from the asset into the Inspector. The action's `performed` is a C# event
(C# 8): subscribe in `OnEnable`, unsubscribe in `OnDisable`.

### Do it — the asset

1. In `Assets/Input`, **Create → Input Actions**, called `Arcane Duel Controls`. Double-
   click it to open the Input Actions editor.
2. **Action Maps**: **+**, `Battle`. In it, the action `End Turn`, **Action Type**
   **Button**. Its first binding: select the `<No Binding>` under it, **Path** →
   **Listen**, press **Space**. Add two more bindings (**+** on the action → **Add
   Binding**): **Enter** (on the keyboard) and **Button South [Gamepad]**.
3. In `Battle`, the action `Pause`, **Button**: **Escape**, **P** and **Start [Gamepad]**.
4. A second map, `Paused`, with one action, `Resume`, **Button**: **Escape**, **P** and
   **Start [Gamepad]**.
5. **Save Asset**. The order of the bindings matters for later: each action's **first**
   binding is the one the player can change.

### Do it — the scripts

<!-- check: together -->

6. The finished `PlayerController`: End Turn by key as well as by button.

```csharp:PlayerController.cs
using UnityEngine;
using UnityEngine.InputSystem;
using UnityEngine.UI;

// The human player's controller. On your turn it lets the End Turn button and
// the End Turn key work; your cards check Duelist.IsTakingTurn themselves.
public class PlayerController : MonoBehaviour, IDuelistController
{
    [SerializeField] Button endTurnButton;
    [SerializeField] InputActionReference endTurnAction;

    Duelist me;
    DuelManager duel;
    bool isMyTurn;

    // Awake, not Start: every Awake runs before any Start, so this can't undo
    // the BeginTurn that DuelManager's Start calls.
    void Awake()
    {
        endTurnButton.interactable = false;
    }

    void OnEnable()
    {
        endTurnButton.onClick.AddListener(EndTurn);
        endTurnAction.action.performed += OnEndTurnPerformed;
    }

    void OnDisable()
    {
        endTurnButton.onClick.RemoveListener(EndTurn);
        endTurnAction.action.performed -= OnEndTurnPerformed;
    }

    public void BeginTurn(Duelist me, Duelist foe, DuelManager duel)
    {
        this.me = me;
        this.duel = duel;
        isMyTurn = true;
        endTurnButton.interactable = true;
    }

    void OnEndTurnPerformed(InputAction.CallbackContext context)
    {
        EndTurn();
    }

    void EndTurn()
    {
        if (!isMyTurn)
        {
            return;
        }
        isMyTurn = false;
        endTurnButton.interactable = false;
        duel.EndTurn(me);
    }
}
```

`OnEndTurnPerformed` has the shape the event expects, `(InputAction.CallbackContext
context)`, and calls the same `EndTurn` the button does.

7. The finished `GameSettings`: three methods for the keys. `SaveBindingOverridesAsJson`
   writes every binding the player has changed (only those) as one line of JSON, and
   PlayerPrefs keeps it as a string.

```csharp:GameSettings.cs
using UnityEngine;
using UnityEngine.InputSystem;

// The player's settings, kept in PlayerPrefs: small values, one key each. The
// keys are constants, so a typo is a compile error, not a setting that quietly
// never loads.
public static class GameSettings
{
    const string MusicVolumeKey = "MusicVolume";
    const string SoundVolumeKey = "SoundVolume";
    const string FastOpponentKey = "FastOpponent";
    const string BindingsKey = "Bindings";
    const float DefaultMusicVolume = 0.6f;
    const float DefaultSoundVolume = 1f;

    public static float MusicVolume
    {
        get { return PlayerPrefs.GetFloat(MusicVolumeKey, DefaultMusicVolume); }
        set { PlayerPrefs.SetFloat(MusicVolumeKey, value); }
    }

    public static float SoundVolume
    {
        get { return PlayerPrefs.GetFloat(SoundVolumeKey, DefaultSoundVolume); }
        set { PlayerPrefs.SetFloat(SoundVolumeKey, value); }
    }

    // PlayerPrefs has no bool, so it's an int: 1 for on, 0 for off.
    public static bool FastOpponent
    {
        get { return PlayerPrefs.GetInt(FastOpponentKey, 0) == 1; }
        set { PlayerPrefs.SetInt(FastOpponentKey, value ? 1 : 0); }
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

8. In `Scripts/UI`, `PauseMenu`:

```csharp:PauseMenu.cs
using UnityEngine;
using UnityEngine.InputSystem;

// Pauses the duel: it stops time, shows the panel, and swaps action maps, from
// Battle to Paused, so the End Turn key can't work behind the menu. The panel's
// buttons call Resume and GiveUp through their On Click () lists.
public class PauseMenu : MonoBehaviour
{
    [SerializeField] GameObject panel;
    [SerializeField] GameObject settingsPanel;
    [SerializeField] DuelManager duel;
    [SerializeField] InputActionReference pauseAction;     // in the Battle map
    [SerializeField] InputActionReference resumeAction;    // in the Paused map

    InputActionMap battleMap;
    InputActionMap pausedMap;

    void Awake()
    {
        battleMap = pauseAction.action.actionMap;
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
        battleMap.Disable();
        pausedMap.Disable();
    }

    void Start()
    {
        GameSettings.LoadBindings(pauseAction.asset);
        panel.SetActive(false);
        battleMap.Enable();
    }

    public void Pause()
    {
        Time.timeScale = 0f;
        panel.SetActive(true);
        battleMap.Disable();
        pausedMap.Enable();
    }

    public void Resume()
    {
        Time.timeScale = 1f;
        panel.SetActive(false);
        settingsPanel.SetActive(false);
        pausedMap.Disable();
        battleMap.Enable();
    }

    public void GiveUp()
    {
        Resume();
        duel.GiveUp();
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

`pauseAction.action.actionMap` is the map the action belongs to: `Battle`. The script
never names a map in a string. `OnDisable` switches both maps off: the asset is shared by
every scene, and leaving the Battle shouldn't leave its keys listening in the Menu.

9. In `Scripts/Flow`, `RebindButton`, one key you can change:

```csharp:RebindButton.cs
using TMPro;
using UnityEngine;
using UnityEngine.InputSystem;
using UnityEngine.UI;

// One row of the Settings Panel: an action's current key, and Change. Change
// waits for the next key pressed and makes it the action's new binding, then
// saves every changed key in PlayerPrefs.
public class RebindButton : MonoBehaviour
{
    [SerializeField] InputActionReference action;
    [SerializeField] int bindingIndex;          // which of the action's bindings: 0 is its first key
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

    // The key's own name, such as "K" or "Space". GetBindingDisplayString would
    // name it by the computer's keyboard layout, which can be a letter our font
    // doesn't have.
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
            .WithControlsExcluding("<Pointer>")
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

- `PerformInteractiveRebinding` waits for the player's next key, ignoring the pointer
  (`"<Pointer>"`: a click on **Change** isn't a key); Escape cancels it. An action has to
  be **disabled** while it's rebound.
- `OnComplete(operation => Finish(wasEnabled))` passes a **lambda** to be called later:
  it remembers `wasEnabled` from the moment the rebinding started.
- `Refresh` shows the key's own name, `K` or `Space`, from its path. There's a
  `GetBindingDisplayString` that seems simpler, but it names the key by the computer's
  **keyboard layout**: on an Arabic layout, K is shown as ن, which the Cinzel font
  doesn't have. A game is played on keyboards all over the world.

10. The finished `SettingsPanel`: the two rows, and **Reset Controls**.

```csharp:SettingsPanel.cs
using UnityEngine;
using UnityEngine.InputSystem;
using UnityEngine.UI;

// The Settings Panel, one prefab used in the Menu and in the pause menu: music
// and sound volume, Fast opponent, the two rebindable keys, and Delete Save.
// Settings go into PlayerPrefs through GameSettings, and are written to disk
// when the panel closes.
public class SettingsPanel : MonoBehaviour
{
    [SerializeField] Slider musicSlider;
    [SerializeField] Slider soundSlider;
    [SerializeField] Toggle fastOpponentToggle;
    [SerializeField] AudioSource music;             // this scene's music
    [SerializeField] InputActionAsset actions;
    [SerializeField] RebindButton[] rebindButtons;
    [SerializeField] GameObject confirmDelete;

    void OnEnable()
    {
        GameSettings.LoadBindings(actions);
        musicSlider.SetValueWithoutNotify(GameSettings.MusicVolume);
        soundSlider.SetValueWithoutNotify(GameSettings.SoundVolume);
        fastOpponentToggle.SetIsOnWithoutNotify(GameSettings.FastOpponent);
        musicSlider.onValueChanged.AddListener(OnMusicChanged);
        soundSlider.onValueChanged.AddListener(OnSoundChanged);
        fastOpponentToggle.onValueChanged.AddListener(OnFastOpponentChanged);
        confirmDelete.SetActive(false);
        RefreshKeys();
    }

    void OnDisable()
    {
        musicSlider.onValueChanged.RemoveListener(OnMusicChanged);
        soundSlider.onValueChanged.RemoveListener(OnSoundChanged);
        fastOpponentToggle.onValueChanged.RemoveListener(OnFastOpponentChanged);
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
        SaveSystem.Delete();
        confirmDelete.SetActive(false);
    }

    void OnMusicChanged(float value)
    {
        GameSettings.MusicVolume = value;
        music.volume = value;
    }

    void OnSoundChanged(float value)
    {
        GameSettings.SoundVolume = value;
    }

    void OnFastOpponentChanged(bool isOn)
    {
        GameSettings.FastOpponent = isOn;
    }

    void RefreshKeys()
    {
        foreach (RebindButton button in rebindButtons)
        {
            button.Refresh();
        }
    }
}
```

<!-- check: end -->

### Do it — in the scene

11. On the `Player Panel` in the Battle scene, drag **Battle/End Turn** from the asset
    (open it with the arrow beside it in the Project window) into `PlayerController`'s
    **End Turn Action**.
12. **The pause panel:** on the Battle's canvas, `Pause Panel`, stretch–stretch, with a
    `Dim` (black, alpha 153, **Raycast Target on**) and a `Window` (620 × 600): *Paused*
    (`CinzelDecorative-Black SDF` 60) at the top, and three `Game Button`s, 400 × 92, label
    40: `Resume` (0, 60), `Settings` (0, −50) and `Give Up` (0, −160).
13. An empty `Pause Menu` with `PauseMenu`: **Panel** the `Pause Panel`, **Duel** the
    `Duel Manager`, **Pause Action** `Battle/Pause`, **Resume Action** `Paused/Resume`.
14. Drag the `Settings Panel` prefab onto the Battle's canvas, untick it, give it the
    Battle's `Music`, and drag it into `PauseMenu`'s **Settings Panel**.
15. **On Click ()**: `Pause Button` → **PauseMenu → Pause**; `Resume` → **Resume**;
    `Settings` → `Settings Panel` **SetActive** ticked; `Give Up` → **GiveUp**.
16. **The key rows.** Open the `Settings Panel` prefab. Two more rows, like the others:
    a label (*End Turn key* at **Pos Y** −10, *Pause key* at −85); a **Text - TextMeshPro** for
    the key (`Cinzel-Bold SDF` 30, gold, centred, 200 × 50 at **Pos X** 70); and a `Game
    Button` `Change` (180 × 60, label 24, at **Pos X** 270). Name them `End Turn Key Key`,
    `End Turn Key Change`, and so on. Add `RebindButton` to each **Change** button:
    **Action** `Battle/End Turn` (or `Battle/Pause`), **Binding Index** 0, its key text,
    and the button itself.
17. Fill `SettingsPanel`'s new fields: **Actions**, the asset; **Rebind Buttons**, the two.
    And wire `Reset Controls` → **SettingsPanel → ResetControls**. Save the prefab.

### Test it

- **Play** the Battle. **Space** ends your turn (or **Enter**, or a gamepad's South).
- **Esc**: the pause menu, and everything stops: Mira stops thinking mid-turn. Press
  **Space**: nothing; the `Battle` map is off. **Esc** again: back to the duel.
- Pause → **Settings**: *End Turn key* says *Space*. **Change**, press **K**: it says *K*.
  Close, resume: **K** ends your turn, and Space doesn't.
- Stop and Play again: still K. PlayerPrefs kept it.
- **Reset Controls**: Space again.
- **Give Up**: *Defeat*, and the Results. Your losses count went up by one.

### Commit

*Add the Input Actions asset, the pause menu and rebinding.*

### Challenge

Add a third action to `Battle`, `Settings`, bound to **S**, that opens the settings during
a duel. Which script subscribes to it? Does it need to swap maps?

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

A `Stack` (C# 6) suits a pool: `Push` puts an object back, `Pop` takes the
last one put back, and which sleeping object you get doesn't matter. First the pooled
object: a number that rises and fades. When it's done, it doesn't destroy itself. It
raises an event (C# 8), and its pool takes it back:

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

**Goal:** the duel feels like something happens. Numbers rise off a hit portrait (*−6*,
*+4*, *+5 shield*), from a **pool**; sparks fly from a hit, motes rise from a heal, a ring
flashes round a shield, a puff greets a familiar. And sound: draws, plays, hits, heals,
your turn, victory and defeat.

### Idea — make a few, use them again and again

A popup lives for less than a second. Making one with `Instantiate` and throwing it away
with `Destroy` each time works, but every one costs the CPU work, and leaves garbage that
the **garbage collector** must clear up later, all at once: a stutter, the kind of thing
Chapter 17's Profiler finds (C# 15).

A **pool** makes popups only when it runs out, and keeps the ones that finish, switched
off, to use again. A `Stack` is the perfect home for them: `Push` one in when it's done,
`Pop` one out when it's needed.

```
Get():      a sleeping popup?  Pop it, switch it on.   None?  Instantiate one.
Release():  switch it off, Push it back.
```

### Do it — popups, pooled

<!-- check: together -->

1. In `Scripts/UI`, `Popup`. It names `PopupPool`, the next script, so the Console
   complains until you've saved both.

```csharp:Popup.cs
using System.Collections;
using TMPro;
using UnityEngine;

// A number that rises and fades: -5, +4. When it's done it doesn't destroy
// itself; it goes back to its pool, to be used again.
public class Popup : MonoBehaviour
{
    const float RiseDistance = 70f;
    const float Lifetime = 0.9f;

    [SerializeField] TMP_Text text;

    public void Play(PopupPool pool, string message, Color colour, Vector3 position)
    {
        text.text = message;
        text.color = colour;
        transform.position = position;
        StartCoroutine(Rise(pool));
    }

    IEnumerator Rise(PopupPool pool)
    {
        Vector3 start = transform.localPosition;
        for (float t = 0f; t < Lifetime; t += Time.deltaTime)
        {
            float progress = t / Lifetime;
            transform.localPosition = start + Vector3.up * RiseDistance * progress;
            text.alpha = 1f - progress * progress;
            yield return null;
        }
        pool.Release(this);
    }
}
```

It never destroys itself: at the end of its rise, it hands itself back to its pool.

2. `PopupPool`:

```csharp:PopupPool.cs
using System.Collections.Generic;
using UnityEngine;

// Popups, pooled. Making and destroying a popup for every hit makes garbage for
// the garbage collector to clear up; a pool makes a few once and reuses them.
// The pool is a Stack: Get pops a sleeping popup off the top (or makes one if
// there are none), and Release pushes it back, switched off.
public class PopupPool : MonoBehaviour
{
    [SerializeField] Popup popupPrefab;
    [SerializeField] Color damageColour = new Color(1f, 0.42f, 0.5f);
    [SerializeField] Color healColour = new Color(0.45f, 0.95f, 0.55f);
    [SerializeField] Color shieldColour = new Color(0.6f, 0.8f, 1f);

    readonly Stack<Popup> sleeping = new Stack<Popup>();

    public void ShowDamage(int amount, Vector3 position)
    {
        Get().Play(this, $"-{amount}", damageColour, position);
    }

    public void ShowHeal(int amount, Vector3 position)
    {
        Get().Play(this, $"+{amount}", healColour, position);
    }

    public void ShowShield(int amount, Vector3 position)
    {
        Get().Play(this, $"+{amount} shield", shieldColour, position);
    }

    public void Release(Popup popup)
    {
        popup.gameObject.SetActive(false);
        sleeping.Push(popup);
    }

    Popup Get()
    {
        Popup popup;
        if (sleeping.Count > 0)
        {
            popup = sleeping.Pop();
        }
        else
        {
            popup = Instantiate(popupPrefab, transform);
        }
        popup.gameObject.SetActive(true);
        return popup;
    }
}
```

<!-- check: end -->

3. The `Popup` prefab: on the canvas, a **Text - TextMeshPro** `Popup`, 320 × 80, text *−5*,
   `Cinzel-Bold SDF` 52, centred, **Raycast Target** off. Add `Popup`, drag the text into
   it, make it a prefab, and delete it.
4. On the Battle's canvas, an empty `Popups`, stretch–stretch, near the bottom of the
   Hierarchy (so popups draw over the panels), with `PopupPool`. Drag in the `Popup`
   prefab. The three colours are already set, in the script's defaults.

### Do it — effects

5. **GameObject → Visual Effects → Particle System**, called `Hit Effect`, at the scene's root
   (not on the canvas: particles live in the world, with the cards).
   In the Particle System's **main module**: **Duration** 0.45, **Looping** off, **Start
   Lifetime** *Random Between Two Constants* 0.27 and 0.45, **Start Speed** 2 and 5,
   **Start Size** 0.15 and 0.35, **Start Color** *Random Between Two Colors* `#FFB050` and
   `#E0303A`, **Simulation Space** **World**, **Play On Awake** off. **Emission**: **Rate
   over Time** 0, and one **Burst** at time 0 of 30. **Shape**: **Circle**, **Radius**
   0.2. Tick **Color over Lifetime**, with alpha 255 at the start and the middle and 0 at
   the end. **Renderer**: **Sorting Layer** `Effects` (Chapter 2's last layer), so the
   sparks draw over the cards, the canvas, and even a card you're holding.
6. Three more the same way:

| Effect | Count | Start Speed | Start Size | Lifetime | Radius | Colours | Also |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `Heal Effect` | 26 | 0.3 – 1.2 | 0.15 – 0.3 | 0.9 | 0.7 | `#C8FFB0` – `#40C060` | **Velocity over Lifetime**, **World**, Y 1.6: they rise |
| `Shield Effect` | 40 | 0.2 – 0.6 | 0.15 – 0.3 | 0.6 | 0.9 | `#E0F0FF` – `#6FA8FF` | |
| `Summon Effect` | 34 | 1 – 2.6 | 0.25 – 0.5 | 0.7 | 0.5 | `#F0C0FF` – `#8A40C0` | |

For each, **Duration** is its lifetime, and **Start Lifetime** runs from 0.6 of it to all
of it. On this camera, one world unit is 100 pixels of the canvas: a start size of 0.3 is a
spark 30 pixels across. Give each the `Effects` sorting layer, and put the four under an
empty `Effects`.

### Do it — the panel shows what happens

7. The finished `DuelistPanel`: for each event, a popup, an effect, and a sound, at the
   portrait (or the familiar).

```csharp:DuelistPanel.cs
using TMPro;
using UnityEngine;
using UnityEngine.UI;

// A Duelist Panel shows one Duelist and never changes it. It listens to the
// duelist's events: Changed redraws the panel; a hit, a heal, a shield or a
// summon gets a popup, an effect and a sound. Nothing happens in Update.
public class DuelistPanel : MonoBehaviour
{
    [SerializeField] Duelist duelist;
    [SerializeField] Image portrait;
    [SerializeField] TMP_Text nameText;
    [SerializeField] StatBar healthBar;
    [SerializeField] StatBar shieldBar;
    [SerializeField] StatBar manaBar;
    [SerializeField] PopupPool popups;
    [SerializeField] ParticleSystem hitEffect;
    [SerializeField] ParticleSystem healEffect;
    [SerializeField] ParticleSystem shieldEffect;
    [SerializeField] ParticleSystem summonEffect;
    [SerializeField] AudioSource audioSource;
    [SerializeField] AudioClip hitSound;
    [SerializeField] AudioClip healSound;
    [SerializeField] AudioClip shieldSound;
    [SerializeField] AudioClip summonSound;

    void OnEnable()
    {
        duelist.Changed += Redraw;
        duelist.Damaged += OnDamaged;
        duelist.Healed += OnHealed;
        duelist.Shielded += OnShielded;
        duelist.Summoned += OnSummoned;
        duelist.FamiliarDamaged += OnFamiliarDamaged;
    }

    void OnDisable()
    {
        duelist.Changed -= Redraw;
        duelist.Damaged -= OnDamaged;
        duelist.Healed -= OnHealed;
        duelist.Shielded -= OnShielded;
        duelist.Summoned -= OnSummoned;
        duelist.FamiliarDamaged -= OnFamiliarDamaged;
    }

    void Redraw()
    {
        portrait.sprite = duelist.Portrait;
        nameText.text = duelist.DisplayName;
        healthBar.Show(duelist.Health, duelist.MaxHealth, $"{duelist.Health} / {duelist.MaxHealth}");
        shieldBar.Show(duelist.Shield, duelist.MaxHealth, duelist.Shield.ToString());
        manaBar.Show(duelist.Mana, duelist.ManaThisTurn, $"{duelist.Mana} / {duelist.ManaThisTurn}");
    }

    void OnDamaged(int amount)
    {
        Vector3 at = portrait.transform.position;
        popups.ShowDamage(amount, at);
        PlayEffect(hitEffect, at, hitSound);
    }

    void OnHealed(int amount)
    {
        Vector3 at = portrait.transform.position;
        popups.ShowHeal(amount, at);
        PlayEffect(healEffect, at, healSound);
    }

    void OnShielded(int amount)
    {
        Vector3 at = portrait.transform.position;
        popups.ShowShield(amount, at);
        PlayEffect(shieldEffect, at, shieldSound);
    }

    void OnSummoned(Familiar familiar)
    {
        // A new familiar slides along its row to its place, so the effect plays in
        // the middle of the row.
        PlayEffect(summonEffect, familiar.transform.parent.position, summonSound);
    }

    void OnFamiliarDamaged(Familiar familiar, int amount)
    {
        Vector3 at = familiar.transform.position;
        popups.ShowDamage(amount, at);
        PlayEffect(hitEffect, at, hitSound);
    }

    void PlayEffect(ParticleSystem effect, Vector3 at, AudioClip sound)
    {
        effect.transform.position = at;
        effect.Play();
        audioSource.PlayOneShot(sound, GameSettings.SoundVolume);
    }
}
```

`portrait.transform.position` is the portrait's **pivot**, which Chapter 3 put in its
middle: that's why. The popup and the effect both use a world position, so the same one
works for both, and for a familiar on the table too: the canvas is drawn by the same
orthographic camera, so a point on the table and the point of the canvas in front of it
are the same place on the screen.

8. Open the `Duelist Panel` prefab: add an **Audio Source** to its root (**Play On Awake**
   off), and fill `DuelistPanel`'s new fields: the Audio Source, and the sounds `Hit`,
   `Heal`, `Shield` and `Summon`. Save. In the scene, give each panel the `Popups` and the
   four effects: scene objects, so these are overrides on each instance.

### Do it — the duel's own sounds

9. The finished `DuelManager`: a chime when your turn starts, and a whoosh when anyone
   plays a card.

```csharp:DuelManager.cs
using System;
using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;
using UnityEngine.Events;

// The duel itself: whose turn it is, and when it's over. It's a state machine,
// as in Level 3. It raises C# events for other scripts, and UnityEvents for
// whatever a designer wires up in the Inspector. It talks to each side's
// controller through IDuelistController, so it can't tell a person from the
// computer.
public class DuelManager : MonoBehaviour
{
    enum State { Starting, PlayerTurn, OpponentTurn, Over }

    const float MessageTime = 2f;
    const float MessageFadeTime = 0.5f;

    [SerializeField] Duelist player;
    [SerializeField] Duelist opponent;
    [SerializeField] Sprite playerPortrait;
    [SerializeField] CardLibrary library;
    [SerializeField] OpponentProfile testOpponent;     // when the Battle scene is played on its own
    [SerializeField] SpriteRenderer arena;
    [SerializeField] TMP_Text messageText;
    [SerializeField] float normalThinkTime = 0.8f;
    [SerializeField] float fastThinkTime = 0.3f;
    [SerializeField] float endDelay = 1.5f;
    [SerializeField] AudioSource audioSource;
    [SerializeField] AudioClip turnSound;
    [SerializeField] AudioClip playSound;
    [SerializeField] UnityEvent onPlayerTurn;
    [SerializeField] UnityEvent onDuelOver;

    State state = State.Starting;
    IDuelistController playerController;
    IDuelistController opponentController;
    DuelResult result;
    Coroutine hideMessage;

    public OpponentProfile Opponent { get; private set; }

    // How long the computer thinks before each card.
    public float ThinkTime { get { return GameSettings.FastOpponent ? fastThinkTime : normalThinkTime; } }

    public event Action<Duelist> TurnStarted;
    public event Action<bool> DuelEnded;        // true when the player won

    void Awake()
    {
        // Unity can't show an interface in the Inspector, so we ask each side's
        // GameObject for whichever component is its controller.
        playerController = player.GetComponent<IDuelistController>();
        opponentController = opponent.GetComponent<IDuelistController>();
    }

    void OnEnable()
    {
        player.Died += OnPlayerDied;
        opponent.Died += OnOpponentDied;
        player.Announced += ShowMessage;
        opponent.Announced += ShowMessage;
        player.CardPlayed += OnPlayerCardPlayed;
        opponent.CardPlayed += OnOpponentCardPlayed;
        player.Damaged += OnPlayerDamaged;
        opponent.Damaged += OnOpponentDamaged;
    }

    void OnDisable()
    {
        player.Died -= OnPlayerDied;
        opponent.Died -= OnOpponentDied;
        player.Announced -= ShowMessage;
        opponent.Announced -= ShowMessage;
        player.CardPlayed -= OnPlayerCardPlayed;
        opponent.CardPlayed -= OnOpponentCardPlayed;
        player.Damaged -= OnPlayerDamaged;
        opponent.Damaged -= OnOpponentDamaged;
    }

    void Start()
    {
        Opponent = DuelSetup.Opponent;
        if (Opponent == null)
        {
            Opponent = testOpponent;
            Debug.LogWarning("No opponent was chosen, so the Battle scene was played on its own: using the Test Opponent.", this);
        }
        IReadOnlyList<Card> deck = DuelSetup.Deck;
        if (deck == null)
        {
            deck = library.StarterDeck;
            Debug.LogWarning("No deck was chosen: using the starter deck.", this);
        }

        arena.sprite = Opponent.Arena;
        result = new DuelResult(Opponent);
        player.Foe = opponent;
        opponent.Foe = player;
        player.Begin("You", playerPortrait, deck);
        opponent.Begin(Opponent.DisplayName, Opponent.Portrait, Opponent.Deck);
        EnterState(State.PlayerTurn);
    }

    // The controller whose turn it is calls this when it's done.
    public void EndTurn(Duelist who)
    {
        if (state == State.PlayerTurn && who == player)
        {
            EnterState(State.OpponentTurn);
        }
        else if (state == State.OpponentTurn && who == opponent)
        {
            EnterState(State.PlayerTurn);
        }
    }

    // From the pause menu.
    public void GiveUp()
    {
        Finish(false);
    }

    public void ShowMessage(string text)
    {
        messageText.text = text;
        messageText.alpha = 1f;
        if (hideMessage != null)
        {
            StopCoroutine(hideMessage);
        }
        hideMessage = StartCoroutine(HideMessage());
    }

    void EnterState(State next)
    {
        state = next;
        switch (state)
        {
            case State.PlayerTurn:
                result.Turns++;
                StartTurn(player, opponent, playerController, "Your turn");
                if (state == State.PlayerTurn)
                {
                    PlaySound(turnSound);
                    onPlayerTurn.Invoke();
                }
                break;
            case State.OpponentTurn:
                StartTurn(opponent, player, opponentController, $"{opponent.DisplayName}'s turn");
                break;
            case State.Over:
                player.IsTakingTurn = false;
                opponent.IsTakingTurn = false;
                break;
        }
    }

    void StartTurn(Duelist who, Duelist foe, IDuelistController controller, string message)
    {
        foe.IsTakingTurn = false;
        ShowMessage(message);
        who.StartTurn();                // its familiars strike, and the foe may fall
        if (state == State.Over)
        {
            return;
        }
        who.IsTakingTurn = true;
        TurnStarted?.Invoke(who);
        controller.BeginTurn(who, foe, this);
    }

    void OnPlayerDied()
    {
        Finish(false);
    }

    void OnOpponentDied()
    {
        Finish(true);
    }

    void Finish(bool playerWon)
    {
        if (state == State.Over)
        {
            return;
        }
        EnterState(State.Over);
        result.Won = playerWon;
        RecordResult(playerWon);
        DuelSetup.Result = result;
        ShowMessage(playerWon ? "Victory!" : "Defeat");
        DuelEnded?.Invoke(playerWon);
        StartCoroutine(EndAfterDelay());
    }

    // Wins, losses, opponents beaten and rare cards won, in the save file.
    void RecordResult(bool playerWon)
    {
        SaveData save = SaveSystem.Load();
        if (playerWon)
        {
            string rareCardId = Opponent.RareCard == null ? "" : Opponent.RareCard.Id;
            if (save.RecordWin(Opponent.Id, rareCardId))
            {
                result.RareCardWon = Opponent.RareCard;
            }
        }
        else
        {
            save.RecordLoss();
        }
        SaveSystem.Save(save);
    }

    IEnumerator EndAfterDelay()
    {
        yield return new WaitForSecondsRealtime(endDelay);
        onDuelOver.Invoke();            // in the Inspector: the Scene Fader fades to Results
    }

    IEnumerator HideMessage()
    {
        yield return new WaitForSeconds(MessageTime);
        for (float t = 0f; t < MessageFadeTime; t += Time.deltaTime)
        {
            messageText.alpha = 1f - t / MessageFadeTime;
            yield return null;
        }
        messageText.alpha = 0f;
    }

    void OnPlayerCardPlayed(Card card)
    {
        result.CardsPlayed++;
        PlaySound(playSound);
    }

    void OnOpponentCardPlayed(Card card)
    {
        PlaySound(playSound);
    }

    void PlaySound(AudioClip clip)
    {
        audioSource.PlayOneShot(clip, GameSettings.SoundVolume);
    }

    void OnPlayerDamaged(int amount)
    {
        result.DamageTaken += amount;
    }

    void OnOpponentDamaged(int amount)
    {
        result.DamageDealt += amount;
        result.BiggestHit = Mathf.Max(result.BiggestHit, amount);
    }
}
```

10. The finished `HandView`: a soft flick for every card you draw.

```csharp:HandView.cs
using System.Collections.Generic;
using UnityEngine;

// Keeps a CardView for every card in one duelist's hand, and lays them out as a
// fan: along an arc, each turned a little, later cards on top. It only listens: a
// card drawn gets a view, and a card played flies to the middle of the table.
// Every frame each card moves part of the way to its place, so the hand closes up
// smoothly when a card leaves it.
public class HandView : MonoBehaviour
{
    const float Smoothing = 12f;    // how quickly cards move to their places

    [SerializeField] Duelist duelist;
    [SerializeField] CardView cardPrefab;
    [SerializeField] CardView rareCardPrefab;
    [SerializeField] bool faceDown;             // the opponent's hand
    [SerializeField] Transform playSpot;        // where played cards fly to
    [SerializeField] float spacing = 1.7f;      // between two cards' middles, in units
    [SerializeField] float maxWidth = 8.5f;     // a bigger hand squeezes closer
    [SerializeField] float arc = 0.07f;         // how far the outer cards sink
    [SerializeField] float tilt = 4f;           // degrees each card turns, from the middle
    [SerializeField] float hoverRise = 1.45f;   // a hovered card rises this far, and grows
    [SerializeField] float hoverScale = 1.3f;
    [SerializeField] AudioSource audioSource;
    [SerializeField] AudioClip drawSound;       // for your hand only

    readonly List<CardView> views = new List<CardView>();

    void OnEnable()
    {
        duelist.Changed += OnChanged;
        duelist.CardPlayed += OnCardPlayed;
    }

    void OnDisable()
    {
        duelist.Changed -= OnChanged;
        duelist.CardPlayed -= OnCardPlayed;
    }

    void Update()
    {
        float gap = views.Count > 1 ? Mathf.Min(spacing, maxWidth / (views.Count - 1)) : 0f;
        float step = Smoothing * Time.deltaTime;
        for (int i = 0; i < views.Count; i++)
        {
            CardView view = views[i];
            if (view.IsDragging)
            {
                continue;       // the pointer moves this one
            }
            float fromMiddle = i - (views.Count - 1) / 2f;
            Vector3 place = new Vector3(fromMiddle * gap, -fromMiddle * fromMiddle * arc, 0f);
            Quaternion turn = Quaternion.Euler(0f, 0f, -fromMiddle * tilt);
            float scale = 1f;
            if (view.IsHovered)
            {
                place.y = hoverRise;
                turn = Quaternion.identity;
                scale = hoverScale;
            }
            Transform card = view.transform;
            card.localPosition = Vector3.Lerp(card.localPosition, place, step);
            card.localRotation = Quaternion.Slerp(card.localRotation, turn, step);
            card.localScale = Vector3.Lerp(card.localScale, Vector3.one * scale, step);
        }
    }

    // The view that was dragged, or for the opponent the first with that card.
    void OnCardPlayed(Card card)
    {
        CardView played = null;
        foreach (CardView view in views)
        {
            if (view.Card == card && (played == null || view.IsDragging))
            {
                played = view;
            }
        }
        if (played == null)
        {
            return;
        }
        views.Remove(played);
        played.FlyAway(playSpot.position);
        SortCards();
    }

    // Walk the hand and the views together: keep each view that matches its card,
    // replace one that doesn't, add views for new cards, and drop any left over.
    void OnChanged()
    {
        IReadOnlyList<Card> hand = duelist.Hand;
        for (int i = 0; i < hand.Count; i++)
        {
            if (i < views.Count && views[i].Card == hand[i])
            {
                continue;
            }
            CardView view = MakeView(hand[i]);
            if (i < views.Count)
            {
                Destroy(views[i].gameObject);
                views[i] = view;
            }
            else
            {
                views.Add(view);
            }
        }
        while (views.Count > hand.Count)
        {
            Destroy(views[views.Count - 1].gameObject);
            views.RemoveAt(views.Count - 1);
        }
        SortCards();
    }

    // Each card's place in the hand is its Order in Layer: later cards on top.
    void SortCards()
    {
        for (int i = 0; i < views.Count; i++)
        {
            views[i].SetOrder(i);
        }
    }

    CardView MakeView(Card card)
    {
        CardView view = Instantiate(card.IsRare ? rareCardPrefab : cardPrefab, transform);
        view.Show(card);
        if (faceDown)
        {
            view.ShowBack();
        }
        else
        {
            view.SetOwner(duelist);
            audioSource.PlayOneShot(drawSound, GameSettings.SoundVolume);
        }
        return view;
    }
}
```

11. On the `Duel Manager`, add an **Audio Source** (**Play On Awake** off), and fill its
    fields: the Audio Source, **Turn Sound** `Turn`, **Play Sound** `Play`. Both hands:
    the Duel Manager's Audio Source, and **Draw Sound** `Draw`.

### Test it

- **Play.** Your turn's chime, and four cards drawn with four flicks. Play an attack on
  Mira: a whoosh, sparks on her face, *−6* in red rising and fading, and a hit.
- A shield: a blue ring, *+5 shield*. A heal when you're hurt: green motes rising.
- A familiar: a purple puff in the middle of your row. Next turn, as it strikes, a hit
  on Mira.
- Look at the Hierarchy during a duel: under `Popups`, a handful of `Popup(Clone)`s, most
  of them switched off. Keep playing: the number hardly grows. They're reused.
- Turn **Sounds** down in the settings: every sound gets quieter, at once
  (`GameSettings.SoundVolume`, read at each sound).

### Commit

*Add pooled popups, particle effects and sound.*

### Challenge

The pool grows when it runs out, and never shrinks. Make it **warm up**: in `Start`, make
five popups and `Release` them straight away, so the first hits of a duel never
`Instantiate` at all.

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
share a name, put one of them in a `namespace` (C# 9), or rename yours. Good
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

## Chapter 17 — Profile It

**Goal:** a package installed with the Package Manager, and three performance problems,
each found with the right tool: the **Profiler** for time and garbage, the **Frame
Debugger** for what's drawn and in what order, and the **Memory Profiler** for what fills
memory. You make each problem on purpose, on a branch, measure it, and throw it away.

### Idea — which tool for which problem

The exam asks this as a straight question (C# 17):

| The symptom | The tool | What it shows |
| --- | --- | --- |
| the game stutters, or a click takes a moment | **Profiler**, CPU Usage | what took the time, frame by frame; **GC Alloc**: garbage made |
| something draws wrongly, or too often | **Frame Debugger** | every draw of one frame, in order |
| memory grows, or a phone runs out of it | **Memory Profiler** | what's in memory, and how big each thing is |

Every experiment in this chapter happens on a **branch**, `profiling`, that you never
merge: you can break the game freely, and `main` stays as it is.

### Do it — a package

1. **Window → Package Management → Package Manager**. On the left, **Unity Registry**; search for *Memory
   Profiler*, select it, and **Install**. (It's version 1.1.12 at the time of writing.)
   It's in the project now: look at `Packages/manifest.json` in GitHub Desktop's Changes
   tab: one new line, `"com.unity.memoryprofiler": "1.1.12"`. The package itself isn't in
   your repository, only that line: anyone who opens the project gets the package from
   the registry.
2. Commit it on `main`: *Add the Memory Profiler package*. Then, in GitHub Desktop, make
   the branch `profiling`.

### Do it — problem 1: the Profiler

3. A teammate "simplified" the Deck Builder's tabs: instead of showing and hiding the
   card tiles, each tab destroys them all and makes the ones it needs. On your branch,
   replace `DeckBuilder`'s `ShowOnly` with the teammate's version (the rest of the script
   stays as it is):

```csharp
    // … the rest of DeckBuilder as before …

    void ShowOnly(CardKind kind)
    {
        foreach (CardTile old in tiles)
        {
            Destroy(old.gameObject);
        }
        tiles.Clear();
        foreach (Card card in library.Cards)
        {
            if (card.Kind == kind || (kind == CardKind.Attack && card.Kind == CardKind.Drain))
            {
                CardTile tile = Instantiate(tilePrefab, collectionGrid);
                tile.Show(card);
                tile.SetLocked(card.IsRare && !save.unlockedCards.Contains(card.Id));
                tile.Clicked += AddCopy;
                tiles.Add(tile);
            }
        }
    }
```

4. **Window → Analysis → Profiler**. Play the **Deck Builder**, click **Record** in the
   Profiler if it isn't on, and click the tabs one after another: **Attack**, **Heal**,
   **Shield**, **Familiar**, a second or so apart.
5. Stop recording. In the **CPU Usage** graph, each click is a **spike**. Click one, and
   switch the lower half from **Timeline** to **Hierarchy**. Sort by **Total**: near the
   top, `EventSystem.Update`, and inside it your `ShowOnly`, with `Instantiate` and the
   layout rebuilding the grid. Look at the **GC Alloc** column: on that frame it's in the
   kilobytes. On the frames between clicks, nothing.
6. Now the real `ShowOnly`, which only switches tiles on and off: in GitHub Desktop,
   **discard** your change to `DeckBuilder.cs` (right-click it → **Discard changes**).
   Record the same clicks: the spikes are lower, and the GC Alloc on a click is far
   smaller. Same screen, same result, much less work.

> **Note:** the Profiler in the Editor measures the Editor too, and the Editor is slower
> than a build. For numbers you trust, profile a **Development Build** with **Autoconnect
> Profiler** ticked (in **File → Build Profiles**). To find *where* the time goes, the
> Editor is fine.

### Do it — problem 2: the Frame Debugger

7. Play the **Battle**. Hover a card so it grows, and while it's held up, **Window →
   Analysis → Frame Debugger** → **Enable**. The game freezes on one frame.
8. The list on the left is every draw in that frame, in order. Click down it slowly, and
   watch the **Game** view: the frame is drawn up to the step you've selected. The arena
   first, then the fades and the glow, the familiars, the hands card by card, the
   canvas with its panels...
9. Find two things, and say why:
   - The **hovered card** is drawn **after the canvas**, though the rest of your hand is
     drawn before it. Its **Sorting Group** moved to the **Held** sorting layer, which is
     above **UI** in the list (Chapter 7): sorting layers are drawn in their order, so
     the whole card comes later.
   - The **cards** are many small steps, even though they look alike: a card's sprites
     and its texts are drawn one after another, and its **Sorting Group** keeps them
     together, so they can't share a draw with the next card's. That's the price of
     letting any card come out whole on top. A design choice, measured.
10. **Disable** the Frame Debugger.

### Do it — problem 3: the Memory Profiler

11. Your trainer shares `Lorestrome Portraits (whole sheet).jpg`: the whole pack the five
    portraits were cut from, 1800 × 10800 pixels. A teammate wanted every portrait in the
    game, so they dropped the whole sheet into `Art`. Do the same, on your branch.
12. Select it: Unity shrank it to **341 × 2048**: its **Max Size** is 2048, and the sheet
    is taller. Blurry. So the teammate raised **Max Size** to 16384 and set
    **Compression** to **None**, to see it sharp. Do that too, and put the sheet on an
    **Image** in the Menu (any Image, for a moment), so the game loads it.
13. Play the Menu, then **Window → Analysis → Memory Profiler** → **Capture New
    Snapshot**. Open the snapshot, and look at the biggest **Texture2D**. Measured in
    Unity 6000.6 for this book:

| The sheet imported with | Size | Format | Memory |
| --- | --- | --- | --- |
| the defaults (Max Size 2048) | 341 × 2048, blurry | RGB24 | 4.7 MB |
| Max Size 16384, compressed | 1800 × 10800 | DXT1 | 18.5 MB |
| Max Size 16384, **Compression None** | 1800 × 10800 | RGB24 | **129.8 MB** |
| one 300 × 300 portrait, as the game imports it | 300 × 300 | DXT1 | 89 KB |

    One picture, 130 MB: more than a cheap phone can spare for a whole game. The game
    needs five 300 × 300 portraits: 445 KB. **Cut what you need; keep compression on.**
14. Done with the experiments: switch back to `main`, and delete the `profiling` branch
    without merging. Nothing you broke ever reached `main`.

### Do it — from the Asset Store (optional)

15. The Associate exam expects you to have imported from the **Asset Store**. On
    assetstore.unity.com, find **Cartoon FX Remaster Free** by Jean Moreno, and **Add to
    My Assets** (free; it needs your Unity account). In the Package Manager, **My
    Assets**, select it, **Download**, then **Import**, and **Import** again in the
    Import Unity Package window. It lands in `Assets/JMO Assets`.
16. Read the Console before anything else. Unity 6 fills it with lines like this one:

```
Serialized file "Assets/JMO Assets/Cartoon FX Remaster/CFXR Assets/Meshes/cfxr ring mesh.asset" contains a Mesh object at version 9, below the supported minimum (10). Open and re-save the file to upgrade.
```

17. The pack was saved by an older Unity. Most of its files still work, but its meshes
    don't draw: drag **CFXR Hit A (Red)**, from **CFXR Prefabs → Impacts**, into the
    Battle scene, and press Play. The hit has no red spikes. That's an import conflict
    (C# 16), and the message says the fix: save the files again, in this
    version of Unity. There's no menu for it, so make one. In `Assets`, make a folder
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

18. `[MenuItem]` puts a `static` method in Unity's menus. A script in a folder called
    `Editor` is an **Editor script**: it uses `UnityEditor`, runs in the Editor, and is
    never built into your game. Select the pack's **CFXR Assets** folder, choose
    **Tools → Re-save Selected Assets**, and play again: the spikes are back, and the
    Console stays clear next time you open the project.
19. The pack's shaders compile for whichever pipeline your project uses, so nothing
    shows pink. Set its renderers' **Order in Layer** to 20, like your `Hit Effect`, and
    use one of its effects instead, if you like it better.
20. An Asset Store asset's licence lets you use it in your games, not share its files
    publicly. Your repository is private, so it can go in there.

### Commit

*Add the Memory Profiler package.* Of all the experiments, that was the only change kept: and that's the point.
If you did the Asset Store steps, commit them separately: *Add Cartoon FX Remaster Free*.

### Challenge

Profile a **Battle**: record ten turns against Mira with **Fast opponent** off. Find the
frame where a card is played, and the frame where a popup appears. Does a popup make
garbage? (Release it to the pool, and look again later in the duel.)

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
in the base class (C# 4).

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
same parameters (C# 7). And neither can be made with `new`: an abstract
class or an interface is a plan, not a thing. Make one of the classes built on it.

```csharp
Vehicle vehicle = new Vehicle();    // error CS0144: Cannot create an instance of the abstract type or interface 'Vehicle'
```

### Idea — events, members and names

| Wrong | The compiler says | Fix |
| --- | --- | --- |
| `racer.LapFinished = OnLapFinished;` | `error CS0070: The event 'Racer.LapFinished' can only appear on the left hand side of += or -= (except when used from within the type 'Racer')` | subscribe with `+=`; only `Racer` can raise or reset its event (C# 8) |
| two `Countdown` classes, often after importing a package | `error CS0101: The namespace '<global namespace>' already contains a definition for 'Countdown'` | delete the copy, rename yours, or use a namespace (C# 9) |
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

## Chapter 18 — Clean Up the Intern's Code

**Goal:** the intern's Results screen rewritten to Sam's style guide, in small steps,
each tested and committed, without changing what it does. And one bug the review finds,
fixed separately.

### Idea — refactor in small, safe steps

**Refactoring** changes how code is written, never what it does (C# 18). The
safe way is a series of small steps, each of which leaves a working game:

```
change one thing  →  Play: does the Results screen still work?  →  commit  →  next
```

If a step breaks something, you know which: the last one. And Git can take it back.

### Do it — read it against the guide

1. Open the intern's `ResultsScreen` (Chapter 12) beside `STYLE_GUIDE.md`, and list what
   breaks the guide before you touch anything:

| In the intern's code | The guide says |
| --- | --- |
| `public TMP_Text t;` and six more | `[SerializeField]` private fields, never `public`; names that say what they are |
| `GameObject.Find("Opponent")` | not allowed: a `[SerializeField]` reference instead |
| `new Color(1f, 0.82f, 0.48f)` | no magic numbers: a named, tunable field |
| `"Turns: " + r.Turns + "\n"`... | string interpolation |
| `if (r.Won == true)` | `if (result.Won)`: it's already a bool |
| `else card.SetActive(false);` | braces on every `else` |
| one long `Start` | short methods, each with one job |
| `// get the result`, `// set the title` | comments say why, not what |
| `if (r == null) return;` | silent: the Console should say why the screen is empty |

### Do it — step 1: names and fields

2. Rename each field to say what it is, and make it `[SerializeField]` and private. One
   trap: Unity remembers an Inspector value **by the field's name**. Rename `t` to
   `titleText`, and the Results object forgets which text was its title.
   `[FormerlySerializedAs("t")]` tells Unity the field used to be called `t`, so it keeps
   the value:

```csharp
using TMPro;
using UnityEngine;
using UnityEngine.Serialization;
using UnityEngine.UI;

// results screen
public class ResultsScreen : MonoBehaviour
{
    [SerializeField, FormerlySerializedAs("t")] TMP_Text titleText;
    [SerializeField, FormerlySerializedAs("p")] Image portrait;
    [SerializeField, FormerlySerializedAs("bg")] Image arena;
    [SerializeField, FormerlySerializedAs("a")] AudioSource audioSource;
    [SerializeField, FormerlySerializedAs("w")] AudioClip victoryJingle;
    [SerializeField, FormerlySerializedAs("l")] AudioClip defeatJingle;
    [SerializeField, FormerlySerializedAs("card")] GameObject rareCardGroup;

    void Start()
    {
        // get the result
        DuelResult result = DuelSetup.Result;
        if (result == null) return;

        // set the title
        if (result.Won == true)
        {
            titleText.text = "Victory";
            titleText.color = new Color(1f, 0.82f, 0.48f);
            audioSource.PlayOneShot(victoryJingle);
        }
        else
        {
            titleText.text = "Defeat";
            titleText.color = new Color(0.75f, 0.68f, 0.8f);
            audioSource.PlayOneShot(defeatJingle);
        }
        GameObject.Find("Opponent").GetComponent<TMP_Text>().text = "against " + result.Opponent.DisplayName + ", in " + result.Opponent.ArenaName;
        portrait.sprite = result.Opponent.Portrait;
        arena.sprite = result.Opponent.Arena;

        // stats
        string s = "";
        s = s + "Turns: " + result.Turns + "\n";
        s = s + "Damage dealt: " + result.DamageDealt + "\n";
        s = s + "Damage taken: " + result.DamageTaken + "\n";
        s = s + "Cards played: " + result.CardsPlayed + "\n";
        s = s + "Biggest hit: " + result.BiggestHit;
        GameObject.Find("Stats").GetComponent<TMP_Text>().text = s;

        // the card
        if (result.RareCardWon != null)
        {
            rareCardGroup.SetActive(true);
            rareCardGroup.GetComponentInChildren<CardTile>().Show(result.RareCardWon);
        }
        else rareCardGroup.SetActive(false);
    }
}
```

3. Open the Results scene: every field still filled in, under its new name. Save the
   scene (**Ctrl+S** or **Cmd+S**): it's written with the new names now. Play a duel to
   the Results: as before. Commit: *Rename the Results screen's fields*.

### Do it — step 2: everything else

4. Now the rest, one change at a time, testing and committing after each (in the book,
   they're shown together):
   - the two `GameObject.Find`s become `[SerializeField]` fields, `opponentText` and
     `statsText`, set in the Inspector;
   - `GetComponentInChildren<CardTile>()` becomes a `[SerializeField] CardTile rareCard`;
   - the two colours become `[SerializeField]` fields with those values as defaults;
   - `Start` is split into `ShowTitle`, `ShowStats` and `ShowRareCard`;
   - the string building becomes one interpolated string;
   - `result == null` logs a warning, with the object as context, and says *No duel yet*;
   - the comments say why; and, the scene now saved with the new names, the
     `FormerlySerializedAs` attributes go.

### Do it — the bug

5. Reading the code against the guide turned up something else: the jingles ignore the
   **Sounds** setting. `PlayOneShot(victoryJingle)` plays at full volume, whatever the
   player chose. That's a **bug**, not a style problem, and fixing it changes what the
   code does, so it's a separate commit, with its own message: *Play the Results jingles
   at the sound volume*. Mixing a fix into a refactoring makes both harder to review.

### Do it — the finished script

```csharp:ResultsScreen.cs
using TMPro;
using UnityEngine;
using UnityEngine.UI;

// The Results scene: who won, the duel's numbers, and the rare card if this win
// gave one. Rebuilt in Chapter 18 from the intern's first version, to fit the
// style guide. It does exactly what that version did.
public class ResultsScreen : MonoBehaviour
{
    [SerializeField] TMP_Text titleText;
    [SerializeField] TMP_Text opponentText;
    [SerializeField] TMP_Text statsText;
    [SerializeField] Image portrait;
    [SerializeField] Image arena;
    [SerializeField] GameObject rareCardGroup;
    [SerializeField] CardTile rareCard;
    [SerializeField] Color victoryColour = new Color(1f, 0.82f, 0.48f);
    [SerializeField] Color defeatColour = new Color(0.75f, 0.68f, 0.8f);
    [SerializeField] AudioSource audioSource;
    [SerializeField] AudioClip victoryJingle;
    [SerializeField] AudioClip defeatJingle;

    void Start()
    {
        DuelResult result = DuelSetup.Result;
        if (result == null)
        {
            Debug.LogWarning("There's no duel result: the Results scene was played on its own.", this);
            titleText.text = "No duel yet";
            rareCardGroup.SetActive(false);
            return;
        }

        ShowTitle(result);
        ShowStats(result);
        ShowRareCard(result);
    }

    void ShowTitle(DuelResult result)
    {
        titleText.text = result.Won ? "Victory" : "Defeat";
        titleText.color = result.Won ? victoryColour : defeatColour;
        opponentText.text = $"against {result.Opponent.DisplayName}, in {result.Opponent.ArenaName}";
        portrait.sprite = result.Opponent.Portrait;
        arena.sprite = result.Opponent.Arena;
        audioSource.PlayOneShot(result.Won ? victoryJingle : defeatJingle, GameSettings.SoundVolume);
    }

    void ShowStats(DuelResult result)
    {
        statsText.text =
            $"Turns: {result.Turns}\n" +
            $"Damage dealt: {result.DamageDealt}\n" +
            $"Damage taken: {result.DamageTaken}\n" +
            $"Cards played: {result.CardsPlayed}\n" +
            $"Biggest hit: {result.BiggestHit}";
    }

    void ShowRareCard(DuelResult result)
    {
        bool hasRareCard = result.RareCardWon != null;
        rareCardGroup.SetActive(hasRareCard);
        if (hasRareCard)
        {
            rareCard.Show(result.RareCardWon);
        }
    }
}
```

6. In the Results scene, fill the new fields: **Opponent Text** (`Opponent`), **Stats
   Text** (`Stats`) and **Rare Card** (the card in `Rare Card Won`). Save.

### Test it

- A duel to the end: the Results look exactly as before. That was the whole point.
- Play the Results scene on its own: *No duel yet*, the card hidden, and a warning in the
  Console that names the reason.
- Turn **Sounds** down, and win: a quieter jingle.
- In GitHub Desktop's **History**, your steps one by one. Click each: a small diff, easy to
  read. That's what a reviewer sees.

### Commit

The last step, and the bug fix, each as its own commit.

### Challenge

Make the Results screen show *Beaten for the first time!* when this win opened the next
opponent. Which class knows that? (`SaveData.RecordWin` knows whether the card was new;
the opponent is the same idea.)

## Chapter 19 — Break It, Then Fix It

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

1. **Delete `Describe` from `HealCard`.**

```
error CS0534: 'HealCard' does not implement inherited abstract member 'Card.Describe()'
```

An abstract member is a promise every subclass must keep. Put it back.

2. **Misspell it:** `public override string Descripe()`.

```
error CS0115: 'HealCard.Descripe()': no suitable method found to override
```

`override` says *there's a method like this in my base class*; there isn't one called
`Descripe`. (You'd get CS0534 too: `Describe` is missing again.)

3. **Delete `TakeDamage` from `Familiar`.**

```
error CS0535: 'Familiar' does not implement interface member 'IDamageable.TakeDamage(int)'
```

An interface is a contract: a class that signs it must have every member.

4. **In `CardLibrary`'s `BuildLookup`, write `Card card = new Card();`** anywhere.

```
error CS0144: Cannot create an instance of the abstract type or interface 'Card'
```

There's no such thing as a plain card. (And a ScriptableObject is never made with `new`
anyway: `ScriptableObject.CreateInstance<T>()`, for a kind that isn't abstract.)

5. **In `DuelistPanel`'s `OnDamaged`, write `duelist.Changed();`**, as if to redraw.

```
error CS0070: The event 'Duelist.Changed' can only appear on the left hand side of += or -= (except when used from within the type 'Duelist')
```

Only the class that owns an event may raise it. Others subscribe and unsubscribe: that's
what makes it an *event*, and not a field anyone could call.

### Do it — runtime errors

6. **Forget to unsubscribe.** In `PlayerController`, delete the line
   `endTurnAction.action.performed -= OnEndTurnPerformed;` from `OnDisable`. Play from the
   **Menu**, start a duel against Mira, go back to the Menu with **Give Up** and **Menu**,
   start another duel, and press **Space**:

```
MissingReferenceException while executing 'performed' callbacks of 'Battle/End Turn[/Keyboard/space,/Keyboard/enter]'
MissingReferenceException: The object of type 'UnityEngine.UI.Button' has been destroyed but you are still trying to access it.
Your script should either check if it is null or you should not destroy the object.
```

Read the second message's stack trace: `PlayerController.EndTurn ()`, called from
`PlayerController.OnEndTurnPerformed`. The **first** duel's `PlayerController`, destroyed
with its scene, is still subscribed: the action is an **asset**, and assets outlive
scenes. Its handler runs, and reaches for its End Turn button, which was destroyed with
it. The fix is the line you deleted: *subscribe in `OnEnable`, unsubscribe in
`OnDisable`, always both*. Discard the change.

7. **Leave a field empty.** In the Battle scene, clear `Pause Menu`'s **Settings Panel**
   field (select it, **Delete**). Play, pause, **Resume**:

```
UnassignedReferenceException: The variable settingsPanel of PauseMenu has not been assigned.
You probably need to assign the settingsPanel variable of the PauseMenu script in the inspector.
```

Unity names the field and the script for you. Put it back with **Ctrl+Z**, or by
discarding the scene's changes in GitHub Desktop.

8. **The stale static**, from Chapter 12: comment out the `[RuntimeInitializeOnLoadMethod]`
   line in `DuelSetup`, play a duel against Kasha from the Menu, then play the Battle
   scene on its own. Kasha again, and no warning. Discard the change.

### Do it — undo a commit

9. Make a mistake *and commit it*: set `Duelist.MaxHandSize` to 2, and commit *Shrink the
   hand* on your branch. Play: two cards, and everything else burns.
10. In GitHub Desktop's **History**, right-click that commit → **Revert Changes in
    Commit**. A new commit undoes the old one; the history keeps both, so a team can see
    what happened. Play: seven cards again.
11. Switch back to `main`, and delete the `breaking` branch.

### Commit

Nothing to commit on `main`. Everything you broke stayed on the branch.

### Challenge

Make a mistake for a friend: on a branch of your own, break one thing (a compile error or
a runtime one), and commit it. Swap computers. Find each other's mistake from the Console
alone, and fix it.

## Chapter 20 — Ship It

**Goal:** Arcane Duel built for the **web**, playable on itch.io with a mouse or a finger,
and for **your computer** (Windows or Mac), with a Quit button. Your save works in both. A
**release tag** in Git marks the version you shipped.

### Idea — one project, two builds

| | Web (WebGL) | PC (Windows or Mac) |
| --- | --- | --- |
| Played | in a browser, on itch.io | as an app |
| Quit button | hidden: a web page can't close itself | shown |
| The save file and PlayerPrefs | kept by the browser, for that site | in the player's own folders |
| Input | mouse, touch, keyboard | mouse, keyboard, gamepad |

`MainMenu` already knows: it hides **Quit** when `Application.platform` is
`RuntimePlatform.WebGLPlayer`.

### Do it — the player settings

1. **Edit → Project Settings → Player**: **Company Name** *Lantern Hill Games*,
   **Product Name** *Arcane Duel*. The product name is the app's name, and part of the
   save file's folder: change it, and the game looks for its save somewhere new.
2. **File → Build Profiles**. The **Scene List**: `Menu`, `Deck Builder`, `Battle`,
   `Results`, in that order, all ticked. A build starts with the first.

### Do it — the web build

3. In **Build Profiles**, select **Web**, and **Switch Platform** (it takes a while: every
   texture is imported again for the web).
4. In the Web profile's **Player Settings**, **Publishing Settings**: **Compression
   Format** **Disabled** (itch.io serves the files as they are, and a compressed build
   would need the server's help). Under **Resolution and Presentation**, **Default Canvas
   Width** 1280 and **Height** 720.
5. **Build**, into a new folder, `Builds/Web` (it's in the `.gitignore`: builds stay out of
   Git). Zip the **contents** of `Builds/Web`, so `index.html` is at the top of the zip.
6. On itch.io: **Upload new project**, **Kind of project: HTML**, upload the zip, tick
   **This file will be played in the browser**, and set the viewport to 1280 × 720.
   Save, and open the page.

### Test it — the web build

- The Menu fades in; there's no **Quit**. Play a duel against Mira; win it.
- Close the tab, open the page again: *Wins 1*, Aldric open. The browser kept your save.
- On a phone: drag cards with your finger; hover is a press and hold.
- In your browser's settings, clear the site's data: back to the first run.

### Do it — the PC build

7. In **Build Profiles**, select **Windows** or **macOS** (whichever you're on), **Switch
   Platform**, and **Build** into `Builds/PC`.
8. Run it: **Quit** is there. The save lives in the player's own folders (on a Mac,
   `~/Library/Application Support/Lantern Hill Games/Arcane Duel`). The company name is
   part of that path, so the saves you made in the Editor before step 1 are in a
   `DefaultCompany` folder instead.

### Do it — tag the release

9. Commit everything: *Ship version 1.0*. In GitHub Desktop's **History**, right-click
   that commit → **Create Tag…**, `v1.0`. **Push origin**, and push the tag when it asks.
   On GitHub, your repository's **Releases** and **Tags** show `v1.0`: whatever happens to
   `main` next, anyone can get back the exact game you shipped.

### Commit

*Ship version 1.0*, tagged `v1.0`.

### Challenge

Add a version number to the Menu, from **Player Settings → Version** (read it in code with
`Application.version`), and ship 1.0.1 with one small improvement of your own, tagged
`v1.0.1`.

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
| Programming | Evaluate code for integration into a system architected by a lead | C# 9, C# 7 |
| Programming | Apply coding standards set by senior programmers | C# 18; Level 3's naming conventions |
| Programming | Determine code for a specified interaction or logic | Levels 1–4: every chapter; C# 4, C# 8 |
| Programming | Implement transitions between scenes | C# 11 |
| Programming | Save data between scenes and sessions (static, PlayerPrefs) | C# 10, C# 11, C# 13 |
| Programming | Use Unity API methods, given the API docs | Level 2: the Unity docs; C# 13, C# 14 |
| Programming | Choose GameObject properties, scripts and components for a task | Levels 1 and 2; C# 3, C# 2 |
| Programming | Inheritance vs. interfaces | C# 4, C# 7 |
| Programming | Choose data structures: lists, arrays, dictionaries | Level 2; C# 6 |
| Programming | Choose data types: floats, bools, strings | Level 2; C# 6 |
| Programming | Build to WebGL or PC | Level 1; the last of your game's build chapters |
| UI | Lay out UI with anchors, pivots and groups | C# 2 |
| UI | Display data in UI elements | Levels 1 and 3; C# 2 |
| UI | Respond to user input with the UnityEvent system | Level 2: UI events; C# 8, C# 2 |
| Debugging | Use debug messages to find why code fails | Levels 0 to 3; C# 19 |
| Debugging | Identify the cause of a compile error | Levels 0 and 3; C# 19 |
| Debugging | Identify null-variable errors | Level 2; Level 3's finding errors; C# 12 |
| Debugging | Refactor code to fit coding standards | C# 18 |
| Debugging | Select profiling tools for performance problems | C# 17, C# 15 |
| Assets | Use prefabs in a scene | Level 1; C# 3 |
| Assets | Change nested prefabs and prefab variants, and predict the outcome | C# 3 |
| Assets | Primary purposes of version control | C# 1 |

The **Check Yourself** part at the end of this book has two exam-style questions on
every one of them, a timed practice paper, and a cheat sheet.

### Idea — what Unity expects before you sit it

Unity lists these as the exam's prerequisites. You've done every one:

| Unity expects | Where you did it |
| --- | --- |
| 2–3 semesters of Unity classwork, or the equivalent | Levels 0 to 4 of this course |
| a diverse range of Unity projects | a different game at every level since Level 0, each one built and published |
| importing assets or code from the Asset Store or the Package Manager, and resolving conflicts | C# 16, C# 9 |
| debugging non-complex problems | Levels 2 and 3; C# 19, C# 17 |
| interpreting, integrating and modifying well-documented existing code | C# 9, C# 18 |
| basic scene management | C# 11 |
| creating and using prefabs | Level 1; C# 3 |
| deploying a basic build | a published build at the end of every level |

### Idea — how the questions are written

| The question says… | It wants… | Practise with |
| --- | --- | --- |
| "What does this code print?" | a trace on paper, line by line: which override runs, what a queue gives back first, what a dictionary holds | C# 4, C# 6 |
| "Which code implements…?" | the option that compiles **and** does the whole task: often two of them compile | every chapter's Do it |
| "What's the cause of this error?" | the error's code, the line, and the one thing on it that's wrong | C# 19 |
| "Which tool or component should you use…?" | the one made for that job: the Profiler for slow frames and garbage, the Frame Debugger for draw calls, the Memory Profiler for memory | C# 17, C# 2 |
| "What happens when you change this prefab?" | the change followed down from the base to its variants and instances, stopping at every override | C# 3 |
| "Which version follows the standard…?" | the option that keeps every rule the question gives, not your own habits | C# 18 |
| "Which of these integrates correctly?" | the option that uses the module's contract, and leaves the module unchanged | C# 9 |

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
| 1 | B | A has the members, but never says it's an `IHighlightable`, so `GetComponentInParent` finds nothing. C isn't a component, so it can't be on a GameObject. D doesn't compile: an interface has nothing to override (CS0115). | C# 9 |
| 2 | the `GameObject.Find` line | The counter already announces each change: delete the line, and let a combo text subscribe to `ComboChanged`. | C# 9 |
| 3 | C | A names the event like a handler; B isn't the past tense; D isn't PascalCase. | C# 18 |
| 4 | D | A has the word `private`; B is a public field; C's `bool` isn't a question. | C# 18 |
| 5 | `Picked up, healed twice`, then `True` | The object is a `BigPotion`, so its `Use` runs, and each `base.Use()` runs the version one level up first. A big potion is a kind of potion. | C# 4 |
| 6 | C | A doesn't compile (CS0070); B subscribes again every frame, so one death plays the sound hundreds of times; D's lambda is a new method, so its `-=` takes nothing off. | C# 8 |
| 7 | — | Add the Results scene to the Scene List, in **File → Build Profiles**: code can only load a scene that's in it. | C# 11 |
| 8 | B | The time scale belongs to the whole game, not to a scene: set it back to 1 before loading. `Update` and the UI keep running; animations and particles on scaled time don't. | C# 11 |
| 9 | — | 1 a `static` property: it's for this run only. 2 PlayerPrefs: a small setting. 3 a JSON file: game data, with a list in it. | C# 13 |
| 10 | `Laps: 6` | With domain reload off, a static keeps last run's value: 3, then 3 more. A `[RuntimeInitializeOnLoadMethod]` reset fixes it. | C# 10 |
| 11 | C | A can't tell which type to make (CS0411); `SaveData` has no constructor that takes text (B); `ToJson` goes the other way, and isn't generic (D). | C# 13 |
| 12 | D | The reference isn't the action: its `.action` is (A is CS1061). B doesn't say which type to read; C: `performed` is an event. | C# 14 |
| 13 | B | A Canvas Group's **Alpha** fades it and everything under it, and **Blocks Raycasts** stops the clicks. The others lay out or clip. | C# 11 |
| 14 | C | Shared data that a designer tunes, and that doesn't change while playing, goes in an asset; what changes belongs on the object. In A, changes made while playing stay in the asset. | C# 5 |
| 15 | D | They share a capability, not code, and none is a kind of another. A is impossible: a class has one base class, and theirs is `MonoBehaviour`. | C# 7 |
| 16 | A | An interface has no fields and no bodies (C), and is implemented without `override` (D). | C# 7 |
| 17 | `6 0 1` | `stock["Lemon"] = 6` replaces the 4; Mango is removed, so `TryGetValue` gives 0; one pair is left. | C# 6 |
| 18 | — | 1 a `Queue`; 2 a `Stack`; 3 a `Dictionary<string, Card>`; 4 an array. | C# 6 |
| 19 | — | 1 `int`; 2 `float`; 3 `bool`; 4 `string`. | C# 6 |
| 20 | — | A `float` isn't exact: `0.1f` is a little more than 0.1, and ten of them don't land exactly on 0. Count whole hit points in an `int`, or check `<= 0f`. | C# 6 |
| 21 | — | Hide the button in a Web build: a page can't close the browser's tab. `quitButton.SetActive(Application.platform != RuntimePlatform.WebGLPlayer);` | your game's last chapter |
| 22 | B | A build opens with the scene at index 0, in **File → Build Profiles**. The open scene only decides where **Play** starts in the Editor (A). | C# 11 |
| 23 | C | Anchors together at a corner keep the size and the distance from that corner. B and D stretch it. | C# 2 |
| 24 | B | An element scales around its pivot: at (0.5, 0), the bottom edge stays put. A grows it downwards only; anchors don't decide how it scales. | C# 2 |
| 25 | D | Two `int`s divide to a whole number: `3 / 4` is 0 (A), and B casts too late. C sets 3: a full bar. | C# 2 |
| 26 | — | Set the text only when the coins change: the wallet raises an event, and the counter listens. Every frame makes a new string and rebuilds the Canvas, for nothing. | C# 2 |
| 27 | A | A `for` loop has one `i`, read when the button is clicked: `fruits.Length` by then, past the end, so B throws an `IndexOutOfRangeException`. The copy gives each lambda its own. C and D don't compile. | C# 8 |
| 28 | A | A UnityEvent is wired in the Inspector, so a designer can change it. B is wired in code; C checks every frame for nothing; D ties the script to one panel. | C# 8 |
| 29 | B | The second argument, `this`, is the context: click the message, and that kart lights up. | C# 19 |
| 30 | `Added 4`, `Skipped x` (a warning), `Added 6`, `Total: 10` | `int.Parse("x")` throws before its `Debug.Log` runs; the `catch` logs, and the loop goes on. | C# 12 |
| 31 | — | `Produce` takes a `float` here, and an `int` in `Generator`. So it overrides nothing (CS0115), and `Produce(int)` is still missing (CS0534). | C# 19 |
| 32 | — | Add `using JuiceWorks.Shop;` at the top of `Wallet.cs`: the class's full name is now `JuiceWorks.Shop.ShopWindow`. | C# 9 |
| 33 | — | The **Settings Panel** field was left empty in the Inspector. Drag the panel into it. | C# 12 |
| 34 | D | For a missing key, `TryGetValue` returns `false`, and the `out` variable holds its default: `null` for a class. Check the result, and warn about the id. | C# 6 |
| 35 | A | A refactor changes how code is written, never what it does. B, C and D change what the game does. | C# 18 |
| 36 | — | They're lost: Unity saves Inspector values by field name. Add `[FormerlySerializedAs("s")]`, from `UnityEngine.Serialization`, to the field. | C# 18 |
| 37 | — | 1 the Profiler; 2 the Frame Debugger; 3 the Memory Profiler. | C# 17 |
| 38 | B | A still builds a new string every frame; C only measures; D runs just as often. | C# 17 |
| 39 | A | A prefab field typed as a component gives back that component, on the new copy. | C# 3 |
| 40 | — | It's an override, kept by that instance only. Apply it: the **Overrides** drop-down → **Apply All**, or right-click **Value** and apply it to the prefab. | C# 3 |
| 41 | D | A change to Tag reaches everything built on it, but the Sale Tag's own colour, an override, wins. | C# 3 |
| 42 | C | An override applied to Stand reaches every Stand. The Sale Tag isn't a Stand, and Tag is underneath, so it doesn't change. | C# 3 |
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
