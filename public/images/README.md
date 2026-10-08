# Website photographs

- `temporary/`: licensed stock photographs used for design review.
- `approved/`: place authentic, researcher-approved team and activity photographs here.
- `src/data/images.ts`: single image registry containing paths, alt text, crop position, temporary status, credit, and source.
- `src/data/home.ts`: homepage content; collection files and existing URLs remain unchanged.

## Current temporary photographs

All three are from Pexels, downloaded 2026-10-08 under https://www.pexels.com/license/ (free website use and modification; attribution appreciated). These are illustrative stock scenes, not records of this researcher's projects or team.

| File           | Photographer        | Original source                                                               |
| -------------- | ------------------- | ----------------------------------------------------------------------------- |
| fieldwork.jpg  | Alesia Gritsuk      | https://www.pexels.com/photo/woman-making-laboratory-tests-in-forest-5595612/ |
| laboratory.jpg | Polina Tankilevitch | https://www.pexels.com/photo/scientist-in-laboratory-3735707/                 |
| community.jpg  | Anna Shvets         | https://www.pexels.com/photo/people-planting-plant-together-5029923/          |

Images are downloaded in compressed JPEG format. Cropping is presentational via CSS object-position; originals are not retouched. Never imply that depicted people endorse this website.

## Replacing images

1. Obtain photographer permission and appropriate consent for identifiable people; do not include participants or sensitive research data without approved public-use permission.
2. Put a compressed JPG/WebP in `approved/` (suggested maximum width 1920px for hero, 1200px for cards).
3. Update the matching registry entry's `src`, accurate `alt`, `credit`, `provider` (or an empty string), public `source`, `width`, `height`, `position`, and `temporary: false`.
4. Adjust homepage photo disclosure/credits to accurately describe any remaining stock images.
5. Run check, build, and tests; inspect desktop/mobile crop and open a PR for researcher review. Do not merge or deploy before approval.
