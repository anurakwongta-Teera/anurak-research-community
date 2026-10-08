# Website photographs

- `temporary/`: licensed stock photographs for design review.
- `approved/`: authentic researcher-approved team and activity photographs.
- `src/data/images.ts`: paths, alt text, credits, source, dimensions, crop position, and temporary status.
- `src/data/home.ts`: homepage hero and focus-area copy.

## Temporary photographs

Downloaded 2026-10-08 under the [Pexels License](https://www.pexels.com/license/) (free website use and modification; attribution appreciated).

| File                   | Photographer        | Source                                                                               |
| ---------------------- | ------------------- | ------------------------------------------------------------------------------------ |
| mountain-fieldwork.jpg | Xuân Thống Trần     | https://www.pexels.com/photo/man-carrying-a-backpack-13660339/                       |
| laboratory.jpg         | Polina Tankilevitch | https://www.pexels.com/photo/scientist-in-laboratory-3735707/                        |
| village-community.jpg  | Dio Alif Utomo      | https://www.pexels.com/photo/community-gathering-in-a-rural-village-street-36596582/ |

These stock scenes do not show Anurak Wongta, his team, or verified research activities. The mountain location is not verified as Northern Thailand; the community photograph is from Indonesia. They are explicitly temporary visual substitutes, not evidence of local research. No screenshot from the design reference is used as an asset.

JPEGs are compressed, locally hosted, and cropped only with CSS. Never imply endorsement by the depicted people.

## Actual photographs needed

1. A wide Chiang Mai/Mae Rim mountain or agricultural valley panorama, ideally with an authorized male researcher photographed from behind on the right. Leave the left half open for white text. Suggested source width: 1920–2400px.
2. An approved environmental-health fieldwork/group photograph in Northern Thailand.
3. Practical measurement equipment or gloved hands performing an approved laboratory demonstration.
4. A consented Thai community discussion or collaboration photograph.

## Replacement workflow

1. Obtain photographer permission and appropriate public-use consent for identifiable people. Exclude private participant information.
2. Add compressed JPG/WebP files to `approved/` (1920px wide for hero; 1200px for cards).
3. Update the matching registry entry's `src`, accurate `alt`, `credit`, `provider`, public `source`, `width`, `height`, `position`, and `temporary: false`.
4. Update the homepage disclosure to describe any remaining stock photography. Hero framing is controlled by `.photo-hero .hero-photo img` in `visual-refresh.css`; check both desktop and mobile.
5. Run check, build, and tests; inspect crops and submit the same review workflow. Publish only after researcher approval.
