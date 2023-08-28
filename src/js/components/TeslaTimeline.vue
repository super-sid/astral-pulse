<template>
  <div class="timeline">
    <h2>Timeline of Nikola Tesla's Life</h2>
    <ul>
      <li v-for="event in events" :key="event.date">
        {{ event.date }} - {{ event.description }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      events: [
        { date: '1856-07-10', description: 'Born in Smiljan, Croatia' },
        { date: '1865-09-02', description: 'Moved to America with his family' },
        { date: '1884-03-01', description: 'Patented the first alternating current (AC) motor' },
        { date: '1887-06-01', description: 'Formed the Tesla Electric Light & Manufacturing Company' },
        { date: '1893-02-18', description: 'Demonstrated wireless telegraphy for the first time' },
        { date: '1900-04-07', description: 'Formed the Niagara Falls Power Company' },
      ],
    };
  },
};
</script>