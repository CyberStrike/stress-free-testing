import ProductCard from './ProductCard.vue'

// A Vite-specific parameter to resolve the url of your image.
import TypewriterUrl from '../assets/typewriter.jpg?url'

const id = 'typewriter'
const img = {
  alt: 'A vintage typewriter on a white background.',
  src: TypewriterUrl,
}

const description = `Vintage Typewriter to post awesome stories about UI design and webdev.`
const price = '$49.50'
const additional = 'Eligible for Shipping To Mars or somewhere else.'
const rating = 4.67

const selector = `[data-test="${id}"]`


describe('<ProductCard />', () => {
  beforeEach(() => {
    cy.mount(ProductCard, { props: {
      id,
      img,
      description,
      price,
      additional,
      rating,
    }})
  })

  it('mounts', () => {
    cy.get(selector)
  })

  it('renders a description', () => {
    cy.get(selector).findByText(description)
  })

  it('renders image', () => {
    cy.get('img').should('have.attr', 'src', img.src)
    cy.get('img').should('have.attr', 'alt', img.alt)
  })

  it('renders price', () => {
    cy.get(selector)
      .find('[data-test=product-price]')
        .should('contain.text', price)
  })


  it('can be watched', () => {
    cy.get(selector)
      .find('[data-test=watch]')
        .click()

    cy.get(selector)
        .find('[data-test=watch]')
        .should('contains.text', '')
  })
})
