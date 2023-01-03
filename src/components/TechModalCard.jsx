import "../styles/techModal.css";

export default function TechModalCard({ techModalData }) {
  const { title, URL, desc } = techModalData;

  return (
    <div className="techmodal-card">
      <h1>{title}</h1>
      <p>{desc}</p>
      <a href={URL} target="_blank" rel="noreferrer">
        Referral Link...
      </a>
    </div>
  );
}
