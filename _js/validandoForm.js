const emailInput = document.getElementById('caixa_email');
const submitButton = document.querySelector('.btn_novidades');
const modalContainer = document.querySelector('.modal-container'); 
const msgError = document.querySelector('.msg_error_email');

emailInput.addEventListener('input', () => {
  if (!emailInput.checkValidity()) {
    submitButton.disabled = true;
    msgError.innerHTML = 'Por favor, preencha um endereço de e-mail válido.';
  } else {
    submitButton.disabled = false;
    msgError.innerHTML = '';
  }
});

submitButton.addEventListener('click', (event) => {
    event.preventDefault();
  if (!emailInput.checkValidity()) {
   msgError.innerHTML = `<span class="msg_error_email"> Por favor, preencha um endereço de e-mail válido</span>`;
    
  } else {
    const modalContent = `
      <div class="modal fade" id="exampleModalNews" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <span class="material-symbols-outlined">
                check_circle
              </span>
              <h5 class="modal-title" id="exampleModalLabel">E-mail cadastrado com sucesso!</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p class="p_modal_novidades">Em breve você receberá novidades exclusivas da Meteora.</p>
            </div>
          </div>
        </div>
      </div>
    `;

    modalContainer.innerHTML = modalContent;

    // Mostrar o modal
    $('#exampleModalNews').modal('show');
  }
});



