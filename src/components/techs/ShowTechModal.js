import React, { useState, useEffect, Fragment } from 'react'
import PreLoader from '../../components/layouts/PreLoader'
import { connect } from 'react-redux'
import { getTechs, deleteTech } from '../../actions/techActions'

const ShowTechModal = ({ deleteTech, getTechs, tech: { techs, loading } }) => {
  // const getTechs = async () => {
  //   setLoading(true)
  //   const res = await fetch('/techs')
  //   const data = await res.json()
  //   setTechList(data)
  //   setLoading(false)
  // }

  // const [techList, setTechList] = useState([])
  // const [loading, setLoading] = useState(false)

  // useEffect(() => {
  //   getTechs()
  //   // eslint-disbale-next-line
  // }, [])

  if (loading) {
    return <PreLoader />
  }
  // sn ma 2 min aankh band karke letraha sir ma dard ok ok //ye sb fetch tmnay yahi kriliya?
  return (
    <div id='tech-list-modal' className='modal'>
      <div className='modal-content'>
        <h4>Technician List</h4>
        <ul className='collection'>
          {!loading &&
            techs !== null &&
            techs.map((tech) => (
              <li className='collection-item' key={tech.id}>
                <div>
                  {tech.firstName} {tech.lastName}
                  <a
                    href='#!'
                    className='secondary-content'
                    onClick={() => deleteTech(tech.id)}
                  >
                    <i className='material-icons grey-text'>delete</i>
                  </a>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  tech: state.tech,
})

export default connect(mapStateToProps, { getTechs, deleteTech })(ShowTechModal)
