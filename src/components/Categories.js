import '../styles/Categories.css';


function Categories({categories, activeCategory, setActiveCategory}) {

    return <div className='lmj-categories-list'>
        <div className='lmj-text'>categories : </div>
        <select value={activeCategory} onChange={(e) => setActiveCategory(e.target.value)}>
            <option value=''>---</option>
            {categories.map((category) => (
            <option key={category} value={category}>{category}</option>
            )) }
        </select>
        <button className='lmj-reset-button' onClick={() => setActiveCategory('')}>réinitialiser</button>
    </div>
}


export default Categories