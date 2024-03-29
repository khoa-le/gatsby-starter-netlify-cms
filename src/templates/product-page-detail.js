import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import Layout from '../components/Layout'
import Content, {HTMLContent} from '../components/Content'


export const ProductDetailPageTemplate = ({
                                        image,
                                        title,
                                        content,
                                        contentComponent
                                    }) => {
    const ProductContent = contentComponent || Content
    return (
        <div className="content">
            <div
                className="full-width-image-container margin-top-0"
                style={{
                    backgroundImage: `url(${
                        !!image.childImageSharp ? image.childImageSharp.fluid.src : image
                    })`,
                }}
            >
                <h2
                    className="has-text-weight-bold is-size-1"
                    style={{
                        boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
                        backgroundColor: '#f40',
                        color: 'white',
                        padding: '1rem',
                    }}
                >
                    {title}
                </h2>
            </div>
            <section className="section section--gradient">
                <div className="container">
                    <div className="section">
                        <div className="columns">
                            <div className="column is-7 is-offset-1">
                                <ProductContent content={content}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

ProductDetailPageTemplate.propTypes = {
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    title: PropTypes.string,
    heading: PropTypes.string,
    content: PropTypes.string,
}

const ProductPageDetail = ({data}) => {
    const {frontmatter,html} = data.markdownRemark


    return (
        <Layout>
            <ProductDetailPageTemplate
                image={frontmatter.image}
                title={frontmatter.title}
                heading={frontmatter.heading}
                contentComponent={HTMLContent}
                content={html}
            />
        </Layout>
    )
}

ProductPageDetail.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
            html: PropTypes.string,
        }),
    }),
}

export default ProductPageDetail

export const productPageQuery = graphql`
    query ProductPageDetail($id: String!) {
        markdownRemark(id: { eq: $id }) {
            frontmatter {
                title
                image {
                    childImageSharp {
                        fluid(maxWidth: 2048, quality: 100) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
            html
        }
    }
`
