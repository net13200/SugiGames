# SugiGames

The home page for the Sugi family of games, sharing the "Sugi" (杉, Japanese for cedar) brand mark with [SugiPaint](https://github.com/net13200/SugiPaint).

It opens with the kanji-painting splash animation, then shows a portal with every game, grouped into three categories:

- **For little ones** (ages 3–5): SugiPaint, Tune Town, אחת שתיים שלוש
- **School skills** (grades 1–2): אלף, אינסוף
- **Puzzles & strategy**: Six Sided Knight, Dancing Chess, Quiver

The home-screen icons (`icon-*.png`, `apple-touch-icon.png`) are the 杉 mark only, rendered from `icon.svg` and `icon-maskable.svg`.

Game icons are copied into `icons/` so the portal doesn't depend on the other sites. To add a game, copy its 192px icon there and add a card to the matching section in `index.html`.

Static site, no build step — just open `index.html`.
