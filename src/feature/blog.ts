import BlogSchema from '@/schema/blog'
import BlogService from '@/service/blog'

class Blog {
  services: BlogService
  schema: BlogSchema

  constructor() {
    this.services = new BlogService()
    this.schema = new BlogSchema()
  }
}

const blog = new Blog()

export default blog
