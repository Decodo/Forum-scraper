# Forum Scraper

[![](https://dcbadge.vercel.app/api/server/Ja8dqKgvbZ)](https://discord.gg/Ja8dqKgvbZ)
![TypeScript](https://img.shields.io/badge/typescript-5.x-blue)
![Bun](https://img.shields.io/badge/bun-%3E%3D1.2.5-black)
![License](https://img.shields.io/badge/license-MIT-green)

<p align="center">
<a href="https://dashboard.decodo.com/web-data/pricing?utm_source=github&utm_medium=social&utm_campaign=forum-scraper"><img src="https://github.com/user-attachments/assets/233d4e4e-8f64-4179-a32e-a4b9cf78137f" alt="Decodo Web Data API" /></a>
</p>

Forum Scraper is an open-source scraping and intelligence tool that collects subreddit posts and comments from any topic or search query, then generates AI-powered reports with sentiment analysis, key themes, notable quotes, and top post rankings.

Built for developers, marketers, founders, and researchers, it combines [Decodo Web Data API](https://decodo.com/web-data-api) with LLM-based analysis to turn raw Reddit discussions into structured, actionable insights without manual browsing.

## Features

- **Scrape subreddits, posts, and comments**. Collect discussions from any topic, keyword, or search query.
- **AI-powered executive summaries**. Generate structured overviews of what Reddit users are saying.
- **Sentiment analysis**. Understand whether discussions are positive, negative, or mixed.
- **Key theme extraction**. Identify recurring talking points and dominant discussion patterns.
- **Notable quotes and insights**. Surface representative or impactful Reddit comments automatically.
- **Top post ranking**. Highlight the most relevant and upvoted posts across scraped results.
- **Markdown and JSON export**. Download structured reports for further analysis or sharing.

## How it works

<img width="702" height="352" alt="Untitled-2" src="https://github.com/user-attachments/assets/8070a7bf-23fe-4d55-be9d-1875bf284ed8" />

1. **Enter a topic**. Provide a prompt or research question such as "What do developers think about AI coding tools?".

2. **Adjust analysis options**. Optionally specify subreddits, choose a time range, and control how many Reddit posts should be analyzed.

3. **Review the scraping plan**. The LLM suggests relevant subreddits and search queries before scraping begins. You can review and edit the generated plan before running it.

4. **Generate an intelligence report**. Reddit posts and comments are scraped through the Decodo Web Data API, then analyzed by the LLM to produce a structured report with summaries, themes, sentiment analysis, notable quotes, and top discussions.

5. **Export the results**. Download the generated report as Markdown or JSON for further analysis, reporting, or sharing.

## Example report

<details>
<summary>View example JSON report snippet</summary>

```json
{
  "id": "6a10077369749f74ff595437",
  "plan": {
    "prompt": "What do developers think about AI coding tools?",
    "subreddits": [
      "webscraping",
      "llms",
      "automation",
      "MachineLearning"
    ],
    "queries": [
      "What do developers think about AI coding tools?",
      "\"AI coding tools\"",
      "developers opinion AI"
    ],
    "timeRange": "month",
    "maxPosts": 50
  },
  "posts": [
    {
      "id": "1px1agd",
      "title": "[D] r/MachineLearning - a year in review",
      "subreddit": "MachineLearning",
      "author": "Everlier",
      "upvotes": 202,
      "commentCount": 16,
      "url": "https://www.reddit.com/r/MachineLearning/comments/1px1agd/d_rmachinelearning_a_year_in_review/",
      "selftext": "This is a review of most upvoted posts on this sub in 2025, loosely grouped into high-level themes...",
      "createdAt": 1766851467
    },
    {
      "id": "1tibgp5",
      "title": "I built klura, a toolkit for an AI agent to reverse-engineer websites",
      "subreddit": "webscraping",
      "author": "rundfunk",
      "upvotes": 50,
      "commentCount": 19,
      "url": "https://github.com/klura-ai/klura",
      "selftext": "I've been working on klura — a free toolkit that gives a coding agent the ability to reverse-engineer a website...",
      "createdAt": 1779252926
    },
    {
      "id": "1qhbbll",
      "title": "Software development ISN'T CHEAP! You might have unrealistic expectations for AI systems.",
      "subreddit": "automation",
      "author": "kshoneesh_chaudhary",
      "upvotes": 10,
      "commentCount": 14,
      "url": "https://www.reddit.com/r/automation/comments/1qhbbll/software_development_isnt_cheap_you_might_have/",
      "selftext": "AI has made it easier to build software, but it’s not as if you can magically do months worth of coding in days...",
      "createdAt": 1768845240
    },
    {
      "id": "1t9q58x",
      "title": "🚨 Scrapling v0.4.8 is out with a new insane update🕷️",
      "subreddit": "webscraping",
      "author": "0xReaper",
      "upvotes": 187,
      "commentCount": 16,
      "url": "https://github.com/D4Vinci/Scrapling/releases/tag/v0.4.8",
      "selftext": "Introducing the new spiders templates feature to make generic spiders easier...",
      "createdAt": 1778466134
    }
  ]
}
```

</details>

<details>
<summary>View example report interface</summary>
<p align="left">
  <img
    src="./.github/images/reddit-intelligence-report.png"
    alt="Reddit intelligence report screenshot"
    width="700"
  />
</p>
</details>

## Prerequisites

- [Bun](https://bun.sh) version 1.2.5 or newer
- [Docker](https://docker.com) for running local MongoDB and Redis instances
- A Decodo Web Data API token – create an account at [dashboard.decodo.com](https://dashboard.decodo.com/register)
- At least one supported LLM provider API key:
  - Anthropic
  - OpenAI
  - Google Gemini

> If you've just installed Bun, open a new terminal window or reload your shell configuration before running `bun install`.
>
> Example:
> - zsh: `source ~/.zshrc`
> - bash: `source ~/.bashrc`


## Installation

### 1. Clone the repository

```bash
git clone https://github.com/Decodo/forum-scraper
cd forum-scraper
```

### 2. Install dependencies

```bash
bun install
```

### 3. Configure environment variables

```bash
cp .env.example .env
```

Add your:
- Decodo Web Data API key
- LLM provider selection
- Anthropic, OpenAI, or Gemini API key

### 4. Start local databases

```bash
bun db:up
```

This starts MongoDB and Redis through Docker Compose.

### 5. Start the Forum Scraper

```bash
bun dev
```

Frontend:

```text
http://localhost:5274
```

Backend API:

```text
http://localhost:5002
```

## Configuration

After creating your `.env` file during installation, add your API credentials and provider settings:

```env
# Decodo Web Data API
# Paste your API key without the "Bearer" prefix.
DECODO_API_KEY=your_decodo_api_key

# LLM provider (claude | openai | gemini)
LLM_PROVIDER=claude
LLM_MODEL=

# LLM API keys
ANTHROPIC_API_KEY=sk-ant-...
OPENAI_API_KEY=sk-...
GEMINI_API_KEY=AIza...
```

### Environment variables

| Variable | Description |
| --- | --- |
| `DECODO_API_KEY` | Decodo Web Data API key, without the `Bearer` prefix |
| `LLM_PROVIDER` | LLM provider to use (`claude`, `openai`, or `gemini`) |
| `LLM_MODEL` | Optional custom model override |
| `ANTHROPIC_API_KEY` | Anthropic API key |
| `OPENAI_API_KEY` | OpenAI API key |
| `GEMINI_API_KEY` | Google Gemini API key |

## Scripts

| Command | Description |
| --- | --- |
| `bun dev` | Start frontend and backend development servers |
| `bun build` | Build all application packages |
| `bun lint` | Run linting across all packages |
| `bun db:up` | Start MongoDB and Redis via Docker Compose |
| `bun db:down` | Stop local database containers |

## Tech stack

| Layer | Technology |
| --- | --- |
| Frontend | React 19, TanStack Router, TanStack Query, Tailwind CSS v4, Radix UI |
| Backend | NestJS 11, MongoDB, Mongoose |
| Scraping | Decodo Web Data API |
| LLMs | Anthropic Claude, OpenAI GPT, Google Gemini |

## Project structure

```text
.github/
  images/         # README screenshots and repository assets

apps/
  frontend/
    src/
      features/
        tracker/      # Prompt flow, report generation, API hooks
        queries/      # Query history features
        settings/     # Runtime settings and API key management

      routes/
        _layout/
          tracker.tsx
          history.tsx
          history.$id.tsx
          settings.tsx

  backend/
    src/
      features/
        tracker/      # Scraping and report generation endpoints
        decodo/       # Decodo Web Data API integration
        llm/          # Claude, OpenAI, and Gemini abstraction layer
        queries/      # Query history persistence
        settings/     # Runtime provider and API configuration

  shared/
    # Shared TypeScript types

docs/
```

## Documentation

For additional information about scraping targets, parameters, and API behavior, see the [Decodo Web Data API documentation](https://help.decodo.com/docs/web-data-api-introduction).

## API endpoints

| Method | Path | Description |
| --- | --- | --- |
| POST | `/tracker/plan` | Generate a scraping plan from a user prompt |
| POST | `/tracker/analyze` | Scrape Reddit and generate an AI report |
| GET | `/queries` | List saved query history |
| GET | `/queries/:id` | Retrieve a full query result |
| DELETE | `/queries/:id` | Delete a saved query |
| GET | `/settings` | Retrieve current provider and API key status |
| PATCH | `/settings` | Update API keys or LLM provider |

## Scraping strategy

Forum Scraper retrieves Reddit JSON endpoints through the Web Data API using the `universal` target:

| Step | Reddit URL pattern | Purpose |
| --- | --- | --- |
| 1 | `/search.json` | Search Reddit for relevant posts across subreddits |
| 2 | `/r/{subreddit}/comments/{postId}.json` | Retrieve comment threads for the top-ranked posts |

The LLM suggests subreddits and search queries based on the user's prompt. The analysis currently performs site-wide search queries, then collects up to 30 posts, deduplicates and ranks them for relevance, and retrieves full comment threads for up to 8 top posts before LLM summarization. The code also provides a subreddit hot-feed method, but the main analysis workflow does not call it.

## Related repositories

- [Decodo Web Data API documentation](https://help.decodo.com/docs/web-data-api-introduction)
- [Decodo Stack Overflow Trends Monitor](https://github.com/Decodo/stackoverflow-trends-monitor)
- [Decodo GitHub Research](https://github.com/Decodo/github-research)
- [Decodo SDK for TypeScript](https://github.com/Decodo/sdk-ts)
- [Decodo MCP Server](https://github.com/Decodo/mcp-server)
- [Decodo OpenClaw Skill](https://github.com/Decodo/decodo-openclaw-skill) 

## License

MIT — see [LICENSE](LICENSE)
