function Tabs({ tabs, activeTab, onChange }) {
  return (
    <div className="sas-tabs" role="tablist" aria-label="Report views">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          role="tab"
          aria-selected={activeTab === tab.id}
          className={`filter-btn sas-tab${activeTab === tab.id ? ' active' : ''}`}
          onClick={() => onChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

export default Tabs;