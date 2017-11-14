import css from 'styled-jsx/css'

export default css`
  .search-box {
    text-align: center;
  }

  .search-box h1 {
    color: #fff;
    font-size: 32px;
  }

  .search-box input[type='search'] {
    color: white;
    display: block;
    width: 100%;
    background: transparent;
    border: none;
    border-bottom: 1px solid white;
  }

  .search-box button:focus,
  .search-box input[type='search']:focus {
    outline: none;
  }

  .search-box button {
    color: #fff;
    padding: 10px;
    margin-top: 10px;
    background: #131c2b;
    border: none;
    user-select: none;
  }
`
