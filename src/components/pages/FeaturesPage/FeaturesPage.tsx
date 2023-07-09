import React from 'react';
import s from './FeaturesPage.module.css'
import Card, { CardProps } from './Card/Card';
import Layout from '@theme/Layout';

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
