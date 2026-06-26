Development Flow

- npm run preview
- commit/push changes once satisfied to main 

Flow for gh pages:
- npm run lint (to keep code clean)
- npm run build (creates dist/)
- cp dist/index.html dist/404.html
- npm run preview (runs dist/ locally)
- npm run deploy



New Plan:
- Quotes using an API (currently using a list)
- Checklist (build)
- RSS idea is still ON (look below)


Plan:
Cd timer (done)
use RSS feeds/ APIs/ web scraping for news sources
    - divide into UK, ROI, EU? 
    sources: 
    - https://feeds.bbci.co.uk/news/business/economy/rss.xml
    - https://www.bankofengland.co.uk/rss/news
    - https://www.theguardian.com/business/economics/rss
    - https://news.google.com/rss/search?q=site%3Areuters.com&hl=en-US&gl=US&ceid=US%3Aen
    - https://newsapi.org/
    - https://dashboard.oxylabs.io/
use openAI/gemini API for analysis/summaries/questions
extra section for subject specific resources 
Figure out a way to store key bits


Old Structure:

Top drop down, with mode/section. 
Main: CD timer, quote, reminder?, daily news, ...

Econ: news (econ only), news analysis, question selector, weekly question checklist, q-a-day?

Maths: Topic selector, 5-a-day?, 

CS: not needed tbh

project scrapped for now, last item being worked on: newsFetcher()