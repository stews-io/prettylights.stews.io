import { SourceStewConfig } from "stew/config/mod.ts";
import {
  getEmailIconSvg,
  getInstagramIconSvg,
  getTwitterIconSvg,
  getWebsiteIconSvg,
} from "stew/config/helpers/mod.ts";
import { musicDataset } from "./music.dataset.ts";

export default getStewConfig();

function getStewConfig(): SourceStewConfig {
  const plDataset = musicDataset.filter(
    (someMusicItem) =>
      someMusicItem.musicArtist.findIndex(
        (someMusicArtist) => someMusicArtist === "Pretty Lights"
      ) >= 0
  );
  const menertDataset = musicDataset.filter(
    (someMusicItem) =>
      someMusicItem.musicArtist.findIndex(
        (someMusicArtist) => someMusicArtist === "Michal Menert"
      ) >= 0
  );
  const relatedDataset = musicDataset.filter(
    (someMusicItem) =>
      someMusicItem.musicArtist.findIndex(
        (someMusicArtist) =>
          someMusicArtist === "Break Science" ||
          someMusicArtist === "Paul Basic" ||
          someMusicArtist === "Eliot Lipp" ||
          someMusicArtist === "Paper Diamond" ||
          someMusicArtist === "Motifv" ||
          someMusicArtist === "Gramatik" ||
          someMusicArtist === "SuperVision" ||
          someMusicArtist === "Borahm Lee" ||
          someMusicArtist === "Chris Karns"
      ) >= 0
  );
  return {
    stewInfo: {
      stewName: "pl-archive",
      stewTagline: "worldwide official",
      stewMessage: "the time has come for bad things to end...",
      stewExternalLinks: [
        {
          linkLabel: "website",
          linkHref: "http://prettylightsmusic.com",
          linkIconSvg: getWebsiteIconSvg(),
        },
        {
          linkLabel: "twitter",
          linkHref: "https://twitter.com/prettylights",
          linkIconSvg: getTwitterIconSvg(),
        },
        {
          linkLabel: "instagram",
          linkHref: "https://www.instagram.com/prettylights/",
          linkIconSvg: getInstagramIconSvg(),
        },
        {
          linkLabel: "email",
          linkHref: "mailto:pl-archive@stews.io",
          linkIconSvg: getEmailIconSvg(),
        },
      ],
    },
    stewSegments: [
      {
        segmentDataset: plDataset,
        segmentModulePath: "./music.module.ts",
        segmentKey: "pl",
        segmentLabel: "pl",
        segmentViews: [
          {
            viewKey: "all",
            viewLabel: "all",
            viewItemIds: plDataset.map((somePlItem) => somePlItem.itemId),
          },
          {
            viewKey: "soundship",
            viewLabel: "soundship",
            viewItemIds: plDataset.reduce<Array<number>>(
              (viewItemsIdsResult, somePlItem) => {
                if (
                  somePlItem.musicTags.findIndex(
                    (someMusicTag) => someMusicTag === "soundship spacesystem"
                  ) >= 0
                ) {
                  viewItemsIdsResult.push(somePlItem.itemId);
                }
                return viewItemsIdsResult;
              },
              []
            ),
          },
          {
            viewKey: "discography",
            viewLabel: "discography",
            viewItemIds: plDataset.reduce<Array<number>>(
              (viewItemsIdsResult, somePlItem) => {
                if (
                  somePlItem.musicTags.findIndex(
                    (someMusicTag) => someMusicTag === "discography"
                  ) >= 0
                ) {
                  viewItemsIdsResult.push(somePlItem.itemId);
                }
                return viewItemsIdsResult;
              },
              []
            ),
          },
          {
            viewKey: "unreleased",
            viewLabel: "unreleased",
            viewItemIds: plDataset.reduce<Array<number>>(
              (viewItemsIdsResult, somePlItem) => {
                if (
                  somePlItem.musicTags.findIndex(
                    (someMusicTag) => someMusicTag === "unreleased"
                  ) >= 0
                ) {
                  viewItemsIdsResult.push(somePlItem.itemId);
                }
                return viewItemsIdsResult;
              },
              []
            ),
          },
          {
            viewKey: "shows",
            viewLabel: "shows",
            viewItemIds: plDataset.reduce<Array<number>>(
              (viewItemsIdsResult, somePlItem) => {
                if (
                  somePlItem.sourceType === "mix" &&
                  somePlItem.recordingContext.findIndex(
                    (someRecordingContextItem) =>
                      someRecordingContextItem === "concert"
                  ) >= 0
                ) {
                  viewItemsIdsResult.push(somePlItem.itemId);
                }
                return viewItemsIdsResult;
              },
              []
            ),
          },
          {
            viewKey: "oh-gee",
            viewLabel: "oh gee",
            viewItemIds: plDataset.reduce<Array<number>>(
              (viewItemsIdsResult, somePlItem) => {
                if (
                  somePlItem.musicTags.findIndex(
                    (someMusicTag) => someMusicTag === "o.g."
                  ) >= 0
                ) {
                  viewItemsIdsResult.push(somePlItem.itemId);
                }
                return viewItemsIdsResult;
              },
              []
            ),
          },
        ],
      },
      {
        segmentDataset: menertDataset,
        segmentModulePath: "./music.module.ts",
        segmentKey: "menert",
        segmentLabel: "menert",
        segmentViews: [
          {
            viewKey: "all",
            viewLabel: "all",
            viewItemIds: menertDataset.map(
              (someMusicItem) => someMusicItem.itemId
            ),
          },
          {
            viewKey: "discography",
            viewLabel: "discography",
            viewItemIds: menertDataset.reduce<Array<number>>(
              (viewItemsIdsResult, someMenertItem) => {
                if (
                  someMenertItem.musicTags.findIndex(
                    (someMusicTag) => someMusicTag === "discography"
                  ) >= 0
                ) {
                  viewItemsIdsResult.push(someMenertItem.itemId);
                }
                return viewItemsIdsResult;
              },
              []
            ),
          },
        ],
      },
      {
        segmentDataset: relatedDataset,
        segmentModulePath: "./music.module.ts",
        segmentKey: "related",
        segmentLabel: "related",
        segmentViews: [
          {
            viewKey: "all",
            viewLabel: "all",
            viewItemIds: relatedDataset.map(
              (someMusicItem) => someMusicItem.itemId
            ),
          },
          {
            viewKey: "breakscience",
            viewLabel: "break science",
            viewItemIds: relatedDataset.reduce<Array<number>>(
              (viewItemsIdsResult, someRelatedItem) => {
                if (
                  someRelatedItem.musicArtist.findIndex(
                    (someArtistItem) =>
                      someArtistItem === "Break Science" ||
                      someArtistItem === "Borahm Lee"
                  ) >= 0
                ) {
                  viewItemsIdsResult.push(someRelatedItem.itemId);
                }
                return viewItemsIdsResult;
              },
              []
            ),
          },
          {
            viewKey: "karns",
            viewLabel: "karns",
            viewItemIds: relatedDataset.reduce<Array<number>>(
              (viewItemsIdsResult, someRelatedItem) => {
                if (
                  someRelatedItem.musicArtist.findIndex(
                    (someArtistItem) => someArtistItem === "Chris Karns"
                  ) >= 0
                ) {
                  viewItemsIdsResult.push(someRelatedItem.itemId);
                }
                return viewItemsIdsResult;
              },
              []
            ),
          },
          {
            viewKey: "motifv",
            viewLabel: "motifv",
            viewItemIds: relatedDataset.reduce<Array<number>>(
              (viewItemsIdsResult, someRelatedItem) => {
                if (
                  someRelatedItem.musicArtist.findIndex(
                    (someArtistItem) => someArtistItem === "Motifv"
                  ) >= 0
                ) {
                  viewItemsIdsResult.push(someRelatedItem.itemId);
                }
                return viewItemsIdsResult;
              },
              []
            ),
          },
          {
            viewKey: "paulbasic",
            viewLabel: "paul basic",
            viewItemIds: relatedDataset.reduce<Array<number>>(
              (viewItemsIdsResult, someRelatedItem) => {
                if (
                  someRelatedItem.musicArtist.findIndex(
                    (someArtistItem) => someArtistItem === "Paul Basic"
                  ) >= 0
                ) {
                  viewItemsIdsResult.push(someRelatedItem.itemId);
                }
                return viewItemsIdsResult;
              },
              []
            ),
          },
          {
            viewKey: "eliotlipp",
            viewLabel: "eliot lipp",
            viewItemIds: relatedDataset.reduce<Array<number>>(
              (viewItemsIdsResult, someRelatedItem) => {
                if (
                  someRelatedItem.musicArtist.findIndex(
                    (someArtistItem) => someArtistItem === "Eliot Lipp"
                  ) >= 0
                ) {
                  viewItemsIdsResult.push(someRelatedItem.itemId);
                }
                return viewItemsIdsResult;
              },
              []
            ),
          },
          {
            viewKey: "supervision",
            viewLabel: "supervision",
            viewItemIds: relatedDataset.reduce<Array<number>>(
              (viewItemsIdsResult, someRelatedItem) => {
                if (
                  someRelatedItem.musicArtist.findIndex(
                    (someArtistItem) => someArtistItem === "SuperVision"
                  ) >= 0
                ) {
                  viewItemsIdsResult.push(someRelatedItem.itemId);
                }
                return viewItemsIdsResult;
              },
              []
            ),
          },
        ],
      },
    ],
  };
}
