searchState.loadedDescShard("quiche", 0, "🥧 Savoury implementation of the QUIC transport protocol …\nBBR congestion control algorithm. <code>bbr</code> in a string form.\nBBRv2 congestion control algorithm. <code>bbr2</code> in a string form.\nLogs any events of Core and Base importance.\nThe provided buffer is too short.\nCUBIC congestion control algorithm (default). <code>cubic</code> in a …\nThe related network path between local <code>SocketAddr</code> and peer …\nStores configuration shared between multiple connections.\nError in congestion control.\nAvailable congestion control algorithms.\nA QUIC connection.\nRepresents information carried by <code>CONNECTION_CLOSE</code> frames.\nA QUIC connection ID.\nLogs any events of Core importance.\nThe peer sent more data in CRYPTO frames than we can …\nA cryptographic operation failed.\nThere is no more work to do.\nContains the error value\nA QUIC error.\nLogs any events of Core, Base and Extra importance\nThe related network path between local <code>SocketAddr</code> and peer …\nThe received data exceeds the stream’s final size.\nThe peer violated the local flow control limits.\nHandshake packet.\nA QUIC packet’s header.\nToo many identifiers were provided.\nInitial packet.\nThe provided packet cannot be parsed because it contains …\nThe provided packet cannot be parsed.\nThe operation cannot be completed because the connection …\nThe operation cannot be completed because the stream is in …\nThe peer’s transport params cannot be parsed.\nError in key update.\nThe maximum length of a connection ID.\nThe minimum length of Initial packets sent by a client.\nA new network path (local address, peer address) has been …\nContains the success value\nNot enough available identifiers.\nThe current QUIC wire version.\nA path-specific event.\nStatistics about the path of a connection.\nThe connection observed that the peer migrated over the …\nQlog logging level.\nStop receiving stream data.\nAncillary information about incoming packets.\nReno congestion control algorithm. <code>reno</code> in a string form.\nA specialized <code>Result</code> type for quiche operations.\nRetry packet.\nThe stack observes that the Source Connection ID with the …\nAncillary information about outgoing packets.\n1-RTT short header packet.\nThe side of the stream to be shut down.\nAn iterator over SocketAddr.\nStatistics about the connection.\nAn iterator over QUIC streams.\nThe peer violated the local stream limits.\nThe specified stream was reset by the peer.\nThe specified stream was stopped by the peer.\nThe TLS handshake failed.\nQUIC Transport Parameters\nQUIC packet type.\nThe provided packet cannot be parsed because its version …\nThe related network path between local <code>SocketAddr</code> and peer …\nVersion negotiation packet.\nStop sending stream data.\n0-RTT packet.\nCreates a new server-side connection.\nThe ACK delay exponent.\nWhether the path is marked as active.\nThe active connection ID limit.\nReturns the number of source Connection IDs that are …\nReturns the negotiated ALPN protocol.\nThe time to send the packet out.\nReturns the number of spare Destination Connection IDs, …\nCloses the connection with the given error and reason.\nCreates a new client-side connection.\nThe size of the connection’s congestion window in bytes.\nThe destination connection ID of the packet.\nThe most recent data delivery rate estimate in bytes/s.\nReturns the destination connection ID.\nReturns the maximum DATAGRAM payload that can be sent.\nPurges queued outgoing DATAGRAMs matching the predicate.\nReads the first received DATAGRAM.\nReturns the length of the first stored DATAGRAM.\nReads the first received DATAGRAM without removing it from …\nReturns the total size of all items in the DATAGRAM …\nReturns the number of items in the DATAGRAM receive queue.\nReads the first received DATAGRAM.\nSends data in a DATAGRAM frame.\nReturns the total size of all items in the DATAGRAM send …\nReturns the number of items in the DATAGRAM send queue.\nSends data in a DATAGRAM frame.\nWhether active migration is disabled.\nConfigures whether to do path MTU discovery.\nConfigures whether to enable receiving DATAGRAM frames.\nEnables sending or receiving early data.\nConfigures whether to enable HyStart++.\nConfigures whether to enable pacing.\nThe error code carried by the <code>CONNECTION_CLOSE</code> frame.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nThe remote address the packet was received from.\nThe local address the packet should be sent from.\nCreates a new connection ID from the given slice.\nParses a QUIC packet header from the given buffer.\nConverts a string to <code>CongestionControlAlgorithm</code>.\nCreates a new connection ID from the given vector.\nConfigures whether to send GREASE values.\nHTTP/3 wire protocol and QPACK implementation.\nThe initial flow control maximum data for the connection.\nThe initial flow control maximum data for local …\nThe initial flow control maximum data for remote …\nThe initial flow control maximum data for unidirectional …\nThe initial maximum bidirectional streams.\nThe initial maximum unidirectional streams.\nThe value that the endpoint included in the Source CID …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns a new owning connection ID from the given existing …\nWhether the error came from the application or the …\nReturns true if the connection is closed.\nReturns whether or not the DATAGRAM recv queue is full.\nReturns whether or not the DATAGRAM send queue is full.\nReturns true if the connection is draining.\nReturns true if the connection handshake is complete.\nReturns true if the connection has a pending handshake …\nReturns whether the network path with local address <code>from</code> …\nReturns whether there is stream or DATAGRAM data available …\nReturns true if the connection is resumed.\nReturns whether or not this is a server-side connection.\nReturns true if the connection was closed due to the idle …\nConfigures the given certificate chain.\nConfigures the given private key.\nSpecifies a directory where trusted CA certificates are …\nSpecifies a file where trusted CA certificates are stored …\nThe local address of the path.\nReturns the error <code>close()</code> was called with, or internally …\nEnables logging of secrets.\nThe number of QUIC packets that were lost.\nThe number of QUIC packets that were lost.\nThe number of bytes sent lost.\nThe number of bytes lost.\nThe max ACK delay.\nDATAGRAM frame extension parameter, if any.\nThe maximum idle timeout.\nReturns the maximum possible size of egress UDP payloads.\nThe maximum UDP payload size.\nMigrates the connection over the given network path …\nMigrates the connection to a new local address <code>local_addr</code>.\nThe minimum round-trip time observed.\nWrites a version negotiation packet.\nCreates a config object with the given version.\nProvides additional source Connection IDs that the peer …\nProcesses a timeout event.\nValue of Destination CID field from first Initial packet …\nThe total number of PATH_CHALLENGE frames that were …\nProcesses path-specific events.\nCollects and returns statistics about each known path for …\nThe number of known paths for the connection.\nReturns an iterator over destination <code>SockAddr</code>s whose …\nThe peer address of the path.\nReturns the peer’s leaf certificate (if any) as a …\nReturns the peer’s certificate chain (if any) as a …\nReturns the error received from the peer, if any.\nReturns the number of bidirectional streams that can be …\nReturns the number of unidirectional streams that can be …\nReturns reference to peer’s transport parameters. …\nThe current PMTU for the connection.\nRequests the stack to perform path validation of the …\nReturns a mutable reference to the QlogStreamer, if it …\nReturns an iterator over streams that have outstanding …\nThe reason carried by the <code>CONNECTION_CLOSE</code> frame.\nProcesses QUIC packets received from the peer.\nThe number of QUIC packets received.\nThe number of QUIC packets received.\nThe number of received bytes.\nThe number of received bytes.\nThe number of streams reset by local.\nThe number of streams reset by remote.\nRequests the retirement of the destination Connection ID …\nReturns a source <code>ConnectionId</code> that has been retired.\nReturns the number of source Connection IDs that are …\nThe number of sent QUIC packets with retransmitted data.\nThe number of sent QUIC packets with retransmitted data.\nWrites a stateless retry packet.\nThe value that the server included in the Source CID field …\nThe estimated round-trip time of the connection.\nThe estimated round-trip time variation in samples using a …\nThe source connection ID of the packet.\nReturns the number of source Connection IDs that should be …\nWrites a single QUIC packet to be sent to the peer.\nSchedule an ack-eliciting packet on the active path.\nSchedule an ack-eliciting packet on the specified path.\nWrites a single QUIC packet to be sent to the peer from …\nReturns the size of the send quantum, in bytes.\nReturns the size of the send quantum over the given …\nThe number of QUIC packets sent.\nThe number of QUIC packets sent.\nThe number of sent bytes.\nThe number of sent bytes.\nReturns the server name requested by the client.\nReturns the serialized cryptographic session for the …\nSets the <code>ack_delay_exponent</code> transport parameter.\nSets the <code>active_connection_id_limit</code> transport parameter.\nConfigures the list of supported application protocols.\nConfigures the list of supported application protocols …\nSets the congestion control algorithm used.\nSets the congestion control algorithm used by string.\nSets the <code>disable_active_migration</code> transport parameter.\nSets whether the QUIC connection should avoid reusing …\nSets initial congestion window size in terms of packet …\nSets the <code>initial_max_data</code> transport parameter.\nSets the <code>initial_max_stream_data_bidi_local</code> transport …\nSets the <code>initial_max_stream_data_bidi_remote</code> transport …\nSets the <code>initial_max_stream_data_uni</code> transport parameter.\nSets the <code>initial_max_streams_bidi</code> transport parameter.\nSets the <code>initial_max_streams_uni</code> transport parameter.\nSets keylog output to the designated <code>Writer</code>.\nSets the <code>max_ack_delay</code> transport parameter.\nSets the maximum size of the connection window.\nSets the <code>max_idle_timeout</code> transport parameter, in …\nSets the max value for pacing rate.\nSets the <code>max_udp_payload_size transport</code> parameter.\nSets the maximum outgoing UDP payload size.\nSets the maximum size of the stream window.\nConfigures the max number of queued received …\nSets qlog output to the designated <code>Writer</code>.\nSets qlog output to the designated <code>Writer</code>.\nConfigures the given session for resumption.\nSets the initial stateless reset token.\nConfigures the session ticket key material.\nReturns the source connection ID.\nReturns all active source connection IDs.\nToken used for verifying stateless resets\nCollects and returns statistics about the connection.\nThe number of streams stopped by local.\nThe number of streams stopped by remote.\nReturns the stream’s send capacity in bytes.\nReturns true if all the data has been read from the …\nSets the priority for a stream.\nReturns true if the stream has data that can be read.\nReturns the next stream that has data to read.\nReads contiguous data from a stream into the provided …\nThe number of stream bytes retransmitted.\nThe number of stream bytes retransmitted.\nWrites data to a stream.\nShuts down reading or writing from/to the specified stream.\nReturns true if the stream has enough send capacity.\nReturns the next stream that can be written to.\nReturns the amount of time until the next timeout event.\nReturns when the next timeout event will occur.\nThe local address the packet was received on.\nThe remote address the packet should be sent to.\nCreates a qlog event for connection transport parameters …\nThe address verification token of the packet. Only present …\nReturns a string uniquely representing the connection.\nThe type of the packet.\nThe path validation state.\nConfigures whether to verify the peer’s certificate.\nThe version of the packet.\nReturns true if the given protocol version is supported.\nThe list of versions in the packet. Only present in …\nCreates a config object with the given version and …\nReturns an iterator over streams that can be written in …\nList of ALPN tokens of supported HTTP/3 versions.\nThe provided buffer is too short.\nA required critical stream was closed.\nAn HTTP/3 configuration.\nThe TCP connection established in response to a CONNECT …\nAn HTTP/3 connection.\nData was received.\nThere is no error or no work to do\nContains the error value\nAn HTTP/3 error.\nAn HTTP/3 connection event.\nEndpoint detected that the peer is exhibiting behavior …\nStream was closed,\nFrame violated layout or size rules.\nA frame was received which is not permitted in the current …\nGOAWAY was received.\nAn owned name-value pair representing a raw HTTP header.\nA non-owned name-value pair representing a raw HTTP header.\nRequest/response headers were received.\nStream ID or Push ID greater that current maximum was used …\nInternal error in the HTTP/3 stack.\nAn HTTP message was malformed and cannot be processed.\nNo SETTINGS frame at beginning of control stream.\nA trait for types with associated string name and value.\nContains the success value\nExtensible Priorities parameters.\nPRIORITY_UPDATE was received.\nQPACK Header block decompression failure.\nRequest or its response cancelled.\nClient’s request stream terminated without containing a …\nServer rejected request.\nStream was reset.\nA specialized <code>Result</code> type for quiche HTTP/3 operations.\nError in the payload of a SETTINGS frame.\nThe underlying QUIC stream (or connection) doesn’t have …\nThe endpoint detected that its peer created a stream that …\nError originated from the transport layer.\nThe requested operation cannot be served over HTTP/3. Peer …\nReturns whether the peer enabled HTTP/3 DATAGRAM frame …\nSets or omits the <code>SETTINGS_ENABLE_CONNECT_PROTOCOL</code> setting.\nReturns whether the peer enabled extended CONNECT support.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGenerates an HTTP/3 GREASE variable length integer.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns the object’s name.\nCreates a new configuration object with default settings.\nCreates a new header.\nCreates a new header.\nCreates a new Priority.\nGets the raw settings from peer including unknown and …\nProcesses HTTP/3 data received from the peer.\nReads request or response body data into the provided …\nSends an HTTP/3 body chunk on the given stream.\nSends a GOAWAY frame to initiate graceful connection …\nSends a PRIORITY_UPDATE frame on the control stream with …\nSends an HTTP/3 request.\nSends an HTTP/3 response on the specified stream with …\nSends an HTTP/3 response on the specified stream with …\nSets additional HTTP/3 settings.\nSets the <code>SETTINGS_MAX_FIELD_SECTION_SIZE</code> setting.\nSets the <code>SETTINGS_QPACK_BLOCKED_STREAMS</code> setting.\nSets the <code>SETTINGS_QPACK_MAX_TABLE_CAPACITY</code> setting.\nTake the last PRIORITY_UPDATE for a prioritized element ID.\nTry to parse an Extensible Priority field value.\nReturns the object’s value.\nCreates a new HTTP/3 connection using the provided QUIC …\nWhether data will follow the headers on the stream.\nThe list of received header fields. The application should …")