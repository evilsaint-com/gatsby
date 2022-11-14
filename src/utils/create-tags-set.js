function createTagsSet(tags)
{
    const tagsArrObj = tags.allMdx.nodes.map(obj => obj.frontmatter.tags ?  obj.frontmatter.tags.split(",") : null)
const tagsArr = []
for (let i = 0; i < tagsArrObj.length; i++)
{
    if (tagsArrObj[i])
    tagsArrObj[i].map(tag => tagsArr.push(tag))
}
const uniqueTagsSet = new Set(tagsArr)
return uniqueTagsSet;
}

export default createTagsSet
