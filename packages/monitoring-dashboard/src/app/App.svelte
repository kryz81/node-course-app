<script>
    import io from 'socket.io-client';

    const socket = io('http://localhost:3020');

    socket.on('connect', () => console.log('Connected'));
    socket.on('disconnect', () => console.log('Disconnected'));

    socket.on('data', (data) => {
      console.log(data);
    });

</script>

<div>It works</div>
