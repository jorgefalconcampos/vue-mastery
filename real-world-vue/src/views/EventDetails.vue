<template>
  <div v-if="event">
      <h1>{{ event.title }}</h1>
    <span> @ {{ event.time }} on {{ event.date }}</span>
    <h4>{{ event.description }}</h4>
  </div>
</template>

<script>

import EventService from "@/services/EventService.js";

export default {
    props: ['id'],
    data() {
        return  {
            event: null,
        }
    },
    created() {
        EventService.getEvent(this.id)
        .then((response) => {
            // console.log("events", response.data);
            this.event = response.data; 
        })
        .catch((err) => {
            console.log(err)
        });
    }
}
</script>