import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getFilteredCategory } from '../api'
import { Preloader } from '../components/Preloader'
import { MealList } from '../components/MealList'

function Category() {
  const { name } = useParams()
  const [meals, setMeals] = useState([])
  const  goBack  = useNavigate()

  const click = () => {
    goBack('')
  }

  useEffect(() => {
    getFilteredCategory(name).then((data) => setMeals(data.meals))
  }, [name])

  return (
    <>
      <button className="btn" onClick={click}>
        Go Back
      </button>
      {!meals.length ? <Preloader /> : <MealList meals={meals} />}
    </>
  )
}

export { Category }
