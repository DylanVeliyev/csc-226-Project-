document.getElementById('quizForm').addEventListener('submit', async e => {
  e.preventDefault();
  const form = e.target;
  const data = new URLSearchParams(new FormData(form));

  try {
    const res = await fetch('/api/quiz', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: data
    });
    if (!res.ok) throw new Error(await res.text());
    const { team } = await res.json();
    document.getElementById('result').innerText = `Your team: ${team}`;
  } catch (err) {
    document.getElementById('result').innerText = 'Error: ' + err.message;
  }
});