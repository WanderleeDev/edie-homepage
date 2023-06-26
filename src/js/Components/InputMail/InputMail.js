import '../../../scss/components/inputMail.scss';

const InputMail = `
  <label class="label" for="mail">
    <p class="label-info">
      Want us to contact you?
    </p>
    <div class="label-containerInputs">
      <input placeholder="Email" class="label-inputMail" type="mail" id="mail">
      <input class="label-inputSubmit" type="submit" value="Join">
    </div>
  </label>
`;

export default InputMail.trim();