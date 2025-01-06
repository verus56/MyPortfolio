export function extractTweetIds(content: any) {
  let tweetMatches = content.match(/<StaticTweet\sid="[0-9]+"\s\/>/g);
  return tweetMatches?.map((tweet: any) => tweet.match(/[0-9]+/g)[0]) || [];
}

