
// 1) slugify() 
// function is used to format the url text created by clicking the author and category tag in BlogPostLayout
export function slugify(text) {
   return text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '')
      .replace(/--+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
}

// this function is for formatting the date
export function formatDate(date) {
   return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      timeZone: "UTC",
   })
}


// 2) formatBlogPost
// this is the function for formatting the post, like the url and sort date
export function formatBlogPosts(posts, {
   filterOutDrafts = true,                 // for posts marked as draft: true
   filterOutFuturePosts = true,            // for posts set with date in the future because not yet finished
   sortByDate = true,
   limit = undefined,
} = {}) {

   const filteredPosts = posts.reduce((acc, post) => {
      const { date, draft } = post.frontmatter;
      // filterOutDrafts if true
      if (filterOutDrafts && draft) return acc;

      // filterOutFuturePosts if true
      if (filterOutFuturePosts && new Date(date) > new Date()) return acc;

      // add post to acc
      acc.push(post)

      return acc;
  }, [])

  // sortByDate or randomize
   if (sortByDate) {
      filteredPosts.sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
   } else {
      filteredPosts.sort(() => Math.random() - 0.5)
   }

   // limit if number is passed, passed in where imported this utils function
   if (typeof limit === "number") {
      return filteredPosts.slice(0, limit);
   }
   return filteredPosts;
}


// 3) format Feeds
// this is the function for formatting feeds 
export function formatNews(feeds, {
   sortByDate = true,
   limit = undefined,
} = {}) {

   // make a copy of the json array
   // slice() method return a shallow copy of a portion of an array; no arguments copy the full array 
   const filteredFeeds = feeds.slice();

   // sort() method is a built-in method 
   // will looping through the entire array (but you don't see the loop)
   if (sortByDate) {
      // sorting criterial: two consecutive dates, latter - former; if positive b comes before a
      // negative then do the reversed
      filteredFeeds.sort((a, b) => new Date(b.date) - new Date(a.date));
   } else {
      // randomize the array if false
      filteredFeeds.sort(() => Math.random() - 0.5);
   }

   // apply limit if defined
   if (typeof limit == "number") {
      return filteredFeeds.slice(0, limit);
   }
   return filteredFeeds;
}
