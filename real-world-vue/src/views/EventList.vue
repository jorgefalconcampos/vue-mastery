<template>
  <div class="events">
    <h1>Events for good</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from "@/components/EventCard.vue";

export default {
  name: "EventList",
  components: {
    EventCard,
  },
  data() {
    return {
      events: [
        {
          id: 12345,
          category: "animal welfare",
          description: "Join us today!",
          location: "People's park",
          title: "Cat adoption",
          date: "January 28, 2022",
          time: "12: 00",
          petsAllowed: true,
          organizer: "Pepe Campa",
        },
        {
          id: 100001,
          category: "animal welfare",
          description: "Join us today!",
          location: "People's park",
          title: "Cat adoption",
          date: "January 28, 2022",
          time: "12: 00",
          petsAllowed: true,
          organizer: "Pepe Campa",
        },
        {
          id: 2332100001,
          category: "animal welfare",
          description: "Join us today!",
          location: "People's park",
          title: "Cat adoption",
          date: "January 28, 2022",
          time: "12: 00",
          petsAllowed: true,
          organizer: "Pepe Campa",
        },
      ],
    };
  },
};
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
