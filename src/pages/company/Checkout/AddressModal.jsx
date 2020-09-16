import React from 'react';
import Modal from 'react-modal';
import { useFormik } from 'formik';

import ButtonBasic from '../../../components/ButtonBasic';

const AddressModal = ({ modalIsOpen, closeModal, onSubmit }) => {

  const { handleChange, handleSubmit, values, errors, touched } = useFormik({
    initialValues: {
      cep: '',
      rua: '',
      num: '',
      bairro: '',
      cidade: '',
      estado: '',
      complemento: '',
      descricao: '',
      cobranca: true,
    },
    onSubmit: onSubmit
  });

  return(
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Novo endereço"
      className="modal-new-address"
    >
      <div className="container-address">
        <h2>Cadastrar endereço</h2>
        <form onSubmit={handleSubmit} className="form-new-address">
          <div className="form-group rua">
            <label htmlFor="rua">
              Rua
              {errors.rua && touched.rua ? <span className="label-error">{errors.rua}</span> : ''}
            </label>
            <input 
              type="text" 
              className={`form-input ${!errors.rua ? '' : 'error'}`}
              name="rua" 
              onChange={handleChange} 
              value={values.rua} 
            />
          </div>
          <div className="form-group numero">
            <label htmlFor="num">
              Número
              {errors.num && touched.num ? <span className="label-error">{errors.num}</span> : ''}
            </label>
            <input 
              type="text" 
              className={`form-input ${!errors.num ? '' : 'error'}`}
              name="num" 
              onChange={handleChange} 
              value={values.num} 
            />
          </div>
          <div className="form-group complemento">
            <label htmlFor="complemento">
              Complemento
              {errors.complemento && touched.complemento ? <span className="label-error">{errors.complemento}</span> : ''}
            </label>
            <input 
              type="text" 
              className={`form-input ${!errors.complemento ? '' : 'error'}`}
              name="complemento" 
              onChange={handleChange} 
              value={values.complemento} 
            />
          </div>
          <div className="form-group cep">
            <label htmlFor="cep">
              Cep
              {errors.cep && touched.cep ? <span className="label-error">{errors.cep}</span> : ''}
            </label>
            <input 
              type="text" 
              className={`form-input ${!errors.cep ? '' : 'error'}`}
              name="cep" 
              onChange={handleChange} 
              value={values.cep} 
            />
          </div>
          <div className="form-group bairro">
            <label htmlFor="bairro">
              Bairro
              {errors.bairro && touched.bairro ? <span className="label-error">{errors.bairro}</span> : ''}
            </label>
            <input 
              type="phone" 
              className={`form-input ${!errors.bairro ? '' : 'error'}`}
              name="bairro" 
              onChange={handleChange} 
              value={values.bairro} 
            />
          </div>
          <div className="form-group cidade">
            <label htmlFor="cidade">
              Cidade
              {errors.cidade && touched.cidade ? <span className="label-error">{errors.cidade}</span> : ''}
            </label>
            <input 
              type="text" 
              className={`form-input ${!errors.cidade ? '' : 'error'}`}
              name="cidade" 
              onChange={handleChange} 
              value={values.cidade} 
            />
          </div>
          <div className="form-group estado">
            <label htmlFor="estado">
              Estado
              {errors.estado && touched.estado ? <span className="label-error">{errors.estado}</span> : ''}
            </label>
            <input 
              type="text" 
              className={`form-input ${!errors.estado ? '' : 'error'}`}
              name="estado" 
              onChange={handleChange} 
              value={values.estado} 
            />
          </div>
          <div className="form-group descricao">
            <label htmlFor="descricao">
              Descricao
              {errors.descricao && touched.descricao ? <span className="label-error">{errors.descricao}</span> : ''}
            </label>
            <input 
              type="text" 
              className={`form-input ${!errors.descricao ? '' : 'error'}`}
              name="descricao" 
              onChange={handleChange} 
              value={values.descricao} 
            />
          </div>
          <div className="form-group cobranca">
            <label htmlFor="cobranca">
              É o endereço de Cobrança
            </label>
            <input 
              type="checkbox" 
              name="cobranca" 
              onChange={handleChange} 
              checked={values.cobranca} 
            />
          </div>
          <div className="form-group envio">
            <ButtonBasic type="submit" className="btn-primary btn-modal-address">Cadastrar</ButtonBasic>
          </div>
        </form>
      </div>
    </Modal>
  )
}

export default AddressModal;
