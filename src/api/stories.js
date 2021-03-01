/**
 * Mocking client-server processing
 */
import _stories from './blog-posts.json'

const TIMEOUT = 100

export default {
  fetchStories: (cb, timeout) => setTimeout(() => {
    fetch('https://restedblog.herokuapp.com/umasubramanian/api/')
      .then(response => response.json())
      .then((result) => cb(result))
  }, timeout || TIMEOUT),

  createStory: (newEntry, cb, timeout) => setTimeout(() => {
    fetch('https://restedblog.herokuapp.com/umasubramanian/api/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: newEntry.title,
        text: newEntry.text
      })
    })
      .then(response => response.json())
      .then((result) => cb(result))
  }, timeout || TIMEOUT),

  deleteStory: (entry, cb, timeout) => setTimeout(() => {
    fetch(`https://restedblog.herokuapp.com/umasubramanian/api/${entry.id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
      .then((response) => cb(response))
  }, timeout || TIMEOUT),

  updateStory: (entry, cb, timeout) => setTimeout(() => {
    fetch(`https://restedblog.herokuapp.com/umasubramanian/api/${entry.id}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: entry.title,
        text: entry.text
      })
    })
      .then(response => response.json())
      .then((result) => cb(result))
  }, timeout || TIMEOUT)
}
