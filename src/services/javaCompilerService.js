const PISTON_URL = 'https://emkc.org/api/v2/piston/execute';

export async function runJavaCode(code) {
  const response = await fetch(PISTON_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      language: 'java',
      version: '15.0.2',
      files: [{ content: code }],
    }),
  });

  if (!response.ok) {
    throw new Error(`Execution request failed with status ${response.status}`);
  }

  const payload = await response.json();
  const compileOutput = payload.compile?.output ?? '';
  const runOutput = payload.run?.output ?? '';

  return {
    compileOutput,
    runOutput,
    output: `${compileOutput}${runOutput}`.trim() || 'Program executed with no output.',
  };
}
