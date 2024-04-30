import React, { useState } from "react";

interface Experiencia {
  local: string;
  cargo: string;
  descricao: string;
  inicio: string;
  fim: string;
}

interface FormExperienciasProps {
  experiencias: Experiencia[];
  setExperiencias: React.Dispatch<React.SetStateAction<Experiencia[]>>;
}

function FormExperiencias({ experiencias, setExperiencias }: FormExperienciasProps) {
  const [novaExperiencia, setNovaExperiencia] = useState<Experiencia>({
    local: '',
    cargo: '',
    descricao: '',
    inicio: '',
    fim: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNovaExperiencia((prevExperiencia) => ({
      ...prevExperiencia,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setExperiencias((prevExperiencias) => [...prevExperiencias, novaExperiencia]);
    setNovaExperiencia({
      local: '',
      cargo: '',
      descricao: '',
      inicio: '',
      fim: ''
    });
  };

  return (
    <div className="container">
      <h1>Experiencias</h1>
      <div className="mb-3">
        <h4>Experiências cadastradas:</h4>
        <ul>
          {experiencias.map((experiencia, index) => (
            <li key={index}>
              <strong>Local:</strong> {experiencia.local}<br />
              <strong>Cargo:</strong> {experiencia.cargo}<br />
              <strong>Descrição:</strong> {experiencia.descricao}<br />
              <strong>Início:</strong> {experiencia.inicio}<br />
              <strong>Fim:</strong> {experiencia.fim}
            </li>
          ))}
        </ul>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            name="local"
            value={novaExperiencia.local}
            onChange={handleChange}
            placeholder="Local"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="cargo"
            value={novaExperiencia.cargo}
            onChange={handleChange}
            placeholder="Cargo"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <textarea
            name="descricao"
            value={novaExperiencia.descricao}
            onChange={handleChange}
            placeholder="Descrição"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <input
            type="date"
            name="inicio"
            value={novaExperiencia.inicio}
            onChange={handleChange}
            placeholder="Início"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <input
            type="date"
            name="fim"
            value={novaExperiencia.fim}
            onChange={handleChange}
            placeholder="Fim"
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">Adicionar Experiência</button>
      </form>
    </div>
  );
}

export default FormExperiencias;
