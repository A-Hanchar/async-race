import './index.css'

import { renderComponent } from 'router'

window.onpopstate = renderComponent
window.onhashchange = renderComponent
window.onload = renderComponent
