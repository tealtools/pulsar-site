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
          Scales horizontally to handle the increased load. Its unique design and separate storage layer enable controlling the sudden surge in traffic by scaling out in seconds.
        </p>
      </div>
    ),
    showMore: {
      position: 'right',
      rightContent: (
        <p>
          Apache Pulsar server - the Broker - does not persist a received message to a file on the local disk. Instead, it writes the message to another system called Apache Bookkeeper - which can be shortly described as a distributed (multiple nodes) append-only virtual-file storage. The message is written to such append-only virtual file, a.k.a. Ledger. This design makes Pulsar’s broker stateless; hence upon sudden surge in traffic, it can scale out in seconds - adding more nodes and spreading the topics among them automatically (see load balancer feature below), without any data movement needed in Pulsar.
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
                <p>In order, by partition, and acknowledge them cumulatively (up to a specific message ID for a specific partition), similar to the way Apache Kafka works.</p>
              </div>
            </div>
            <div>
              <div>
                <h6>Messaging</h6>
                <p>Out of order, acknowledging each message individually, similar to the way RabbitMQ works. This enables having vast amounts of consumers concurrently regardless of partition count. Perfect for distributed work queues (i.e., jobs) and accelerating machine learning workloads.</p>
              </div>
            </div>
            <div>
              <div>
                <h6>Messaging in-order</h6>
                <p>In order, by key. You can have as many consumers as needed concurrently. The broker divides the keys equally between the consumers, and all messages for a particular key will arrive at the same single consumer associated with that key. This preserves the ordering of message processing by key.</p>
              </div>
            </div>
          </div>
          <div className={s.LowLatencyCardSingleColumn}>
            <p>
              All of this is supported at very low latency (&lt;10 ms), both for producing messages and end-to-end latency, and large scale (hundreds of nodes) cluster.
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
