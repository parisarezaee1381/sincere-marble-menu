# Sincere Marble Menu

Build a luxury digital menu website for "Sincere Restaurant" (رستوران سینسیر), a high-end restaurant in Tehran. The entire UI must be in Persian (Farsi) with RTL layout.

Design Direction: "Luxurious Symposium" (ضیافت لوکس)
The visual mood must evoke an ancient Greek symposium—specifically the calm, elegant spirit of Methe, the goddess of drunkenness and companion of Dionysus. Do NOT include any human statues or figures. The feeling should come purely from material, light, and restraint.

Color Palette (Marble & Stone):

Background: #1A1815 (warm dark stone)

Primary text: #E8E0D5 (marble white/cream)

Secondary text: #C9BEB0 (limestone)

Accent (prices, buttons, grape frame): #A68A64 (bronze/patina)

Card surface: #211E1A (slightly lifted from background)

Borders/dividers: #C9BEB0 at 20-30% opacity

Typography:

Section titles: Use a display serif font with wide letter-spacing and light weight to evoke carved inscriptions. For Persian, use "Estedad" or "Vazirmatn" with light weight and tracking.

Body/menu items: Vazirmatn (clean sans-serif).

Prices: Vazirmatn, bold, in bronze accent color.

Layout Structure (NO hero section, NO footer):

Compact Header (Sticky): Small Sincere logo centered. Below it, a horizontal scrollable tab bar for categories: صبحانه | پیش‌غذا | غذای ایرانی | غذای بین‌المللی | دسر | نوشیدنی. Active tab has a thin bronze underline.

Menu Item Cards (List/Grid):

Card background with a very subtle marble texture (3-5% opacity).

Asymmetric image frame (more padding at bottom than top, like a museum frame).

Item name in marble white, description in limestone, price in bronze bold.

Dietary badges (وجترین, تند) as small chips with limestone border, no solid fill.

Divider lines between items: 1px limestone at 20% opacity.

Signature Item Grape Frame (IMPORTANT):
For special/signature dishes ONLY, add a decorative line-art grape vine frame at the four corners of the card. Style: thin 1-1.5px lines in bronze (#A68A64), opacity 40-50%, no fill. The grape clusters should be abstract and elegant, not cartoonish. On mobile, reduce to just two grapes at the top corners.

Lighting & Atmosphere:

A very soft radial gradient from top-left (cream/gold, opacity 5-8%) to simulate candlelight on stone.

Generous negative space between cards (16-24px gap). The design must feel calm and uncrowded.

Interactive States:

Hover on card (desktop): subtle background lift to #262219, image scales to 1.03, price glows softly.

Loading state: A simple SVG animation of a drop of wine falling into a cup (one-time, subtle).

Empty state (e.g., no vegan items): Short text "مِته هنوز جامی برای این بخش پر نکرده" with a thin decorative bronze curve.

Bottom of Page (NO footer):
Just a thin bar with the restaurant address (الهیه، برج افرا) and phone number (۲۲۳۹۱۷۰۶), plus a "بازگشت به بالا" (Back to top) button. Keep it minimal.

Important Constraints:

Mobile-first responsive design.

No statues, no human figures, no Greek meander patterns, no columns.

Use placeholder food images for now (high-quality Unsplash food photos are fine). I will upload the real Sincere Snappfood images later.

The entire experience should feel quiet, warm, and expensive—like a marble table lit by candlelight, waiting for a guest.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/0ce56ef5-c9f3-4124-bbae-9316aa7f2b64).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
