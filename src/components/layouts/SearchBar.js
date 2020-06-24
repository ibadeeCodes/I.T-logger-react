import React, { useState, useEffect } from 'react'
import { searchLog } from '../../actions/logActions'
import { connect } from 'react-redux'

const SearchBar = ({ searchLog }) => {
  const [search, setSearch] = useState('')

  // Way = 1
  useEffect(() => {
    searchLog(search)
  }, [search])

  // Way = 2
  // const onSearch = (e) => {
  //   setSearch(e.target.value)
  //   searchLog(e.target.value)
  // }

  return (
    <nav style={{ marginBottom: '30px' }} className='blue'>
      <div className='nav-wrapper'>
        <form>
          <div className='input-field'>
            <input
              id='search'
              type='search'
              required
              value={search}
              // onChange={onSearch}
              onChange={(e) => setSearch(e.target.value)}
            />
            <label className='label-icon' htmlFor='search'>
              <i className='material-icons'>search</i>
            </label>
            <i className='material-icons'>close</i>
          </div>
        </form>
      </div>
    </nav>
  )
}

export default connect(null, { searchLog })(SearchBar)
