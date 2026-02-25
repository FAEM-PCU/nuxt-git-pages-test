<!--script>
  const getJSON = async url => {
    const response = await fetch(url);
    if(!response.ok) // check if response worked (no 404 errors etc...)
      throw new Error(response.statusText);

    const data = response.json(); // get JSON from the response
    return data; // returns a promise, which resolves to this data value
  }
  let data = getJSON("https://api.are.na/v3/channels/interface-flpda1x2qq8/contents").then(data => {
  //console.log(data);
}).catch(error => {
  console.error(error);
});

</script-->
<script setup lang="ts">
const { data: contents } = await useFetch('https://api.are.na/v3/channels/interface-flpda1x2qq8/contents')
</script>
<script lang="ts">
  export default {
  name: 'Hello',
  data() {
    let posts = []
    /*for (var i = contents.data.length - 1; i >= 0; i--) {
      contents.data[i]
    }*/
    return {
      posts
    }
  },
}
</script>


<template>
  <div>
    <h1>Website</h1>
    <p>The newest website.</p>
    <NuxtLink to="/blog/hello-world">
      <p>Go to blog post</p>
    </NuxtLink>
    <!--img :src='contents.data[8].image.src'-->
    <h2>types</h2>
    <div v-for='post in contents.data'>
      {{post.type}}
      <img v-if="post.type ==='Image'"
      :src='post.image.src'>
    </div>
    
  </div>
</template>


