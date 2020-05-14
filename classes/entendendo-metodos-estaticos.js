class Article {
  constructor(title, date) {
    this.title = title
    this.date = date
  }

  static compare(firstArticle, secondArticle) {
    return firstArticle.date - secondArticle.date
  }
}

const articles = [
  new Article('HTML', new Date(2019, 1, 1)),
  new Article('CSS', new Date(2019, 0, 1)),
  new Article('JavaScript', new Date(2019, 11, 1)),
]

const sortedArticles = [...articles].sort(Article.compare)
console.log(sortedArticles)
/**
 * [
 *   Article { title: 'CSS', date: 2019-01-01T02:00:00.000Z },
 *   Article { title: 'HTML', date: 2019-02-01T02:00:00.000Z },
 *   Article { title: 'JavaScript', date: 2019-12-01T03:00:00.000Z }
 * ]
 */

console.log(articles)
/**
 * [
 *   Article { title: 'HTML', date: 2019-02-01T02:00:00.000Z },
 *   Article { title: 'CSS', date: 2019-01-01T02:00:00.000Z },
 *   Article { title: 'JavaScript', date: 2019-12-01T03:00:00.000Z }
 * ]
 */
