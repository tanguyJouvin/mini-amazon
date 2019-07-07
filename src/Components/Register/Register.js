import React from "react";

function Register() {
  return (
    <div>
      <form className="mt-5">
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputEmail4">Email</label>
            <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
          </div>
          <div class="form-group col-md-6">
            <label for="inputPassword4">Mot de passe</label>
            <input type="password" class="form-control" id="inputPassword4" placeholder="mot de passe" />
          </div>
        </div>
        <div class="form-group">
          <label for="inputAddress">Adresse 1</label>
          <input type="text" class="form-control" id="inputAddress" placeholder="22 route..." />
        </div>
        <div class="form-group">
          <label for="inputAddress2">Adresse 2</label>
          <input type="text" class="form-control" id="inputAddress2" placeholder="Appartment, studio ou étage" />
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputCity">Ville</label>
            <input type="text" class="form-control" id="inputCity" />
          </div>
          <div class="form-group col-md-4">
            <label for="inputState">Région</label>
            <select id="inputState" class="form-control">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div class="form-group col-md-2">
            <label for="inputZip">Code Postal</label>
            <input type="text" class="form-control" id="inputZip" />
          </div>
        </div>
        <div class="form-group">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck" />
            <label class="form-check-label" for="gridCheck">
              Se souvenir de moi
            </label>
          </div>
        </div>
        <button type="submit" class="btn btn-primary">Enregistrer</button>
      </form>
      
    </div>
  )

}
export default Register;