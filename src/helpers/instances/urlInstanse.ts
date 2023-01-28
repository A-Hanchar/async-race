class URLInstanse {
  url: URL

  constructor() {
    this.url = new URL(window.location.href)
  }

  updateURL() {
    this.url = new URL(window.location.href)
  }

  getUrl() {
    this.updateURL()

    return this.url
  }
}

export const urlInstanse = new URLInstanse()
