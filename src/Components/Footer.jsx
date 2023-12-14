import React from 'react'
import { cseer } from '../Assets'

const Footer = () => {
  return (
    <div>
      <footer class="bg-black/50 p-4 md:p-12 space-y-8">
        <div class="flex mx-2 md:mx-12 justify-between items-center gap-8">
          <div>
            <ul class="text-white space-y-4">
              <li>
                <a
                  href="https://cseersdao.com/about"
                  aria-label="Our product"
                  >About</a
                >
              </li>
              <li>
                <a
                  href="https://medium.com/@CseersDao"
                  aria-label="Our product"
                  >Blog</a
                >
              </li>
              <li>
                <a
                  href="https://cseersdao.com/clumsy-astro-master/"
                  aria-label="Product pricing"
                  >Play</a
                >
              </li>
              <li>
                <a href="https://cseersdao.com/cseersai" aria-label="About us" 
                  >CSeersAI</a
                >
              </li>
              <li>
                <a href="./" aria-label="About us" 
                  >RMC</a
                >
              </li>
            </ul>
          </div>
          <div>
            <img src={cseer} alt="cseer" />
          </div>
        </div>

        <div class="text-white text-center">
          <p>© CSeersDAO. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer