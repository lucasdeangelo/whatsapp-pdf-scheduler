document.getElementById('clearFileButton').addEventListener('click', () => {
    const fileInput = document.getElementById('pdfFile');
    fileInput.value = ''; 
  });

document.getElementById('scheduleForm').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const pdfFile = document.getElementById('pdfFile').files[0];
    const chatName = document.getElementById('chatName').value;
    const message = document.getElementById('message').value;
    const time = document.getElementById('time').value;
  
    if (!pdfFile || !chatName || !message || !time) {
      alert('Preencha todos os campos!');
      return;
    }
  
    const formData = new FormData();
    formData.append('pdf', pdfFile);
    formData.append('chatName', chatName);
    formData.append('message', message);
    formData.append('time', time);
  
    const status = document.getElementById('status');
    status.textContent = 'Enviando dados...';
  
    try {
      const response = await fetch('http://localhost:3001/schedule', {
        method: 'POST',
        body: formData
      });
  
      const result = await response.json();
      if (response.ok) {
        status.textContent = `Agendado com sucesso para ${time}!`;
      } else {
        status.textContent = `Erro: ${result.error}`;
      }
    } catch (error) {
      status.textContent = 'Erro ao conectar ao servidor.';
    }
  });