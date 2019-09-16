import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const ProductFeatureGrid = ({gridItems}) => (
    <div className="columns is-multiline">
        {gridItems.map(item => (
            <div key={item.text} className="column is-6">
                <section className="section">

                    <div className="has-text-centered">
                        <div
                            style={{
                                width: '240px',
                                display: 'inline-block',
                            }}
                        >

                            <a href={item.url}>
                                <PreviewCompatibleImage imageInfo={item}/>
                            </a>
                        </div>
                    </div>
                    <a href={item.url}><h3>{item.title}</h3></a>
                    <p>{item.text}</p>
                </section>
            </div>
        ))}
    </div>
)

ProductFeatureGrid.propTypes = {
    gridItems: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
            title: PropTypes.string,
            url: PropTypes.string,
            text: PropTypes.string,
        })
    ),
}

export default ProductFeatureGrid
