import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {
  newsArticles = [
    {
      title: 'Coming Soon',
      imageUrl: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=600&h=400&q=80', // Imagine BMW M4
      content: 'Latest automotive news and updates will be featured here. Stay tuned for breaking stories from the car industry. We\'re preparing comprehensive coverage of upcoming auto shows and exclusive interviews.'
    },
    {
      title: 'Industry Updates',
      imageUrl: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=600&q=80', // Imagine Ferrari
      content: 'Get insights into market trends, manufacturer announcements, and technological advancements in the automotive sector. From electric vehicle adoption rates to autonomous driving developments.'
    },
    {
      title: 'Reviews & Analysis',
      imageUrl: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=600&q=80', // Imagine alt Ferrari
      content: 'In-depth analysis of new car releases, performance reviews, and expert opinions on the latest automotive innovations. Our team provides comprehensive testing reports and compares specifications.'
    },
    {
      title: 'The Return of a Legend',
      imageUrl: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=80', // Imagine Chevrolet Corvette
      content: 'Chevrolet has confirmed the production of a new mid-engine Corvette variant, promising record-breaking track times and an unprecedented driving experience for enthusiasts.'
    },
    {
      title: 'Sustainability Meets Performance',
      imageUrl: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=600&q=80', // Imagine Tesla Model S
      content: 'Electric hypercars are taking over. We analyze the newest contenders in the market that manage to deliver over 1000 horsepower while maintaining a zero-emission footprint.'
    },
    {
      title: 'Classic Cars Market Boom',
      imageUrl: 'https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&w=600&h=400&q=80', // Imagine Porsche clasic
      content: 'Vintage sports cars have seen a massive 30% increase in auction values over the past year. What is driving this sudden surge in collector interest?'
    }
  ];
}