import { ThumbnailLinksDisplay } from "stew/components/mod.ts";
import { SegmentItemDisplayProps } from "stew/config/mod.ts";
import { MusicItem } from "./MusicItem.ts";

export interface MusicItemDisplayProps
  extends SegmentItemDisplayProps<MusicItem> {}

export function MusicItemDisplay(props: MusicItemDisplayProps) {
  const { someSegmentItem } = props;
  return (
    <ThumbnailLinksDisplay
      itemTitle={someSegmentItem.musicTitle}
      itemThumbnailHref={someSegmentItem.musicThumbnailHref}
      itemLinks={someSegmentItem.externalLinks.map((someMusicLink) => ({
        ...someMusicLink,
        ariaLabel: `listen on ${someMusicLink.linkLabel}`,
        ariaDescription: `a button that navigates in a new tab to ${someSegmentItem.musicTitle} by ${someSegmentItem.musicArtist[0]} on ${someMusicLink.linkLabel}`,
      }))}
      itemLabelLists={[
        {
          ariaLabel: "music title",
          listLabels: [someSegmentItem.musicTitle],
        },
        {
          ariaLabel: "music artist",
          listLabels: someSegmentItem.musicArtist,
        },
        {
          ariaLabel: "music context",
          listLabels: [
            `${
              someSegmentItem.musicYear
            } ${someSegmentItem.recordingContext.join("/")} ${
              someSegmentItem.sourceType === "collection"
                ? someSegmentItem.collectionType
                : someSegmentItem.sourceType
            }${someSegmentItem.musicType === "clip" ? " (clip)" : ""}`,
          ],
        },
        {
          ariaLabel: "music styles",
          listLabels: someSegmentItem.musicTags,
        },
      ]}
    />
  );
}
