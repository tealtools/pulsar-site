import React from 'react';
import s from './FeaturesPage.module.css'
import Card, { CardProps } from './Card/Card';
import Layout from '@theme/Layout';
import { Dvr } from '@mui/icons-material';

export type FeaturesPageProps = {};

const cards: CardProps[] = [
  {
    className: s.RapidHorizontalScalabilityCard,
    rightContent: (
      <div>
        <h3>Rapid Horizontal Scalability</h3>
        <p className={s.RapidHorizontalScalabilityCardFirstParagraph}>
          Scales horizontally to handle the increased load. Its unique <a target='_blank' href='https://pulsar.apache.org/docs/concepts-architecture-overview/'>design</a> and separate storage layer enable controlling the sudden surge in traffic by scaling out in seconds.
        </p>
      </div>
    ),
    showMore: {
      position: 'right',
      rightContent: (
        <p className={s.SmallText}>
          Apache Pulsar server - the Broker - does not persist a received message to a file on the local disk. Instead, it writes the message to another system called <a target='_blank' href='https://bookkeeper.apache.org/'>Apache Bookkeeper </a> - which can be shortly described as a distributed (multiple nodes) append-only virtual-file storage. The message is written to such append-only virtual file, a.k.a. Ledger. This design makes Pulsar’s broker stateless; hence upon sudden surge in traffic, it can scale out in seconds - adding more nodes and spreading the topics among them automatically (see load balancer feature below), without any data movement needed in Pulsar.
          A topic is, in fact, a list of ledgers (virtual append-only files). The active ledger is closed each configurable size/time, and a new one is opened and used.
          Apache Bookkeeper can also scale out in seconds. When adding nodes, no data movement is required. Since actively written topics keep replacing their active ledger, the new bookkeeper nodes are also selected, as part of a uniform selection process to host new files, hence balancing out the message writes. This means the new nodes help balance the high surge of traffic immediately.
        </p>
      )
    }
  },
  {
    className: s.LowLatencyCard,
    leftContent: (
      <div>
        <h3>Low-latency, messaging and streaming</h3>
        <p className={s.LowLatencyCardFirstParagraph}>
          Acknowledge messages individually (RabbitMQ style) or cumulative per partition (i.e., offset-like). Enables use cases such as distributed work queues or order-preserving data streams at massive scales (hundreds of nodes) and low latency (&lt;10ms).
        </p>
      </div>
    ),
    showMore: {
      position: 'left',
      bottomContent: (
        <div>
          <p className={s.LowLatencyCardSingleColumn}>
            <strong>Pulsar offers writing messages to topics and partitioned topics (topics divided into partitions). Messages can be consumed in multiple ways:</strong>
          </p>
          <div className={s.LowLatencyCardColumns}>
            <div>
              <div>
                <h6>Streaming</h6>
                <p className={s.SmallText}>In order, by partition, and acknowledge them cumulatively (up to a specific message ID for a specific partition), similar to the way Apache Kafka works.</p>
              </div>
            </div>
            <div>
              <div>
                <h6>Messaging</h6>
                <p className={s.SmallText}>Out of order, acknowledging each message individually, similar to the way RabbitMQ works. This enables having vast amounts of consumers concurrently regardless of partition count. Perfect for distributed work queues (i.e., jobs) and accelerating machine learning workloads.</p>
              </div>
            </div>
            <div>
              <div>
                <h6>Messaging in-order</h6>
                <p className={s.SmallText}>In order, by key. You can have as many consumers as needed concurrently. The broker divides the keys equally between the consumers, and all messages for a particular key will arrive at the same single consumer associated with that key. This preserves the ordering of message processing by key.</p>
              </div>
            </div>
          </div>
          <div className={s.LowLatencyCardSingleColumn}>
            <p className={s.SmallText}>
              All of this is supported at very low latency (&lt;10 ms), both for producing messages and end-to-end latency, and large scale (hundreds of nodes) cluster.
            </p>
          </div>
        </div>
      )
    }
  },
  {
    className: s.SupportManyTopicsCard,
    leftContent: (
      <div>
        <h3>Supports up to 1M topics</h3>
        <p className={s.SupportManyTopicsCardFirstParagraph}>
          Pulsar's unique architecture supports up to 1 million topics in a single cluster. Simplify your architecture by avoiding multiplexing multiple streams into a single topic.
        </p>

        <p className={s.SmallText}>
          Pulsar persists the messages into a virtual append-only file, a.k.a. Ledger, stored in Apache Bookkeeper (a separate system). Since it’s not an active physical file per topic, Pulsar is not constrained by file descriptors limit; hence it allows having up to 1 million topics. This can support unique, simplified architectures or your applications. Compare this with traditional systems, which force you to multiplex many streams into a single topic, making your application cumbersome. The Cogito case study presented at Pulsar Summit is a great example.
        </p>
      </div>

    )
  },
  {
    className: s.MultiTenancyCard,
    leftContent: (
      <div>
        <h3 className={s.MultiTenancyCardHeader}>Multi-tenancy as a first-class citizen</h3>

        <p className={s.MultiTenancyCardFirstParagraph}>
          Maintain one cluster for your entire organization using tenants. Control which user has access across data (namespaces/topics) and actions (produce/consume/…).
        </p>
      </div>
    ),
    showMore: {
      position: 'left',
      leftContent: (
        <p className={s.SmallText}>
          <a target="_blank" href="https://pulsar.apache.org/docs/concepts-multi-tenancy/">Tenants</a> in Pulsar exist to divide the data in Pulsar into sections. A tenant holds namespaces which in turn hold topics and Pulsar Functions. Organizations typically give each department/team its tenant, in which they create namespaces per domain they own and topics for the implementation they need for that domain.<br />
          Tenants are primarily used in combination with the Granular Access Control feature. A tenant has a list of Tenant Admin users who can <a target='_blank' href='https://pulsar.apache.org/docs/admin-api-permissions/'>grant permissions</a> like produce/consume/functions/… on a specific namespace or topic to particular users. Tenants also enable configuring a specific <a target='_blank' href="https://pulsar.apache.org/docs/security-overview/#authentication">authentication plugin</a>, allowing, for example, to have one tenant authenticate using <a target='_blank' href='https://pulsar.apache.org/docs/security-jwt/'>JWT</a> and another using <a target="_blank" href="https://pulsar.apache.org/docs/security-tls-authentication/">mTLS</a>.<br />
          Lastly, a tenant can be <a target="_blank" href="https://pulsar.apache.org/docs/admin-api-tenants/#create">restricted</a> to a specific cluster if a Pulsar instance has multiple clusters.<br />
          Tenants enable departments in an organization to self-service regarding the security of their data and actions on it.
        </p>
      )
    }
  },
  {
    className: s.LoadBalancingCard,
    leftContent: (
      <div>
        <h3>Automatic Load Balancing</h3>

        <p className={s.LoadBalancingCardFirstParagraph}>
          Add or remove nodes and let Pulsar load balance topic bundles automatically. Hot spotted topic bundles are automatically split and evenly distributed across the brokers.
        </p>
      </div>
    ),
    showMore: {
      position: 'left',
      leftContent: (
        <p className={s.SmallText}>
          Pulsar supports automatic <a target="_blank" href='https://pulsar.apache.org/docs/administration-load-balance/'>load balancing</a> topics across brokers to reach a balanced broker load in CPU, memory, and traffic. This is possible since Pulsar brokers are stateless, hence do not need any data movement when a topic moves between brokers.<br />
          Since Pulsar supports up to 1 million topics, the unit of balancing is not a topic but a topic bundle (a group of topics selected using hashing). The load balancer moves bundles across brokers, which moves all topics associated with the bundle between brokers.<br />
          When a bundle is under extreme load, an <a target='_blank' href='https://pulsar.apache.org/docs/administration-load-balance/'>automatic split </a> occurs to allow balancing the load of that bundle across two bundles, which can go on in succession until a balanced cluster is reached.
        </p>
      )
    }
  },
  {
    className: s.K8sReadyCard,
    leftContent: (
      <div>
        <h3>K8s Ready<br />(Cloud-native)</h3>
        <p>
          Pulsar was built for the cloud from day one. Both Pulsar and Bookkeeper nodes can scale up quickly as Pulsar is stateless, and Bookkeeper was designed to avoid data reshuffling while still utilizing all newly joined nodes.
        </p>
      </div>
    ),
    rightContent: (
      <div>
        <p className={s.SmallText}>
          <strong>Scale-up is natively supported:</strong><br />
          The Pulsar broker is stateless (messages are stored in Bookkeeper); hence scaling up is immediate since there is no data move to the new brokers. Pulsar has automatic load balancing, so new nodes will automatically get new topics evenly balanced across the cluster.<br />
          Apache Bookkeeper supports scaling up natively since it doesn’t reshuffle data when starting new nodes. A topic in Pulsar is a chain of ledgers, where the last one is the active one. The active ledger is rotated quite rapidly, which means the new Bookkeeper nodes will almost immediately share the load of incoming messages.<br />
          <br />
          Pulsar comes bundled with k8s helm charts, which contains all the components needed to operate: Pulsar brokers, Bookkeeper, Zookeeper, Function Workers, and more.
        </p>
      </div>
    )
  },
  {
    className: s.GeoReplicationCard,
    leftContent: (
      <div>
        <h3>Seamless Geo-Replication</h3>
        <p>Protect against complete zone outages using replication across different geographic regions. Flexible and configurable replication strategies across distant Pulsar Clusters. Uniquely supports automatic client failover to healthy clusters.</p>
      </div>
    ),
    showMore: {
      position: 'left',
      bottomContent: (
        <div className={s.GeoReplicationCardColumns}>
          <div>
            <p className={s.SmallText}>
              Pulsar supports the notion of a <a target='_blank' href='https://pulsar.apache.org/docs/concepts-architecture-overview/'>Pulsar Instance</a>: A set of Pulsar Clusters, each aware of each other due to a single global metadata store (i.e., ZK). You define a <a target='_blank' href='https://pulsar.apache.org/docs/concepts-replication/#replication-mechanisms'>replication policy</a> between the clusters: <a target='_blank' href='https://pulsar.apache.org/docs/concepts-replication/#active-active-replication'>active-standby</a>, active-active, and more. This allows you to have each cluster in a different region, achieving geo-replication out of the box. It provides you with data redundancy and disaster recovery.
            </p>
          </div>
          <div>
            <p className={s.SmallText}>
              The cluster replicates the data (messages) and the <a target='_blank' href='https://pulsar.apache.org/docs/administration-geo/#replicated-subscriptions'>subscription</a> (consumer acknowledgment state).<br />
              If that’s not enough, Pulsar clients support <a target='_blank' href='https://pulsar.apache.org/docs/concepts-cluster-level-failover/'>automatic failover</a>. If it detects that the primary cluster (using a designated URL to check that) is down, it automatically fails over to the secondary cluster. Since the data and consumption state (subscription) is replicated, you simply pick up where you left off on the primary cluster.
            </p>
          </div>
        </div>
      )
    }
  }
];

const FeaturesPage: React.FC<FeaturesPageProps> = (props) => {
  return (
    <Layout
      title='Features'
      description='Apache Pulsar features overview.'
    >
      <div className={s.FeaturesPage}>
        <div className={s.Cards}>
          <section className={s.Intro}>
            <h1 className={s.IntroTextA}>
              Pulsar Features
            </h1>
            <h2 className={s.IntroTextB}>
              The complete platform for messaging and streaming.
            </h2>
            <p className={s.IntroTextC}>
              The combination of features that makes Apache Pulsar more than just a message broker.
            </p>
          </section>

          {cards.map((card, i) => (
            <div key={i} className={s.Card}>
              <Card {...card} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default FeaturesPage;
