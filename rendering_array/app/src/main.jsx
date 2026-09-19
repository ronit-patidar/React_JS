import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Add from './Add.jsx'
import Delete from './Delete.jsx'
import Transform from './Transform.jsx'
import Replace from './Replace.jsx'
import Insert from './Insert.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Insert />
  </StrictMode>,
)
